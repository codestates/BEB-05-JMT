import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from "recoil"
import { accountAtom } from "../recoil/account/atom"
import axios from 'axios';
import './styles/Lootbox.css';
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';

const Lootbox = () => {
    const account = useRecoilValue(accountAtom);
    const [charNFT, setCharNFT] = useState();
    const [weaponNFT, setWeaponNFT] = useState();
    const navigate = useNavigate();

    useEffect(() => {
    if (!account.address) {
        navigate('/login');
    }
    }, []);

    const charMint = async () => {
        
        const charId = await contractAPI.mintCharNFT(account.address);
        
    }

    const weaponMint = async () => {
        const weaponId = await contractAPI.mintRandomWeaponNFT(account.address);
    }

    return (
        <div className='lootbox-container'>
            <h2>
                랜덤 뽑기
            </h2>
            <div className="charMint-btn" onClick={charMint}>
                캐릭터 민팅
            </div>
            <div className="weaponMint-btn" onClick={weaponMint}>
                무기 민팅
            </div>
        </div>
    );
}

export default Lootbox;
