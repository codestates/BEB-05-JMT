import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from "recoil"
import { backgroundAtom } from "../recoil/background/atom"
import { accountAtom } from "../recoil/account/atom"

import Trading from "../components/swap/Trading";
import Liquidity from "../components/swap/Liquidity";
import TokenInfo from "../components/swap/TokenInfo";
import Typography from '@mui/material/Typography';
import { Box, Tab, Tabs, Button } from '@mui/material';

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
    <div style={{"width":1000}}>
        <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth">
          <Tab label="Token Info" id='1'  />
          <Tab label="Liquidity Manage" id='2'/>
          <Tab label="Trading Token" id='3'/>
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