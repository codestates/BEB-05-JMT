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
        <label className="create-input-label">판매 가격</label>
        <Link to="/BEB-05-JMT/explore"><button className="goToList detail-btn">목록으로</button></Link>
        .cards-list {
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  margin: 30px auto;
  width: 300px;
  height: 300px;
  border-radius: 40px;
box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  cursor: pointer;
  transition: 0.4s;
}

.card .card_image {
  width: inherit;
  height: inherit;
  border-radius: 40px;
}

.card .card_image img {
  width: inherit;
  height: inherit;
  border-radius: 40px;
  object-fit: cover;
}

.card .card_title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-top: -80px;
  height: 40px;
}

.card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
    -5px -5px 30px 15px rgba(0,0,0,0.22);
}

.title-white {
  color: white;
}

.title-black {
  color: black;
}

@media all and (max-width: 500px) {
  .card-list {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: column;
  }
}


/*
.card {
  margin: 30px auto;
  width: 300px;
  height: 300px;
  border-radius: 40px;
  background-image: url('https://i.redd.it/b3esnz5ra34y.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-repeat: no-repeat;
box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  transition: 0.4s;
}
*/
      </div>
		</div>
	);
}

export default Market;
