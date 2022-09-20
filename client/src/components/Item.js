import React, { useState, useEffect } from 'react';
import { useRecoilValue , useSetRecoilState } from "recoil"
import { accountAtom } from "../recoil/account/atom"
import { weaponMetadataAtom } from '../recoil/tokenMetadata/atom';
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';
import './styles/Item.css';

function Item({itemData, selectedId, setSelectedImg, setSelectedItem, setSelectedId, setItemAttr, setItemName, setIsScroll}) {
  //무기 관련
  const [item, setItem] = useState();
  const [image, setImage] = useState();
  const [amount, setAmount] = useState();

  useEffect(() => {
    myitem();
    isSelected();
  }, [selectedId]);
 
  const myitem = async() =>{
    const item = await contractAPI.fetchWeapon(itemData[0]);
    setItem(item);
    setImage(item.image);
    setAmount(itemData[1]);
  }

  const selected = async() => {
    setSelectedItem(item);
    setSelectedId(itemData[0]);
    const itemAttr = await contractAPI.fetchAttributes(item.attributes);
    setItemAttr(itemAttr);
    
    let name="";

    if(itemAttr?.type=='scroll'){
      setIsScroll(true);
      console.log(itemAttr.successRate*100);
      setSelectedImg(image);
      name = `강화 주문서 ${itemAttr.successRate*100}%`;
    }else{
      setIsScroll(false);
      console.log('weapon');
      const img = await metadataAPI.fetchWeaponImage(item.attributes);
      setSelectedImg(img);
      name = await metadataAPI.fetchItemName(item.attributes);
    }

    setItemName(name);
  }

  const isSelected = () => {
    return selectedId && itemData && selectedId == itemData[0]
  }

  return (
    <div className={`myitem-container ${isSelected() ? 'item-clicked' : ''}`} onClick={selected}>
      <img className='myitem-img' src={image? image:null}/>
      <div className='amount'>{amount}</div>
    </div>
  )
}

export default Item;