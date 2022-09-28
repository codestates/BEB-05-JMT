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
import userAPI from '../api/user';


const Mint = () => {
    const [account, setAccount] = useRecoilState(accountAtom);
    const setBackground = useSetRecoilState(backgroundAtom)
    const [username, setUsername] = useState("");
    const [charImg, setCharImg] = useState();
    const [weaponImg, setWeaponImg] = useState();
    const [charName, setCharName] = useState();
    const [weaponName, setWeaponName] = useState();
    const [strength, setStrength] = useState();
    const [loading, setLoading] = useState(false);
    const [signedUp, setSignedUp] = useState(false);
    const [minted, setMinted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!account.address) {
            navigate('/login');
        } else {
            contractAPI.getBalnceOfJmt(account.address).then((value)=>{
                if(Number(value)===0){
                    navigate('/nonswap');
                }
            })
            setBackground({type: 'mint'});
            if (!charImg) {
                collectAlreadyProcessedData();
            }
        }
    }, [account, charImg]);

    const collectAlreadyProcessedData = async () => {
        const res = await accountAPI.fetchUser(account.address);
        if (res.message == 'true') {
            setUsername(res.username);
            setSignedUp(true);
            if (res.char) {
                setCharacter(res.char);
                setWeapon(res.weaponId);
                setMinted(true);
            }
            const itemBalance = await contractAPI.fetchMyItems(account.address);
            if (itemBalance.length != 0) {
                const charBalance = await contractAPI.fetchMyCharacter(account.address);
                const charId = charBalance[0][0];
                const weaponId = itemBalance[0][0];
                await setWeapon(weaponId);
                await accountAPI.equip(account.address, charId, weaponId);
                setAccount({...account, username: res.username, charId: charId, weaponId: weaponId});
            }
        }
    }

    const mintTokens = async () => {
        const [charId, weaponId] = await Promise.all([
            mintCharacter(),
            mintWeapon()
        ]);
        setAccount({...account, username: username, charId: charId, weaponId: weaponId});
        const equipContract = await userAPI.signUp(account.address, charId, weaponId);
        return {charId, weaponId};
    }

    const mintCharacter = async () => {
        const charId = await contractAPI.mintCharNFT(account.address);
        await setCharacter(charId);
        return charId;
    }

    const mintWeapon = async () => {
        const weaponId = await contractAPI.mintFirstWeaponNFT(account.address);
        await setWeapon(weaponId);
        return weaponId;
    }

    const setCharacter = async (charId) => {
        const result = await contractAPI.fetchCharacter(charId);
        const char = await metadataAPI.fetchCharImage(result.attributes, '0');
        setCharImg(char);
        const attr= await metadataAPI.fetchCharName(result.attributes);
        setCharName(attr);
    }

    const setWeapon = async (weaponId) => {
        const weapon = await contractAPI.fetchWeapon(weaponId);
        setWeaponImg(weapon.image);
        const name = await metadataAPI.fetchItemName(weapon.attributes);
        setWeaponName(name);
        const str = await metadataAPI.fetchStrength(weapon.attributes);
        setStrength(str);
    }

    const mintStart = () => {
        setLoading(true);
        mint();
    }

    const mint = async () => {
        if (username) {
            if (!signedUp) {
                await accountAPI.signUp(account.address, username);
            }
            if (!minted) {
                const {charId, weaponId} = await mintTokens();
                await setCharacter(charId);
                await setWeapon(weaponId);
                await accountAPI.equip(account.address, charId, weaponId);
            }
            setLoading(false);
        }
    }

    const handleChangeName = (value) => {
        setUsername(value);
    }

    return (
        <div className='mint-container'>
            {(account.charId||account.charId===0)&&(account.weaponId||account.weaponId===0) ? 
                (loading ?
                <Spinner/> : 
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
                ):
                (loading ?
                <Spinner/> :
                <>
                    <h2 className="mint-label">
                        당신의 고유한 메이플스토리 NFT 캐릭터를 만들어 보세요
                    </h2>
                    <div className='mint-input-container'>
                        {signedUp ?
                            <input
                                type="text"
                                className="mint-input"
                                defaultValue={username || ''}
                                disabled
                            />: <input
                                type="text"
                                className="mint-input"
                                placeholder=""
                                onChange={(e) => handleChangeName(e.target.value)}
                            />
                        }
                        <div className="mint-btn" onClick={mintStart}>
                            MINT
                        </div>
                    </div>
                    <img className="nobody-character" src={nobody} />
                </>)
            }
        </div>
    );
}

export default Mint;
