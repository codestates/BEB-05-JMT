import axios from "axios";
import ROUTER from "../abi/router";
import LP from "../abi/lp";
import LPT from "../abi/lpt"

const Web3 = require('web3');
const {
    NFT_CONTRACT_ADDR,
    NFT_CONTRACT_ABI,
    ITEMS_CONTRACT_ADDR,
    ITEMS_CONTRACT_ABI,
    TOKEN_CONTRACT_ADDR,
    TOKEN_CONTRACT_ABI,
    VTOKEN_CONTRACT_ADDR,
    VTOKEN_CONTRACT_ABI,
    STAKING_CONTRACT_ADDR,
    STAKING_CONTRACT_ABI,
    LP_CONTRACT_ADDR,
    ROUTER_CONTRACT_ADDR,
    LPT_CONTRACT_ADDR,
    FIGHT_CONTRACT_ADDR,
    FIGHT_CONTRACT_ABI
} = require('../global_variables');

// <-- vJMT
const getBalnceOfvJmt = async(address) => {
    const web3 = new Web3(window.ethereum);
    const VJMTContract = await new web3.eth.Contract(
        VTOKEN_CONTRACT_ABI,
        VTOKEN_CONTRACT_ADDR
    );
    const result = await VJMTContract.methods.balanceOf(address).call();
    return result;
}

// <-- staking
const vJMTStaking = async(amount, address) => {
    const web3 = new Web3(window.ethereum);
    var BN = web3.utils.BN;
    const _amount = new BN(String(amount)).mul(new BN(String(10**18))).toString();
    const StakingContract = await new web3.eth.Contract(
        STAKING_CONTRACT_ABI,
        STAKING_CONTRACT_ADDR
    );
    const result = await StakingContract.methods.stakeToken(_amount).send({
        from:address,
        gas: 1500000,
        gasPrice: '3000000'
    });
    console.log(result);
    return result;
}

// <--unstaking
const vJMTunStaking = async() => {
    const web3 = new Web3(window.ethereum);
    const StakingContract = await new web3.eth.Contract(
        STAKING_CONTRACT_ABI,
        STAKING_CONTRACT_ADDR
    );
    const result = await StakingContract.methods.unStakingToken().call();
    return result;
}

// <--보상 수령 가능한가 확인
const getReward = async(address, amount) => {
    const web3 = new Web3(window.ethereum);
    const StakingContract = await new web3.eth.Contract(
        STAKING_CONTRACT_ABI,
        STAKING_CONTRACT_ADDR
    );
    const result = await StakingContract.methods.claimReward(address, amount).call();
    console.log(result);
    return result;
}

// <--보상 갯수 보기
const viewReward = async() => {
    const web3 = new Web3(window.ethereum);
    const StakingContract = await new web3.eth.Contract(
        STAKING_CONTRACT_ABI,
        STAKING_CONTRACT_ADDR
    );
    const result = await StakingContract.methods.claimableReward().call();
    return result;
}

// <-- swap 
const getBalnceOfJmt = async(address) => {
    const web3 = new Web3(window.ethereum);
    const JMTContract = await new web3.eth.Contract(
        TOKEN_CONTRACT_ABI,
        TOKEN_CONTRACT_ADDR
    );
    const result = await JMTContract.methods.balanceOf(address).call();
    return result;
}

const SendJmtToken = async(to,address,amount) => {
    const web3 = new Web3(window.ethereum);
    var BN = web3.utils.BN;
    const _amount = new BN(String(amount)).mul(new BN(String(10**18))).toString();
    const JMTContract = await new web3.eth.Contract(
        TOKEN_CONTRACT_ABI,
        TOKEN_CONTRACT_ADDR
    );
    await JMTContract.methods.transfer(to,_amount).send({from:address});
} 

const GetReserve = async() => {
    const web3 = new Web3(window.ethereum);
    const lpContract = await new web3.eth.Contract(
        LP,
        LP_CONTRACT_ADDR
    );
    return await lpContract.methods.getReserves().call();
}
//toFixed(2); 고정 소수점, 지정된 숫자만큼 표시하고 나머지는 0으로 채움
const SwapToken = async(eth,jmt,address,inputToken) =>{
    const web3 = new Web3(window.ethereum);
    const routerContract = await new web3.eth.Contract(
        ROUTER,
        ROUTER_CONTRACT_ADDR
    );
    if(inputToken == 0){ // eth -> jmt
        const _ethAmount = web3.utils.toWei(parseFloat(eth).toFixed(6),'ether'); // new BN(parseFloat(eth)) // new BigNumber(eth*10**18)
        const r = routerContract.methods.swapTokens(0).send({
            value : _ethAmount,
            from : address,
            gas: 1500000,
            gasPrice: '3000000'
        });
        console.log(r)
    }else if(inputToken == 1) {// jmt -> eth 
        const _jmtAmount = web3.utils.toWei(parseFloat(jmt).toFixed(6),'ether');
        const r =  routerContract.methods.swapTokens(_jmtAmount).send({
            from : address,
            gas: 1500000,
            gasPrice: '30000000'
        });
        console.log(r)
    }
    //console.log(result)
} 

const getBalnceOfLpToken = async(address) => {
    const web3 = new Web3(window.ethereum);
    const lptContract = await new web3.eth.Contract(
        LPT,
        LPT_CONTRACT_ADDR
    );
    console.log(address);
    const result = await lptContract.methods.balanceOf(address).call();
    return parseFloat(web3.utils.fromWei(result,'ether')).toFixed(6)
}

const depositToken = async(jmtAmount,ethAmount,address) => {
    const web3 = new Web3(window.ethereum);
    const routerContract = await new web3.eth.Contract(
        ROUTER,
        ROUTER_CONTRACT_ADDR
    );
    const _ethAmount = web3.utils.toWei(parseFloat(ethAmount).toFixed(6),'ether');
    const _jmtAmount = web3.utils.toWei(parseFloat(jmtAmount).toFixed(6),'ether');
    return await routerContract.methods.addLiquidity(_jmtAmount).send({
        value: _ethAmount,
        from : address,
        gas: 1500000,
        gasPrice: '30000000'
    });
}

const withdrawToken = async(address) => {
    const web3 = new Web3(window.ethereum);
    const routerContract = await new web3.eth.Contract(
        ROUTER,
        ROUTER_CONTRACT_ADDR
    );
    const aa = await routerContract.methods.pullLiquidity().send({
        gas: 1500000,
        gasPrice: '30000000',
        from:address
    });
    console.log(aa)
    return aa;
}


// swap -->
const fetchNFTContract = async () => {
    const web3 = new Web3(window.ethereum);
    const NFTContract = await new web3.eth.Contract(
        NFT_CONTRACT_ABI,
        NFT_CONTRACT_ADDR,
      );
      return NFTContract;
}
const fetchItemsContract = async () => {
    const web3 = new Web3(window.ethereum);
    const itemsContract = await new web3.eth.Contract(
        ITEMS_CONTRACT_ABI,
        ITEMS_CONTRACT_ADDR,
      );
      return itemsContract;
}

const fetchFightContract = async () => {
    const web3 = new Web3(window.ethereum);
    const fightContract = await new web3.eth.Contract(
        FIGHT_CONTRACT_ABI,
        FIGHT_CONTRACT_ADDR
      );
    return fightContract;
}

const _fetchCharacter = async (charId) => {
    const NFTContract = await fetchNFTContract();
    const tokenURI = await NFTContract.methods.tokenURI(charId).call();
    const response = await axios.get(tokenURI);
    const tokenMetadata = response.data;
    tokenMetadata.image = tokenMetadata.image.replace("ipfs://", "https://ipfs.io/ipfs/");
    return tokenMetadata;
}
const fetchCharacter = async (charId) => {
    try{
        return await _fetchCharacter(charId);
    } catch(err){
        return await _fetchCharacter(charId);
    }
}
const fetchMyCharacter = async (address) => {
    const NFTContract = await fetchNFTContract();
    const balance = await NFTContract.methods.balanceOf(address).call();

    let arr = [];
    for(let i = 0; i < balance; i++) {
        const charId = await NFTContract.methods.tokenOfOwnerByIndex(address, i).call();
        arr.push(charId);
        // console.log(arr);
    }
    let myNFTs = [];
    for(const charId of arr) {
        const tokenURI = await NFTContract.methods.tokenURI(charId).call();
        const response = await axios.get(tokenURI);
        const tokenMetadata = response.data;
        tokenMetadata.image = tokenMetadata.image.replace("ipfs://", "https://ipfs.io/ipfs/");
        myNFTs.push([charId, tokenMetadata])
    }
    // console.log(myNFTs)
    return myNFTs;
}

const _fetchWeapon = async (weaponId) =>{
    const itemsContract = await fetchItemsContract();
    const weaponURI = await itemsContract.methods.uri(parseInt(weaponId)).call();
    const response = await axios.get(weaponURI);
    const weaponMetadata = response.data;
    weaponMetadata.image = weaponMetadata.image.replace("ipfs://", "https://ipfs.io/ipfs/");
    return weaponMetadata;
}
const fetchWeapon = async (weaponId) => {
    try{
        return await _fetchWeapon(weaponId);
    } catch(err) {
        return await _fetchWeapon(weaponId);
    }    
}

const fetchMyItems = async(address) => {
    const itemsContract = await fetchItemsContract();
    const myItems = await itemsContract.methods.balanceCheck(address).call();
    return myItems;
}

const isCharOwner= async(address, charId) =>{
    const NFTContract = await fetchNFTContract();
    const owner = await NFTContract.methods.ownerOf(charId).call();
    console.log(address);
    console.log(owner);
    return owner.toLowerCase() == address;
}

const isWeaponOwner= async(address, weaponId) =>{
    const itemsContract = await fetchItemsContract();
    const balance = await itemsContract.methods.balanceOf(address, weaponId).call();
    return balance!=0;
}

const mintCharNFT = async(address) => {
    const NFTContract = await fetchNFTContract();
    const char = await NFTContract.methods.mintMapleNFT().send(
        {
            from: address,
            gas: 1500000,
            gasPrice: '3000000'
        }
    );
    const charId = char.events.Minted.returnValues.tokenId;

    return charId;
}

const mintFirstWeaponNFT = async(address) => {
    const itemsContract = await fetchItemsContract();
    const weapon = await itemsContract.methods.mintFirstWeapon().send(
        {
            from: address,
            gas: 1500000,
            gasPrice: '3000000'
        }
    );
    const weaponId = weapon.events.TransferSingle.returnValues.id;
    return weaponId;
}

const mintWeaponNFT = async(address) => {
    const itemsContract = await fetchItemsContract();
    const weapon = await itemsContract.methods.mintRandomWeapon().send(
        {
            from: address,
            gas: 1500000,
            gasPrice: '3000000'
        }
    );
    const weaponId = weapon.events.TransferSingle.returnValues.id;
    return weaponId;
}

const mintScrollNFT = async(address) => {
    const scrollContract = await fetchItemsContract();
    const scroll = await scrollContract.methods.mintScroll().send(
        {
            from: address,
            gas: 1500000,
            gasPrice: '3000000'
        }
    );
    const scrollId = scroll.events.TransferSingle.returnValues.id;
    console.log(scrollId);
    console.log("check");
    return scrollId;
}

const upgradeWeapon = async(address, scrollId, weaponId) => {
    try{
        const itemsContract = await fetchItemsContract();
        const upgrade = await itemsContract.methods.upgrade(scrollId, weaponId).send(
            {
                from: address,
                gas: 1500000,
                gasPrice: '3000000'
            }
        );
        const result = upgrade.events.Upgraded.returnValues.result;
        const id = upgrade.events.Upgraded.returnValues.weaponId;
        return [true, result, id];
    }catch(e){
        const message = e.message.split(':')[6].split('"')[0];
        return [false, false, message];
    }
}

const fightResult = async(address, userstrength, matchingstrength) => {
    const fightContract = await contractAPI.fetchFightContract();
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
        const scrollContract = await fetchItemsContract();
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

/*
const fetchFightContract = async () => {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
    const FightContract = await new web3.eth.Contract(
        FIGHT_CONTRACT_ABI,
        FIGHT_CONTRACT_ADDR
      );
      return FightContract;
}
const fetchFight = async(userweaponId, matchingweaponId) => {
    const FightContract = await contractAPI.fetchFightContract();
    const result = await FightContract.methods.fight(userweaponId, matchingweaponId).call();
    return result;
}
*/

//market


//metadata
const fetchStrength = async(weaponId) => {
    const meta  = await fetchWeapon(weaponId);
    const weapon = await fetchAttributes(meta.attributes);
  
    return weapon.strength;
}

const fetchAttributes = (attributes) => {
    const result = {};
    for(let item of attributes){
      result[item.trait_type] = item.value;
    }
    return result;
}



const contractAPI = {
    fetchNFTContract,
    fetchItemsContract,
    fetchFightContract,
    fetchCharacter,
    fetchWeapon,
    mintCharNFT,
    mintFirstWeaponNFT,
    mintWeaponNFT,
    fetchStrength,
    fetchAttributes,
    isCharOwner,
    isWeaponOwner,
    fetchMyCharacter,
    fetchMyItems,
    mintScrollNFT,
    fightResult,
    rewardScrollNFT,
    rewardToken,
    getBalnceOfJmt,
    SendJmtToken,
    GetReserve,
    SwapToken,
    getBalnceOfLpToken,
    depositToken,
    withdrawToken,
    upgradeWeapon,
    getBalnceOfvJmt,
    vJMTStaking,
    vJMTunStaking,
    getReward,
    viewReward
};

export default contractAPI;