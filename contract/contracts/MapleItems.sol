// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./interfaces/ERC20Interface.sol";

contract MapleItems is ERC1155, Ownable, ERC1155Burnable, ERC1155Supply {
    ERC20Interface private token;
    uint256[] private waitForMint;
    uint256[] private firstMint;
    address private marketContractAddress;

    uint256 public constant SWORD0 = 0;
    uint256 public constant SWORD1 = 1;
    uint256 public constant SWORD2 = 2;
    uint256 public constant SWORD3 = 3;

    uint256 public constant BOW0 = 100;
    uint256 public constant BOW1 = 101;
    uint256 public constant BOW2 = 102;

    uint256 public constant STAFF0 = 200;
    uint256 public constant STAFF1 = 201;
    uint256 public constant STAFF2 = 202;

    uint256 public constant POLEARM0 = 300;
    uint256 public constant POLEARM1 = 301;
    uint256 public constant POLEARM2 = 302;

    uint256 public constant SCROLL100 = 400;
    uint256 public constant SCROLL90 = 401;
    uint256 public constant SCROLL60 = 402;
    uint256 public constant SCROLL30 = 403;
    uint256 public constant SCROLL10 = 404;

    constructor(address _marketAddress, address _tokenContractAddress) ERC1155(
    "ipfs://QmUkUUWBisiFa9XUk4ucJiDr2fvk2tDr1xDrCkEF6FFCF8/{id}"
    ) {
        _mint(msg.sender, SCROLL100, 10, "");
        _mint(msg.sender, SCROLL90, 20, "");
        _mint(msg.sender, SCROLL60, 40, "");
        _mint(msg.sender, SCROLL30, 60, "");
        _mint(msg.sender, SCROLL10, 70, "");

        marketContractAddress = _marketAddress;
        _setToken(_tokenContractAddress);
        _generateWeaponArray();
        _generatefirstWeapon();
    }

    function uri(uint256 _tokenid) override public pure returns (string memory) {
        return string(
            abi.encodePacked(
                "https://ipfs.io/ipfs/QmUkUUWBisiFa9XUk4ucJiDr2fvk2tDr1xDrCkEF6FFCF8/",
                Strings.toString(_tokenid)
            )
        );
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }
    function _generateWeaponArray() private onlyOwner{
        for (uint256 i = 0; i < 4; i++ ){
            waitForMint.push(SWORD0); 
        }
        for (uint256 i = 0; i < 3; i++ ){
            waitForMint.push(SWORD1);
        }
        for (uint256 i = 0; i < 2; i++ ){
            waitForMint.push(SWORD2); 
        }
        for (uint256 i = 0; i < 1; i++ ){
            waitForMint.push(SWORD3); 
        }
        
        for (uint256 i = 0; i < 4; i++ ){
            waitForMint.push(BOW0); 
        }
        for (uint256 i = 0; i < 3; i++ ){
            waitForMint.push(BOW1);
        }
        for (uint256 i = 0; i < 2; i++ ){
            waitForMint.push(BOW2); 
        }

        for (uint256 i = 0; i < 4; i++ ){
            waitForMint.push(STAFF0); 
        }
        for (uint256 i = 0; i < 3; i++ ){
            waitForMint.push(STAFF1);
        }
        for (uint256 i = 0; i < 2; i++ ){
            waitForMint.push(STAFF2); 
        }

        for (uint256 i = 0; i < 4; i++ ){
            waitForMint.push(POLEARM0); 
        }
        for (uint256 i = 0; i < 3; i++ ){
            waitForMint.push(POLEARM1);
        }
        for (uint256 i = 0; i < 2; i++ ){
            waitForMint.push(POLEARM2); 
        }
    }

    function _generatefirstWeapon() private onlyOwner{
        firstMint.push(SWORD0); 
        firstMint.push(BOW0); 
        firstMint.push(STAFF0); 
        firstMint.push(POLEARM0); 
    }

    function mintFirstWeapon() public returns(uint256){
        uint256 n = uint256(keccak256(abi.encodePacked(block.timestamp))) % (firstMint.length);
        uint id = firstMint[n];
        
        _mint(msg.sender, id, 1, "");
        setApprovalForAll(marketContractAddress, true);

        return id;
    }

    function mintRandomWeapon() public returns (uint256){   
        uint256 n = uint256(keccak256(abi.encodePacked(block.timestamp))) % (waitForMint.length);
        uint256 id = waitForMint[n];
        
        _mint(msg.sender, id, 1, "");
        setApprovalForAll(marketContractAddress, true);

        return id;
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, data);
    }
    
    function _setToken(address _tokenAddress) private onlyOwner returns (bool) {
        require(_tokenAddress != address(0x0));
        token = ERC20Interface(_tokenAddress);
        return true;
    }
    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}