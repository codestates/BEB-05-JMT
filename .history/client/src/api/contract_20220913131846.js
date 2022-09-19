import axios from "axios";
const Web3 = require('web3');
const {
    NFT_CONTRACT_ADDR,
    NFT_CONTRACT_ABI,
    ITEMS_CONTRACT_ADDR,
    ITEMS_CONTRACT_ABI,
} = require('../global_variables');

const fetchNFTContract = async () => {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8501'));
    const NFTContract = await new web3.eth.Contract(
        NFT_CONTRACT_ABI,
        NFT_CONTRACT_ADDR,
      );
      return NFTContract;
}

const fetchItemsContract = async () => {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8501'));
    const itemsContract = await new web3.eth.Contract(
        ITEMS_CONTRACT_ABI,
        ITEMS_CONTRACT_ADDR,
      );
      return itemsContract;
}

const fetchCharacter = async (address, charId) => {
    try{
        const NFTContract = await contractAPI.fetchNFTContract();
        const tokenURI = await NFTContract.methods.tokenURI(charId).call();
        const response = await axios.get(tokenURI);
        const tokenMetadata = response.data;
        tokenMetadata.image = tokenMetadata.image.replace("ipfs://", "https://ipfs.io/ipfs/");
        return tokenMetadata;
    } catch(err){
        const NFTContract = await contractAPI.fetchNFTContract();
        const tokenURI = await NFTContract.methods.tokenURI(charId).call();
        const response = await axios.get(tokenURI);
        const tokenMetadata = response.data;
        tokenMetadata.image = tokenMetadata.image.replace("ipfs://", "https://ipfs.io/ipfs/");
        return tokenMetadata;
    }
}

const fetchWeapon = async (address, weaponId) => {
    try{
        const itemsContract = await contractAPI.fetchItemsContract();
        const weaponURI = await itemsContract.methods.uri(parseInt(weaponId)).call();
        const response = await axios.get(weaponURI);
        const weaponMetadata = response.data;
        weaponMetadata.image = weaponMetadata.image.replace("ipfs://", "https://ipfs.io/ipfs/");
        return weaponMetadata;
    } catch(err) {
        const itemsContract = await contractAPI.fetchItemsContract();
        const weaponURI = await itemsContract.methods.uri(parseInt(weaponId)).call();
        const response = await axios.get(weaponURI);
        const weaponMetadata = response.data;
        weaponMetadata.image = weaponMetadata.image.replace("ipfs://", "https://ipfs.io/ipfs/");
        return weaponMetadata;
    }    
}

const mintCharNFT = async(address) => {
    const NFTContract = await contractAPI.fetchNFTContract();
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
    const itemsContract = await contractAPI.fetchItemsContract();
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
    const itemsContract = await contractAPI.fetchItemsContract();
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

const contractAPI = {
    fetchNFTContract,
    fetchItemsContract,
    fetchCharacter,
    fetchWeapon,
    mintCharNFT,
    mintFirstWeaponNFT,
    mintWeaponNFT     
};

export default contractAPI;
