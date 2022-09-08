/ SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

contract MapleItems is ERC1155, Ownable, ERC1155Burnable, ERC1155Supply {\
    uint256 public constant SWORD0 = 0;
    uint256 public constant SWORD1 = 1;
    uint256 public constant SWORD2 = 2;
    uint256 public constant SWORD3 = 3;
    uint256 public constant SWORD4 = 4;
    uint256 public constant SWORD5 = 5;
    // uint256 public constant SWORD6 = 6;
    // uint256 public constant SWORD7 = 7;
    // uint256 public constant SWORD8 = 8;
    // uint256 public constant SWORD9 = 9;
    // uint256 public constant SWORD10 = 10;
    // uint256 public constant SWORD11 = 11;
    // uint256 public constant SWORD12 = 12;
    // uint256 public constant SWORD13 = 13;
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


    constructor() ERC1155(
    //URI
    //"https://game.example/api/item/{id}.json"
    ) {
        _mint(msg.sender, SCROLL100, 10, "");
        _mint(msg.sender, SCROLL90, 20, "");
        _mint(msg.sender, SCROLL60, 40, "");
        _mint(msg.sender, SCROLL30, 60, "");
        _mint(msg.sender, SCROLL10, 80, "");
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint(address account, uint256 id, uint256 amount, bytes memory data)
        public
        onlyOwner
    {
        _mint(account, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, data);
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}