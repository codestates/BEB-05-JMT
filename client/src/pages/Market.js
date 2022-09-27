import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { backgroundAtom } from "../recoil/background/atom";
import { accountAtom } from "../recoil/account/atom";
import { modalAtom } from "../recoil/modal/atom";
import { strengthAtom, equipImgAtom, charMetadataAtom, weaponMetadataAtom } from '../recoil/tokenMetadata/atom';
import Character from '../components/Character';
import Item from '../components/Item';
import CharOnSale from '../components/CharOnSale';
import WeaponOnSale from '../components/WeaponOnSale';
import Spinner from "../components/Spinner";
import './styles/Ranking.css';
import './styles/Inventory.css';
import accountAPI from '../api/account';
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';
import UserData from '../components/UserData';
import "./styles/Market.css";
import marketAPI from "../api/market";

const Market = () => {
  const [account, setAccount] = useRecoilState(accountAtom);
  const setBackground = useSetRecoilState(backgroundAtom);
  const navigate = useNavigate();
  // const [matketplaceAtom, setMatketplaceAtom] = useRecoilState(matketplaceAtom); 
  const [isSell, setIsSell] = useState(false);
  const [price, setPrice] = useState();

  const [modal, setModal] = useRecoilState(modalAtom);
  const charMetadata = useRecoilValue(charMetadataAtom);
  const weaponMetadata = useRecoilValue(weaponMetadataAtom);

  const [charInfo, setCharInfo] = useState(); //마켓 캐릭터들
  const [weaponInfo, setWeaponInfo] = useState(); //마켓 무기
  const [charIds, setCharIds] = useState(); //마켓 캐릭터들
  const [weaponIds, setWeaponIds] = useState(); //마켓 무기
  const [charOnSale, setCharOnSale] = useState();//캐릭터 마켓 정보
  const [weaponOnSale, setWeaponOnSale] = useState();//무기 마켓 정보
  const [owner, setOwner] = useState();//소유자 이름


  const [myCharInfo, setMyCharInfo] = useState(); //내 캐릭터들
  const [myItemInfo, setMyItemInfo] = useState(); //내 무기 및 아이템들
  const [selectedChar, setSelectedChar] = useState();//선택된 캐릭터 메타데이터
  const [selectedItem, setSelectedItem] = useState();//선택된 아이템 메타데이터
  const [selectedId, setSelectedId]=useState();//선택된 아이템 아이디
  const [selectedAmount, setSelectedAmount]=useState();//선택된 아이템 갯수
  const [charName, setCharName] = useState();//선택된 캐릭터 메타데이터 이름
  const [itemName, setItemName]=useState();//선택된 아이템 이름
  const [itemAttr, setItemAttr]=useState();//선택된 아이템 attributes
  const [selectedImg, setSelectedImg] = useState();//선택된 이미지
  const [equipped, setEquipped] = useState(true);//선택된 캐릭터나 무기를 장착중인가
  const [isClicked, setIsClicked] = useState(false);//아이템 버튼이 선택되었는가? 아이템 상태 : 캐릭터 상태

  const [isScroll, setIsScroll] = useState(false);//선택된 아이템이 스크롤인가
  const [selectedId2, setSelectedId2] = useState();//강화 추가 선택 아이템 아이디
  const [onUpgrade, setOnUpgrade] = useState(false);//강화 진행 여부

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    } else if(!account.charId){
        navigate('/mint');
    } else {
    setBackground({ type: "market" });
    myChar();
    myItems();
    charMarket();
    weaponMarket();
    setLoading(false);
    }
  }, [selectedImg, selectedChar]);

  
  const buyNFT = async() => {
    if(isClicked){
        const buy = await marketAPI.buyWeaponOnSale(account.address, weaponOnSale.itemId, weaponOnSale.price);
        console.log(buy);
    } else{
        const buy = await marketAPI.buyCharOnSale(account.address, charOnSale.itemId, charOnSale.price);
        console.log(buy); 
    }
    init();   
  }

  const sellNFT = async() => {
    if (!price) {
      return;
    }
    if(isClicked){
      const sell = await marketAPI.addWeaponOnSale(selectedId, account.address, price);
    } else{
      const sell = await marketAPI.addCharOnSale(selectedId, account.address, price);
    }
    init();
  };

  const cancelSale = async() => {
    if(isClicked){
      const cancel = await marketAPI.removeWeaponOnSale(account.address, weaponOnSale.itemId);
      console.log(cancel);

    }else{
      const cancel = await marketAPI.removeCharOnSale(account.address, charOnSale.itemId);
    }
    init();
  };

  const charMarket = async() => {
    const result = await marketAPI.fetchMarketChar(account.address);
    setCharInfo(result);
    setCharIds(Object.keys(result));
  }

  const weaponMarket = async() => {
    const items = await marketAPI.fetchMarketWeapon(account.address);
    setWeaponInfo(items);
    setWeaponIds(Object.keys(items));
  }

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
  }
  const myItems = async() => {
    const items = await contractAPI.fetchMyItems(account.address);
    const weapons = items.filter(item => item[0]<400);

    setMyItemInfo(weapons);
    if(!itemAttr){
      const attr= await contractAPI.fetchAttributes(weaponMetadata.attributes);
      setItemAttr(attr);
    }

    if(isClicked){
      if(selectedId){
        console.log(selectedItem);
        console.log(selectedId);
        const check = parseInt(selectedId) == account.weaponId;
        setEquipped(check);
      }else{
        setEquipped(true);
      }
    }
  }

  /** 탭 변경시 선택 정보 초기화 */
  const init = async() => {
    setCharName();
    setItemAttr();
    setSelectedImg();
    setSelectedChar();
    setItemName(); 
    setSelectedId();
  }

  const handleChangePrice = (value) => {
    setPrice(value);
}

  return (
    <div>
      {loading ?
      (<Spinner/>) : (
        <>       
          <span className={`market_button market_buy ${!isSell ? "market_clicked" : "market_notclicked"}`} 
          onClick={()=>{init(); 
            setIsSell(false);}}>
            구매
          </span>
          <span className={`market_button market_sell ${isSell ? "inven_clicked" : "inven_notclicked"}`} 
          onClick={()=>{init(); 
            setIsSell(true);}}>
            판매
          </span>
          <div className='inventory-container'>
            <span className={`inven_char ${isSell? (!isClicked ? "inven_clicked" : "inven_notclicked"):  (!isClicked ? "market_clicked" : "market_notclicked")}`} 
            onClick={()=>{init(); 
              setIsClicked(false);}}>
              캐릭터
            </span>
            <span className={`inven_weapon ${isSell? (isClicked ? "inven_clicked" : "inven_notclicked"): (isClicked ? "market_clicked" : "market_notclicked")}`} 
            onClick={()=>{init(); 
              setIsClicked(true);}}>
              무기
            </span>
            {isSell?
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
                          setSelectedId={setSelectedId} 
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
                          setSelectedAmount={setSelectedAmount}
                          itemData={myItem} 
                          onUpgrade= {onUpgrade}
                          selectedId={selectedId}
                          selectedId2={selectedId2}
                          isScroll={isScroll}
                          setSelectedImg={setSelectedImg} 
                          setSelectedItem={setSelectedItem} 
                          setSelectedId={setSelectedId} 
                          setSelectedId2={setSelectedId2} 
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
            :
              <div className= 'market_pot'>
              {!isClicked ?
                (charInfo ?
                  [...Array(charIds?.length)].map((_, idx) => {
                    const char = charInfo[charIds[idx]];
                    return(
                      <CharOnSale 
                        charId={charIds[idx]}
                        charData={char}
                        selectedChar={selectedChar}
                        setSelectedImg={setSelectedImg} 
                        setSelectedChar={setSelectedChar} 
                        setCharOnSale={setCharOnSale}
                        setOwner={setOwner}
                        key={idx}/>
                    )
                  })
                  :
                  ""
                )
                :
                (weaponInfo ?
                  [...Array(weaponIds?.length)].map((_, idx) => {
                    const myItem = weaponInfo[weaponIds[idx]];
                    return(
                      <WeaponOnSale 
                        itemData={myItem} 
                        selectedId={selectedId}
                        setSelectedImg={setSelectedImg} 
                        setSelectedItem={setSelectedItem} 
                        setSelectedId={setSelectedId}
                        setItemAttr={setItemAttr}
                        setItemName={setItemName}
                        setWeaponOnSale={setWeaponOnSale}
                        setOwner={setOwner}
                        key={idx} />
                    )
                  })
                  :
                  ""
                )
              }        
            </div>
            }            
            <div className={isSell? 'myinfo': 'market_info'}>
              상세 정보
            </div>
            <div className={`selectedUser ${isSell? '': 'market_selected'}`}>
              {
                selectedImg?
                (<>
                  <div className='myname'>
                    {!isClicked ? 
                    (selectedChar? selectedChar.name: account.username)
                    : (itemName? itemName : account.username)}
                  </div>
                  <img className='myimg' src={selectedImg} />
                  {(isClicked ? equipped&&selectedAmount==1 : equipped) ?
                    <div className='equipped'>장착중</div>
                    : 
                    (isSell?
                      <>
                      <div className='sell' onClick={sellNFT}>판매</div>
                      <input
                        type="number"
                        className="market-input"
                        placeholder=""
                        onChange={(e) => handleChangePrice(e.target.value)}
                      />                      
                      </>
                    :
                    (charOnSale?.seller==account.address||weaponOnSale?.seller==account.address?
                      <div className='sell' onClick={cancelSale}>판매 취소</div>
                      :
                      <div className='sell' onClick={buyNFT}>구매</div>
                    )
                    )
                  }
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
                      <div className = 'selectedline'>레벨: {itemAttr?.strength}</div>
                    </>
                    : ""
                    )
                    }
                    {
                      isSell?
                      null
                      :
                      <>
                      <div className = 'selectedowner'>
                        <span>소유자: </span>
                        <span>{owner}</span>
                      </div>
                      <div className = 'selectedprice'>
                        <span>가격:</span> 
                        <span>{isClicked? weaponOnSale.price:(charOnSale && charOnSale?.price ? charOnSale?.price : '미정')} JMT</span>
                      </div>
                      </>
                    }
                  </div>
                </>
                )
                :
                <>
                </>
              }
            </div>
          </div>
        </>
      )}
        <Link to="/lootbox" className="lootbox">
          뽑기
        </Link>
    </div>
  );
};

export default Market;
