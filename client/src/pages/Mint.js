import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from "recoil"
import { accountAtom } from "../recoil/account/atom"
import axios from 'axios';
import './styles/Mint.css';

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const {
    NFT_CONTRACT_ADDR,
    NFT_CONTRACT_ABI,
    ITEMS_CONTRACT_ADDR,
    ITEMS_CONTRACT_ABI,
} = require('../global_variables');


const Mint = () => {
    const [account, setAccount] = useRecoilState(accountAtom);
    const [username, setUsername] = useState();
    const navigate = useNavigate();

    useEffect(() => {
    if (!account.address) {
        navigate('/login');
    }
    }, []);

    const mint = async () => {
        if(username) {
            await axios.post('http://localhost:4000/user/signup', {                
                "username" : username,
                "address" : account.address        
            });
            // console.log(NFT_CONTRACT_ADDR);
            // console.log(account.address);
            const NFTContract = await new web3.eth.Contract(
                NFT_CONTRACT_ABI,
                NFT_CONTRACT_ADDR,
            );
            const itemsContract = await new web3.eth.Contract(
                ITEMS_CONTRACT_ABI,
                ITEMS_CONTRACT_ADDR,
              );
            const char = await NFTContract.methods.mintMapleNFT().send(
                {
                    from: account.address,
                    gas: 1500000,
                    gasPrice: '3000000'
                }
            );
            const charId = char.events.Minted.returnValues.tokenId;
            // console.log(charId);
            const weapon = await itemsContract.methods.mintFirstWeapon().send(
                {
                    from: account.address,
                    gas: 1500000,
                    gasPrice: '3000000'
                }
            );
            const weaponId = weapon.events.TransferSingle.returnValues.id;
            console.log(weaponId);
            await axios.post('http://localhost:4000/user/equip', {   
                "address" : account.address,
                "charId": charId,
                "weaponId": weaponId
            });
            setAccount({...account, username: username, charId:charId, weaponId: weaponId});
            navigate('/home');
        }
    }

    const handleChangeName = (value) => {
        setUsername(value);
    }
    return (
        <div className='mint-container'>
            <h2>
                민트
            </h2>
            <label className="mint-label"> 유저 이름 </label>
            <input type="text" className="mint-input" placeholder="유저 이름을 정하세요" onChange={(e) => handleChangeName(e.target.value)} />
            <div className="mint-btn" onClick={mint}>
                MINT
            </div>
        </div>
    );
}

export default Mint;
