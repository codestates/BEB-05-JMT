// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "./interfaces/ERC20Interface.sol";

contract MapleNFT is Ownable, ERC721Enumerable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    ERC20Interface private token;
    uint256 private mintPrice;
    address private marketContractAddress;
    uint256[] private waitForMint;
    uint256 private maxTokenNum;
    string private baseURIextended;

    constructor(address _marketAddress, address _tokenContractAddress, string memory _MapleBaseURI) ERC721("MapleNFT", "NFT") {
        marketContractAddress = _marketAddress;

        mintPrice = 1;
        maxTokenNum = 50; // TODO: change to 10000 on live environment
        _setToken(_tokenContractAddress);
        _setBaseURI(_MapleBaseURI);
        _generateMintArray();
    }

    function _generateMintArray() private onlyOwner {
        for (uint256 i = 1; i <= maxTokenNum; i++) {
            waitForMint.push(i);
        }
    }

    function mintMapleNFT() public returns (uint256) {
        require(token.balanceOf(msg.sender) >= mintPrice, "ERC721: recipient lack of erc20 balance");

        token.transferFrom(msg.sender, address(this), mintPrice);

        _shuffleMintArray();
        uint256 minted = waitForMint[waitForMint.length - 1];
        waitForMint.pop();

        _safeMint(msg.sender, minted);
        setApprovalForAll(marketContractAddress, true); // grant transaction permission to market

        return minted;
    }

    function _shuffleMintArray() private {
        uint256 i = waitForMint.length - 1;
        /*
         * IMPORTANT: 실제 프로덕트라면 block.timestamp가 아닌 chainlink 등의 오라클을 통해 난수를 주입해야한다.
         */
        uint256 n = uint256(keccak256(abi.encodePacked(block.timestamp))) % (waitForMint.length);
        uint256 temp = waitForMint[n];
        waitForMint[n] = waitForMint[i];
        waitForMint[i] = temp;
    }

    function _setBaseURI(string memory _MapleBaseURI) private onlyOwner {
        baseURIextended = _MapleBaseURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURIextended;
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal
      override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(
        uint256 _tokenId
    ) internal override(ERC721, ERC721URIStorage) {
        super._burn(_tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function tokenURI(
        uint256 _tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(_tokenId);
    }

    function _setToken(address _tokenAddress) private onlyOwner returns (bool) {
        require(_tokenAddress != address(0x0));
        token = ERC20Interface(_tokenAddress);
        return true;
    }

    function withdraw() external onlyOwner returns (uint256) {
        uint256 totalValue = token.balanceOf(address(this));
        token.approve(address(this), totalValue);
        token.transferFrom(address(this), msg.sender, totalValue);
        return totalValue;
    }
}
