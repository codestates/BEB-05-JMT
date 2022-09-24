import React, { useState, useEffect, useRef } from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue} from "recoil";
import { accountAtom } from "../../recoil/account/atom";
import contractAPI from "../../api/contract";
import '../styles/Token.css';

function Liquidity() {

	const account = useRecoilValue(accountAtom);
	const [jmtReserve,setJmtReserve] = useState(0);
	const [ethReserve,setEthReserve] = useState(0);

	const [jmtAmount,setJmtAmount] = useState(0); // deposite - jmt 
	const [ethAmount,setEthAmount] = useState(0); // deposite - eth
	const jmtRef = useRef()
	const ethRef = useRef()

	const [lpToken,setLpToken] = useState(0);
	const decimals = 10**18;
	
	useEffect(() => {
		contractAPI.getBalnceOfLpToken(account.address).then((result)=>{
			setLpToken(result)
		});
		contractAPI.GetReserve().then((result)=>{
			const {0: ethReserve, 1:jmtReserve} = result;
			setJmtReserve((jmtReserve/decimals))
			setEthReserve((ethReserve/decimals))
		})
	}, []);

	const ethHandleInputChange = (value) => {
		const ratio = jmtReserve/ethReserve;
		jmtRef.current.value = ratio*value;
		setJmtAmount(ratio*value);
		setEthAmount(value);
	}

	const jmtHandleInputChange = (value) => {
		const ratio = jmtReserve/ethReserve;
		ethRef.current.value = value/ratio;
		setJmtAmount(value);
		setEthAmount(value/ratio);
	}

	const deposit = () => {
		console.log(jmtAmount+"|||"+ethAmount)
		contractAPI.depositToken(jmtAmount,ethAmount,account.address).then(() => {
			alert("완료!")
			window.location.reload();
		})

	}

	const withdraw = () => {
		contractAPI.withdrawToken(account.address).then(() => {
			alert("완료!")
			window.location.reload();
		})
	}



	return (
		<div className='Liquidity-tab'>
			<div className="deposit-ui">
				<div className="deposit-input">
					<div>
						<span className="text-size">ETH</span>
						<input 
						type="text" 
						placeholder="ETH amount..." 
						className="lp-input"
						onChange={(e) => ethHandleInputChange(e.target.value)}
						ref={ethRef}/>
					</div>
					<div className="">
						<span className="text-size">JMT</span>
						<input 
						type="text" 
						placeholder="JMT amount..."
						className="lp-input" 
						onChange={(e) => jmtHandleInputChange(e.target.value)} 
						ref={jmtRef}/>
					</div>
					<button className="deposit-btn" onClick={()=> deposit()}>보증금</button>
				</div>
			</div>

			<div className="lp-ui">
				<div className="with-ui">
					<div className="text-size">LP 토큰</div>
					<div className="text-size">{lpToken} LP</div>
					<button className="with-btn" onClick={() => withdraw()}>회수</button>
				</div>
			</div>
		</div>
	);
}

export default Liquidity;