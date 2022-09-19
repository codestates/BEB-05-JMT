import axios from "axios";

const Web3 = require('web3');
const {
    NFT_CONTRACT_ADDR,
    NFT_CONTRACT_ABI,
    MARKET_CONTRACT_ADDR,
    MARKET_CONTRACT_ABI,
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
const fetchMarketContract = async () => {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
    const marketContract = await new web3.eth.Contract(
        MARKET_CONTRACT_ABI,
        MARKET_CONTRACT_ADDR,
      );
      return marketContract;
}

const _fetchCharacter = async (charId) => {
    const NFTContract = await contractAPI.fetchNFTContract();
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
    const NFTContract = await contractAPI.fetchNFTContract();
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
        myNFTs.push(tokenMetadata)
    }
    // console.log(myNFTs)
    return myNFTs;
}

const _fetchWeapon = async (weaponId) =>{
    const itemsContract = await contractAPI.fetchItemsContract();
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

const isCharOwner= async(address, charId) =>{
    const NFTContract = await contractAPI.fetchNFTContract();
    const owner = await NFTContract.methods.ownerOf(charId).call();
    console.log(address);
    console.log(owner);
    return owner.toLowerCase() == address;
}

const isWeaponOwner= async(address, weaponId) =>{
    const itemsContract = await contractAPI.fetchItemsContract();
    const balance = await itemsContract.methods.balanceOf(address, weaponId).call();
    return balance!=0;
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
//metadata
const fetchStrength = async(weaponId) => {
    const meta  = await contractAPI.fetchWeapon(weaponId);
    const weapon = await contractAPI.fetchAttributes(meta.attributes);
  
    return weapon.strength;
}

const fetchAttributes = (attributes) => {
    const result = {};
    for(let item of attributes){
      result[item.trait_type] = item.value;
    }
    return result;
}

const addCharacterOnSale = async() =>{

    const marketContract = await fetchMarketContract();
    await marketContract.methods.sell(
        MARKET_CONTRACT_ADDR,
        tokenId,
        Web3.utils.toWei

    )
        

}

const sellCharacter = async() => {

}

const contractAPI = {
    fetchNFTContract,
    fetchItemsContract,
    fetchMarketContract,
    fetchCharacter,
    fetchWeapon,
    mintCharNFT,
    mintFirstWeaponNFT,
    mintWeaponNFT,
    fetchStrength,
    fetchAttributes,
    isCharOwner,
    isWeaponOwner,
    fetchMyCharacter     
};

export default contractAPI;
