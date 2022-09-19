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

  useEffect(() => {
    if (!account.address) {
      navigate("/login");
    }
    setBackground({ type: "market" });
  }, []);

  return (
    <div>
      <div className="ranking-container">
        <div className="column">
        <div class="tab">
  <button class="tablinks" onclick="openCity(event, 'London')">London</button>
  <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
  <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
</div>
          {/* <span className="column-name">Bow</span>
          <span className="column-name">Sword</span>
          <span className="column-name">Armor</span> */}
          <span className="column-name">Character</span>
        </div>

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
