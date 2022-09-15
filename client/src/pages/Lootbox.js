import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from "recoil"
import { backgroundAtom } from "../recoil/background/atom"
import { accountAtom } from "../recoil/account/atom"
import './styles/Lootbox.css';
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';

const Lootbox = () => {
    const account = useRecoilValue(accountAtom);
    const setBackground = useSetRecoilState(backgroundAtom);
    const [charImg, setCharImg] = useState();
    const [weaponImg, setWeaponImg] = useState();
    const [strength, setStrength] = useState();
    const [charName, setCharName] = useState();
    const [weaponName, setWeaponName] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (!account.address) {
            navigate('/login');
        } else if(!account.charId){
            navigate('/mint');
        } else {
            setBackground({type: 'market'});
        }
    }, []);

    const charMint = async () => {
        if(!charImg){
            const charId = await contractAPI.mintCharNFT(account.address);
            console.log(charId);
            const char = await contractAPI.fetchCharacter(charId);
            console.log(char.image);
            setCharImg(char.image);

            const attr= await metadataAPI.fetchCharName(char.attributes);
            setCharName(attr);
        } else{
            setCharImg();
            navigate('/lootbox');
        }
        
        
    }

    const weaponMint = async () => {
        if(!weaponImg){
            const weaponId = await contractAPI.mintWeaponNFT(account.address);
            console.log(weaponId);
            const weapon = await contractAPI.fetchWeapon(weaponId);
            console.log(weapon.image);
            setWeaponImg(weapon.image);

            const name = await metadataAPI.fetchWeaponName(weapon.attributes);
            setWeaponName(name);
            const str = await metadataAPI.fetchStrength(weapon.attributes);
            setStrength(str);
        } else {
            setWeaponImg();
            navigate('/lootbox');
        }
        
    }

    return (
        <div className='lootbox-container'>
            {(charImg||weaponImg) ?
                (charImg? 
                    <>
                        <span className="lootbox-result" onClick={charMint}>
                            <img className="lootbox-char" src={charImg} />
                        </span>
                        <div className ="itemdata"> 
                            <div className = 'line'>스킨: {charName?.skin}</div>
                            <div className = 'line'>얼굴: {charName?.face}</div>
                            <div className = 'line'>헤어: {charName?.hair}</div>
                            <div className = 'line'>의상: {charName?.clothes}</div>
                            <div className = 'line'>신발: {charName?.shoes}</div>
                            <div className = 'line'>안경: {charName && charName.eyeDecoration ? charName.eyeDecoration: '없음'}</div>
                            <div className = 'line'>악세서리: {charName && charName.faceAccessory ? charName.faceAccessory: '없음'}</div>
                        </div>
                    </> 
                    :<>
                        <span className="lootbox-result" onClick={weaponMint}>
                            <img className="lootbox-weapon" src={weaponImg} />
                        </span>
                        <div className ="itemdata"> 
                            <div className = 'line2'>무기: {weaponName}</div>
                            <div className = 'line2'>레벨: {strength}</div>
                        </div>
                    </>
                ) :
                <>
                    <span className="lootbox-btn" onClick={charMint}>
                        캐릭터 민팅
                    </span>
                    <span className="lootbox-btn" onClick={weaponMint}>
                        무기 민팅
                    </span>
                </>
            }
        </div>
    );
}

export default Lootbox;
