import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from "recoil"
import { accountAtom } from "../recoil/account/atom"

const Store = () => {
  const account = useRecoilValue(accountAtom)
  const navigate = useNavigate();

  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    }
  }, []);

	return (
		<div className='store-container'>
			상점
		</div>
	);
}

export default Store;
