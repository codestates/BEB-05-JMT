import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilValue , useSetRecoilState } from "recoil"
import { backgroundAtom } from "../recoil/background/atom"
import { accountAtom } from "../recoil/account/atom"
import { charMetadataAtom, weaponMetadataAtom } from '../recoil/tokenMetadata/atom';
import { matchingAtom } from '../recoil/matching/atom';
import { Link } from "react-router-dom";
import '../pages/styles/Fight.css';
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';

const FightResult = () => {
  const chardata = useRecoilValue(charMetadataAtom);
  const weapondata = useRecoilValue(weaponMetadataAtom);
  const matchingdata = useRecoilValue(matchingAtom);
  const account = useRecoilValue(accountAtom)
  const [scrollselected, setScrollSelected] = useState(true);
  const [tokenselected, setTokenSelected] = useState(true);
  const [userWinImage, setUserWinImage] = useState();
  const [userLoseImage, setUserLoseImage] = useState();
  const [matchingwinImage, setMatchingWinImage] = useState();
  const [matchingloseImage, setMatchingLoseImage] = useState();
  const [leftResult, setLeftResult] = useState();
  const [rightResult, setRightResult] = useState();
  const setBackground = useSetRecoilState(backgroundAtom)
  const navigate = useNavigate();


  const fightresult = async () => {
    const userweapon = contractAPI.fetchAttributes(weapondata.attributes);
    const leftstrength = userweapon.strength;
    const rightstrength = matchingdata.strength;

    // 유저 승,패 이미지
    const WinImage = await metadataAPI.fetchWinImage(chardata.attributes, weapondata.attributes, 'animated');
    const LoseImage = await metadataAPI.fetchLoseImage(chardata.attributes, weapondata.attributes, 'animated');
    setUserWinImage(WinImage);
    setUserLoseImage(LoseImage);
    console.log(userWinImage);

    // 매칭 승,패 이미지
    const Mchardata = matchingdata.matchingChardata
    const Mweapondata = matchingdata.matchingWeapondata
    const MwinImage = await metadataAPI.fetchWinImage(Mchardata.attributes, Mweapondata.attributes, 'animated');
    const MloseImage = await metadataAPI.fetchLoseImage(Mchardata.attributes, Mweapondata.attributes, 'animated');
    setMatchingWinImage(MwinImage);
    setMatchingLoseImage(MloseImage);    

    if ( leftstrength > rightstrength ) {
      //랜덤 보상
      //const scrollId = contractAPI.rewardScrollNFT(account.address);
      //setRewardScroll()
      setLeftResult(userWinImage);
      setRightResult(matchingloseImage);
      console.log(leftResult);
      console.log(rightResult);
    } else if ( leftstrength < rightstrength ) {
      setLeftResult(userLoseImage);
      setRightResult(matchingwinImage);
      console.log(leftResult);
      console.log(rightResult);
    }
  } 

  const userScroll = () => {
    const scrollId = contractAPI.rewardScrollNFT(account.address);
    setScrollSelected(false);
  }
  const userToken = () => {
    const rewardToken = contractAPI.rewardToken(account.address);
    setTokenSelected(false);
  }

  useEffect(() => {
    if (!account.address) {
        navigate('/login');
    } else if(!account.charId){
        navigate('/mint');
    } else {
      setBackground({type: 'fight'});
      fightresult();
    }
  }, [userWinImage, userLoseImage, matchingwinImage, matchingloseImage]);


	return (
		<div className='fight-container'>
        {leftResult === userWinImage?
        <div>
          <img className='fightresult-left-result' src ='../img/win.png' />
          <img className='fightresult-left-paper' src ='../img/weaponpaper.png' />
          <img className='fightresult-left-token' src ='../img/token.png' />
          {scrollselected ? <div className='fightresult-scroll-rewardbutton' onClick={userScroll} >스크롤 획득</div>
          : <div className='fightresult-scroll-reward'>획득 완료</div>
          }
          {tokenselected ? <div className='fightresult-token-rewardbutton' onClick={userToken} >토큰 획득</div>
          : <div className='fightresult-token-reward'>획득 완료</div>
          }
        </div>
        :
        <div> 
          <img className='fightresult-left-result' src ='../img/lose.png' />
          <img className='fightresult-right-paper' src ='../img/weaponpaper.png' />
          <img className='fightresult-right-token' src ='../img/token.png' />
        </div>
        }
        {rightResult === matchingloseImage?
          <img className='fightresult-right-result' src ='../img/lose.png' />
          : <img className='fightresult-right-result' src ='../img/win.png' />
        }

        <div className='fightresult-left-name'>{account.username}</div>
        <img className='fightresult-left-image' src ={leftResult} />
        <div className='fightresult-right-name'>{matchingdata.username}</div>
        <img className='fightresult-right-image' src ={rightResult} />
        <Link to="/home" className="fightresult-home">홈</Link>
		</div>
	);
}

export default FightResult;