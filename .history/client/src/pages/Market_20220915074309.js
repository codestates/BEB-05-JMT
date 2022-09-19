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
        <div className="userList">
          
        </div>
      </div>
      

      <div className="market-container">
        <label className="create-input-label">판매 가격</label>
        <Link to="/BEB-05-JMT/explore">
          <button className="goToList detail-btn">목록으로</button>
        </Link>
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
