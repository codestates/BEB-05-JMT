import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from "recoil"
import { accountAtom } from "../recoil/account/atom"
import { charMetadataAtom, weaponMetadataAtom } from '../recoil/tokenMetadata/atom';
import { matchingAtom, fightresultAtom } from '../recoil/matching/atom';
import '../pages/styles/Fight.css';
import { backgroundAtom } from "../recoil/background/atom"
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';
import loading from '../assets/loading.gif'
import fightdataAPI from '../api/fightdata';


const Fighting = () => {
  const [isLoading, setLoading] = useState(true);
  const chardata = useRecoilValue(charMetadataAtom);
  const weapondata = useRecoilValue(weaponMetadataAtom); 
  const account = useRecoilValue(accountAtom)
  const matchingdata = useRecoilValue(matchingAtom);
  const [userImage, setUserImage] = useState();
  const [userWeapon, setUserWeapon] = useState();
  const [matchingImage, setMatchingImage] = useState();
  const setFightResult = useSetRecoilState(fightresultAtom);
  const setBackground = useSetRecoilState(backgroundAtom)
  const navigate = useNavigate();
  const userweapon = contractAPI.fetchAttributes(weapondata.attributes);

  const fighting = async() => {
    // user 캐릭터 정보
    
    const fightImage = await metadataAPI.fetchFightImage(chardata.attributes, weapondata.attributes, 'animated');
    setUserImage(fightImage);
    setUserWeapon(userweapon.strength);
    
    // 매칭 캐릭터 정보
    const Mchardata = matchingdata.matchingChardata
    const Mweapondata = matchingdata.matchingWeapondata
    const MfightImage = await metadataAPI.fetchFightImage(Mchardata.attributes, Mweapondata.attributes, 'animated');
    setMatchingImage(MfightImage);

  }

const fightLoading = async() => {
  const fightresult = await fightdataAPI.fightResult(account.address, userweapon.strength, matchingdata.strength);
  console.log(fightresult);
  setLoading(false);
  setFightResult(fightresult);
}

  const result = () => {
    navigate('/fightresult');
  }

  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    } else if(!account.charId){
        navigate('/mint');
    } else {
      fighting();
      fightLoading();
      setBackground({type: 'fight'});
     }
  }, []);

	return (
		<div className='fight-container'>
      {isLoading?
      <div>
        <img className='fighting-spinner' src={loading} />
        <div className='fighting-spinner-text'>
          전투 결과 가져오는 중...
        </div>
        <div className='weapon-left'>무기 강화: {userWeapon}</div>
        <div className='fighting-left-name'>{account.username}</div>
        <img className='fighting-left-image' src ={userImage} />
        <div className='weapon-right'>무기 강화: {matchingdata.strength}</div>
        <div className='fighting-right-name'>{matchingdata.username}</div>
        <img className='fighting-right-image' src ={matchingImage} />
      </div>
      : 
      <div>
        <div className='fighting-result-text' onClick={result}>전투 결과 확인</div>
        <div className='weapon-left'>무기 강화: {userWeapon}</div>
        <div className='fighting-left-name'>{account.username}</div>
        <img className='fighting-left-image' src ={userImage} />
        <div className='weapon-right'>무기 강화: {matchingdata.strength}</div>
        <div className='fighting-right-name'>{matchingdata.username}</div>
        <img className='fighting-right-image' src ={matchingImage} />
      </div>
      }
		</div>
	);
}

export default Fighting;