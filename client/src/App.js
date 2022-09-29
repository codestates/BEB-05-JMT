import React from 'react';
import { useRecoilValue } from "recoil"
import { backgroundAtom } from "./recoil/background/atom"
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Home, Inventory, Market, Ranking, Login, Mint, Swap, Fight, Lootbox, NonSwap } from './pages';
import { Fighting, FightResult, NotFound, Modal } from './components';
import MainLayout from './components/MainLayout';

const App = () => {
  const background = useRecoilValue(backgroundAtom)

  return (
    <div className="App">
      <div className={`App-header background-${background.type}`}>
        <Routes>
          {/* Navbar를 보여주고 싶은 컴포넌트*/}
          <Route element={<MainLayout />}>
            <Route exact path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/inventory" element={<Inventory/>} />
            <Route path="/market" element={<Market/>} />
            <Route path="/swap" element={<Swap/>} />
            <Route path="/ranking" element={<Ranking/>} />
            <Route path="/lootbox" element={<Lootbox/>} />
            <Route component={<NotFound/>} />
          </Route>
          {/* Navbar를 안 보여주고 싶은 컴포넌트*/}
            <Route path="/login" element={<Login/>} />
            <Route path="/mint" element={<Mint/>} />
            <Route path="/NonSwap" element={<NonSwap/>}/>
            <Route path="/fight" element={<Fight/>} />
            <Route path="/fighting" element={<Fighting/>} />
            <Route path="/fightresult" element={<FightResult/>} />
        </Routes>
        <Modal />
      </div>
      <footer className='App-footer'>
        <p className='App-footer-text'>© BEB 5기 JMT팀 🍄</p>
      </footer>
    </div>
  );
}

export default App;
