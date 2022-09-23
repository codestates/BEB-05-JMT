//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./LiquidityPool.sol";

contract JMToken is ERC20 {
    event TokensBought(address indexed _account, uint256 amount); // 펀딩이후 토큰 클레임 
    event OwnerAction(); // 오너의 액션
    event FundsMoved(); // 펀딩 종료 
    event _MovedStakingReward();

    uint256 public MAX_SUPPLY; // 발행량 
    uint256 public constant TAX = 1; //  수수료 tx 1%
    uint256 public totalContributed; // 총 이더 기부금액 
    bool public isContractPaused; // 컨트랙트 동작 상태
    bool public fundsAlreadyMoved;
    bool public isTaxOn = true; // 현재 수수료 on off 
    address public owner; // 오너 
    address payable public treasuryWallet; // 비상금 계좌!
    address public Router;
    address public MapleNFT;
    address public MapleItems;
    address public winRewardAddr;
    uint winRewardAmount;
    uint randNum = 0;
    uint rewardProbability = 90;
    address public Staking;

    mapping(address => uint256) public balancesToClaim; // 투자금1:100 비율==jmt
    mapping(address => uint256) public contributionsOf; // 실제 기부금 eth
    mapping(address => bool) public isWhitelisted;

    event TokenRewarded(bool result);

    constructor(address payable treasury) ERC20("JMT Token", "JMT") {
        MAX_SUPPLY = 1000000 * 10**decimals(); 
        _mint(address(this), MAX_SUPPLY); 
        owner = msg.sender; 
        treasuryWallet = treasury; // 임시,현재는 오너 지갑
        isWhitelisted[owner] = true; // 오너 자동 화리  
    }

    modifier ownerOnly() {
        require(msg.sender == owner, "OWNER_ONLY");
        _;
    }

    modifier mapleNFTOnly(){
        require(msg.sender == MapleNFT || msg.sender == MapleItems, "MAPLENFT_ONLY");
        _;
    }
    // router 컨트랙트에서만 실행
    modifier routerOnly() {
        require(msg.sender == Router || msg.sender == MapleNFT || msg.sender == MapleItems, "ROUTER_OR_MAPLE_ONLY");
        _;
    }
    // 펀딩 종료 체크 
    modifier areFundsMoved() {
        require(!fundsAlreadyMoved, "FUNDS_MOVED_TO_LP");
        _;
    }

    // 컨트랙트 상태 
    modifier isPaused() {
        require(!isContractPaused, "CONTRACT_PAUSED");
        _;
    }


    // 첫 계약 제로 계정 배포자(0x0)와 같은지 확인, 딱 한번만 실행가능
    function setRouterAddress(address _router) external  ownerOnly {
        require(address(Router) == address(0), "WRITE_ONCE!"); // 0x00000000
        Router = _router;
    }
    function setMapleNFTAddress(address _mapleNft) external  ownerOnly {
        require(address(MapleNFT) == address(0), "WRITE_ONCE!");
        MapleNFT = _mapleNft;
    }
    function setMapleItemsAddress(address _mapleItems ) external  ownerOnly {
        require(address(MapleItems) == address(0), "WRITE_ONCE!");
        MapleItems = _mapleItems;
    }
    function setStakingAddress(address _staking ) external  ownerOnly {
        require(address(Staking) == address(0), "WRITE_ONCE!");
        Staking = _staking;
    }
  
    // 이더 펀딩 
    function contribute() external payable isPaused areFundsMoved {

        //교환 비율이 1:100
        uint256 tokenAmount = msg.value * 100;
        balancesToClaim[msg.sender] += tokenAmount;
        contributionsOf[msg.sender] += msg.value;
        totalContributed += msg.value; 
        emit TokensBought(msg.sender, tokenAmount);
    }
    
    // 펀딩 jmt토큰 클레임 
    function claimTokens() external isPaused areFundsMoved {
        require(balancesToClaim[msg.sender] > 0, "NO_AVAILABLE_FUNDS"); // 수령이 가능한 토큰을 보유하고있는지 체크 
        uint256 tokensToClaim = balancesToClaim[msg.sender];
        balancesToClaim[msg.sender] = 0;

        super._transfer(address(this), msg.sender, tokensToClaim); // 컨트랙트 -> sender 전송
    }

    //컨트랙트 pause스위치 
    function togglePauseContract() external ownerOnly {
        isContractPaused = !isContractPaused;
        emit OwnerAction();
    }

    // tx스위치 기본 : true
    function toggleTax() external ownerOnly {
        isTaxOn = !isTaxOn;
        emit OwnerAction();
    }

    // 화리에 유저 추가
    function addToWhitelist(address account) external ownerOnly {
        isWhitelisted[account] = true;
    }

    function _transfer(address sender, address recipient, uint256 amount) internal override {
        uint256 amountToTake;
        // tx계산
        if (isTaxOn) {
            amountToTake = (TAX * amount) / 100;
        }
        uint256 amountToTransfer = amount - amountToTake;
        // 수수료를 뺀만큼 전송 
        super._transfer(sender, recipient, amountToTransfer);
        // 수수료는 비상금으로 축적
        super._transfer(sender, treasuryWallet, amountToTake); 
    }

    function mint(address account, uint256 amount) external ownerOnly {
        require(account != address(0), "ERC20: mint to the zero address"); // 주소 전송 가능 여부 체크 
        require(totalSupply() + amount <= MAX_SUPPLY, "ABOVE_MAX_SUPPLY"); // 총발행량 체크 
        _mint(account, amount * 10**decimals());
    }
    
    function burn(address account, uint256 amount) external ownerOnly {
        _burn(account, amount * 10**decimals());
    }

    function marketBurn(address account, uint256 amount) external mapleNFTOnly {
        _burn(account, amount);

    }

    //tranferfrom에서 권한 부여
    //spender에게 토큰 거래 제한
    //라우터에서만 호출 가능 외부 컨트랙트를 통한 호출x 
    function increaseContractAllowance(address _owner,address _spender,uint256 _amount)  
        public routerOnly returns (bool) {
        // spender에게 토큰 사용 허용 토큰양 추척해서 거래 제한 ㄱ 
        // allowance 현재 제한 해제된 토큰 상황 return 
        _approve(
            _owner, // from
            _spender, // to
            allowance(msg.sender, address(this)) + _amount
        ); 
        return true;
    }

    // 펀딩 금액 -> lp로 전송,  최초 리저브생성 
    function sendLiquidityToLPContract(LiquidityPool liquidityPool) external ownerOnly areFundsMoved
    {
        fundsAlreadyMoved = true; //클레임불가

        // 이더 기부금 * 100 jmt 에어드랍
        uint256 jmtCoinAmountToTransfer = totalContributed * 100;

        // lp풀 JMT전송 
        super._transfer(
            address(this),
            address(liquidityPool),
            jmtCoinAmountToTransfer
        );

        //msg.value = totalContributed, 리저브 생성, 이더전송
        liquidityPool.deposit{value: totalContributed}(
            jmtCoinAmountToTransfer,
            address(this)
        );

        //펀딩 reserve_setting
        liquidityPool.setFundedReserve();

        sendRemainingFundsToTreasury();
    }
    //펀딩 이후 남은 토큰 재무 관련 지갑 전송
    //일단은 오너지갑으로, 소프트런 각?
    //실제 서비스시 오너지갑이라면 전쟁
    function sendRemainingFundsToTreasury() internal {
        MovedStakingReward();

        uint256 remainingJMT = balanceOf(address(this));
        super._transfer(address(this), address(treasuryWallet), remainingJMT);
        emit FundsMoved();
    }
    // staking reward 300,000개 발행 
    function MovedStakingReward() internal {
        uint256 remainingJMT = 300000 * 10**decimals();
        super._transfer(address(this), address(Staking), remainingJMT);
    }

    // 전투 랜덤 보상(토큰)
    function randMod(uint _modulus) internal returns(uint) { // 랜덤함수
        randNum++;
        return uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, randNum))) % _modulus;
    }

    function randRewardToken(address _addr, uint _amount) external {
        winRewardAddr = _addr;
        winRewardAmount = _amount;
        uint rand = randMod(100);
        if ( rand <= rewardProbability ) {// 90% 확률로 강화 스크롤 획득
            super._transfer(address(treasuryWallet), address(winRewardAddr), winRewardAmount); // JMT 토큰
            emit TokenRewarded(true);
        } else {
            emit TokenRewarded(false);
        }
    }

}