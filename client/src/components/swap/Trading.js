import React, { useState, useEffect, useRef } from 'react';
import { Button, Typography, Stack, Input } from '@mui/material';
import { useRecoilState, useSetRecoilState, useRecoilValue} from "recoil";
import { accountAtom } from "../../recoil/account/atom";
import contractAPI from "../../api/contract";

function Trading() {

	const account = useRecoilValue(accountAtom);
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
		const ratio = jmtReserve/ethReserve;
		if(inputToken == 0) // eth input
		{
			setEthAmount(value);
			setJmtAmount(ratio*value);
			setToToken(ratio*value);

		} else{ // jmt input
			setEthAmount(value/ratio);
			setJmtAmount(value);
			setToToken(value/ratio);
		}
	}

	const SwapToken = () => {
		//console.log(parseFloat(jmtAmount).toFixed(6) +"||||"+ parseFloat(ethAmount).toFixed(6));
		if(inputToken == 0){ 
			contractAPI.SwapToken(ethAmount,0,account.address,inputToken).then(()=>{
			})
		}else if(inputToken == 1){
			contractAPI.SwapToken(0,jmtAmount,account.address,inputToken).then(()=>{
			})
		}
		
	}

	return (
		<div className='Trading'>
			<Typography
				variant="subtitle1"
				color="text.secondary"
				component="div"
				style={{"marginTop":15}}
			>
				<div>ETH Reserve : {ethReserve}</div>
				<div>JMT Reserve : {jmtReserve}</div>

				<div className="input-amounts">
					<div className="input-container">
						<input 
						type="text" 
						ref={ref}
						placeholder={inputToken == 0 ? "ETH Input":"JMT Input"}
						onChange={(e) => handleInputChange(e.target.value)} 
						className="lp-input"
						style={{"color":"rgba(0, 0, 0, 0.6)"}}/>

						<span style={{"paddingLeft":10}}>To</span>

						<input 
						type="text" 
						readOnly 
						placeholder={inputToken == 0 ? "JMT Amount":"ETH Amount"} 
						value={toToken}
						className="lp-input" 
						style={{"color":"rgba(0, 0, 0, 0.6)","backgroundColor":"rgba(105, 104, 79, 0.16)"}}/>
					</div>
					<Button color="success"variant="contained" style={{"width":100}} onClick={()=>ChangeToken()} >Change</Button>
				</div>
			
				<Button variant="contained" style={{"width":200,"marginTop":20}} onClick={()=>SwapToken()} >Swap</Button>
			</Typography>
		</div>
	);
}

export default Trading;