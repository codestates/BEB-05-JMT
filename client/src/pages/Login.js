import React, { useEffect } from 'react';
import { useSetRecoilState } from "recoil"
import { accountAtom } from "../recoil/account/atom"
import './styles/Login.css';
import { useNavigate } from 'react-router-dom'
import accountAPI from '../api/account';

const Login = () => {
  const setAccount = useSetRecoilState(accountAtom)
  const navigate = useNavigate();

  useEffect(() => {
    setAccount({address: ''});
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
      setAccount({address: address, username: check.username});
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
