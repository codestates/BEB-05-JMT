import axios from "axios";
import contractAPI from '../api/contract';

const Web3 = require('web3');
const {
    NFT_CONTRACT_ADDR,
    NFT_CONTRACT_ABI,
    ITEMS_CONTRACT_ADDR,
    ITEMS_CONTRACT_ABI,
    TOKEN_CONTRACT_ADDR,
    TOKEN_CONTRACT_ABI,
    MARKET_CONTRACT_ABI,
    MARKET_CONTRACT_ADDR
} = require('../global_variables');


const fetchMarketContract = async () => {
    const web3 = new Web3(window.ethereum);
    const marketContract = await new web3.eth.Contract(
        MARKET_CONTRACT_ABI,
        MARKET_CONTRACT_ADDR
    );
    return marketContract;
}
const fetchMarketChar = async () => {
    const marketContract = await fetchMarketContract();
    const result = await marketContract.methods.fetchCharOnSale().call();
    const tokenIdToItem = {};
    for (const item of result) {
        tokenIdToItem[item.token.tokenId] = {
            itemId: item.itemId,
            price: item.price,
            seller: item.seller.toLowerCase()
        }
    }
    console.log(tokenIdToItem);
    return tokenIdToItem;
}

const fetchMarketWeapon = async () => {
    const marketContract = await fetchMarketContract();
    const result = await marketContract.methods.fetchWeaponOnSale().call();
    const tokenIdToItem = {};
    for (const item of result) {
        tokenIdToItem[item.itemId] = {
            tokenId: item.token.tokenId,
            itemId: item.itemId,
            price: item.price,
            seller: item.seller.toLowerCase()
        }
    }
    console.log(tokenIdToItem);
    return tokenIdToItem;
}

const addCharOnSale = async (tokenId, myAddress, price) => {
    try{
        const marketContract = await fetchMarketContract();
        await marketContract.methods
            .sell(
                NFT_CONTRACT_ADDR,
                tokenId,
                String(price),
            )
            .send({
                from: myAddress,
                gas: 1500000,
                gasPrice: '3000000'
            });
        const result = '판매 등록';
        return result;
    }catch(e){
        console.log(e);
        const result = '판매 등록 에러';
        return result;
    }
}

const addWeaponOnSale = async (tokenId, myAddress, price) => {
    try{
        const marketContract = await fetchMarketContract();
        await marketContract.methods
            .sellWeapon(
                ITEMS_CONTRACT_ADDR,
                tokenId,
                String(price),
            )
            .send({
                from: myAddress,
                gas: 1500000,
                gasPrice: '3000000'
            });
        const result = '판매 등록';
        return result;
    }catch(e){
        console.log(e);
        const result = '판매 등록 에러';
        return result;
    }
}

const removeCharOnSale = async (myAddress, itemId) => {
    try{
        const marketContract = await fetchMarketContract();
        await marketContract.methods
            .saleCancel(
                NFT_CONTRACT_ADDR,
                itemId
            )
            .send({
                from: myAddress,
                gas: 1500000,
                gasPrice: '3000000'});

        const result = '판매 취소';
        return result;
    }catch(e){
        console.log(e);
        const result = '판매 취소 에러';
        return result;
    }    
}

const removeWeaponOnSale = async (myAddress, itemId) => {
    try{
        const marketContract = await fetchMarketContract();
        await marketContract.methods
            .saleCancelWeapon(
                ITEMS_CONTRACT_ADDR,
                itemId
            )
            .send({
                from: myAddress,
                gas: 1500000,
                gasPrice: '3000000'});

        const result = '판매 취소';
        return result;
    }catch(e){
        console.log(e);
        const result = '판매 취소 에러';
        return result;
    }    
}

const buyCharOnSale = async (myAddress, itemId, price) => {
    try{
        const marketContract = await fetchMarketContract();
        await marketContract.methods
            .buy(
                NFT_CONTRACT_ADDR,
                itemId
            )
            .send({
                from: myAddress,
                gas: 1500000,
                gasPrice: '3000000'
            });
            
        const result = '구매';
        return result;        
    }catch(e){
        console.log(e);
        const result = '구매 에러';
        return result;
    }
}

const buyWeaponOnSale = async (myAddress, itemId, price) => {
    try{
        const marketContract = await fetchMarketContract();
        await marketContract.methods
            .buyWeapon(
                ITEMS_CONTRACT_ADDR,
                itemId
            )
            .send({
                from: myAddress,
                gas: 1500000,
                gasPrice: '3000000'
            });
            
        const result = '구매';
        return result;        
    }catch(e){
        console.log(e);
        const result = '구매 에러';
        return result;
    }
}


const marketAPI = {
    fetchMarketContract,
    addCharOnSale,
    fetchMarketChar,
    removeCharOnSale,
    buyCharOnSale,
    addWeaponOnSale,
    fetchMarketWeapon,
    removeWeaponOnSale,
    buyWeaponOnSale
};



export default marketAPI;