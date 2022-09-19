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
  const saleDetails = () =>{

    return (
    <div class="card 1">
      <div class="card_image">
        <img src={itemUrlSrc} />
      </div>
      <div class="card_title title-white">
        <p>Card Title</p>
      </div>
      <label className="create-input-label">구매 가격*</label>
      <button className="buyNFT detail-btn" onClick={buyMarketNFT}>구매하기</button>
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

        {saleList.map(({saleLabel})=>{
          return saleDetails(saleLabel);
        })}

        

        <div className="userList">
          <div class="cards-list">
            <div class="card 1">
              <div class="card_image">
                {" "}
                <img src="https://i.redd.it/b3esnz5ra34y.jpg" />{" "}
              </div>
              <div class="card_title title-white">
                <p>Card Title</p>
              </div>
            </div>

            <div class="card 2">
              <div class="card_image">
                <img src="https://maplestory.io/api/KMST/1145/item/1452268/icon" />
              </div>
              <div class="card_title">
                <p>탐험가의 활</p>
              </div>
            </div>

            <div class="card 3">
              <div class="card_image">
                <img src="https://maplestory.io/api/KMST/1145/item/1402214/icon" />
              </div>
              <div class="card_title">
                <p>레드 투핸드소드</p>
              </div>
            </div>

            <div class="card 5">
              <div class="card_image">
                <img src="https://maplestory.io/api/KMST/1145/item/1212038/icon" />
              </div>
              <div class="card_title">
                <p>발렌티어</p>
              </div>
            </div>

            <div class="card 4">
              <div class="card_image">
                <img src="https://maplestory.io/api/KMST/1145/item/1302020/icon" />
              </div>
              <div class="card_title title-black">
                <p>메이플 소드</p>
              </div>
            </div>
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
