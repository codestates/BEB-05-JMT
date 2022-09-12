import React, { useEffect } from 'react';
import { useSetRecoilState } from "recoil"
import { backgroundAtom } from "../recoil/background/atom"
import { accountAtom } from "../recoil/account/atom"
import './styles/Login.css';
import { useNavigate } from 'react-router-dom'
import accountAPI from '../api/account';

const Login = () => {
  const setAccount = useSetRecoilState(accountAtom)
  const setBackground = useSetRecoilState(backgroundAtom)
  const navigate = useNavigate();

  useEffect(() => {
    setAccount({address: ''});
    setBackground({type: 'not-logged-in'});
  }, []);

  const connectWallet = async () => {
    const address = await accountAPI.fetchAccount();
    const check = await accountAPI.fetchUsername(address);

    console.log(address);
    console.log(check.message);
    if(check.message==="false"){
      setAccount({address: address});
      navigate('/mint');
    }else{
      setAccount({address: address, username: check.username, charId: check.charId, weaponId: check.weaponId});
      navigate('/home');
    }
  }

	return (
		<div className='login-container'>
      <div className="login-btn" onClick={connectWallet}>
        로그인
      </div>
		</div>
	);
}

export default Login;
