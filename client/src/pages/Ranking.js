import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { strengthAtom, equipImgAtom } from '../recoil/tokenMetadata/atom';
import { backgroundAtom } from "../recoil/background/atom";
import { accountAtom } from "../recoil/account/atom";
import UserData from '../components/UserData';
import Spinner from "../components/Spinner";
import './styles/Ranking.css';
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';
import accountAPI from '../api/account';
import userAPI from '../api/user';

const Ranking = () => {
  const account = useRecoilValue(accountAtom);
  const setBackground = useSetRecoilState(backgroundAtom);
  const [myImg, setImage] = useRecoilState(equipImgAtom);
  const navigate = useNavigate();
  const [rankInfo, setRankInfo] = useState();
  const [myRank, setmyRank] = useState();
  const [rankReward, setRankReward] = useState();
  const [loading, setLoading] = useState(false);
  const myStr = useRecoilValue(strengthAtom);

  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    } else if(!account.charId){
        navigate('/mint');
    } else {
      setBackground({type: 'ranking'});
      imageSet();
      sortArr();
      checkReward();
      setLoading(true);
    }
  }, [rankReward]);

  const sortArr = async()=>{
    const result = await accountAPI.userinfo();
    const test = await userAPI.fetchUserList();
    console.log(test);
    const originalArr = result.filter(user => user.address && user.username);
    const comparableArr = await Promise.all(
      originalArr.map(async (x)=> [
        await contractAPI.fetchStrength(x.weaponId),
        x
      ])
    );

    comparableArr.sort((a,b)=>{
      return b[0]-a[0];
    });

    const asyncFilter = async (arr, predicate) => {
      const results = await Promise.all(arr.map(predicate));
    
      return arr.filter((_v, index) => results[index]);
    };

    const sortedArr = comparableArr.map((x)=>{
      return x[1];
    });

      const realArr = await asyncFilter(sortedArr, async(x)=>{
      const hasChar = await contractAPI.isCharOwner(x.address, x.charId);
      const hasWeapon = await contractAPI.isWeaponOwner(x.address, x.weaponId);
      return hasChar&&hasWeapon;
    });

    myrank(realArr);
    console.log(realArr);
    setRankInfo(realArr);
    setLoading(false);
  }

  const imageSet = async() =>{
    const char = await contractAPI.fetchCharacter(account.charId);
    const weapon = await contractAPI.fetchWeapon(account.weaponId);
    const standImage = await metadataAPI.fetchStandImage(char.attributes, weapon.attributes, 'animated');
    setImage(standImage);
  }

  const checkReward = async()=>{
    if(myRank){
      const myReward = await userAPI.fetchUserReward(myRank);
      setRankReward(myReward);
    }
  }
  const myrank = async(arr) => {
    for(const idx in arr){
      if(arr[idx].username == account.username){
        const rank = parseInt(idx)+1;
        setmyRank(rank);
        console.log(rank);
        const myReward = await userAPI.fetchUserReward(rank);
        setRankReward(myReward);
      }
    }
  }

  const receiveReward = async() => {
    const request  = await userAPI.requestUserReward(account.address, myRank);
    console.log(request);
  }

  const shortenAddress = (address) => {
      return address.substring(0, 6) + '...' + address.slice(-3)
  }

  const openScan = (address) => {
      // 로컬환경은 안나옴
      window.open(`https://mumbai.polygonscan.com/address/${address}`, '_blank').focus();
  }

	return (
		<>
      {loading ? 
      (<Spinner/>) : (
        <div className='ranking-container'>
          <div className= 'column'>
            <span className='column-rank'>순위</span>
            <span className='column-name'>이름</span>
            <span className='column-char'>캐릭터</span>
            <span className='column-str'>레벨</span>
          </div>
          <div className= 'userList'>
            {rankInfo ?
              [...Array(rankInfo.length)].map((_, idx) => {
                const userData = rankInfo[idx];
                const rank = idx+1;
                return(
                  <UserData rankArr={rankInfo} userData={userData} rank={rank} key={idx}/>
                )
              })
              :
              ""
            }            
          </div>
          <div className= 'mychar'>
            <span className='desc'>내 캐릭터</span>
          </div>
          <div className= 'selectedUser'>
            <div
              className="myname-container"
              onClick={() => openScan(account.address)}
            >
              <div className='myrank'>{myRank}위</div>
              <div className='myname'>Lv.{myStr} {account.username}</div>
              <div className='myaddress'>{shortenAddress(account.address)}</div>
            </div>
            <img className='myimg' src={myImg} />
            <div className='reward'>{rankReward} JMT</div>
            <div className='reward-btn' onClick={receiveReward}>보상 수령</div>
          </div>
        </div>
      )}
		</>
	);
}

export default Ranking;
