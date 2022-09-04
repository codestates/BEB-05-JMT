const NFT = require ("./abi/nft");
const TOKEN = require ("./abi/token");
const MARKET = require ("./abi/market");

export const NFT_CONTRACT_ADDR = process.env.NFT_CONTRACT_ADDR;
export const MARKET_CONTRACT_ADDR = process.env.MARKET_CONTRACT_ADDR;
export const TOKEN_CONTRACT_ADDR = process.env.TOKEN_CONTRACT_ADDR;

const getNFTContractABI = () => {
    return NFT["abi"];
}

const getTokenContractABI = () => {
    return TOKEN["abi"];
}

const getMarketContractABI = () => {
    return MARKET["abi"];
}

export const NFT_CONTRACT_ABI = getNFTContractABI();
export const TOKEN_CONTRACT_ABI = getTokenContractABI();
export const MARKET_CONTRACT_ABI = getMarketContractABI();