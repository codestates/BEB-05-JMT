import React, { useState, useEffect } from 'react';
import { selectedCharAtom, selectedImgAtom } from "../recoil/temp/atom";
import metadataAPI from '../api/metadata';
import './styles/Character.css';

function Character({charData, selectedChar, setSelectedImg, setSelectedChar, setSelectedId}) {
  const [image, setImage] = useState();

  useEffect(() => {
    console.log(`update char ${charData}`)
    mycharx();
  }, [selectedChar]);

  const mycharx = async() =>{
    const img = await metadataAPI.fetchCharImage(charData[1].attributes, '0');
    setImage(img);
  }

  const selected = async() => {
    setSelectedId(charData[0]);
    setSelectedChar(charData[1]);
    const img = await metadataAPI.fetchCharImage(charData[1].attributes, 'animated');
    setSelectedImg(img);
  }

  const isSelected = () => {
    return selectedChar && charData[1] && selectedChar.name == charData[1].name
  }


  return (
    <div className={`mychar-container ${isSelected() ? 'mychar-clicked' : ''}`} onClick={selected}>
      <div className='display'></div>
      <img className='mychar-img' src={image? image:null}/>
    </div>
  )
}

export default Character;