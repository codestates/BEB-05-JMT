import React, { useState, useEffect, useRef } from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue} from "recoil";
import { accountAtom } from "../../recoil/account/atom";
import { modalAtom } from "../../recoil/modal/atom";
import contractAPI from "../../api/contract";
import { useNavigate } from 'react-router-dom';
import '../styles/Token.css';

function Trading({initialSwap}) {
	const navigate = useNavigate();
	const account = useRecoilValue(accountAtom);
	const [modal, setModal] = useRecoilState(modalAtom);
	const [jmtReserve,setJmtReserve] = useState(0);
	const [ethReserve,setEthReserve] = useState(0);
	const [inputToken,setInputToken] = useState(0);

	const [toToken,setToToken] = useState(""); // 교환후 
	const [jmtAmount,setJmtAmount] = useState("");
	const [ethAmount,setEthAmount] = useState("");
  	const decimals = 10**18;
	let ref = useRef()

	useEffect(() => {
		contractAPI.GetReserve().then((result)=>{
			const {0: ethReserve, 1:jmtReserve} = result;
			console.log(jmtReserve + "|| "+ethReserve)
			setJmtReserve((jmtReserve/decimals))
			setEthReserve((ethReserve/decimals))
		})
	}, []);

	const ChangeToken = () => {
		inputToken == 0 ? setInputToken(1) : setInputToken(0)
		setJmtAmount("");
		setEthAmount("");
		setToToken("");
		ref.current.value = "";
	};

	const handleInputChange = (value) =>{
		const _jmtReserve = jmtReserve.toFixed(6);
		const _ethReserve = ethReserve.toFixed(6);
		const product = _jmtReserve * _ethReserve;
		if(inputToken == 0) // eth input
		{
			const y = product / (parseFloat(_ethReserve) + parseFloat(value));
			const result = jmtReserve -y;
			const tx = result - ((1 *result) / 100); // tx 
			const amount = tx - ((1 *result) / 100); // transfer tx 

			setEthAmount(value);
			setJmtAmount(amount.toFixed(6));
			setToToken(amount.toFixed(6));
		} else{ // jmt input

			const transTx = parseFloat(value) - (1 * parseFloat(value) / 100);
			const x = product / (parseFloat(_jmtReserve) + parseFloat(transTx));
			const amount = ethReserve - x;
			const resultTx = amount - (1 * amount / 100); 

			setEthAmount(resultTx.toFixed(6));
			setJmtAmount(value);
			setToToken(resultTx.toFixed(6));
		
		}
	}

	const SwapToken = async () => {
		setModal({...modal, open: true, type: 'send', data: {message: "토큰 스왑중..."}});
		let result;

			if(inputToken == 0){ 
				result = await contractAPI.SwapToken(ethAmount,0,account.address,inputToken)
				if (initialSwap) {
					navigate('/mint');
				}
			}else if(inputToken == 1){
				result = await contractAPI.SwapToken(0,jmtAmount,account.address,inputToken)
			}

		setModal({...modal, open: true, type: 'send', data: {error: result[0], send: result[1], message: result[2]}});
	}

	return (
		<div className='Trading-tab'>
			<div className="Trading-ui">
				<div className="exchange-rate">
					<div>
						<div className="exchange-rate-text">교환 비율</div>
						<div className="text-size">MATIC : {ethReserve}</div>
						<div className="text-size">JMT : {jmtReserve}</div>
					</div>
				</div>

				<div className="input-amounts">
					<div>
						<input 
						type="text" 
						ref={ref}
						placeholder={inputToken == 0 ? "MATIC Input":"JMT Input"}
						onChange={(e) => handleInputChange(e.target.value)} 
						className="lp-input"
						style={{"color":"rgba(0, 0, 0, 0.6)"}}/>

						<span className="text-size" style={{"paddingLeft":10}}>To</span>

						<input 
						type="text" 
						readOnly 
						placeholder={inputToken == 0 ? "JMT Amount":"MATIC Amount"} 
						value={toToken}
						className="lp-input" 
						style={{"color":"rgba(0, 0, 0, 0.6)"}}/>
					</div>
				</div>
				<div className="swap-btn-container">
					<button className="change-btn" onClick={ChangeToken}>방향 변경</button>
					<button className="swap-btn" onClick={SwapToken}>스왑</button>
				</div>
			</div>
		</div>
	);
}

export default Trading;