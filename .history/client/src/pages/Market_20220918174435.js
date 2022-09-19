import Web3 from 'web3';
import React, { useEffect } from "react";
import React, { useEffect,useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { backgroundAtom } from "../recoil/background/atom";
import { accountAtom } from "../recoil/account/atom";
import { priceAtom } from "../recoil/market/atom";
import UserData from '../components/UserData';
import accountAPI from '../api/account';
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';
import "./styles/Market.css";

const Market = () => {
  const account = useRecoilValue(accountAtom);
  const setBackground = useSetRecoilState(backgroundAtom);
  const navigate = useNavigate();
  // const setPrice = useSetRecoilState(priceAtom);
  const [price, setPrice] = useState();
  // const [matketplaceAtom, setMatketplaceAtom] = useRecoilState(matketplaceAtom);


  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    } else if(!account.charId){
        navigate('/mint');
    } else {
    setBackground({ type: "market" });
    }
  }, []);

  // pseudo code
  const buyMarketNFT = () =>{
    if (account){
      // const weaponId = await contractAPI.fetchCharacter(account.address, id, price ) // id include character ERC721, weapon ERC1155);
      // console.log(weaponId);
    }

  };
  const sellMarketNFT = async() =>{
    //character
    if (price){
      contractAPI.addCharacterOnSale(account.charId, account.address,price)
    }

  };
  const onChangePrice = (value) =>{
    setPrice(value)
  }

  const saleDetails = (event, label) =>{

    return (
    <div class="card 1">
      <div class="card_image">
        {/* <img src={itemUrlSrc} /> */}
      </div>
      <div class="card_title title-white">
        <p>Card Title</p>
      </div>
      <label >구매 가격</label>
      <button onClick={buyMarketNFT}>구매하기</button>
    </div>
    );

  };

  return (
    <div>
      <div className="ranking-container">
        <div className="column">

          {/* <button class="tablinks" onclick="saleList(event, 'character')">Character</button>
          <button class="tablinks" onclick="saleList(event, 'London')">Bow</button>
          <button class="tablinks" onclick="saleList(event, 'Paris')">Sword</button>
          <button class="column-name" onclick="saleList(event, 'Tokyo')">Armor</button>
          <span className="column-name">Character</span> */}
        </div>
        <div>
        <label className="create-input-label">내 캐릭터 판매 가격*</label>
        <input type="text" placeholder="ETH price" onChange={(e) => onChangePrice(e.target.value)} />
        {/* {saleList.map(({saleLabel})=>{
          return saleDetails(saleLabel);
        })} */}
        </div>
      </div>

      <div className="market-container">
        <Link to="/lootbox" className="lootbox-btn">
          뽑기
        </Link>
      </div>
    </div>
  );
};

export default Market;
