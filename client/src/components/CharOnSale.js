import React, { useState, useEffect } from 'react';
import { selectedCharAtom, selectedImgAtom } from "../recoil/temp/atom";
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';
import accountAPI from '../api/account';
import './styles/CharOnSale.css';

function CharOnSale({charId, charData, selectedChar, setSelectedImg, setSelectedChar, setCharOnSale, setOwner}) {
  const [image, setImage] = useState();
  const [char, setChar] = useState();

  useEffect(() => {
    console.log(`update char ${charData}`)
    mycharx();
  }, [selectedChar]);

  const mycharx = async() =>{
    const result=await contractAPI.fetchCharacter(charId);
    setChar(result);
    const img = await metadataAPI.fetchCharImage(result.attributes, '0');
    setImage(img);
  }

  const selected = async() => {
    setSelectedChar(char);
    setCharOnSale(charData);
    console.log(charData.seller);
    const seller = await ownerName(charData.seller);
    setOwner(seller);
    const img = await metadataAPI.fetchCharImage(char.attributes, 'animated');
    setSelectedImg(img);
  }

  const isSelected = () => {
    return selectedChar && char && selectedChar.name == char.name
  }

  const ownerName= async(address) =>{
    const check = await accountAPI.fetchUsername(address);
    console.log(check);
    return check.username;
  }


  return (
    <div className={`char-container ${isSelected() ? 'char-clicked' : ''}`} onClick={selected}>
      <div className='char-display'></div>
      <img className='char-img' src={image? image:null}/>
      <div className='char-price'>{charData.price} JMT</div>
    </div>
  )
}

export default CharOnSale;