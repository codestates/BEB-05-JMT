import contractAPI from '../api/contract';

const Web3 = require('web3');
const {
    FIGHT_CONTRACT_ADDR,
    FIGHT_CONTRACT_ABI,
    TOKEN_CONTRACT_ADDR,
    TOKEN_CONTRACT_ABI,
} = require('../global_variables');

const fetchFightContract = async () => {
    const web3 = new Web3(window.ethereum);
    const fightContract = await new web3.eth.Contract(
        FIGHT_CONTRACT_ABI,
        FIGHT_CONTRACT_ADDR
      );
    return fightContract;
}

const fightResult = async(address, userstrength, matchingstrength) => {
    const fightContract = await fetchFightContract();
    const resultcall = await fightContract.methods.setFight(address, userstrength, matchingstrength).send(
    {
        from: address,
        gas: 1500000,
        gasPrice: '3000000'
    }
    );
    const result = await fightContract.methods.getFight().call();
    return result;
}

const rewardScrollNFT = async(address) => {
    try {
        const scrollContract = await contractAPI.fetchItemsContract();
        const scroll = await scrollContract.methods.randRewardScroll().send(
        {
            from: address,
            gas: 1500000,
            gasPrice: '3000000'
        }
        );
        const scrollresult = scroll.events.Rewarded.returnValues.result;
        const scrollId = scroll.events.TransferSingle.returnValues.id;
        if ( scrollresult === true ) {
            alert('스크롤을 획득 하였습니다.');
        } else {
            alert('스크롤을 획득하지 못하였습니다.');
        }
        console.log(scrollId);
        console.log("check");
        return [scrollresult, scrollId];
    } catch (err) {
        alert('스크롤을 획득하지 못하였습니다.!');
        console.log(err);
    }
}

const rewardToken = async(address) => {
    try {
        const web3 = new Web3(window.ethereum);
        var BN = web3.utils.BN;
        const _amount = new BN(String(1)).mul(new BN(String(10**18))).toString();
        const JMTContract = await new web3.eth.Contract(
            TOKEN_CONTRACT_ABI,
            TOKEN_CONTRACT_ADDR
        );
        const token = await JMTContract.methods.randRewardToken(address, _amount).send({from:address});
        const tokenresult = token.events.TokenRewarded.returnValues.result;
        if ( tokenresult === true ) {
            alert('JMT 토큰을 획득하였습니다.');
        } else {
            alert('JMT 토큰을 획득하지 못하였습니다.');
        }
        console.log("check");
        return [tokenresult];
    } catch (err) {
        alert('JMT 토큰을 획득하지 못하였습니다.!');
        console.log(err);
    }
}

const fightdataAPI = {
    fetchFightContract,
    fightResult,
    rewardScrollNFT,
    rewardToken
};

export default fightdataAPI;