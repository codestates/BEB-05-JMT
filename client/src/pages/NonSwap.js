import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState, useRecoilState} from "recoil";
import { backgroundAtom } from "../recoil/background/atom";
import { accountAtom } from "../recoil/account/atom";
import Trading from "../components/swap/Trading";
import './styles/NonNavbar.css';

const NonSwap = () => {
  const [account, setAccount] = useRecoilState(accountAtom);
  const setBackground = useSetRecoilState(backgroundAtom)
  const navigate = useNavigate();

  const logout = async() => {
    setAccount({account: ''});
    navigate('/login');
  }
  
  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    } else {
      setBackground({type: 'default'});
    }
  }, []);

	return (
    <div>
      <div className="navbar-non">
        <div className="navbar-items-non"></div>
          <img className="non-logout" onClick={logout} src="https://seeklogo.com/images/M/metamask-logo-09EDE53DBD-seeklogo.com.png" />
      </div>

      <div className="nonswap-container">
        <div className="nonswap-swap">
          게임 플레이를 위해 JMT 토큰이 필요합니다.
        </div>
          <div className="tab-ui">
            <Trading initialSwap={true}/>
          </div>
      </div>
    </div>
	);
}

export default NonSwap;
