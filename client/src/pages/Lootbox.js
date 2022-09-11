import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from "recoil"
import { accountAtom } from "../recoil/account/atom"
import axios from 'axios';
import './styles/Lootbox.css';

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const {
    NFT_CONTRACT_ADDR,
    NFT_CONTRACT_ABI,
} = require('../global_variables');


const Lootbox = () => {
    const account = useRecoilValue(accountAtom);

    useEffect(() => {
    if (!account.address) {
        navigate('/login');
    }
    }, []);

    const charMint = async () => {
        const NFTContract = await new web3.eth.Contract(
            NFT_CONTRACT_ABI,
            NFT_CONTRACT_ADDR,
        );
        const result = await NFTContract.methods.mintMapleNFT().send(
            {
                from: account.address,
                gas: 1500000,
                gasPrice: '3000000'
            }
        );
        console.log(result.events.Minted.returnValues);
    }

    const weaponMint = async () => {

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
