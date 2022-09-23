import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilValue , useSetRecoilState } from "recoil"
import { backgroundAtom } from "../recoil/background/atom"
import { accountAtom } from "../recoil/account/atom"
import { matchingAtom, fightresultAtom } from '../recoil/matching/atom';
import { Link } from "react-router-dom";
import '../pages/styles/Fight.css';
import fightdataAPI from '../api/fightdata';

const FightResult = () => {
  const matchingdata = useRecoilValue(matchingAtom);
  const fightresultdata = useRecoilValue(fightresultAtom);
  const account = useRecoilValue(accountAtom)
  const [scrollselected, setScrollSelected] = useState(true);
  const [leftResult, setLeftResult] = useState();
  const [rightResult, setRightResult] = useState();
  const setBackground = useSetRecoilState(backgroundAtom)
  const navigate = useNavigate();

  console.log(fightresultdata);

  const fightresult = async () => {
    if ( fightresultdata === "User Win!!!" || fightresultdata === "User dramatic Win !!") {
      setLeftResult(matchingdata.userWinImage);
        setRightResult(matchingdata.MloseImage);
    } else {
      setLeftResult(matchingdata.userLoseImage);
        setRightResult(matchingdata.MwinImage);
    }
  } 

  const rewardResult = () => {
    const scrollId = fightdataAPI.rewardScrollNFT(account.address);
    const rewardtoken = fightdataAPI.rewardToken(account.address);
    setScrollSelected(false);
    console.log(scrollId);
    console.log(rewardtoken);
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
        {fightresultdata === "User Win!!!" || fightresultdata === "User dramatic Win !!"?
        (fightresultdata === "User dramatic Win !!"?
        <div>
          <img className='fightresult-critical' src ='../img/critical.gif' />
          <img className='fightresult-left-result' src ='../img/win.png' />
          <img className='fightresult-left-paper' src ='../img/weaponpaper.png' />
          <img className='fightresult-left-token' src ='../img/token.png' />
          {scrollselected ? <div className='fightresult-scroll-rewardbutton' onClick={rewardResult} >보상 획득</div>
          : <div className='fightresult-scroll-reward'>획득 완료</div>
          }
          <img className='fightresult-right-result' src ='../img/lose.png' />
        </div>
        :
        <div>
          <img className='fightresult-left-result' src ='../img/win.png' />
          <img className='fightresult-left-paper' src ='../img/weaponpaper.png' />
          <img className='fightresult-left-token' src ='../img/token.png' />
          {scrollselected ? <div className='fightresult-scroll-rewardbutton' onClick={rewardResult} >보상 획득</div>
          : <div className='fightresult-scroll-reward'>획득 완료</div>
          }
          <img className='fightresult-right-result' src ='../img/lose.png' />
        </div>)
        :
        <div> 
          <img className='fightresult-left-result' src ='../img/lose.png' />
          <img className='fightresult-right-paper' src ='../img/weaponpaper.png' />
          <img className='fightresult-right-token' src ='../img/token.png' />
          <img className='fightresult-right-result' src ='../img/win.png' />
        </div>
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