import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from "recoil"
import { accountAtom } from "../recoil/account/atom"
import { charMetadataAtom, weaponMetadataAtom } from '../recoil/tokenMetadata/atom';
import { fightAtom } from '../recoil/fight/atom';
import { matchingAtom } from '../recoil/matching/atom';
import { dummyFight } from './dummyFight';
import '../pages/styles/Fight.css';
import { backgroundAtom } from "../recoil/background/atom"
import metadataAPI from '../api/metadata';

const Fighting = () => {
  const chardata = useRecoilValue(charMetadataAtom);
  const weapondata = useRecoilValue(weaponMetadataAtom);
  const fightdata = useRecoilValue(fightAtom)
  const account = useRecoilValue(accountAtom)
  const matchingdata = useRecoilValue(matchingAtom);
  const [userImage, setUserImage] = useState();
  const [matchingImage, setMatchingImage] = useState();
  const setBackground = useSetRecoilState(backgroundAtom)
  const navigate = useNavigate();

  const fighting = async() => {
    // user 캐릭터 정보
    const fightImage = await metadataAPI.fetchFightImage(chardata.attributes, weapondata.attributes, 'animated');
    setUserImage(fightImage);
    
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
        <div className='weapon-left'>무기 강화: {dummyFight[0].weapon}</div>
        <div className='fighting-left-name'>{account.username}</div>
        <img className='fighting-left-image' src ={userImage} />
        <div className='weapon-right'>무기 강화: {fightdata.weapon}</div>
        <div className='fighting-right-name'>{matchingdata.username}</div>
        <img className='fighting-right-image' src ={matchingImage} />
		</div>
	);
}

export default Fighting;