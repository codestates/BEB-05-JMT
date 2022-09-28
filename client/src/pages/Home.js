import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useSetRecoilState, useRecoilValue} from "recoil"
import { accountAtom } from "../recoil/account/atom"
import { backgroundAtom } from "../recoil/background/atom"
import { charMetadataAtom, weaponMetadataAtom, strengthAtom, equipImgAtom } from '../recoil/tokenMetadata/atom';
import { addrinfoAtom } from '../recoil/addrinfo/atom';
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import './styles/Home.css';
import accountAPI from '../api/account';
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';
import userAPI from '../api/user';

const Home = () => {
  const account = useRecoilValue(accountAtom);
  const setAddrInfo = useSetRecoilState(addrinfoAtom); // 계정 주소 recoil 상태관리
  const setBackground = useSetRecoilState(backgroundAtom);
  const setCharMetadata = useSetRecoilState(charMetadataAtom);
  const setWeaponMeatadata = useSetRecoilState(weaponMetadataAtom);
  const [image, setImage] = useRecoilState(equipImgAtom);
  const [charName, setCharName] = useState();
  const [weaponName, setWeaponName] = useState();
  const [strength, setStrength] = useRecoilState(strengthAtom);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    } else if(!account.charId){
        navigate('/mint');
    } else {
      setBackground({type: 'default'});
      mychar();
      addrinfo();
      setLoading(false);
    }
  }, [account]);

  const mychar = async() =>{
    const test = await userAPI.fetchUserList(account.address);
    console.log(test);
    const char = await contractAPI.fetchCharacter(account.charId);
    setCharMetadata(char);
    const weapon = await contractAPI.fetchWeapon(account.weaponId);
    setWeaponMeatadata(weapon);
    const attr= await metadataAPI.fetchCharName(char.attributes);
    setCharName(attr);
    const name = await metadataAPI.fetchItemName(weapon.attributes);
    setWeaponName(name);
    const str = await metadataAPI.fetchStrength(weapon.attributes);
    setStrength(str);
    const standImage = await metadataAPI.fetchStandImage(char.attributes, weapon.attributes, 'animated');
    setImage(standImage);
  }

  const addrinfo = async () => {
    try {
      const result = await accountAPI.userinfo();
      const checkAddr = result.filter(el => el.username !== account.username)
      setAddrInfo(checkAddr);
    } catch (err) {
        console.log(err);
    }
  }

  const openScan = (address) => {
      // 로컬환경은 안나옴
      window.open(`https://mumbai.polygonscan.com/address/${address}`, '_blank').focus();
  }
  const shortenAddress = (address) => {
      return address.substring(0, 6) + '...' + address.slice(-3)
  }

	return (
		<>
      {loading ?
      (<Spinner/>) : (
        <div className='home-container'>
          <div className='username-container'>
            <div className='username' onClick={() => openScan(account.address)}>
              {account?.username}
            </div>
            <div className='address' onClick={() => openScan(account.address)}>
              {shortenAddress(account?.address)}
            </div>
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
        )}
		</>
	);
}

export default Home;