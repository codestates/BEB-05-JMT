import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState, useRecoilValue} from "recoil";
import { accountAtom } from "../../recoil/account/atom";
import contractAPI from "../../api/contract";
import '../styles/Token.css';

function Staking() {
  const account = useRecoilValue(accountAtom);
  const navigate = useNavigate();
  const [vjmtAmount,setvJmtAmount] = useState(0); // vjmt토큰 수량 확인
  const [stakeAmount,setStakeAmount] = useState();
  const [rewardAmount,setRewardAmount] = useState(0); 
  const [counter, setCounter] = useState(259200);
  //stakeinfo
  const [claimedTime,setClaimedTime] = useState(0);
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
    console.log(state);
	}, [])

  const balanceOfToken = async () => {
    const balanceOfvJMT = await contractAPI.getBalnceOfvJmt(account.address);
      setvJmtAmount(balanceOfvJMT);
  }

  //스테이킹
  const staking = async () => {
    if(state === '0'){
      await contractAPI.vJMTStaking(stakeAmount,account.address).then((result)=>{
        console.log(result);
        alert("전송 완료!");
      })
    }
  }

  //언스테이킹
  const unstaking = async () => {
    if(state === '1'){
      await contractAPI.vJMTunStaking(account.address).then((result)=>{
        console.log(result);
      })
    }
  }

  //언스테이킹 클레임
  const unstakingClaime = async () => {
    if(state === '2'){
      await contractAPI.vJMTunStakingClaime(account.address).then((result)=>{
        console.log(result);
      })
    }
  }

  const stakeinfo = () => {
    contractAPI.vJMTStakeinfo(account.address).then((result)=>{
      console.log(result)
      setClaimedTime(result[1]);
      setAmount(result[3]);
      setState(result[5])
    })
  }

  //보상 받기
  const reward = async () => {
    if(rewardAmount > 0){
      await contractAPI.getReward(account.address)
    } else {
      alert('보상받을 토큰이 없습니다.')
    }
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
            <button className="reward-btn" onClick={() => reward()}>보상받기</button>
          </div>
        </div>
      </div>

      <div className="staking-go">
        {state? (state === '0' ? 
          <div className="staking-rego">
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
              <div className="text-size">클레임 시간</div>
              <div className="staking-text">남은 시간 : {Date(claimedTime * 1000)}</div>
              <button className="unstaking-btn" onClick={() => unstakingClaime()}>클레임</button>
            </div>
          </div>
          )): null}
      </div>
    </div>
  )
}

export default Staking;