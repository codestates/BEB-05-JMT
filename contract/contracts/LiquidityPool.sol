//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./LPT.sol";
import "./JMToken.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "@uniswap/lib/contracts/libraries/Babylonian.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// indexed -> 이벤트에 인덱스를 걸어서 해당 변수로 필터링을 걸어 search가 가능함, 없으면 필터링 안댐 
// unchecked -> 저장용량의 한계로 인해서 발생할수 있는 overflow를 체크 하지않는다는말 -> 솔리디티는 모든 에러는 체크하는데 가스비가 사용하는데 사용시 
// 가스비를 절약할수있음 예를들어 시스템에서 정해진 타임스탬프를 찍어서 가져오는거라면 체인내에서 문제가 발생하는게 아니라면 정해진 범위내에 예상가능한 숫자만
// 나오기때문에 검사하지않아도 되기떄문에 unchecked안에 넣어서 체크를 안하게 할수있다 
/*
    스왑 방법 (Swap)
    예를 들어서 
    JMT token = 10000 
    ETH token = 20
    현재 LiquidityPool Reserve 상황은 위와 같음, 리저브는 보유량을 말함 
    A는 100 JMT 만큼의 ETH로 스왑 하고싶음 
    현재 풀의 상황은 10000*20 = 200000 가됨 
    하지만 A의 JMT100 만큼 추가되서 
    유동성 풀은 10100 이되고 10100*20 = 202000 가됨 
    
    하지만 기존 가치의 유동성풀은 200000으로 
    202000 추가된 JMT만큼 ETH를 풀에서 빼내야한다 
    그렇다면 
    풀의 크기는 x * 10100 = 200000 이 되어야한다는 말이다 (여기서 x는  eth 를 말함)
    그럼 x를 구하기 위해서는 x = 200000/10100 으로 구하게 되면 
    x = 19.8019082 eth가 되어야 된다 그러면 유저가 받을 토큰은 기존 (eth)reserve - x = 0.921980918 
    결과적으로 유저가 받을 eth는 0.921980918개가 된다 (여기서는 수수료 적용이 안된상태) 
*/
contract LiquidityPool is Ownable {
    event LiquidityAdded(address indexed _account);
    event LiquidityRemoved(address indexed _account);
    event TradedTokens(address indexed _account,uint256 _ethTraded,uint256 _jmtTraded);

    LPT lpToken; // 현재 lp풀 토큰 주소
    JMToken jmtToken;
    uint256 ethReserve; // 리저브 이더 
    uint256 jmtReserve;  // 리저브 jmt 
    uint32 lastBlockTimestamp;
    uint256 totalReserve; // 총 리저브 

    constructor () {
        ethReserve=0;
        jmtReserve=0;
    }

    modifier JonMatngOnly() {
        require(msg.sender == address(jmtToken), "JonMatng_ONLY");
        _;
    }
    // set funded reserve 
    function setFundedReserve() JonMatngOnly public {
        require(ethReserve != 0 && jmtReserve != 0,"RESERVE AMOUNT EMPTY");
        totalReserve = ethReserve*jmtReserve;
    }
    //reserve ratio 
    function getReserveRatio(uint32 rType, uint256 value) public view returns (uint256){
        if(rType == 1){ // jmt -> eth 
            return totalReserve;
        }else if(rType == 2){ // eth -> jmt 
            return 0;
        }  
        return 0;
    }
    // lpt 주소 셋팅 
    function setLPTAddress(LPT _lpToken) external onlyOwner {
        require(address(lpToken) == address(0), "WRITE_ONCE");
        lpToken = _lpToken;
    }

    //  jmt 토큰 어드레스 셋팅
    function setJmtCoinAddress(JMToken _jmtToken) external onlyOwner {
        require(address(jmtToken) == address(0), "WRITE_ONCE");
        jmtToken = _jmtToken;
    }

    // 리저브 코인들 반환 
    function getReserves() external view returns (uint256, uint256) {
        return (ethReserve, jmtReserve);
    }

    //pool swap!
    function swap(address account, uint256 _jmtAmount) external payable {
        uint256 product = ethReserve * jmtReserve; // 총 생산량
        uint256 amountToTransfer;
        uint256 amountToTake;
        uint256 totalAmountToTransfer;

        // jmt -> eth, jmttoken == 0
        if (msg.value == 0) {
            uint256 currentJMTBalance = jmtToken.balanceOf(address(this)); // 풀에 가지고있는 컨트랙트 코인 보유량 
            uint256 _jmtAmountMinusTax = _jmtAmount - ((2 * _jmtAmount) / 100); // (갖고싶은 토큰양 - 수수료) 
            uint256 addedBalance = jmtReserve + _jmtAmountMinusTax; // 현재 jmt보유량 + (갖고싶은 토큰양 - 수수료) = 추가된 총 밸런스
            //require(addedBalance == currentJMTBalance, "DID_NOT_TRANSFER");

            uint256 x = product / (jmtReserve + _jmtAmountMinusTax); // 이더가 product를 맞추기위한 비율 
            amountToTransfer = ethReserve - x; // 유저가 받을 eth 
            amountToTake = (1 * amountToTransfer) / 100; // 지불해야하는 수수료
            totalAmountToTransfer = amountToTransfer - amountToTake; // 받을 토큰 - 수수료 = 최종 get eth 

            // 이더를 안전하게 보내는 방법 // 이더 전송
            // https://kushgoyal.com/ethereum-solidity-how-use-call-delegatecall/ -> 참고 
            (bool success, ) = account.call{value: totalAmountToTransfer}("");
            require(success, "TRANSFER_FAILED");
        } else { // eth -> jmt, jmttoken > 0 msg.value > 0  

            uint256 y = product / (ethReserve + msg.value);
            amountToTransfer = jmtReserve - y;
            amountToTake = (1 * amountToTransfer) / 100;
            totalAmountToTransfer = amountToTransfer - amountToTake;

            jmtToken.transfer(account, totalAmountToTransfer);
        }
        emit TradedTokens(account, msg.value, _jmtAmount);
        _update();
    }

    // pool에 예치 
    function deposit(uint256 jmtAmount, address account) external payable 
    {
        uint256 liquidity; // 유동성 풀
        uint256 totalSupply = lpToken.totalSupply(); // lp컨트랙트 erc총발행량
        uint256 ethAmount = msg.value; //이더양

        if (totalSupply > 0) {
            liquidity = Math.min(
                (ethAmount * totalSupply) / ethReserve,
                (jmtAmount * totalSupply) / jmtReserve
            );
        } else { // 발생x
            liquidity = Babylonian.sqrt(ethAmount * jmtAmount);
        }

        lpToken.mint(account, liquidity); // transfer user => 발행
        emit LiquidityAdded(account);
        _update();
    }

    //lp토큰 출금
    function withdraw(address account) external {
        uint256 liquidity = lpToken.balanceOf(account); // 유저의 lp토큰 보유량을 가져옴 
        require(liquidity != 0, "NO_AVAILABLE_TOKENS");

        uint256 totalSupply = lpToken.totalSupply();
        //얼마 보내줄지 계산
        uint256 ethAmount = (ethReserve * liquidity) / totalSupply;
        uint256 jmtAmount = (jmtReserve * liquidity) / totalSupply;

        // 소각
        lpToken.burn(account, liquidity); // 유저가 withdraw 한거 소각 

        // 각각의 토큰 유저에게 전송
        (bool ethTransferSuccess, ) = account.call{value: ethAmount}("");
        bool jmtTransferSuccess = jmtToken.transfer(account, jmtAmount);

        require(ethTransferSuccess && jmtTransferSuccess, "FAILED_TRANSFER");
        emit LiquidityRemoved(account);
        _update();
    }
    // 동기화, 문제가 많아서 타임스탬프 제거 
    function _update() private 
    {
        // uint32 blockTimestamp = uint32(block.timestamp % 2**32);
        // uint32 timeElapsed;
        // unchecked { // 새로운 블록이라면 오버플로우가 생김 
        //     timeElapsed = blockTimestamp - lastBlockTimestamp; 
        // }
        // if (timeElapsed > 0) {
            ethReserve = address(this).balance; // 해당 컨트랙트 밸런스가져와서 eth설정 
            jmtReserve = jmtToken.balanceOf(address(this)); // jmt 토큰 밸런스 업데이트 
        //     lastBlockTimestamp = blockTimestamp; 
        // }
    }
}