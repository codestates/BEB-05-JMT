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
  const [userSwordImage, setUserSwordImage] = useState();
  const [userBowImage, setUserBowImage] = useState();
  const [userStaffImage, setUserStaffImage] = useState();
  const [userPolearmImage, setUserPolearmImage] = useState();
  const [userWeapon, setUserWeapon] = useState();
  const [matchingSwordImage, setMatchingSwordImage] = useState();
  const [matchingBowImage, setMatchingBowImage] = useState();
  const [matchingStaffImage, setMatchingStaffImage] = useState();
  const [matchingPolearmImage, setMatchingPolearmImage] = useState();
  const setFightResult = useSetRecoilState(fightresultAtom);
  const setBackground = useSetRecoilState(backgroundAtom)
  const navigate = useNavigate();
  const userweapon = contractAPI.fetchAttributes(weapondata.attributes);

  const fighting = async() => {
    // user 캐릭터 정보
    const fightImage = await metadataAPI.fetchFightImage(chardata.attributes, weapondata.attributes, 'animated');
    setUserWeapon(userweapon.strength);
    console.log(account.weaponId);
    console.log(fightImage);
    // 매칭 캐릭터 정보
    const Mchardata = matchingdata.matchingChardata
    const Mweapondata = matchingdata.matchingWeapondata
    const MfightImage = await metadataAPI.fetchFightImage(Mchardata.attributes, Mweapondata.attributes, 'animated');
    console.log(MfightImage);
    console.log(matchingdata);
    console.log(matchingdata.weaponId);

    if ( account.weaponId === 0 || account.weaponId === 1 || account.weaponId === 2) {
      setUserSwordImage(fightImage);
    } if ( matchingdata.weaponId === 0 || matchingdata.weaponId === 1 || matchingdata.weaponId === 2 ) {
      setMatchingSwordImage(MfightImage);
    } if ( account.weaponId === 100 || account.weaponId === 101 || account.weaponId === 102 ) {
      setUserBowImage(fightImage);
    } if ( matchingdata.weaponId === 100 || matchingdata.weaponId === 101 || matchingdata.weaponId === 102) {
      setMatchingBowImage(MfightImage);
    } if ( account.weaponId === 200 || account.weaponId === 201 || account.weaponId === 202 ) {
      setUserStaffImage(fightImage);
    } if ( matchingdata.weaponId === 200 || matchingdata.weaponId === 201 || matchingdata.weaponId === 202) {
      setMatchingStaffImage(MfightImage);
    } if ( account.weaponId === 300 || account.weaponId === 301 || account.weaponId === 302 ) {
      setUserPolearmImage(fightImage);
    } if ( matchingdata.weaponId === 300 || matchingdata.weaponId === 301 || matchingdata.weaponId === 302) {
      setMatchingPolearmImage(MfightImage);
    }

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

  console.log(userSwordImage);
  console.log(matchingPolearmImage);
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
        <div className='weapon-right'>무기 강화: {matchingdata.strength}</div>
        <div className='fighting-right-name'>{matchingdata.username}</div>
        {userSwordImage? <img className='fighting-left-swordimage' src ={userSwordImage} /> : null}
        {userBowImage? <img className='fighting-left-bowimage' src ={userBowImage} /> : null}
        {userStaffImage? <img className='fighting-left-staffimage' src ={userStaffImage} /> : null}
        {userPolearmImage? <img className='fighting-left-polearmimage' src ={userPolearmImage} /> : null}
        {matchingSwordImage? <img className='fighting-right-swordimage' src ={matchingSwordImage} /> : null}
        {matchingBowImage? <img className='fighting-right-bowimage' src ={matchingBowImage} /> : null}
        {matchingStaffImage? <img className='fighting-right-staffimage' src ={matchingStaffImage} /> : null}
        {matchingPolearmImage? <img className='fighting-right-polearmimage' src ={matchingPolearmImage} /> : null}
      </div>
      : 
      <div>
        <div className='fighting-result-text' onClick={result}>전투 결과 확인</div>
        <div className='weapon-left'>무기 강화: {userWeapon}</div>
        <div className='fighting-left-name'>{account.username}</div>
        <div className='weapon-right'>무기 강화: {matchingdata.strength}</div>
        <div className='fighting-right-name'>{matchingdata.username}</div>
        {userSwordImage? <img className='fighting-left-swordimage' src ={userSwordImage} /> : null}
        {userBowImage? <img className='fighting-left-bowimage' src ={userBowImage} /> : null}
        {userStaffImage? <img className='fighting-left-staffimage' src ={userStaffImage} /> : null}
        {userPolearmImage? <img className='fighting-left-polearmimage' src ={userPolearmImage} /> : null}
        {matchingSwordImage? <img className='fighting-right-swordimage' src ={matchingSwordImage} /> : null}
        {matchingBowImage? <img className='fighting-right-bowimage' src ={matchingBowImage} /> : null}
        {matchingStaffImage? <img className='fighting-right-staffimage' src ={matchingStaffImage} /> : null}
        {matchingPolearmImage? <img className='fighting-right-polearmimage' src ={matchingPolearmImage} /> : null}
      </div>
      }
		</div>
	);
}

export default Fighting;