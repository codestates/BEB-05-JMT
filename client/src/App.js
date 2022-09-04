import React, { useEffect } from 'react';
import { useRecoilValue } from "recoil"
import { accountAtom } from "./recoil/account/atom"
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Home, Inventory, Store, Ranking, Login } from './pages';
import { Navbar, NotFound } from './components';

const App = () => {
  const account = useRecoilValue(accountAtom)

  return (
    <div className="App">
      <div className={account && account.address ? "App-header logged-in": "App-header not-logged-in"}>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/store" element={<Store/>} />
          <Route path="/ranking" element={<Ranking/>} />
          <Route component={<NotFound/>} />
        </Routes>
      </div>
      <footer className='App-footer'>
        <p className='App-footer-text'>개발 중...</p>
      </footer>
    </div>
  );
}

export default App;
