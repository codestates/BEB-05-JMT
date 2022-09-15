import React from 'react';
import loading from '../assets/loading.gif'
import './styles/Spinner.css';

const Spinner = (props) => {
    return  (
      <div className="loding" >
        <img src={loading} />
        <div>NFT 가져오는 중...</div>
      </div>
    )
}

export default Spinner;