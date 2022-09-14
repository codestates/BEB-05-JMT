import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { backgroundAtom } from "../recoil/background/atom";
import { accountAtom } from "../recoil/account/atom";
import UserData from '../components/UserData';
import './styles/Ranking.css';
import contractAPI from '../api/contract';
import axios from 'axios';

const Ranking = () => {
  const account = useRecoilValue(accountAtom)
  const setBackground = useSetRecoilState(backgroundAtom)
  const navigate = useNavigate();
  const [rankInfo, setRankInfo] = useState();

  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    }
    setBackground({type: 'ranking'});
    sortArr();
  }, []);

  const sortArr = async()=>{
    const result = await axios.get('http://localhost:4000/user/userinfo');
    const orginalArr = result.data.data;
    const comparableArr = await Promise.all(
      orginalArr.map(async (x)=> [
        await contractAPI.fetchStrength(x.weaponId),
        x
      ])
    )
    comparableArr.sort((a,b)=>{
      return b[0]-a[0];
    });

    const sortedArr = comparableArr.map((x)=>{
      return x[1];
    });

    console.log(sortedArr);
    setRankInfo(sortedArr);
  }


	return (
		<div className='ranking-container'>
			<div className= 'userList'>
        {rankInfo ?
          [...Array(rankInfo.length)].map((_, idx) => {
            const userData = rankInfo[idx];
            return(
              <UserData userData={userData} key={idx}/>
            )
          })
          :
          ""
        }
        
      </div>
		</div>
	);
}

export default Ranking;
