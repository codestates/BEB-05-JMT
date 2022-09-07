import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from "recoil"
import { accountAtom } from "../recoil/account/atom"
import { tokenMetadataAtom } from '../recoil/tokenMetadata/atom';
import { fightAtom } from '../recoil/fight/atom';
import { Link } from "react-router-dom";
import { dummyFight } from './dummyFight';
import '../pages/styles/Fight.css';

const FightResult = () => {
  const fightTokenMetadata = useRecoilValue(tokenMetadataAtom);
  const fightdata = useRecoilValue(fightAtom)
  const account = useRecoilValue(accountAtom)
  const navigate = useNavigate();
  const leftweapon = dummyFight[0].weapon;
  const rightweapon = fightdata.weapon;
  const [isLoading, setLoading] = useState(true);
  const [LeftResult, setLeftResult] = useState();
  const [RightResult, setRightResult] = useState();

  console.log(leftweapon);
  console.log(rightweapon);

  const fightresult = async () => {
    if ( leftweapon > rightweapon) {
      setLeftResult(dummyFight[0].winimg);
      setRightResult(fightdata.loseimg);
      setLoading(false);
    } else if ( leftweapon < rightweapon) {
      setLeftResult(dummyFight[0].loseimg);
      setRightResult(fightdata.winimg);
      setLoading(false);
    }
  } 

  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    }
    fightresult();
  }, []);

  console.log(fightdata);

  console.log(LeftResult);
  console.log(RightResult);
	return (
		<div className='fight-container'>
        {LeftResult === dummyFight[0].winimg?
          <img className='fightresult-left-result' src ='../img/win.png' />
          : <img className='fightresult-left-result' src ='../img/lose.png' />
        }
        {LeftResult === dummyFight[0].winimg?
          <img className='fightresult-left-paper' src ='../img/weaponpaper.png' />
          : <img className='fightresult-right-paper' src ='../img/weaponpaper.png' />
        }
        {LeftResult === dummyFight[0].winimg?
          <img className='fightresult-left-token' src ='../img/token.png' />
          : <img className='fightresult-right-token' src ='../img/token.png' />
        }
        {RightResult === fightdata.loseimg?
          <img className='fightresult-right-result' src ='../img/lose.png' />
          : <img className='fightresult-right-result' src ='../img/win.png' />
        }
        <div className='fightresult-left-name'>{account.username}</div>
        <img className='fightresult-left-image' src ={fightTokenMetadata.image} />
        <div className='fightresult-right-name'>{fightdata.username}</div>
        <img className='fightresult-right' src ={RightResult} />
        <Link to="/home" className="fightresult-home">홈</Link>
		</div>
	);
}

export default FightResult;