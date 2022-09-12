import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from "recoil"
import { accountAtom } from "../recoil/account/atom"
import { Link } from "react-router-dom";
import './styles/Navbar.css';

const Navbar = () => {
  const [account, setAccount] = useRecoilState(accountAtom);
  const navigate = useNavigate();

  const logout = async() => {
    setAccount({account: '', username: ''});
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
        <img className="nav-item-logout" onClick={logout} src="https://seeklogo.com/images/M/metamask-logo-09EDE53DBD-seeklogo.com.png" />
      </div>
    </div>
  ) : null
}

export default Navbar
