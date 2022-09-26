// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./JMToken.sol";

contract MapleItems is ERC1155, Ownable, ERC1155Burnable, ERC1155Supply {
    JMToken private token;
    uint256 decimals = 10**18;
    address payable public treasuryWallet; // 비상금 계좌!
    uint256 private mintPrice;
    uint256 private maxStrength;
    uint randNum = 0;
    uint rewardProbability = 70;

    uint256[] private waitForMint;
    uint256[] private firstMint;
    uint256[] private itemCheck;
    uint256[] private scrollMint;
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
    
    event Upgraded(bool result, uint256 weaponId);
    event Rewarded(bool result);

    constructor(
        address _marketAddress,
        address _tokenContractAddress,
        address payable _treasuryWallet) 
        ERC1155("ipfs://QmUkUUWBisiFa9XUk4ucJiDr2fvk2tDr1xDrCkEF6FFCF8/{id}") {
        mintPrice = 1;
        maxStrength = 2;
        marketContractAddress = _marketAddress;
        _setToken(_tokenContractAddress);
        // generateWeaponArray();
        // generatefirstWeapon();
        // generateItemCheck();
        // generateScrollArray();
        
        treasuryWallet = _treasuryWallet;
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

    function generateWeaponArray() external onlyOwner{
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

    function generatefirstWeapon() external onlyOwner{
        firstMint.push(SWORD0); 
        firstMint.push(BOW0); 
        firstMint.push(STAFF0); 
        firstMint.push(POLEARM0); 
    }

    function generateItemCheck() external onlyOwner{
        itemCheck.push(SWORD0);
        itemCheck.push(SWORD1);
        itemCheck.push(SWORD2);
        itemCheck.push(SWORD3);

        itemCheck.push(BOW0);
        itemCheck.push(BOW1);
        itemCheck.push(BOW2);

        itemCheck.push(STAFF0);
        itemCheck.push(STAFF1);
        itemCheck.push(STAFF2);

        itemCheck.push(POLEARM0);
        itemCheck.push(POLEARM1);
        itemCheck.push(POLEARM2);

        itemCheck.push(SCROLL100);
        itemCheck.push(SCROLL90);
        itemCheck.push(SCROLL60);
        itemCheck.push(SCROLL30);
        itemCheck.push(SCROLL10);
    }

    function generateScrollArray() external onlyOwner{
        for (uint256 i = 0; i < 1; i++ ){
            scrollMint.push(SCROLL100); 
        }
        for (uint256 i = 0; i < 2; i++ ){
            scrollMint.push(SCROLL90);
        }
        for (uint256 i = 0; i < 4; i++ ){
            scrollMint.push(SCROLL60); 
        }
        for (uint256 i = 0; i < 6; i++ ){
            scrollMint.push(SCROLL30); 
        }
        for (uint256 i = 0; i < 7; i++ ){
            scrollMint.push(SCROLL10); 
        }
    }

    function mintFirstWeapon() public {
        require(balanceCheck(msg.sender).length==0, "ERC1155: you already have first weapon");

        uint256 n = uint256(keccak256(abi.encodePacked(block.timestamp))) % (firstMint.length);
        uint id = firstMint[n];

        _mint(msg.sender, id, 1, "");
        setApprovalForAll(marketContractAddress, true);
    }

    function mintRandomWeapon() public returns (uint256){  
        uint256 n = uint256(keccak256(abi.encodePacked(block.timestamp))) % (waitForMint.length);
        uint256 id = waitForMint[n];
        
        _mint(msg.sender, id, 1, "");
        setApprovalForAll(marketContractAddress, true);
        
        //재무 토큰 지갑으로 전송
        bool success = token.increaseContractAllowance(
            msg.sender, 
            address(this),
            mintPrice * decimals
        );
        require(success,"IncreaseContract Fail");
        token.transferFrom(msg.sender, treasuryWallet, mintPrice * decimals); 
        token.marketBurn(treasuryWallet, (mintPrice * decimals)/2);

        return id;
    }

    function mintScroll() public {
        uint256 n = uint256(keccak256(abi.encodePacked(block.timestamp))) % (scrollMint.length);
        uint id = scrollMint[n];
        
        _mint(msg.sender, id, 1, "");
        setApprovalForAll(marketContractAddress, true);
    }

    function upgrade(uint256 scrollId, uint256 weaponId) public {
        require(balanceOf(msg.sender, scrollId)!=0, "ERC1155: this scroll is not yours");
        require(balanceOf(msg.sender, weaponId)!=0, "ERC1155: this weapon is not yours");
        require(weaponId%100<2, "ERC1155: this weapon is fully upgraded");
        uint256 scrollRate;

        if(scrollId%100==0){
            scrollRate = 100;
        }else if(scrollId%100==1){
            scrollRate = 90;
        }else if(scrollId%100==2){
            scrollRate = 60;
        }else if(scrollId%100==3){
            scrollRate = 30;
        }else if(scrollId%100==4){
            scrollRate = 10;
        }

        uint256 n = uint256(keccak256(abi.encodePacked(block.timestamp))) % 100;
        if(n<=scrollRate){
            _mint(msg.sender, weaponId+1, 1, "");
            _burn(msg.sender, weaponId, 1);
            _burn(msg.sender, scrollId, 1);
            setApprovalForAll(marketContractAddress, true);
            emit Upgraded(true, weaponId+1);
        } else{
            _burn(msg.sender, scrollId, 1);
            emit Upgraded(false, weaponId);
        }        
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, data);
    }

    function balanceCheck(address sender) public returns(uint256[][] memory){
        uint256[][] memory balance = new uint256[][](itemCheck.length);
        uint256 count = 0;

        for(uint256 i=0; i<itemCheck.length; i++){
            uint256 mybalance = balanceOf(sender, itemCheck[i]); 
            if(mybalance!=0){
                balance[count] = new uint256[](2);
                balance[count][0] = itemCheck[i];
                balance[count][1] = mybalance;
                count++;
            }            
        }

        uint256[][] memory result = new uint256[][](count);
        for(uint256 i=0; i<count; i++){
            result[i] = new uint256[](2);
            result[i][0] = balance[i][0];
            result[i][1] = balance[i][1];
        }

        return result;
    }
    
    function _setToken(address _tokenAddress) private onlyOwner returns (bool) {
        require(_tokenAddress != address(0x0));
        token = JMToken(_tokenAddress);
        return true;
    }
    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    // 전투 랜덤 보상(강화 스크롤)
    function randMod(uint _modulus) internal returns(uint) { // 랜덤함수
        randNum++;
        return uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, randNum))) % _modulus;
    }

    function randRewardScroll() external {
        uint rand = randMod(100);
        if ( rand <= rewardProbability ) {// 70% 확률로 강화 스크롤 획득
            mintScroll();
            emit Rewarded(true);
        } else {
            emit Rewarded(false);
        }
    }
}