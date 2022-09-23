import React, { useState, useEffect } from 'react';
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';
import './styles/Item.css';

function Item({itemData, onUpgrade, selectedId, selectedId2, isScroll, setSelectedImg, setSelectedItem, setSelectedId, setSelectedId2, setItemAttr, setItemName, setIsScroll, setSelectedAmount}) {
  //무기 관련
  const [item, setItem] = useState();
  const [image, setImage] = useState();
  const [amount, setAmount] = useState();
  const [trans, setTrans] = useState(false);
  const [attr, setAttr] = useState();

  useEffect(() => {
    myitem();
    isSelected();
  }, [selectedId, onUpgrade, itemData]);
 
  const myitem = async() =>{
    const item = await contractAPI.fetchWeapon(itemData[0]);
    setItem(item);
    setImage(item.image);
    setAmount(itemData[1]);
    const itemAttr = await contractAPI.fetchAttributes(item.attributes);
    setAttr(itemAttr);
    if(onUpgrade){
      if(!selectedId2){
        if(isScroll&&itemAttr?.type=='scroll'){
          setTrans(true);
        }else if(!isScroll&&itemAttr?.type!='scroll'){
          setTrans(true);
        }
      }
    }else{
      setTrans(false);
    }
  }

  const selected = async() => {
    setSelectedItem(item);
    setItemAttr(attr);
    setSelectedAmount(amount);

    let name="";
    if(onUpgrade){
      setSelectedId2(itemData[0]);
    }else{
      setSelectedId(itemData[0]);
    }

    if(attr?.type=='scroll'){
      setIsScroll(true);
      console.log(Attr.successRate*100);
      setSelectedImg(image);
      name = `강화 주문서 ${attr.successRate*100}%`;
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
  const isSelected2 = () => {
    return selectedId2 && itemData && selectedId2 == itemData[0]
  }

  return (
    <div className={`myitem-container ${isSelected() ? 'item-clicked' : ''} ${trans ? 'item-trans' : 'item-opaque'} ${isSelected2() ? 'item-forUpgrade' : ''}`} onClick={trans ? null: selected}>
      <img className='myitem-img' src={image? image:null}/>
      <div className='amount'>{amount}</div>
    </div>
  )
}

export default Item;