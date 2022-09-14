import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState, useRecoilValue } from "recoil"
import { backgroundAtom } from "../recoil/background/atom"
import { accountAtom } from "../recoil/account/atom"
import { charMetadataAtom, weaponMetadataAtom } from '../recoil/tokenMetadata/atom';
import './styles/Inventory.css';
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';

const Inventory = () => {
  const account = useRecoilValue(accountAtom);
  const setBackground = useSetRecoilState(backgroundAtom);
  const setCharMetadata = useSetRecoilState(charMetadataAtom);
  const setWeaponMeatadata = useSetRecoilState(weaponMetadataAtom);
  const navigate = useNavigate();

  //탭 관련
  const [activeIndex, setActiveIndex] = useState(0);

  //캐릭터 관련
  const [char, setChar] = useState();
  const [image, setImage] = useState();
  const [image0, setImage0] = useState();
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [charName, setCharName] = useState();
  const [charItemName, setCharItemName] = useState();

  //무기 관련
  const [weapon, setWeapon] = useState();
  const [weaponImage, setWeaponImage] = useState();
  const [weaponName, setWeaponName] = useState();
  const [strength, setStrength] = useState();

  const mychar = async() =>{
    //캐릭터
    const characterMetadata = await contractAPI.fetchMyCharacter(account.address);
    console.log(characterMetadata);
    for(let i = 0; i <= characterMetadata.length; i++){
      if(characterMetadata[i]){
        setCharMetadata(characterMetadata);//캐릭터 데이터
        // console.log(characterMetadata);

        setImage(characterMetadata[i].image);//캐릭터 이미지
        // setImage0(characterMetadata[0].image);
        // setImage1(characterMetadata[1].image);
        // setImage2(characterMetadata[2].image);
        
        setCharName(characterMetadata[i].name);//캐릭터 ID
        const attr = await metadataAPI.fetchCharName(characterMetadata[i].attributes);
        setCharItemName(attr);//캐릭터 옷 정보
        console.log(attr);
        
      }
    }
    // console.log(characterMetadata)
    

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
  console.log(image)

  const reqCharChainge=()=>{
    // if(image0 === true){
      setChar(image);
    // } else if(image1 === true){
    //   setChar(image1);
    // } else if(image2 === true){
    //   setChar(image2);
    // }
  }

  const reqWeaponChainge=()=>{
    setWeapon(weaponImage);
  }

  //탭 관련 함수 및 정보
  const tabClickHandler=(index)=>{
    setActiveIndex(index)
  }

  const tabContArr=[
    {
        tabTitle:(
            <li className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}> 캐릭터 </li>
        ),
        tabCont:(
        <div className='Character_url'>
          <ul className='Character_pot'>
            <li>
            <button onClick={reqCharChainge}><img src={image} alt="myNFT" /></button>
              <span>
                <img className='Character_size' src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/no_char_img_180.png" alt="" />
              </span>
            </li>
            <li>
            <button onClick={reqCharChainge}><img src={image} alt="myNFT" /></button>
              <span>
                <img className='Character_size' src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/no_char_img_180.png" alt="" />
              </span>
            </li>
            <li>
            <button onClick={reqCharChainge}><img src={image} alt="myNFT" /></button>
              <span>
                <img className='Character_size' src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/no_char_img_180.png" alt="" />
              </span>
            </li>
          </ul>
        </div>
        )
    },
    {
        tabTitle:(
            <li className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}> 무기 </li>
        ),
        tabCont:(
        <div className='weapon_url'>
          <ul className='item_pot'>
            <li>
            <button onClick={reqWeaponChainge}><img src={weaponImage} alt="myWeapon" /></button>
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
            </li>
            <li>
            <button onClick={reqWeaponChainge}><img src={weaponImage} alt="myWeapon" /></button>
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
            </li>
            <li>
            <button onClick={reqWeaponChainge}><img src={weaponImage} alt="myWeapon" /></button>
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
            </li>
            <li>
            <button onClick={reqWeaponChainge}><img src={weaponImage} alt="myWeapon" /></button>
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
            </li>
            <li>
              {/* <img src={weapon} alt="weapon5" /> */}
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
            </li>
            <li>
              {/* <img src={weapon} alt="weapon6" /> */}
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
            </li>
            <li>
              {/* <img src={weapon} alt="weapon7" /> */}
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
            </li>
            <li>
              {/* <img src={weapon} alt="weapon8" /> */}
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
            </li>
            <li>
              {/* <img src={weapon} alt="weapon9" /> */}
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
            </li>
            <li>
              {/* <img src={weapon} alt="weapon10" /> */}
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
            </li>
            <li>
              {/* <img src={weapon} alt="weapon11" /> */}
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
            </li>
            <li>
              {/* <img src={weapon} alt="weapon12" /> */}
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
            </li>
            <li>
              {/* <img src={weapon} alt="weapon13" /> */}
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
            </li>
            <li>
              {/* <img src={weapon} alt="weapon14" /> */}
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
            </li>
            <li>
              {/* <img src={weapon} alt="weapon15" /> */}
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
            </li>
          </ul>
        </div>
        )
    },
    {
        tabTitle:(
            <li className={activeIndex===2 ? "is-active" : ""} onClick={()=>tabClickHandler(2)}> 강화서 </li>
        ),
        tabCont:(
        <div className='item_url'>
          <ul className='item_pot'>
            <li>
              <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEUya6%2Fbtrvl7A1dIE%2FOoKpzCP2B7YzAzBF77Hqq1%2Fimg.png" alt="30% 주문서" />
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
              <div>
                <p>10</p>
              </div>
            </li>
            <li>
              <img className="ganghwaseo" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdUfaso%2Fbtru9qILxnG%2FLmWkBkjQFbBW7knGjsjQK1%2Fimg.png" alt="70% 주문서"/>
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
              <div>
                <p>7</p>
              </div>
            </li>
            <li>
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
              <div>
                <p></p>
              </div>
            </li>
            <li>
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
              <div>
                <p></p>
              </div>
            </li>
            <li>
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
              <div>
                <p></p>
              </div>
            </li>
            <li>
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
              <div>
                <p></p>
              </div>
            </li>
            <li>
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
              <div>
                <p></p>
              </div>
            </li>
            <li>
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
              <div>
                <p></p>
              </div>
            </li>
            <li>
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
              <div>
                <p></p>
              </div>
            </li>
            <li>
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
              <div>
                <p></p>
              </div>
            </li>
            <li>
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
              <div>
                <p></p>
              </div>
            </li>
            <li>
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
              <div>
                <p></p>
              </div>
            </li>
            <li>
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
              <div>
                <p></p>
              </div>
            </li>
            <li>
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
              <div>
                <p></p>
              </div>
            </li>
            <li>
              <span>
                <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/char_info/item_pot_sel.png" alt="" />
              </span>
              <div>
                <p></p>
              </div>
            </li>
          </ul>
        </div>
        )
    }
  ];

  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    }
    mychar();
    setBackground({type: 'default'});
  }, []);

	return (
		<div className='inventory-container'>
      <div className='inven_wrap'>
        <ul className="tabs_is-boxed">
          {tabContArr.map((section, index)=>{
            return section.tabTitle
          })}
        </ul>
        <div>
          { tabContArr[activeIndex].tabCont }
        </div>
      </div>
      <div className='char_info'>
        <div className='information'>상세 정보</div>
        {(char || weapon) !== (image || weaponImage)
         ? (<div className='not_imgae'></div>
        ) : (
        (weapon === weaponImage) || (char !== image)?
        (
        <div className='info'>
          <div className='weapon_info'>
            <img src={weapon} alt="myWeapon" />
          </div>
          <div className='weapon_datas'>
            <div className='weapon_data'>
              이름
            </div>
            <div className='weapon_data_value'>{weaponName}</div>
            <div className='weapon_data'>
              공격력
            </div>
            <div className='weapon_data_value'>{strength}</div>
            <div className='weapon_data'>
              강화 가능 횟수
            </div>
            <div className='weapon_data_value'>5</div>
          </div>
        </div>
        ) : (
        <div className='info'>
          <div className='char_info1'>
            <img src={char} alt="mynft" />
          </div>
          <div className='char_datas'>
            <div className='char_data'>
              NFTId
            </div>
            <div className='char_data_value'>{charName}</div>
            <div className='char_data'>
              피부
            </div>
            <div className='char_data_value'>{charItemName?.skin}</div>
            <div className='char_data'>
              얼굴
            </div>
            <div className='char_data_value'>{charItemName?.face}</div>
            <div className='char_data'>
              머리
            </div>
            <div className='char_data_value'>{charItemName?.hair}</div>
            <div className='char_data'>
              옷
            </div>
            <div className='char_data_value'>{charItemName?.clothes}</div>
            <div className='char_data'>
              신발
            </div>
            <div className='char_data_value'>{charItemName?.shoes}</div>
            <div className='char_data'>
              눈장식
            </div>
            <div className='char_data_value'>{charItemName && charItemName.eyeDecoration ? charItemName.eyeDecoration: '없음'}</div>
            <div className='char_data'>
              얼굴장식
            </div>
            <div className='char_data_value'>{charItemName && charItemName.faceAccessory ? charItemName.faceAccessory: '없음'}</div>
          </div>
        </div>
        ))}
      </div>
      <div>
        <button className='Upgrade_btn'>무기 강화</button>
      </div>
		</div>
	);
}

export default Inventory;

{/* <div className='enforce'>
          <div>무기 강화</div>
          <div className='enforce_img'>
            <span>
              <img className='weapon_img' src="https://maplestory.io/api/GMS/234/item/1402206/icon" alt="sord" />
            </span>
            <span>
              <img className='item_img' src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEUya6%2Fbtrvl7A1dIE%2FOoKpzCP2B7YzAzBF77Hqq1%2Fimg.png" alt="30% 주문서" />
            </span>
            <div>현재 공격력:</div>
            <div>강화 성공시 공격력:</div>
          </div>
          <div>
            <button className ='Upgrade_btn' onClick={upgradeWeapon}>
              Upgrade
            </button>
          </div>
        </div> 
      
      // const _balance = await NFTContract.methods.balanceOf(account.address).call();
    //   for(let i = 0; i < _balance; i++) {
    //     const myNFTId = await NFTContract.methods.tokenOfOwnerByIndex(account.address, i).call();
    //     const tokenURI = await NFTContract.methods
    //     .tokenURI(myNFTId)
    //     .call();*/}