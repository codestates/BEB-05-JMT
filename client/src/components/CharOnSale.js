import React, { useState, useEffect } from 'react';
import { selectedCharAtom, selectedImgAtom } from "../recoil/temp/atom";
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';
import './styles/CharOnSale.css';

function Character({charId, charData, selectedChar, setSelectedImg, setSelectedChar, setCharOnSale, setSelectedCharId}) {
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
    setSelectedCharId(charId);
    setCharOnSale(charData);
    const img = await metadataAPI.fetchCharImage(char.attributes, 'animated');
    setSelectedImg(img);
  }

  const isSelected = () => {
    return selectedChar && char && selectedChar.name == char.name
  }


  return (
    <div className={`char-container ${isSelected() ? 'char-clicked' : ''}`} onClick={selected}>
      <div className='char-display'></div>
      <img className='char-img' src={image? image:null}/>
      <div className='char-price'>{charData.price} JMT</div>
    </div>
  )
}

export default Character;