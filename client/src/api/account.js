import axios from "axios";

const fetchAccount = async () => {
  await window.ethereum.enable();
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  return accounts[0].toLowerCase();
}

const fetchUsername = async (address) => {
  const check = await axios.get(`http://localhost:4000/user/check/${address}`);
  return check.data;
}

const signUp = async (address, username) => {
  await axios.post('http://localhost:4000/user/signup', {                
      "username" : username,
      "address" : address        
  });
}

const equip = async (address, charId, weaponId) => {
  await axios.post('http://localhost:4000/user/equip', {   
      "address" : address,
      "charId": charId,
      "weaponId": weaponId
  });
}

const accountAPI = {
  fetchAccount,
  fetchUsername,
  signUp,
  equip
};

export default accountAPI;
