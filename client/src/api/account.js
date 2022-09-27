import axios from "axios";
import { SERVER_ENDPOINT } from '../global_variables';

const fetchAccount = async () => {
  await window.ethereum.enable();
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  return accounts[0].toLowerCase();
}

const fetchUsername = async (address) => {
  const check = await axios.get(`${SERVER_ENDPOINT}/user/check/${address}`);
  return check.data;
}

const signUp = async (address, username) => {
  await axios.post(`${SERVER_ENDPOINT}/user/signup`, {
      "username" : username,
      "address" : address        
  });
}

const equip = async (address, charId, weaponId) => {
  await axios.post(`${SERVER_ENDPOINT}/user/equip`, {   
      "address" : address,
      "charId": charId,
      "weaponId": weaponId
  });
}
const userinfo = async () => {
  const result = await axios.get(`${SERVER_ENDPOINT}/user/userinfo`);
  return result.data.data;
}

const accountAPI = {
  fetchAccount,
  fetchUsername,
  signUp,
  equip,
  userinfo
};

export default accountAPI;
