import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from "recoil"
import { accountAtom } from "../recoil/account/atom"
import axios from 'axios';
import './styles/Home.css';

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const {
    NFT_CONTRACT_ADDR,
    NFT_CONTRACT_ABI,
} = require('../global_variables');


const Home = () => {
  const account = useRecoilValue(accountAtom);
  const navigate = useNavigate();
  const [image, setImage] = useState();
  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    }
  }, []);

  const mychar = async() =>{
    const NFTContract = await new web3.eth.Contract(
      NFT_CONTRACT_ABI,
      NFT_CONTRACT_ADDR,
    );
    // console.log(account.address);
    const myNFTId = await NFTContract.methods.tokenOfOwnerByIndex(account.address, 0).call();
    console.log(myNFTId);
    const tokenURI = await NFTContract.methods
    .tokenURI(myNFTId)
    .call();
    // console.log(tokenURI);

    const response = await axios.get(tokenURI);
    // console.log(response);
    const tokenMetadata = response.data;
    console.log(tokenMetadata);
    tokenMetadata.image = tokenMetadata.image.replace("ipfs://", "https://ipfs.io/ipfs/");
    console.log(tokenMetadata.image);

    setImage(tokenMetadata.image);
  }

  mychar();
  // const myTotalNFT = await NFTContract.balanceOf(account).call();
  // for(let i = 0; i< myTotalNFT; i++){
  //   NFTContract.tokenOfOwnerByIndex.call(account, i).then((id)=> {...})
  // }



	return (
		<div className='home-container'>
      <div className='username'>
        {account.username}
      </div>
      <img className="my-character" src={image} />
		</div>
	);
}

export default Home;
