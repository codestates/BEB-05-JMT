import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from "recoil"
import { backgroundAtom } from "../recoil/background/atom"
import { accountAtom } from "../recoil/account/atom"
import './styles/Mint.css';
import accountAPI from '../api/account';
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';
import nobody from '../assets/nobody.png';

const Mint = () => {
    const [account, setAccount] = useRecoilState(accountAtom);
    const setBackground = useSetRecoilState(backgroundAtom)
    const [username, setUsername] = useState();
    const [charImg, setCharImg] = useState();
    const [weaponImg, setWeaponImg] = useState();
    const [strength, setStrength] = useState();
    const [charName, setCharName] = useState();
    const [weaponName, setWeaponName] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (!account.address) {
            navigate('/login');
        }
        setBackground({type: 'default'});
    }, []);

    const mint = async () => {
        if(username) {
            await accountAPI.signUp(account.address, username);

            const charId = await contractAPI.mintCharNFT(account.address);
            console.log(charId);

            const char = await contractAPI.fetchCharacter(account.address, charId);
            console.log(char.image);
            setCharImg(char.image);
            const attr= await metadataAPI.fetchCharName(char.attributes);
            setCharName(attr);

            const weaponId = await contractAPI.mintFirstWeaponNFT(account.address);
            console.log(weaponId);

            const weapon = await contractAPI.fetchWeapon(account.address, weaponId);
            console.log(weapon.image);
            setWeaponImg(weapon.image);
            const name = await metadataAPI.fetchWeaponName(weapon.attributes);
            setWeaponName(name);
            const str = await metadataAPI.fetchStrength(weapon.attributes);
            setStrength(str);

            await accountAPI.equip(account.address, charId, weaponId);

            setAccount({...account, username: username, charId:charId, weaponId: weaponId});


            navigate('/home');
        }
    }

    const handleChangeName = (value) => {
        setUsername(value);
    }
    return (
        <div className='mint-container'>
            {/* {account.charId&&account.weaponId ?  */}
            { false ?
                <>
                    <span className="mint-result" onClick={()=>navigate('/home')}>
                        <img className="mint-char" src={charImg} />
                    </span>
                    <div className ="mintdata"> 
                        <div className = 'line'>스킨: {charName?.skin}</div>
                        <div className = 'line'>얼굴: {charName?.face}</div>
                        <div className = 'line'>헤어: {charName?.hair}</div>
                        <div className = 'line'>의상: {charName?.clothes}</div>
                        <div className = 'line'>신발: {charName?.shoes}</div>
                        <div className = 'line'>안경: {charName && charName.eyeDecoration ? charName.eyeDecoration: '없음'}</div>
                        <div className = 'line'>악세서리: {charName && charName.faceAccessory ? charName.faceAccessory: '없음'}</div>
                    </div>
                    <span className="mint-result" onClick={()=>navigate('/home')}>
                        <img className="mint-weapon" src={weaponImg} />
                    </span>
                    <div className ="mintdata"> 
                        <div className = 'line2'>무기: {weaponName}</div>
                        <div className = 'line2'>레벨: {strength}</div>
                    </div>
                </>
                :
                <>
                    <h2 className="mint-label">
                        당신의 고유한 NFT 캐릭터를 만들어 보세요
                    </h2>
                    <div className='mint-input-container'>
                        <input
                            type="text"
                            className="mint-input"
                            placeholder=""
                            onChange={(e) => handleChangeName(e.target.value)}
                        />
                        <div className="mint-btn" onClick={mint}>
                            MINT
                        </div>
                    </div>
                    <img className="nobody-character" src={nobody} />
                </>
            }
            
        </div>
    );
}

export default Mint;
