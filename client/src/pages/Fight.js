import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from "recoil"
import { accountAtom } from "../recoil/account/atom"
import { fightAtom } from "../recoil/fight/atom"
import { tokenMetadataAtom } from '../recoil/tokenMetadata/atom';
import { dummyFight } from '../components/dummyFight';
import { Link } from "react-router-dom";
import './styles/Fight.css';

const Fight = () => {
  const [isLoading, setLoading] = useState(true);
  const [isFight, setFight] = useRecoilState(fightAtom);
  const account = useRecoilValue(accountAtom);
  const fightTokenMetadata = useRecoilValue(tokenMetadataAtom);
  const navigate = useNavigate();
  
  const fight = async () => {
    try {
      const Rdummy = await Math.floor(Math.random()* (dummyFight.length-1) +1);
      console.log(Rdummy);
      setFight(dummyFight[Rdummy]);
      setLoading(false);
    } catch (err) {
        console.log(err);
    }
}
  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    }
    fight();
  }, []);

  console.log(account);
  console.log(fightTokenMetadata);
	return (
		<div className='fight-container'>
            <img className='fight-title' src='../img/vs.png'/>
            <Link to='/fighting'>
              <img className='fight-fight' src='../img/fight.png' />
            </Link>
            <div className='weapon-left'>무기 강화: {dummyFight[0].weapon}</div>
            <div className='fight-left-name'>{account.username}</div>
            <img className='fight-left-image' src ={fightTokenMetadata.image} />
            <div className='weapon-right'>무기 강화: {isFight.weapon}</div> 
            <div className='fight-right-name'>{isFight.username}</div>      
            <img className='fight-right-image' src ={isFight.img} /> 
		</div>
	);
}

export default Fight;