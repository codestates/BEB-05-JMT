import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilValue , useRecoilState, useSetRecoilState } from "recoil"
import { backgroundAtom } from "../recoil/background/atom"
import { accountAtom } from "../recoil/account/atom"
import { matchingAtom, fightresultAtom } from '../recoil/matching/atom';
import { modalAtom } from "../recoil/modal/atom";
import { Link } from "react-router-dom";
import '../pages/styles/Fight.css';
import fightdataAPI from '../api/fightdata';

const FightResult = () => {
  const matchingdata = useRecoilValue(matchingAtom);
  const fightresultdata = useRecoilValue(fightresultAtom);
  const account = useRecoilValue(accountAtom)
  const [modal, setModal] = useRecoilState(modalAtom);
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


  const rewardResult = async() => {
    // 토큰 보상
    setModal({...modal, open: true, type: 'fightTokenreward', data: {message: "JMT토큰 보상 확인중..."}});
    let rewardtoken;
    rewardtoken = await fightdataAPI.rewardToken(account.address);
    setModal({...modal, open: true, type: 'fightTokenreward', data: {error: rewardtoken[0], fightTokenreward: rewardtoken[1], message: rewardtoken[2] }});

    // 스크롤 보상
    //setModal({...modal, open: true, type: 'fightScrollreward', data: {message: "스크롤 보상 확인중..."}});
    let rewardscroll;
    rewardscroll = await fightdataAPI.rewardScrollNFT(account.address);
    setModal({...modal, open: true, type: 'fightScrollreward', data: {error: rewardscroll[0], fightScrollreward: rewardscroll[1] }});
    setScrollSelected(false);
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
          <div className='fightresult-left-win'>Win!!</div>
          <img className='fightresult-left-paper' src ='../img/weaponpaper.png' />
          <img className='fightresult-left-token' src ='../img/token.png' />
          {scrollselected ? <div className='fightresult-scroll-rewardbutton' onClick={rewardResult} >보상 확인</div>
          : <div className='fightresult-scroll-reward'>확인 완료</div>
          }
          <div className='fightresult-right-lose'>Lose..</div>
        </div>
        :
        <div>
          <div className='fightresult-left-win'>Win!!</div>
          <img className='fightresult-left-paper' src ='../img/weaponpaper.png' />
          <img className='fightresult-left-token' src ='../img/token.png' />
          {scrollselected ? <div className='fightresult-scroll-rewardbutton' onClick={rewardResult} >보상 확인</div>
          : <div className='fightresult-scroll-reward'>확인 완료</div>
          }
          <div className='fightresult-right-lose'>Lose..</div>
        </div>)
        :
        <div> 
          <div className='fightresult-left-lose'>Lose..</div>
          <img className='fightresult-right-paper' src ='../img/weaponpaper.png' />
          <img className='fightresult-right-token' src ='../img/token.png' />
          <div className='fightresult-right-win'>Win!!</div>
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