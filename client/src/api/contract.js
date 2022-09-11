import axios from "axios";
const Web3 = require('web3');
const {
    NFT_CONTRACT_ADDR,
    NFT_CONTRACT_ABI,
    ITEMS_CONTRACT_ADDR,
    ITEMS_CONTRACT_ABI,
} = require('../global_variables');

const fetchNFTContract = async () => {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
    const NFTContract = await new web3.eth.Contract(
        NFT_CONTRACT_ABI,
        NFT_CONTRACT_ADDR,
      );
      return NFTContract;
}

const fetchItemsContract = async () => {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
    const itemsContract = await new web3.eth.Contract(
        ITEMS_CONTRACT_ABI,
        ITEMS_CONTRACT_ADDR,
      );
      return itemsContract;
}

const fetchCharacter = async (address, charId) => {
    const NFTContract = await contractAPI.fetchNFTContract();
    const tokenURI = await NFTContract.methods.tokenURI(charId).call();
    const response = await axios.get(tokenURI);
    const tokenMetadata = response.data;
    tokenMetadata.image = tokenMetadata.image.replace("ipfs://", "https://ipfs.io/ipfs/");
    return tokenMetadata;
}

const fetchWeapon = async (address, weaponId) => {
    const itemsContract = await contractAPI.fetchItemsContract();
    const weaponURI = await itemsContract.methods.uri(parseInt(weaponId)).call();
    const response = await axios.get(weaponURI);
    const weaponMetadata = response.data;
    weaponMetadata.image = weaponMetadata.image.replace("ipfs://", "https://ipfs.io/ipfs/");
    return weaponMetadata;
}

const contractAPI = {
    fetchNFTContract,
    fetchItemsContract,
    fetchCharacter,
    fetchWeapon
     
};

export default contractAPI;
