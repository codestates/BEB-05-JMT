import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState, useRecoilValue} from "recoil"
import { accountAtom } from "../recoil/account/atom"
import { backgroundAtom } from "../recoil/background/atom"
import { charMetadataAtom, weaponMetadataAtom } from '../recoil/tokenMetadata/atom';
import { Link } from "react-router-dom";
import './styles/Home.css';
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';

const Home = () => {
  const account = useRecoilValue(accountAtom);
  const setCharMetadata = useSetRecoilState(charMetadataAtom);
  const setBackground = useSetRecoilState(backgroundAtom)
  const setWeaponMeatadata = useSetRecoilState(weaponMetadataAtom);
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const [strength, setStrength] = useState();
  const [charName, setCharName] = useState();
  const [weaponName, setWeaponName] = useState();

  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    }
    setBackground({type: 'default'});
    mychar();
  }, []);

  const mychar = async() =>{
    console.log(account);
    const characterMetadata = await contractAPI.fetchCharacter(account.address, account.charId);
    setCharMetadata(characterMetadata);
    console.log(characterMetadata.attributes);

    const weaponMetadata = await contractAPI.fetchWeapon(account.address, account.weaponId);
    setWeaponMeatadata(weaponMetadata);
    console.log(weaponMetadata.attributes);

    const standImage = await metadataAPI.fetchStandImage(characterMetadata.attributes, weaponMetadata.attributes, 'animated');
    // const standImage = await assetAPI.fetchCharImage(characterMetadata.attributes, '0');
    console.log(standImage);
    setImage(standImage);

    const result = await metadataAPI.fetchStrength(weaponMetadata.attributes);
    setStrength(result);

    const attr= await metadataAPI.fetchCharName(characterMetadata.attributes);
    setCharName(attr);
    const name = await metadataAPI.fetchWeaponName(weaponMetadata.attributes);
    setWeaponName(name);
  }

	return (
		<div className='home-container'>
      <div className='username'>
        {account?.username}
      </div>
      <img className="my-character" src={image} />
      <div className='mydata'>
        <div className = 'metadata'>
          {/* <div className = 'line2'>------대표 캐릭터------</div>
          <div className = 'line'>{account?.charId}</div> */}
          <div className = 'line2'>-------전투 정보-------</div>
          <div className = 'line'>무기: {weaponName}</div>
          <div className = 'line'>레벨: {strength}</div>
          <div className = 'line2'>------캐릭터 정보------</div>
          <div className = 'line'>스킨: {charName?.skin}</div>
          <div className = 'line'>얼굴: {charName?.face}</div>
          <div className = 'line'>헤어: {charName?.hair}</div>
          <div className = 'line'>의상: {charName?.clothes}</div>
          <div className = 'line'>신발: {charName?.shoes}</div>
          <div className = 'line'>안경: {charName && charName.eyeDecoration ? charName.eyeDecoration: '없음'}</div>
          <div className = 'line'>악세서리: {charName && charName.faceAccessory ? charName.faceAccessory: '없음'}</div>
        </div>
      </div>
      <div className="home-fight">
        <Link to="/fight">
          <img className="home-fightimg" src='../img/fight.png' />
        </Link>
      </div>
		</div>
	);
}

export default Home;