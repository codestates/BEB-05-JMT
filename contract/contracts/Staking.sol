// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import "./VJMToken.sol";
import "./JMToken.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Staking is Ownable {
    event Staked(address indexed from, uint256 amount);
    event UnStaked(address indexed from, uint256 unStakedTime);
    event UnStakedClaimed(address indexed from, uint256 unStakedTime, uint256 amount);
    event Claimed(address indexed from, uint256 amount);
   
    uint256 public Deploytime; // 프로제트 시작일
    uint256 public decimals = 10**18;
    uint32 public APR = 150; // 이자율
    uint32 private yearsDuration = 31536000;
    uint32 private dayDuration = 86400;
    uint256 private stakingExpire = dayDuration * 3; // 스테이킹 종료 3일  // test = 180 -> 3분
    VJMToken vJmt;  // 스테이킹 할 토큰
    JMToken jmt; // 스테이킹 보상 토큰

    struct StakeInfo {        
        uint256 startTS; //스테이킹 시작 시간
        uint256 claimedTime; // 마지막 으로클레임한 시간 
        uint256 unStakingTime; // 언스테이킹한 시간
        uint256 amount; // 스테이킹 양
        uint256 totalClaimed; //클레임한 토큰 decimals적용하여 계산
        uint32 state; // 스테이킹 상태 스테이킹==1, unstaking==2
    }

    mapping(address => StakeInfo) public stakeInfos; // 주소당 스테이킹 정보 저장
    mapping(address => bool) public addressStaked;  // 주소당 스테이킹 상태

    constructor(VJMToken _tokenAddress) { // staking 할 erc20  토큰 정보
        require(address(_tokenAddress) != address(0),"Token Address cannot be address 0");                
        vJmt = _tokenAddress;
        Deploytime = block.timestamp;
    }

    // 현재 토큰 분배 가능한지 
    modifier Claimable(uint256 amount) {
        require(jmt.balanceOf(address(this)) > amount, "TOKEN_LACK");
        _;
    }
    
    function setJMTokenAddress(JMToken _jmt) external onlyOwner{
        require(address(jmt) == address(0),"ADDRESS IS NOT Zero Address");
        jmt = _jmt;
    }

    //set stakeInfoe startTime // get은 stakeinfos(address) 이용 
    function setStakeInfo() public {
        stakeInfos[msg.sender].claimedTime = block.timestamp;
    }


    //토큰 스테이킹
    function stakeToken(uint256 stakeAmount) public Claimable(stakeAmount) returns(bool){
        require(stakeAmount > 0, "Stake amount should be correct"); // 양 체크
        require(addressStaked[msg.sender] == false, "You already participated"); // 스테이킹 여부
        // 언스 상태에서 스테이킹 안댐 
        if(stakeInfos[msg.sender].state == 2){
            return false;
        }

        bool success = vJmt.increaseContractAllowance(
            msg.sender, 
            address(this),
            stakeAmount
        );
        require(success,"IncreaseContract Fail");
        vJmt.transferFrom(msg.sender, address(this), stakeAmount); // vjmt토큰 전송
        addressStaked[msg.sender] = true;

        stakeInfos[msg.sender] = StakeInfo({                
            startTS: block.timestamp,
            claimedTime: block.timestamp, //클레임한 시간 
            unStakingTime: 0,
            amount: stakeAmount, // 스테이킹한 양
            totalClaimed: 0,
            state: 1
        });

        emit Staked(msg.sender, stakeAmount);
        return true;
    }   

    //언스테이킹 
    function unStakingToken() public {
        require(addressStaked[msg.sender] == true, "You already participated"); // 스테이킹 여부
    
        // staking 보상 수령
        uint256 stakingDuration = block.timestamp - stakeInfos[msg.sender].claimedTime; // 마지막 클레임이후 스테이킹한 기간 
        uint256 persecondAmount = (stakeInfos[msg.sender].amount * APR / 100) / yearsDuration / dayDuration; // 초당 리워드 
        uint256 claimableAmount = persecondAmount * stakingDuration; // 최종 보상
        jmt.transfer(msg.sender, claimableAmount / 10); //vjmt:jmt1:10 비율 

        stakeInfos[msg.sender].unStakingTime = block.timestamp; // 언스테이킹한 시점 
        addressStaked[msg.sender] = false; // 스테이킹 종료 
        stakeInfos[msg.sender].state = 2; // 언스테이킹 토큰 클레임 가능

        emit UnStaked(msg.sender, block.timestamp); //jmt 
        emit Claimed(msg.sender, claimableAmount); // vjmt
    }

    //언스테이킹 토큰 클레임 
    function unStakingClaime() public returns(bool,uint256){
        require(stakeInfos[msg.sender].state == 2, "now State is Staking, Please UnStaking!!");
        if(stakeInfos[msg.sender].unStakingTime + stakingExpire < block.timestamp){ //클레임 가능 
            uint256 amount = stakeInfos[msg.sender].amount; // 스테이킹한 벨류 
            vJmt.transfer(msg.sender,amount); // 전송 

            delete stakeInfos[msg.sender]; // 스테이킹 정보 제거 
            delete addressStaked[msg.sender]; // 스테이킹 상태 주소 제거 
            emit UnStakedClaimed(msg.sender, block.timestamp, amount);
            return(true, block.timestamp);
        }else{ // 클레임 불가 
            uint256 remainingTime = (stakeInfos[msg.sender].unStakingTime + stakingExpire) - block.timestamp; // 보상가능까지 남은 시간
            return(false, remainingTime);
        }
       
    }


    // 보상 수령
    function claimReward() external returns (bool){
        require(addressStaked[msg.sender] == true, "You are not participated");

        uint256 stakingDuration = block.timestamp - stakeInfos[msg.sender].claimedTime; // 마지막 클레임이후 스테이킹한 기간 
        uint256 persecondAmount = (stakeInfos[msg.sender].amount * APR / 100) / yearsDuration / dayDuration; // 초당 리워드 
        uint256 claimableAmount = persecondAmount * stakingDuration; // 최종 보상

        jmt.transfer(msg.sender, claimableAmount / 10); //vjmt:jmt == 10:1 비율 
        setStakeInfo(); // 클레임시간 현재 시간으로 수정
        emit Claimed(msg.sender, claimableAmount);

        return true;
    }

    // 보상 가능한 수량 
    function claimableReward() public view returns(uint256) {
        if(addressStaked[msg.sender] == true){
            uint256 stakingDuration = block.timestamp - stakeInfos[msg.sender].claimedTime; // 마지막 클레임이후 스테이킹한 기간 
            uint256 persecondAmount = (stakeInfos[msg.sender].amount * APR / 100) / yearsDuration / dayDuration; // 초당 리워드 
            uint256 claimableAmount = persecondAmount * stakingDuration; // 최종 보상
            return claimableAmount;
        }else{
            return 0;
        }
    }
}