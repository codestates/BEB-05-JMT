import React, { useState, useEffect, useRef } from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue} from "recoil";
import { accountAtom } from "../../recoil/account/atom";
import contractAPI from "../../api/contract";
import { Button, Typography, Stack, Card, Grid, CardContent, Input, CardActions } from '@mui/material'
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
		<div className='Liquidity'>
		<Grid container spacing={4}>
			<Grid item xs={12} md={12}>
				<Stack
					sx={{ pt: 4 }}
					direction="row"
					spacing={2}
					justifyContent="center"
				>
				<Card sx={{ width: 450 }}>
					<Stack
						sx={{ pt: 4 }}
						direction="row"
						spacing={2}
						justifyContent="center"
					>
						<CardContent sx={{ flex: 1 }}>
							<Typography
								variant="subtitle1"
								color="text.secondary"
								component="div"
							>
								<div className="input-amounts">
									<div className="input-container">
										ETH<input 
										type="text" 
										placeholder="ETH amount..." 
										className="lp-input" 
										style={{"color":"rgba(0, 0, 0, 0.6)"}}
										onChange={(e) => ethHandleInputChange(e.target.value)}
										ref={ethRef}/>
									</div>
									<div className="input-container">
										JMT<input 
										type="text" 
										placeholder="JMT amount..."
										className="lp-input" 
										style={{"color":"rgba(0, 0, 0, 0.6)"}}
										onChange={(e) => jmtHandleInputChange(e.target.value)} 
										ref={jmtRef}/>
									</div>
								</div>
								<Button variant="contained" style={{"width":200,"marginTop":20}} 
								onClick={()=> deposit()}>Deposit</Button>
							</Typography>
						</CardContent>
                    </Stack>
                </Card>

            	<Card sx={{ width: 450 }}>
              	<Stack sx={{ display: "flex" }}>
                	<CardContent sx={{ flex: 1,"marginTop":5}}>
					<Typography
						variant="subtitle1"
						color="text.secondary"
						component="div"
					>
						<div style={{"marginTop":10}}>LP Token Amount</div>
						<div style={{"marginTop":10,"borderBottom":"1px solid #ff8c00"}}>{lpToken} LP</div>
						<Button variant="contained" style={{"width":200,"marginTop":20}} onClick={() => withdraw()}>Withdraw</Button>
					</Typography>
					</CardContent>
              	</Stack>
            	</Card>
          	</Stack>
        	</Grid>
      	</Grid>
		</div>
	);
}

export default Liquidity;