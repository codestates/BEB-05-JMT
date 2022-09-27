import React, { useState, useEffect } from 'react';
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';
import accountAPI from '../api/account';
import './styles/WeaponOnSale.css';

function WeaponOnSale({itemData, selectedId, setSelectedImg, setSelectedItem, setSelectedId, setItemAttr, setItemName, setWeaponOnSale, setOwner}) {
  //무기 관련
  const [item, setItem] = useState();
  const [image, setImage] = useState();
  const [attr, setAttr] = useState();

  useEffect(() => {
    console.log(`update item ${itemData}`)
    myitem();
    isSelected();
  }, [selectedId, itemData]);
 
  const myitem = async() =>{
    const item = await contractAPI.fetchWeapon(itemData.tokenId);
    setItem(item);    
    setImage(item.image);
    const itemAttr = await contractAPI.fetchAttributes(item.attributes);
    setAttr(itemAttr);
  }

  const selected = async() => {
    setSelectedItem(item);
    setItemAttr(attr);
    setSelectedId(itemData.itemId);
    setWeaponOnSale(itemData);
    const seller = await ownerName(itemData.seller);
    setOwner(seller);
    const img = await metadataAPI.fetchWeaponImage(item.attributes);
    setSelectedImg(img);
    const name = await metadataAPI.fetchItemName(item.attributes);
    setItemName(name);
  }

  const isSelected = () => {
    return selectedId && itemData && selectedId == itemData.itemId
  }

  const ownerName= async(address) =>{
    const check = await accountAPI.fetchUser(address);
    console.log(check);
    return check.username;
  }

  return (
    <div className={`weapon-container ${isSelected() ? 'weapon-clicked' : ''} weapon-opaque`} onClick={selected}>
      <img className='weapon-img' src={image? image:null}/>
      <div className='weapon-amount'>{attr? attr.type:null}</div>
      <div className='weapon-amount'>Lv. {attr? attr.strength:null}</div>
      <div className='weapon-amount'>{itemData.price} JMT</div>
    </div>
  )
}

export default WeaponOnSale;