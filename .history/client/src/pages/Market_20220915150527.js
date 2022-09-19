import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { backgroundAtom } from "../recoil/background/atom";
import { accountAtom } from "../recoil/account/atom";
import UserData from '../components/UserData';
import "./styles/Market.css";

const Market = () => {
  const account = useRecoilValue(accountAtom);
  const setBackground = useSetRecoilState(backgroundAtom);
  const navigate = useNavigate();
  // const [matketplaceAtom, setMatketplaceAtom] = useRecoilState(matketplaceAtom);

  useEffect(() => {
    if (!account.address) {
      navigate("/login");
    }
    setBackground({ type: "market" });
  }, []);

  // peudo code
  const buyMarketNFT = () =>{
    if (account){
      // matketplaceAtom.buy(account, id, price ) // id include character ERC721, weapon ERC1155
    }

  };
  const saleDetails = (event, label) =>{

    return (
    <div class="card 1">
      <div class="card_image">
        <img src={itemUrlSrc} />
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

          <button class="tablinks" onclick="saleList(event, 'character')">Character</button>
          <button class="tablinks" onclick="saleList(event, 'London')">Bow</button>
          <button class="tablinks" onclick="saleList(event, 'Paris')">Sword</button>
          <button class="column-name" onclick="saleList(event, 'Tokyo')">Armor</button>
          <span className="column-name">Character</span>
        </div>
        <div>
        {saleList.map(({saleLabel})=>{
          return saleDetails(saleLabel);
        })}
        </div>

        
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
