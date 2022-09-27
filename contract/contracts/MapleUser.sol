// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./JMToken.sol";

contract MapleUser is Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _userIds;
    uint256 decimals = 10**18;
    JMToken private token;
    address payable private treasuryWallet;
    address private nftContractAddress;
    address private itemContractAddress;

    constructor (
        address _tokenContractAddress,
        address _nftContractAddress,
        address _itemContractAddress,
        address payable _treasuryWallet
    ) {
        _setToken(_tokenContractAddress);
        nftContractAddress = _nftContractAddress;
        itemContractAddress = _itemContractAddress;
        treasuryWallet = _treasuryWallet;
    }

    mapping(uint256 => UserInfo) idUserInfo;

    struct Token {
        address contractAddr;
        uint256 tokenId;
    }

    struct UserInfo {
        uint256 userId;
        Token charToken;
        Token weaponToken;
        address payable user;
    }

    event UserCreated (
        uint256 charId,
        uint256 weaponId,
        uint256 userId,
        address user
    );

    event UserUpdated (
        uint256 charId,
        uint256 weaponId,
        uint256 userId,
        address user
    );

    event UserMatching (
        uint256 charId,
        uint256 weaponId,
        uint256 userId,
        address user
    );

    event UserDeleated (
        uint256 charId,
        uint256 weaponId,
        uint256 userId,
        address user
    );

    function _setToken(address _tokenAddress) private onlyOwner returns (bool) {
        require(_tokenAddress != address(0x0));
        token = JMToken(_tokenAddress);
        return true;
    }

    function signUp(
        uint256 _charId,
        uint256 _weaponId
    ) public {
        require(msg.sender == ERC721(nftContractAddress).ownerOf(_charId),  "only character owners can sign up");
        require(ERC1155(itemContractAddress).balanceOf(msg.sender, _weaponId)!=0,  "only weapon owners can sign up");

        _userIds.increment();
        uint256 userId = _userIds.current();

        idUserInfo[userId] = UserInfo({
            userId: userId,
            charToken: Token({
                contractAddr: nftContractAddress,
                tokenId: _charId
            }),
            weaponToken: Token({
                contractAddr: itemContractAddress,
                tokenId: _weaponId
            }),
            user: payable(msg.sender)
        });

        emit UserCreated(
            _charId,
            _weaponId,
            userId,
            msg.sender
        );
    }

    function updateChar(
        uint256 _charId,
        uint256 _userId
    ) public {
        require(msg.sender == ERC721(nftContractAddress).ownerOf(_charId),  "only character owners can sign up");

        idUserInfo[_userId].charToken.tokenId = _charId;

        emit UserUpdated(
            _charId,
            idUserInfo[_userId].weaponToken.tokenId,
            _userId,
            msg.sender
        );
    }

    function updateWeapon(
        uint256 _weaponId,
        uint256 _userId
    ) public {
        require(ERC1155(itemContractAddress).balanceOf(msg.sender, _weaponId)!=0,  "only weapon owners can update userInfo");

        idUserInfo[_userId].weaponToken.tokenId = _weaponId;

        emit UserUpdated(
            idUserInfo[_userId].charToken.tokenId,
            _weaponId,
            _userId,
            msg.sender
        );
    }

    function matchUser(address _user) public view returns (UserInfo memory) {
        require(_userIds.current()!=1, "you are the only one player");
        uint userCount = _userIds.current();
        uint256 n = uint256(keccak256(abi.encodePacked(block.timestamp))) % (userCount);
        if(idUserInfo[n+1].user != _user){
            UserInfo memory opponent =  idUserInfo[n+1];
            return opponent;
        }else{
            return matchUser(_user);
        }
    }

    function fetchUsers() public view returns (UserInfo[] memory) {
        uint userCount = _userIds.current();
        UserInfo[] memory users =  new UserInfo[](userCount);

        for (uint i = 1; i <= userCount; i++) {
            uint currentId = idUserInfo[i].userId;
            UserInfo storage currentUser = idUserInfo[currentId];
            users[i-1] = currentUser;
        }
        return users;
    }

    function onERC1155Received(address, address, uint256, uint256, bytes memory) public virtual returns (bytes4) {
        return this.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(address, address, uint256[] memory, uint256[] memory, bytes memory) public virtual returns (bytes4) {
        return this.onERC1155BatchReceived.selector;
    }

    function onERC721Received(address, address, uint256, bytes memory) public virtual returns (bytes4) {
        return this.onERC721Received.selector;
    }
}
