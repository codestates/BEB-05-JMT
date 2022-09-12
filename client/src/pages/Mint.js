import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from "recoil"
import { backgroundAtom } from "../recoil/background/atom"
import { accountAtom } from "../recoil/account/atom"
import './styles/Mint.css';
import contractAPI from '../api/contract';
import accountAPI from '../api/account';
import nobody from '../assets/nobody.png';

const Mint = () => {
    const [account, setAccount] = useRecoilState(accountAtom);
    const setBackground = useSetRecoilState(backgroundAtom)
    const [username, setUsername] = useState();
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
            const weaponId = await contractAPI.mintFirstWeaponNFT(account.address);
            console.log(weaponId);

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
        </div>
    );
}

export default Mint;
