
import './styles/UserData.css';
import { useState, useEffect } from "react";
import contractAPI from '../api/contract';
import metadataAPI from '../api/metadata';

function UserData({userData}) {
    const [img, setImg] = useState();
    const [str, setStr] = useState();

    useEffect(() => {
        metadata();
    }, []);

    const metadata = async() => {
        const char = await contractAPI.fetchCharacter(userData.charId);
        const weapon = await contractAPI.fetchWeapon(userData.weaponId);
        const str = await metadataAPI.fetchStrength(weapon.attributes);
        setStr(str);
        const standImage = await metadataAPI.fetchStandImage(char.attributes, weapon.attributes, '0');
        setImg(standImage);
        console.log("check");
    }

    return (
        <div className='userdata-container'>
            <img src={img} height={60}/>
            <div>{userData.username}</div>
            <div>{str}</div>
        </div>
    );

}
export default UserData;