import React, { useState, useEffect, useRef } from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue} from "recoil";
import { accountAtom } from "../../recoil/account/atom";
import { modalAtom } from "../../recoil/modal/atom";
import contractAPI from "../../api/contract";
import '../styles/Token.css';

function Liquidity() {

	const account = useRecoilValue(accountAtom);
	const [modal, setModal] = useRecoilState(modalAtom);
	const [jmtReserve,setJmtReserve] = useState(0);
	const [ethReserve,setEthReserve] = useState(0);

	const [jmtAmount,setJmtAmount] = useState(0); // deposite - jmt 
	const [ethAmount,setEthAmount] = useState(0); // deposite - eth
	const jmtRef = useRef()
	const ethRef = useRef()

	const [lpToken,setLpToken] = useState(0);
	const [lpClaimToken,setLpClaimToken] = useState(0); // 클레임 토큰 jmt
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
		getLPClaimable();
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

	const deposit = async () => {
		setModal({...modal, open: true, type: 'send', data: {message: "전송중..."}});
		let result
		result = await contractAPI.depositToken(jmtAmount,ethAmount,account.address)

		setModal({...modal, open: true, type: 'send', data: {error: result[0], send: result[1], message: result[2]}});
	}

	const withdraw = async() => {
		setModal({...modal, open: true, type: 'send', data: {message: "회수중..."}});
		let result
		result = await contractAPI.withdrawToken(account.address)

		setModal({...modal, open: true, type: 'send', data: {error: result[0], send: result[1], message: result[2]}});
	}

	const getLPClaimable = async() =>{
		await contractAPI.getLPClaimable(account.address).then((result) => {
			console.log(parseFloat((result/decimals)).toFixed(12))
			setLpClaimToken(parseFloat((result/decimals)).toFixed(12));
		})
	
	}

	const LPClaim = async() =>{
		setModal({...modal, open: true, type: 'send', data: {message: "LP 클레임 회수중..."}});
		let result
		result = await contractAPI.LPClaim(account.address);
		setModal({...modal, open: true, type: 'send', data: {error: result[0], send: result[1], message: result[2]}});
	}
	const getLPClaimable = () =>{
		contractAPI.getLPClaimable(account.address).then((result) => {
			console.log(parseFloat((result/decimals)).toFixed(12))
			setLpClaimToken(parseFloat((result/decimals)).toFixed(12));
			window.location.reload();
		})
		
	}

	const LPClaim = () =>{
		contractAPI.LPClaim(account.address).then(() => {
			alert("완료!")
			window.location.reload();
		})

	}



	return (
		<div className='Liquidity-tab'>
			<div className="deposit-ui">
				<div className="deposit-input">
					<div>
						<span className="text-size">MATIC</span>
						<input 
						type="text" 
						placeholder="MATIC amount..." 
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
					<button className="deposit-btn" onClick={()=> deposit()}>예금</button>
				</div>
			</div>

			<div className="lp-ui">
				
				<div className="with-ui">
				<div className="APR2">APR 573%</div>
					<div className="text-size">LP 토큰</div>
					<div className="text-size">{lpToken} LP</div>

					<div className="text-size2">Claimable : {lpClaimToken} vJMT</div>
					<button className="with-btn" onClick={()=>LPClaim()} >클레임</button>
					<button className="with-btn2" onClick={()=>withdraw()} >회수</button>

				</div>
			</div>
		</div>
	);
}

export default Liquidity;