import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue, useRecoilState} from "recoil";
import { backgroundAtom } from "../recoil/background/atom";
import { accountAtom } from "../recoil/account/atom";
import { equipImgAtom, charMetadataAtom } from '../recoil/tokenMetadata/atom';
import Character from '../components/Character';
import Item from '../components/Item';
import Spinner from "../components/Spinner";
import './styles/Ranking.css';
import './styles/Inventory.css';
import accountAPI from '../api/account';
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';

const Inventory = () => {
  const [account, setAccount] = useRecoilState(accountAtom);
  const setBackground = useSetRecoilState(backgroundAtom);
  const img = useRecoilValue(equipImgAtom);
  const charMetadata = useRecoilValue(charMetadataAtom);
  const navigate = useNavigate();
  const [myCharInfo, setMyCharInfo] = useState();
  const [myWeaponInfo, setMyWeaponInfo] = useState();
  const [selectedChar, setSelectedChar] = useState();
  const [selectedItem, setSelectedItem] = useState();
  const [selectedId, setSelectedId]=useState();
  const [charName, setCharName] = useState();
  const [itemName, setItemName]=useState();
  const [itemAttr, setItemAttr]=useState();
  const [selectedImg, setSelectedImg] = useState();
  const [selected, setSelected] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    } else if (!account.charId) {
      navigate('/mint');
    } else {
      setBackground({type: 'default'});
      myChar();
      myItems();
      setLoading(false);
    }
  }, [selectedImg, selectedChar]);

  const myChar = async() => {
    const result = await contractAPI.fetchMyCharacter(account.address);
    setMyCharInfo(result);
    if(selectedChar){      
      const attr= await metadataAPI.fetchCharName(selectedChar.attributes);
      setCharName(attr);
    }else{
      const attr= await metadataAPI.fetchCharName(charMetadata.attributes);
      setCharName(attr);
    }

    if(!isClicked){
      if(selectedChar){
        const check =  selectedChar.name==`Maple #${account.charId}`;
        setSelected(check);
      }else{
        setSelected(true);
      }
    }
  }

  const myItems = async() => {
    const items = await contractAPI.fetchMyItems(account.address);
    setMyWeaponInfo(items);

    if(isClicked){
      if(selectedId){
        console.log(selectedItem);
        console.log(selectedId);
        const check =  parseInt(selectedId) == account.weaponId;
        setSelected(check);
      }else{
        setSelected(true);
      }
    }
  }
  const equip = async() => {
    console.log("장착 신청");
    if(!isClicked){
      const charId=parseInt(selectedChar?.name.replace("Maple #", ""));
      await accountAPI.equip(account.address, charId, account.weaponId);
      setAccount({...account, charId: charId, weaponId: account.weaponId});
    } else{
      const weaponId=parseInt(selectedId);
      await accountAPI.equip(account.address, account.charId, weaponId);
      setAccount({...account, charId: account.charId, weaponId: weaponId});
    }
    setSelected(true);
  }

	return (
    <>
      {loading ?
      (<Spinner/>) : (
        <div className='inventory-container'>
          <span className={`inven_char ${!isClicked ? "inven_clicked" : "inven_notclicked"}`} 
          onClick={()=> {setIsClicked(false); setSelectedImg(); setCharName(); setItemAttr(); setItemName();}}>
            캐릭터
          </span>
          <span className={`inven_weapon ${isClicked ? "inven_clicked" : "inven_notclicked"}`} 
          onClick={()=> {setIsClicked(true); setSelectedImg(); setCharName(); setItemAttr(); setItemName();}}>
            아이템
          </span>
          <div className= 'inventory_pot'>
            {!isClicked ?
              (myCharInfo ?
                [...Array(myCharInfo.length)].map((_, idx) => {
                  const myChar = myCharInfo[idx];
                  return(
                    <Character 
                      charData={myChar}
                      selectedChar={selectedChar}
                      setSelectedImg={setSelectedImg} 
                      setSelectedChar={setSelectedChar} 
                      key={idx}/>
                  )
                })
                :
                ""
              )
              :
              (myWeaponInfo ?
                [...Array(myWeaponInfo.length)].map((_, idx) => {
                  const myItem = myWeaponInfo[idx];
                  return(
                    <Item 
                      itemData={myItem} 
                      selectedId={selectedId}
                      setSelectedImg={setSelectedImg} 
                      setSelectedItem={setSelectedItem} 
                      setSelectedId={setSelectedId} 
                      setItemAttr={setItemAttr}
                      setItemName={setItemName}
                      key={idx} />
                  )
                })
                :
                ""
              )
            }        
          </div>
          <div className= 'mychar'>
            <span className='desc'>상세 정보</span>
          </div>
          <div className= 'selectedUser'>
            <div className='myname'>
              {!isClicked ? 
              (selectedChar? selectedChar.name: account.username)
              : (itemName? itemName : "")
            }</div>
            <img className='myimg' src={!isClicked ? (selectedImg? selectedImg:img) : (selectedImg? selectedImg:"")} />
            { selected ?
              <div className='equipped'>장착중</div>
              : 
              <div className='equip' onClick={equip}>장착</div>
            }
            <div>        
            <div className ="selected"> 
            {!isClicked ?  
            (charName?
              <>            
                <div className = 'selectedline'>스킨: {charName?.skin}</div>
                <div className = 'selectedline'>얼굴: {charName?.face}</div>
                <div className = 'selectedline'>헤어: {charName?.hair}</div>
                <div className = 'selectedline'>의상: {charName?.clothes}</div>
                <div className = 'selectedline'>신발: {charName?.shoes}</div>
                <div className = 'selectedline'>안경: {charName && charName.eyeDecoration ? charName.eyeDecoration: '없음'}</div>
                <div className = 'selectedline'>악세서리: {charName && charName.faceAccessory ? charName.faceAccessory: '없음'}</div>
              </>
              : ""
            ):
            (itemAttr?
            <>            
              <div className = 'selectedline'>타입: {itemAttr?.type}</div>
              {itemAttr?.type=='scroll' ? 
                <div className = 'selectedline'>강화 성공 확률: {itemAttr?.successRate}</div>
                :
                <div className = 'selectedline'>레벨: {itemAttr?.strength}</div>
              }
            </>
            : ""
            )
            }
            </div>
            </div>
          </div>
        </div>
      )}
    </>
	);
}

export default Inventory;
