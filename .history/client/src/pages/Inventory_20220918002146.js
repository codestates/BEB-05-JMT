import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue, useRecoilState} from "recoil";
import { backgroundAtom } from "../recoil/background/atom";
import { accountAtom } from "../recoil/account/atom";
import { equipImgAtom } from '../recoil/tokenMetadata/atom';
import CharNFTs from '../components/CharNFTs';
import ItemNFTs from '../components/ItemNFTs';
import './styles/Ranking.css';
import './styles/Inventory.css';
import accountAPI from '../api/account';
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';

const Inventory = () => {
  const [account, setAccount] = useRecoilState(accountAtom);
  const setBackground = useSetRecoilState(backgroundAtom);
  const navigate = useNavigate();
  const [myCharInfo, setMyCharInfo] = useState();
  const [selectedImg, setSelectedImg] = useState();
  const [selectedChar, setSelectedChar] = useState();
  const img = useRecoilValue(equipImgAtom);
  const [charName, setCharName] = useState();
  const [selected, setSelected] = useState(true);

  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    } else if(!account.charId){
        navigate('/mint');
    } else {
      setBackground({type: 'default'});
      mychar();
    }
  }, [selectedImg]);

  const mychar = async() => {
    const result = await contractAPI.fetchMyCharacter(account.address, account.charId);
    // console.log(result);
    setMyCharInfo(result);

    if(selectedChar){      
      const attr= await metadataAPI.fetchCharName(selectedChar.attributes);
      setCharName(attr);
    }

    if(selectedChar){
      const check =  selectedChar.name==`Maple #${account.charId}`;
      setSelected(check);
    }else{
      setSelected(true);
    }
  }

  const equip = async() => {
    console.log("장착 신청");
    const charId=parseInt(selectedChar?.name.replace("Maple #", ""));
    await accountAPI.equip(account.address, charId, account.weaponId);
    setAccount({...account, charId:charId, weaponId: account.weaponId});
    setSelected(true);
  }

	return (
		<div className='inventory-container'>
      <div className= 'inven_wrap'>
        <span className='column-rank'>캐릭터</span>
        <span className='column-name'>아이템</span>
      </div>
      <div className= 'Character_pot'>
        {myCharInfo ?
          [...Array(myCharInfo.length)].map((_, idx) => {
            const myChar = myCharInfo[idx];
            return(
              <CharNFTs charData= {myChar} setSelectedImg={setSelectedImg} setSelectedChar={setSelectedChar} key={idx}/>
            )
          })
          :
          ""
        }        
      </div>
      <div className= 'mychar'>
        <span className='desc'>상세 정보</span>
      </div>
      <div className= 'selectedUser'>
        <div className='myname'>{selectedChar? selectedChar.name: account.username}</div>
        <img className='myimg' src={selectedImg? selectedImg:img} />
        { selected ?
          <div className='equipped'>장착중</div>
          : 
          <div className='equip' onClick={equip}>장착</div>
        }
        <div>
        {charName?
          <div className ="selected"> 

            <div className = 'selectedline'>스킨: {charName?.skin}</div>
            <div className = 'selectedline'>얼굴: {charName?.face}</div>
            <div className = 'selectedline'>헤어: {charName?.hair}</div>
            <div className = 'selectedline'>의상: {charName?.clothes}</div>
            <div className = 'selectedline'>신발: {charName?.shoes}</div>
            <div className = 'selectedline'>안경: {charName && charName.eyeDecoration ? charName.eyeDecoration: '없음'}</div>
            <div className = 'selectedline'>악세서리: {charName && charName.faceAccessory ? charName.faceAccessory: '없음'}</div>
          </div>
          : ""
        }
        </div>
      </div>
		</div>
	);
}

export default Inventory;
