import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { backgroundAtom } from "../recoil/background/atom"
import { accountAtom } from "../recoil/account/atom"
import { charMetadataAtom, weaponMetadataAtom } from '../recoil/tokenMetadata/atom';
import { addrinfoAtom } from '../recoil/addrinfo/atom';
import { matchingAtom } from '../recoil/matching/atom';
import { Link } from "react-router-dom";
import './styles/Fight.css';
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';
import accountAPI from '../api/account';
import userAPI from '../api/user';

const Fight = () => {
  const [userWeapon, setUserWeapon] = useState();
  const [userImage, setUserImage] = useState();
  const [matchingWeapon, setMatchingWeapon] = useState();
  const [matchingName, setMatchingName] = useState();
  const [matchingImage, setMatchingImage] = useState();
  const setBackground = useSetRecoilState(backgroundAtom)
  const setMatchingData = useSetRecoilState(matchingAtom);
  const account = useRecoilValue(accountAtom);
  const chardata = useRecoilValue(charMetadataAtom);
  const weapondata = useRecoilValue(weaponMetadataAtom);
  const addrdata = useRecoilValue(addrinfoAtom);
  const navigate = useNavigate();


  const fight = async () => {
    try {
      // user 캐릭터 정보
      const userweapon = contractAPI.fetchAttributes(weapondata.attributes);
      const standImage = await metadataAPI.fetchStandImage(chardata.attributes, weapondata.attributes, 'animated');
      console.log(standImage);
      setUserWeapon(userweapon.strength);
      setUserImage(standImage);
      const userWinImage = await metadataAPI.fetchWinImage(chardata.attributes, weapondata.attributes, 'animated');
      const userLoseImage = await metadataAPI.fetchLoseImage(chardata.attributes, weapondata.attributes, 'animated');
 
      // 매칭 캐릭터 정보
      // const RData = Math.floor(Math.random() * (addrdata.length));
      // const Raddrdata = addrdata[RData];
      // console.log(Raddrdata);

      const matchedUser = await userAPI.matchUser(account.address);
      console.log(matchedUser);
      const matchedChar = matchedUser.charToken.tokenId;
      const matchedWeapon = matchedUser.weaponToken.tokenId;
      const matchedAddr = matchedUser.user;
      const check = await accountAPI.fetchUser(matchedAddr);
      const matchedName = check.username;

      const matchingChardata = await contractAPI.fetchCharacter(matchedChar);
      console.log(matchingChardata.attributes);

      const matchingWeapondata = await contractAPI.fetchWeapon(matchedWeapon);
      console.log(matchingWeapondata.attributes);

      const MwinImage = await metadataAPI.fetchWinImage(matchingChardata.attributes, matchingWeapondata.attributes, 'animated');
      const MloseImage = await metadataAPI.fetchLoseImage(matchingChardata.attributes, matchingWeapondata.attributes, 'animated');
      
      const matchingweapon = contractAPI.fetchAttributes(matchingWeapondata.attributes);
      const MstandImage = await metadataAPI.fetchStandImage(matchingChardata.attributes, matchingWeapondata.attributes, 'animated');
      console.log(MstandImage);
      setMatchingWeapon(matchingweapon.strength);
      setMatchingName(matchedName);
      setMatchingImage(MstandImage);
      setMatchingData({
        address: matchedAddr,
        username: matchedName,
        charId: matchedChar,
        weaponId: matchedWeapon,
        matchingChardata: matchingChardata,
        matchingWeapondata: matchingWeapondata,
        strength: matchingweapon.strength,
        userWinImage: userWinImage,
        userLoseImage: userLoseImage,
        MwinImage: MwinImage,
        MloseImage: MloseImage
      });
    } catch (err) {
        console.log(err);
    }
}

  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    } else if(!account.charId){
        navigate('/mint');
    } else {
      setBackground({type: 'fight'});
      fight();
    }
  }, []);

	return (
		<div className='fight-container'>
            <div className='fight-title'>VS</div>
            <Link to='/fighting'>
              <img className='fight-fight' src='../img/fight.png' />
            </Link>
            <div className='weapon-left'>무기 강화: {userWeapon}</div>
            <div className='fight-left-name'>{account.username}</div>
            <img className='fight-left-image' src ={userImage} />
            <div className='weapon-right'>무기 강화: {matchingWeapon}</div> 
            <div className='fight-right-name'>{matchingName}</div>      
            <img className='fight-right-image' src ={matchingImage} /> 
		</div>
	);
}

export default Fight;