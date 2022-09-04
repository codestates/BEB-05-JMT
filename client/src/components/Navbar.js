import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from "recoil"
import { accountAtom } from "../recoil/account/atom"
import { Link } from "react-router-dom";
import './styles/Navbar.css';

const Navbar = () => {
  const account = useRecoilValue(accountAtom)
  
  return account && account.address ? (
    <div className="navbar">
      <div className="navbar-items">
        <div className="nav-item-container_a">
          <Link to="/inventory" className="nav-item">인벤토리</Link>
        </div>
        <div className="nav-item-container_b">
          <Link to="/store" className="nav-item">상점</Link>
        </div>
        <div className="nav-item-container_c">
          <Link to="/ranking" className="nav-item">랭킹</Link>
        </div>
      </div>
    </div>
  ) : null
}

export default Navbar
