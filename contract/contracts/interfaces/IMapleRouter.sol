// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../MapleMarket.sol";

interface IMapleRouter {
    // MapleNFT
    function balanaceOfCharacter(address owner) external view returns (uint256);
    function tokenURICharacter(uint256 tokenId) external view returns(string memory);
    function tokenOfOwnerByIndexCharacter(address owner, uint256 index) external view returns (uint256);
    function ownerOfCharacter(uint tokenId) external returns(address);
    function mintCharacter() external returns(uint256);
    // MapleItem
    function checkBalance(address owner) external returns(uint256[][] memory);
    function tokenURIItem(uint256 tokenId) external view returns(string memory);
    function balanaceOfItem(address owner, uint256 tokenId) external view returns (uint256);
    function mintFirstWeapon() external;
    function mintRandomWeapon() external returns (uint256);
    function mintScroll() external;
    function randRewardScroll() external;
    function upgrade(uint256 scrollId, uint256 weaponId) external;
    // Market
    function fetchCharacterOnSale() external returns (MapleMarket.MarketItem[] memory);
    function fetchWeaponOnSale() external returns (MapleMarket.MarketItem[] memory);
    // Fight
    function setFight(address addr, uint userStrength, uint matchingStrength) external;
    function getFight() external returns (string memory); 
    // JMT
    function balanceOfVJMT(address account) external view returns (uint256);
    function stakeToken(uint256 stakeAmount) external returns (bool);
    function unStakingToken() external;
    function unStakingClaime() external returns (bool, uint256);
    function stakeInfos() external;
    function claimReward() external returns (bool);
    function claimableReward() external view returns (uint256);
    function balanceOfJMT(address account) external view returns (uint256);
    function transferJMT(address to, uint256 amount) external returns (bool);
    function getReserves() external view returns (uint256, uint256);
    function swapTokens(uint256 _jmtAmount) external payable;
    function balanceOfLPToken(address account) external view returns (uint256);
    function addLiquidity(uint256 _jmtAmount) external payable;
    function pullLiquidity() external;
}
