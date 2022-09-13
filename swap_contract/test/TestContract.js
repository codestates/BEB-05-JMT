const assert = require('chai').assert;
const Web3 = require('web3');
const bigNumber = require('bignumber.js');

const lpContract = artifacts.require('../contracts/LiquidityPool.sol');
const jonMatangContract = artifacts.require('../contracts/JonMatang.sol');
const lptContract = artifacts.require('../contracts/LPT.sol');
const router = artifacts.require('../contracts/JMTRouter.sol');


const web3 = new Web3();
web3.setProvider(new Web3.providers.HttpProvider('http://127.0.0.1:7545')); //로컬로 테스트 

const decimalPoint = bigNumber(1);
var decimal = decimalPoint.dividedBy(10**18);
let _jmtCont,_lpCont,_routerCont;
let owner = ""; // acc1==owner
let accounts;

contract("jonMatangContract",()=>{
    before("초기 설정", async ()=>{
        _jmtCont =  await jonMatangContract.deployed();
        _lpCont =  await lpContract.deployed();
        _routerCont = await router.deployed();
        accounts = await web3.eth.getAccounts();
        owner = accounts[1];
    })

    describe("[ ERC20 JonMatangContract ]", async () =>{
        it("Accounts init", ()=>{
            assert.ok(owner != "", "Accounts init fail");
        });

        it("투자및 토큰 클레임 체크", async () =>{
            for(let i =1 ; i < 2;i++ ){
                await _jmtCont.contribute({ 
                    from: accounts[i],
                    value: web3.utils.toWei("1000000000","gwei") 
                });
                await _jmtCont.claimTokens({
                    from: accounts[i]
                });
            }
            //자산 이동 최초 풀생성
            await _jmtCont.sendLiquidityToLPContract(lpContract.address);
            
            await _lpCont.getReserves().then((value)=>{
                console.log("최초 리저브")
                const {0: ethReserve, 1:jmtReserve} = value;
                const perEth = jmtReserve/ethReserve;
                console.log(jmtReserve + "|||||" + ethReserve)
                // jmt 입력
                // const jmt = 135;
                // const ethValue = (jmt*1)/perEth;
                // console.log(ethValue)
                // // eth 입력 
                // const eth = 2;
                // const jmtValue = eth*perEth;
                // console.log(jmtValue) 
                // console.log("eth = " + bigNumber(127).multipliedBy(decimal).toString());
                // console.log("jmt = " + bigNumber(1647898715).multipliedBy(decimal).toString());
            }); 

            await _jmtCont.balanceOf(accounts[1]).then((result)=>{
                console.log("value -> "+result)
            })

            // 스왑 100jmt -> eth
            await _routerCont.swapTokens(bigNumber(50*10**18).toString(), { 
                from: accounts[1],
            }).then(() =>{
               
            });

            await _lpCont.getReserves().then((value)=>{
                console.log("스왑 이후 리저브")
                const {0: ethReserve, 1:jmtReserve} = value;
                const perEth = jmtReserve/ethReserve;
                console.log(jmtReserve + "|||||" + ethReserve)
                console.log(bigNumber(jmtReserve*ethReserve).toString())
                console.log(bigNumber(perEth).toString())
            }); 


            // await _lpCont.getReserveRatio(1,100).then((value) =>{
            //     console.log(bigNumber(1647898715/127).toString())
            // });
            // await _jmtCont.contribute({ 
            //     from: accounts[2],
            //     value: web3.utils.toWei("1.5","ether") 
            // });
        
            // await _jmtCont.claimTokens({
            //     from: accounts[1]
            // });
            // for (let i = 0; i < 10; i++) {
            //     await spaceCoin.connect(addrs[i]).contribute({ value: parseEther("10") });
            //     await spaceCoin.connect(addrs[i]).claimTokens();
            //   }
        

        });
        
    });
})