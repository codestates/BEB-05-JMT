import React from 'react';
import { useRecoilValue } from "recoil"
import { accountAtom } from "./recoil/account/atom"
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Home, Inventory, Store, Ranking, Login, Mint, Swap, Fight } from './pages';
import { Fighting, FightResult, NotFound } from './components';
import MainLayout from './components/MainLayout';

const App = () => {
  const account = useRecoilValue(accountAtom)

  return (
    <div className="App">
      <div className={account && account.address ? "App-header logged-in": "App-header not-logged-in"}>
        <Routes>
          {/* Navbar를 보여주고 싶은 컴포넌트*/}
          <Route element={<MainLayout />}>
            <Route exact path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/inventory" element={<Inventory/>} />
            <Route path="/store" element={<Store/>} />
            <Route path="/swap" element={<Swap/>} />
            <Route path="/ranking" element={<Ranking/>} />
            <Route component={<NotFound/>} />
          </Route>
          {/* Navbar를 안 보여주고 싶은 컴포넌트*/}
            <Route path="/login" element={<Login/>} />
            <Route path="/mint" element={<Mint/>} />
            <Route path="/fight" element={<Fight/>} />
            <Route path="/fighting" element={<Fighting/>} />
            <Route path="/fightresult" element={<FightResult/>} />
        </Routes>
      </div>
      <footer className='App-footer'>
        <p className='App-footer-text'>개발 중...</p>
      </footer>
    </div>
  );
}

export default App;
