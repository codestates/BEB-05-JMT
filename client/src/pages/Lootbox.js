import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from "recoil"
import { backgroundAtom } from "../recoil/background/atom"
import { accountAtom } from "../recoil/account/atom"
import axios from 'axios';
import './styles/Lootbox.css';
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';

const Lootbox = () => {
    const account = useRecoilValue(accountAtom);
    const setBackground = useSetRecoilState(backgroundAtom)
    const [charNFT, setCharNFT] = useState();
    const [weaponNFT, setWeaponNFT] = useState();
    const [charImg, setCharImg] = useState();
    const [weaponImg, setWeaponImg] = useState();
    const navigate = useNavigate();

    useEffect(() => {
    if (!account.address) {
        navigate('/login');
    }
    setBackground({type: 'market'});
    }, []);

    const charMint = async () => {
        if(!charImg){
            const charId = await contractAPI.mintCharNFT(account.address);
            console.log(charId);
            const char = await contractAPI.fetchCharacter(account.address, charId);
            console.log(char.image);
            setCharImg(char.image);
        } else{
            setCharImg();
            navigate('/lootbox');
        }
        
        
    }

    const weaponMint = async () => {
        if(!weaponImg){
            const weaponId = await contractAPI.mintWeaponNFT(account.address);
            console.log(weaponId);
            const weapon = await contractAPI.fetchWeapon(account.address, weaponId);
            console.log(weapon.image);
            setWeaponImg(weapon.image);
        } else {
            setWeaponImg();
            navigate('/lootbox');
        }
        
    }

    return (
        <div className='lootbox-container'>
            <span className="lootbox-btn" onClick={charMint}>
                {charImg ? 
                <img className="lootbox-char" src={charImg} /> : "캐릭터 민팅"}
            </span>
            <span className="lootbox-btn" onClick={weaponMint}>
                {weaponImg ? <img className="lootbox-weapon" src={weaponImg} />  : "무기 민팅"}
            </span>
        </div>
    );
}

export default Lootbox;
