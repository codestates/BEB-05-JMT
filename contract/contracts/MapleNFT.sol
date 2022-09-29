// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "./interfaces/ERC20Interface.sol";
import "./JMToken.sol";

contract MapleNFT is Ownable, ERC721Enumerable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    JMToken private token;
    uint256 decimals = 10**18;
    address payable public treasuryWallet; // 비상금 계좌!
    uint256 private mintPrice;
    address private marketContractAddress;
    uint256[] private waitForMint;
    uint256 private maxTokenNum;
    string private baseURIextended;
    

    event Minted(address addr, uint256 tokenId, string tokenURI);

    constructor(
        address _marketAddress,
        address _tokenContractAddress, 
        string memory _MapleBaseURI, 
        address payable _treasuryWallet)  ERC721("MapleNFT", "NFT") {

        marketContractAddress = _marketAddress;
        mintPrice = 1;
        maxTokenNum = 100; // 5000개까지 만들었지만 constructor의 가스비 절약을 위해
        _setToken(_tokenContractAddress);
        _setBaseURI(_MapleBaseURI);
        _generateMintArray();
        treasuryWallet = _treasuryWallet;
    }

    function _generateMintArray() private onlyOwner {
        for (uint256 i = 0; i <= maxTokenNum; i++) {
            waitForMint.push(i);
        }
    }
    
    // 민팅 페이어블 
    function mintMapleNFT() public payable returns (uint256)  {
        require(token.balanceOf(msg.sender) >= mintPrice, "ERC721: recipient lack of erc20 balance");
        require(maxTokenNum >= totalSupply(), "ERC721: all nfts are minted");
        // waitForMint는 0~4999까지 준비된 tokenId가 들어있는 배열
        _shuffleMintArray(); // waitForMint[-1]과 waitForMint[랜덤인덱스]의 위치를 바꾼다.
        uint256 minted = waitForMint[waitForMint.length - 1];
        waitForMint.pop();

        _mint(msg.sender, minted);
        setApprovalForAll(marketContractAddress, true); // grant transaction permission to market

        //재무 토큰 지갑으로 전송
        bool success = token.increaseContractAllowance(
            msg.sender,
            address(this),
            mintPrice * decimals
        );
        require(success,"IncreaseContract Fail");
        token.transferFrom(msg.sender, treasuryWallet, mintPrice * decimals); 
        token.marketBurn(treasuryWallet, (mintPrice * decimals)/2);

        emit Minted(msg.sender, minted, tokenURI(minted));

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
    ) internal override {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(
        uint256 _tokenId
    ) internal override {
        super._burn(_tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function tokenURI(
        uint256 _tokenId
    ) public view override returns (string memory) {
        return super.tokenURI(_tokenId);
    }

    function _setToken(address jmtokenAddress) private onlyOwner returns (bool) {
        require(jmtokenAddress != address(0x0));
        token = JMToken(jmtokenAddress);
        return true;
    }

    function withdraw() external onlyOwner returns (uint256) {
        uint256 totalValue = token.balanceOf(address(this));
        token.approve(address(this), totalValue);
        token.transferFrom(address(this), msg.sender, totalValue);
        return totalValue;
    }
}
