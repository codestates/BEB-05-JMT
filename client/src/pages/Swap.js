import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from "recoil"
import { accountAtom } from "../recoil/account/atom"

const Swap = () => {
  const account = useRecoilValue(accountAtom)
  const navigate = useNavigate();

  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    }
  }, []);

	return (
		<div className='swap-container'>
			스왑
		</div>
	);
}

export default Swap;
