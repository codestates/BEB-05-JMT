const fetchAccount = async () => {
  await window.ethereum.enable();
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  return accounts[0].toLowerCase();
}

const accountAPI = {
  fetchAccount,
};

export default accountAPI;
