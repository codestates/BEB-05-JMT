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

const accountAPI = {
  fetchAccount,
  fetchUsername
};

export default accountAPI;
