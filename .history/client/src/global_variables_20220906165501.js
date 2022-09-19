const NFT = require ("./abi/nft");
const TOKEN = require ("./abi/token");
const MARKET = require ("./abi/market");

export const NFT_CONTRACT_ADDR = process.env.REACT_APP_NFT_CONTRACT_ADDR;
export const MARKET_CONTRACT_ADDR = process.env.REACT_APP_MARKET_CONTRACT_ADDR;
export const TOKEN_CONTRACT_ADDR = process.env.REACT_APP_TOKEN_CONTRACT_ADDR;

// REACT_APP_TOKEN_CONTRACT_ADDR=your_ganache_token_contract_address
// REACT_APP_NFT_CONTRACT_ADDR=your_ganache_nft_contract_address
// REACT_APP_MARKET_CONTRACT_ADDR=your_ganache_market_contract_address

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
