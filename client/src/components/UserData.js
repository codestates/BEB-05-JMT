
import './styles/UserData.css';
import { useState, useEffect } from "react";
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';

function UserData({userData, rank}) {
    const [img, setImg] = useState();
    const [str, setStr] = useState();
    const [isChar, setIsChar] = useState();
    const [isWeapon, setIsWeapon] = useState();

    useEffect(() => {
        metadata();
    }, []);

    const metadata = async() => {
        const char = await contractAPI.fetchCharacter(userData.charId);
        const weapon = await contractAPI.fetchWeapon(userData.weaponId);

        const hasChar = await contractAPI.isCharOwner(userData.address, userData.charId);
        const hasWeapon = await contractAPI.isWeaponOwner(userData.address, userData.weaponId);
        console.log(hasChar);
        console.log(hasWeapon);
        setIsChar(hasChar);
        setIsWeapon(hasWeapon);

        if(hasChar&&hasWeapon){
            const str = await metadataAPI.fetchStrength(weapon.attributes);
            setStr(str);
            const standImage = await metadataAPI.fetchStandImage(char.attributes, weapon.attributes, '0');
            setImg(standImage);
            console.log("check");
        }
    }

    return (
        (isChar&&isWeapon ? 
            <div className='userdata-container'>
                <div className='userdata-rank'>{rank}위</div>
                <div className='userdata-name'>{userData.username}</div>
                <img className='userdata-char' src={img} />
                <div className='userdata-str'>Lv.{str}</div>
            </div>
            :
            null
        )            
    );
}
export default UserData;