import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from "recoil"
import { accountAtom } from "../recoil/account/atom"
import { charMetadataAtom, weaponMetadataAtom } from '../recoil/tokenMetadata/atom';
import { matchingAtom } from '../recoil/matching/atom';
import '../pages/styles/Fight.css';
import { backgroundAtom } from "../recoil/background/atom"
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';

const Fighting = () => {
  const chardata = useRecoilValue(charMetadataAtom);
  const weapondata = useRecoilValue(weaponMetadataAtom);
  const account = useRecoilValue(accountAtom)
  const matchingdata = useRecoilValue(matchingAtom);
  const [userImage, setUserImage] = useState();
  const [userWeapon, setUserWeapon] = useState();
  const [matchingImage, setMatchingImage] = useState();
  const setBackground = useSetRecoilState(backgroundAtom)
  const navigate = useNavigate();

  const fighting = async() => {
    // user 캐릭터 정보
    const userweapon = contractAPI.fetchAttributes(weapondata.attributes);
    const fightImage = await metadataAPI.fetchFightImage(chardata.attributes, weapondata.attributes, 'animated');
    setUserImage(fightImage);
    setUserWeapon(userweapon.strength);
    
    // 매칭 캐릭터 정보
    const Mchardata = matchingdata.matchingChardata
    const Mweapondata = matchingdata.matchingWeapondata
    const MfightImage = await metadataAPI.fetchFightImage(Mchardata.attributes, Mweapondata.attributes, 'animated');
    setMatchingImage(MfightImage);
  }

  const result = () => {
    window.location = '/fightresult';
  }
  setTimeout(result, 4000);

  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    }
    fighting();
    setBackground({type: 'fight'});
  }, []);

	return (
		<div className='fight-container'>
        <div className='fighting-text'>Fighting!!</div>
        <img className='fighting-title' src='../img/loading.gif' />
        <div className='weapon-left'>무기 강화: {userWeapon}</div>
        <div className='fighting-left-name'>{account.username}</div>
        <img className='fighting-left-image' src ={userImage} />
        <div className='weapon-right'>무기 강화: {matchingdata.strength}</div>
        <div className='fighting-right-name'>{matchingdata.username}</div>
        <img className='fighting-right-image' src ={matchingImage} />
		</div>
	);
}

export default Fighting;