import React, { useState, useEffect } from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue} from "recoil";
import { accountAtom } from "../../recoil/account/atom";
import { Button, Typography, Stack, Card, Grid, CardContent, Input, CardActions } from '@mui/material';
import contractAPI from "../../api/contract";

function TokenInfo() {
  const account = useRecoilValue(accountAtom);
  const [jmtAmount,setJmtAmount] = useState(0);
  const [amount,setAmount] = useState(0); // 보낼양 
  const [target,setTarget] = useState(""); // 타겟 주소
  const decimals = 10**18;

  useEffect(() => {
    contractAPI.getBalnceOfJmt(account.address).then((result)=>{
      setJmtAmount(result)
    })

  }, []);

  const SendToken = () => {
    if(account.length != 0){
      contractAPI.SendJmtToken(target,account.address,amount).then(()=>{
        alert("전송 완료!");
        contractAPI.getBalnceOfJmt(account.address).then((result)=>{
          setJmtAmount(result)
          window.location.reload();
        })
      })
    }
  };

	return (
		<div className='TokenInfo'>
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
                            <h6 style={{"marginBlockStart":0,"marginBlockEnd":0,"marginTop":0,"color":"rgba(0, 0, 0, 0.7)"}}>Wallet Address</h6>
                            <h6 style={{"marginTop":10,"color":"rgba(0, 0, 0, 0.6)"}}>{account.address}</h6>
                     
                            <h6 style={{"marginBlockStart":0,"marginBlockEnd":0,"marginTop":10,"color":"rgba(0, 0, 0, 0.7)"}}>IC Token</h6>
                            <h6 style={{"marginTop":10,"color":"rgba(0, 0, 0, 0.6)"}}>{(jmtAmount/decimals)} JMT</h6> 
                        </CardContent>
                    </Stack>
                </Card>

            <Card sx={{ width: 450 }}>
              <Stack sx={{ display: "flex" }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    <div style={{"display":"inline-block","marginTop":10}}>보낼 주소</div>
                    <Input 
                      className="target"
                      placeholder="보낼 주소" 
                      type="text"
                      style={{"marginLeft":10}}
                      value={target}
                      onChange={(e) => setTarget(e.target.value)}
                    />
                  </Typography>

                  <Typography variant="subtitle1" color="text.secondary" style={{"marginTop":20}}>
                  <div style={{"display":"inline-block"}}>토큰 갯수</div>
                    <Input 
                      className="amount"
                      placeholder="토큰 갯수" 
                      type="text"
                      style={{"marginLeft":10}}
                      onChange={(e) => setAmount(e.target.value)}
                      value={amount}
                    />
                    </Typography>
                    <Button variant="contained" style={{"width":200,"marginTop":20}} onClick={() => SendToken()} >보내기</Button>
                </CardContent>
                
              </Stack>
            </Card>
          </Stack>
        </Grid>
      </Grid>

        </div>
	);
}

export default TokenInfo;