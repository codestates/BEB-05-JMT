import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from "recoil"
import { accountAtom } from "../recoil/account/atom"

const Ranking = () => {
  const account = useRecoilValue(accountAtom)
  const navigate = useNavigate();

  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    }
  }, []);

	return (
		<div className='ranking-container'>
			랭킹
		</div>
	);
}

export default Ranking;
