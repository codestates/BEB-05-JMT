import React, { useState, useEffect } from 'react';
import { useRecoilValue , useSetRecoilState } from "recoil"
import { accountAtom } from "../recoil/account/atom"
import { weaponMetadataAtom } from '../recoil/tokenMetadata/atom';
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';

function ItemNFTs({}) {
  //무기 관련
  const account = useRecoilValue(accountAtom);
  const setWeaponMeatadata = useSetRecoilState(weaponMetadataAtom);
  const [weapon, setWeapon] = useState();
  const [weaponImage, setWeaponImage] = useState();
  const [weaponName, setWeaponName] = useState();
  const [strength, setStrength] = useState();
  useEffect(() => {
    myitem();
  }, []);
 
  const myitem = async() =>{

    // 무기 erc1155
    const weaponMetadata = await contractAPI.fetchWeapon(account.weaponId);
    setWeaponMeatadata(weaponMetadata);//무기 데이터
    // console.log(weaponMetadata);
    setWeaponImage(weaponMetadata.image);//무기 이미지
    // console.log(weaponMetadata.image);
    const isWeaponName = await metadataAPI.fetchWeaponName(weaponMetadata.attributes);
    setWeaponName(isWeaponName);//무기 종류 이름
    // console.log(isWeaponName);
    const attack = await metadataAPI.fetchStrength(weaponMetadata.attributes);
    setStrength(attack);//공격력
    // console.log(attack);
  }

  const reqWeaponChainge=()=>{
    setWeapon(weaponImage);
  }

  return (
    (weaponImage ?
      <li>
        <button onClick={reqWeaponChainge}><img src={weaponImage} alt="myWeapon" /></button>
      </li>
      :
      null
    )
  )
}

export default ItemNFTs;