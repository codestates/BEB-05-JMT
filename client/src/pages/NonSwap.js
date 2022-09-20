import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState, useRecoilState} from "recoil";
import { backgroundAtom } from "../recoil/background/atom";
import { accountAtom } from "../recoil/account/atom";
import Trading from "../components/swap/Trading";
import { Box, Tab, Tabs, Button } from '@mui/material';
import '../components/styles/NonNavbar.css';

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
    <div className="navbar">
      <div className="navbar-items"></div>
        <img className="nav-item-logout" onClick={logout} src="https://seeklogo.com/images/M/metamask-logo-09EDE53DBD-seeklogo.com.png" />
    </div>

    <div style={{"width":1000}}>
    <div className='ranking-container' style={{"marginTop":50}}>
       <div className= 'column'>
        <div style={{"marginTop":10}}>
        <span className='column-rank'>Swap</span>
        </div>
       </div>
       <Trading/>
     
      </div>
      </div>
    </div>
      

	);
}

export default NonSwap;
