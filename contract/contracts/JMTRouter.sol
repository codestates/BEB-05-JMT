//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./JMToken.sol";
import "./LiquidityPool.sol";

contract JMTRouter {
    LiquidityPool liquidityPool;
    JMToken jonMatang;

    constructor(LiquidityPool _liquidityPool, JMToken _jonMatang) 
    {
        liquidityPool = _liquidityPool;
        jonMatang = _jonMatang;
    }

    function _getAddress() public view returns (address, address){
        return (address(liquidityPool), address(jonMatang));
    }

    function addLiquidity(uint256 _jmtAmount) external payable {
        require(jonMatang.balanceOf(msg.sender) > 0, "NO_AVAILABLE_TOKENS"); // 토큰 보유량 체크 

        bool success = jonMatang.increaseContractAllowance(
            msg.sender, // from 
            address(this), // to
            _jmtAmount 
        );
        require(success);
        
        jonMatang.transferFrom(msg.sender, address(liquidityPool), _jmtAmount); 
        liquidityPool.deposit{value: msg.value}(_jmtAmount, msg.sender); // value:이더, token:jmt 
    }

    function pullLiquidity() external {
        liquidityPool.withdraw(msg.sender);
    }

    function swapTokens(uint256 _jmtAmount) external payable {
        bool success = jonMatang.increaseContractAllowance(
            msg.sender,
            address(this),
            _jmtAmount
        );
        require(success);

        // 요청자의 jmttoken: 0 or 0이상 을 pool로 전송
        jonMatang.transferFrom(msg.sender, address(liquidityPool), _jmtAmount);
        liquidityPool.swap{value: msg.value}(msg.sender, _jmtAmount);
    }
}