import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from "recoil"
import { accountAtom } from "../recoil/account/atom"
import axios from 'axios';
import './styles/Mint.css';

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

            setAccount({...account, username: username});
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
