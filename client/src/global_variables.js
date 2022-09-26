const NFT = require ("./abi/nft");
const TOKEN = require ("./abi/token");
const MARKET = require ("./abi/market");
const ITEMS = require ("./abi/items");
const FIGHT = require ("./abi/fight");
const VTOKEN = require ("./abi/vtoken");
const STAKING = require ("./abi/staking");
const LP = require ("./abi/lp");

export const NFT_CONTRACT_ADDR = process.env.REACT_APP_NFT_CONTRACT_ADDR;
export const MARKET_CONTRACT_ADDR = process.env.REACT_APP_MARKET_CONTRACT_ADDR;
export const ITEMS_CONTRACT_ADDR = process.env.REACT_APP_ITEMS_CONTRACT_ADDR;
export const FIGHT_CONTRACT_ADDR = process.env.REACT_APP_FIGHT_CONTRACT_ADDR;

export const TOKEN_CONTRACT_ADDR = process.env.REACT_APP_TOKEN_CONTRACT_ADDR;
export const VTOKEN_CONTRACT_ADDR = process.env.REACT_APP_VJMTOKEN_CONTRACT_ADDR;
export const STAKING_CONTRACT_ADDR = process.env.REACT_APP_STAKING_CONTRACT_ADDR;
export const ROUTER_CONTRACT_ADDR = process.env.REACT_APP_ROUTER_CONTRACT_ADDR;
export const LPT_CONTRACT_ADDR = process.env.REACT_APP_LPT_CONTRACT_ADDR;
export const LP_CONTRACT_ADDR = process.env.REACT_APP_LP_CONTRACT_ADDR;
export const version = '367';

const getNFTContractABI = () => {
    return NFT["abi"];
}

const getMarketContractABI = () => {
    return MARKET["abi"];
}

const getItemsContractABI = () => {
    return ITEMS["abi"];
}

const getTokenContractABI = () => {
    return TOKEN["abi"];
}

const getFightContractABI = () => {
    return FIGHT["abi"];
}

const getVTokenContractABI = () => {
    return VTOKEN["abi"];
}

const getStakingContractABI = () => {
    return STAKING["abi"];
}
const getLPContractABI = () => {
    return LP["abi"];
}


export const NFT_CONTRACT_ABI = getNFTContractABI();
export const MARKET_CONTRACT_ABI = getMarketContractABI();
export const ITEMS_CONTRACT_ABI = getItemsContractABI();
export const TOKEN_CONTRACT_ABI = getTokenContractABI();
export const FIGHT_CONTRACT_ABI = getFightContractABI();
export const VTOKEN_CONTRACT_ABI = getVTokenContractABI();
export const STAKING_CONTRACT_ABI = getStakingContractABI();
export const LP_CONTRACT_ABI = getLPContractABI();