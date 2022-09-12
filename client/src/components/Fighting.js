import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from "recoil"
import { accountAtom } from "../recoil/account/atom"
import { tokenMetadataAtom } from '../recoil/tokenMetadata/atom';
import { fightAtom } from '../recoil/fight/atom';
import { dummyFight } from './dummyFight';
import '../pages/styles/Fight.css';
import { backgroundAtom } from "../recoil/background/atom"

const Fighting = () => {
  const fightTokenMetadata = useRecoilValue(tokenMetadataAtom);
  const fightdata = useRecoilValue(fightAtom)
  const account = useRecoilValue(accountAtom)
  const setBackground = useSetRecoilState(backgroundAtom)
  const navigate = useNavigate();

  const result = () => {
    window.location = '/fightresult';
  }
  setTimeout(result, 4000);

  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    }
    setBackground({type: 'fight'});
  }, []);

	return (
		<div className='fight-container'>
        <div className='fighting-text'>Fighting!!</div>
        <img className='fighting-title' src='../img/loading.gif' />
        <div className='weapon-left'>무기 강화: {dummyFight[0].weapon}</div>
        <div className='fighting-left-name'>{account.username}</div>
        <img className='fighting-left-image' src ={fightTokenMetadata.image} />
        <div className='weapon-right'>무기 강화: {fightdata.weapon}</div>
        <div className='fighting-right-name'>{fightdata.username}</div>
        <img className='fighting-right' src ={fightdata.fightimg} />
		</div>
	);
}

export default Fighting;