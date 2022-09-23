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
  const [tokenStaking,setTokenStaking] = useState(0);
  const decimals = 10**18;

  useEffect(() => {
    if(!account.address){
      navigate('/login');
    } else {
      balanceOfToken();
      balanceOfreward();
    }
	}, [])

  const balanceOfToken = async () => {
    const balanceOfvJMT = await contractAPI.getBalnceOfvJmt(account.address);
      setvJmtAmount(balanceOfvJMT);
  }

  //스테이킹
  const staking = async () => {
    if(stakeAmount > 0){
      const stake = await contractAPI.vJMTStaking(stakeAmount,account.address).then(()=>{
        console.log(stake);
        alert("전송 완료!");
        // window.location.reload();
      })
    } else {
      alert('vJMT토큰의 양을 적어주세요')
    }
  }

  //언스테이킹
  const unstaking = async () => {
    if(rewardAmount > 0){
      await contractAPI.vJMTunStaking().then((result)=>{
        console.log(result);
        // window.location.reload();
      })
    } else {
      alert('스테이킹 상태가 아닙니다.')
    }
  }

  //보상 받기
  const reward = async () => {
    // const balanceOfReward = await contractAPI.viewReward(account.address);
    //   setRewardAmount(balanceOfReward);
    if(rewardAmount > 0){
      await contractAPI.getReward(account.address,rewardAmount).then((result)=>{
        
      })
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
        <div className="staking-ui">
          <div className="staking-uinfo">
            <div className="text-size">vJMT 토큰</div>
            <div className="vtoken-amount">{(vjmtAmount/decimals)} vJMT</div>
          </div>
          <div>
            <div className="text-size">보상</div>
            <div className="vtoken-reward">{(rewardAmount/decimals)} JMT</div>
          </div>
          <div>
            <button className="reward-btn" onClick={() => reward()}>보상받기</button>
          </div>
        </div>
      </div>

      <div className="staking-go">
        <div className="staking-rego">
          <div className="staking-rego1">
            <div className="text-size">스테이킹한 토큰</div>
            <div className="staking-text">{}1000 vJMT</div>
          </div>
          <input 
              type="text" 
              placeholder="vJMT amount..." 
              className="lp-input" 
              onChange={(e) => setStakeAmount(e.target.value)}
              value={stakeAmount}
              />
          <div>
            <button className="staking-btn" onClick={() => staking()}>스테이킹</button>
            <button className="unstaking-btn" onClick={() => unstaking()}>언스테이킹</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Staking;