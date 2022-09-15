import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { backgroundAtom } from "../recoil/background/atom"
import { accountAtom } from "../recoil/account/atom"
import { fightAtom } from "../recoil/fight/atom"
import { charMetadataAtom, weaponMetadataAtom } from '../recoil/tokenMetadata/atom';
import { addrinfoAtom } from '../recoil/addrinfo/atom';
import { matchingAtom } from '../recoil/matching/atom';
import { Link } from "react-router-dom";
import './styles/Fight.css';
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';

const Fight = () => {
  const [isLoading, setLoading] = useState(true);
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

      // 매칭 캐릭터 정보
      const RData = Math.floor(Math.random() * (addrdata.length));
      const Raddrdata = addrdata[RData];
      console.log(Raddrdata);

      const matchingChardata = await contractAPI.fetchCharacter(Raddrdata.charId);
      console.log(matchingChardata.attributes);

      const matchingWeapondata = await contractAPI.fetchWeapon(Raddrdata.weaponId);
      console.log(matchingWeapondata.attributes);
      
      const matchingweapon = contractAPI.fetchAttributes(matchingWeapondata.attributes);
      const MstandImage = await metadataAPI.fetchStandImage(matchingChardata.attributes, matchingWeapondata.attributes, 'animated');
      console.log(MstandImage);
      setMatchingWeapon(matchingweapon.strength);
      setMatchingName(Raddrdata.username);
      setMatchingImage(MstandImage);
      setMatchingData({
        username: Raddrdata.username,
        charId: Raddrdata.charId,
        weaponId: Raddrdata.weaponId,
        matchingChardata: matchingChardata,
        matchingWeapondata: matchingWeapondata,
        strength: matchingweapon.strength
      });
      setLoading(false);
    } catch (err) {
        console.log(err);
    }
}

  useEffect(() => {
    if (!account.address||!account.charId) {
      navigate('/login');
    } else {
      setBackground({type: 'fight'});
      fight();
    }
  }, []);

	return (
		<div className='fight-container'>
            <img className='fight-title' src='../img/vs.png'/>
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