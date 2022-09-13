import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilValue , useSetRecoilState } from "recoil"
import { backgroundAtom } from "../recoil/background/atom"
import { accountAtom } from "../recoil/account/atom"
import { charMetadataAtom, weaponMetadataAtom } from '../recoil/tokenMetadata/atom';
import { matchingAtom } from '../recoil/matching/atom';
import { fightAtom } from '../recoil/fight/atom';
import { Link } from "react-router-dom";
import { dummyFight } from './dummyFight';
import '../pages/styles/Fight.css';
import metadataAPI from '../api/metadata';

const FightResult = () => {
  const chardata = useRecoilValue(charMetadataAtom);
  const weapondata = useRecoilValue(weaponMetadataAtom);
  const matchingdata = useRecoilValue(matchingAtom);
  const fightdata = useRecoilValue(fightAtom)
  const account = useRecoilValue(accountAtom)
  const navigate = useNavigate();
  const leftweapon = dummyFight[0].weapon;
  const rightweapon = fightdata.weapon;
  const [isLoading, setLoading] = useState(true);
  const [userImage, setUserImage] = useState();
  const [matchingImage, setMatchingImage] = useState();
  const [LeftResult, setLeftResult] = useState();
  const [RightResult, setRightResult] = useState();
  const setBackground = useSetRecoilState(backgroundAtom)

  console.log(leftweapon);
  console.log(rightweapon);

  const fightresult = async () => {
    const standImage = await metadataAPI.fetchStandImage(chardata.attributes, weapondata.attributes, 'animated');
    setUserImage(standImage);

    const Mchardata = matchingdata.matchingChardata
    const Mweapondata = matchingdata.matchingWeapondata
    const MstandImage = await metadataAPI.fetchStandImage(Mchardata.attributes, Mweapondata.attributes, 'animated');
    setMatchingImage(MstandImage);

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
    setBackground({type: 'fight'});
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
        <img className='fightresult-left-image' src ={userImage} />
        <div className='fightresult-right-name'>{matchingdata.username}</div>
        <img className='fightresult-right-image' src ={matchingImage} />
        <Link to="/home" className="fightresult-home">홈</Link>
		</div>
	);
}

export default FightResult;