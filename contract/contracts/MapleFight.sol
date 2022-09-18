// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract MapleFight {

    struct User {
        uint weaponId;
        uint strength;
        uint winCount;
        uint loseCount;
    }

    User[] public users;

    mapping (uint => address) public fightOwner;

    function fight(uint _userweaponId, uint _matchingweaponId) public {
        require(msg.sender == fightOwner[_userweaponId]);
        User storage user = users[_userweaponId];
        User storage matchinguser = users[_matchingweaponId];

        user.weaponId = _userweaponId;
        user.strength = _userweaponId % 100;
        user.winCount = 0;
        user.loseCount = 0;
        matchinguser.weaponId = _matchingweaponId;
        matchinguser.strength = _matchingweaponId % 100;
        matchinguser.winCount = 0;
        matchinguser.loseCount = 0;
        
        if ( user.strength > matchinguser.strength ) {
            user.winCount++;
            matchinguser.loseCount++;
        } else {
            user.loseCount++;
            matchinguser.winCount++;
        }
    }
}