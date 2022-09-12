import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState, useRecoilValue} from "recoil"
import { accountAtom } from "../recoil/account/atom"
import { charMetadataAtom, weaponMetadataAtom } from '../recoil/tokenMetadata/atom';
import { Link } from "react-router-dom";
import './styles/Home.css';
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';

const Home = () => {
  const account = useRecoilValue(accountAtom);
  const setCharMetadata = useSetRecoilState(charMetadataAtom);
  const setWeaponMeatadata = useSetRecoilState(weaponMetadataAtom);
  const navigate = useNavigate();
  const [image, setImage] = useState();

  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    }
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

    const strength = await metadataAPI.fetchStrength(weaponMetadata.attributes);
    console.log(strength);
    setImage(standImage);
  }

	return (
		<div className='home-container'>
      <div className='username'>
        {account.username}
      </div>
      <img className="my-character" src={image} />
      <div className="home-fight">
        <Link to="/fight">
          <img className="home-fightimg" src='../img/fight.png' />
        </Link>
      </div>
		</div>
	);
}

export default Home;