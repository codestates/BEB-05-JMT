import React, { useState, useEffect } from 'react';
import { selectedCharAtom, selectedImgAtom } from "../recoil/temp/atom";
import metadataAPI from '../api/metadata';
import './styles/CharNFT.css';

function CharNFTs({charData, setSelectedImg, setSelectedChar}) {
  const [image, setImage] = useState();

  useEffect(() => {
    mycharx();
  }, []);

  const mycharx = async() =>{
    const img = await metadataAPI.fetchCharImage(charData.attributes, '0');
    console.log(img);
    setImage(img);
  }

  const selected = async() => {
    setSelectedChar(charData);
    const img = await metadataAPI.fetchCharImage(charData.attributes, 'animated');
    setSelectedImg(img);
  }


  return (
    <div className='mychar-container' onClick={selected}>
      <div className='display'></div>
      <img className='mychar-img' src={image? image:null}/>
    </div>
  )
}

export default CharNFTs;