import React, { useEffect } from 'react';
import { useRecoilState } from "recoil"
import { accountAtom } from "../recoil/account/atom"
import './styles/Login.css';
import { useNavigate } from 'react-router-dom'
import accountAPI from '../api/account';

const Login = () => {
  const [account, setAccount] = useRecoilState(accountAtom)
  const navigate = useNavigate();

  useEffect(() => {
    setAccount({address: ''});
  }, []);

  const connectWallet = async () => {
    const address = await accountAPI.fetchAccount();
    console.log(address);
    setAccount({address: address});
    navigate('/home');
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
