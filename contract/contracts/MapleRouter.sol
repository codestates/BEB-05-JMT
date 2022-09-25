// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/IMapleRouter.sol";
import "./MapleNFT.sol";
import "./MapleItems.sol";
import "./MapleMarket.sol";
import "./MapleFight.sol";
import "./JMToken.sol";
import "./JMTRouter.sol";
import "./LiquidityPool.sol";
import "./LPT.sol";
import "./Staking.sol";
import "./VJMToken.sol";

contract MapleRouter is IMapleRouter, Ownable {
    address private mapleNFTContract;
    address private mapleItemsContract;
    address private mapleMarketContract;
    address private mapleFightContract;
    address private jmtContract;
    address private vjmtContract;
    address private stakingContract;
    address private lpContract;
    address private lptContract;
    address private jmtRouterContract;

    constructor(
        address _mapleNFTAddress, 
        address _mapleItemsAddress,
        address _mapleMarketAddress,
        address _mapleFightAddress,
        address _jmtContractAddress, 
        address _vjmtContractAddress,
        address _stakingContractAddress,
        address _lpContractAddress,
        address _lptContractAddress,
        address _jmtRouterContractAddress
    ) {
        setContractAddress(
            _mapleNFTAddress, 
            _mapleItemsAddress,
            _mapleMarketAddress,
            _mapleFightAddress,
            _jmtContractAddress, 
            _vjmtContractAddress,
            _stakingContractAddress,
            _lpContractAddress,
            _lptContractAddress,
            _jmtRouterContractAddress
        );
    }

    function setContractAddress(
        address _mapleNFTAddress, 
        address _mapleItemsAddress,
        address _mapleMarketAddress,
        address _mapleFightAddress,
        address _jmtContractAddress, 
        address _vjmtContractAddress,
        address _stakingContractAddress,
        address _lpContractAddress,
        address _lptContractAddress,
        address _jmtRouterContractAddress
    ) public onlyOwner {
        mapleNFTContract = _mapleNFTAddress;
        mapleItemsContract = _mapleItemsAddress;
        mapleMarketContract = _mapleMarketAddress;
        mapleFightContract = _mapleFightAddress;
        jmtContract = _jmtContractAddress;
        vjmtContract = _vjmtContractAddress;
        stakingContract = _stakingContractAddress;
        lpContract = _lpContractAddress;
        lptContract = _lptContractAddress;
        jmtRouterContract = _jmtRouterContractAddress;
    }

    /*
     * MapleCharacter
     */
    function balanaceOfCharacter(address owner) public view returns (uint256) {
        return MapleNFT(mapleNFTContract).balanceOf(owner);
    }
    function tokenURICharacter(uint256 tokenId) public view returns(string memory) {
        return MapleNFT(mapleNFTContract).tokenURI(tokenId);
    }
    function tokenOfOwnerByIndexCharacter(address owner, uint256 index) public view returns (uint256) {
        return MapleNFT(mapleNFTContract).tokenOfOwnerByIndex(owner, index);
    }
    function ownerOfCharacter(uint tokenId) public view returns(address) {
        return MapleNFT(mapleNFTContract).ownerOf(tokenId);
    }
    function mintCharacter() public returns(uint256) {
        (bool success, bytes memory result) = mapleNFTContract.delegatecall(abi.encodeWithSignature("mintMapleNFT()"));
        return abi.decode(result, (uint256));
    }

    /*
     * MapleItems
     */
    function checkBalance(address owner) public returns(uint256[][] memory) {
        (bool success, bytes memory result) = mapleItemsContract.delegatecall(abi.encodeWithSignature("checkBalance(address)", owner));
        return abi.decode(result, (uint256[][]));
    }
    function tokenURIItem(uint256 tokenId) external view returns(string memory) {
        return MapleItems(mapleItemsContract).uri(tokenId);
    }
    function balanaceOfItem(address owner, uint256 tokenId) public view returns (uint256) {
        return MapleItems(mapleItemsContract).balanceOf(owner, tokenId);
    }
    function mintFirstWeapon() public {
        (bool success, bytes memory result) = mapleItemsContract.delegatecall(abi.encodeWithSignature("mintFirstWeapon()"));
    }
    function mintRandomWeapon() public returns (uint256) {
        (bool success, bytes memory result) = mapleItemsContract.delegatecall(abi.encodeWithSignature("mintRandomWeapon()"));
        return abi.decode(result, (uint256));
    }
    function mintScroll() public {
        (bool success, bytes memory result) = mapleItemsContract.delegatecall(abi.encodeWithSignature("mintScroll()"));
    }
    function randRewardScroll() public {
        (bool success, bytes memory result) = mapleItemsContract.delegatecall(abi.encodeWithSignature("randRewardScroll()"));
    }
    function upgrade(uint256 scrollId, uint256 weaponId) public {
        (bool success, bytes memory result) = mapleItemsContract.delegatecall(abi.encodeWithSignature("upgrade(uint256, uint256)", scrollId, weaponId));
    }

    /*
     * Market
     */
    function fetchCharacterOnSale() public view returns (MapleMarket.MarketItem[] memory) {
        return MapleMarket(mapleMarketContract).fetchCharOnSale();
    }
    function fetchWeaponOnSale() public view returns (MapleMarket.MarketItem[] memory) {
        return MapleMarket(mapleMarketContract).fetchWeaponOnSale();
    }

    /*
     * Fight
     */
    function setFight(address addr, uint256 userStrength, uint256 matchingStrength) public {
        (bool success, bytes memory result) = mapleFightContract.delegatecall(abi.encodeWithSignature("setFight(address, uint256, uint256)", addr, userStrength, matchingStrength));
    }
    function getFight() public view returns (string memory) {
        return MapleFight(mapleFightContract).getFight();
    }

    /*
     * JMT
     */
    function balanceOfVJMT(address account) public view returns (uint256) {
        return VJMToken(vjmtContract).balanceOf(account);
    }
    function stakeToken(uint256 stakeAmount) public returns (bool) {
        (bool success, bytes memory result) = stakingContract.delegatecall(abi.encodeWithSignature("stakeToken(uint256)", stakeAmount));
        return abi.decode(result, (bool));
    }
    function unStakingToken() public {
        (bool success, bytes memory result) = stakingContract.delegatecall(abi.encodeWithSignature("unStakingToken()"));
    }
    function unStakingClaime() public returns (bool, uint256) {
        (bool success, bytes memory result) = stakingContract.delegatecall(abi.encodeWithSignature("unStakingClaime()"));
        return abi.decode(result, (bool, uint256));
    }
    function stakeInfos() public {
        (bool success, bytes memory result) = stakingContract.delegatecall(abi.encodeWithSignature("stakeInfos()"));
    }
    function claimReward() public returns (bool) {
        (bool success, bytes memory result) = stakingContract.delegatecall(abi.encodeWithSignature("claimReward()"));
        return abi.decode(result, (bool));
    }
    function claimableReward() public view returns (uint256) {
        return Staking(stakingContract).claimableReward();
    }
    function balanceOfJMT(address account) public view returns (uint256) {
        return JMToken(jmtContract).balanceOf(account);
    }
    function transferJMT(address to, uint256 amount) external returns (bool) {
        (bool success, bytes memory result) = jmtContract.delegatecall(abi.encodeWithSignature("transfer(address, uint256)", to, amount));
        return abi.decode(result, (bool));
    }
    function getReserves() public view returns (uint256, uint256) {
        return LiquidityPool(lpContract).getReserves();
    }
    function swapTokens(uint256 jmtAmount) public payable {
        (bool success, bytes memory result) = jmtRouterContract.delegatecall(abi.encodeWithSignature("swapTokens(uint256)", jmtAmount));
    }
    function balanceOfLPToken(address account) public view returns (uint256) {
        return LPT(lptContract).balanceOf(account);
    }
    function addLiquidity(uint256 jmtAmount) public payable {
        (bool success, bytes memory result) = jmtRouterContract.delegatecall(abi.encodeWithSignature("addLiquidity(uint256)", jmtAmount));
    }
    function pullLiquidity() public {
        (bool success, bytes memory result) = jmtRouterContract.delegatecall(abi.encodeWithSignature("pullLiquidity()"));
    }
}
