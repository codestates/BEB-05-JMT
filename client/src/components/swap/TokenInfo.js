import React, { useState, useEffect } from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue} from "recoil";
import { accountAtom } from "../../recoil/account/atom";
import { modalAtom } from "../../recoil/modal/atom";
import contractAPI from "../../api/contract";
import '../styles/Token.css';

function TokenInfo() {
  const account = useRecoilValue(accountAtom);
  const [modal, setModal] = useRecoilState(modalAtom);
  const [jmtAmount,setJmtAmount] = useState(0);
  const [amount,setAmount] = useState(0); // 보낼양 
  const [target,setTarget] = useState(""); // 타겟 주소
  const decimals = 10**18;

  useEffect(() => {
    contractAPI.getBalnceOfJmt(account.address).then((result)=>{
      setJmtAmount(result)
    })

  }, []);

  const SendToken = async() => {
    setModal({...modal, open: true, type: 'send', data: {message: "전송중..."}});
    let result;
    result = await contractAPI.SendJmtToken(target,account.address,amount)
    await contractAPI.getBalnceOfJmt(account.address).then((r)=>{
      setJmtAmount(r)
    })

    setModal({...modal, open: true, type: 'send', data: {error: result[0], send: result[1], message: result[2]}});
  };

	return (
		<div className='TokenInfo-tab'>
      <div className="token-info">
        <div className="token-info1">
          <div className="token-wallet">
            <div className="text-size">지갑 주소</div>
            <div className="token-address">{account.address}</div>
          </div>
            
          <div>
            <div className="text-size">JMT 토큰</div>
            <div className="token-amount">{(jmtAmount/decimals)} JMT</div> 
          </div>
        </div>
      </div>

      <div className="send-token">
        <div className="send-input">
          <div>
            <span className="text-size">보낼 주소</span>
            <input 
              placeholder="보낼 주소" 
              type="text"
              className="lp-input"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            />
          </div>
          <div>
            <span className="text-size">토큰 갯수</span>
            <input 
              placeholder="토큰 갯수" 
              type="text"
              className="lp-input"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
          </div>
          <button className="send-btn" onClick={SendToken} >보내기</button>
        </div>
      </div>
    </div>
	);
}

export default TokenInfo;