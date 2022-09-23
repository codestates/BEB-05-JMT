// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MapleFight {
    uint randNum = 0;
    uint rewardProbability = 10;
    uint rewardProbability2 = 50;
    string result;

    function randMod(uint _modulus) internal returns(uint) { // 랜덤함수
        randNum++;
        return uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, randNum))) % _modulus;
    }

    function setFight(address _addr, uint _userstrength, uint _matchingstrength) public {
        require( msg.sender == _addr, "Incorrect Address");
        uint rand = randMod(100);
        if ( _userstrength > _matchingstrength ) {
            result = "User Win!!!";
        } else if ( rand <= rewardProbability ) { // 10%의 확률로 유저에게 크리티컬 발동
            _userstrength = _matchingstrength + 1;
            result = (_userstrength >= _matchingstrength? "User dramatic Win !!": "User Lose...");
        } else if (_userstrength == _matchingstrength) {  // 비겼을 때, 50%확률로 승리
            result = ( rand <= rewardProbability2 ? "User dramatic Win !!": "User Lose...");
        } else {
            result = "User Lose...";
        }
    } 

    function getFight() public view returns(string memory) {
        return result;
    }
}