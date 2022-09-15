import React, { useState, useEffect } from 'react';
import { Button, Typography, Stack, Card, Grid, CardContent, Input, CardActions } from '@mui/material';

function TokenInfo(props) {

	return (
		<div className='liquidity'>
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
                            <h3>Wallet Address</h3>
                            <p>0xe89403b745198debf9dbe1cd34fa4f6352f977c0</p>
                        </Typography>
                      
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                        >
                            <h3>IC Token</h3>
                            <p>123 JMT</p>
                        </Typography>
                   
                        </CardContent>
                    </Stack>
                </Card>

            <Card sx={{ width: 450 }}>
              <Stack sx={{ display: "flex" }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    <h3>보낼 주소</h3>
                    <Input 
                      className="target"
                      placeholder="보낼 주소" 
                      inputProps=""
                      type="text"
                      value=""
                      onChange=""
                    />
                  </Typography>

                  <Typography variant="subtitle1" color="text.secondary">
                    <h3>토큰 갯수</h3>
                    <Input 
                      className="amount"
                      placeholder="토큰 갯수" 
                      inputProps=""
                      value=""
                      type="text"
                      onChange=""
                    />
                    </Typography>
                
                </CardContent>

                {/* 토큰 전송 버튼 */}
                <CardActions style={{"textAlign":"center"}}>
                  <Button variant="contained" style={{"display":"inline-block"}} onClick="" >보내기</Button>
                </CardActions>
              </Stack>
            </Card>
          </Stack>
        </Grid>
      </Grid>

        </div>
	);
}

export default TokenInfo;