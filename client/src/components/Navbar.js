import React,{ useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from "recoil"
import { accountAtom } from "../recoil/account/atom"
import { jmtAtom } from "../recoil/jmt/atom"
import { Link } from "react-router-dom";
import contractAPI from '../api/contract';
import './styles/Navbar.css';

const Navbar = () => {
  const [account, setAccount] = useRecoilState(accountAtom);
  const [jmt, setJmt] = useRecoilState(jmtAtom);
  const navigate = useNavigate();
  const decimals = 10**18;

  useEffect(() => {
    contractAPI.getBalnceOfJmt(account.address).then((result)=>{
      setJmt({amount: result})
    })

  }, []);

  const logout = async() => {
    setAccount({account: ''});
    navigate('/login');
  }
  
  return account && account.address && account.username ? (
  // return account && account.address ? (
      <div className="navbar">
      <div className="navbar-items">
        <div className="nav-item-home">
          <Link to="/home" className="nav-item">홈</Link>
        </div>
        <div className="nav-item-container">
          <Link to="/inventory" className="nav-item">인벤토리</Link>
        </div>
        <div className="nav-item-container">
          <Link to="/market" className="nav-item">상점</Link>
        </div>
        <div className="nav-item-container">
          <Link to="/ranking" className="nav-item">랭킹</Link>
        </div>
        <div className="nav-item-container-end">
          <Link to="/swap" className="nav-item">토큰 스왑</Link>
        </div>
        <div className="nav-item-container-end-token">{Math.floor(jmt.amount/decimals)} JMT</div>
        <img className="nav-item-logout" onClick={logout} src="https://seeklogo.com/images/M/metamask-logo-09EDE53DBD-seeklogo.com.png" />
      </div>
    </div>
  ) : null
}

export default Navbar
