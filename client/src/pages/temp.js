import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue } from "recoil";
import { backgroundAtom } from "../recoil/background/atom";
import { accountAtom } from "../recoil/account/atom";
import { selectedCharAtom } from "../recoil/temp/atom";
import CharNFTs from '../components/CharNFTs';
import ItemNFTs from '../components/ItemNFTs';
import './styles/Inventory.css';
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';
import axios from 'axios';

const Inventory = () => {
  const account = useRecoilValue(accountAtom);
  const setBackground = useSetRecoilState(backgroundAtom);
  const navigate = useNavigate();
  const selectedChar = useRecoilValue(selectedCharAtom);

  //탭 관련
  const [activeIndex, setActiveIndex] = useState(0);

  //캐릭터 관련
  const [char, setChar] = useState();
  const [image, setImage] = useState();
  const [myCharInfo, setMyCharInfo] = useState();
  const [charName, setCharName] = useState();
  const [charItemName, setCharItemName] = useState();

  //무기 관련
  const [weapon, setWeapon] = useState();
  const [weaponImage, setWeaponImage] = useState();
  const [weaponInfo, setWeaponInfo] = useState();
  const [weaponName, setWeaponName] = useState();
  const [strength, setStrength] = useState();

  useEffect(() => {
    if (!account.address) {
      navigate('/login');
    }
    setBackground({type: 'default'});
    mychar();
  }, []);

  const mychar = async() =>{
    const result = await contractAPI.fetchMyCharacter(account.address, account.charId);
    console.log(result);
    // const orginalArr = result.data.data;
    // console.log(orginalArr)
    // const comparableArr = orginalArr.map(async (x)=> [
    //     await contractAPI.fetchMyCharacter(x.address),
    //     x
    // ])
    setMyCharInfo(result);
    console.log(myCharInfo)
  }

  //탭 관련 함수 및 정보
  const tabClickHandler=(index)=>{
    setActiveIndex(index)
  }

  // const tabContArr=[
  //   {
  //       tabTitle:(
  //           <li className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}> 캐릭터 </li>
  //       ),
  //       tabCont:(
  //       <div className='Character_url'>
  //         <ul className='Character_pot'>
  //           {myCharInfo ?
  //             [...Array(myCharInfo.length)].map((_, idx) => {
  //               const myChar = myCharInfo[idx];
  //               console.log(myChar);
  //               return(
  //                 <CharNFTs charData= {myChar} key={idx}/>
  //               )
  //             })
  //             :
  //             console.log("check")
  //           }
  //         </ul>
  //       </div>
  //       )
  //   },
  //   {
  //       tabTitle:(
  //           <li className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}> 무기 </li>
  //       ),
  //       tabCont:(
  //       <div className='weapon_url'>
  //         <ul className='item_pot'>
  //         {weaponInfo ?
  //             [...Array(weaponInfo.length)].map((_, idx) => {
  //               // const charNFTs = charInfo[idx];
  //               return(
  //                 <ItemNFTs key={idx}/>
  //               )
  //             })
  //             :
  //             ""
  //           }
  //         </ul>
  //       </div>
  //       )
  //   },
  //   {
  //       tabTitle:(
  //           <li className={activeIndex===2 ? "is-active" : ""} onClick={()=>tabClickHandler(2)}> 강화서 </li>
  //       ),
  //       tabCont:(
  //       <div className='item_url'>
  //         <ul className='item_pot'>
  //           <li>
  //             <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEUya6%2Fbtrvl7A1dIE%2FOoKpzCP2B7YzAzBF77Hqq1%2Fimg.png" alt="30% 주문서" />
  //             <div>
  //               <p>10</p>
  //             </div>
  //           </li>
  //           <li>
  //             <img className="ganghwaseo" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdUfaso%2Fbtru9qILxnG%2FLmWkBkjQFbBW7knGjsjQK1%2Fimg.png" alt="70% 주문서"/>
  //             <div>
  //               <p>7</p>
  //             </div>
  //           </li>
  //         </ul>
  //       </div>
  //       )
  //   }
  // ];

	return (
		<div className='inventory-container'>
      <div className='inven_wrap'>
        {/* <ul className="tabs_is-boxed">
          {tabContArr.map((section, index)=>{return section.tabTitle})}
        </ul>
        <div>test</div>
        <div>{ tabContArr[activeIndex].tabCont }</div> */}
      </div>
      <div className='char_info'>
        <div className='information'>상세 정보</div>
        {/* {(char || weapon) !== (image || weaponImage)
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
        ))} */}
      </div>
      <div>
        <button className='Upgrade_btn'>무기 강화</button>
      </div>
		</div>
	);
}

export default Inventory;