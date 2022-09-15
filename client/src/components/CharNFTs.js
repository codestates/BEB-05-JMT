import React, { useState, useEffect } from 'react';
import { useRecoilValue , useSetRecoilState } from "recoil"
import { accountAtom } from "../recoil/account/atom"
import { charMetadataAtom } from '../recoil/tokenMetadata/atom';
import Inventory from '../pages/Inventory';
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';

function CharNFTs() {
   //캐릭터 관련
  const account = useRecoilValue(accountAtom);
  const setCharMetadata = useSetRecoilState(charMetadataAtom);
  const [image, setImage] = useState();
  const [char, setChar] = useState();
  const [charName, setCharName] = useState();
  const [charItemName, setCharItemName] = useState();

  useEffect(() => {
    mycharx();
  }, []);

  const mycharx = async() =>{
    //캐릭터
    const charx = await contractAPI.fetchMyCharacter(account.address, account.charId);
    setCharMetadata(charx);//캐릭터 데이터
    // console.log(charx);
    for(let i = 0; i <= charx.length; i++){
      if(charx[i]){
        const arrImage = charx[i].image;
        const nftImage = [...Array(arrImage)].map((_,i) => {
          return arrImage;
        })
        setImage(nftImage);//캐릭터 이미지
        console.log(nftImage);
        const attr = await metadataAPI.fetchCharName(charx[i].attributes);
        setCharItemName(attr);//캐릭터 옷 정보
        setCharName(charx[i].name);//캐릭터 ID
      }
    }
  }

  const reqCharChainge=()=>{
    setChar(image);
  }

  return (
    (image ?
        <li>
            <button onClick={reqCharChainge} ><img className='Character_size' src={image} alt="myNft"/></button>
        </li>
      :
      null
    )
  )
}

export default CharNFTs;