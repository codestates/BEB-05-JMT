// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "./LiquidityPool.sol";

contract VJMToken is ERC20 {
    event TreasuryMoved(); // 자산이동  

    uint256 public MAX_SUPPLY; // 발행량 jmt : vjmt == 1:10 
    address public owner; // 오너 
    address payable public treasuryWallet; // 재무 계좌
    LiquidityPool lp;
   
    constructor(address payable treasury) ERC20("vJMT Token", "vJMT") {
        MAX_SUPPLY = 600000 * 10**decimals();
        _mint(address(this), MAX_SUPPLY); 
        owner = msg.sender; 
        treasuryWallet = treasury; // 임시,현재는 오너 지갑
    }

    modifier ownerOnly() {
        require(msg.sender == owner, "OWNER_ONLY");
        _;
    }

    // set lp address 
    function setLPAddress(LiquidityPool _lp) public ownerOnly {
       require(address(lp) == address(0), "WRITE_ONCE");
        lp = _lp;
    }
 
    function _transfer(address sender, address recipient, uint256 amount) internal override {
        super._transfer(sender, recipient, amount);
    }

    function mint(address account, uint256 amount) external ownerOnly {
        require(account != address(0), "ERC20: mint to the zero address"); // 주소 전송 가능 여부 체크 
        require(totalSupply() + amount <= MAX_SUPPLY, "ABOVE_MAX_SUPPLY"); // 총발행량 체크 
        _mint(account, amount * 10**decimals());
    }
    
    function burn(address account, uint256 amount) external ownerOnly {
        _burn(account, amount * 10**decimals());
    }

    // 거래 제한 해제
    function increaseContractAllowance(address _owner,address _spender,uint256 _amount) public returns (bool) {
        _approve(
            _owner, // from
            _spender, // to
            allowance(msg.sender, address(this)) + _amount
        ); 
        return true;
    }

    // 재무 지갑 이동
    function MoveToTreasuryWallet() public ownerOnly {
        uint256 lpSwapAmount = 100000 * 10**decimals();
        super._transfer(address(this), address(lp), lpSwapAmount);

        uint256 remainingAmount = balanceOf(address(this));
        super._transfer(address(this), address(treasuryWallet), remainingAmount);
        emit TreasuryMoved();
    }

}