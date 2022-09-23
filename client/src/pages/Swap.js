import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from "recoil"
import { backgroundAtom } from "../recoil/background/atom"
import { accountAtom } from "../recoil/account/atom"

import Trading from "../components/swap/Trading";
import Liquidity from "../components/swap/Liquidity";
import TokenInfo from "../components/swap/TokenInfo";
import Staking from "../components/swap/Staking";
import { Tab, Tabs } from '@mui/material';
import "./styles/Swap.css";

const Swap = () => {
  const [tabIndex,setTabIndex] = useState(0);
  const account = useRecoilValue(accountAtom)
  const setBackground = useSetRecoilState(backgroundAtom)
  const navigate = useNavigate();

  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    } else if(!account.charId){
        navigate('/mint');
    } else {
      setBackground({type: 'default'});
    }
  }, []);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

	return (
    <div className="token-container">
        <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth">
          <Tab className="token-tab" label="토큰 정보" id='1'  />
          <Tab className="token-tab" label="유동성 관리" id='2'/>
          <Tab className="token-tab" label="토큰 교환" id='3'/>
          <Tab className="token-tab" label="스테이킹" id='4'/>
        </Tabs>
      
  
      {tabIndex === 0 && (
        <TokenInfo></TokenInfo>
      )}

      {tabIndex === 1 && (
        <Liquidity></Liquidity>
      )}

      {tabIndex === 2 && (
        <Trading></Trading>
      )}

      {tabIndex === 3 && (
        <Staking></Staking>
      )}
      
      </div>
	);
}

export default Swap;
 // <TabPanel value={menue} index={1}>
      //   Item One
      // </TabPanel>
      // <TabPanel value={menue} index={2}>
      //   Item Two
      // </TabPanel>
      // <TabPanel value={menue} index={3}>
      //   Item Three
      // </TabPanel>