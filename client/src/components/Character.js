import React, { useState, useEffect } from 'react';
import { selectedCharAtom, selectedImgAtom } from "../recoil/temp/atom";
import metadataAPI from '../api/metadata';
import './styles/Character.css';

function Character({charData, selectedChar, setSelectedImg, setSelectedChar, setSelectedId}) {
  const [image, setImage] = useState();

  useEffect(() => {
    mycharx();
  }, [selectedChar]);

  const mycharx = async() =>{
    const img = await metadataAPI.fetchCharImage(charData.attributes, '0');
    setImage(img);
  }

  const selected = async() => {
    setSelectedChar(charData);
    const img = await metadataAPI.fetchCharImage(charData.attributes, 'animated');
    setSelectedImg(img);
  }

  const isSelected = () => {
    return selectedChar && charData && selectedChar.name == charData.name
  }


  return (
    <div className={`mychar-container ${isSelected() ? 'char-clicked' : ''}`} onClick={selected}>
      <div className='display'></div>
      <img className='mychar-img' src={image? image:null}/>
    </div>
  )
}

export default Character;