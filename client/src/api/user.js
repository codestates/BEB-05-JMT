import axios from "axios";
const Web3 = require('web3');
const {
    USER_CONTRACT_ADDR,
    USER_CONTRACT_ABI,
} = require('../global_variables');

const fetchUserContract = async () => {
    const web3 = new Web3(window.ethereum);
    const userContract = await new web3.eth.Contract(
        USER_CONTRACT_ABI,
        USER_CONTRACT_ADDR,
      );
      return userContract;
}

const fetchUser = async (address) => {
  const check = await axios.get(`http://localhost:4000/user/check/${address}`);
  return check.data;
}

const signUp = async (address, charId, weaponId) => {
    const userContract = await fetchUserContract();
    const user = await userContract.methods.signUp(charId, weaponId).send(
        {
            from: address,
            gas: 1500000,
            gasPrice: '3000000'
        }
    );
    const result = user.events.UserCreated.returnValues;
    return result;  
}

const equipChar = async (address, charId) => {
    const userContract = await fetchUserContract();
    const userData = await fetchUser(address);
    const userId = parseInt(userData.id)+1;
    console.log(userId);
    const user = await userContract.methods.updateChar(charId, userId).send(
        {
            from: address,
            gas: 1500000,
            gasPrice: '3000000'
        }
    );
    const result = user.events.UserUpdated.returnValues;
    return result;  
}

const equipWeapon = async (address, weaponId) => {
    const userContract = await fetchUserContract();
    const userData = await fetchUser(address);
    const userId = parseInt(userData.id)+1;
    const user = await userContract.methods.updateWeapon(weaponId, userId).send(
        {
            from: address,
            gas: 1500000,
            gasPrice: '3000000'
        }
    );
    const result = user.events.UserUpdated.returnValues;
    return result;  
}

const fetchUserList = async (address, weaponId) => {
    const userContract = await fetchUserContract();
    const user = await userContract.methods.fetchUsers().call();
    console.log(user);
    return user;
}

const matchUser = async (address) => {
    const userContract = await fetchUserContract();
    const user = await userContract.methods.matchUser(address).call();
    console.log(user);
    return user;
}

const userAPI = {
  fetchUserContract,
  fetchUser,
  signUp,
  equipChar,
  equipWeapon,
  fetchUserList,
  matchUser
};

export default userAPI;
