import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from "recoil"
import { backgroundAtom } from "../recoil/background/atom"
import { accountAtom } from "../recoil/account/atom"
import Spinner from "../components/Spinner";
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
    const [charName, setCharName] = useState();
    const [weaponName, setWeaponName] = useState();
    const [strength, setStrength] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!account.address) {
            navigate('/login');
        } else {
            contractAPI.getBalnceOfJmt(account.address).then((value)=>{
                Number(value) === 0 ? navigate('/nonswap') : navigate('/Login');
            })
          
            setBackground({type: 'default'});
            setLoading(false);
        }
    }, [account]);

    const mint = async () => {
        if(username) {
            await accountAPI.signUp(account.address, username);

            const charId = await contractAPI.mintCharNFT(account.address);
            console.log(charId);
            const weaponId = await contractAPI.mintFirstWeaponNFT(account.address);
            console.log(weaponId);

            const char = await contractAPI.fetchCharacter(charId);
            setCharImg(char.image);
            const attr= await metadataAPI.fetchCharName(char.attributes);
            setCharName(attr);


            const weapon = await contractAPI.fetchWeapon(weaponId);
            setWeaponImg(weapon.image);
            const name = await metadataAPI.fetchItemName(weapon.attributes);
            setWeaponName(name);
            const str = await metadataAPI.fetchStrength(weapon.attributes);
            setStrength(str);

            await accountAPI.equip(account.address, charId, weaponId);

            setAccount({...account, username: username, charId:charId, weaponId: weaponId});
        }
    }

    const handleChangeName = (value) => {
        setUsername(value);
    }
    return (
        // <div>
        // {loading ? 
        //     <Spinner/> : 
            <div className='mint-container'>
                {account.charId&&account.weaponId ? 
                    <div className = 'mint-container2'> 
                        <span className="mint-result" onClick={()=>navigate('/home')}>
                            <img className="mint-char" src={charImg} />
                        </span>
                        <div className ="mintdata"> 
                            <div className = 'mintline'>스킨: {charName?.skin}</div>
                            <div className = 'mintline'>얼굴: {charName?.face}</div>
                            <div className = 'mintline'>헤어: {charName?.hair}</div>
                            <div className = 'mintline'>의상: {charName?.clothes}</div>
                            <div className = 'mintline'>신발: {charName?.shoes}</div>
                            <div className = 'mintline'>안경: {charName && charName.eyeDecoration ? charName.eyeDecoration: '없음'}</div>
                            <div className = 'mintline'>악세서리: {charName && charName.faceAccessory ? charName.faceAccessory: '없음'}</div>
                        </div>
                        <span className="mint-result" onClick={()=>navigate('/home')}>
                            <img className="mint-weapon" src={weaponImg} />
                        </span>
                        <div className ="mintdata2"> 
                            <div className = 'mintline2'>무기: {weaponName}</div>
                            <div className = 'mintline2'>레벨: {strength}</div>
                        </div>
                    </div>
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
        //     }
        // </div>
    );
}

export default Mint;
