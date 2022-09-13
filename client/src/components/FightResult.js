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
  const [userWinImage, setUserWinImage] = useState();
  const [userLoseImage, setUserLoseImage] = useState();
  const [matchingwinImage, setMatchingWinImage] = useState();
  const [matchingloseImage, setMatchingLoseImage] = useState();
  const [leftResult, setLeftResult] = useState();
  const [rightResult, setRightResult] = useState();
  const setBackground = useSetRecoilState(backgroundAtom)

  console.log(leftweapon);
  console.log(rightweapon);

  const fightresult = async () => {
    const WinImage = await metadataAPI.fetchWinImage(chardata.attributes, weapondata.attributes, 'animated');
    const LoseImage = await metadataAPI.fetchLoseImage(chardata.attributes, weapondata.attributes, 'animated');
    setUserWinImage(WinImage);
    setUserLoseImage(LoseImage);

    const Mchardata = matchingdata.matchingChardata
    const Mweapondata = matchingdata.matchingWeapondata
    const MwinImage = await metadataAPI.fetchWinImage(Mchardata.attributes, Mweapondata.attributes, 'animated');
    const MloseImage = await metadataAPI.fetchLoseImage(Mchardata.attributes, Mweapondata.attributes, 'animated');
    setMatchingWinImage(MwinImage);
    setMatchingLoseImage(MloseImage);

    if ( leftweapon > rightweapon) {
      setLeftResult(userWinImage);
      setRightResult(matchingloseImage);
      console.log(leftResult);
      console.log(rightResult);
    } else if ( leftweapon < rightweapon) {
      setLeftResult(userLoseImage);
      setRightResult(matchingwinImage);
      console.log(leftResult);
      console.log(rightResult);
    }
  } 

  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    }
    setBackground({type: 'fight'});
    fightresult();
  }, [userWinImage, userLoseImage, matchingwinImage, matchingloseImage]);

	return (
		<div className='fight-container'>
        {leftResult === userWinImage?
          <img className='fightresult-left-result' src ='../img/win.png' />
          : <img className='fightresult-left-result' src ='../img/lose.png' />
        }
        {leftResult === userWinImage?
          <img className='fightresult-left-paper' src ='../img/weaponpaper.png' />
          : <img className='fightresult-right-paper' src ='../img/weaponpaper.png' />
        }
        {leftResult === userWinImage?
          <img className='fightresult-left-token' src ='../img/token.png' />
          : <img className='fightresult-right-token' src ='../img/token.png' />
        }
        {rightResult === matchingloseImage?
          <img className='fightresult-right-result' src ='../img/lose.png' />
          : <img className='fightresult-right-result' src ='../img/win.png' />
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