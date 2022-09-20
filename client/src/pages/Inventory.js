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
  const [myCharInfo, setMyCharInfo] = useState(); //내 캐릭터들
  const [myItemInfo, setMyItemInfo] = useState(); //내 무기 및 아이템들
  const [selectedChar, setSelectedChar] = useState();//선택된 캐릭터 메타데이터
  const [selectedItem, setSelectedItem] = useState();//선택된 아이템 메타데이터
  const [selectedId, setSelectedId]=useState();//선택된 아이템 아이디
  const [charName, setCharName] = useState();//선택된 캐릭터 메타데이터 이름
  const [itemName, setItemName]=useState();//선택된 아이템 이름
  const [itemAttr, setItemAttr]=useState();//선택된 아이템 attributes
  const [selectedImg, setSelectedImg] = useState();//선택된 이미지
  const [equipped, setEquipped] = useState(true);//선택된 캐릭터나 무기를 장착중인가
  const [isScroll, setIsScroll] = useState(false);//선택된 아이템이 스크롤인가
  const [isClicked, setIsClicked] = useState(false);//아이템 버튼이 선택되었는가? 아이템 상태 : 캐릭터 상태
  const [onUpgrade, setOnUpgrade] = useState(false);//강화 진행 여부
  const [selectedId2, setSelectedId2] = useState();//강화 추가 아이템 아이디
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
        setEquipped(check);
      }else{
        setEquipped(true);
      }
    }
    console.log(isScroll);
  }

  const myItems = async() => {
    const items = await contractAPI.fetchMyItems(account.address);
    setMyItemInfo(items);

    if(isClicked){
      if(selectedId){
        console.log(selectedItem);
        console.log(selectedId);
        const check =  parseInt(selectedId) == account.weaponId;
        setEquipped(check);
      }else{
        setEquipped(true);
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
    setEquipped(true);
  }

  const upgrade = async() => {
    setOnUpgrade(true); 
    if(isScroll){
      //스크롤 투명화, onclick 제거


    }else{
      //무기들 투명화, onclick 제거
      console.log(account.address);
      console.log(selectedId);
      await contractAPI.upgradeWeapon(account.address, 401, selectedId);
    }
  }

  /** 탭 변경시 선택 정보 초기화 */
  const init = () => {
    setSelectedImg();
    setCharName(); 
    setSelectedChar();
    setItemAttr(); 
    setItemName(); 
    setSelectedId(); 
    setOnUpgrade(false); 
  }

	return (
    <>
      {loading ?
      (<Spinner/>) : (
        <div className='inventory-container'>
          <span className={`inven_char ${!isClicked ? "inven_clicked" : "inven_notclicked"}`} 
          onClick={()=>{init(); 
            setIsClicked(false);}}>
            캐릭터
          </span>
          <span className={`inven_weapon ${isClicked ? "inven_clicked" : "inven_notclicked"}`} 
          onClick={()=>{init(); 
            setIsClicked(true);}}>
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
              (myItemInfo ?
                [...Array(myItemInfo.length)].map((_, idx) => {
                  const myItem = myItemInfo[idx];
                  return(
                    <Item 
                      itemData={myItem} 
                      selectedId={selectedId}
                      setSelectedImg={setSelectedImg} 
                      setSelectedItem={setSelectedItem} 
                      setSelectedId={setSelectedId} 
                      setItemAttr={setItemAttr}
                      setItemName={setItemName}
                      setIsScroll={setIsScroll}
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
            <img className='myimg' src={selectedImg? selectedImg:img} />
            { equipped ?
              <div className='equipped'>장착중</div>
              : 
              (!isScroll?          
                <div className='equip' onClick={equip}>장착</div>
                :
                <div className='use' onClick={upgrade}>사용</div>
              )
            }
            {isClicked&&!isScroll ?               
              <div className='upgrade' onClick={upgrade}>강화</div>
              :
              null
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
