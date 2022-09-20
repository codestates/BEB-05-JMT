import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilValue , useSetRecoilState } from "recoil"
import { backgroundAtom } from "../recoil/background/atom"
import { accountAtom } from "../recoil/account/atom"
import { weaponMetadataAtom } from '../recoil/tokenMetadata/atom';
import { matchingAtom } from '../recoil/matching/atom';
import { Link } from "react-router-dom";
import '../pages/styles/Fight.css';
import contractAPI from '../api/contract';

const FightResult = () => {
  //const [isLoading, setLoading] = useState(true);
  const weapondata = useRecoilValue(weaponMetadataAtom);
  const matchingdata = useRecoilValue(matchingAtom);
  const account = useRecoilValue(accountAtom)
  const [scrollselected, setScrollSelected] = useState(true);
  const [leftResult, setLeftResult] = useState();
  const [rightResult, setRightResult] = useState();
  const setBackground = useSetRecoilState(backgroundAtom)
  const navigate = useNavigate();
  
  const fightresult = async () => {
    const userweapon = contractAPI.fetchAttributes(weapondata.attributes);
    const leftstrength = await userweapon.strength;
    const rightstrength = await matchingdata.strength;

    if ( leftstrength > rightstrength ) {
      setTimeout(rewardToken, 1000);
      setLeftResult(matchingdata.userWinImage);
      setRightResult(matchingdata.MloseImage);
    } else if ( leftstrength < rightstrength ) {
      setLeftResult(matchingdata.userLoseImage);
      setRightResult(matchingdata.MwinImage);
    }
  }

  const rewardScroll = () => {
    const scrollId = contractAPI.rewardScrollNFT(account.address);
    setScrollSelected(false);
  }
  const rewardToken = () => {
    const rewardtoken = contractAPI.rewardToken(account.address);
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
  }, []);

	return (
		<div className='fight-container'>
        {leftResult === matchingdata.userWinImage?
        <div>
          <img className='fightresult-left-result' src ='../img/win.png' />
          <img className='fightresult-left-paper' src ='../img/weaponpaper.png' />
          <img className='fightresult-left-token' src ='../img/token.png' />
          {scrollselected ? <div className='fightresult-scroll-rewardbutton' onClick={rewardScroll} >스크롤 획득</div>
          : <div className='fightresult-scroll-reward'>획득 완료</div>
          }
        </div>
        :
        <div> 
          <img className='fightresult-left-result' src ='../img/lose.png' />
          <img className='fightresult-right-paper' src ='../img/weaponpaper.png' />
          <img className='fightresult-right-token' src ='../img/token.png' />
        </div>
        }
        {rightResult === matchingdata.MloseImage?
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