import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from "recoil"
import { backgroundAtom } from "../recoil/background/atom"
import { accountAtom } from "../recoil/account/atom"
import './styles/Market.css'

const Market = () => {
  const account = useRecoilValue(accountAtom)
  const setBackground = useSetRecoilState(backgroundAtom)
  const navigate = useNavigate();

  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    }
    setBackground({type: 'market'});
  }, []);

	return (
		<div className='market-container'>
      <Link to="/lootbox" className="lootbox-btn">뽑기</Link>
      <div className='market-container'>
        <label className="create-input-label">판매 가격*</label>
        <Link to="/BEB-05-/explore"><button className="goToList detail-btn">목록으로</button></Link>
      </div>
		</div>
	);
}

export default Market;
