import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { backgroundAtom } from "../recoil/background/atom";
import { accountAtom } from "../recoil/account/atom";
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
          <span className="column-rank">순위</span>
          <span className="column-name">이름</span>
          <span className="column-char">캐릭터</span>
          <span className="column-str">레벨</span>
        </div>
        <div className="userList"></div>
        <div className="mychar">
          <span className="desc">내 캐릭터</span>
        </div>
        <div className="selectedUser">
          <div className="myname">이름</div>
          <div className="mystr">Lv.</div>
          <div className="myrank">위</div>
        </div>
      </div>

      <div className="market-container">
        <label className="create-input-label">판매 가격</label>
        <Link to="/BEB-05-JMT/explore">
          <button className="goToList detail-btn">목록으로</button>
        </Link>
      </div>
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
            <img src="https://maplestory.io/api/KMST/1145/item/1402214/icon" />
          </div>
          <div class="card_title">
            <p>레드 투핸드소드</p>
          </div>
        </div>

        <div class="card 4">
          <div class="card_image">
            <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
          </div>
          <div class="card_title title-black">
            <p>Card Title</p>
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
