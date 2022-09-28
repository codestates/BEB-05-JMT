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
    uint256 firstReward = 0;
    uint256 secondReward = 0;
    uint256 thirdReward = 0;

    JMToken private token;
    address payable private treasuryWallet;
    address private nftContractAddress;
    address private itemContractAddress;
    address[] private addrList;

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

    mapping(address => UserInfo) idUserInfo;

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
        address user
    );

    event UserMatching (
        uint256 charId,
        uint256 weaponId,
        address user
    );

    event UserDeleated (
        uint256 charId,
        uint256 weaponId,
        address user
    );

    event rewardTransferred (
        uint256 reward,
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
        addrList.push(msg.sender);
        idUserInfo[msg.sender] = UserInfo({
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
        uint256 _charId
    ) public {
        require(msg.sender == ERC721(nftContractAddress).ownerOf(_charId),  "only character owners can sign up");

        idUserInfo[msg.sender].charToken.tokenId = _charId;

        emit UserUpdated(
            _charId,
            idUserInfo[msg.sender].weaponToken.tokenId,
            msg.sender
        );
    }

    function updateWeapon(
        uint256 _weaponId
    ) public {
        require(ERC1155(itemContractAddress).balanceOf(msg.sender, _weaponId)!=0,  "only weapon owners can update userInfo");

        idUserInfo[msg.sender].weaponToken.tokenId = _weaponId;

        emit UserUpdated(
            idUserInfo[msg.sender].charToken.tokenId,
            _weaponId,
            msg.sender
        );
    }

    function checkReward(
        uint256 _rank
    ) public view returns (uint256) {
        //TODO: 보안을 위해 컨트랙트 내에서 랭크를 저장하고 불러와야 함.
        // require(_rank<4,  "you need to rank up for the reward");
        uint256 reward = 0;
        if(_rank==1){
            reward = firstReward;
        }
        else if(_rank==2){
            reward = secondReward;
        }
        else if(_rank==3){
            reward = thirdReward;
        }else{
            reward = 0;
        }
        return reward;
    }

    function setRankReward(uint256 reward) public{
        firstReward+=reward*5/10;
        secondReward+=reward*3/10;
        thirdReward+=reward*2/10;
    }

    function requestReward(
        uint256 _rank
    ) public {
        //TODO: 보안을 위해 컨트랙트 내에서 랭크를 저장하고 불러와야 함.
        require(_rank<4&&_rank>0,  "you need to rank up for the reward");
        
        uint256 reward = 0;
        if(_rank==1){
            reward = firstReward;
            firstReward = 0;
        }
        else if(_rank==2){
            reward = secondReward;
            secondReward = 0;
        }
        else if(_rank==3){
            reward = thirdReward;
            thirdReward = 0;
        }

        bool success = token.increaseContractAllowance(
            treasuryWallet,
            address(this),
            reward
        );
        require(success, "IncreaseContract Fail");
        token.transferFrom(treasuryWallet, msg.sender, reward);

        emit rewardTransferred (
        reward,
        msg.sender
        );

    }

    function matchUser(address _user) public view returns (UserInfo memory) {
        require(_userIds.current()!=1, "you are the only one player");
        uint userCount = _userIds.current();
        uint256 n = uint256(keccak256(abi.encodePacked(block.timestamp))) % (userCount);
        address matchUserAddr = addrList[n];
        if(idUserInfo[matchUserAddr].user != _user){
            UserInfo memory opponent =  idUserInfo[matchUserAddr];
            return opponent;
        }else{
            return matchUser(_user);
        }
    }

    function fetchUser(address _user) public view returns (UserInfo memory) {
        return idUserInfo[_user];
    }

    function fetchUsers() public view returns (UserInfo[] memory) {
        uint userCount = _userIds.current();
        UserInfo[] memory users =  new UserInfo[](userCount);

        for (uint i = 0; i < userCount; i++) {
            address currentAddr = addrList[i];
            UserInfo storage currentUser = idUserInfo[currentAddr];
            users[i] = currentUser;
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
