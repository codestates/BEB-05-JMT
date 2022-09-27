import React, { useState, useEffect, useRef, useCallback } from 'react';
import { render } from "react-dom";
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState, useRecoilValue} from "recoil";
import { accountAtom } from "../../recoil/account/atom";
import { modalAtom } from "../../recoil/modal/atom";
import moment from 'moment';
import 'moment/locale/ko';
import contractAPI from "../../api/contract";
import '../styles/Token.css';

function Staking() {
  const account = useRecoilValue(accountAtom);
  const [modal, setModal] = useRecoilState(modalAtom);
  const navigate = useNavigate();
  const [vjmtAmount,setvJmtAmount] = useState(0); // vjmt토큰 수량 확인
  const [stakeAmount,setStakeAmount] = useState(0);
  const [rewardAmount,setRewardAmount] = useState(0); 
  //stakeinfo
  const [dateCounter, setDateCounter] = useState(0); //시간 확인
  const [counter, setCounter] = useState(0);
  const [amount,setAmount] = useState(0);
  const [state,setState] = useState(0);
  const decimals = 10**18;

  useEffect(() => {
    if(!account.address){
      navigate('/login');
    } else {
      balanceOfToken();
      balanceOfreward();
      stakeinfo();
    }
	}, [])

  const balanceOfToken = async () => {
    const balanceOfvJMT = await contractAPI.getBalnceOfvJmt(account.address);
      setvJmtAmount(balanceOfvJMT);
  }

  //스테이킹
  const staking = async () => {
    setModal({...modal, open: true, type: 'send', data: {message: "스테이킹중..."}});
    let result
    if(state === '0'){
      result = await contractAPI.vJMTStaking(stakeAmount,account.address);
    }
    setModal({...modal, open: true, type: 'send', data: {error: result[0], send: result[1], message: result[2]}});
  }

  //언스테이킹
  const unstaking = async () => {
    setModal({...modal, open: true, type: 'send', data: {message: "언스테이킹중..."}});
    let result
    if(state === '1'){
      result = await contractAPI.vJMTunStaking(account.address)
    }
    setModal({...modal, open: true, type: 'send', data: {error: result[0], send: result[1], message: result[2]}});
  }

  //언스테이킹 클레임
  const unstakingClaime = async () => {
    setModal({...modal, open: true, type: 'send', data: {message: "클레임중..."}});
    let result
    if(state === '2'){
      result = await contractAPI.vJMTunStakingClaime(account.address)
    }
    setModal({...modal, open: true, type: 'send', data: {error: result[0], send: result[1], message: result[2]}});
  }

  const stakeinfo = () => {
    contractAPI.vJMTStakeinfo(account.address).then((result)=>{
      let timestamp = result[2] * 1000;
      let date = new Date(timestamp);
      let new_date = moment(date).add(3, 'days').format('YYYY MMMM Do, a h:mm:ss');
      setCounter(new_date);

      let checkDate = moment().format('YYYY MMMM Do, a h:mm:ss');
      setDateCounter(checkDate);

      setAmount(result[3]);
      setState(result[5]);
    })
  }

  //카운트다운 기능 미완성
  // const countDownTimer = useCallback((date) => {
  //   let _vDate = moment(date).format('YYYY MMMM Do, a h:mm:ss');
  //   let _second = 1000;
  //   let _minute = _second * 60;
  //   let _hour = _minute * 60;
  //   let _day = _hour * 24;
  //   let timer;

  //   function showRemaining() {
  //       try {
  //           let now = moment();
  //           let distDt = _vDate - now;

  //           if (distDt < 0) {
  //               clearInterval(timer);
  //               let HapDate = '0' + '일 ' + '0' + '시 ' + '0' + '분 ' + '0' + '초';
  //               document.getElementById('timer').innerHTML = HapDate;
  //               return;
  //           }
  //           let days = Math.floor(distDt / _day);
  //           let hours = Math.floor((distDt % _day) / _hour);
  //           let minutes = Math.floor((distDt % _hour) / _minute);
  //           let seconds = Math.floor((distDt % _minute) / _second);

  //           let HapDate = parseInt(days) + '일 ' + parseInt(hours) + '시 ' + parseInt(minutes) + '분 ' + parseInt(seconds) + '초';
  //           document.getElementById('timer').innerHTML = HapDate;
  //       }
  //       catch (e) {
  //           console.log(e);
  //       }
  //   }
  //   timer = setInterval(showRemaining, 1000);
  // }, []);

  //보상 받기
  const reward = async () => {
    setModal({...modal, open: true, type: 'send', data: {message: "보상 받는중..."}});
    let result
    if(rewardAmount > 0){
      result = await contractAPI.getReward(account.address)
    }
    setModal({...modal, open: true, type: 'send', data: {error: result[0], send: result[1], message: result[2]}});
  }

  const balanceOfreward = async () => {
    const balanceOfReward = await contractAPI.viewReward(account.address);
      setRewardAmount(balanceOfReward);
  }
	

  return (
    <div className="staking-tab">
      <div className="staking-info">
        <div className="APR">APR 150%</div>
        <div className="staking-ui">
          <div className="staking-uinfo">
            <div className="text-size">vJMT 토큰</div>
            <div className="vtoken-amount">{(vjmtAmount/decimals)} vJMT</div>
          </div>
          <div>
            <div className="text-size">보상</div>
            <div className="vtoken-reward">{parseFloat((rewardAmount/decimals)).toFixed(12)} JMT</div>
          </div>
          <div>
            {rewardAmount > 0 ? <button className="reward-btn" onClick={() => reward()}>보상받기</button>
            :<button className="reward-btn1" disabled="disabled" onClick={() => reward()}>보상받기</button>}
          </div>
        </div>
      </div>

      <div className="staking-go">
        {state? (state === '0' ? 
          <div className="staking-rego">
            <div className="staking-vjmt">vJMT 스테이킹</div>
            <input 
                type="text" 
                placeholder="vJMT amount..." 
                className="staking-input" 
                onChange={(e) => setStakeAmount(e.target.value)}
                value={stakeAmount}
                />
            <div>
              <button className="staking-btn" onClick={() => staking()}>스테이킹</button>
            </div>
          </div>
          :
          (state === '1' ?
          <div className="staking-rego">
            <div className="staking-rego1">
              <div className="text-size">스테이킹한 토큰</div>
              <div className="staking-text">{(amount/decimals)} vJMT</div>
              <button className="unstaking-btn" onClick={() => unstaking()}>언스테이킹</button>
            </div>
          </div>
          :
          <div className="staking-rego">
            <div className="staking-rego1">
              <div className="text-size">수령 가능 시간</div>
              <div className="staking-text" id="timer">{counter}</div>
              { counter < dateCounter ? <button className="unstaking-btn" onClick={() => {unstakingClaime();navigate('/swap');}}>클레임</button> 
              :
              <button className="unstaking-btn1" disabled="disabled" onClick={() => unstakingClaime()}>클레임</button>
              }
            </div>
          </div>
          )): null}
      </div>
    </div>
  )
}

export default Staking;