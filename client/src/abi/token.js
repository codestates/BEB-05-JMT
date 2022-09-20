const TOKEN = {
	"contractName": "JMToken",
	"abi": [
	  {
		"inputs": [
		  {
			"internalType": "address payable",
			"name": "treasury",
			"type": "address"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": true,
			"internalType": "address",
			"name": "owner",
			"type": "address"
		  },
		  {
			"indexed": true,
			"internalType": "address",
			"name": "spender",
			"type": "address"
		  },
		  {
			"indexed": false,
			"internalType": "uint256",
			"name": "value",
			"type": "uint256"
		  }
		],
		"name": "Approval",
		"type": "event"
	  },
	  {
		"anonymous": false,
		"inputs": [],
		"name": "FundsMoved",
		"type": "event"
	  },
	  {
		"anonymous": false,
		"inputs": [],
		"name": "OwnerAction",
		"type": "event"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": true,
			"internalType": "address",
			"name": "_account",
			"type": "address"
		  },
		  {
			"indexed": false,
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  }
		],
		"name": "TokensBought",
		"type": "event"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": true,
			"internalType": "address",
			"name": "from",
			"type": "address"
		  },
		  {
			"indexed": true,
			"internalType": "address",
			"name": "to",
			"type": "address"
		  },
		  {
			"indexed": false,
			"internalType": "uint256",
			"name": "value",
			"type": "uint256"
		  }
		],
		"name": "Transfer",
		"type": "event"
	  },
	  {
		"inputs": [],
		"name": "MAX_SUPPLY",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "MapleItems",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "MapleNFT",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "Router",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "TAX",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "owner",
			"type": "address"
		  },
		  {
			"internalType": "address",
			"name": "spender",
			"type": "address"
		  }
		],
		"name": "allowance",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "spender",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  }
		],
		"name": "approve",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "account",
			"type": "address"
		  }
		],
		"name": "balanceOf",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"name": "balancesToClaim",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"name": "contributionsOf",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "decimals",
		"outputs": [
		  {
			"internalType": "uint8",
			"name": "",
			"type": "uint8"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "spender",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "subtractedValue",
			"type": "uint256"
		  }
		],
		"name": "decreaseAllowance",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "fundsAlreadyMoved",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "spender",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "addedValue",
			"type": "uint256"
		  }
		],
		"name": "increaseAllowance",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "isContractPaused",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "isTaxOn",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"name": "isWhitelisted",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "name",
		"outputs": [
		  {
			"internalType": "string",
			"name": "",
			"type": "string"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "owner",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "symbol",
		"outputs": [
		  {
			"internalType": "string",
			"name": "",
			"type": "string"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "totalContributed",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "to",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  }
		],
		"name": "transfer",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "from",
			"type": "address"
		  },
		  {
			"internalType": "address",
			"name": "to",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  }
		],
		"name": "transferFrom",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "treasuryWallet",
		"outputs": [
		  {
			"internalType": "address payable",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "winRewardAddr",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "_router",
			"type": "address"
		  }
		],
		"name": "setRouterAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "_mapleNft",
			"type": "address"
		  }
		],
		"name": "setMapleNFTAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "_mapleItems",
			"type": "address"
		  }
		],
		"name": "setMapleItemsAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "contribute",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function",
		"payable": true
	  },
	  {
		"inputs": [],
		"name": "claimTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "togglePauseContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "toggleTax",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "account",
			"type": "address"
		  }
		],
		"name": "addToWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "account",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  }
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "account",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  }
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "account",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  }
		],
		"name": "marketBurn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "_owner",
			"type": "address"
		  },
		  {
			"internalType": "address",
			"name": "_spender",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "_amount",
			"type": "uint256"
		  }
		],
		"name": "increaseContractAllowance",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "contract LiquidityPool",
			"name": "liquidityPool",
			"type": "address"
		  }
		],
		"name": "sendLiquidityToLPContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "_addr",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "_amount",
			"type": "uint256"
		  }
		],
		"name": "randRewardToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  }
	],
	"metadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"treasury\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"FundsMoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"OwnerAction\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"TokensBought\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"MAX_SUPPLY\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MapleItems\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MapleNFT\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"Router\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"TAX\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"addToWhitelist\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balancesToClaim\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"claimTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"contribute\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"contributionsOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"fundsAlreadyMoved\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"increaseContractAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isContractPaused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isTaxOn\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"isWhitelisted\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"marketBurn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_addr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"randRewardToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract LiquidityPool\",\"name\":\"liquidityPool\",\"type\":\"address\"}],\"name\":\"sendLiquidityToLPContract\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_mapleItems\",\"type\":\"address\"}],\"name\":\"setMapleItemsAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_mapleNft\",\"type\":\"address\"}],\"name\":\"setMapleNFTAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_router\",\"type\":\"address\"}],\"name\":\"setRouterAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"togglePauseContract\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"toggleTax\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalContributed\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"treasuryWallet\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"winRewardAddr\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/JMToken.sol\":\"JMToken\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x24b04b8aacaaf1a4a0719117b29c9c3647b1f479c5ac2a60f5ff1bb6d839c238\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://43e46da9d9f49741ecd876a269e71bc7494058d7a8e9478429998adb5bc3eaa0\",\"dweb:/ipfs/QmUtp4cqzf22C5rJ76AabKADquGWcjsc33yjYXxXC4sDvy\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xd15c3e400531f00203839159b2b8e7209c5158b35618f570c695b7e47f12e9f0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b600b852e0597aa69989cc263111f02097e2827edc1bdc70306303e3af5e9929\",\"dweb:/ipfs/QmU4WfM28A1nDqghuuGeFmN3CnVrk6opWtiF65K4vhFPeC\"]},\"@uniswap/lib/contracts/libraries/Babylonian.sol\":{\"keccak256\":\"0xe20fc48e3575b4a2932e5d2dd53b6742e1ca96f652bd41038cb89d7f5d49a096\",\"urls\":[\"bzz-raw://6ba298d8e592d39960eabc2328b7d4a01ad6cf8b06366adc3ef0133d3b196a9f\",\"dweb:/ipfs/QmQgrNaHssJ8XVsPUCMHpyYRFLbBqNrumaoFgXHWdDiTyy\"]},\"project:/contracts/JMToken.sol\":{\"keccak256\":\"0xa747bc5cfda520b1f86ae4645d6ab4ce3e71b0cfb7cf45379880c9b5e32353c1\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://5dde4cf9f8a25b955e7ce299eb783e49a9aa99ae8f29dc7b77fc02608fb30dff\",\"dweb:/ipfs/QmaaMrXHziJFaQNadWmpnZv6HKnLD2PEkrjFb7u6dzTekq\"]},\"project:/contracts/LPT.sol\":{\"keccak256\":\"0xed736abaceb3ae48c617e3f658e9b025d5b61ef8df551970899895432b0ec7b6\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://ad6919c26ab33a0f95936b6de5c1267e1a4ce2d41ef609c72be2ea63e39cf275\",\"dweb:/ipfs/QmVMZpeSSxWUxc9SME2pgQ3xwazzvdjRYGxF7sfMWGspwn\"]},\"project:/contracts/LiquidityPool.sol\":{\"keccak256\":\"0xb6529a770d3743c036cc42f3fee1f7b5ee9c6d778843dd7288eb9662f65c35c5\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://5b5642023d86251f20b4d3ce31f6921bf312803d0499d55b7ed3e766b9dabb50\",\"dweb:/ipfs/QmRoyH4HtwqWoMvg2MqmHbpEjW4sQxPg3QXG1VJCSg3iKX\"]}},\"version\":1}",
	"bytecode": "0x60806040526001600760026101000a81548160ff0219169083151502179055506000600e556046600f553480156200003657600080fd5b50604051620045ad380380620045ad83398181016040528101906200005c91906200042e565b6040518060400160405280600981526020017f4a4d5420546f6b656e00000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4a4d5400000000000000000000000000000000000000000000000000000000008152508160039081620000d99190620006da565b508060049081620000eb9190620006da565b505050620000fe6200023960201b60201c565b600a6200010c919062000951565b620f42406200011c9190620009a2565b60058190555062000136306005546200024260201b60201c565b33600760036101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160126000600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505062000ad9565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620002b4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002ab9062000a4e565b60405180910390fd5b620002c860008383620003ba60201b60201c565b8060026000828254620002dc919062000a70565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825462000333919062000a70565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200039a919062000abc565b60405180910390a3620003b660008383620003bf60201b60201c565b5050565b505050565b505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003f682620003c9565b9050919050565b6200040881620003e9565b81146200041457600080fd5b50565b6000815190506200042881620003fd565b92915050565b600060208284031215620004475762000446620003c4565b5b6000620004578482850162000417565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620004e257607f821691505b602082108103620004f857620004f76200049a565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005627fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000523565b6200056e868362000523565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620005bb620005b5620005af8462000586565b62000590565b62000586565b9050919050565b6000819050919050565b620005d7836200059a565b620005ef620005e682620005c2565b84845462000530565b825550505050565b600090565b62000606620005f7565b62000613818484620005cc565b505050565b5b818110156200063b576200062f600082620005fc565b60018101905062000619565b5050565b601f8211156200068a576200065481620004fe565b6200065f8462000513565b810160208510156200066f578190505b620006876200067e8562000513565b83018262000618565b50505b505050565b600082821c905092915050565b6000620006af600019846008026200068f565b1980831691505092915050565b6000620006ca83836200069c565b9150826002028217905092915050565b620006e58262000460565b67ffffffffffffffff8111156200070157620007006200046b565b5b6200070d8254620004c9565b6200071a8282856200063f565b600060209050601f8311600181146200075257600084156200073d578287015190505b620007498582620006bc565b865550620007b9565b601f1984166200076286620004fe565b60005b828110156200078c5784890151825560018201915060208501945060208101905062000765565b86831015620007ac5784890151620007a8601f8916826200069c565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b60018511156200084f57808604811115620008275762000826620007c1565b5b6001851615620008375780820291505b80810290506200084785620007f0565b945062000807565b94509492505050565b6000826200086a57600190506200093d565b816200087a57600090506200093d565b81600181146200089357600281146200089e57620008d4565b60019150506200093d565b60ff841115620008b357620008b2620007c1565b5b8360020a915084821115620008cd57620008cc620007c1565b5b506200093d565b5060208310610133831016604e8410600b84101617156200090e5782820a905083811115620009085762000907620007c1565b5b6200093d565b6200091d8484846001620007fd565b92509050818404811115620009375762000936620007c1565b5b81810290505b9392505050565b600060ff82169050919050565b60006200095e8262000586565b91506200096b8362000944565b92506200099a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848462000858565b905092915050565b6000620009af8262000586565b9150620009bc8362000586565b9250828202620009cc8162000586565b91508282048414831517620009e657620009e5620007c1565b5b5092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000a36601f83620009ed565b915062000a4382620009fe565b602082019050919050565b6000602082019050818103600083015262000a698162000a27565b9050919050565b600062000a7d8262000586565b915062000a8a8362000586565b925082820190508082111562000aa55762000aa4620007c1565b5b92915050565b62000ab68162000586565b82525050565b600060208201905062000ad3600083018462000aab565b92915050565b613ac48062000ae96000396000f3fe60806040526004361061023b5760003560e01c806368f58b031161012e578063b70f21c7116100ab578063dd62ed3e1161006f578063dd62ed3e1461086a578063e43252d7146108a7578063ec71ef89146108d0578063f4ab2928146108f9578063f6d7eade146109245761023b565b8063b70f21c7146107a4578063be07d17d146107e1578063d1cabc351461080c578063d7bb99ba14610823578063d83a2bf31461082d5761023b565b80638da5cb5b116100f25780638da5cb5b146106ab57806395d89b41146106d65780639dc29fac14610701578063a457c2d71461072a578063a9059cbb146107675761023b565b806368f58b03146105c65780636eefec11146105f157806370a082311461061c578063839254601461065957806385b1fb8e146106825761023b565b806332cb6b0c116101bc57806341cb87fc1161018057806341cb87fc146105055780634626402b1461052e57806346c586c21461055957806348c54b9d1461058457806365acacfe1461059b5761023b565b806332cb6b0c146103fa57806339509351146104255780633af0dbc1146104625780633af32abf1461049f57806340c10f19146104dc5761023b565b806318160ddd1161020357806318160ddd146103135780631b9631fc1461033e5780631d057bd91461036957806323b872dd14610392578063313ce567146103cf5761023b565b8063023f41471461024057806306fdde031461026b578063095ea7b31461029657806310bf6029146102d35780631690bb4e146102ea575b600080fd5b34801561024c57600080fd5b5061025561094f565b6040516102629190612961565b60405180910390f35b34801561027757600080fd5b50610280610955565b60405161028d9190612a0c565b60405180910390f35b3480156102a257600080fd5b506102bd60048036038101906102b89190612abd565b6109e7565b6040516102ca9190612b18565b60405180910390f35b3480156102df57600080fd5b506102e8610a0a565b005b3480156102f657600080fd5b50610311600480360381019061030c9190612b71565b610af2565b005b34801561031f57600080fd5b50610328610ce7565b6040516103359190612961565b60405180910390f35b34801561034a57600080fd5b50610353610cf1565b6040516103609190612bad565b60405180910390f35b34801561037557600080fd5b50610390600480360381019061038b9190612abd565b610d17565b005b34801561039e57600080fd5b506103b960048036038101906103b49190612bc8565b610e0d565b6040516103c69190612b18565b60405180910390f35b3480156103db57600080fd5b506103e4610e3c565b6040516103f19190612c37565b60405180910390f35b34801561040657600080fd5b5061040f610e45565b60405161041c9190612961565b60405180910390f35b34801561043157600080fd5b5061044c60048036038101906104479190612abd565b610e4b565b6040516104599190612b18565b60405180910390f35b34801561046e57600080fd5b5061048960048036038101906104849190612c52565b610e82565b6040516104969190612961565b60405180910390f35b3480156104ab57600080fd5b506104c660048036038101906104c19190612c52565b610e9a565b6040516104d39190612b18565b60405180910390f35b3480156104e857600080fd5b5061050360048036038101906104fe9190612abd565b610eba565b005b34801561051157600080fd5b5061052c60048036038101906105279190612c52565b61103c565b005b34801561053a57600080fd5b506105436111a1565b6040516105509190612ca0565b60405180910390f35b34801561056557600080fd5b5061056e6111c7565b60405161057b9190612bad565b60405180910390f35b34801561059057600080fd5b506105996111ed565b005b3480156105a757600080fd5b506105b06113a6565b6040516105bd9190612b18565b60405180910390f35b3480156105d257600080fd5b506105db6113b9565b6040516105e89190612961565b60405180910390f35b3480156105fd57600080fd5b506106066113be565b6040516106139190612bad565b60405180910390f35b34801561062857600080fd5b50610643600480360381019061063e9190612c52565b6113e4565b6040516106509190612961565b60405180910390f35b34801561066557600080fd5b50610680600480360381019061067b9190612c52565b61142c565b005b34801561068e57600080fd5b506106a960048036038101906106a49190612abd565b611591565b005b3480156106b757600080fd5b506106c0611682565b6040516106cd9190612bad565b60405180910390f35b3480156106e257600080fd5b506106eb6116a8565b6040516106f89190612a0c565b60405180910390f35b34801561070d57600080fd5b5061072860048036038101906107239190612abd565b61173a565b005b34801561073657600080fd5b50610751600480360381019061074c9190612abd565b6117f6565b60405161075e9190612b18565b60405180910390f35b34801561077357600080fd5b5061078e60048036038101906107899190612abd565b61186d565b60405161079b9190612b18565b60405180910390f35b3480156107b057600080fd5b506107cb60048036038101906107c69190612c52565b611890565b6040516107d89190612961565b60405180910390f35b3480156107ed57600080fd5b506107f66118a8565b6040516108039190612b18565b60405180910390f35b34801561081857600080fd5b506108216118bb565b005b61082b6119a3565b005b34801561083957600080fd5b50610854600480360381019061084f9190612bc8565b611b6a565b6040516108619190612b18565b60405180910390f35b34801561087657600080fd5b50610891600480360381019061088c9190612cbb565b611cd6565b60405161089e9190612961565b60405180910390f35b3480156108b357600080fd5b506108ce60048036038101906108c99190612c52565b611d5d565b005b3480156108dc57600080fd5b506108f760048036038101906108f29190612c52565b611e48565b005b34801561090557600080fd5b5061090e611fad565b60405161091b9190612b18565b60405180910390f35b34801561093057600080fd5b50610939611fc0565b6040516109469190612bad565b60405180910390f35b60065481565b60606003805461096490612d2a565b80601f016020809104026020016040519081016040528092919081815260200182805461099090612d2a565b80156109dd5780601f106109b2576101008083540402835291602001916109dd565b820191906000526020600020905b8154815290600101906020018083116109c057829003601f168201915b5050505050905090565b6000806109f2611fe6565b90506109ff818585611fee565b600191505092915050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9190612da7565b60405180910390fd5b600760029054906101000a900460ff1615600760026101000a81548160ff0219169083151502179055507fe454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d360405160405180910390a1565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7990612da7565b60405180910390fd5b600760019054906101000a900460ff1615610bd2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc990612e13565b60405180910390fd5b6001600760016101000a81548160ff02191690831515021790555060006064600654610bfe9190612e62565b9050610c0b3083836121b7565b8173ffffffffffffffffffffffffffffffffffffffff16636e553f6560065483306040518463ffffffff1660e01b8152600401610c49929190612ea4565b6000604051808303818588803b158015610c6257600080fd5b505af1158015610c76573d6000803e3d6000fd5b50505050508173ffffffffffffffffffffffffffffffffffffffff16632770d9016040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610cc357600080fd5b505af1158015610cd7573d6000803e3d6000fd5b50505050610ce3612436565b5050565b6000600254905090565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610dc05750600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610dff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df690612f19565b60405180910390fd5b610e09828261249f565b5050565b600080610e18611fe6565b9050610e25858285612675565b610e30858585612701565b60019150509392505050565b60006012905090565b60055481565b600080610e56611fe6565b9050610e77818585610e688589611cd6565b610e729190612f39565b611fee565b600191505092915050565b60116020528060005260406000206000915090505481565b60126020528060005260406000206000915054906101000a900460ff1681565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610f4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4190612da7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610fb9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb090612fb9565b60405180910390fd5b60055481610fc5610ce7565b610fcf9190612f39565b1115611010576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100790613025565b60405180910390fd5b6110388261101c610e3c565b600a6110289190613178565b836110339190612e62565b612783565b5050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146110cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c390612da7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461115d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111549061320f565b60405180910390fd5b80600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600760009054906101000a900460ff161561123d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112349061327b565b60405180910390fd5b600760019054906101000a900460ff161561128d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161128490612e13565b60405180910390fd5b6000601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541161130f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611306906132e7565b60405180910390fd5b6000601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506113a33033836121b7565b50565b600760019054906101000a900460ff1681565b600181565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146114bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114b390612da7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461154d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115449061320f565b60405180910390fd5b80600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b81600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600d8190555060006115e560646128e2565b9050600f5481111561162c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161162390613353565b60405180910390fd5b61167d600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600d546121b7565b505050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600480546116b790612d2a565b80601f01602080910402602001604051908101604052809291908181526020018280546116e390612d2a565b80156117305780601f1061170557610100808354040283529160200191611730565b820191906000526020600020905b81548152906001019060200180831161171357829003601f168201915b5050505050905090565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146117ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117c190612da7565b60405180910390fd5b6117f2826117d6610e3c565b600a6117e29190613178565b836117ed9190612e62565b61249f565b5050565b600080611801611fe6565b9050600061180f8286611cd6565b905083811015611854576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161184b906133e5565b60405180910390fd5b6118618286868403611fee565b60019250505092915050565b600080611878611fe6565b9050611885818585612701565b600191505092915050565b60106020528060005260406000206000915090505481565b600760029054906101000a900460ff1681565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461194b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161194290612da7565b60405180910390fd5b600760009054906101000a900460ff1615600760006101000a81548160ff0219169083151502179055507fe454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d360405160405180910390a1565b600760009054906101000a900460ff16156119f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119ea9061327b565b60405180910390fd5b600760019054906101000a900460ff1615611a43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a3a90612e13565b60405180910390fd5b6000606434611a529190612e62565b905080601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611aa39190612f39565b9250508190555034601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611af99190612f39565b925050819055503460066000828254611b129190612f39565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167f745f661b8143944fb883f50694ebed3a871e43c451d9d4bf4648a9d551d7e47a82604051611b5f9190612961565b60405180910390a250565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480611c155750600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b80611c6d5750600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b611cac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ca390613451565b60405180910390fd5b611ccb848484611cbc3330611cd6565b611cc69190612f39565b611fee565b600190509392505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611ded576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611de490612da7565b60405180910390fd5b6001601260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611ed8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ecf90612da7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611f69576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f609061320f565b60405180910390fd5b80600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600760009054906101000a900460ff1681565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361205d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612054906134e3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036120cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120c390613575565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516121aa9190612961565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612226576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161221d90613607565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612295576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161228c90613699565b60405180910390fd5b6122a083838361293e565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015612326576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161231d9061372b565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546123b99190612f39565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161241d9190612961565b60405180910390a3612430848484612943565b50505050565b6000612441306113e4565b905061247030600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836121b7565b7fa01103220c31ee0c47e79a81104a3e82740390c1d918ad5638190cc185bd92e160405160405180910390a150565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361250e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612505906137bd565b60405180910390fd5b61251a8260008361293e565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156125a0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125979061384f565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282546125f7919061386f565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161265c9190612961565b60405180910390a361267083600084612943565b505050565b60006126818484611cd6565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146126fb57818110156126ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126e4906138ef565b60405180910390fd5b6126fa8484848403611fee565b5b50505050565b6000600760029054906101000a900460ff16156127345760648260016127279190612e62565b612731919061393e565b90505b60008183612742919061386f565b905061274f8585836121b7565b61277c85600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846121b7565b5050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036127f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016127e990612fb9565b60405180910390fd5b6127fe6000838361293e565b80600260008282546128109190612f39565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546128659190612f39565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516128ca9190612961565b60405180910390a36128de60008383612943565b5050565b6000600e60008154809291906128f79061396f565b9190505550814233600e5460405160200161291493929190613a20565b6040516020818303038152906040528051906020012060001c6129379190613a5d565b9050919050565b505050565b505050565b6000819050919050565b61295b81612948565b82525050565b60006020820190506129766000830184612952565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156129b657808201518184015260208101905061299b565b60008484015250505050565b6000601f19601f8301169050919050565b60006129de8261297c565b6129e88185612987565b93506129f8818560208601612998565b612a01816129c2565b840191505092915050565b60006020820190508181036000830152612a2681846129d3565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612a5e82612a33565b9050919050565b612a6e81612a53565b8114612a7957600080fd5b50565b600081359050612a8b81612a65565b92915050565b612a9a81612948565b8114612aa557600080fd5b50565b600081359050612ab781612a91565b92915050565b60008060408385031215612ad457612ad3612a2e565b5b6000612ae285828601612a7c565b9250506020612af385828601612aa8565b9150509250929050565b60008115159050919050565b612b1281612afd565b82525050565b6000602082019050612b2d6000830184612b09565b92915050565b6000612b3e82612a53565b9050919050565b612b4e81612b33565b8114612b5957600080fd5b50565b600081359050612b6b81612b45565b92915050565b600060208284031215612b8757612b86612a2e565b5b6000612b9584828501612b5c565b91505092915050565b612ba781612a53565b82525050565b6000602082019050612bc26000830184612b9e565b92915050565b600080600060608486031215612be157612be0612a2e565b5b6000612bef86828701612a7c565b9350506020612c0086828701612a7c565b9250506040612c1186828701612aa8565b9150509250925092565b600060ff82169050919050565b612c3181612c1b565b82525050565b6000602082019050612c4c6000830184612c28565b92915050565b600060208284031215612c6857612c67612a2e565b5b6000612c7684828501612a7c565b91505092915050565b6000612c8a82612a33565b9050919050565b612c9a81612c7f565b82525050565b6000602082019050612cb56000830184612c91565b92915050565b60008060408385031215612cd257612cd1612a2e565b5b6000612ce085828601612a7c565b9250506020612cf185828601612a7c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680612d4257607f821691505b602082108103612d5557612d54612cfb565b5b50919050565b7f4f574e45525f4f4e4c5900000000000000000000000000000000000000000000600082015250565b6000612d91600a83612987565b9150612d9c82612d5b565b602082019050919050565b60006020820190508181036000830152612dc081612d84565b9050919050565b7f46554e44535f4d4f5645445f544f5f4c50000000000000000000000000000000600082015250565b6000612dfd601183612987565b9150612e0882612dc7565b602082019050919050565b60006020820190508181036000830152612e2c81612df0565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612e6d82612948565b9150612e7883612948565b9250828202612e8681612948565b91508282048414831517612e9d57612e9c612e33565b5b5092915050565b6000604082019050612eb96000830185612952565b612ec66020830184612b9e565b9392505050565b7f4d41504c454e46545f4f4e4c5900000000000000000000000000000000000000600082015250565b6000612f03600d83612987565b9150612f0e82612ecd565b602082019050919050565b60006020820190508181036000830152612f3281612ef6565b9050919050565b6000612f4482612948565b9150612f4f83612948565b9250828201905080821115612f6757612f66612e33565b5b92915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000612fa3601f83612987565b9150612fae82612f6d565b602082019050919050565b60006020820190508181036000830152612fd281612f96565b9050919050565b7f41424f56455f4d41585f535550504c5900000000000000000000000000000000600082015250565b600061300f601083612987565b915061301a82612fd9565b602082019050919050565b6000602082019050818103600083015261303e81613002565b9050919050565b60008160011c9050919050565b6000808291508390505b600185111561309c5780860481111561307857613077612e33565b5b60018516156130875780820291505b808102905061309585613045565b945061305c565b94509492505050565b6000826130b55760019050613171565b816130c35760009050613171565b81600181146130d957600281146130e357613112565b6001915050613171565b60ff8411156130f5576130f4612e33565b5b8360020a91508482111561310c5761310b612e33565b5b50613171565b5060208310610133831016604e8410600b84101617156131475782820a90508381111561314257613141612e33565b5b613171565b6131548484846001613052565b9250905081840481111561316b5761316a612e33565b5b81810290505b9392505050565b600061318382612948565b915061318e83612c1b565b92506131bb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846130a5565b905092915050565b7f57524954455f4f4e434521000000000000000000000000000000000000000000600082015250565b60006131f9600b83612987565b9150613204826131c3565b602082019050919050565b60006020820190508181036000830152613228816131ec565b9050919050565b7f434f4e54524143545f5041555345440000000000000000000000000000000000600082015250565b6000613265600f83612987565b91506132708261322f565b602082019050919050565b6000602082019050818103600083015261329481613258565b9050919050565b7f4e4f5f415641494c41424c455f46554e44530000000000000000000000000000600082015250565b60006132d1601283612987565b91506132dc8261329b565b602082019050919050565b60006020820190508181036000830152613300816132c4565b9050919050565b7f4e6f7420726577617264546f6b656e2e00000000000000000000000000000000600082015250565b600061333d601083612987565b915061334882613307565b602082019050919050565b6000602082019050818103600083015261336c81613330565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006133cf602583612987565b91506133da82613373565b604082019050919050565b600060208201905081810360008301526133fe816133c2565b9050919050565b7f524f555445525f4f525f4d41504c455f4f4e4c59000000000000000000000000600082015250565b600061343b601483612987565b915061344682613405565b602082019050919050565b6000602082019050818103600083015261346a8161342e565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006134cd602483612987565b91506134d882613471565b604082019050919050565b600060208201905081810360008301526134fc816134c0565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061355f602283612987565b915061356a82613503565b604082019050919050565b6000602082019050818103600083015261358e81613552565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006135f1602583612987565b91506135fc82613595565b604082019050919050565b60006020820190508181036000830152613620816135e4565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000613683602383612987565b915061368e82613627565b604082019050919050565b600060208201905081810360008301526136b281613676565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000613715602683612987565b9150613720826136b9565b604082019050919050565b6000602082019050818103600083015261374481613708565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b60006137a7602183612987565b91506137b28261374b565b604082019050919050565b600060208201905081810360008301526137d68161379a565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000613839602283612987565b9150613844826137dd565b604082019050919050565b600060208201905081810360008301526138688161382c565b9050919050565b600061387a82612948565b915061388583612948565b925082820390508181111561389d5761389c612e33565b5b92915050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006138d9601d83612987565b91506138e4826138a3565b602082019050919050565b60006020820190508181036000830152613908816138cc565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061394982612948565b915061395483612948565b9250826139645761396361390f565b5b828204905092915050565b600061397a82612948565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036139ac576139ab612e33565b5b600182019050919050565b6000819050919050565b6139d26139cd82612948565b6139b7565b82525050565b60008160601b9050919050565b60006139f0826139d8565b9050919050565b6000613a02826139e5565b9050919050565b613a1a613a1582612a53565b6139f7565b82525050565b6000613a2c82866139c1565b602082019150613a3c8285613a09565b601482019150613a4c82846139c1565b602082019150819050949350505050565b6000613a6882612948565b9150613a7383612948565b925082613a8357613a8261390f565b5b82820690509291505056fea2646970667358221220191e4e16b5418f9f244e120e3d8a220ce62d04053d9434699d68ca6bbf832cf264736f6c63430008110033",
	"deployedBytecode": "0x60806040526004361061023b5760003560e01c806368f58b031161012e578063b70f21c7116100ab578063dd62ed3e1161006f578063dd62ed3e1461086a578063e43252d7146108a7578063ec71ef89146108d0578063f4ab2928146108f9578063f6d7eade146109245761023b565b8063b70f21c7146107a4578063be07d17d146107e1578063d1cabc351461080c578063d7bb99ba14610823578063d83a2bf31461082d5761023b565b80638da5cb5b116100f25780638da5cb5b146106ab57806395d89b41146106d65780639dc29fac14610701578063a457c2d71461072a578063a9059cbb146107675761023b565b806368f58b03146105c65780636eefec11146105f157806370a082311461061c578063839254601461065957806385b1fb8e146106825761023b565b806332cb6b0c116101bc57806341cb87fc1161018057806341cb87fc146105055780634626402b1461052e57806346c586c21461055957806348c54b9d1461058457806365acacfe1461059b5761023b565b806332cb6b0c146103fa57806339509351146104255780633af0dbc1146104625780633af32abf1461049f57806340c10f19146104dc5761023b565b806318160ddd1161020357806318160ddd146103135780631b9631fc1461033e5780631d057bd91461036957806323b872dd14610392578063313ce567146103cf5761023b565b8063023f41471461024057806306fdde031461026b578063095ea7b31461029657806310bf6029146102d35780631690bb4e146102ea575b600080fd5b34801561024c57600080fd5b5061025561094f565b6040516102629190612961565b60405180910390f35b34801561027757600080fd5b50610280610955565b60405161028d9190612a0c565b60405180910390f35b3480156102a257600080fd5b506102bd60048036038101906102b89190612abd565b6109e7565b6040516102ca9190612b18565b60405180910390f35b3480156102df57600080fd5b506102e8610a0a565b005b3480156102f657600080fd5b50610311600480360381019061030c9190612b71565b610af2565b005b34801561031f57600080fd5b50610328610ce7565b6040516103359190612961565b60405180910390f35b34801561034a57600080fd5b50610353610cf1565b6040516103609190612bad565b60405180910390f35b34801561037557600080fd5b50610390600480360381019061038b9190612abd565b610d17565b005b34801561039e57600080fd5b506103b960048036038101906103b49190612bc8565b610e0d565b6040516103c69190612b18565b60405180910390f35b3480156103db57600080fd5b506103e4610e3c565b6040516103f19190612c37565b60405180910390f35b34801561040657600080fd5b5061040f610e45565b60405161041c9190612961565b60405180910390f35b34801561043157600080fd5b5061044c60048036038101906104479190612abd565b610e4b565b6040516104599190612b18565b60405180910390f35b34801561046e57600080fd5b5061048960048036038101906104849190612c52565b610e82565b6040516104969190612961565b60405180910390f35b3480156104ab57600080fd5b506104c660048036038101906104c19190612c52565b610e9a565b6040516104d39190612b18565b60405180910390f35b3480156104e857600080fd5b5061050360048036038101906104fe9190612abd565b610eba565b005b34801561051157600080fd5b5061052c60048036038101906105279190612c52565b61103c565b005b34801561053a57600080fd5b506105436111a1565b6040516105509190612ca0565b60405180910390f35b34801561056557600080fd5b5061056e6111c7565b60405161057b9190612bad565b60405180910390f35b34801561059057600080fd5b506105996111ed565b005b3480156105a757600080fd5b506105b06113a6565b6040516105bd9190612b18565b60405180910390f35b3480156105d257600080fd5b506105db6113b9565b6040516105e89190612961565b60405180910390f35b3480156105fd57600080fd5b506106066113be565b6040516106139190612bad565b60405180910390f35b34801561062857600080fd5b50610643600480360381019061063e9190612c52565b6113e4565b6040516106509190612961565b60405180910390f35b34801561066557600080fd5b50610680600480360381019061067b9190612c52565b61142c565b005b34801561068e57600080fd5b506106a960048036038101906106a49190612abd565b611591565b005b3480156106b757600080fd5b506106c0611682565b6040516106cd9190612bad565b60405180910390f35b3480156106e257600080fd5b506106eb6116a8565b6040516106f89190612a0c565b60405180910390f35b34801561070d57600080fd5b5061072860048036038101906107239190612abd565b61173a565b005b34801561073657600080fd5b50610751600480360381019061074c9190612abd565b6117f6565b60405161075e9190612b18565b60405180910390f35b34801561077357600080fd5b5061078e60048036038101906107899190612abd565b61186d565b60405161079b9190612b18565b60405180910390f35b3480156107b057600080fd5b506107cb60048036038101906107c69190612c52565b611890565b6040516107d89190612961565b60405180910390f35b3480156107ed57600080fd5b506107f66118a8565b6040516108039190612b18565b60405180910390f35b34801561081857600080fd5b506108216118bb565b005b61082b6119a3565b005b34801561083957600080fd5b50610854600480360381019061084f9190612bc8565b611b6a565b6040516108619190612b18565b60405180910390f35b34801561087657600080fd5b50610891600480360381019061088c9190612cbb565b611cd6565b60405161089e9190612961565b60405180910390f35b3480156108b357600080fd5b506108ce60048036038101906108c99190612c52565b611d5d565b005b3480156108dc57600080fd5b506108f760048036038101906108f29190612c52565b611e48565b005b34801561090557600080fd5b5061090e611fad565b60405161091b9190612b18565b60405180910390f35b34801561093057600080fd5b50610939611fc0565b6040516109469190612bad565b60405180910390f35b60065481565b60606003805461096490612d2a565b80601f016020809104026020016040519081016040528092919081815260200182805461099090612d2a565b80156109dd5780601f106109b2576101008083540402835291602001916109dd565b820191906000526020600020905b8154815290600101906020018083116109c057829003601f168201915b5050505050905090565b6000806109f2611fe6565b90506109ff818585611fee565b600191505092915050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9190612da7565b60405180910390fd5b600760029054906101000a900460ff1615600760026101000a81548160ff0219169083151502179055507fe454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d360405160405180910390a1565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7990612da7565b60405180910390fd5b600760019054906101000a900460ff1615610bd2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc990612e13565b60405180910390fd5b6001600760016101000a81548160ff02191690831515021790555060006064600654610bfe9190612e62565b9050610c0b3083836121b7565b8173ffffffffffffffffffffffffffffffffffffffff16636e553f6560065483306040518463ffffffff1660e01b8152600401610c49929190612ea4565b6000604051808303818588803b158015610c6257600080fd5b505af1158015610c76573d6000803e3d6000fd5b50505050508173ffffffffffffffffffffffffffffffffffffffff16632770d9016040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610cc357600080fd5b505af1158015610cd7573d6000803e3d6000fd5b50505050610ce3612436565b5050565b6000600254905090565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610dc05750600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610dff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df690612f19565b60405180910390fd5b610e09828261249f565b5050565b600080610e18611fe6565b9050610e25858285612675565b610e30858585612701565b60019150509392505050565b60006012905090565b60055481565b600080610e56611fe6565b9050610e77818585610e688589611cd6565b610e729190612f39565b611fee565b600191505092915050565b60116020528060005260406000206000915090505481565b60126020528060005260406000206000915054906101000a900460ff1681565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610f4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4190612da7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610fb9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb090612fb9565b60405180910390fd5b60055481610fc5610ce7565b610fcf9190612f39565b1115611010576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100790613025565b60405180910390fd5b6110388261101c610e3c565b600a6110289190613178565b836110339190612e62565b612783565b5050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146110cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c390612da7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461115d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111549061320f565b60405180910390fd5b80600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600760009054906101000a900460ff161561123d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112349061327b565b60405180910390fd5b600760019054906101000a900460ff161561128d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161128490612e13565b60405180910390fd5b6000601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541161130f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611306906132e7565b60405180910390fd5b6000601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506113a33033836121b7565b50565b600760019054906101000a900460ff1681565b600181565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146114bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114b390612da7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461154d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115449061320f565b60405180910390fd5b80600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b81600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600d8190555060006115e560646128e2565b9050600f5481111561162c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161162390613353565b60405180910390fd5b61167d600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600d546121b7565b505050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600480546116b790612d2a565b80601f01602080910402602001604051908101604052809291908181526020018280546116e390612d2a565b80156117305780601f1061170557610100808354040283529160200191611730565b820191906000526020600020905b81548152906001019060200180831161171357829003601f168201915b5050505050905090565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146117ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117c190612da7565b60405180910390fd5b6117f2826117d6610e3c565b600a6117e29190613178565b836117ed9190612e62565b61249f565b5050565b600080611801611fe6565b9050600061180f8286611cd6565b905083811015611854576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161184b906133e5565b60405180910390fd5b6118618286868403611fee565b60019250505092915050565b600080611878611fe6565b9050611885818585612701565b600191505092915050565b60106020528060005260406000206000915090505481565b600760029054906101000a900460ff1681565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461194b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161194290612da7565b60405180910390fd5b600760009054906101000a900460ff1615600760006101000a81548160ff0219169083151502179055507fe454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d360405160405180910390a1565b600760009054906101000a900460ff16156119f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119ea9061327b565b60405180910390fd5b600760019054906101000a900460ff1615611a43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a3a90612e13565b60405180910390fd5b6000606434611a529190612e62565b905080601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611aa39190612f39565b9250508190555034601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611af99190612f39565b925050819055503460066000828254611b129190612f39565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167f745f661b8143944fb883f50694ebed3a871e43c451d9d4bf4648a9d551d7e47a82604051611b5f9190612961565b60405180910390a250565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480611c155750600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b80611c6d5750600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b611cac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ca390613451565b60405180910390fd5b611ccb848484611cbc3330611cd6565b611cc69190612f39565b611fee565b600190509392505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611ded576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611de490612da7565b60405180910390fd5b6001601260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611ed8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ecf90612da7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611f69576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f609061320f565b60405180910390fd5b80600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600760009054906101000a900460ff1681565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361205d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612054906134e3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036120cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120c390613575565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516121aa9190612961565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612226576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161221d90613607565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612295576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161228c90613699565b60405180910390fd5b6122a083838361293e565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015612326576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161231d9061372b565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546123b99190612f39565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161241d9190612961565b60405180910390a3612430848484612943565b50505050565b6000612441306113e4565b905061247030600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836121b7565b7fa01103220c31ee0c47e79a81104a3e82740390c1d918ad5638190cc185bd92e160405160405180910390a150565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361250e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612505906137bd565b60405180910390fd5b61251a8260008361293e565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156125a0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125979061384f565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282546125f7919061386f565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161265c9190612961565b60405180910390a361267083600084612943565b505050565b60006126818484611cd6565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146126fb57818110156126ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126e4906138ef565b60405180910390fd5b6126fa8484848403611fee565b5b50505050565b6000600760029054906101000a900460ff16156127345760648260016127279190612e62565b612731919061393e565b90505b60008183612742919061386f565b905061274f8585836121b7565b61277c85600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846121b7565b5050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036127f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016127e990612fb9565b60405180910390fd5b6127fe6000838361293e565b80600260008282546128109190612f39565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546128659190612f39565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516128ca9190612961565b60405180910390a36128de60008383612943565b5050565b6000600e60008154809291906128f79061396f565b9190505550814233600e5460405160200161291493929190613a20565b6040516020818303038152906040528051906020012060001c6129379190613a5d565b9050919050565b505050565b505050565b6000819050919050565b61295b81612948565b82525050565b60006020820190506129766000830184612952565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156129b657808201518184015260208101905061299b565b60008484015250505050565b6000601f19601f8301169050919050565b60006129de8261297c565b6129e88185612987565b93506129f8818560208601612998565b612a01816129c2565b840191505092915050565b60006020820190508181036000830152612a2681846129d3565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612a5e82612a33565b9050919050565b612a6e81612a53565b8114612a7957600080fd5b50565b600081359050612a8b81612a65565b92915050565b612a9a81612948565b8114612aa557600080fd5b50565b600081359050612ab781612a91565b92915050565b60008060408385031215612ad457612ad3612a2e565b5b6000612ae285828601612a7c565b9250506020612af385828601612aa8565b9150509250929050565b60008115159050919050565b612b1281612afd565b82525050565b6000602082019050612b2d6000830184612b09565b92915050565b6000612b3e82612a53565b9050919050565b612b4e81612b33565b8114612b5957600080fd5b50565b600081359050612b6b81612b45565b92915050565b600060208284031215612b8757612b86612a2e565b5b6000612b9584828501612b5c565b91505092915050565b612ba781612a53565b82525050565b6000602082019050612bc26000830184612b9e565b92915050565b600080600060608486031215612be157612be0612a2e565b5b6000612bef86828701612a7c565b9350506020612c0086828701612a7c565b9250506040612c1186828701612aa8565b9150509250925092565b600060ff82169050919050565b612c3181612c1b565b82525050565b6000602082019050612c4c6000830184612c28565b92915050565b600060208284031215612c6857612c67612a2e565b5b6000612c7684828501612a7c565b91505092915050565b6000612c8a82612a33565b9050919050565b612c9a81612c7f565b82525050565b6000602082019050612cb56000830184612c91565b92915050565b60008060408385031215612cd257612cd1612a2e565b5b6000612ce085828601612a7c565b9250506020612cf185828601612a7c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680612d4257607f821691505b602082108103612d5557612d54612cfb565b5b50919050565b7f4f574e45525f4f4e4c5900000000000000000000000000000000000000000000600082015250565b6000612d91600a83612987565b9150612d9c82612d5b565b602082019050919050565b60006020820190508181036000830152612dc081612d84565b9050919050565b7f46554e44535f4d4f5645445f544f5f4c50000000000000000000000000000000600082015250565b6000612dfd601183612987565b9150612e0882612dc7565b602082019050919050565b60006020820190508181036000830152612e2c81612df0565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612e6d82612948565b9150612e7883612948565b9250828202612e8681612948565b91508282048414831517612e9d57612e9c612e33565b5b5092915050565b6000604082019050612eb96000830185612952565b612ec66020830184612b9e565b9392505050565b7f4d41504c454e46545f4f4e4c5900000000000000000000000000000000000000600082015250565b6000612f03600d83612987565b9150612f0e82612ecd565b602082019050919050565b60006020820190508181036000830152612f3281612ef6565b9050919050565b6000612f4482612948565b9150612f4f83612948565b9250828201905080821115612f6757612f66612e33565b5b92915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000612fa3601f83612987565b9150612fae82612f6d565b602082019050919050565b60006020820190508181036000830152612fd281612f96565b9050919050565b7f41424f56455f4d41585f535550504c5900000000000000000000000000000000600082015250565b600061300f601083612987565b915061301a82612fd9565b602082019050919050565b6000602082019050818103600083015261303e81613002565b9050919050565b60008160011c9050919050565b6000808291508390505b600185111561309c5780860481111561307857613077612e33565b5b60018516156130875780820291505b808102905061309585613045565b945061305c565b94509492505050565b6000826130b55760019050613171565b816130c35760009050613171565b81600181146130d957600281146130e357613112565b6001915050613171565b60ff8411156130f5576130f4612e33565b5b8360020a91508482111561310c5761310b612e33565b5b50613171565b5060208310610133831016604e8410600b84101617156131475782820a90508381111561314257613141612e33565b5b613171565b6131548484846001613052565b9250905081840481111561316b5761316a612e33565b5b81810290505b9392505050565b600061318382612948565b915061318e83612c1b565b92506131bb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846130a5565b905092915050565b7f57524954455f4f4e434521000000000000000000000000000000000000000000600082015250565b60006131f9600b83612987565b9150613204826131c3565b602082019050919050565b60006020820190508181036000830152613228816131ec565b9050919050565b7f434f4e54524143545f5041555345440000000000000000000000000000000000600082015250565b6000613265600f83612987565b91506132708261322f565b602082019050919050565b6000602082019050818103600083015261329481613258565b9050919050565b7f4e4f5f415641494c41424c455f46554e44530000000000000000000000000000600082015250565b60006132d1601283612987565b91506132dc8261329b565b602082019050919050565b60006020820190508181036000830152613300816132c4565b9050919050565b7f4e6f7420726577617264546f6b656e2e00000000000000000000000000000000600082015250565b600061333d601083612987565b915061334882613307565b602082019050919050565b6000602082019050818103600083015261336c81613330565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006133cf602583612987565b91506133da82613373565b604082019050919050565b600060208201905081810360008301526133fe816133c2565b9050919050565b7f524f555445525f4f525f4d41504c455f4f4e4c59000000000000000000000000600082015250565b600061343b601483612987565b915061344682613405565b602082019050919050565b6000602082019050818103600083015261346a8161342e565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006134cd602483612987565b91506134d882613471565b604082019050919050565b600060208201905081810360008301526134fc816134c0565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061355f602283612987565b915061356a82613503565b604082019050919050565b6000602082019050818103600083015261358e81613552565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006135f1602583612987565b91506135fc82613595565b604082019050919050565b60006020820190508181036000830152613620816135e4565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000613683602383612987565b915061368e82613627565b604082019050919050565b600060208201905081810360008301526136b281613676565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000613715602683612987565b9150613720826136b9565b604082019050919050565b6000602082019050818103600083015261374481613708565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b60006137a7602183612987565b91506137b28261374b565b604082019050919050565b600060208201905081810360008301526137d68161379a565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000613839602283612987565b9150613844826137dd565b604082019050919050565b600060208201905081810360008301526138688161382c565b9050919050565b600061387a82612948565b915061388583612948565b925082820390508181111561389d5761389c612e33565b5b92915050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006138d9601d83612987565b91506138e4826138a3565b602082019050919050565b60006020820190508181036000830152613908816138cc565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061394982612948565b915061395483612948565b9250826139645761396361390f565b5b828204905092915050565b600061397a82612948565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036139ac576139ab612e33565b5b600182019050919050565b6000819050919050565b6139d26139cd82612948565b6139b7565b82525050565b60008160601b9050919050565b60006139f0826139d8565b9050919050565b6000613a02826139e5565b9050919050565b613a1a613a1582612a53565b6139f7565b82525050565b6000613a2c82866139c1565b602082019150613a3c8285613a09565b601482019150613a4c82846139c1565b602082019150819050949350505050565b6000613a6882612948565b9150613a7383612948565b925082613a8357613a8261390f565b5b82820690509291505056fea2646970667358221220191e4e16b5418f9f244e120e3d8a220ce62d04053d9434699d68ca6bbf832cf264736f6c63430008110033",
	"immutableReferences": {},
	"generatedSources": [
	  {
		"ast": {
		  "nodeType": "YulBlock",
		  "src": "0:11212:33",
		  "statements": [
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "47:35:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "57:19:33",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "73:2:33",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "67:5:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "67:9:33"
					},
					"variableNames": [
					  {
						"name": "memPtr",
						"nodeType": "YulIdentifier",
						"src": "57:6:33"
					  }
					]
				  }
				]
			  },
			  "name": "allocate_unbounded",
			  "nodeType": "YulFunctionDefinition",
			  "returnVariables": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "40:6:33",
				  "type": ""
				}
			  ],
			  "src": "7:75:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "177:28:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "194:1:33",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "197:1:33",
						  "type": "",
						  "value": "0"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "187:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "187:12:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "187:12:33"
				  }
				]
			  },
			  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
			  "nodeType": "YulFunctionDefinition",
			  "src": "88:117:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "300:28:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "317:1:33",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "320:1:33",
						  "type": "",
						  "value": "0"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "310:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "310:12:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "310:12:33"
				  }
				]
			  },
			  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
			  "nodeType": "YulFunctionDefinition",
			  "src": "211:117:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "379:81:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "389:65:33",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "404:5:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "411:42:33",
						  "type": "",
						  "value": "0xffffffffffffffffffffffffffffffffffffffff"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "400:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "400:54:33"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "389:7:33"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_uint160",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "361:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "371:7:33",
				  "type": ""
				}
			  ],
			  "src": "334:126:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "519:51:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "529:35:33",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "558:5:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint160",
						"nodeType": "YulIdentifier",
						"src": "540:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "540:24:33"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "529:7:33"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_address_payable",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "501:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "511:7:33",
				  "type": ""
				}
			  ],
			  "src": "466:104:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "627:87:33",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "692:16:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "701:1:33",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "704:1:33",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "694:6:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "694:12:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "694:12:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "650:5:33"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "683:5:33"
								}
							  ],
							  "functionName": {
								"name": "cleanup_t_address_payable",
								"nodeType": "YulIdentifier",
								"src": "657:25:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "657:32:33"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "647:2:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "647:43:33"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "640:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "640:51:33"
					},
					"nodeType": "YulIf",
					"src": "637:71:33"
				  }
				]
			  },
			  "name": "validator_revert_t_address_payable",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "620:5:33",
				  "type": ""
				}
			  ],
			  "src": "576:138:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "791:88:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "801:22:33",
					"value": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "816:6:33"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "810:5:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "810:13:33"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "801:5:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "867:5:33"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_t_address_payable",
						"nodeType": "YulIdentifier",
						"src": "832:34:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "832:41:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "832:41:33"
				  }
				]
			  },
			  "name": "abi_decode_t_address_payable_fromMemory",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "769:6:33",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "777:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "785:5:33",
				  "type": ""
				}
			  ],
			  "src": "720:159:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "970:282:33",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "1016:83:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "1018:77:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "1018:79:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "1018:79:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "991:7:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1000:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "987:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "987:23:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1012:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "983:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "983:32:33"
					},
					"nodeType": "YulIf",
					"src": "980:119:33"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "1109:136:33",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "1124:15:33",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1138:1:33",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "1128:6:33",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "1153:82:33",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "1207:9:33"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "1218:6:33"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "1203:3:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "1203:22:33"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "1227:7:33"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address_payable_fromMemory",
							"nodeType": "YulIdentifier",
							"src": "1163:39:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1163:72:33"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "1153:6:33"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_address_payable_fromMemory",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "940:9:33",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "951:7:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "963:6:33",
				  "type": ""
				}
			  ],
			  "src": "885:367:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1317:40:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "1328:22:33",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "1344:5:33"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "1338:5:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1338:12:33"
					},
					"variableNames": [
					  {
						"name": "length",
						"nodeType": "YulIdentifier",
						"src": "1328:6:33"
					  }
					]
				  }
				]
			  },
			  "name": "array_length_t_string_memory_ptr",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "1300:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "1310:6:33",
				  "type": ""
				}
			  ],
			  "src": "1258:99:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1391:152:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1408:1:33",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1411:77:33",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "1401:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1401:88:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1401:88:33"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1505:1:33",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1508:4:33",
						  "type": "",
						  "value": "0x41"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "1498:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1498:15:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1498:15:33"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1529:1:33",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1532:4:33",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "1522:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1522:15:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1522:15:33"
				  }
				]
			  },
			  "name": "panic_error_0x41",
			  "nodeType": "YulFunctionDefinition",
			  "src": "1363:180:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1577:152:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1594:1:33",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1597:77:33",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "1587:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1587:88:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1587:88:33"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1691:1:33",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1694:4:33",
						  "type": "",
						  "value": "0x22"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "1684:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1684:15:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1684:15:33"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1715:1:33",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1718:4:33",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "1708:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1708:15:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1708:15:33"
				  }
				]
			  },
			  "name": "panic_error_0x22",
			  "nodeType": "YulFunctionDefinition",
			  "src": "1549:180:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1786:269:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "1796:22:33",
					"value": {
					  "arguments": [
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "1810:4:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1816:1:33",
						  "type": "",
						  "value": "2"
						}
					  ],
					  "functionName": {
						"name": "div",
						"nodeType": "YulIdentifier",
						"src": "1806:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1806:12:33"
					},
					"variableNames": [
					  {
						"name": "length",
						"nodeType": "YulIdentifier",
						"src": "1796:6:33"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "1827:38:33",
					"value": {
					  "arguments": [
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "1857:4:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1863:1:33",
						  "type": "",
						  "value": "1"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "1853:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1853:12:33"
					},
					"variables": [
					  {
						"name": "outOfPlaceEncoding",
						"nodeType": "YulTypedName",
						"src": "1831:18:33",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "1904:51:33",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "1918:27:33",
						  "value": {
							"arguments": [
							  {
								"name": "length",
								"nodeType": "YulIdentifier",
								"src": "1932:6:33"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1940:4:33",
								"type": "",
								"value": "0x7f"
							  }
							],
							"functionName": {
							  "name": "and",
							  "nodeType": "YulIdentifier",
							  "src": "1928:3:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "1928:17:33"
						  },
						  "variableNames": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "1918:6:33"
							}
						  ]
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "outOfPlaceEncoding",
						  "nodeType": "YulIdentifier",
						  "src": "1884:18:33"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "1877:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1877:26:33"
					},
					"nodeType": "YulIf",
					"src": "1874:81:33"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "2007:42:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x22",
							  "nodeType": "YulIdentifier",
							  "src": "2021:16:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "2021:18:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "2021:18:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "outOfPlaceEncoding",
						  "nodeType": "YulIdentifier",
						  "src": "1971:18:33"
						},
						{
						  "arguments": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "1994:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "2002:2:33",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "lt",
							"nodeType": "YulIdentifier",
							"src": "1991:2:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1991:14:33"
						}
					  ],
					  "functionName": {
						"name": "eq",
						"nodeType": "YulIdentifier",
						"src": "1968:2:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1968:38:33"
					},
					"nodeType": "YulIf",
					"src": "1965:84:33"
				  }
				]
			  },
			  "name": "extract_byte_array_length",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "data",
				  "nodeType": "YulTypedName",
				  "src": "1770:4:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "1779:6:33",
				  "type": ""
				}
			  ],
			  "src": "1735:320:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2115:87:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2125:11:33",
					"value": {
					  "name": "ptr",
					  "nodeType": "YulIdentifier",
					  "src": "2133:3:33"
					},
					"variableNames": [
					  {
						"name": "data",
						"nodeType": "YulIdentifier",
						"src": "2125:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2153:1:33",
						  "type": "",
						  "value": "0"
						},
						{
						  "name": "ptr",
						  "nodeType": "YulIdentifier",
						  "src": "2156:3:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "2146:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2146:14:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2146:14:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2169:26:33",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2187:1:33",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2190:4:33",
						  "type": "",
						  "value": "0x20"
						}
					  ],
					  "functionName": {
						"name": "keccak256",
						"nodeType": "YulIdentifier",
						"src": "2177:9:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2177:18:33"
					},
					"variableNames": [
					  {
						"name": "data",
						"nodeType": "YulIdentifier",
						"src": "2169:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "array_dataslot_t_string_storage",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "ptr",
				  "nodeType": "YulTypedName",
				  "src": "2102:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "data",
				  "nodeType": "YulTypedName",
				  "src": "2110:4:33",
				  "type": ""
				}
			  ],
			  "src": "2061:141:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2252:49:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2262:33:33",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "2280:5:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "2287:2:33",
							  "type": "",
							  "value": "31"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "2276:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2276:14:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2292:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "div",
						"nodeType": "YulIdentifier",
						"src": "2272:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2272:23:33"
					},
					"variableNames": [
					  {
						"name": "result",
						"nodeType": "YulIdentifier",
						"src": "2262:6:33"
					  }
					]
				  }
				]
			  },
			  "name": "divide_by_32_ceil",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2235:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "result",
				  "nodeType": "YulTypedName",
				  "src": "2245:6:33",
				  "type": ""
				}
			  ],
			  "src": "2208:93:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2360:54:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2370:37:33",
					"value": {
					  "arguments": [
						{
						  "name": "bits",
						  "nodeType": "YulIdentifier",
						  "src": "2395:4:33"
						},
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "2401:5:33"
						}
					  ],
					  "functionName": {
						"name": "shl",
						"nodeType": "YulIdentifier",
						"src": "2391:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2391:16:33"
					},
					"variableNames": [
					  {
						"name": "newValue",
						"nodeType": "YulIdentifier",
						"src": "2370:8:33"
					  }
					]
				  }
				]
			  },
			  "name": "shift_left_dynamic",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "bits",
				  "nodeType": "YulTypedName",
				  "src": "2335:4:33",
				  "type": ""
				},
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2341:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "newValue",
				  "nodeType": "YulTypedName",
				  "src": "2351:8:33",
				  "type": ""
				}
			  ],
			  "src": "2307:107:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2496:317:33",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "2506:35:33",
					"value": {
					  "arguments": [
						{
						  "name": "shiftBytes",
						  "nodeType": "YulIdentifier",
						  "src": "2527:10:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2539:1:33",
						  "type": "",
						  "value": "8"
						}
					  ],
					  "functionName": {
						"name": "mul",
						"nodeType": "YulIdentifier",
						"src": "2523:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2523:18:33"
					},
					"variables": [
					  {
						"name": "shiftBits",
						"nodeType": "YulTypedName",
						"src": "2510:9:33",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "2550:109:33",
					"value": {
					  "arguments": [
						{
						  "name": "shiftBits",
						  "nodeType": "YulIdentifier",
						  "src": "2581:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2592:66:33",
						  "type": "",
						  "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
						}
					  ],
					  "functionName": {
						"name": "shift_left_dynamic",
						"nodeType": "YulIdentifier",
						"src": "2562:18:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2562:97:33"
					},
					"variables": [
					  {
						"name": "mask",
						"nodeType": "YulTypedName",
						"src": "2554:4:33",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2668:51:33",
					"value": {
					  "arguments": [
						{
						  "name": "shiftBits",
						  "nodeType": "YulIdentifier",
						  "src": "2699:9:33"
						},
						{
						  "name": "toInsert",
						  "nodeType": "YulIdentifier",
						  "src": "2710:8:33"
						}
					  ],
					  "functionName": {
						"name": "shift_left_dynamic",
						"nodeType": "YulIdentifier",
						"src": "2680:18:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2680:39:33"
					},
					"variableNames": [
					  {
						"name": "toInsert",
						"nodeType": "YulIdentifier",
						"src": "2668:8:33"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2728:30:33",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "2741:5:33"
						},
						{
						  "arguments": [
							{
							  "name": "mask",
							  "nodeType": "YulIdentifier",
							  "src": "2752:4:33"
							}
						  ],
						  "functionName": {
							"name": "not",
							"nodeType": "YulIdentifier",
							"src": "2748:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2748:9:33"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "2737:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2737:21:33"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "2728:5:33"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2767:40:33",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "2780:5:33"
						},
						{
						  "arguments": [
							{
							  "name": "toInsert",
							  "nodeType": "YulIdentifier",
							  "src": "2791:8:33"
							},
							{
							  "name": "mask",
							  "nodeType": "YulIdentifier",
							  "src": "2801:4:33"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "2787:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2787:19:33"
						}
					  ],
					  "functionName": {
						"name": "or",
						"nodeType": "YulIdentifier",
						"src": "2777:2:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2777:30:33"
					},
					"variableNames": [
					  {
						"name": "result",
						"nodeType": "YulIdentifier",
						"src": "2767:6:33"
					  }
					]
				  }
				]
			  },
			  "name": "update_byte_slice_dynamic32",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2457:5:33",
				  "type": ""
				},
				{
				  "name": "shiftBytes",
				  "nodeType": "YulTypedName",
				  "src": "2464:10:33",
				  "type": ""
				},
				{
				  "name": "toInsert",
				  "nodeType": "YulTypedName",
				  "src": "2476:8:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "result",
				  "nodeType": "YulTypedName",
				  "src": "2489:6:33",
				  "type": ""
				}
			  ],
			  "src": "2420:393:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2864:32:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2874:16:33",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "2885:5:33"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "2874:7:33"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2846:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "2856:7:33",
				  "type": ""
				}
			  ],
			  "src": "2819:77:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2934:28:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2944:12:33",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "2951:5:33"
					},
					"variableNames": [
					  {
						"name": "ret",
						"nodeType": "YulIdentifier",
						"src": "2944:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "identity",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2920:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "ret",
				  "nodeType": "YulTypedName",
				  "src": "2930:3:33",
				  "type": ""
				}
			  ],
			  "src": "2902:60:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3028:82:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "3038:66:33",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "3096:5:33"
								}
							  ],
							  "functionName": {
								"name": "cleanup_t_uint256",
								"nodeType": "YulIdentifier",
								"src": "3078:17:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "3078:24:33"
							}
						  ],
						  "functionName": {
							"name": "identity",
							"nodeType": "YulIdentifier",
							"src": "3069:8:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3069:34:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "3051:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3051:53:33"
					},
					"variableNames": [
					  {
						"name": "converted",
						"nodeType": "YulIdentifier",
						"src": "3038:9:33"
					  }
					]
				  }
				]
			  },
			  "name": "convert_t_uint256_to_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "3008:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "converted",
				  "nodeType": "YulTypedName",
				  "src": "3018:9:33",
				  "type": ""
				}
			  ],
			  "src": "2968:142:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3163:28:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "3173:12:33",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "3180:5:33"
					},
					"variableNames": [
					  {
						"name": "ret",
						"nodeType": "YulIdentifier",
						"src": "3173:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "prepare_store_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "3149:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "ret",
				  "nodeType": "YulTypedName",
				  "src": "3159:3:33",
				  "type": ""
				}
			  ],
			  "src": "3116:75:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3273:193:33",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "3283:63:33",
					"value": {
					  "arguments": [
						{
						  "name": "value_0",
						  "nodeType": "YulIdentifier",
						  "src": "3338:7:33"
						}
					  ],
					  "functionName": {
						"name": "convert_t_uint256_to_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "3307:30:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3307:39:33"
					},
					"variables": [
					  {
						"name": "convertedValue_0",
						"nodeType": "YulTypedName",
						"src": "3287:16:33",
						"type": ""
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "slot",
						  "nodeType": "YulIdentifier",
						  "src": "3362:4:33"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "slot",
								  "nodeType": "YulIdentifier",
								  "src": "3402:4:33"
								}
							  ],
							  "functionName": {
								"name": "sload",
								"nodeType": "YulIdentifier",
								"src": "3396:5:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "3396:11:33"
							},
							{
							  "name": "offset",
							  "nodeType": "YulIdentifier",
							  "src": "3409:6:33"
							},
							{
							  "arguments": [
								{
								  "name": "convertedValue_0",
								  "nodeType": "YulIdentifier",
								  "src": "3441:16:33"
								}
							  ],
							  "functionName": {
								"name": "prepare_store_t_uint256",
								"nodeType": "YulIdentifier",
								"src": "3417:23:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "3417:41:33"
							}
						  ],
						  "functionName": {
							"name": "update_byte_slice_dynamic32",
							"nodeType": "YulIdentifier",
							"src": "3368:27:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3368:91:33"
						}
					  ],
					  "functionName": {
						"name": "sstore",
						"nodeType": "YulIdentifier",
						"src": "3355:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3355:105:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3355:105:33"
				  }
				]
			  },
			  "name": "update_storage_value_t_uint256_to_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "slot",
				  "nodeType": "YulTypedName",
				  "src": "3250:4:33",
				  "type": ""
				},
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "3256:6:33",
				  "type": ""
				},
				{
				  "name": "value_0",
				  "nodeType": "YulTypedName",
				  "src": "3264:7:33",
				  "type": ""
				}
			  ],
			  "src": "3197:269:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3521:24:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "3531:8:33",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "3538:1:33",
					  "type": "",
					  "value": "0"
					},
					"variableNames": [
					  {
						"name": "ret",
						"nodeType": "YulIdentifier",
						"src": "3531:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "zero_value_for_split_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "returnVariables": [
				{
				  "name": "ret",
				  "nodeType": "YulTypedName",
				  "src": "3517:3:33",
				  "type": ""
				}
			  ],
			  "src": "3472:73:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3604:136:33",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "3614:46:33",
					"value": {
					  "arguments": [],
					  "functionName": {
						"name": "zero_value_for_split_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "3628:30:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3628:32:33"
					},
					"variables": [
					  {
						"name": "zero_0",
						"nodeType": "YulTypedName",
						"src": "3618:6:33",
						"type": ""
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "slot",
						  "nodeType": "YulIdentifier",
						  "src": "3713:4:33"
						},
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "3719:6:33"
						},
						{
						  "name": "zero_0",
						  "nodeType": "YulIdentifier",
						  "src": "3727:6:33"
						}
					  ],
					  "functionName": {
						"name": "update_storage_value_t_uint256_to_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "3669:43:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3669:65:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3669:65:33"
				  }
				]
			  },
			  "name": "storage_set_to_zero_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "slot",
				  "nodeType": "YulTypedName",
				  "src": "3590:4:33",
				  "type": ""
				},
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "3596:6:33",
				  "type": ""
				}
			  ],
			  "src": "3551:189:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3796:136:33",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3863:63:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"name": "start",
								"nodeType": "YulIdentifier",
								"src": "3907:5:33"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3914:1:33",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "storage_set_to_zero_t_uint256",
							  "nodeType": "YulIdentifier",
							  "src": "3877:29:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "3877:39:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "3877:39:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "start",
						  "nodeType": "YulIdentifier",
						  "src": "3816:5:33"
						},
						{
						  "name": "end",
						  "nodeType": "YulIdentifier",
						  "src": "3823:3:33"
						}
					  ],
					  "functionName": {
						"name": "lt",
						"nodeType": "YulIdentifier",
						"src": "3813:2:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3813:14:33"
					},
					"nodeType": "YulForLoop",
					"post": {
					  "nodeType": "YulBlock",
					  "src": "3828:26:33",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "3830:22:33",
						  "value": {
							"arguments": [
							  {
								"name": "start",
								"nodeType": "YulIdentifier",
								"src": "3843:5:33"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3850:1:33",
								"type": "",
								"value": "1"
							  }
							],
							"functionName": {
							  "name": "add",
							  "nodeType": "YulIdentifier",
							  "src": "3839:3:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "3839:13:33"
						  },
						  "variableNames": [
							{
							  "name": "start",
							  "nodeType": "YulIdentifier",
							  "src": "3830:5:33"
							}
						  ]
						}
					  ]
					},
					"pre": {
					  "nodeType": "YulBlock",
					  "src": "3810:2:33",
					  "statements": []
					},
					"src": "3806:120:33"
				  }
				]
			  },
			  "name": "clear_storage_range_t_bytes1",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "start",
				  "nodeType": "YulTypedName",
				  "src": "3784:5:33",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "3791:3:33",
				  "type": ""
				}
			  ],
			  "src": "3746:186:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4017:464:33",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "4043:431:33",
					  "statements": [
						{
						  "nodeType": "YulVariableDeclaration",
						  "src": "4057:54:33",
						  "value": {
							"arguments": [
							  {
								"name": "array",
								"nodeType": "YulIdentifier",
								"src": "4105:5:33"
							  }
							],
							"functionName": {
							  "name": "array_dataslot_t_string_storage",
							  "nodeType": "YulIdentifier",
							  "src": "4073:31:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "4073:38:33"
						  },
						  "variables": [
							{
							  "name": "dataArea",
							  "nodeType": "YulTypedName",
							  "src": "4061:8:33",
							  "type": ""
							}
						  ]
						},
						{
						  "nodeType": "YulVariableDeclaration",
						  "src": "4124:63:33",
						  "value": {
							"arguments": [
							  {
								"name": "dataArea",
								"nodeType": "YulIdentifier",
								"src": "4147:8:33"
							  },
							  {
								"arguments": [
								  {
									"name": "startIndex",
									"nodeType": "YulIdentifier",
									"src": "4175:10:33"
								  }
								],
								"functionName": {
								  "name": "divide_by_32_ceil",
								  "nodeType": "YulIdentifier",
								  "src": "4157:17:33"
								},
								"nodeType": "YulFunctionCall",
								"src": "4157:29:33"
							  }
							],
							"functionName": {
							  "name": "add",
							  "nodeType": "YulIdentifier",
							  "src": "4143:3:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "4143:44:33"
						  },
						  "variables": [
							{
							  "name": "deleteStart",
							  "nodeType": "YulTypedName",
							  "src": "4128:11:33",
							  "type": ""
							}
						  ]
						},
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "4344:27:33",
							"statements": [
							  {
								"nodeType": "YulAssignment",
								"src": "4346:23:33",
								"value": {
								  "name": "dataArea",
								  "nodeType": "YulIdentifier",
								  "src": "4361:8:33"
								},
								"variableNames": [
								  {
									"name": "deleteStart",
									"nodeType": "YulIdentifier",
									"src": "4346:11:33"
								  }
								]
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "startIndex",
								"nodeType": "YulIdentifier",
								"src": "4328:10:33"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "4340:2:33",
								"type": "",
								"value": "32"
							  }
							],
							"functionName": {
							  "name": "lt",
							  "nodeType": "YulIdentifier",
							  "src": "4325:2:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "4325:18:33"
						  },
						  "nodeType": "YulIf",
						  "src": "4322:49:33"
						},
						{
						  "expression": {
							"arguments": [
							  {
								"name": "deleteStart",
								"nodeType": "YulIdentifier",
								"src": "4413:11:33"
							  },
							  {
								"arguments": [
								  {
									"name": "dataArea",
									"nodeType": "YulIdentifier",
									"src": "4430:8:33"
								  },
								  {
									"arguments": [
									  {
										"name": "len",
										"nodeType": "YulIdentifier",
										"src": "4458:3:33"
									  }
									],
									"functionName": {
									  "name": "divide_by_32_ceil",
									  "nodeType": "YulIdentifier",
									  "src": "4440:17:33"
									},
									"nodeType": "YulFunctionCall",
									"src": "4440:22:33"
								  }
								],
								"functionName": {
								  "name": "add",
								  "nodeType": "YulIdentifier",
								  "src": "4426:3:33"
								},
								"nodeType": "YulFunctionCall",
								"src": "4426:37:33"
							  }
							],
							"functionName": {
							  "name": "clear_storage_range_t_bytes1",
							  "nodeType": "YulIdentifier",
							  "src": "4384:28:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "4384:80:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "4384:80:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "len",
						  "nodeType": "YulIdentifier",
						  "src": "4034:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4039:2:33",
						  "type": "",
						  "value": "31"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "4031:2:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4031:11:33"
					},
					"nodeType": "YulIf",
					"src": "4028:446:33"
				  }
				]
			  },
			  "name": "clean_up_bytearray_end_slots_t_string_storage",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "array",
				  "nodeType": "YulTypedName",
				  "src": "3993:5:33",
				  "type": ""
				},
				{
				  "name": "len",
				  "nodeType": "YulTypedName",
				  "src": "4000:3:33",
				  "type": ""
				},
				{
				  "name": "startIndex",
				  "nodeType": "YulTypedName",
				  "src": "4005:10:33",
				  "type": ""
				}
			  ],
			  "src": "3938:543:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4550:54:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "4560:37:33",
					"value": {
					  "arguments": [
						{
						  "name": "bits",
						  "nodeType": "YulIdentifier",
						  "src": "4585:4:33"
						},
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "4591:5:33"
						}
					  ],
					  "functionName": {
						"name": "shr",
						"nodeType": "YulIdentifier",
						"src": "4581:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4581:16:33"
					},
					"variableNames": [
					  {
						"name": "newValue",
						"nodeType": "YulIdentifier",
						"src": "4560:8:33"
					  }
					]
				  }
				]
			  },
			  "name": "shift_right_unsigned_dynamic",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "bits",
				  "nodeType": "YulTypedName",
				  "src": "4525:4:33",
				  "type": ""
				},
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "4531:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "newValue",
				  "nodeType": "YulTypedName",
				  "src": "4541:8:33",
				  "type": ""
				}
			  ],
			  "src": "4487:117:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4661:118:33",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "4671:68:33",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "4720:1:33",
								  "type": "",
								  "value": "8"
								},
								{
								  "name": "bytes",
								  "nodeType": "YulIdentifier",
								  "src": "4723:5:33"
								}
							  ],
							  "functionName": {
								"name": "mul",
								"nodeType": "YulIdentifier",
								"src": "4716:3:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4716:13:33"
							},
							{
							  "arguments": [
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "4735:1:33",
								  "type": "",
								  "value": "0"
								}
							  ],
							  "functionName": {
								"name": "not",
								"nodeType": "YulIdentifier",
								"src": "4731:3:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4731:6:33"
							}
						  ],
						  "functionName": {
							"name": "shift_right_unsigned_dynamic",
							"nodeType": "YulIdentifier",
							"src": "4687:28:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4687:51:33"
						}
					  ],
					  "functionName": {
						"name": "not",
						"nodeType": "YulIdentifier",
						"src": "4683:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4683:56:33"
					},
					"variables": [
					  {
						"name": "mask",
						"nodeType": "YulTypedName",
						"src": "4675:4:33",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "4748:25:33",
					"value": {
					  "arguments": [
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "4762:4:33"
						},
						{
						  "name": "mask",
						  "nodeType": "YulIdentifier",
						  "src": "4768:4:33"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "4758:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4758:15:33"
					},
					"variableNames": [
					  {
						"name": "result",
						"nodeType": "YulIdentifier",
						"src": "4748:6:33"
					  }
					]
				  }
				]
			  },
			  "name": "mask_bytes_dynamic",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "data",
				  "nodeType": "YulTypedName",
				  "src": "4638:4:33",
				  "type": ""
				},
				{
				  "name": "bytes",
				  "nodeType": "YulTypedName",
				  "src": "4644:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "result",
				  "nodeType": "YulTypedName",
				  "src": "4654:6:33",
				  "type": ""
				}
			  ],
			  "src": "4610:169:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4865:214:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "4998:37:33",
					"value": {
					  "arguments": [
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "5025:4:33"
						},
						{
						  "name": "len",
						  "nodeType": "YulIdentifier",
						  "src": "5031:3:33"
						}
					  ],
					  "functionName": {
						"name": "mask_bytes_dynamic",
						"nodeType": "YulIdentifier",
						"src": "5006:18:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5006:29:33"
					},
					"variableNames": [
					  {
						"name": "data",
						"nodeType": "YulIdentifier",
						"src": "4998:4:33"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "5044:29:33",
					"value": {
					  "arguments": [
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "5055:4:33"
						},
						{
						  "arguments": [
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "5065:1:33",
							  "type": "",
							  "value": "2"
							},
							{
							  "name": "len",
							  "nodeType": "YulIdentifier",
							  "src": "5068:3:33"
							}
						  ],
						  "functionName": {
							"name": "mul",
							"nodeType": "YulIdentifier",
							"src": "5061:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5061:11:33"
						}
					  ],
					  "functionName": {
						"name": "or",
						"nodeType": "YulIdentifier",
						"src": "5052:2:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5052:21:33"
					},
					"variableNames": [
					  {
						"name": "used",
						"nodeType": "YulIdentifier",
						"src": "5044:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "extract_used_part_and_set_length_of_short_byte_array",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "data",
				  "nodeType": "YulTypedName",
				  "src": "4846:4:33",
				  "type": ""
				},
				{
				  "name": "len",
				  "nodeType": "YulTypedName",
				  "src": "4852:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "used",
				  "nodeType": "YulTypedName",
				  "src": "4860:4:33",
				  "type": ""
				}
			  ],
			  "src": "4784:295:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5176:1303:33",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "5187:51:33",
					"value": {
					  "arguments": [
						{
						  "name": "src",
						  "nodeType": "YulIdentifier",
						  "src": "5234:3:33"
						}
					  ],
					  "functionName": {
						"name": "array_length_t_string_memory_ptr",
						"nodeType": "YulIdentifier",
						"src": "5201:32:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5201:37:33"
					},
					"variables": [
					  {
						"name": "newLen",
						"nodeType": "YulTypedName",
						"src": "5191:6:33",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "5323:22:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x41",
							  "nodeType": "YulIdentifier",
							  "src": "5325:16:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "5325:18:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "5325:18:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "newLen",
						  "nodeType": "YulIdentifier",
						  "src": "5295:6:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5303:18:33",
						  "type": "",
						  "value": "0xffffffffffffffff"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "5292:2:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5292:30:33"
					},
					"nodeType": "YulIf",
					"src": "5289:56:33"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "5355:52:33",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "slot",
							  "nodeType": "YulIdentifier",
							  "src": "5401:4:33"
							}
						  ],
						  "functionName": {
							"name": "sload",
							"nodeType": "YulIdentifier",
							"src": "5395:5:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5395:11:33"
						}
					  ],
					  "functionName": {
						"name": "extract_byte_array_length",
						"nodeType": "YulIdentifier",
						"src": "5369:25:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5369:38:33"
					},
					"variables": [
					  {
						"name": "oldLen",
						"nodeType": "YulTypedName",
						"src": "5359:6:33",
						"type": ""
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "slot",
						  "nodeType": "YulIdentifier",
						  "src": "5500:4:33"
						},
						{
						  "name": "oldLen",
						  "nodeType": "YulIdentifier",
						  "src": "5506:6:33"
						},
						{
						  "name": "newLen",
						  "nodeType": "YulIdentifier",
						  "src": "5514:6:33"
						}
					  ],
					  "functionName": {
						"name": "clean_up_bytearray_end_slots_t_string_storage",
						"nodeType": "YulIdentifier",
						"src": "5454:45:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5454:67:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5454:67:33"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "5531:18:33",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "5548:1:33",
					  "type": "",
					  "value": "0"
					},
					"variables": [
					  {
						"name": "srcOffset",
						"nodeType": "YulTypedName",
						"src": "5535:9:33",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "5559:17:33",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "5572:4:33",
					  "type": "",
					  "value": "0x20"
					},
					"variableNames": [
					  {
						"name": "srcOffset",
						"nodeType": "YulIdentifier",
						"src": "5559:9:33"
					  }
					]
				  },
				  {
					"cases": [
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "5623:611:33",
						  "statements": [
							{
							  "nodeType": "YulVariableDeclaration",
							  "src": "5637:37:33",
							  "value": {
								"arguments": [
								  {
									"name": "newLen",
									"nodeType": "YulIdentifier",
									"src": "5656:6:33"
								  },
								  {
									"arguments": [
									  {
										"kind": "number",
										"nodeType": "YulLiteral",
										"src": "5668:4:33",
										"type": "",
										"value": "0x1f"
									  }
									],
									"functionName": {
									  "name": "not",
									  "nodeType": "YulIdentifier",
									  "src": "5664:3:33"
									},
									"nodeType": "YulFunctionCall",
									"src": "5664:9:33"
								  }
								],
								"functionName": {
								  "name": "and",
								  "nodeType": "YulIdentifier",
								  "src": "5652:3:33"
								},
								"nodeType": "YulFunctionCall",
								"src": "5652:22:33"
							  },
							  "variables": [
								{
								  "name": "loopEnd",
								  "nodeType": "YulTypedName",
								  "src": "5641:7:33",
								  "type": ""
								}
							  ]
							},
							{
							  "nodeType": "YulVariableDeclaration",
							  "src": "5688:51:33",
							  "value": {
								"arguments": [
								  {
									"name": "slot",
									"nodeType": "YulIdentifier",
									"src": "5734:4:33"
								  }
								],
								"functionName": {
								  "name": "array_dataslot_t_string_storage",
								  "nodeType": "YulIdentifier",
								  "src": "5702:31:33"
								},
								"nodeType": "YulFunctionCall",
								"src": "5702:37:33"
							  },
							  "variables": [
								{
								  "name": "dstPtr",
								  "nodeType": "YulTypedName",
								  "src": "5692:6:33",
								  "type": ""
								}
							  ]
							},
							{
							  "nodeType": "YulVariableDeclaration",
							  "src": "5752:10:33",
							  "value": {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "5761:1:33",
								"type": "",
								"value": "0"
							  },
							  "variables": [
								{
								  "name": "i",
								  "nodeType": "YulTypedName",
								  "src": "5756:1:33",
								  "type": ""
								}
							  ]
							},
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "5820:163:33",
								"statements": [
								  {
									"expression": {
									  "arguments": [
										{
										  "name": "dstPtr",
										  "nodeType": "YulIdentifier",
										  "src": "5845:6:33"
										},
										{
										  "arguments": [
											{
											  "arguments": [
												{
												  "name": "src",
												  "nodeType": "YulIdentifier",
												  "src": "5863:3:33"
												},
												{
												  "name": "srcOffset",
												  "nodeType": "YulIdentifier",
												  "src": "5868:9:33"
												}
											  ],
											  "functionName": {
												"name": "add",
												"nodeType": "YulIdentifier",
												"src": "5859:3:33"
											  },
											  "nodeType": "YulFunctionCall",
											  "src": "5859:19:33"
											}
										  ],
										  "functionName": {
											"name": "mload",
											"nodeType": "YulIdentifier",
											"src": "5853:5:33"
										  },
										  "nodeType": "YulFunctionCall",
										  "src": "5853:26:33"
										}
									  ],
									  "functionName": {
										"name": "sstore",
										"nodeType": "YulIdentifier",
										"src": "5838:6:33"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "5838:42:33"
									},
									"nodeType": "YulExpressionStatement",
									"src": "5838:42:33"
								  },
								  {
									"nodeType": "YulAssignment",
									"src": "5897:24:33",
									"value": {
									  "arguments": [
										{
										  "name": "dstPtr",
										  "nodeType": "YulIdentifier",
										  "src": "5911:6:33"
										},
										{
										  "kind": "number",
										  "nodeType": "YulLiteral",
										  "src": "5919:1:33",
										  "type": "",
										  "value": "1"
										}
									  ],
									  "functionName": {
										"name": "add",
										"nodeType": "YulIdentifier",
										"src": "5907:3:33"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "5907:14:33"
									},
									"variableNames": [
									  {
										"name": "dstPtr",
										"nodeType": "YulIdentifier",
										"src": "5897:6:33"
									  }
									]
								  },
								  {
									"nodeType": "YulAssignment",
									"src": "5938:31:33",
									"value": {
									  "arguments": [
										{
										  "name": "srcOffset",
										  "nodeType": "YulIdentifier",
										  "src": "5955:9:33"
										},
										{
										  "kind": "number",
										  "nodeType": "YulLiteral",
										  "src": "5966:2:33",
										  "type": "",
										  "value": "32"
										}
									  ],
									  "functionName": {
										"name": "add",
										"nodeType": "YulIdentifier",
										"src": "5951:3:33"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "5951:18:33"
									},
									"variableNames": [
									  {
										"name": "srcOffset",
										"nodeType": "YulIdentifier",
										"src": "5938:9:33"
									  }
									]
								  }
								]
							  },
							  "condition": {
								"arguments": [
								  {
									"name": "i",
									"nodeType": "YulIdentifier",
									"src": "5786:1:33"
								  },
								  {
									"name": "loopEnd",
									"nodeType": "YulIdentifier",
									"src": "5789:7:33"
								  }
								],
								"functionName": {
								  "name": "lt",
								  "nodeType": "YulIdentifier",
								  "src": "5783:2:33"
								},
								"nodeType": "YulFunctionCall",
								"src": "5783:14:33"
							  },
							  "nodeType": "YulForLoop",
							  "post": {
								"nodeType": "YulBlock",
								"src": "5798:21:33",
								"statements": [
								  {
									"nodeType": "YulAssignment",
									"src": "5800:17:33",
									"value": {
									  "arguments": [
										{
										  "name": "i",
										  "nodeType": "YulIdentifier",
										  "src": "5809:1:33"
										},
										{
										  "kind": "number",
										  "nodeType": "YulLiteral",
										  "src": "5812:4:33",
										  "type": "",
										  "value": "0x20"
										}
									  ],
									  "functionName": {
										"name": "add",
										"nodeType": "YulIdentifier",
										"src": "5805:3:33"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "5805:12:33"
									},
									"variableNames": [
									  {
										"name": "i",
										"nodeType": "YulIdentifier",
										"src": "5800:1:33"
									  }
									]
								  }
								]
							  },
							  "pre": {
								"nodeType": "YulBlock",
								"src": "5779:3:33",
								"statements": []
							  },
							  "src": "5775:208:33"
							},
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "6019:156:33",
								"statements": [
								  {
									"nodeType": "YulVariableDeclaration",
									"src": "6037:43:33",
									"value": {
									  "arguments": [
										{
										  "arguments": [
											{
											  "name": "src",
											  "nodeType": "YulIdentifier",
											  "src": "6064:3:33"
											},
											{
											  "name": "srcOffset",
											  "nodeType": "YulIdentifier",
											  "src": "6069:9:33"
											}
										  ],
										  "functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "6060:3:33"
										  },
										  "nodeType": "YulFunctionCall",
										  "src": "6060:19:33"
										}
									  ],
									  "functionName": {
										"name": "mload",
										"nodeType": "YulIdentifier",
										"src": "6054:5:33"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "6054:26:33"
									},
									"variables": [
									  {
										"name": "lastValue",
										"nodeType": "YulTypedName",
										"src": "6041:9:33",
										"type": ""
									  }
									]
								  },
								  {
									"expression": {
									  "arguments": [
										{
										  "name": "dstPtr",
										  "nodeType": "YulIdentifier",
										  "src": "6104:6:33"
										},
										{
										  "arguments": [
											{
											  "name": "lastValue",
											  "nodeType": "YulIdentifier",
											  "src": "6131:9:33"
											},
											{
											  "arguments": [
												{
												  "name": "newLen",
												  "nodeType": "YulIdentifier",
												  "src": "6146:6:33"
												},
												{
												  "kind": "number",
												  "nodeType": "YulLiteral",
												  "src": "6154:4:33",
												  "type": "",
												  "value": "0x1f"
												}
											  ],
											  "functionName": {
												"name": "and",
												"nodeType": "YulIdentifier",
												"src": "6142:3:33"
											  },
											  "nodeType": "YulFunctionCall",
											  "src": "6142:17:33"
											}
										  ],
										  "functionName": {
											"name": "mask_bytes_dynamic",
											"nodeType": "YulIdentifier",
											"src": "6112:18:33"
										  },
										  "nodeType": "YulFunctionCall",
										  "src": "6112:48:33"
										}
									  ],
									  "functionName": {
										"name": "sstore",
										"nodeType": "YulIdentifier",
										"src": "6097:6:33"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "6097:64:33"
									},
									"nodeType": "YulExpressionStatement",
									"src": "6097:64:33"
								  }
								]
							  },
							  "condition": {
								"arguments": [
								  {
									"name": "loopEnd",
									"nodeType": "YulIdentifier",
									"src": "6002:7:33"
								  },
								  {
									"name": "newLen",
									"nodeType": "YulIdentifier",
									"src": "6011:6:33"
								  }
								],
								"functionName": {
								  "name": "lt",
								  "nodeType": "YulIdentifier",
								  "src": "5999:2:33"
								},
								"nodeType": "YulFunctionCall",
								"src": "5999:19:33"
							  },
							  "nodeType": "YulIf",
							  "src": "5996:179:33"
							},
							{
							  "expression": {
								"arguments": [
								  {
									"name": "slot",
									"nodeType": "YulIdentifier",
									"src": "6195:4:33"
								  },
								  {
									"arguments": [
									  {
										"arguments": [
										  {
											"name": "newLen",
											"nodeType": "YulIdentifier",
											"src": "6209:6:33"
										  },
										  {
											"kind": "number",
											"nodeType": "YulLiteral",
											"src": "6217:1:33",
											"type": "",
											"value": "2"
										  }
										],
										"functionName": {
										  "name": "mul",
										  "nodeType": "YulIdentifier",
										  "src": "6205:3:33"
										},
										"nodeType": "YulFunctionCall",
										"src": "6205:14:33"
									  },
									  {
										"kind": "number",
										"nodeType": "YulLiteral",
										"src": "6221:1:33",
										"type": "",
										"value": "1"
									  }
									],
									"functionName": {
									  "name": "add",
									  "nodeType": "YulIdentifier",
									  "src": "6201:3:33"
									},
									"nodeType": "YulFunctionCall",
									"src": "6201:22:33"
								  }
								],
								"functionName": {
								  "name": "sstore",
								  "nodeType": "YulIdentifier",
								  "src": "6188:6:33"
								},
								"nodeType": "YulFunctionCall",
								"src": "6188:36:33"
							  },
							  "nodeType": "YulExpressionStatement",
							  "src": "6188:36:33"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "5616:618:33",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5621:1:33",
						  "type": "",
						  "value": "1"
						}
					  },
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "6251:222:33",
						  "statements": [
							{
							  "nodeType": "YulVariableDeclaration",
							  "src": "6265:14:33",
							  "value": {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "6278:1:33",
								"type": "",
								"value": "0"
							  },
							  "variables": [
								{
								  "name": "value",
								  "nodeType": "YulTypedName",
								  "src": "6269:5:33",
								  "type": ""
								}
							  ]
							},
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "6302:67:33",
								"statements": [
								  {
									"nodeType": "YulAssignment",
									"src": "6320:35:33",
									"value": {
									  "arguments": [
										{
										  "arguments": [
											{
											  "name": "src",
											  "nodeType": "YulIdentifier",
											  "src": "6339:3:33"
											},
											{
											  "name": "srcOffset",
											  "nodeType": "YulIdentifier",
											  "src": "6344:9:33"
											}
										  ],
										  "functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "6335:3:33"
										  },
										  "nodeType": "YulFunctionCall",
										  "src": "6335:19:33"
										}
									  ],
									  "functionName": {
										"name": "mload",
										"nodeType": "YulIdentifier",
										"src": "6329:5:33"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "6329:26:33"
									},
									"variableNames": [
									  {
										"name": "value",
										"nodeType": "YulIdentifier",
										"src": "6320:5:33"
									  }
									]
								  }
								]
							  },
							  "condition": {
								"name": "newLen",
								"nodeType": "YulIdentifier",
								"src": "6295:6:33"
							  },
							  "nodeType": "YulIf",
							  "src": "6292:77:33"
							},
							{
							  "expression": {
								"arguments": [
								  {
									"name": "slot",
									"nodeType": "YulIdentifier",
									"src": "6389:4:33"
								  },
								  {
									"arguments": [
									  {
										"name": "value",
										"nodeType": "YulIdentifier",
										"src": "6448:5:33"
									  },
									  {
										"name": "newLen",
										"nodeType": "YulIdentifier",
										"src": "6455:6:33"
									  }
									],
									"functionName": {
									  "name": "extract_used_part_and_set_length_of_short_byte_array",
									  "nodeType": "YulIdentifier",
									  "src": "6395:52:33"
									},
									"nodeType": "YulFunctionCall",
									"src": "6395:67:33"
								  }
								],
								"functionName": {
								  "name": "sstore",
								  "nodeType": "YulIdentifier",
								  "src": "6382:6:33"
								},
								"nodeType": "YulFunctionCall",
								"src": "6382:81:33"
							  },
							  "nodeType": "YulExpressionStatement",
							  "src": "6382:81:33"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "6243:230:33",
						"value": "default"
					  }
					],
					"expression": {
					  "arguments": [
						{
						  "name": "newLen",
						  "nodeType": "YulIdentifier",
						  "src": "5596:6:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5604:2:33",
						  "type": "",
						  "value": "31"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "5593:2:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5593:14:33"
					},
					"nodeType": "YulSwitch",
					"src": "5586:887:33"
				  }
				]
			  },
			  "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "slot",
				  "nodeType": "YulTypedName",
				  "src": "5165:4:33",
				  "type": ""
				},
				{
				  "name": "src",
				  "nodeType": "YulTypedName",
				  "src": "5171:3:33",
				  "type": ""
				}
			  ],
			  "src": "5084:1395:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6513:152:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6530:1:33",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6533:77:33",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6523:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6523:88:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6523:88:33"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6627:1:33",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6630:4:33",
						  "type": "",
						  "value": "0x11"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6620:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6620:15:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6620:15:33"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6651:1:33",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6654:4:33",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "6644:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6644:15:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6644:15:33"
				  }
				]
			  },
			  "name": "panic_error_0x11",
			  "nodeType": "YulFunctionDefinition",
			  "src": "6485:180:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6722:51:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "6732:34:33",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6757:1:33",
						  "type": "",
						  "value": "1"
						},
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "6760:5:33"
						}
					  ],
					  "functionName": {
						"name": "shr",
						"nodeType": "YulIdentifier",
						"src": "6753:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6753:13:33"
					},
					"variableNames": [
					  {
						"name": "newValue",
						"nodeType": "YulIdentifier",
						"src": "6732:8:33"
					  }
					]
				  }
				]
			  },
			  "name": "shift_right_1_unsigned",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "6703:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "newValue",
				  "nodeType": "YulTypedName",
				  "src": "6713:8:33",
				  "type": ""
				}
			  ],
			  "src": "6671:102:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6852:775:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "6862:15:33",
					"value": {
					  "name": "_power",
					  "nodeType": "YulIdentifier",
					  "src": "6871:6:33"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "6862:5:33"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "6886:14:33",
					"value": {
					  "name": "_base",
					  "nodeType": "YulIdentifier",
					  "src": "6895:5:33"
					},
					"variableNames": [
					  {
						"name": "base",
						"nodeType": "YulIdentifier",
						"src": "6886:4:33"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "6944:677:33",
					  "statements": [
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "7032:22:33",
							"statements": [
							  {
								"expression": {
								  "arguments": [],
								  "functionName": {
									"name": "panic_error_0x11",
									"nodeType": "YulIdentifier",
									"src": "7034:16:33"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "7034:18:33"
								},
								"nodeType": "YulExpressionStatement",
								"src": "7034:18:33"
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "7010:4:33"
							  },
							  {
								"arguments": [
								  {
									"name": "max",
									"nodeType": "YulIdentifier",
									"src": "7020:3:33"
								  },
								  {
									"name": "base",
									"nodeType": "YulIdentifier",
									"src": "7025:4:33"
								  }
								],
								"functionName": {
								  "name": "div",
								  "nodeType": "YulIdentifier",
								  "src": "7016:3:33"
								},
								"nodeType": "YulFunctionCall",
								"src": "7016:14:33"
							  }
							],
							"functionName": {
							  "name": "gt",
							  "nodeType": "YulIdentifier",
							  "src": "7007:2:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "7007:24:33"
						  },
						  "nodeType": "YulIf",
						  "src": "7004:50:33"
						},
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "7099:419:33",
							"statements": [
							  {
								"nodeType": "YulAssignment",
								"src": "7479:25:33",
								"value": {
								  "arguments": [
									{
									  "name": "power",
									  "nodeType": "YulIdentifier",
									  "src": "7492:5:33"
									},
									{
									  "name": "base",
									  "nodeType": "YulIdentifier",
									  "src": "7499:4:33"
									}
								  ],
								  "functionName": {
									"name": "mul",
									"nodeType": "YulIdentifier",
									"src": "7488:3:33"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "7488:16:33"
								},
								"variableNames": [
								  {
									"name": "power",
									"nodeType": "YulIdentifier",
									"src": "7479:5:33"
								  }
								]
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "exponent",
								"nodeType": "YulIdentifier",
								"src": "7074:8:33"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "7084:1:33",
								"type": "",
								"value": "1"
							  }
							],
							"functionName": {
							  "name": "and",
							  "nodeType": "YulIdentifier",
							  "src": "7070:3:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "7070:16:33"
						  },
						  "nodeType": "YulIf",
						  "src": "7067:451:33"
						},
						{
						  "nodeType": "YulAssignment",
						  "src": "7531:23:33",
						  "value": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "7543:4:33"
							  },
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "7549:4:33"
							  }
							],
							"functionName": {
							  "name": "mul",
							  "nodeType": "YulIdentifier",
							  "src": "7539:3:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "7539:15:33"
						  },
						  "variableNames": [
							{
							  "name": "base",
							  "nodeType": "YulIdentifier",
							  "src": "7531:4:33"
							}
						  ]
						},
						{
						  "nodeType": "YulAssignment",
						  "src": "7567:44:33",
						  "value": {
							"arguments": [
							  {
								"name": "exponent",
								"nodeType": "YulIdentifier",
								"src": "7602:8:33"
							  }
							],
							"functionName": {
							  "name": "shift_right_1_unsigned",
							  "nodeType": "YulIdentifier",
							  "src": "7579:22:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "7579:32:33"
						  },
						  "variableNames": [
							{
							  "name": "exponent",
							  "nodeType": "YulIdentifier",
							  "src": "7567:8:33"
							}
						  ]
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "6920:8:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6930:1:33",
						  "type": "",
						  "value": "1"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "6917:2:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6917:15:33"
					},
					"nodeType": "YulForLoop",
					"post": {
					  "nodeType": "YulBlock",
					  "src": "6933:2:33",
					  "statements": []
					},
					"pre": {
					  "nodeType": "YulBlock",
					  "src": "6913:3:33",
					  "statements": []
					},
					"src": "6909:712:33"
				  }
				]
			  },
			  "name": "checked_exp_helper",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "_power",
				  "nodeType": "YulTypedName",
				  "src": "6807:6:33",
				  "type": ""
				},
				{
				  "name": "_base",
				  "nodeType": "YulTypedName",
				  "src": "6815:5:33",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "6822:8:33",
				  "type": ""
				},
				{
				  "name": "max",
				  "nodeType": "YulTypedName",
				  "src": "6832:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "6840:5:33",
				  "type": ""
				},
				{
				  "name": "base",
				  "nodeType": "YulTypedName",
				  "src": "6847:4:33",
				  "type": ""
				}
			  ],
			  "src": "6779:848:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7693:1013:33",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "7888:20:33",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "7890:10:33",
						  "value": {
							"kind": "number",
							"nodeType": "YulLiteral",
							"src": "7899:1:33",
							"type": "",
							"value": "1"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "7890:5:33"
							}
						  ]
						},
						{
						  "nodeType": "YulLeave",
						  "src": "7901:5:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "7878:8:33"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "7871:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7871:16:33"
					},
					"nodeType": "YulIf",
					"src": "7868:40:33"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "7933:20:33",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "7935:10:33",
						  "value": {
							"kind": "number",
							"nodeType": "YulLiteral",
							"src": "7944:1:33",
							"type": "",
							"value": "0"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "7935:5:33"
							}
						  ]
						},
						{
						  "nodeType": "YulLeave",
						  "src": "7946:5:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "7927:4:33"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "7920:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7920:12:33"
					},
					"nodeType": "YulIf",
					"src": "7917:36:33"
				  },
				  {
					"cases": [
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "8063:20:33",
						  "statements": [
							{
							  "nodeType": "YulAssignment",
							  "src": "8065:10:33",
							  "value": {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "8074:1:33",
								"type": "",
								"value": "1"
							  },
							  "variableNames": [
								{
								  "name": "power",
								  "nodeType": "YulIdentifier",
								  "src": "8065:5:33"
								}
							  ]
							},
							{
							  "nodeType": "YulLeave",
							  "src": "8076:5:33"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "8056:27:33",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8061:1:33",
						  "type": "",
						  "value": "1"
						}
					  },
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "8107:176:33",
						  "statements": [
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "8142:22:33",
								"statements": [
								  {
									"expression": {
									  "arguments": [],
									  "functionName": {
										"name": "panic_error_0x11",
										"nodeType": "YulIdentifier",
										"src": "8144:16:33"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "8144:18:33"
									},
									"nodeType": "YulExpressionStatement",
									"src": "8144:18:33"
								  }
								]
							  },
							  "condition": {
								"arguments": [
								  {
									"name": "exponent",
									"nodeType": "YulIdentifier",
									"src": "8127:8:33"
								  },
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "8137:3:33",
									"type": "",
									"value": "255"
								  }
								],
								"functionName": {
								  "name": "gt",
								  "nodeType": "YulIdentifier",
								  "src": "8124:2:33"
								},
								"nodeType": "YulFunctionCall",
								"src": "8124:17:33"
							  },
							  "nodeType": "YulIf",
							  "src": "8121:43:33"
							},
							{
							  "nodeType": "YulAssignment",
							  "src": "8177:25:33",
							  "value": {
								"arguments": [
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "8190:1:33",
									"type": "",
									"value": "2"
								  },
								  {
									"name": "exponent",
									"nodeType": "YulIdentifier",
									"src": "8193:8:33"
								  }
								],
								"functionName": {
								  "name": "exp",
								  "nodeType": "YulIdentifier",
								  "src": "8186:3:33"
								},
								"nodeType": "YulFunctionCall",
								"src": "8186:16:33"
							  },
							  "variableNames": [
								{
								  "name": "power",
								  "nodeType": "YulIdentifier",
								  "src": "8177:5:33"
								}
							  ]
							},
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "8233:22:33",
								"statements": [
								  {
									"expression": {
									  "arguments": [],
									  "functionName": {
										"name": "panic_error_0x11",
										"nodeType": "YulIdentifier",
										"src": "8235:16:33"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "8235:18:33"
									},
									"nodeType": "YulExpressionStatement",
									"src": "8235:18:33"
								  }
								]
							  },
							  "condition": {
								"arguments": [
								  {
									"name": "power",
									"nodeType": "YulIdentifier",
									"src": "8221:5:33"
								  },
								  {
									"name": "max",
									"nodeType": "YulIdentifier",
									"src": "8228:3:33"
								  }
								],
								"functionName": {
								  "name": "gt",
								  "nodeType": "YulIdentifier",
								  "src": "8218:2:33"
								},
								"nodeType": "YulFunctionCall",
								"src": "8218:14:33"
							  },
							  "nodeType": "YulIf",
							  "src": "8215:40:33"
							},
							{
							  "nodeType": "YulLeave",
							  "src": "8268:5:33"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "8092:191:33",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8097:1:33",
						  "type": "",
						  "value": "2"
						}
					  }
					],
					"expression": {
					  "name": "base",
					  "nodeType": "YulIdentifier",
					  "src": "8013:4:33"
					},
					"nodeType": "YulSwitch",
					"src": "8006:277:33"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "8415:123:33",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "8429:28:33",
						  "value": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "8442:4:33"
							  },
							  {
								"name": "exponent",
								"nodeType": "YulIdentifier",
								"src": "8448:8:33"
							  }
							],
							"functionName": {
							  "name": "exp",
							  "nodeType": "YulIdentifier",
							  "src": "8438:3:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "8438:19:33"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "8429:5:33"
							}
						  ]
						},
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "8488:22:33",
							"statements": [
							  {
								"expression": {
								  "arguments": [],
								  "functionName": {
									"name": "panic_error_0x11",
									"nodeType": "YulIdentifier",
									"src": "8490:16:33"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "8490:18:33"
								},
								"nodeType": "YulExpressionStatement",
								"src": "8490:18:33"
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "power",
								"nodeType": "YulIdentifier",
								"src": "8476:5:33"
							  },
							  {
								"name": "max",
								"nodeType": "YulIdentifier",
								"src": "8483:3:33"
							  }
							],
							"functionName": {
							  "name": "gt",
							  "nodeType": "YulIdentifier",
							  "src": "8473:2:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "8473:14:33"
						  },
						  "nodeType": "YulIf",
						  "src": "8470:40:33"
						},
						{
						  "nodeType": "YulLeave",
						  "src": "8523:5:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "base",
								  "nodeType": "YulIdentifier",
								  "src": "8318:4:33"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "8324:2:33",
								  "type": "",
								  "value": "11"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "8315:2:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "8315:12:33"
							},
							{
							  "arguments": [
								{
								  "name": "exponent",
								  "nodeType": "YulIdentifier",
								  "src": "8332:8:33"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "8342:2:33",
								  "type": "",
								  "value": "78"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "8329:2:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "8329:16:33"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "8311:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8311:35:33"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "base",
								  "nodeType": "YulIdentifier",
								  "src": "8367:4:33"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "8373:3:33",
								  "type": "",
								  "value": "307"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "8364:2:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "8364:13:33"
							},
							{
							  "arguments": [
								{
								  "name": "exponent",
								  "nodeType": "YulIdentifier",
								  "src": "8382:8:33"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "8392:2:33",
								  "type": "",
								  "value": "32"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "8379:2:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "8379:16:33"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "8360:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8360:36:33"
						}
					  ],
					  "functionName": {
						"name": "or",
						"nodeType": "YulIdentifier",
						"src": "8295:2:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8295:111:33"
					},
					"nodeType": "YulIf",
					"src": "8292:246:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "8548:57:33",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8582:1:33",
						  "type": "",
						  "value": "1"
						},
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "8585:4:33"
						},
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "8591:8:33"
						},
						{
						  "name": "max",
						  "nodeType": "YulIdentifier",
						  "src": "8601:3:33"
						}
					  ],
					  "functionName": {
						"name": "checked_exp_helper",
						"nodeType": "YulIdentifier",
						"src": "8563:18:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8563:42:33"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "8548:5:33"
					  },
					  {
						"name": "base",
						"nodeType": "YulIdentifier",
						"src": "8555:4:33"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "8644:22:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "8646:16:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "8646:18:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "8646:18:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "power",
						  "nodeType": "YulIdentifier",
						  "src": "8621:5:33"
						},
						{
						  "arguments": [
							{
							  "name": "max",
							  "nodeType": "YulIdentifier",
							  "src": "8632:3:33"
							},
							{
							  "name": "base",
							  "nodeType": "YulIdentifier",
							  "src": "8637:4:33"
							}
						  ],
						  "functionName": {
							"name": "div",
							"nodeType": "YulIdentifier",
							"src": "8628:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8628:14:33"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "8618:2:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8618:25:33"
					},
					"nodeType": "YulIf",
					"src": "8615:51:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "8675:25:33",
					"value": {
					  "arguments": [
						{
						  "name": "power",
						  "nodeType": "YulIdentifier",
						  "src": "8688:5:33"
						},
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "8695:4:33"
						}
					  ],
					  "functionName": {
						"name": "mul",
						"nodeType": "YulIdentifier",
						"src": "8684:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8684:16:33"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "8675:5:33"
					  }
					]
				  }
				]
			  },
			  "name": "checked_exp_unsigned",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "base",
				  "nodeType": "YulTypedName",
				  "src": "7663:4:33",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "7669:8:33",
				  "type": ""
				},
				{
				  "name": "max",
				  "nodeType": "YulTypedName",
				  "src": "7679:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "7687:5:33",
				  "type": ""
				}
			  ],
			  "src": "7633:1073:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8755:43:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "8765:27:33",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "8780:5:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8787:4:33",
						  "type": "",
						  "value": "0xff"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "8776:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8776:16:33"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "8765:7:33"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_uint8",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "8737:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "8747:7:33",
				  "type": ""
				}
			  ],
			  "src": "8712:86:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8868:217:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "8878:31:33",
					"value": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "8904:4:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "8886:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8886:23:33"
					},
					"variableNames": [
					  {
						"name": "base",
						"nodeType": "YulIdentifier",
						"src": "8878:4:33"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "8918:37:33",
					"value": {
					  "arguments": [
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "8946:8:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint8",
						"nodeType": "YulIdentifier",
						"src": "8930:15:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8930:25:33"
					},
					"variableNames": [
					  {
						"name": "exponent",
						"nodeType": "YulIdentifier",
						"src": "8918:8:33"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "8965:113:33",
					"value": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "8995:4:33"
						},
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "9001:8:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9011:66:33",
						  "type": "",
						  "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
						}
					  ],
					  "functionName": {
						"name": "checked_exp_unsigned",
						"nodeType": "YulIdentifier",
						"src": "8974:20:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8974:104:33"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "8965:5:33"
					  }
					]
				  }
				]
			  },
			  "name": "checked_exp_t_uint256_t_uint8",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "base",
				  "nodeType": "YulTypedName",
				  "src": "8843:4:33",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "8849:8:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "8862:5:33",
				  "type": ""
				}
			  ],
			  "src": "8804:281:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9139:362:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "9149:25:33",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "9172:1:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "9154:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9154:20:33"
					},
					"variableNames": [
					  {
						"name": "x",
						"nodeType": "YulIdentifier",
						"src": "9149:1:33"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "9183:25:33",
					"value": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "9206:1:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "9188:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9188:20:33"
					},
					"variableNames": [
					  {
						"name": "y",
						"nodeType": "YulIdentifier",
						"src": "9183:1:33"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "9217:28:33",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "9240:1:33"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "9243:1:33"
						}
					  ],
					  "functionName": {
						"name": "mul",
						"nodeType": "YulIdentifier",
						"src": "9236:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9236:9:33"
					},
					"variables": [
					  {
						"name": "product_raw",
						"nodeType": "YulTypedName",
						"src": "9221:11:33",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "9254:41:33",
					"value": {
					  "arguments": [
						{
						  "name": "product_raw",
						  "nodeType": "YulIdentifier",
						  "src": "9283:11:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "9265:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9265:30:33"
					},
					"variableNames": [
					  {
						"name": "product",
						"nodeType": "YulIdentifier",
						"src": "9254:7:33"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "9472:22:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "9474:16:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "9474:18:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "9474:18:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "x",
								  "nodeType": "YulIdentifier",
								  "src": "9405:1:33"
								}
							  ],
							  "functionName": {
								"name": "iszero",
								"nodeType": "YulIdentifier",
								"src": "9398:6:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "9398:9:33"
							},
							{
							  "arguments": [
								{
								  "name": "y",
								  "nodeType": "YulIdentifier",
								  "src": "9428:1:33"
								},
								{
								  "arguments": [
									{
									  "name": "product",
									  "nodeType": "YulIdentifier",
									  "src": "9435:7:33"
									},
									{
									  "name": "x",
									  "nodeType": "YulIdentifier",
									  "src": "9444:1:33"
									}
								  ],
								  "functionName": {
									"name": "div",
									"nodeType": "YulIdentifier",
									"src": "9431:3:33"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "9431:15:33"
								}
							  ],
							  "functionName": {
								"name": "eq",
								"nodeType": "YulIdentifier",
								"src": "9425:2:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "9425:22:33"
							}
						  ],
						  "functionName": {
							"name": "or",
							"nodeType": "YulIdentifier",
							"src": "9378:2:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9378:83:33"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "9358:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9358:113:33"
					},
					"nodeType": "YulIf",
					"src": "9355:139:33"
				  }
				]
			  },
			  "name": "checked_mul_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "9122:1:33",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "9125:1:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "product",
				  "nodeType": "YulTypedName",
				  "src": "9131:7:33",
				  "type": ""
				}
			  ],
			  "src": "9091:410:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9603:73:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "9620:3:33"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "9625:6:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9613:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9613:19:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9613:19:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "9641:29:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "9660:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9665:4:33",
						  "type": "",
						  "value": "0x20"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "9656:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9656:14:33"
					},
					"variableNames": [
					  {
						"name": "updated_pos",
						"nodeType": "YulIdentifier",
						"src": "9641:11:33"
					  }
					]
				  }
				]
			  },
			  "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "9575:3:33",
				  "type": ""
				},
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "9580:6:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "updated_pos",
				  "nodeType": "YulTypedName",
				  "src": "9591:11:33",
				  "type": ""
				}
			  ],
			  "src": "9507:169:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9788:75:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "9810:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "9818:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "9806:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9806:14:33"
						},
						{
						  "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "9822:33:33",
						  "type": "",
						  "value": "ERC20: mint to the zero address"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9799:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9799:57:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9799:57:33"
				  }
				]
			  },
			  "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "9780:6:33",
				  "type": ""
				}
			  ],
			  "src": "9682:181:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10015:220:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "10025:74:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "10091:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10096:2:33",
						  "type": "",
						  "value": "31"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "10032:58:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10032:67:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "10025:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "10197:3:33"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
						"nodeType": "YulIdentifier",
						"src": "10108:88:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10108:93:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10108:93:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "10210:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "10221:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10226:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "10217:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10217:12:33"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "10210:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "10003:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "10011:3:33",
				  "type": ""
				}
			  ],
			  "src": "9869:366:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10412:248:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "10422:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "10434:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10445:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "10430:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10430:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "10422:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10469:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10480:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10465:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10465:17:33"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "10488:4:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10494:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "10484:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10484:20:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10458:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10458:47:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10458:47:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "10514:139:33",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "10648:4:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "10522:124:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10522:131:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "10514:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "10392:9:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "10407:4:33",
				  "type": ""
				}
			  ],
			  "src": "10241:419:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10710:147:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "10720:25:33",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "10743:1:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "10725:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10725:20:33"
					},
					"variableNames": [
					  {
						"name": "x",
						"nodeType": "YulIdentifier",
						"src": "10720:1:33"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "10754:25:33",
					"value": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "10777:1:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "10759:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10759:20:33"
					},
					"variableNames": [
					  {
						"name": "y",
						"nodeType": "YulIdentifier",
						"src": "10754:1:33"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "10788:16:33",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "10799:1:33"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "10802:1:33"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "10795:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10795:9:33"
					},
					"variableNames": [
					  {
						"name": "sum",
						"nodeType": "YulIdentifier",
						"src": "10788:3:33"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "10828:22:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "10830:16:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "10830:18:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "10830:18:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "10820:1:33"
						},
						{
						  "name": "sum",
						  "nodeType": "YulIdentifier",
						  "src": "10823:3:33"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "10817:2:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10817:10:33"
					},
					"nodeType": "YulIf",
					"src": "10814:36:33"
				  }
				]
			  },
			  "name": "checked_add_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "10697:1:33",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "10700:1:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "sum",
				  "nodeType": "YulTypedName",
				  "src": "10706:3:33",
				  "type": ""
				}
			  ],
			  "src": "10666:191:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10928:53:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "10945:3:33"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "10968:5:33"
							}
						  ],
						  "functionName": {
							"name": "cleanup_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "10950:17:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10950:24:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10938:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10938:37:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10938:37:33"
				  }
				]
			  },
			  "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "10916:5:33",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "10923:3:33",
				  "type": ""
				}
			  ],
			  "src": "10863:118:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "11085:124:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "11095:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "11107:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11118:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "11103:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11103:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "11095:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "11175:6:33"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11188:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11199:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11184:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11184:17:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_uint256_to_t_uint256_fromStack",
						"nodeType": "YulIdentifier",
						"src": "11131:43:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11131:71:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11131:71:33"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "11057:9:33",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "11069:6:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "11080:4:33",
				  "type": ""
				}
			  ],
			  "src": "10987:222:33"
			}
		  ]
		},
		"contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address_payable(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address_payable(value) {\n        if iszero(eq(value, cleanup_t_address_payable(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address_payable_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address_payable(value)\n    }\n\n    function abi_decode_tuple_t_address_payable_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address_payable_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function shift_right_1_unsigned(value) -> newValue {\n        newValue :=\n\n        shr(1, value)\n\n    }\n\n    function checked_exp_helper(_power, _base, exponent, max) -> power, base {\n        power := _power\n        base  := _base\n        for { } gt(exponent, 1) {}\n        {\n            // overflow check for base * base\n            if gt(base, div(max, base)) { panic_error_0x11() }\n            if and(exponent, 1)\n            {\n                // No checks for power := mul(power, base) needed, because the check\n                // for base * base above is sufficient, since:\n                // |power| <= base (proof by induction) and thus:\n                // |power * base| <= base * base <= max <= |min| (for signed)\n                // (this is equally true for signed and unsigned exp)\n                power := mul(power, base)\n            }\n            base := mul(base, base)\n            exponent := shift_right_1_unsigned(exponent)\n        }\n    }\n\n    function checked_exp_unsigned(base, exponent, max) -> power {\n        // This function currently cannot be inlined because of the\n        // \"leave\" statements. We have to improve the optimizer.\n\n        // Note that 0**0 == 1\n        if iszero(exponent) { power := 1 leave }\n        if iszero(base) { power := 0 leave }\n\n        // Specializations for small bases\n        switch base\n        // 0 is handled above\n        case 1 { power := 1 leave }\n        case 2\n        {\n            if gt(exponent, 255) { panic_error_0x11() }\n            power := exp(2, exponent)\n            if gt(power, max) { panic_error_0x11() }\n            leave\n        }\n        if or(\n            and(lt(base, 11), lt(exponent, 78)),\n            and(lt(base, 307), lt(exponent, 32))\n        )\n        {\n            power := exp(base, exponent)\n            if gt(power, max) { panic_error_0x11() }\n            leave\n        }\n\n        power, base := checked_exp_helper(1, base, exponent, max)\n\n        if gt(power, div(max, base)) { panic_error_0x11() }\n        power := mul(power, base)\n    }\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function checked_exp_t_uint256_t_uint8(base, exponent) -> power {\n        base := cleanup_t_uint256(base)\n        exponent := cleanup_t_uint8(exponent)\n\n        power := checked_exp_unsigned(base, exponent, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        let product_raw := mul(x, y)\n        product := cleanup_t_uint256(product_raw)\n\n        // overflow, if x != 0 and y != product/x\n        if iszero(\n            or(\n                iszero(x),\n                eq(y, div(product, x))\n            )\n        ) { panic_error_0x11() }\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: mint to the zero address\")\n\n    }\n\n    function abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 31)\n        store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        sum := add(x, y)\n\n        if gt(x, sum) { panic_error_0x11() }\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n}\n",
		"id": 33,
		"language": "Yul",
		"name": "#utility.yul"
	  }
	],
	"deployedGeneratedSources": [
	  {
		"ast": {
		  "nodeType": "YulBlock",
		  "src": "0:32518:33",
		  "statements": [
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "52:32:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "62:16:33",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "73:5:33"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "62:7:33"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "34:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "44:7:33",
				  "type": ""
				}
			  ],
			  "src": "7:77:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "155:53:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "172:3:33"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "195:5:33"
							}
						  ],
						  "functionName": {
							"name": "cleanup_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "177:17:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "177:24:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "165:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "165:37:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "165:37:33"
				  }
				]
			  },
			  "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "143:5:33",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "150:3:33",
				  "type": ""
				}
			  ],
			  "src": "90:118:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "312:124:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "322:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "334:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "345:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "330:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "330:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "322:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "402:6:33"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "415:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "426:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "411:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "411:17:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_uint256_to_t_uint256_fromStack",
						"nodeType": "YulIdentifier",
						"src": "358:43:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "358:71:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "358:71:33"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "284:9:33",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "296:6:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "307:4:33",
				  "type": ""
				}
			  ],
			  "src": "214:222:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "501:40:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "512:22:33",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "528:5:33"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "522:5:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "522:12:33"
					},
					"variableNames": [
					  {
						"name": "length",
						"nodeType": "YulIdentifier",
						"src": "512:6:33"
					  }
					]
				  }
				]
			  },
			  "name": "array_length_t_string_memory_ptr",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "484:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "494:6:33",
				  "type": ""
				}
			  ],
			  "src": "442:99:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "643:73:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "660:3:33"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "665:6:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "653:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "653:19:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "653:19:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "681:29:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "700:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "705:4:33",
						  "type": "",
						  "value": "0x20"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "696:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "696:14:33"
					},
					"variableNames": [
					  {
						"name": "updated_pos",
						"nodeType": "YulIdentifier",
						"src": "681:11:33"
					  }
					]
				  }
				]
			  },
			  "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "615:3:33",
				  "type": ""
				},
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "620:6:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "updated_pos",
				  "nodeType": "YulTypedName",
				  "src": "631:11:33",
				  "type": ""
				}
			  ],
			  "src": "547:169:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "784:184:33",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "794:10:33",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "803:1:33",
					  "type": "",
					  "value": "0"
					},
					"variables": [
					  {
						"name": "i",
						"nodeType": "YulTypedName",
						"src": "798:1:33",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "863:63:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"arguments": [
								  {
									"name": "dst",
									"nodeType": "YulIdentifier",
									"src": "888:3:33"
								  },
								  {
									"name": "i",
									"nodeType": "YulIdentifier",
									"src": "893:1:33"
								  }
								],
								"functionName": {
								  "name": "add",
								  "nodeType": "YulIdentifier",
								  "src": "884:3:33"
								},
								"nodeType": "YulFunctionCall",
								"src": "884:11:33"
							  },
							  {
								"arguments": [
								  {
									"arguments": [
									  {
										"name": "src",
										"nodeType": "YulIdentifier",
										"src": "907:3:33"
									  },
									  {
										"name": "i",
										"nodeType": "YulIdentifier",
										"src": "912:1:33"
									  }
									],
									"functionName": {
									  "name": "add",
									  "nodeType": "YulIdentifier",
									  "src": "903:3:33"
									},
									"nodeType": "YulFunctionCall",
									"src": "903:11:33"
								  }
								],
								"functionName": {
								  "name": "mload",
								  "nodeType": "YulIdentifier",
								  "src": "897:5:33"
								},
								"nodeType": "YulFunctionCall",
								"src": "897:18:33"
							  }
							],
							"functionName": {
							  "name": "mstore",
							  "nodeType": "YulIdentifier",
							  "src": "877:6:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "877:39:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "877:39:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "i",
						  "nodeType": "YulIdentifier",
						  "src": "824:1:33"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "827:6:33"
						}
					  ],
					  "functionName": {
						"name": "lt",
						"nodeType": "YulIdentifier",
						"src": "821:2:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "821:13:33"
					},
					"nodeType": "YulForLoop",
					"post": {
					  "nodeType": "YulBlock",
					  "src": "835:19:33",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "837:15:33",
						  "value": {
							"arguments": [
							  {
								"name": "i",
								"nodeType": "YulIdentifier",
								"src": "846:1:33"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "849:2:33",
								"type": "",
								"value": "32"
							  }
							],
							"functionName": {
							  "name": "add",
							  "nodeType": "YulIdentifier",
							  "src": "842:3:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "842:10:33"
						  },
						  "variableNames": [
							{
							  "name": "i",
							  "nodeType": "YulIdentifier",
							  "src": "837:1:33"
							}
						  ]
						}
					  ]
					},
					"pre": {
					  "nodeType": "YulBlock",
					  "src": "817:3:33",
					  "statements": []
					},
					"src": "813:113:33"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dst",
							  "nodeType": "YulIdentifier",
							  "src": "946:3:33"
							},
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "951:6:33"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "942:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "942:16:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "960:1:33",
						  "type": "",
						  "value": "0"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "935:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "935:27:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "935:27:33"
				  }
				]
			  },
			  "name": "copy_memory_to_memory_with_cleanup",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "src",
				  "nodeType": "YulTypedName",
				  "src": "766:3:33",
				  "type": ""
				},
				{
				  "name": "dst",
				  "nodeType": "YulTypedName",
				  "src": "771:3:33",
				  "type": ""
				},
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "776:6:33",
				  "type": ""
				}
			  ],
			  "src": "722:246:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1022:54:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "1032:38:33",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "1050:5:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "1057:2:33",
							  "type": "",
							  "value": "31"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "1046:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1046:14:33"
						},
						{
						  "arguments": [
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "1066:2:33",
							  "type": "",
							  "value": "31"
							}
						  ],
						  "functionName": {
							"name": "not",
							"nodeType": "YulIdentifier",
							"src": "1062:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1062:7:33"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "1042:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1042:28:33"
					},
					"variableNames": [
					  {
						"name": "result",
						"nodeType": "YulIdentifier",
						"src": "1032:6:33"
					  }
					]
				  }
				]
			  },
			  "name": "round_up_to_mul_of_32",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "1005:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "result",
				  "nodeType": "YulTypedName",
				  "src": "1015:6:33",
				  "type": ""
				}
			  ],
			  "src": "974:102:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1174:285:33",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "1184:53:33",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "1231:5:33"
						}
					  ],
					  "functionName": {
						"name": "array_length_t_string_memory_ptr",
						"nodeType": "YulIdentifier",
						"src": "1198:32:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1198:39:33"
					},
					"variables": [
					  {
						"name": "length",
						"nodeType": "YulTypedName",
						"src": "1188:6:33",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "1246:78:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "1312:3:33"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "1317:6:33"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "1253:58:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1253:71:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "1246:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "1372:5:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "1379:4:33",
							  "type": "",
							  "value": "0x20"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "1368:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1368:16:33"
						},
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "1386:3:33"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "1391:6:33"
						}
					  ],
					  "functionName": {
						"name": "copy_memory_to_memory_with_cleanup",
						"nodeType": "YulIdentifier",
						"src": "1333:34:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1333:65:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1333:65:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "1407:46:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "1418:3:33"
						},
						{
						  "arguments": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "1445:6:33"
							}
						  ],
						  "functionName": {
							"name": "round_up_to_mul_of_32",
							"nodeType": "YulIdentifier",
							"src": "1423:21:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1423:29:33"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "1414:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1414:39:33"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "1407:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "1155:5:33",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "1162:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "1170:3:33",
				  "type": ""
				}
			  ],
			  "src": "1082:377:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1583:195:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "1593:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "1605:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1616:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "1601:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1601:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "1593:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1640:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "1651:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "1636:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1636:17:33"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "1659:4:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1665:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "1655:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1655:20:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "1629:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1629:47:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1629:47:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "1685:86:33",
					"value": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "1757:6:33"
						},
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "1766:4:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "1693:63:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1693:78:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "1685:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "1555:9:33",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "1567:6:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "1578:4:33",
				  "type": ""
				}
			  ],
			  "src": "1465:313:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1824:35:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "1834:19:33",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1850:2:33",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "1844:5:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1844:9:33"
					},
					"variableNames": [
					  {
						"name": "memPtr",
						"nodeType": "YulIdentifier",
						"src": "1834:6:33"
					  }
					]
				  }
				]
			  },
			  "name": "allocate_unbounded",
			  "nodeType": "YulFunctionDefinition",
			  "returnVariables": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "1817:6:33",
				  "type": ""
				}
			  ],
			  "src": "1784:75:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1954:28:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1971:1:33",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1974:1:33",
						  "type": "",
						  "value": "0"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "1964:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1964:12:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1964:12:33"
				  }
				]
			  },
			  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
			  "nodeType": "YulFunctionDefinition",
			  "src": "1865:117:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2077:28:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2094:1:33",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2097:1:33",
						  "type": "",
						  "value": "0"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "2087:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2087:12:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2087:12:33"
				  }
				]
			  },
			  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
			  "nodeType": "YulFunctionDefinition",
			  "src": "1988:117:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2156:81:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2166:65:33",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "2181:5:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2188:42:33",
						  "type": "",
						  "value": "0xffffffffffffffffffffffffffffffffffffffff"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "2177:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2177:54:33"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "2166:7:33"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_uint160",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2138:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "2148:7:33",
				  "type": ""
				}
			  ],
			  "src": "2111:126:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2288:51:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2298:35:33",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "2327:5:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint160",
						"nodeType": "YulIdentifier",
						"src": "2309:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2309:24:33"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "2298:7:33"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2270:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "2280:7:33",
				  "type": ""
				}
			  ],
			  "src": "2243:96:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2388:79:33",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "2445:16:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2454:1:33",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2457:1:33",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "2447:6:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "2447:12:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "2447:12:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "2411:5:33"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "2436:5:33"
								}
							  ],
							  "functionName": {
								"name": "cleanup_t_address",
								"nodeType": "YulIdentifier",
								"src": "2418:17:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "2418:24:33"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "2408:2:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2408:35:33"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "2401:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2401:43:33"
					},
					"nodeType": "YulIf",
					"src": "2398:63:33"
				  }
				]
			  },
			  "name": "validator_revert_t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2381:5:33",
				  "type": ""
				}
			  ],
			  "src": "2345:122:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2525:87:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2535:29:33",
					"value": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "2557:6:33"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "2544:12:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2544:20:33"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "2535:5:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "2600:5:33"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_t_address",
						"nodeType": "YulIdentifier",
						"src": "2573:26:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2573:33:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2573:33:33"
				  }
				]
			  },
			  "name": "abi_decode_t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "2503:6:33",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "2511:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2519:5:33",
				  "type": ""
				}
			  ],
			  "src": "2473:139:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2661:79:33",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "2718:16:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2727:1:33",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2730:1:33",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "2720:6:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "2720:12:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "2720:12:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "2684:5:33"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "2709:5:33"
								}
							  ],
							  "functionName": {
								"name": "cleanup_t_uint256",
								"nodeType": "YulIdentifier",
								"src": "2691:17:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "2691:24:33"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "2681:2:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2681:35:33"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "2674:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2674:43:33"
					},
					"nodeType": "YulIf",
					"src": "2671:63:33"
				  }
				]
			  },
			  "name": "validator_revert_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2654:5:33",
				  "type": ""
				}
			  ],
			  "src": "2618:122:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2798:87:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2808:29:33",
					"value": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "2830:6:33"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "2817:12:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2817:20:33"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "2808:5:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "2873:5:33"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "2846:26:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2846:33:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2846:33:33"
				  }
				]
			  },
			  "name": "abi_decode_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "2776:6:33",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "2784:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2792:5:33",
				  "type": ""
				}
			  ],
			  "src": "2746:139:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2974:391:33",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3020:83:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "3022:77:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "3022:79:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "3022:79:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "2995:7:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "3004:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "2991:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2991:23:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3016:2:33",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "2987:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2987:32:33"
					},
					"nodeType": "YulIf",
					"src": "2984:119:33"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "3113:117:33",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "3128:15:33",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3142:1:33",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "3132:6:33",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "3157:63:33",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "3192:9:33"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "3203:6:33"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "3188:3:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "3188:22:33"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "3212:7:33"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "3167:20:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3167:53:33"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "3157:6:33"
						  }
						]
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "3240:118:33",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "3255:16:33",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3269:2:33",
						  "type": "",
						  "value": "32"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "3259:6:33",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "3285:63:33",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "3320:9:33"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "3331:6:33"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "3316:3:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "3316:22:33"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "3340:7:33"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "3295:20:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3295:53:33"
						},
						"variableNames": [
						  {
							"name": "value1",
							"nodeType": "YulIdentifier",
							"src": "3285:6:33"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_addresst_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "2936:9:33",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "2947:7:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "2959:6:33",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "2967:6:33",
				  "type": ""
				}
			  ],
			  "src": "2891:474:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3413:48:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "3423:32:33",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "3448:5:33"
							}
						  ],
						  "functionName": {
							"name": "iszero",
							"nodeType": "YulIdentifier",
							"src": "3441:6:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3441:13:33"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "3434:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3434:21:33"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "3423:7:33"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_bool",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "3395:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "3405:7:33",
				  "type": ""
				}
			  ],
			  "src": "3371:90:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3526:50:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "3543:3:33"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "3563:5:33"
							}
						  ],
						  "functionName": {
							"name": "cleanup_t_bool",
							"nodeType": "YulIdentifier",
							"src": "3548:14:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3548:21:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "3536:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3536:34:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3536:34:33"
				  }
				]
			  },
			  "name": "abi_encode_t_bool_to_t_bool_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "3514:5:33",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "3521:3:33",
				  "type": ""
				}
			  ],
			  "src": "3467:109:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3674:118:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "3684:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "3696:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3707:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "3692:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3692:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "3684:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "3758:6:33"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "3771:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "3782:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "3767:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3767:17:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_bool_to_t_bool_fromStack",
						"nodeType": "YulIdentifier",
						"src": "3720:37:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3720:65:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3720:65:33"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "3646:9:33",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "3658:6:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "3669:4:33",
				  "type": ""
				}
			  ],
			  "src": "3582:210:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3865:51:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "3875:35:33",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "3904:5:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_address",
						"nodeType": "YulIdentifier",
						"src": "3886:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3886:24:33"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "3875:7:33"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_contract$_LiquidityPool_$6417",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "3847:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "3857:7:33",
				  "type": ""
				}
			  ],
			  "src": "3798:118:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3987:101:33",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "4066:16:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "4075:1:33",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "4078:1:33",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "4068:6:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "4068:12:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "4068:12:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "4010:5:33"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "4057:5:33"
								}
							  ],
							  "functionName": {
								"name": "cleanup_t_contract$_LiquidityPool_$6417",
								"nodeType": "YulIdentifier",
								"src": "4017:39:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4017:46:33"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "4007:2:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4007:57:33"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "4000:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4000:65:33"
					},
					"nodeType": "YulIf",
					"src": "3997:85:33"
				  }
				]
			  },
			  "name": "validator_revert_t_contract$_LiquidityPool_$6417",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "3980:5:33",
				  "type": ""
				}
			  ],
			  "src": "3922:166:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4168:109:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "4178:29:33",
					"value": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "4200:6:33"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "4187:12:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4187:20:33"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "4178:5:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "4265:5:33"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_t_contract$_LiquidityPool_$6417",
						"nodeType": "YulIdentifier",
						"src": "4216:48:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4216:55:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4216:55:33"
				  }
				]
			  },
			  "name": "abi_decode_t_contract$_LiquidityPool_$6417",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "4146:6:33",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "4154:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "4162:5:33",
				  "type": ""
				}
			  ],
			  "src": "4094:183:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4371:285:33",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "4417:83:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "4419:77:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "4419:79:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "4419:79:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "4392:7:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4401:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "4388:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4388:23:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4413:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "4384:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4384:32:33"
					},
					"nodeType": "YulIf",
					"src": "4381:119:33"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "4510:139:33",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "4525:15:33",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4539:1:33",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "4529:6:33",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "4554:85:33",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "4611:9:33"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "4622:6:33"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "4607:3:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4607:22:33"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "4631:7:33"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_contract$_LiquidityPool_$6417",
							"nodeType": "YulIdentifier",
							"src": "4564:42:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4564:75:33"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "4554:6:33"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_contract$_LiquidityPool_$6417",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "4341:9:33",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "4352:7:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "4364:6:33",
				  "type": ""
				}
			  ],
			  "src": "4283:373:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4727:53:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "4744:3:33"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "4767:5:33"
							}
						  ],
						  "functionName": {
							"name": "cleanup_t_address",
							"nodeType": "YulIdentifier",
							"src": "4749:17:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4749:24:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4737:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4737:37:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4737:37:33"
				  }
				]
			  },
			  "name": "abi_encode_t_address_to_t_address_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "4715:5:33",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "4722:3:33",
				  "type": ""
				}
			  ],
			  "src": "4662:118:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4884:124:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "4894:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "4906:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4917:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "4902:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4902:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "4894:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "4974:6:33"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4987:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "4998:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "4983:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4983:17:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_address_to_t_address_fromStack",
						"nodeType": "YulIdentifier",
						"src": "4930:43:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4930:71:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4930:71:33"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "4856:9:33",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "4868:6:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "4879:4:33",
				  "type": ""
				}
			  ],
			  "src": "4786:222:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5114:519:33",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "5160:83:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "5162:77:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "5162:79:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "5162:79:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "5135:7:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "5144:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "5131:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5131:23:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5156:2:33",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "5127:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5127:32:33"
					},
					"nodeType": "YulIf",
					"src": "5124:119:33"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "5253:117:33",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "5268:15:33",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5282:1:33",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "5272:6:33",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "5297:63:33",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "5332:9:33"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "5343:6:33"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "5328:3:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "5328:22:33"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "5352:7:33"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "5307:20:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5307:53:33"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "5297:6:33"
						  }
						]
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "5380:118:33",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "5395:16:33",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5409:2:33",
						  "type": "",
						  "value": "32"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "5399:6:33",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "5425:63:33",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "5460:9:33"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "5471:6:33"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "5456:3:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "5456:22:33"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "5480:7:33"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "5435:20:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5435:53:33"
						},
						"variableNames": [
						  {
							"name": "value1",
							"nodeType": "YulIdentifier",
							"src": "5425:6:33"
						  }
						]
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "5508:118:33",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "5523:16:33",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5537:2:33",
						  "type": "",
						  "value": "64"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "5527:6:33",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "5553:63:33",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "5588:9:33"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "5599:6:33"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "5584:3:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "5584:22:33"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "5608:7:33"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "5563:20:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5563:53:33"
						},
						"variableNames": [
						  {
							"name": "value2",
							"nodeType": "YulIdentifier",
							"src": "5553:6:33"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_addresst_addresst_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "5068:9:33",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "5079:7:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "5091:6:33",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "5099:6:33",
				  "type": ""
				},
				{
				  "name": "value2",
				  "nodeType": "YulTypedName",
				  "src": "5107:6:33",
				  "type": ""
				}
			  ],
			  "src": "5014:619:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5682:43:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "5692:27:33",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "5707:5:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5714:4:33",
						  "type": "",
						  "value": "0xff"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "5703:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5703:16:33"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "5692:7:33"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_uint8",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "5664:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "5674:7:33",
				  "type": ""
				}
			  ],
			  "src": "5639:86:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5792:51:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "5809:3:33"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "5830:5:33"
							}
						  ],
						  "functionName": {
							"name": "cleanup_t_uint8",
							"nodeType": "YulIdentifier",
							"src": "5814:15:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5814:22:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5802:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5802:35:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5802:35:33"
				  }
				]
			  },
			  "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "5780:5:33",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "5787:3:33",
				  "type": ""
				}
			  ],
			  "src": "5731:112:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5943:120:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "5953:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5965:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5976:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "5961:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5961:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "5953:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "6029:6:33"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "6042:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "6053:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "6038:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6038:17:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_uint8_to_t_uint8_fromStack",
						"nodeType": "YulIdentifier",
						"src": "5989:39:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5989:67:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5989:67:33"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "5915:9:33",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "5927:6:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "5938:4:33",
				  "type": ""
				}
			  ],
			  "src": "5849:214:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6135:263:33",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "6181:83:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "6183:77:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "6183:79:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "6183:79:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "6156:7:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "6165:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "6152:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6152:23:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6177:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "6148:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6148:32:33"
					},
					"nodeType": "YulIf",
					"src": "6145:119:33"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "6274:117:33",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "6289:15:33",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6303:1:33",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "6293:6:33",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "6318:63:33",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "6353:9:33"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "6364:6:33"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "6349:3:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "6349:22:33"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "6373:7:33"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "6328:20:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6328:53:33"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "6318:6:33"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "6105:9:33",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "6116:7:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "6128:6:33",
				  "type": ""
				}
			  ],
			  "src": "6069:329:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6457:51:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "6467:35:33",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "6496:5:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint160",
						"nodeType": "YulIdentifier",
						"src": "6478:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6478:24:33"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "6467:7:33"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_address_payable",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "6439:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "6449:7:33",
				  "type": ""
				}
			  ],
			  "src": "6404:104:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6595:61:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "6612:3:33"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "6643:5:33"
							}
						  ],
						  "functionName": {
							"name": "cleanup_t_address_payable",
							"nodeType": "YulIdentifier",
							"src": "6617:25:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6617:32:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6605:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6605:45:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6605:45:33"
				  }
				]
			  },
			  "name": "abi_encode_t_address_payable_to_t_address_payable_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "6583:5:33",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "6590:3:33",
				  "type": ""
				}
			  ],
			  "src": "6514:142:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6776:140:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "6786:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "6798:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6809:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "6794:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6794:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "6786:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "6882:6:33"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "6895:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "6906:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "6891:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6891:17:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_address_payable_to_t_address_payable_fromStack",
						"nodeType": "YulIdentifier",
						"src": "6822:59:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6822:87:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6822:87:33"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_address_payable__to_t_address_payable__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "6748:9:33",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "6760:6:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "6771:4:33",
				  "type": ""
				}
			  ],
			  "src": "6662:254:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7005:391:33",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "7051:83:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "7053:77:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "7053:79:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "7053:79:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "7026:7:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "7035:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "7022:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7022:23:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7047:2:33",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "7018:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7018:32:33"
					},
					"nodeType": "YulIf",
					"src": "7015:119:33"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "7144:117:33",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "7159:15:33",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7173:1:33",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "7163:6:33",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "7188:63:33",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "7223:9:33"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "7234:6:33"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "7219:3:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "7219:22:33"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "7243:7:33"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "7198:20:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7198:53:33"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "7188:6:33"
						  }
						]
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "7271:118:33",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "7286:16:33",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7300:2:33",
						  "type": "",
						  "value": "32"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "7290:6:33",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "7316:63:33",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "7351:9:33"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "7362:6:33"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "7347:3:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "7347:22:33"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "7371:7:33"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "7326:20:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7326:53:33"
						},
						"variableNames": [
						  {
							"name": "value1",
							"nodeType": "YulIdentifier",
							"src": "7316:6:33"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_addresst_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "6967:9:33",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "6978:7:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "6990:6:33",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "6998:6:33",
				  "type": ""
				}
			  ],
			  "src": "6922:474:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7430:152:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7447:1:33",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7450:77:33",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "7440:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7440:88:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "7440:88:33"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7544:1:33",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7547:4:33",
						  "type": "",
						  "value": "0x22"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "7537:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7537:15:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "7537:15:33"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7568:1:33",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7571:4:33",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "7561:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7561:15:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "7561:15:33"
				  }
				]
			  },
			  "name": "panic_error_0x22",
			  "nodeType": "YulFunctionDefinition",
			  "src": "7402:180:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7639:269:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "7649:22:33",
					"value": {
					  "arguments": [
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "7663:4:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7669:1:33",
						  "type": "",
						  "value": "2"
						}
					  ],
					  "functionName": {
						"name": "div",
						"nodeType": "YulIdentifier",
						"src": "7659:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7659:12:33"
					},
					"variableNames": [
					  {
						"name": "length",
						"nodeType": "YulIdentifier",
						"src": "7649:6:33"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "7680:38:33",
					"value": {
					  "arguments": [
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "7710:4:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7716:1:33",
						  "type": "",
						  "value": "1"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "7706:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7706:12:33"
					},
					"variables": [
					  {
						"name": "outOfPlaceEncoding",
						"nodeType": "YulTypedName",
						"src": "7684:18:33",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "7757:51:33",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "7771:27:33",
						  "value": {
							"arguments": [
							  {
								"name": "length",
								"nodeType": "YulIdentifier",
								"src": "7785:6:33"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "7793:4:33",
								"type": "",
								"value": "0x7f"
							  }
							],
							"functionName": {
							  "name": "and",
							  "nodeType": "YulIdentifier",
							  "src": "7781:3:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "7781:17:33"
						  },
						  "variableNames": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "7771:6:33"
							}
						  ]
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "outOfPlaceEncoding",
						  "nodeType": "YulIdentifier",
						  "src": "7737:18:33"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "7730:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7730:26:33"
					},
					"nodeType": "YulIf",
					"src": "7727:81:33"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "7860:42:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x22",
							  "nodeType": "YulIdentifier",
							  "src": "7874:16:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "7874:18:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "7874:18:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "outOfPlaceEncoding",
						  "nodeType": "YulIdentifier",
						  "src": "7824:18:33"
						},
						{
						  "arguments": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "7847:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "7855:2:33",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "lt",
							"nodeType": "YulIdentifier",
							"src": "7844:2:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7844:14:33"
						}
					  ],
					  "functionName": {
						"name": "eq",
						"nodeType": "YulIdentifier",
						"src": "7821:2:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7821:38:33"
					},
					"nodeType": "YulIf",
					"src": "7818:84:33"
				  }
				]
			  },
			  "name": "extract_byte_array_length",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "data",
				  "nodeType": "YulTypedName",
				  "src": "7623:4:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "7632:6:33",
				  "type": ""
				}
			  ],
			  "src": "7588:320:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8020:54:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "8042:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "8050:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "8038:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8038:14:33"
						},
						{
						  "hexValue": "4f574e45525f4f4e4c59",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "8054:12:33",
						  "type": "",
						  "value": "OWNER_ONLY"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8031:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8031:36:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8031:36:33"
				  }
				]
			  },
			  "name": "store_literal_in_memory_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "8012:6:33",
				  "type": ""
				}
			  ],
			  "src": "7914:160:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8226:220:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "8236:74:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "8302:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8307:2:33",
						  "type": "",
						  "value": "10"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "8243:58:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8243:67:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "8236:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "8408:3:33"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20",
						"nodeType": "YulIdentifier",
						"src": "8319:88:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8319:93:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8319:93:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "8421:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "8432:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8437:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "8428:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8428:12:33"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "8421:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "8214:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "8222:3:33",
				  "type": ""
				}
			  ],
			  "src": "8080:366:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8623:248:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "8633:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "8645:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8656:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "8641:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8641:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "8633:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "8680:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "8691:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "8676:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8676:17:33"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "8699:4:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "8705:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "8695:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8695:20:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8669:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8669:47:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8669:47:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "8725:139:33",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "8859:4:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "8733:124:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8733:131:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "8725:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "8603:9:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "8618:4:33",
				  "type": ""
				}
			  ],
			  "src": "8452:419:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8983:61:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "9005:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "9013:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "9001:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9001:14:33"
						},
						{
						  "hexValue": "46554e44535f4d4f5645445f544f5f4c50",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "9017:19:33",
						  "type": "",
						  "value": "FUNDS_MOVED_TO_LP"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8994:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8994:43:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8994:43:33"
				  }
				]
			  },
			  "name": "store_literal_in_memory_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "8975:6:33",
				  "type": ""
				}
			  ],
			  "src": "8877:167:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9196:220:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "9206:74:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "9272:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9277:2:33",
						  "type": "",
						  "value": "17"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "9213:58:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9213:67:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "9206:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "9378:3:33"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c",
						"nodeType": "YulIdentifier",
						"src": "9289:88:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9289:93:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9289:93:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "9391:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "9402:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9407:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "9398:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9398:12:33"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "9391:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "9184:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "9192:3:33",
				  "type": ""
				}
			  ],
			  "src": "9050:366:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9593:248:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "9603:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "9615:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9626:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "9611:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9611:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "9603:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "9650:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "9661:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "9646:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9646:17:33"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "9669:4:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "9675:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "9665:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9665:20:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9639:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9639:47:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9639:47:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "9695:139:33",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "9829:4:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "9703:124:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9703:131:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "9695:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "9573:9:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "9588:4:33",
				  "type": ""
				}
			  ],
			  "src": "9422:419:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9875:152:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9892:1:33",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9895:77:33",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9885:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9885:88:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9885:88:33"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9989:1:33",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9992:4:33",
						  "type": "",
						  "value": "0x11"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9982:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9982:15:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9982:15:33"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10013:1:33",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10016:4:33",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "10006:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10006:15:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10006:15:33"
				  }
				]
			  },
			  "name": "panic_error_0x11",
			  "nodeType": "YulFunctionDefinition",
			  "src": "9847:180:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10081:362:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "10091:25:33",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "10114:1:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "10096:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10096:20:33"
					},
					"variableNames": [
					  {
						"name": "x",
						"nodeType": "YulIdentifier",
						"src": "10091:1:33"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "10125:25:33",
					"value": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "10148:1:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "10130:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10130:20:33"
					},
					"variableNames": [
					  {
						"name": "y",
						"nodeType": "YulIdentifier",
						"src": "10125:1:33"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "10159:28:33",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "10182:1:33"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "10185:1:33"
						}
					  ],
					  "functionName": {
						"name": "mul",
						"nodeType": "YulIdentifier",
						"src": "10178:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10178:9:33"
					},
					"variables": [
					  {
						"name": "product_raw",
						"nodeType": "YulTypedName",
						"src": "10163:11:33",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "10196:41:33",
					"value": {
					  "arguments": [
						{
						  "name": "product_raw",
						  "nodeType": "YulIdentifier",
						  "src": "10225:11:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "10207:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10207:30:33"
					},
					"variableNames": [
					  {
						"name": "product",
						"nodeType": "YulIdentifier",
						"src": "10196:7:33"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "10414:22:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "10416:16:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "10416:18:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "10416:18:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "x",
								  "nodeType": "YulIdentifier",
								  "src": "10347:1:33"
								}
							  ],
							  "functionName": {
								"name": "iszero",
								"nodeType": "YulIdentifier",
								"src": "10340:6:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "10340:9:33"
							},
							{
							  "arguments": [
								{
								  "name": "y",
								  "nodeType": "YulIdentifier",
								  "src": "10370:1:33"
								},
								{
								  "arguments": [
									{
									  "name": "product",
									  "nodeType": "YulIdentifier",
									  "src": "10377:7:33"
									},
									{
									  "name": "x",
									  "nodeType": "YulIdentifier",
									  "src": "10386:1:33"
									}
								  ],
								  "functionName": {
									"name": "div",
									"nodeType": "YulIdentifier",
									"src": "10373:3:33"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "10373:15:33"
								}
							  ],
							  "functionName": {
								"name": "eq",
								"nodeType": "YulIdentifier",
								"src": "10367:2:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "10367:22:33"
							}
						  ],
						  "functionName": {
							"name": "or",
							"nodeType": "YulIdentifier",
							"src": "10320:2:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10320:83:33"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "10300:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10300:113:33"
					},
					"nodeType": "YulIf",
					"src": "10297:139:33"
				  }
				]
			  },
			  "name": "checked_mul_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "10064:1:33",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "10067:1:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "product",
				  "nodeType": "YulTypedName",
				  "src": "10073:7:33",
				  "type": ""
				}
			  ],
			  "src": "10033:410:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10575:206:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "10585:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "10597:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10608:2:33",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "10593:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10593:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "10585:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "10665:6:33"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10678:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10689:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10674:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10674:17:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_uint256_to_t_uint256_fromStack",
						"nodeType": "YulIdentifier",
						"src": "10621:43:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10621:71:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10621:71:33"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value1",
						  "nodeType": "YulIdentifier",
						  "src": "10746:6:33"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10759:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10770:2:33",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10755:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10755:18:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_address_to_t_address_fromStack",
						"nodeType": "YulIdentifier",
						"src": "10702:43:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10702:72:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10702:72:33"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "10539:9:33",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "10551:6:33",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "10559:6:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "10570:4:33",
				  "type": ""
				}
			  ],
			  "src": "10449:332:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10893:57:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "10915:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10923:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10911:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10911:14:33"
						},
						{
						  "hexValue": "4d41504c454e46545f4f4e4c59",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "10927:15:33",
						  "type": "",
						  "value": "MAPLENFT_ONLY"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10904:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10904:39:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10904:39:33"
				  }
				]
			  },
			  "name": "store_literal_in_memory_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "10885:6:33",
				  "type": ""
				}
			  ],
			  "src": "10787:163:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "11102:220:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "11112:74:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "11178:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11183:2:33",
						  "type": "",
						  "value": "13"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "11119:58:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11119:67:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "11112:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "11284:3:33"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2",
						"nodeType": "YulIdentifier",
						"src": "11195:88:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11195:93:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11195:93:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "11297:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "11308:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11313:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "11304:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11304:12:33"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "11297:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "11090:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "11098:3:33",
				  "type": ""
				}
			  ],
			  "src": "10956:366:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "11499:248:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "11509:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "11521:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11532:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "11517:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11517:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "11509:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11556:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11567:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11552:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11552:17:33"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "11575:4:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11581:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "11571:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11571:20:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "11545:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11545:47:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11545:47:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "11601:139:33",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "11735:4:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "11609:124:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11609:131:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "11601:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "11479:9:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "11494:4:33",
				  "type": ""
				}
			  ],
			  "src": "11328:419:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "11797:147:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "11807:25:33",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "11830:1:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "11812:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11812:20:33"
					},
					"variableNames": [
					  {
						"name": "x",
						"nodeType": "YulIdentifier",
						"src": "11807:1:33"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "11841:25:33",
					"value": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "11864:1:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "11846:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11846:20:33"
					},
					"variableNames": [
					  {
						"name": "y",
						"nodeType": "YulIdentifier",
						"src": "11841:1:33"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "11875:16:33",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "11886:1:33"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "11889:1:33"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "11882:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11882:9:33"
					},
					"variableNames": [
					  {
						"name": "sum",
						"nodeType": "YulIdentifier",
						"src": "11875:3:33"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "11915:22:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "11917:16:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "11917:18:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "11917:18:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "11907:1:33"
						},
						{
						  "name": "sum",
						  "nodeType": "YulIdentifier",
						  "src": "11910:3:33"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "11904:2:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11904:10:33"
					},
					"nodeType": "YulIf",
					"src": "11901:36:33"
				  }
				]
			  },
			  "name": "checked_add_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "11784:1:33",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "11787:1:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "sum",
				  "nodeType": "YulTypedName",
				  "src": "11793:3:33",
				  "type": ""
				}
			  ],
			  "src": "11753:191:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12056:75:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "12078:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "12086:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "12074:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "12074:14:33"
						},
						{
						  "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "12090:33:33",
						  "type": "",
						  "value": "ERC20: mint to the zero address"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12067:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12067:57:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12067:57:33"
				  }
				]
			  },
			  "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "12048:6:33",
				  "type": ""
				}
			  ],
			  "src": "11950:181:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12283:220:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "12293:74:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "12359:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12364:2:33",
						  "type": "",
						  "value": "31"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "12300:58:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12300:67:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "12293:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "12465:3:33"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
						"nodeType": "YulIdentifier",
						"src": "12376:88:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12376:93:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12376:93:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "12478:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "12489:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12494:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "12485:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12485:12:33"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "12478:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "12271:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "12279:3:33",
				  "type": ""
				}
			  ],
			  "src": "12137:366:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12680:248:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "12690:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "12702:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12713:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "12698:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12698:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "12690:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "12737:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "12748:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "12733:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "12733:17:33"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "12756:4:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "12762:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "12752:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "12752:20:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12726:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12726:47:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12726:47:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "12782:139:33",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "12916:4:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "12790:124:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12790:131:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "12782:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "12660:9:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "12675:4:33",
				  "type": ""
				}
			  ],
			  "src": "12509:419:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13040:60:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "13062:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "13070:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "13058:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "13058:14:33"
						},
						{
						  "hexValue": "41424f56455f4d41585f535550504c59",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "13074:18:33",
						  "type": "",
						  "value": "ABOVE_MAX_SUPPLY"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "13051:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13051:42:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "13051:42:33"
				  }
				]
			  },
			  "name": "store_literal_in_memory_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "13032:6:33",
				  "type": ""
				}
			  ],
			  "src": "12934:166:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13252:220:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "13262:74:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "13328:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "13333:2:33",
						  "type": "",
						  "value": "16"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "13269:58:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13269:67:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "13262:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "13434:3:33"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff",
						"nodeType": "YulIdentifier",
						"src": "13345:88:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13345:93:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "13345:93:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "13447:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "13458:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "13463:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "13454:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13454:12:33"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "13447:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "13240:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "13248:3:33",
				  "type": ""
				}
			  ],
			  "src": "13106:366:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13649:248:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "13659:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "13671:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "13682:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "13667:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13667:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "13659:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "13706:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "13717:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "13702:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "13702:17:33"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "13725:4:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "13731:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "13721:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "13721:20:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "13695:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13695:47:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "13695:47:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "13751:139:33",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "13885:4:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "13759:124:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13759:131:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "13751:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "13629:9:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "13644:4:33",
				  "type": ""
				}
			  ],
			  "src": "13478:419:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13954:51:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "13964:34:33",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "13989:1:33",
						  "type": "",
						  "value": "1"
						},
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "13992:5:33"
						}
					  ],
					  "functionName": {
						"name": "shr",
						"nodeType": "YulIdentifier",
						"src": "13985:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13985:13:33"
					},
					"variableNames": [
					  {
						"name": "newValue",
						"nodeType": "YulIdentifier",
						"src": "13964:8:33"
					  }
					]
				  }
				]
			  },
			  "name": "shift_right_1_unsigned",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "13935:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "newValue",
				  "nodeType": "YulTypedName",
				  "src": "13945:8:33",
				  "type": ""
				}
			  ],
			  "src": "13903:102:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "14084:775:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "14094:15:33",
					"value": {
					  "name": "_power",
					  "nodeType": "YulIdentifier",
					  "src": "14103:6:33"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "14094:5:33"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "14118:14:33",
					"value": {
					  "name": "_base",
					  "nodeType": "YulIdentifier",
					  "src": "14127:5:33"
					},
					"variableNames": [
					  {
						"name": "base",
						"nodeType": "YulIdentifier",
						"src": "14118:4:33"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "14176:677:33",
					  "statements": [
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "14264:22:33",
							"statements": [
							  {
								"expression": {
								  "arguments": [],
								  "functionName": {
									"name": "panic_error_0x11",
									"nodeType": "YulIdentifier",
									"src": "14266:16:33"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "14266:18:33"
								},
								"nodeType": "YulExpressionStatement",
								"src": "14266:18:33"
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "14242:4:33"
							  },
							  {
								"arguments": [
								  {
									"name": "max",
									"nodeType": "YulIdentifier",
									"src": "14252:3:33"
								  },
								  {
									"name": "base",
									"nodeType": "YulIdentifier",
									"src": "14257:4:33"
								  }
								],
								"functionName": {
								  "name": "div",
								  "nodeType": "YulIdentifier",
								  "src": "14248:3:33"
								},
								"nodeType": "YulFunctionCall",
								"src": "14248:14:33"
							  }
							],
							"functionName": {
							  "name": "gt",
							  "nodeType": "YulIdentifier",
							  "src": "14239:2:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "14239:24:33"
						  },
						  "nodeType": "YulIf",
						  "src": "14236:50:33"
						},
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "14331:419:33",
							"statements": [
							  {
								"nodeType": "YulAssignment",
								"src": "14711:25:33",
								"value": {
								  "arguments": [
									{
									  "name": "power",
									  "nodeType": "YulIdentifier",
									  "src": "14724:5:33"
									},
									{
									  "name": "base",
									  "nodeType": "YulIdentifier",
									  "src": "14731:4:33"
									}
								  ],
								  "functionName": {
									"name": "mul",
									"nodeType": "YulIdentifier",
									"src": "14720:3:33"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "14720:16:33"
								},
								"variableNames": [
								  {
									"name": "power",
									"nodeType": "YulIdentifier",
									"src": "14711:5:33"
								  }
								]
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "exponent",
								"nodeType": "YulIdentifier",
								"src": "14306:8:33"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "14316:1:33",
								"type": "",
								"value": "1"
							  }
							],
							"functionName": {
							  "name": "and",
							  "nodeType": "YulIdentifier",
							  "src": "14302:3:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "14302:16:33"
						  },
						  "nodeType": "YulIf",
						  "src": "14299:451:33"
						},
						{
						  "nodeType": "YulAssignment",
						  "src": "14763:23:33",
						  "value": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "14775:4:33"
							  },
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "14781:4:33"
							  }
							],
							"functionName": {
							  "name": "mul",
							  "nodeType": "YulIdentifier",
							  "src": "14771:3:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "14771:15:33"
						  },
						  "variableNames": [
							{
							  "name": "base",
							  "nodeType": "YulIdentifier",
							  "src": "14763:4:33"
							}
						  ]
						},
						{
						  "nodeType": "YulAssignment",
						  "src": "14799:44:33",
						  "value": {
							"arguments": [
							  {
								"name": "exponent",
								"nodeType": "YulIdentifier",
								"src": "14834:8:33"
							  }
							],
							"functionName": {
							  "name": "shift_right_1_unsigned",
							  "nodeType": "YulIdentifier",
							  "src": "14811:22:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "14811:32:33"
						  },
						  "variableNames": [
							{
							  "name": "exponent",
							  "nodeType": "YulIdentifier",
							  "src": "14799:8:33"
							}
						  ]
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "14152:8:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "14162:1:33",
						  "type": "",
						  "value": "1"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "14149:2:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "14149:15:33"
					},
					"nodeType": "YulForLoop",
					"post": {
					  "nodeType": "YulBlock",
					  "src": "14165:2:33",
					  "statements": []
					},
					"pre": {
					  "nodeType": "YulBlock",
					  "src": "14145:3:33",
					  "statements": []
					},
					"src": "14141:712:33"
				  }
				]
			  },
			  "name": "checked_exp_helper",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "_power",
				  "nodeType": "YulTypedName",
				  "src": "14039:6:33",
				  "type": ""
				},
				{
				  "name": "_base",
				  "nodeType": "YulTypedName",
				  "src": "14047:5:33",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "14054:8:33",
				  "type": ""
				},
				{
				  "name": "max",
				  "nodeType": "YulTypedName",
				  "src": "14064:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "14072:5:33",
				  "type": ""
				},
				{
				  "name": "base",
				  "nodeType": "YulTypedName",
				  "src": "14079:4:33",
				  "type": ""
				}
			  ],
			  "src": "14011:848:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "14925:1013:33",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "15120:20:33",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "15122:10:33",
						  "value": {
							"kind": "number",
							"nodeType": "YulLiteral",
							"src": "15131:1:33",
							"type": "",
							"value": "1"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "15122:5:33"
							}
						  ]
						},
						{
						  "nodeType": "YulLeave",
						  "src": "15133:5:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "15110:8:33"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "15103:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15103:16:33"
					},
					"nodeType": "YulIf",
					"src": "15100:40:33"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "15165:20:33",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "15167:10:33",
						  "value": {
							"kind": "number",
							"nodeType": "YulLiteral",
							"src": "15176:1:33",
							"type": "",
							"value": "0"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "15167:5:33"
							}
						  ]
						},
						{
						  "nodeType": "YulLeave",
						  "src": "15178:5:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "15159:4:33"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "15152:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15152:12:33"
					},
					"nodeType": "YulIf",
					"src": "15149:36:33"
				  },
				  {
					"cases": [
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "15295:20:33",
						  "statements": [
							{
							  "nodeType": "YulAssignment",
							  "src": "15297:10:33",
							  "value": {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "15306:1:33",
								"type": "",
								"value": "1"
							  },
							  "variableNames": [
								{
								  "name": "power",
								  "nodeType": "YulIdentifier",
								  "src": "15297:5:33"
								}
							  ]
							},
							{
							  "nodeType": "YulLeave",
							  "src": "15308:5:33"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "15288:27:33",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "15293:1:33",
						  "type": "",
						  "value": "1"
						}
					  },
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "15339:176:33",
						  "statements": [
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "15374:22:33",
								"statements": [
								  {
									"expression": {
									  "arguments": [],
									  "functionName": {
										"name": "panic_error_0x11",
										"nodeType": "YulIdentifier",
										"src": "15376:16:33"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "15376:18:33"
									},
									"nodeType": "YulExpressionStatement",
									"src": "15376:18:33"
								  }
								]
							  },
							  "condition": {
								"arguments": [
								  {
									"name": "exponent",
									"nodeType": "YulIdentifier",
									"src": "15359:8:33"
								  },
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "15369:3:33",
									"type": "",
									"value": "255"
								  }
								],
								"functionName": {
								  "name": "gt",
								  "nodeType": "YulIdentifier",
								  "src": "15356:2:33"
								},
								"nodeType": "YulFunctionCall",
								"src": "15356:17:33"
							  },
							  "nodeType": "YulIf",
							  "src": "15353:43:33"
							},
							{
							  "nodeType": "YulAssignment",
							  "src": "15409:25:33",
							  "value": {
								"arguments": [
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "15422:1:33",
									"type": "",
									"value": "2"
								  },
								  {
									"name": "exponent",
									"nodeType": "YulIdentifier",
									"src": "15425:8:33"
								  }
								],
								"functionName": {
								  "name": "exp",
								  "nodeType": "YulIdentifier",
								  "src": "15418:3:33"
								},
								"nodeType": "YulFunctionCall",
								"src": "15418:16:33"
							  },
							  "variableNames": [
								{
								  "name": "power",
								  "nodeType": "YulIdentifier",
								  "src": "15409:5:33"
								}
							  ]
							},
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "15465:22:33",
								"statements": [
								  {
									"expression": {
									  "arguments": [],
									  "functionName": {
										"name": "panic_error_0x11",
										"nodeType": "YulIdentifier",
										"src": "15467:16:33"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "15467:18:33"
									},
									"nodeType": "YulExpressionStatement",
									"src": "15467:18:33"
								  }
								]
							  },
							  "condition": {
								"arguments": [
								  {
									"name": "power",
									"nodeType": "YulIdentifier",
									"src": "15453:5:33"
								  },
								  {
									"name": "max",
									"nodeType": "YulIdentifier",
									"src": "15460:3:33"
								  }
								],
								"functionName": {
								  "name": "gt",
								  "nodeType": "YulIdentifier",
								  "src": "15450:2:33"
								},
								"nodeType": "YulFunctionCall",
								"src": "15450:14:33"
							  },
							  "nodeType": "YulIf",
							  "src": "15447:40:33"
							},
							{
							  "nodeType": "YulLeave",
							  "src": "15500:5:33"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "15324:191:33",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "15329:1:33",
						  "type": "",
						  "value": "2"
						}
					  }
					],
					"expression": {
					  "name": "base",
					  "nodeType": "YulIdentifier",
					  "src": "15245:4:33"
					},
					"nodeType": "YulSwitch",
					"src": "15238:277:33"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "15647:123:33",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "15661:28:33",
						  "value": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "15674:4:33"
							  },
							  {
								"name": "exponent",
								"nodeType": "YulIdentifier",
								"src": "15680:8:33"
							  }
							],
							"functionName": {
							  "name": "exp",
							  "nodeType": "YulIdentifier",
							  "src": "15670:3:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "15670:19:33"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "15661:5:33"
							}
						  ]
						},
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "15720:22:33",
							"statements": [
							  {
								"expression": {
								  "arguments": [],
								  "functionName": {
									"name": "panic_error_0x11",
									"nodeType": "YulIdentifier",
									"src": "15722:16:33"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "15722:18:33"
								},
								"nodeType": "YulExpressionStatement",
								"src": "15722:18:33"
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "power",
								"nodeType": "YulIdentifier",
								"src": "15708:5:33"
							  },
							  {
								"name": "max",
								"nodeType": "YulIdentifier",
								"src": "15715:3:33"
							  }
							],
							"functionName": {
							  "name": "gt",
							  "nodeType": "YulIdentifier",
							  "src": "15705:2:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "15705:14:33"
						  },
						  "nodeType": "YulIf",
						  "src": "15702:40:33"
						},
						{
						  "nodeType": "YulLeave",
						  "src": "15755:5:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "base",
								  "nodeType": "YulIdentifier",
								  "src": "15550:4:33"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "15556:2:33",
								  "type": "",
								  "value": "11"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "15547:2:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "15547:12:33"
							},
							{
							  "arguments": [
								{
								  "name": "exponent",
								  "nodeType": "YulIdentifier",
								  "src": "15564:8:33"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "15574:2:33",
								  "type": "",
								  "value": "78"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "15561:2:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "15561:16:33"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "15543:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "15543:35:33"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "base",
								  "nodeType": "YulIdentifier",
								  "src": "15599:4:33"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "15605:3:33",
								  "type": "",
								  "value": "307"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "15596:2:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "15596:13:33"
							},
							{
							  "arguments": [
								{
								  "name": "exponent",
								  "nodeType": "YulIdentifier",
								  "src": "15614:8:33"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "15624:2:33",
								  "type": "",
								  "value": "32"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "15611:2:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "15611:16:33"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "15592:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "15592:36:33"
						}
					  ],
					  "functionName": {
						"name": "or",
						"nodeType": "YulIdentifier",
						"src": "15527:2:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15527:111:33"
					},
					"nodeType": "YulIf",
					"src": "15524:246:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "15780:57:33",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "15814:1:33",
						  "type": "",
						  "value": "1"
						},
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "15817:4:33"
						},
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "15823:8:33"
						},
						{
						  "name": "max",
						  "nodeType": "YulIdentifier",
						  "src": "15833:3:33"
						}
					  ],
					  "functionName": {
						"name": "checked_exp_helper",
						"nodeType": "YulIdentifier",
						"src": "15795:18:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15795:42:33"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "15780:5:33"
					  },
					  {
						"name": "base",
						"nodeType": "YulIdentifier",
						"src": "15787:4:33"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "15876:22:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "15878:16:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "15878:18:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "15878:18:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "power",
						  "nodeType": "YulIdentifier",
						  "src": "15853:5:33"
						},
						{
						  "arguments": [
							{
							  "name": "max",
							  "nodeType": "YulIdentifier",
							  "src": "15864:3:33"
							},
							{
							  "name": "base",
							  "nodeType": "YulIdentifier",
							  "src": "15869:4:33"
							}
						  ],
						  "functionName": {
							"name": "div",
							"nodeType": "YulIdentifier",
							"src": "15860:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "15860:14:33"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "15850:2:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15850:25:33"
					},
					"nodeType": "YulIf",
					"src": "15847:51:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "15907:25:33",
					"value": {
					  "arguments": [
						{
						  "name": "power",
						  "nodeType": "YulIdentifier",
						  "src": "15920:5:33"
						},
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "15927:4:33"
						}
					  ],
					  "functionName": {
						"name": "mul",
						"nodeType": "YulIdentifier",
						"src": "15916:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15916:16:33"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "15907:5:33"
					  }
					]
				  }
				]
			  },
			  "name": "checked_exp_unsigned",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "base",
				  "nodeType": "YulTypedName",
				  "src": "14895:4:33",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "14901:8:33",
				  "type": ""
				},
				{
				  "name": "max",
				  "nodeType": "YulTypedName",
				  "src": "14911:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "14919:5:33",
				  "type": ""
				}
			  ],
			  "src": "14865:1073:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "16008:217:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "16018:31:33",
					"value": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "16044:4:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "16026:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16026:23:33"
					},
					"variableNames": [
					  {
						"name": "base",
						"nodeType": "YulIdentifier",
						"src": "16018:4:33"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "16058:37:33",
					"value": {
					  "arguments": [
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "16086:8:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint8",
						"nodeType": "YulIdentifier",
						"src": "16070:15:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16070:25:33"
					},
					"variableNames": [
					  {
						"name": "exponent",
						"nodeType": "YulIdentifier",
						"src": "16058:8:33"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "16105:113:33",
					"value": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "16135:4:33"
						},
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "16141:8:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "16151:66:33",
						  "type": "",
						  "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
						}
					  ],
					  "functionName": {
						"name": "checked_exp_unsigned",
						"nodeType": "YulIdentifier",
						"src": "16114:20:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16114:104:33"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "16105:5:33"
					  }
					]
				  }
				]
			  },
			  "name": "checked_exp_t_uint256_t_uint8",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "base",
				  "nodeType": "YulTypedName",
				  "src": "15983:4:33",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "15989:8:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "16002:5:33",
				  "type": ""
				}
			  ],
			  "src": "15944:281:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "16337:55:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "16359:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "16367:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "16355:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "16355:14:33"
						},
						{
						  "hexValue": "57524954455f4f4e434521",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "16371:13:33",
						  "type": "",
						  "value": "WRITE_ONCE!"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "16348:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16348:37:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "16348:37:33"
				  }
				]
			  },
			  "name": "store_literal_in_memory_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "16329:6:33",
				  "type": ""
				}
			  ],
			  "src": "16231:161:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "16544:220:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "16554:74:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "16620:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "16625:2:33",
						  "type": "",
						  "value": "11"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "16561:58:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16561:67:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "16554:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "16726:3:33"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
						"nodeType": "YulIdentifier",
						"src": "16637:88:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16637:93:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "16637:93:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "16739:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "16750:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "16755:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "16746:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16746:12:33"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "16739:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "16532:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "16540:3:33",
				  "type": ""
				}
			  ],
			  "src": "16398:366:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "16941:248:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "16951:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "16963:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "16974:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "16959:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16959:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "16951:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "16998:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "17009:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "16994:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "16994:17:33"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "17017:4:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "17023:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "17013:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "17013:20:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "16987:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16987:47:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "16987:47:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "17043:139:33",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "17177:4:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "17051:124:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "17051:131:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "17043:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "16921:9:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "16936:4:33",
				  "type": ""
				}
			  ],
			  "src": "16770:419:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "17301:59:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "17323:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "17331:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "17319:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "17319:14:33"
						},
						{
						  "hexValue": "434f4e54524143545f504155534544",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "17335:17:33",
						  "type": "",
						  "value": "CONTRACT_PAUSED"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "17312:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "17312:41:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "17312:41:33"
				  }
				]
			  },
			  "name": "store_literal_in_memory_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "17293:6:33",
				  "type": ""
				}
			  ],
			  "src": "17195:165:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "17512:220:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "17522:74:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "17588:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "17593:2:33",
						  "type": "",
						  "value": "15"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "17529:58:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "17529:67:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "17522:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "17694:3:33"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3",
						"nodeType": "YulIdentifier",
						"src": "17605:88:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "17605:93:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "17605:93:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "17707:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "17718:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "17723:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "17714:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "17714:12:33"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "17707:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "17500:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "17508:3:33",
				  "type": ""
				}
			  ],
			  "src": "17366:366:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "17909:248:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "17919:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "17931:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "17942:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "17927:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "17927:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "17919:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "17966:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "17977:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "17962:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "17962:17:33"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "17985:4:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "17991:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "17981:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "17981:20:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "17955:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "17955:47:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "17955:47:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "18011:139:33",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "18145:4:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "18019:124:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18019:131:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "18011:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "17889:9:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "17904:4:33",
				  "type": ""
				}
			  ],
			  "src": "17738:419:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "18269:62:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "18291:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "18299:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "18287:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "18287:14:33"
						},
						{
						  "hexValue": "4e4f5f415641494c41424c455f46554e4453",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "18303:20:33",
						  "type": "",
						  "value": "NO_AVAILABLE_FUNDS"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "18280:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18280:44:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "18280:44:33"
				  }
				]
			  },
			  "name": "store_literal_in_memory_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "18261:6:33",
				  "type": ""
				}
			  ],
			  "src": "18163:168:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "18483:220:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "18493:74:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "18559:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "18564:2:33",
						  "type": "",
						  "value": "18"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "18500:58:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18500:67:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "18493:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "18665:3:33"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64",
						"nodeType": "YulIdentifier",
						"src": "18576:88:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18576:93:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "18576:93:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "18678:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "18689:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "18694:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "18685:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18685:12:33"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "18678:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "18471:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "18479:3:33",
				  "type": ""
				}
			  ],
			  "src": "18337:366:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "18880:248:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "18890:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "18902:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "18913:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "18898:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18898:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "18890:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "18937:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "18948:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "18933:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "18933:17:33"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "18956:4:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "18962:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "18952:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "18952:20:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "18926:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18926:47:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "18926:47:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "18982:139:33",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "19116:4:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "18990:124:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18990:131:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "18982:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "18860:9:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "18875:4:33",
				  "type": ""
				}
			  ],
			  "src": "18709:419:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "19240:60:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "19262:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "19270:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "19258:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "19258:14:33"
						},
						{
						  "hexValue": "4e6f7420726577617264546f6b656e2e",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "19274:18:33",
						  "type": "",
						  "value": "Not rewardToken."
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "19251:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19251:42:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "19251:42:33"
				  }
				]
			  },
			  "name": "store_literal_in_memory_0b30354e57513ff952ecf07981d939391700e68f173d33c7bc1a2fa4bbcc7e2b",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "19232:6:33",
				  "type": ""
				}
			  ],
			  "src": "19134:166:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "19452:220:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "19462:74:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "19528:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "19533:2:33",
						  "type": "",
						  "value": "16"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "19469:58:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19469:67:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "19462:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "19634:3:33"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_0b30354e57513ff952ecf07981d939391700e68f173d33c7bc1a2fa4bbcc7e2b",
						"nodeType": "YulIdentifier",
						"src": "19545:88:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19545:93:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "19545:93:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "19647:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "19658:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "19663:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "19654:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19654:12:33"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "19647:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_0b30354e57513ff952ecf07981d939391700e68f173d33c7bc1a2fa4bbcc7e2b_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "19440:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "19448:3:33",
				  "type": ""
				}
			  ],
			  "src": "19306:366:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "19849:248:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "19859:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "19871:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "19882:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "19867:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19867:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "19859:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "19906:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "19917:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "19902:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "19902:17:33"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "19925:4:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "19931:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "19921:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "19921:20:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "19895:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19895:47:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "19895:47:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "19951:139:33",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "20085:4:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_0b30354e57513ff952ecf07981d939391700e68f173d33c7bc1a2fa4bbcc7e2b_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "19959:124:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19959:131:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "19951:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_0b30354e57513ff952ecf07981d939391700e68f173d33c7bc1a2fa4bbcc7e2b__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "19829:9:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "19844:4:33",
				  "type": ""
				}
			  ],
			  "src": "19678:419:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "20209:118:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "20231:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "20239:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "20227:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "20227:14:33"
						},
						{
						  "hexValue": "45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "20243:34:33",
						  "type": "",
						  "value": "ERC20: decreased allowance below"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "20220:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20220:58:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "20220:58:33"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "20299:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "20307:2:33",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "20295:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "20295:15:33"
						},
						{
						  "hexValue": "207a65726f",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "20312:7:33",
						  "type": "",
						  "value": " zero"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "20288:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20288:32:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "20288:32:33"
				  }
				]
			  },
			  "name": "store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "20201:6:33",
				  "type": ""
				}
			  ],
			  "src": "20103:224:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "20479:220:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "20489:74:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "20555:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "20560:2:33",
						  "type": "",
						  "value": "37"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "20496:58:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20496:67:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "20489:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "20661:3:33"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8",
						"nodeType": "YulIdentifier",
						"src": "20572:88:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20572:93:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "20572:93:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "20674:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "20685:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "20690:2:33",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "20681:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20681:12:33"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "20674:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "20467:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "20475:3:33",
				  "type": ""
				}
			  ],
			  "src": "20333:366:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "20876:248:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "20886:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "20898:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "20909:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "20894:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20894:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "20886:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "20933:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "20944:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "20929:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "20929:17:33"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "20952:4:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "20958:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "20948:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "20948:20:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "20922:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20922:47:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "20922:47:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "20978:139:33",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "21112:4:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "20986:124:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20986:131:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "20978:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "20856:9:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "20871:4:33",
				  "type": ""
				}
			  ],
			  "src": "20705:419:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "21236:64:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "21258:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "21266:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "21254:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "21254:14:33"
						},
						{
						  "hexValue": "524f555445525f4f525f4d41504c455f4f4e4c59",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "21270:22:33",
						  "type": "",
						  "value": "ROUTER_OR_MAPLE_ONLY"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "21247:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "21247:46:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "21247:46:33"
				  }
				]
			  },
			  "name": "store_literal_in_memory_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "21228:6:33",
				  "type": ""
				}
			  ],
			  "src": "21130:170:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "21452:220:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "21462:74:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "21528:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "21533:2:33",
						  "type": "",
						  "value": "20"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "21469:58:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "21469:67:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "21462:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "21634:3:33"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c",
						"nodeType": "YulIdentifier",
						"src": "21545:88:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "21545:93:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "21545:93:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "21647:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "21658:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "21663:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "21654:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "21654:12:33"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "21647:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "21440:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "21448:3:33",
				  "type": ""
				}
			  ],
			  "src": "21306:366:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "21849:248:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "21859:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "21871:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "21882:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "21867:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "21867:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "21859:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "21906:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "21917:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "21902:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "21902:17:33"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "21925:4:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "21931:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "21921:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "21921:20:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "21895:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "21895:47:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "21895:47:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "21951:139:33",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "22085:4:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "21959:124:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "21959:131:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "21951:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "21829:9:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "21844:4:33",
				  "type": ""
				}
			  ],
			  "src": "21678:419:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "22209:117:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "22231:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "22239:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "22227:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "22227:14:33"
						},
						{
						  "hexValue": "45524332303a20617070726f76652066726f6d20746865207a65726f20616464",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "22243:34:33",
						  "type": "",
						  "value": "ERC20: approve from the zero add"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "22220:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "22220:58:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "22220:58:33"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "22299:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "22307:2:33",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "22295:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "22295:15:33"
						},
						{
						  "hexValue": "72657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "22312:6:33",
						  "type": "",
						  "value": "ress"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "22288:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "22288:31:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "22288:31:33"
				  }
				]
			  },
			  "name": "store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "22201:6:33",
				  "type": ""
				}
			  ],
			  "src": "22103:223:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "22478:220:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "22488:74:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "22554:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "22559:2:33",
						  "type": "",
						  "value": "36"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "22495:58:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "22495:67:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "22488:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "22660:3:33"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208",
						"nodeType": "YulIdentifier",
						"src": "22571:88:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "22571:93:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "22571:93:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "22673:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "22684:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "22689:2:33",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "22680:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "22680:12:33"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "22673:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "22466:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "22474:3:33",
				  "type": ""
				}
			  ],
			  "src": "22332:366:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "22875:248:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "22885:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "22897:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "22908:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "22893:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "22893:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "22885:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "22932:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "22943:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "22928:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "22928:17:33"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "22951:4:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "22957:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "22947:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "22947:20:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "22921:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "22921:47:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "22921:47:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "22977:139:33",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "23111:4:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "22985:124:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "22985:131:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "22977:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "22855:9:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "22870:4:33",
				  "type": ""
				}
			  ],
			  "src": "22704:419:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "23235:115:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "23257:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "23265:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "23253:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "23253:14:33"
						},
						{
						  "hexValue": "45524332303a20617070726f766520746f20746865207a65726f206164647265",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "23269:34:33",
						  "type": "",
						  "value": "ERC20: approve to the zero addre"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "23246:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "23246:58:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "23246:58:33"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "23325:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "23333:2:33",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "23321:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "23321:15:33"
						},
						{
						  "hexValue": "7373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "23338:4:33",
						  "type": "",
						  "value": "ss"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "23314:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "23314:29:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "23314:29:33"
				  }
				]
			  },
			  "name": "store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "23227:6:33",
				  "type": ""
				}
			  ],
			  "src": "23129:221:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "23502:220:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "23512:74:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "23578:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "23583:2:33",
						  "type": "",
						  "value": "34"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "23519:58:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "23519:67:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "23512:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "23684:3:33"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029",
						"nodeType": "YulIdentifier",
						"src": "23595:88:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "23595:93:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "23595:93:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "23697:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "23708:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "23713:2:33",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "23704:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "23704:12:33"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "23697:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "23490:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "23498:3:33",
				  "type": ""
				}
			  ],
			  "src": "23356:366:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "23899:248:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "23909:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "23921:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "23932:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "23917:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "23917:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "23909:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "23956:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "23967:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "23952:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "23952:17:33"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "23975:4:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "23981:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "23971:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "23971:20:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "23945:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "23945:47:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "23945:47:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "24001:139:33",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "24135:4:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "24009:124:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24009:131:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "24001:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "23879:9:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "23894:4:33",
				  "type": ""
				}
			  ],
			  "src": "23728:419:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "24259:118:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "24281:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "24289:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "24277:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "24277:14:33"
						},
						{
						  "hexValue": "45524332303a207472616e736665722066726f6d20746865207a65726f206164",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "24293:34:33",
						  "type": "",
						  "value": "ERC20: transfer from the zero ad"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "24270:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24270:58:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "24270:58:33"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "24349:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "24357:2:33",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "24345:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "24345:15:33"
						},
						{
						  "hexValue": "6472657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "24362:7:33",
						  "type": "",
						  "value": "dress"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "24338:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24338:32:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "24338:32:33"
				  }
				]
			  },
			  "name": "store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "24251:6:33",
				  "type": ""
				}
			  ],
			  "src": "24153:224:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "24529:220:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "24539:74:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "24605:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "24610:2:33",
						  "type": "",
						  "value": "37"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "24546:58:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24546:67:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "24539:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "24711:3:33"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea",
						"nodeType": "YulIdentifier",
						"src": "24622:88:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24622:93:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "24622:93:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "24724:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "24735:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "24740:2:33",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "24731:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24731:12:33"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "24724:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "24517:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "24525:3:33",
				  "type": ""
				}
			  ],
			  "src": "24383:366:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "24926:248:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "24936:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "24948:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "24959:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "24944:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24944:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "24936:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "24983:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "24994:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "24979:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "24979:17:33"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "25002:4:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "25008:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "24998:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "24998:20:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "24972:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24972:47:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "24972:47:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "25028:139:33",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "25162:4:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "25036:124:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25036:131:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "25028:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "24906:9:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "24921:4:33",
				  "type": ""
				}
			  ],
			  "src": "24755:419:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "25286:116:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "25308:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "25316:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "25304:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "25304:14:33"
						},
						{
						  "hexValue": "45524332303a207472616e7366657220746f20746865207a65726f2061646472",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "25320:34:33",
						  "type": "",
						  "value": "ERC20: transfer to the zero addr"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "25297:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25297:58:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "25297:58:33"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "25376:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "25384:2:33",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "25372:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "25372:15:33"
						},
						{
						  "hexValue": "657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "25389:5:33",
						  "type": "",
						  "value": "ess"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "25365:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25365:30:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "25365:30:33"
				  }
				]
			  },
			  "name": "store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "25278:6:33",
				  "type": ""
				}
			  ],
			  "src": "25180:222:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "25554:220:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "25564:74:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "25630:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "25635:2:33",
						  "type": "",
						  "value": "35"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "25571:58:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25571:67:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "25564:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "25736:3:33"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f",
						"nodeType": "YulIdentifier",
						"src": "25647:88:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25647:93:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "25647:93:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "25749:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "25760:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "25765:2:33",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "25756:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25756:12:33"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "25749:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "25542:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "25550:3:33",
				  "type": ""
				}
			  ],
			  "src": "25408:366:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "25951:248:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "25961:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "25973:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "25984:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "25969:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25969:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "25961:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "26008:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "26019:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "26004:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "26004:17:33"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "26027:4:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "26033:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "26023:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "26023:20:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "25997:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25997:47:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "25997:47:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "26053:139:33",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "26187:4:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "26061:124:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26061:131:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "26053:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "25931:9:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "25946:4:33",
				  "type": ""
				}
			  ],
			  "src": "25780:419:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "26311:119:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "26333:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "26341:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "26329:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "26329:14:33"
						},
						{
						  "hexValue": "45524332303a207472616e7366657220616d6f756e7420657863656564732062",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "26345:34:33",
						  "type": "",
						  "value": "ERC20: transfer amount exceeds b"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "26322:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26322:58:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "26322:58:33"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "26401:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "26409:2:33",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "26397:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "26397:15:33"
						},
						{
						  "hexValue": "616c616e6365",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "26414:8:33",
						  "type": "",
						  "value": "alance"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "26390:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26390:33:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "26390:33:33"
				  }
				]
			  },
			  "name": "store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "26303:6:33",
				  "type": ""
				}
			  ],
			  "src": "26205:225:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "26582:220:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "26592:74:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "26658:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "26663:2:33",
						  "type": "",
						  "value": "38"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "26599:58:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26599:67:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "26592:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "26764:3:33"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6",
						"nodeType": "YulIdentifier",
						"src": "26675:88:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26675:93:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "26675:93:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "26777:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "26788:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "26793:2:33",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "26784:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26784:12:33"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "26777:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "26570:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "26578:3:33",
				  "type": ""
				}
			  ],
			  "src": "26436:366:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "26979:248:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "26989:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "27001:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "27012:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "26997:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26997:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "26989:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "27036:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "27047:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "27032:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "27032:17:33"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "27055:4:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "27061:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "27051:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "27051:20:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "27025:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27025:47:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "27025:47:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "27081:139:33",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "27215:4:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "27089:124:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27089:131:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "27081:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "26959:9:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "26974:4:33",
				  "type": ""
				}
			  ],
			  "src": "26808:419:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "27339:114:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "27361:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "27369:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "27357:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "27357:14:33"
						},
						{
						  "hexValue": "45524332303a206275726e2066726f6d20746865207a65726f20616464726573",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "27373:34:33",
						  "type": "",
						  "value": "ERC20: burn from the zero addres"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "27350:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27350:58:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "27350:58:33"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "27429:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "27437:2:33",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "27425:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "27425:15:33"
						},
						{
						  "hexValue": "73",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "27442:3:33",
						  "type": "",
						  "value": "s"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "27418:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27418:28:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "27418:28:33"
				  }
				]
			  },
			  "name": "store_literal_in_memory_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "27331:6:33",
				  "type": ""
				}
			  ],
			  "src": "27233:220:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "27605:220:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "27615:74:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "27681:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "27686:2:33",
						  "type": "",
						  "value": "33"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "27622:58:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27622:67:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "27615:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "27787:3:33"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f",
						"nodeType": "YulIdentifier",
						"src": "27698:88:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27698:93:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "27698:93:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "27800:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "27811:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "27816:2:33",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "27807:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27807:12:33"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "27800:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "27593:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "27601:3:33",
				  "type": ""
				}
			  ],
			  "src": "27459:366:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "28002:248:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "28012:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "28024:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "28035:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "28020:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28020:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "28012:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "28059:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "28070:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "28055:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "28055:17:33"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "28078:4:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "28084:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "28074:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "28074:20:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "28048:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28048:47:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "28048:47:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "28104:139:33",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "28238:4:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "28112:124:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28112:131:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "28104:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "27982:9:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "27997:4:33",
				  "type": ""
				}
			  ],
			  "src": "27831:419:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "28362:115:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "28384:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "28392:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "28380:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "28380:14:33"
						},
						{
						  "hexValue": "45524332303a206275726e20616d6f756e7420657863656564732062616c616e",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "28396:34:33",
						  "type": "",
						  "value": "ERC20: burn amount exceeds balan"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "28373:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28373:58:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "28373:58:33"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "28452:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "28460:2:33",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "28448:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "28448:15:33"
						},
						{
						  "hexValue": "6365",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "28465:4:33",
						  "type": "",
						  "value": "ce"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "28441:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28441:29:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "28441:29:33"
				  }
				]
			  },
			  "name": "store_literal_in_memory_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "28354:6:33",
				  "type": ""
				}
			  ],
			  "src": "28256:221:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "28629:220:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "28639:74:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "28705:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "28710:2:33",
						  "type": "",
						  "value": "34"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "28646:58:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28646:67:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "28639:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "28811:3:33"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd",
						"nodeType": "YulIdentifier",
						"src": "28722:88:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28722:93:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "28722:93:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "28824:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "28835:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "28840:2:33",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "28831:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28831:12:33"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "28824:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "28617:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "28625:3:33",
				  "type": ""
				}
			  ],
			  "src": "28483:366:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "29026:248:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "29036:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "29048:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "29059:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "29044:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29044:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "29036:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "29083:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "29094:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "29079:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "29079:17:33"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "29102:4:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "29108:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "29098:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "29098:20:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "29072:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29072:47:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "29072:47:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "29128:139:33",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "29262:4:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "29136:124:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29136:131:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "29128:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "29006:9:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "29021:4:33",
				  "type": ""
				}
			  ],
			  "src": "28855:419:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "29325:149:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "29335:25:33",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "29358:1:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "29340:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29340:20:33"
					},
					"variableNames": [
					  {
						"name": "x",
						"nodeType": "YulIdentifier",
						"src": "29335:1:33"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "29369:25:33",
					"value": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "29392:1:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "29374:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29374:20:33"
					},
					"variableNames": [
					  {
						"name": "y",
						"nodeType": "YulIdentifier",
						"src": "29369:1:33"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "29403:17:33",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "29415:1:33"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "29418:1:33"
						}
					  ],
					  "functionName": {
						"name": "sub",
						"nodeType": "YulIdentifier",
						"src": "29411:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29411:9:33"
					},
					"variableNames": [
					  {
						"name": "diff",
						"nodeType": "YulIdentifier",
						"src": "29403:4:33"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "29445:22:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "29447:16:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "29447:18:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "29447:18:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "diff",
						  "nodeType": "YulIdentifier",
						  "src": "29436:4:33"
						},
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "29442:1:33"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "29433:2:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29433:11:33"
					},
					"nodeType": "YulIf",
					"src": "29430:37:33"
				  }
				]
			  },
			  "name": "checked_sub_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "29311:1:33",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "29314:1:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "diff",
				  "nodeType": "YulTypedName",
				  "src": "29320:4:33",
				  "type": ""
				}
			  ],
			  "src": "29280:194:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "29586:73:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "29608:6:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "29616:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "29604:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "29604:14:33"
						},
						{
						  "hexValue": "45524332303a20696e73756666696369656e7420616c6c6f77616e6365",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "29620:31:33",
						  "type": "",
						  "value": "ERC20: insufficient allowance"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "29597:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29597:55:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "29597:55:33"
				  }
				]
			  },
			  "name": "store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "29578:6:33",
				  "type": ""
				}
			  ],
			  "src": "29480:179:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "29811:220:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "29821:74:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "29887:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "29892:2:33",
						  "type": "",
						  "value": "29"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "29828:58:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29828:67:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "29821:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "29993:3:33"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe",
						"nodeType": "YulIdentifier",
						"src": "29904:88:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29904:93:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "29904:93:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "30006:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "30017:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "30022:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "30013:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "30013:12:33"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "30006:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "29799:3:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "29807:3:33",
				  "type": ""
				}
			  ],
			  "src": "29665:366:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "30208:248:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "30218:26:33",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "30230:9:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "30241:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "30226:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "30226:18:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "30218:4:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "30265:9:33"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "30276:1:33",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "30261:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "30261:17:33"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "30284:4:33"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "30290:9:33"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "30280:3:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "30280:20:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "30254:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "30254:47:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "30254:47:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "30310:139:33",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "30444:4:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "30318:124:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "30318:131:33"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "30310:4:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "30188:9:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "30203:4:33",
				  "type": ""
				}
			  ],
			  "src": "30037:419:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "30490:152:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "30507:1:33",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "30510:77:33",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "30500:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "30500:88:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "30500:88:33"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "30604:1:33",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "30607:4:33",
						  "type": "",
						  "value": "0x12"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "30597:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "30597:15:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "30597:15:33"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "30628:1:33",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "30631:4:33",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "30621:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "30621:15:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "30621:15:33"
				  }
				]
			  },
			  "name": "panic_error_0x12",
			  "nodeType": "YulFunctionDefinition",
			  "src": "30462:180:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "30690:143:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "30700:25:33",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "30723:1:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "30705:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "30705:20:33"
					},
					"variableNames": [
					  {
						"name": "x",
						"nodeType": "YulIdentifier",
						"src": "30700:1:33"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "30734:25:33",
					"value": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "30757:1:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "30739:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "30739:20:33"
					},
					"variableNames": [
					  {
						"name": "y",
						"nodeType": "YulIdentifier",
						"src": "30734:1:33"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "30781:22:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x12",
							  "nodeType": "YulIdentifier",
							  "src": "30783:16:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "30783:18:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "30783:18:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "30778:1:33"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "30771:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "30771:9:33"
					},
					"nodeType": "YulIf",
					"src": "30768:35:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "30813:14:33",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "30822:1:33"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "30825:1:33"
						}
					  ],
					  "functionName": {
						"name": "div",
						"nodeType": "YulIdentifier",
						"src": "30818:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "30818:9:33"
					},
					"variableNames": [
					  {
						"name": "r",
						"nodeType": "YulIdentifier",
						"src": "30813:1:33"
					  }
					]
				  }
				]
			  },
			  "name": "checked_div_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "30679:1:33",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "30682:1:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "r",
				  "nodeType": "YulTypedName",
				  "src": "30688:1:33",
				  "type": ""
				}
			  ],
			  "src": "30648:185:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "30882:190:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "30892:33:33",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "30919:5:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "30901:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "30901:24:33"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "30892:5:33"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "31015:22:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "31017:16:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "31017:18:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "31017:18:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "30940:5:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "30947:66:33",
						  "type": "",
						  "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
						}
					  ],
					  "functionName": {
						"name": "eq",
						"nodeType": "YulIdentifier",
						"src": "30937:2:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "30937:77:33"
					},
					"nodeType": "YulIf",
					"src": "30934:103:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "31046:20:33",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "31057:5:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "31064:1:33",
						  "type": "",
						  "value": "1"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "31053:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "31053:13:33"
					},
					"variableNames": [
					  {
						"name": "ret",
						"nodeType": "YulIdentifier",
						"src": "31046:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "increment_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "30868:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "ret",
				  "nodeType": "YulTypedName",
				  "src": "30878:3:33",
				  "type": ""
				}
			  ],
			  "src": "30839:233:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "31125:32:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "31135:16:33",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "31146:5:33"
					},
					"variableNames": [
					  {
						"name": "aligned",
						"nodeType": "YulIdentifier",
						"src": "31135:7:33"
					  }
					]
				  }
				]
			  },
			  "name": "leftAlign_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "31107:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "aligned",
				  "nodeType": "YulTypedName",
				  "src": "31117:7:33",
				  "type": ""
				}
			  ],
			  "src": "31078:79:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "31246:74:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "31263:3:33"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "31306:5:33"
								}
							  ],
							  "functionName": {
								"name": "cleanup_t_uint256",
								"nodeType": "YulIdentifier",
								"src": "31288:17:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "31288:24:33"
							}
						  ],
						  "functionName": {
							"name": "leftAlign_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "31268:19:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "31268:45:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "31256:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "31256:58:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "31256:58:33"
				  }
				]
			  },
			  "name": "abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "31234:5:33",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "31241:3:33",
				  "type": ""
				}
			  ],
			  "src": "31163:157:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "31368:52:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "31378:35:33",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "31403:2:33",
						  "type": "",
						  "value": "96"
						},
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "31407:5:33"
						}
					  ],
					  "functionName": {
						"name": "shl",
						"nodeType": "YulIdentifier",
						"src": "31399:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "31399:14:33"
					},
					"variableNames": [
					  {
						"name": "newValue",
						"nodeType": "YulIdentifier",
						"src": "31378:8:33"
					  }
					]
				  }
				]
			  },
			  "name": "shift_left_96",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "31349:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "newValue",
				  "nodeType": "YulTypedName",
				  "src": "31359:8:33",
				  "type": ""
				}
			  ],
			  "src": "31326:94:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "31473:47:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "31483:31:33",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "31508:5:33"
						}
					  ],
					  "functionName": {
						"name": "shift_left_96",
						"nodeType": "YulIdentifier",
						"src": "31494:13:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "31494:20:33"
					},
					"variableNames": [
					  {
						"name": "aligned",
						"nodeType": "YulIdentifier",
						"src": "31483:7:33"
					  }
					]
				  }
				]
			  },
			  "name": "leftAlign_t_uint160",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "31455:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "aligned",
				  "nodeType": "YulTypedName",
				  "src": "31465:7:33",
				  "type": ""
				}
			  ],
			  "src": "31426:94:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "31573:53:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "31583:37:33",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "31614:5:33"
						}
					  ],
					  "functionName": {
						"name": "leftAlign_t_uint160",
						"nodeType": "YulIdentifier",
						"src": "31594:19:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "31594:26:33"
					},
					"variableNames": [
					  {
						"name": "aligned",
						"nodeType": "YulIdentifier",
						"src": "31583:7:33"
					  }
					]
				  }
				]
			  },
			  "name": "leftAlign_t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "31555:5:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "aligned",
				  "nodeType": "YulTypedName",
				  "src": "31565:7:33",
				  "type": ""
				}
			  ],
			  "src": "31526:100:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "31715:74:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "31732:3:33"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "31775:5:33"
								}
							  ],
							  "functionName": {
								"name": "cleanup_t_address",
								"nodeType": "YulIdentifier",
								"src": "31757:17:33"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "31757:24:33"
							}
						  ],
						  "functionName": {
							"name": "leftAlign_t_address",
							"nodeType": "YulIdentifier",
							"src": "31737:19:33"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "31737:45:33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "31725:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "31725:58:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "31725:58:33"
				  }
				]
			  },
			  "name": "abi_encode_t_address_to_t_address_nonPadded_inplace_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "31703:5:33",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "31710:3:33",
				  "type": ""
				}
			  ],
			  "src": "31632:157:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "31967:366:33",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "32040:6:33"
						},
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "32049:3:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack",
						"nodeType": "YulIdentifier",
						"src": "31978:61:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "31978:75:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "31978:75:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "32062:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "32073:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "32078:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "32069:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "32069:12:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "32062:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value1",
						  "nodeType": "YulIdentifier",
						  "src": "32153:6:33"
						},
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "32162:3:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_address_to_t_address_nonPadded_inplace_fromStack",
						"nodeType": "YulIdentifier",
						"src": "32091:61:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "32091:75:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "32091:75:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "32175:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "32186:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "32191:2:33",
						  "type": "",
						  "value": "20"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "32182:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "32182:12:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "32175:3:33"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value2",
						  "nodeType": "YulIdentifier",
						  "src": "32266:6:33"
						},
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "32275:3:33"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack",
						"nodeType": "YulIdentifier",
						"src": "32204:61:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "32204:75:33"
					},
					"nodeType": "YulExpressionStatement",
					"src": "32204:75:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "32288:19:33",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "32299:3:33"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "32304:2:33",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "32295:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "32295:12:33"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "32288:3:33"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "32317:10:33",
					"value": {
					  "name": "pos",
					  "nodeType": "YulIdentifier",
					  "src": "32324:3:33"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "32317:3:33"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_packed_t_uint256_t_address_t_uint256__to_t_uint256_t_address_t_uint256__nonPadded_inplace_fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "31930:3:33",
				  "type": ""
				},
				{
				  "name": "value2",
				  "nodeType": "YulTypedName",
				  "src": "31936:6:33",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "31944:6:33",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "31952:6:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "31963:3:33",
				  "type": ""
				}
			  ],
			  "src": "31795:538:33"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "32373:142:33",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "32383:25:33",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "32406:1:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "32388:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "32388:20:33"
					},
					"variableNames": [
					  {
						"name": "x",
						"nodeType": "YulIdentifier",
						"src": "32383:1:33"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "32417:25:33",
					"value": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "32440:1:33"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "32422:17:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "32422:20:33"
					},
					"variableNames": [
					  {
						"name": "y",
						"nodeType": "YulIdentifier",
						"src": "32417:1:33"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "32464:22:33",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x12",
							  "nodeType": "YulIdentifier",
							  "src": "32466:16:33"
							},
							"nodeType": "YulFunctionCall",
							"src": "32466:18:33"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "32466:18:33"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "32461:1:33"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "32454:6:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "32454:9:33"
					},
					"nodeType": "YulIf",
					"src": "32451:35:33"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "32495:14:33",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "32504:1:33"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "32507:1:33"
						}
					  ],
					  "functionName": {
						"name": "mod",
						"nodeType": "YulIdentifier",
						"src": "32500:3:33"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "32500:9:33"
					},
					"variableNames": [
					  {
						"name": "r",
						"nodeType": "YulIdentifier",
						"src": "32495:1:33"
					  }
					]
				  }
				]
			  },
			  "name": "mod_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "32362:1:33",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "32365:1:33",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "r",
				  "nodeType": "YulTypedName",
				  "src": "32371:1:33",
				  "type": ""
				}
			  ],
			  "src": "32339:176:33"
			}
		  ]
		},
		"contents": "{\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory_with_cleanup(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        mstore(add(dst, length), 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory_with_cleanup(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function cleanup_t_contract$_LiquidityPool_$6417(value) -> cleaned {\n        cleaned := cleanup_t_address(value)\n    }\n\n    function validator_revert_t_contract$_LiquidityPool_$6417(value) {\n        if iszero(eq(value, cleanup_t_contract$_LiquidityPool_$6417(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_contract$_LiquidityPool_$6417(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_contract$_LiquidityPool_$6417(value)\n    }\n\n    function abi_decode_tuple_t_contract$_LiquidityPool_$6417(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_contract$_LiquidityPool_$6417(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function abi_encode_t_uint8_to_t_uint8_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint8(value))\n    }\n\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint8_to_t_uint8_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_address_payable(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_payable_to_t_address_payable_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address_payable(value))\n    }\n\n    function abi_encode_tuple_t_address_payable__to_t_address_payable__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_payable_to_t_address_payable_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function store_literal_in_memory_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20(memPtr) {\n\n        mstore(add(memPtr, 0), \"OWNER_ONLY\")\n\n    }\n\n    function abi_encode_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 10)\n        store_literal_in_memory_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c(memPtr) {\n\n        mstore(add(memPtr, 0), \"FUNDS_MOVED_TO_LP\")\n\n    }\n\n    function abi_encode_t_stringliteral_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 17)\n        store_literal_in_memory_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        let product_raw := mul(x, y)\n        product := cleanup_t_uint256(product_raw)\n\n        // overflow, if x != 0 and y != product/x\n        if iszero(\n            or(\n                iszero(x),\n                eq(y, div(product, x))\n            )\n        ) { panic_error_0x11() }\n\n    }\n\n    function abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function store_literal_in_memory_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2(memPtr) {\n\n        mstore(add(memPtr, 0), \"MAPLENFT_ONLY\")\n\n    }\n\n    function abi_encode_t_stringliteral_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 13)\n        store_literal_in_memory_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        sum := add(x, y)\n\n        if gt(x, sum) { panic_error_0x11() }\n\n    }\n\n    function store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: mint to the zero address\")\n\n    }\n\n    function abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 31)\n        store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff(memPtr) {\n\n        mstore(add(memPtr, 0), \"ABOVE_MAX_SUPPLY\")\n\n    }\n\n    function abi_encode_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 16)\n        store_literal_in_memory_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function shift_right_1_unsigned(value) -> newValue {\n        newValue :=\n\n        shr(1, value)\n\n    }\n\n    function checked_exp_helper(_power, _base, exponent, max) -> power, base {\n        power := _power\n        base  := _base\n        for { } gt(exponent, 1) {}\n        {\n            // overflow check for base * base\n            if gt(base, div(max, base)) { panic_error_0x11() }\n            if and(exponent, 1)\n            {\n                // No checks for power := mul(power, base) needed, because the check\n                // for base * base above is sufficient, since:\n                // |power| <= base (proof by induction) and thus:\n                // |power * base| <= base * base <= max <= |min| (for signed)\n                // (this is equally true for signed and unsigned exp)\n                power := mul(power, base)\n            }\n            base := mul(base, base)\n            exponent := shift_right_1_unsigned(exponent)\n        }\n    }\n\n    function checked_exp_unsigned(base, exponent, max) -> power {\n        // This function currently cannot be inlined because of the\n        // \"leave\" statements. We have to improve the optimizer.\n\n        // Note that 0**0 == 1\n        if iszero(exponent) { power := 1 leave }\n        if iszero(base) { power := 0 leave }\n\n        // Specializations for small bases\n        switch base\n        // 0 is handled above\n        case 1 { power := 1 leave }\n        case 2\n        {\n            if gt(exponent, 255) { panic_error_0x11() }\n            power := exp(2, exponent)\n            if gt(power, max) { panic_error_0x11() }\n            leave\n        }\n        if or(\n            and(lt(base, 11), lt(exponent, 78)),\n            and(lt(base, 307), lt(exponent, 32))\n        )\n        {\n            power := exp(base, exponent)\n            if gt(power, max) { panic_error_0x11() }\n            leave\n        }\n\n        power, base := checked_exp_helper(1, base, exponent, max)\n\n        if gt(power, div(max, base)) { panic_error_0x11() }\n        power := mul(power, base)\n    }\n\n    function checked_exp_t_uint256_t_uint8(base, exponent) -> power {\n        base := cleanup_t_uint256(base)\n        exponent := cleanup_t_uint8(exponent)\n\n        power := checked_exp_unsigned(base, exponent, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n\n    }\n\n    function store_literal_in_memory_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7(memPtr) {\n\n        mstore(add(memPtr, 0), \"WRITE_ONCE!\")\n\n    }\n\n    function abi_encode_t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 11)\n        store_literal_in_memory_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3(memPtr) {\n\n        mstore(add(memPtr, 0), \"CONTRACT_PAUSED\")\n\n    }\n\n    function abi_encode_t_stringliteral_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 15)\n        store_literal_in_memory_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64(memPtr) {\n\n        mstore(add(memPtr, 0), \"NO_AVAILABLE_FUNDS\")\n\n    }\n\n    function abi_encode_t_stringliteral_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 18)\n        store_literal_in_memory_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_0b30354e57513ff952ecf07981d939391700e68f173d33c7bc1a2fa4bbcc7e2b(memPtr) {\n\n        mstore(add(memPtr, 0), \"Not rewardToken.\")\n\n    }\n\n    function abi_encode_t_stringliteral_0b30354e57513ff952ecf07981d939391700e68f173d33c7bc1a2fa4bbcc7e2b_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 16)\n        store_literal_in_memory_0b30354e57513ff952ecf07981d939391700e68f173d33c7bc1a2fa4bbcc7e2b(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_0b30354e57513ff952ecf07981d939391700e68f173d33c7bc1a2fa4bbcc7e2b__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_0b30354e57513ff952ecf07981d939391700e68f173d33c7bc1a2fa4bbcc7e2b_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: decreased allowance below\")\n\n        mstore(add(memPtr, 32), \" zero\")\n\n    }\n\n    function abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c(memPtr) {\n\n        mstore(add(memPtr, 0), \"ROUTER_OR_MAPLE_ONLY\")\n\n    }\n\n    function abi_encode_t_stringliteral_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 20)\n        store_literal_in_memory_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: approve from the zero add\")\n\n        mstore(add(memPtr, 32), \"ress\")\n\n    }\n\n    function abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 36)\n        store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: approve to the zero addre\")\n\n        mstore(add(memPtr, 32), \"ss\")\n\n    }\n\n    function abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 34)\n        store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer from the zero ad\")\n\n        mstore(add(memPtr, 32), \"dress\")\n\n    }\n\n    function abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer to the zero addr\")\n\n        mstore(add(memPtr, 32), \"ess\")\n\n    }\n\n    function abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 35)\n        store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer amount exceeds b\")\n\n        mstore(add(memPtr, 32), \"alance\")\n\n    }\n\n    function abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: burn from the zero addres\")\n\n        mstore(add(memPtr, 32), \"s\")\n\n    }\n\n    function abi_encode_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 33)\n        store_literal_in_memory_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: burn amount exceeds balan\")\n\n        mstore(add(memPtr, 32), \"ce\")\n\n    }\n\n    function abi_encode_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 34)\n        store_literal_in_memory_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        diff := sub(x, y)\n\n        if gt(diff, x) { panic_error_0x11() }\n\n    }\n\n    function store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: insufficient allowance\")\n\n    }\n\n    function abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 29)\n        store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x12() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n\n    function checked_div_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n\n        r := div(x, y)\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n    function leftAlign_t_uint256(value) -> aligned {\n        aligned := value\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack(value, pos) {\n        mstore(pos, leftAlign_t_uint256(cleanup_t_uint256(value)))\n    }\n\n    function shift_left_96(value) -> newValue {\n        newValue :=\n\n        shl(96, value)\n\n    }\n\n    function leftAlign_t_uint160(value) -> aligned {\n        aligned := shift_left_96(value)\n    }\n\n    function leftAlign_t_address(value) -> aligned {\n        aligned := leftAlign_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_nonPadded_inplace_fromStack(value, pos) {\n        mstore(pos, leftAlign_t_address(cleanup_t_address(value)))\n    }\n\n    function abi_encode_tuple_packed_t_uint256_t_address_t_uint256__to_t_uint256_t_address_t_uint256__nonPadded_inplace_fromStack_reversed(pos , value2, value1, value0) -> end {\n\n        abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack(value0,  pos)\n        pos := add(pos, 32)\n\n        abi_encode_t_address_to_t_address_nonPadded_inplace_fromStack(value1,  pos)\n        pos := add(pos, 20)\n\n        abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack(value2,  pos)\n        pos := add(pos, 32)\n\n        end := pos\n    }\n\n    function mod_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n        r := mod(x, y)\n    }\n\n}\n",
		"id": 33,
		"language": "Yul",
		"name": "#utility.yul"
	  }
	],
	"sourceMap": "149:7566:25:-:0;;;657:4;635:26;;;;;;;;;;;;;;;;;;;;958:1;943:16;;990:2;965:27;;1217:323;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1978:113:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2052:5;2044;:13;;;;;;:::i;:::-;;2077:7;2067;:17;;;;;;:::i;:::-;;1978:113;;1318:10:25::1;:8;;;:10;;:::i;:::-;1314:2;:14;;;;:::i;:::-;1304:7;:24;;;;:::i;:::-;1291:10;:37;;;;1339:32;1353:4;1360:10;;1339:5;;;:32;;:::i;:::-;1390:10;1382:5;;:18;;;;;;;;;;;;;;;;;;1428:8;1411:14;;:25;;;;;;;;;;;;;;;;;;1503:4;1480:13;:20;1494:5;;;;;;;;;;;1480:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;1217:323:::0;149:7566;;3093:91:7;3151:5;3175:2;3168:9;;3093:91;:::o;8402:389::-;8504:1;8485:21;;:7;:21;;;8477:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;8553:49;8582:1;8586:7;8595:6;8553:20;;;:49;;:::i;:::-;8629:6;8613:12;;:22;;;;;;;:::i;:::-;;;;;;;;8667:6;8645:9;:18;8655:7;8645:18;;;;;;;;;;;;;;;;:28;;;;;;;:::i;:::-;;;;;;;;8709:7;8688:37;;8705:1;8688:37;;;8718:6;8688:37;;;;;;:::i;:::-;;;;;;;;8736:48;8764:1;8768:7;8777:6;8736:19;;;:48;;:::i;:::-;8402:389;;:::o;11786:121::-;;;;:::o;12495:120::-;;;;:::o;88:117:33:-;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:104::-;511:7;540:24;558:5;540:24;:::i;:::-;529:35;;466:104;;;:::o;576:138::-;657:32;683:5;657:32;:::i;:::-;650:5;647:43;637:71;;704:1;701;694:12;637:71;576:138;:::o;720:159::-;785:5;816:6;810:13;801:22;;832:41;867:5;832:41;:::i;:::-;720:159;;;;:::o;885:367::-;963:6;1012:2;1000:9;991:7;987:23;983:32;980:119;;;1018:79;;:::i;:::-;980:119;1138:1;1163:72;1227:7;1218:6;1207:9;1203:22;1163:72;:::i;:::-;1153:82;;1109:136;885:367;;;;:::o;1258:99::-;1310:6;1344:5;1338:12;1328:22;;1258:99;;;:::o;1363:180::-;1411:77;1408:1;1401:88;1508:4;1505:1;1498:15;1532:4;1529:1;1522:15;1549:180;1597:77;1594:1;1587:88;1694:4;1691:1;1684:15;1718:4;1715:1;1708:15;1735:320;1779:6;1816:1;1810:4;1806:12;1796:22;;1863:1;1857:4;1853:12;1884:18;1874:81;;1940:4;1932:6;1928:17;1918:27;;1874:81;2002:2;1994:6;1991:14;1971:18;1968:38;1965:84;;2021:18;;:::i;:::-;1965:84;1786:269;1735:320;;;:::o;2061:141::-;2110:4;2133:3;2125:11;;2156:3;2153:1;2146:14;2190:4;2187:1;2177:18;2169:26;;2061:141;;;:::o;2208:93::-;2245:6;2292:2;2287;2280:5;2276:14;2272:23;2262:33;;2208:93;;;:::o;2307:107::-;2351:8;2401:5;2395:4;2391:16;2370:37;;2307:107;;;;:::o;2420:393::-;2489:6;2539:1;2527:10;2523:18;2562:97;2592:66;2581:9;2562:97;:::i;:::-;2680:39;2710:8;2699:9;2680:39;:::i;:::-;2668:51;;2752:4;2748:9;2741:5;2737:21;2728:30;;2801:4;2791:8;2787:19;2780:5;2777:30;2767:40;;2496:317;;2420:393;;;;;:::o;2819:77::-;2856:7;2885:5;2874:16;;2819:77;;;:::o;2902:60::-;2930:3;2951:5;2944:12;;2902:60;;;:::o;2968:142::-;3018:9;3051:53;3069:34;3078:24;3096:5;3078:24;:::i;:::-;3069:34;:::i;:::-;3051:53;:::i;:::-;3038:66;;2968:142;;;:::o;3116:75::-;3159:3;3180:5;3173:12;;3116:75;;;:::o;3197:269::-;3307:39;3338:7;3307:39;:::i;:::-;3368:91;3417:41;3441:16;3417:41;:::i;:::-;3409:6;3402:4;3396:11;3368:91;:::i;:::-;3362:4;3355:105;3273:193;3197:269;;;:::o;3472:73::-;3517:3;3472:73;:::o;3551:189::-;3628:32;;:::i;:::-;3669:65;3727:6;3719;3713:4;3669:65;:::i;:::-;3604:136;3551:189;;:::o;3746:186::-;3806:120;3823:3;3816:5;3813:14;3806:120;;;3877:39;3914:1;3907:5;3877:39;:::i;:::-;3850:1;3843:5;3839:13;3830:22;;3806:120;;;3746:186;;:::o;3938:543::-;4039:2;4034:3;4031:11;4028:446;;;4073:38;4105:5;4073:38;:::i;:::-;4157:29;4175:10;4157:29;:::i;:::-;4147:8;4143:44;4340:2;4328:10;4325:18;4322:49;;;4361:8;4346:23;;4322:49;4384:80;4440:22;4458:3;4440:22;:::i;:::-;4430:8;4426:37;4413:11;4384:80;:::i;:::-;4043:431;;4028:446;3938:543;;;:::o;4487:117::-;4541:8;4591:5;4585:4;4581:16;4560:37;;4487:117;;;;:::o;4610:169::-;4654:6;4687:51;4735:1;4731:6;4723:5;4720:1;4716:13;4687:51;:::i;:::-;4683:56;4768:4;4762;4758:15;4748:25;;4661:118;4610:169;;;;:::o;4784:295::-;4860:4;5006:29;5031:3;5025:4;5006:29;:::i;:::-;4998:37;;5068:3;5065:1;5061:11;5055:4;5052:21;5044:29;;4784:295;;;;:::o;5084:1395::-;5201:37;5234:3;5201:37;:::i;:::-;5303:18;5295:6;5292:30;5289:56;;;5325:18;;:::i;:::-;5289:56;5369:38;5401:4;5395:11;5369:38;:::i;:::-;5454:67;5514:6;5506;5500:4;5454:67;:::i;:::-;5548:1;5572:4;5559:17;;5604:2;5596:6;5593:14;5621:1;5616:618;;;;6278:1;6295:6;6292:77;;;6344:9;6339:3;6335:19;6329:26;6320:35;;6292:77;6395:67;6455:6;6448:5;6395:67;:::i;:::-;6389:4;6382:81;6251:222;5586:887;;5616:618;5668:4;5664:9;5656:6;5652:22;5702:37;5734:4;5702:37;:::i;:::-;5761:1;5775:208;5789:7;5786:1;5783:14;5775:208;;;5868:9;5863:3;5859:19;5853:26;5845:6;5838:42;5919:1;5911:6;5907:14;5897:24;;5966:2;5955:9;5951:18;5938:31;;5812:4;5809:1;5805:12;5800:17;;5775:208;;;6011:6;6002:7;5999:19;5996:179;;;6069:9;6064:3;6060:19;6054:26;6112:48;6154:4;6146:6;6142:17;6131:9;6112:48;:::i;:::-;6104:6;6097:64;6019:156;5996:179;6221:1;6217;6209:6;6205:14;6201:22;6195:4;6188:36;5623:611;;;5586:887;;5176:1303;;;5084:1395;;:::o;6485:180::-;6533:77;6530:1;6523:88;6630:4;6627:1;6620:15;6654:4;6651:1;6644:15;6671:102;6713:8;6760:5;6757:1;6753:13;6732:34;;6671:102;;;:::o;6779:848::-;6840:5;6847:4;6871:6;6862:15;;6895:5;6886:14;;6909:712;6930:1;6920:8;6917:15;6909:712;;;7025:4;7020:3;7016:14;7010:4;7007:24;7004:50;;;7034:18;;:::i;:::-;7004:50;7084:1;7074:8;7070:16;7067:451;;;7499:4;7492:5;7488:16;7479:25;;7067:451;7549:4;7543;7539:15;7531:23;;7579:32;7602:8;7579:32;:::i;:::-;7567:44;;6909:712;;;6779:848;;;;;;;:::o;7633:1073::-;7687:5;7878:8;7868:40;;7899:1;7890:10;;7901:5;;7868:40;7927:4;7917:36;;7944:1;7935:10;;7946:5;;7917:36;8013:4;8061:1;8056:27;;;;8097:1;8092:191;;;;8006:277;;8056:27;8074:1;8065:10;;8076:5;;;8092:191;8137:3;8127:8;8124:17;8121:43;;;8144:18;;:::i;:::-;8121:43;8193:8;8190:1;8186:16;8177:25;;8228:3;8221:5;8218:14;8215:40;;;8235:18;;:::i;:::-;8215:40;8268:5;;;8006:277;;8392:2;8382:8;8379:16;8373:3;8367:4;8364:13;8360:36;8342:2;8332:8;8329:16;8324:2;8318:4;8315:12;8311:35;8295:111;8292:246;;;8448:8;8442:4;8438:19;8429:28;;8483:3;8476:5;8473:14;8470:40;;;8490:18;;:::i;:::-;8470:40;8523:5;;8292:246;8563:42;8601:3;8591:8;8585:4;8582:1;8563:42;:::i;:::-;8548:57;;;;8637:4;8632:3;8628:14;8621:5;8618:25;8615:51;;;8646:18;;:::i;:::-;8615:51;8695:4;8688:5;8684:16;8675:25;;7633:1073;;;;;;:::o;8712:86::-;8747:7;8787:4;8780:5;8776:16;8765:27;;8712:86;;;:::o;8804:281::-;8862:5;8886:23;8904:4;8886:23;:::i;:::-;8878:31;;8930:25;8946:8;8930:25;:::i;:::-;8918:37;;8974:104;9011:66;9001:8;8995:4;8974:104;:::i;:::-;8965:113;;8804:281;;;;:::o;9091:410::-;9131:7;9154:20;9172:1;9154:20;:::i;:::-;9149:25;;9188:20;9206:1;9188:20;:::i;:::-;9183:25;;9243:1;9240;9236:9;9265:30;9283:11;9265:30;:::i;:::-;9254:41;;9444:1;9435:7;9431:15;9428:1;9425:22;9405:1;9398:9;9378:83;9355:139;;9474:18;;:::i;:::-;9355:139;9139:362;9091:410;;;;:::o;9507:169::-;9591:11;9625:6;9620:3;9613:19;9665:4;9660:3;9656:14;9641:29;;9507:169;;;;:::o;9682:181::-;9822:33;9818:1;9810:6;9806:14;9799:57;9682:181;:::o;9869:366::-;10011:3;10032:67;10096:2;10091:3;10032:67;:::i;:::-;10025:74;;10108:93;10197:3;10108:93;:::i;:::-;10226:2;10221:3;10217:12;10210:19;;9869:366;;;:::o;10241:419::-;10407:4;10445:2;10434:9;10430:18;10422:26;;10494:9;10488:4;10484:20;10480:1;10469:9;10465:17;10458:47;10522:131;10648:4;10522:131;:::i;:::-;10514:139;;10241:419;;;:::o;10666:191::-;10706:3;10725:20;10743:1;10725:20;:::i;:::-;10720:25;;10759:20;10777:1;10759:20;:::i;:::-;10754:25;;10802:1;10799;10795:9;10788:16;;10823:3;10820:1;10817:10;10814:36;;;10830:18;;:::i;:::-;10814:36;10666:191;;;;:::o;10863:118::-;10950:24;10968:5;10950:24;:::i;:::-;10945:3;10938:37;10863:118;;:::o;10987:222::-;11080:4;11118:2;11107:9;11103:18;11095:26;;11131:71;11199:1;11188:9;11184:17;11175:6;11131:71;:::i;:::-;10987:222;;;;:::o;149:7566:25:-;;;;;;;",
	"deployedSourceMap": "149:7566:25:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;471:31;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2156:98:7;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4433:197;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3903:103:25;;;;;;;;;;;;;:::i;:::-;;5936:761;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;3244:106:7;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;823:23:25;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5134:115;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5192:286:7;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3093:91;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;369:25:25;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5873:234:7;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1085:50:25;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1165:45;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4661:335;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2339:173;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;732:37;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;883:28;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3292:400;;;;;;;;;;;;;:::i;:::-;;600:29;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;414:31;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;852:25;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3408:125:7;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2519:169:25;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;7336:376;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;695:20;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2367:102:7;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5006:122:25;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;6594:427:7;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3729:189;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;999:50:25;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;635:26;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3733:131;;;;;;;;;;;;;:::i;:::-;;2903:344;;;:::i;:::-;;5412:455;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3976:149:7;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4043:106:25;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2693:180;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;536:28;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;796:21;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;471:31;;;;:::o;2156:98:7:-;2210:13;2242:5;2235:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:98;:::o;4433:197::-;4516:4;4532:13;4548:12;:10;:12::i;:::-;4532:28;;4570:32;4579:5;4586:7;4595:6;4570:8;:32::i;:::-;4619:4;4612:11;;;4433:197;;;;:::o;3903:103:25:-;1599:5;;;;;;;;;;;1585:19;;:10;:19;;;1577:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;3964:7:::1;;;;;;;;;;;3963:8;3953:7;;:18;;;;;;;;;;;;;;;;;;3986:13;;;;;;;;;;3903:103::o:0;5936:761::-;1599:5;;;;;;;;;;;1585:19;;:10;:19;;;1577:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;2053:17:::1;;;;;;;;;;;2052:18;2044:48;;;;;;;;;;;;:::i;:::-;;;;;;;;;6067:4:::2;6047:17;;:24;;;;;;;;;;;;;;;;;;6151:31;6204:3;6185:16;;:22;;;;:::i;:::-;6151:56;;6246:125;6283:4;6310:13;6338:23;6246:15;:125::i;:::-;6453:13;:21;;;6482:16;;6513:23;6558:4;6453:120;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;::::0;::::2;;;;;;;;;;6617:13;:30;;;:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;::::0;::::2;;;;;;;;;6660:30;:28;:30::i;:::-;6037:660;5936:761:::0;:::o;3244:106:7:-;3305:7;3331:12;;3324:19;;3244:106;:::o;823:23:25:-;;;;;;;;;;;;;:::o;5134:115::-;1698:8;;;;;;;;;;;1684:22;;:10;:22;;;:50;;;;1724:10;;;;;;;;;;;1710:24;;:10;:24;;;1684:50;1676:76;;;;;;;;;;;;:::i;:::-;;;;;;;;;5219:22:::1;5225:7;5234:6;5219:5;:22::i;:::-;5134:115:::0;;:::o;5192:286:7:-;5319:4;5335:15;5353:12;:10;:12::i;:::-;5335:30;;5375:38;5391:4;5397:7;5406:6;5375:15;:38::i;:::-;5423:27;5433:4;5439:2;5443:6;5423:9;:27::i;:::-;5467:4;5460:11;;;5192:286;;;;;:::o;3093:91::-;3151:5;3175:2;3168:9;;3093:91;:::o;369:25:25:-;;;;:::o;5873:234:7:-;5961:4;5977:13;5993:12;:10;:12::i;:::-;5977:28;;6015:64;6024:5;6031:7;6068:10;6040:25;6050:5;6057:7;6040:9;:25::i;:::-;:38;;;;:::i;:::-;6015:8;:64::i;:::-;6096:4;6089:11;;;5873:234;;;;:::o;1085:50:25:-;;;;;;;;;;;;;;;;;:::o;1165:45::-;;;;;;;;;;;;;;;;;;;;;;:::o;4661:335::-;1599:5;;;;;;;;;;;1585:19;;:10;:19;;;1577:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;4764:1:::1;4745:21;;:7;:21;;::::0;4737:65:::1;;;;;;;;;;;;:::i;:::-;;;;;;;;;4885:10;;4875:6;4859:13;:11;:13::i;:::-;:22;;;;:::i;:::-;:36;;4851:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;4950:39;4956:7;4978:10;:8;:10::i;:::-;4974:2;:14;;;;:::i;:::-;4965:6;:23;;;;:::i;:::-;4950:5;:39::i;:::-;4661:335:::0;;:::o;2339:173::-;1599:5;;;;;;;;;;;1585:19;;:10;:19;;;1577:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;2447:1:::1;2420:29;;2428:6;;;;;;;;;;;2420:29;;;2412:53;;;;;;;;;;;;:::i;:::-;;;;;;;;;2498:7;2489:6;;:16;;;;;;;;;;;;;;;;;;2339:173:::0;:::o;732:37::-;;;;;;;;;;;;;:::o;883:28::-;;;;;;;;;;;;;:::o;3292:400::-;2183:16;;;;;;;;;;;2182:17;2174:45;;;;;;;;;;;;:::i;:::-;;;;;;;;;2053:17:::1;;;;;;;;;;;2052:18;2044:48;;;;;;;;;;;;:::i;:::-;;;;;;;;;3395:1:::2;3365:15;:27;3381:10;3365:27;;;;;;;;;;;;;;;;:31;3357:62;;;;;;;;;;;;:::i;:::-;;;;;;;;;3492:21;3516:15;:27;3532:10;3516:27;;;;;;;;;;;;;;;;3492:51;;3583:1;3553:15;:27;3569:10;3553:27;;;;;;;;;;;;;;;:31;;;;3595:57;3619:4;3626:10;3638:13;3595:15;:57::i;:::-;3347:345;3292:400::o:0;600:29::-;;;;;;;;;;;;;:::o;414:31::-;444:1;414:31;:::o;852:25::-;;;;;;;;;;;;;:::o;3408:125:7:-;3482:7;3508:9;:18;3518:7;3508:18;;;;;;;;;;;;;;;;3501:25;;3408:125;;;:::o;2519:169:25:-;1599:5;;;;;;;;;;;1585:19;;:10;:19;;;1577:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;2633:1:::1;2604:31;;2612:8;;;;;;;;;;;2604:31;;;2596:55;;;;;;;;;;;;:::i;:::-;;;;;;;;;2672:9;2661:8;;:20;;;;;;;;;;;;;;;;;;2519:169:::0;:::o;7336:376::-;7425:5;7409:13;;:21;;;;;;;;;;;;;;;;;;7458:7;7440:15;:25;;;;7475:9;7487:12;7495:3;7487:7;:12::i;:::-;7475:24;;7525:17;;7517:4;:25;;7509:55;;;;;;;;;;;;:::i;:::-;;;;;;;;;7609:81;7633:14;;;;;;;;;;;7658:13;;;;;;;;;;;7674:15;;7609;:81::i;:::-;7399:313;7336:376;;:::o;695:20::-;;;;;;;;;;;;;:::o;2367:102:7:-;2423:13;2455:7;2448:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2367:102;:::o;5006:122:25:-;1599:5;;;;;;;;;;;1585:19;;:10;:19;;;1577:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;5082:39:::1;5088:7;5110:10;:8;:10::i;:::-;5106:2;:14;;;;:::i;:::-;5097:6;:23;;;;:::i;:::-;5082:5;:39::i;:::-;5006:122:::0;;:::o;6594:427:7:-;6687:4;6703:13;6719:12;:10;:12::i;:::-;6703:28;;6741:24;6768:25;6778:5;6785:7;6768:9;:25::i;:::-;6741:52;;6831:15;6811:16;:35;;6803:85;;;;;;;;;;;;:::i;:::-;;;;;;;;;6922:60;6931:5;6938:7;6966:15;6947:16;:34;6922:8;:60::i;:::-;7010:4;7003:11;;;;6594:427;;;;:::o;3729:189::-;3808:4;3824:13;3840:12;:10;:12::i;:::-;3824:28;;3862;3872:5;3879:2;3883:6;3862:9;:28::i;:::-;3907:4;3900:11;;;3729:189;;;;:::o;999:50:25:-;;;;;;;;;;;;;;;;;:::o;635:26::-;;;;;;;;;;;;;:::o;3733:131::-;1599:5;;;;;;;;;;;1585:19;;:10;:19;;;1577:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;3813:16:::1;;;;;;;;;;;3812:17;3793:16;;:36;;;;;;;;;;;;;;;;;;3844:13;;;;;;;;;;3733:131::o:0;2903:344::-;2183:16;;;;;;;;;;;2182:17;2174:45;;;;;;;;;;;;:::i;:::-;;;;;;;;;2053:17:::1;;;;;;;;;;;2052:18;2044:48;;;;;;;;;;;;:::i;:::-;;;;;;;;;3009:19:::2;3043:3;3031:9;:15;;;;:::i;:::-;3009:37;;3087:11;3056:15;:27;3072:10;3056:27;;;;;;;;;;;;;;;;:42;;;;;;;:::i;:::-;;;;;;;;3139:9;3108:15;:27;3124:10;3108:27;;;;;;;;;;;;;;;;:40;;;;;;;:::i;:::-;;;;;;;;3178:9;3158:16;;:29;;;;;;;:::i;:::-;;;;;;;;3216:10;3203:37;;;3228:11;3203:37;;;;;;:::i;:::-;;;;;;;;2965:282;2903:344::o:0;5412:455::-;5533:4;1872:6;;;;;;;;;;;1858:20;;:10;:20;;;:46;;;;1896:8;;;;;;;;;;;1882:22;;:10;:22;;;1858:46;:74;;;;1922:10;;;;;;;;;;;1908:24;;:10;:24;;;1858:74;1850:107;;;;;;;;;;;;:::i;:::-;;;;;;;;;5704:134:::1;5726:6;5754:8;5821:7;5782:36;5792:10;5812:4;5782:9;:36::i;:::-;:46;;;;:::i;:::-;5704:8;:134::i;:::-;5856:4;5849:11;;5412:455:::0;;;;;:::o;3976:149:7:-;4065:7;4091:11;:18;4103:5;4091:18;;;;;;;;;;;;;;;:27;4110:7;4091:27;;;;;;;;;;;;;;;;4084:34;;3976:149;;;;:::o;4043:106:25:-;1599:5;;;;;;;;;;;1585:19;;:10;:19;;;1577:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;4138:4:::1;4113:13;:22;4127:7;4113:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;4043:106:::0;:::o;2693:180::-;1599:5;;;;;;;;;;;1585:19;;:10;:19;;;1577:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;2814:1:::1;2783:33;;2791:10;;;;;;;;;;;2783:33;;;2775:57;;;;;;;;;;;;:::i;:::-;;;;;;;;;2855:11;2842:10;;:24;;;;;;;;;;;;;;;;;;2693:180:::0;:::o;536:28::-;;;;;;;;;;;;;:::o;796:21::-;;;;;;;;;;;;;:::o;640:96:17:-;693:7;719:10;712:17;;640:96;:::o;10110:370:7:-;10258:1;10241:19;;:5;:19;;;10233:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;10338:1;10319:21;;:7;:21;;;10311:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;10420:6;10390:11;:18;10402:5;10390:18;;;;;;;;;;;;;;;:27;10409:7;10390:27;;;;;;;;;;;;;;;:36;;;;10457:7;10441:32;;10450:5;10441:32;;;10466:6;10441:32;;;;;;:::i;:::-;;;;;;;;10110:370;;;:::o;7475:651::-;7617:1;7601:18;;:4;:18;;;7593:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;7693:1;7679:16;;:2;:16;;;7671:64;;;;;;;;;;;;:::i;:::-;;;;;;;;;7746:38;7767:4;7773:2;7777:6;7746:20;:38::i;:::-;7795:19;7817:9;:15;7827:4;7817:15;;;;;;;;;;;;;;;;7795:37;;7865:6;7850:11;:21;;7842:72;;;;;;;;;;;;:::i;:::-;;;;;;;;;7980:6;7966:11;:20;7948:9;:15;7958:4;7948:15;;;;;;;;;;;;;;;:38;;;;8023:6;8006:9;:13;8016:2;8006:13;;;;;;;;;;;;;;;;:23;;;;;;;:::i;:::-;;;;;;;;8060:2;8045:26;;8054:4;8045:26;;;8064:6;8045:26;;;;;;:::i;:::-;;;;;;;;8082:37;8102:4;8108:2;8112:6;8082:19;:37::i;:::-;7583:543;7475:651;;;:::o;6873:219:25:-;6932:20;6955:24;6973:4;6955:9;:24::i;:::-;6932:47;;6989:69;7013:4;7028:14;;;;;;;;;;;7045:12;6989:15;:69::i;:::-;7073:12;;;;;;;;;;6922:170;6873:219::o;9111:576:7:-;9213:1;9194:21;;:7;:21;;;9186:67;;;;;;;;;;;;:::i;:::-;;;;;;;;;9264:49;9285:7;9302:1;9306:6;9264:20;:49::i;:::-;9324:22;9349:9;:18;9359:7;9349:18;;;;;;;;;;;;;;;;9324:43;;9403:6;9385:14;:24;;9377:71;;;;;;;;;;;;:::i;:::-;;;;;;;;;9520:6;9503:14;:23;9482:9;:18;9492:7;9482:18;;;;;;;;;;;;;;;:44;;;;9562:6;9546:12;;:22;;;;;;;:::i;:::-;;;;;;;;9610:1;9584:37;;9593:7;9584:37;;;9614:6;9584:37;;;;;;:::i;:::-;;;;;;;;9632:48;9652:7;9669:1;9673:6;9632:19;:48::i;:::-;9176:511;9111:576;;:::o;10761:441::-;10891:24;10918:25;10928:5;10935:7;10918:9;:25::i;:::-;10891:52;;10977:17;10957:16;:37;10953:243;;11038:6;11018:16;:26;;11010:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;11120:51;11129:5;11136:7;11164:6;11145:16;:25;11120:8;:51::i;:::-;10953:243;10881:321;10761:441;;;:::o;4155:500:25:-;4253:20;4307:7;;;;;;;;;;;4303:73;;;4362:3;4352:6;444:1;4346:12;;;;:::i;:::-;4345:20;;;;:::i;:::-;4330:35;;4303:73;4385:24;4421:12;4412:6;:21;;;;:::i;:::-;4385:48;;4485:52;4501:6;4509:9;4520:16;4485:15;:52::i;:::-;4594:53;4610:6;4618:14;;;;;;;;;;;4634:12;4594:15;:53::i;:::-;4243:412;;4155:500;;;:::o;8402:389:7:-;8504:1;8485:21;;:7;:21;;;8477:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;8553:49;8582:1;8586:7;8595:6;8553:20;:49::i;:::-;8629:6;8613:12;;:22;;;;;;;:::i;:::-;;;;;;;;8667:6;8645:9;:18;8655:7;8645:18;;;;;;;;;;;;;;;;:28;;;;;;;:::i;:::-;;;;;;;;8709:7;8688:37;;8705:1;8688:37;;;8718:6;8688:37;;;;;;:::i;:::-;;;;;;;;8736:48;8764:1;8768:7;8777:6;8736:19;:48::i;:::-;8402:389;;:::o;7134:196:25:-;7183:4;7215:7;;:9;;;;;;;;;:::i;:::-;;;;;;7315:8;7273:15;7290:10;7302:7;;7256:54;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;7246:65;;;;;;7241:71;;:82;;;;:::i;:::-;7234:89;;7134:196;;;:::o;11786:121:7:-;;;;:::o;12495:120::-;;;;:::o;7:77:33:-;44:7;73:5;62:16;;7:77;;;:::o;90:118::-;177:24;195:5;177:24;:::i;:::-;172:3;165:37;90:118;;:::o;214:222::-;307:4;345:2;334:9;330:18;322:26;;358:71;426:1;415:9;411:17;402:6;358:71;:::i;:::-;214:222;;;;:::o;442:99::-;494:6;528:5;522:12;512:22;;442:99;;;:::o;547:169::-;631:11;665:6;660:3;653:19;705:4;700:3;696:14;681:29;;547:169;;;;:::o;722:246::-;803:1;813:113;827:6;824:1;821:13;813:113;;;912:1;907:3;903:11;897:18;893:1;888:3;884:11;877:39;849:2;846:1;842:10;837:15;;813:113;;;960:1;951:6;946:3;942:16;935:27;784:184;722:246;;;:::o;974:102::-;1015:6;1066:2;1062:7;1057:2;1050:5;1046:14;1042:28;1032:38;;974:102;;;:::o;1082:377::-;1170:3;1198:39;1231:5;1198:39;:::i;:::-;1253:71;1317:6;1312:3;1253:71;:::i;:::-;1246:78;;1333:65;1391:6;1386:3;1379:4;1372:5;1368:16;1333:65;:::i;:::-;1423:29;1445:6;1423:29;:::i;:::-;1418:3;1414:39;1407:46;;1174:285;1082:377;;;;:::o;1465:313::-;1578:4;1616:2;1605:9;1601:18;1593:26;;1665:9;1659:4;1655:20;1651:1;1640:9;1636:17;1629:47;1693:78;1766:4;1757:6;1693:78;:::i;:::-;1685:86;;1465:313;;;;:::o;1865:117::-;1974:1;1971;1964:12;2111:126;2148:7;2188:42;2181:5;2177:54;2166:65;;2111:126;;;:::o;2243:96::-;2280:7;2309:24;2327:5;2309:24;:::i;:::-;2298:35;;2243:96;;;:::o;2345:122::-;2418:24;2436:5;2418:24;:::i;:::-;2411:5;2408:35;2398:63;;2457:1;2454;2447:12;2398:63;2345:122;:::o;2473:139::-;2519:5;2557:6;2544:20;2535:29;;2573:33;2600:5;2573:33;:::i;:::-;2473:139;;;;:::o;2618:122::-;2691:24;2709:5;2691:24;:::i;:::-;2684:5;2681:35;2671:63;;2730:1;2727;2720:12;2671:63;2618:122;:::o;2746:139::-;2792:5;2830:6;2817:20;2808:29;;2846:33;2873:5;2846:33;:::i;:::-;2746:139;;;;:::o;2891:474::-;2959:6;2967;3016:2;3004:9;2995:7;2991:23;2987:32;2984:119;;;3022:79;;:::i;:::-;2984:119;3142:1;3167:53;3212:7;3203:6;3192:9;3188:22;3167:53;:::i;:::-;3157:63;;3113:117;3269:2;3295:53;3340:7;3331:6;3320:9;3316:22;3295:53;:::i;:::-;3285:63;;3240:118;2891:474;;;;;:::o;3371:90::-;3405:7;3448:5;3441:13;3434:21;3423:32;;3371:90;;;:::o;3467:109::-;3548:21;3563:5;3548:21;:::i;:::-;3543:3;3536:34;3467:109;;:::o;3582:210::-;3669:4;3707:2;3696:9;3692:18;3684:26;;3720:65;3782:1;3771:9;3767:17;3758:6;3720:65;:::i;:::-;3582:210;;;;:::o;3798:118::-;3857:7;3886:24;3904:5;3886:24;:::i;:::-;3875:35;;3798:118;;;:::o;3922:166::-;4017:46;4057:5;4017:46;:::i;:::-;4010:5;4007:57;3997:85;;4078:1;4075;4068:12;3997:85;3922:166;:::o;4094:183::-;4162:5;4200:6;4187:20;4178:29;;4216:55;4265:5;4216:55;:::i;:::-;4094:183;;;;:::o;4283:373::-;4364:6;4413:2;4401:9;4392:7;4388:23;4384:32;4381:119;;;4419:79;;:::i;:::-;4381:119;4539:1;4564:75;4631:7;4622:6;4611:9;4607:22;4564:75;:::i;:::-;4554:85;;4510:139;4283:373;;;;:::o;4662:118::-;4749:24;4767:5;4749:24;:::i;:::-;4744:3;4737:37;4662:118;;:::o;4786:222::-;4879:4;4917:2;4906:9;4902:18;4894:26;;4930:71;4998:1;4987:9;4983:17;4974:6;4930:71;:::i;:::-;4786:222;;;;:::o;5014:619::-;5091:6;5099;5107;5156:2;5144:9;5135:7;5131:23;5127:32;5124:119;;;5162:79;;:::i;:::-;5124:119;5282:1;5307:53;5352:7;5343:6;5332:9;5328:22;5307:53;:::i;:::-;5297:63;;5253:117;5409:2;5435:53;5480:7;5471:6;5460:9;5456:22;5435:53;:::i;:::-;5425:63;;5380:118;5537:2;5563:53;5608:7;5599:6;5588:9;5584:22;5563:53;:::i;:::-;5553:63;;5508:118;5014:619;;;;;:::o;5639:86::-;5674:7;5714:4;5707:5;5703:16;5692:27;;5639:86;;;:::o;5731:112::-;5814:22;5830:5;5814:22;:::i;:::-;5809:3;5802:35;5731:112;;:::o;5849:214::-;5938:4;5976:2;5965:9;5961:18;5953:26;;5989:67;6053:1;6042:9;6038:17;6029:6;5989:67;:::i;:::-;5849:214;;;;:::o;6069:329::-;6128:6;6177:2;6165:9;6156:7;6152:23;6148:32;6145:119;;;6183:79;;:::i;:::-;6145:119;6303:1;6328:53;6373:7;6364:6;6353:9;6349:22;6328:53;:::i;:::-;6318:63;;6274:117;6069:329;;;;:::o;6404:104::-;6449:7;6478:24;6496:5;6478:24;:::i;:::-;6467:35;;6404:104;;;:::o;6514:142::-;6617:32;6643:5;6617:32;:::i;:::-;6612:3;6605:45;6514:142;;:::o;6662:254::-;6771:4;6809:2;6798:9;6794:18;6786:26;;6822:87;6906:1;6895:9;6891:17;6882:6;6822:87;:::i;:::-;6662:254;;;;:::o;6922:474::-;6990:6;6998;7047:2;7035:9;7026:7;7022:23;7018:32;7015:119;;;7053:79;;:::i;:::-;7015:119;7173:1;7198:53;7243:7;7234:6;7223:9;7219:22;7198:53;:::i;:::-;7188:63;;7144:117;7300:2;7326:53;7371:7;7362:6;7351:9;7347:22;7326:53;:::i;:::-;7316:63;;7271:118;6922:474;;;;;:::o;7402:180::-;7450:77;7447:1;7440:88;7547:4;7544:1;7537:15;7571:4;7568:1;7561:15;7588:320;7632:6;7669:1;7663:4;7659:12;7649:22;;7716:1;7710:4;7706:12;7737:18;7727:81;;7793:4;7785:6;7781:17;7771:27;;7727:81;7855:2;7847:6;7844:14;7824:18;7821:38;7818:84;;7874:18;;:::i;:::-;7818:84;7639:269;7588:320;;;:::o;7914:160::-;8054:12;8050:1;8042:6;8038:14;8031:36;7914:160;:::o;8080:366::-;8222:3;8243:67;8307:2;8302:3;8243:67;:::i;:::-;8236:74;;8319:93;8408:3;8319:93;:::i;:::-;8437:2;8432:3;8428:12;8421:19;;8080:366;;;:::o;8452:419::-;8618:4;8656:2;8645:9;8641:18;8633:26;;8705:9;8699:4;8695:20;8691:1;8680:9;8676:17;8669:47;8733:131;8859:4;8733:131;:::i;:::-;8725:139;;8452:419;;;:::o;8877:167::-;9017:19;9013:1;9005:6;9001:14;8994:43;8877:167;:::o;9050:366::-;9192:3;9213:67;9277:2;9272:3;9213:67;:::i;:::-;9206:74;;9289:93;9378:3;9289:93;:::i;:::-;9407:2;9402:3;9398:12;9391:19;;9050:366;;;:::o;9422:419::-;9588:4;9626:2;9615:9;9611:18;9603:26;;9675:9;9669:4;9665:20;9661:1;9650:9;9646:17;9639:47;9703:131;9829:4;9703:131;:::i;:::-;9695:139;;9422:419;;;:::o;9847:180::-;9895:77;9892:1;9885:88;9992:4;9989:1;9982:15;10016:4;10013:1;10006:15;10033:410;10073:7;10096:20;10114:1;10096:20;:::i;:::-;10091:25;;10130:20;10148:1;10130:20;:::i;:::-;10125:25;;10185:1;10182;10178:9;10207:30;10225:11;10207:30;:::i;:::-;10196:41;;10386:1;10377:7;10373:15;10370:1;10367:22;10347:1;10340:9;10320:83;10297:139;;10416:18;;:::i;:::-;10297:139;10081:362;10033:410;;;;:::o;10449:332::-;10570:4;10608:2;10597:9;10593:18;10585:26;;10621:71;10689:1;10678:9;10674:17;10665:6;10621:71;:::i;:::-;10702:72;10770:2;10759:9;10755:18;10746:6;10702:72;:::i;:::-;10449:332;;;;;:::o;10787:163::-;10927:15;10923:1;10915:6;10911:14;10904:39;10787:163;:::o;10956:366::-;11098:3;11119:67;11183:2;11178:3;11119:67;:::i;:::-;11112:74;;11195:93;11284:3;11195:93;:::i;:::-;11313:2;11308:3;11304:12;11297:19;;10956:366;;;:::o;11328:419::-;11494:4;11532:2;11521:9;11517:18;11509:26;;11581:9;11575:4;11571:20;11567:1;11556:9;11552:17;11545:47;11609:131;11735:4;11609:131;:::i;:::-;11601:139;;11328:419;;;:::o;11753:191::-;11793:3;11812:20;11830:1;11812:20;:::i;:::-;11807:25;;11846:20;11864:1;11846:20;:::i;:::-;11841:25;;11889:1;11886;11882:9;11875:16;;11910:3;11907:1;11904:10;11901:36;;;11917:18;;:::i;:::-;11901:36;11753:191;;;;:::o;11950:181::-;12090:33;12086:1;12078:6;12074:14;12067:57;11950:181;:::o;12137:366::-;12279:3;12300:67;12364:2;12359:3;12300:67;:::i;:::-;12293:74;;12376:93;12465:3;12376:93;:::i;:::-;12494:2;12489:3;12485:12;12478:19;;12137:366;;;:::o;12509:419::-;12675:4;12713:2;12702:9;12698:18;12690:26;;12762:9;12756:4;12752:20;12748:1;12737:9;12733:17;12726:47;12790:131;12916:4;12790:131;:::i;:::-;12782:139;;12509:419;;;:::o;12934:166::-;13074:18;13070:1;13062:6;13058:14;13051:42;12934:166;:::o;13106:366::-;13248:3;13269:67;13333:2;13328:3;13269:67;:::i;:::-;13262:74;;13345:93;13434:3;13345:93;:::i;:::-;13463:2;13458:3;13454:12;13447:19;;13106:366;;;:::o;13478:419::-;13644:4;13682:2;13671:9;13667:18;13659:26;;13731:9;13725:4;13721:20;13717:1;13706:9;13702:17;13695:47;13759:131;13885:4;13759:131;:::i;:::-;13751:139;;13478:419;;;:::o;13903:102::-;13945:8;13992:5;13989:1;13985:13;13964:34;;13903:102;;;:::o;14011:848::-;14072:5;14079:4;14103:6;14094:15;;14127:5;14118:14;;14141:712;14162:1;14152:8;14149:15;14141:712;;;14257:4;14252:3;14248:14;14242:4;14239:24;14236:50;;;14266:18;;:::i;:::-;14236:50;14316:1;14306:8;14302:16;14299:451;;;14731:4;14724:5;14720:16;14711:25;;14299:451;14781:4;14775;14771:15;14763:23;;14811:32;14834:8;14811:32;:::i;:::-;14799:44;;14141:712;;;14011:848;;;;;;;:::o;14865:1073::-;14919:5;15110:8;15100:40;;15131:1;15122:10;;15133:5;;15100:40;15159:4;15149:36;;15176:1;15167:10;;15178:5;;15149:36;15245:4;15293:1;15288:27;;;;15329:1;15324:191;;;;15238:277;;15288:27;15306:1;15297:10;;15308:5;;;15324:191;15369:3;15359:8;15356:17;15353:43;;;15376:18;;:::i;:::-;15353:43;15425:8;15422:1;15418:16;15409:25;;15460:3;15453:5;15450:14;15447:40;;;15467:18;;:::i;:::-;15447:40;15500:5;;;15238:277;;15624:2;15614:8;15611:16;15605:3;15599:4;15596:13;15592:36;15574:2;15564:8;15561:16;15556:2;15550:4;15547:12;15543:35;15527:111;15524:246;;;15680:8;15674:4;15670:19;15661:28;;15715:3;15708:5;15705:14;15702:40;;;15722:18;;:::i;:::-;15702:40;15755:5;;15524:246;15795:42;15833:3;15823:8;15817:4;15814:1;15795:42;:::i;:::-;15780:57;;;;15869:4;15864:3;15860:14;15853:5;15850:25;15847:51;;;15878:18;;:::i;:::-;15847:51;15927:4;15920:5;15916:16;15907:25;;14865:1073;;;;;;:::o;15944:281::-;16002:5;16026:23;16044:4;16026:23;:::i;:::-;16018:31;;16070:25;16086:8;16070:25;:::i;:::-;16058:37;;16114:104;16151:66;16141:8;16135:4;16114:104;:::i;:::-;16105:113;;15944:281;;;;:::o;16231:161::-;16371:13;16367:1;16359:6;16355:14;16348:37;16231:161;:::o;16398:366::-;16540:3;16561:67;16625:2;16620:3;16561:67;:::i;:::-;16554:74;;16637:93;16726:3;16637:93;:::i;:::-;16755:2;16750:3;16746:12;16739:19;;16398:366;;;:::o;16770:419::-;16936:4;16974:2;16963:9;16959:18;16951:26;;17023:9;17017:4;17013:20;17009:1;16998:9;16994:17;16987:47;17051:131;17177:4;17051:131;:::i;:::-;17043:139;;16770:419;;;:::o;17195:165::-;17335:17;17331:1;17323:6;17319:14;17312:41;17195:165;:::o;17366:366::-;17508:3;17529:67;17593:2;17588:3;17529:67;:::i;:::-;17522:74;;17605:93;17694:3;17605:93;:::i;:::-;17723:2;17718:3;17714:12;17707:19;;17366:366;;;:::o;17738:419::-;17904:4;17942:2;17931:9;17927:18;17919:26;;17991:9;17985:4;17981:20;17977:1;17966:9;17962:17;17955:47;18019:131;18145:4;18019:131;:::i;:::-;18011:139;;17738:419;;;:::o;18163:168::-;18303:20;18299:1;18291:6;18287:14;18280:44;18163:168;:::o;18337:366::-;18479:3;18500:67;18564:2;18559:3;18500:67;:::i;:::-;18493:74;;18576:93;18665:3;18576:93;:::i;:::-;18694:2;18689:3;18685:12;18678:19;;18337:366;;;:::o;18709:419::-;18875:4;18913:2;18902:9;18898:18;18890:26;;18962:9;18956:4;18952:20;18948:1;18937:9;18933:17;18926:47;18990:131;19116:4;18990:131;:::i;:::-;18982:139;;18709:419;;;:::o;19134:166::-;19274:18;19270:1;19262:6;19258:14;19251:42;19134:166;:::o;19306:366::-;19448:3;19469:67;19533:2;19528:3;19469:67;:::i;:::-;19462:74;;19545:93;19634:3;19545:93;:::i;:::-;19663:2;19658:3;19654:12;19647:19;;19306:366;;;:::o;19678:419::-;19844:4;19882:2;19871:9;19867:18;19859:26;;19931:9;19925:4;19921:20;19917:1;19906:9;19902:17;19895:47;19959:131;20085:4;19959:131;:::i;:::-;19951:139;;19678:419;;;:::o;20103:224::-;20243:34;20239:1;20231:6;20227:14;20220:58;20312:7;20307:2;20299:6;20295:15;20288:32;20103:224;:::o;20333:366::-;20475:3;20496:67;20560:2;20555:3;20496:67;:::i;:::-;20489:74;;20572:93;20661:3;20572:93;:::i;:::-;20690:2;20685:3;20681:12;20674:19;;20333:366;;;:::o;20705:419::-;20871:4;20909:2;20898:9;20894:18;20886:26;;20958:9;20952:4;20948:20;20944:1;20933:9;20929:17;20922:47;20986:131;21112:4;20986:131;:::i;:::-;20978:139;;20705:419;;;:::o;21130:170::-;21270:22;21266:1;21258:6;21254:14;21247:46;21130:170;:::o;21306:366::-;21448:3;21469:67;21533:2;21528:3;21469:67;:::i;:::-;21462:74;;21545:93;21634:3;21545:93;:::i;:::-;21663:2;21658:3;21654:12;21647:19;;21306:366;;;:::o;21678:419::-;21844:4;21882:2;21871:9;21867:18;21859:26;;21931:9;21925:4;21921:20;21917:1;21906:9;21902:17;21895:47;21959:131;22085:4;21959:131;:::i;:::-;21951:139;;21678:419;;;:::o;22103:223::-;22243:34;22239:1;22231:6;22227:14;22220:58;22312:6;22307:2;22299:6;22295:15;22288:31;22103:223;:::o;22332:366::-;22474:3;22495:67;22559:2;22554:3;22495:67;:::i;:::-;22488:74;;22571:93;22660:3;22571:93;:::i;:::-;22689:2;22684:3;22680:12;22673:19;;22332:366;;;:::o;22704:419::-;22870:4;22908:2;22897:9;22893:18;22885:26;;22957:9;22951:4;22947:20;22943:1;22932:9;22928:17;22921:47;22985:131;23111:4;22985:131;:::i;:::-;22977:139;;22704:419;;;:::o;23129:221::-;23269:34;23265:1;23257:6;23253:14;23246:58;23338:4;23333:2;23325:6;23321:15;23314:29;23129:221;:::o;23356:366::-;23498:3;23519:67;23583:2;23578:3;23519:67;:::i;:::-;23512:74;;23595:93;23684:3;23595:93;:::i;:::-;23713:2;23708:3;23704:12;23697:19;;23356:366;;;:::o;23728:419::-;23894:4;23932:2;23921:9;23917:18;23909:26;;23981:9;23975:4;23971:20;23967:1;23956:9;23952:17;23945:47;24009:131;24135:4;24009:131;:::i;:::-;24001:139;;23728:419;;;:::o;24153:224::-;24293:34;24289:1;24281:6;24277:14;24270:58;24362:7;24357:2;24349:6;24345:15;24338:32;24153:224;:::o;24383:366::-;24525:3;24546:67;24610:2;24605:3;24546:67;:::i;:::-;24539:74;;24622:93;24711:3;24622:93;:::i;:::-;24740:2;24735:3;24731:12;24724:19;;24383:366;;;:::o;24755:419::-;24921:4;24959:2;24948:9;24944:18;24936:26;;25008:9;25002:4;24998:20;24994:1;24983:9;24979:17;24972:47;25036:131;25162:4;25036:131;:::i;:::-;25028:139;;24755:419;;;:::o;25180:222::-;25320:34;25316:1;25308:6;25304:14;25297:58;25389:5;25384:2;25376:6;25372:15;25365:30;25180:222;:::o;25408:366::-;25550:3;25571:67;25635:2;25630:3;25571:67;:::i;:::-;25564:74;;25647:93;25736:3;25647:93;:::i;:::-;25765:2;25760:3;25756:12;25749:19;;25408:366;;;:::o;25780:419::-;25946:4;25984:2;25973:9;25969:18;25961:26;;26033:9;26027:4;26023:20;26019:1;26008:9;26004:17;25997:47;26061:131;26187:4;26061:131;:::i;:::-;26053:139;;25780:419;;;:::o;26205:225::-;26345:34;26341:1;26333:6;26329:14;26322:58;26414:8;26409:2;26401:6;26397:15;26390:33;26205:225;:::o;26436:366::-;26578:3;26599:67;26663:2;26658:3;26599:67;:::i;:::-;26592:74;;26675:93;26764:3;26675:93;:::i;:::-;26793:2;26788:3;26784:12;26777:19;;26436:366;;;:::o;26808:419::-;26974:4;27012:2;27001:9;26997:18;26989:26;;27061:9;27055:4;27051:20;27047:1;27036:9;27032:17;27025:47;27089:131;27215:4;27089:131;:::i;:::-;27081:139;;26808:419;;;:::o;27233:220::-;27373:34;27369:1;27361:6;27357:14;27350:58;27442:3;27437:2;27429:6;27425:15;27418:28;27233:220;:::o;27459:366::-;27601:3;27622:67;27686:2;27681:3;27622:67;:::i;:::-;27615:74;;27698:93;27787:3;27698:93;:::i;:::-;27816:2;27811:3;27807:12;27800:19;;27459:366;;;:::o;27831:419::-;27997:4;28035:2;28024:9;28020:18;28012:26;;28084:9;28078:4;28074:20;28070:1;28059:9;28055:17;28048:47;28112:131;28238:4;28112:131;:::i;:::-;28104:139;;27831:419;;;:::o;28256:221::-;28396:34;28392:1;28384:6;28380:14;28373:58;28465:4;28460:2;28452:6;28448:15;28441:29;28256:221;:::o;28483:366::-;28625:3;28646:67;28710:2;28705:3;28646:67;:::i;:::-;28639:74;;28722:93;28811:3;28722:93;:::i;:::-;28840:2;28835:3;28831:12;28824:19;;28483:366;;;:::o;28855:419::-;29021:4;29059:2;29048:9;29044:18;29036:26;;29108:9;29102:4;29098:20;29094:1;29083:9;29079:17;29072:47;29136:131;29262:4;29136:131;:::i;:::-;29128:139;;28855:419;;;:::o;29280:194::-;29320:4;29340:20;29358:1;29340:20;:::i;:::-;29335:25;;29374:20;29392:1;29374:20;:::i;:::-;29369:25;;29418:1;29415;29411:9;29403:17;;29442:1;29436:4;29433:11;29430:37;;;29447:18;;:::i;:::-;29430:37;29280:194;;;;:::o;29480:179::-;29620:31;29616:1;29608:6;29604:14;29597:55;29480:179;:::o;29665:366::-;29807:3;29828:67;29892:2;29887:3;29828:67;:::i;:::-;29821:74;;29904:93;29993:3;29904:93;:::i;:::-;30022:2;30017:3;30013:12;30006:19;;29665:366;;;:::o;30037:419::-;30203:4;30241:2;30230:9;30226:18;30218:26;;30290:9;30284:4;30280:20;30276:1;30265:9;30261:17;30254:47;30318:131;30444:4;30318:131;:::i;:::-;30310:139;;30037:419;;;:::o;30462:180::-;30510:77;30507:1;30500:88;30607:4;30604:1;30597:15;30631:4;30628:1;30621:15;30648:185;30688:1;30705:20;30723:1;30705:20;:::i;:::-;30700:25;;30739:20;30757:1;30739:20;:::i;:::-;30734:25;;30778:1;30768:35;;30783:18;;:::i;:::-;30768:35;30825:1;30822;30818:9;30813:14;;30648:185;;;;:::o;30839:233::-;30878:3;30901:24;30919:5;30901:24;:::i;:::-;30892:33;;30947:66;30940:5;30937:77;30934:103;;31017:18;;:::i;:::-;30934:103;31064:1;31057:5;31053:13;31046:20;;30839:233;;;:::o;31078:79::-;31117:7;31146:5;31135:16;;31078:79;;;:::o;31163:157::-;31268:45;31288:24;31306:5;31288:24;:::i;:::-;31268:45;:::i;:::-;31263:3;31256:58;31163:157;;:::o;31326:94::-;31359:8;31407:5;31403:2;31399:14;31378:35;;31326:94;;;:::o;31426:::-;31465:7;31494:20;31508:5;31494:20;:::i;:::-;31483:31;;31426:94;;;:::o;31526:100::-;31565:7;31594:26;31614:5;31594:26;:::i;:::-;31583:37;;31526:100;;;:::o;31632:157::-;31737:45;31757:24;31775:5;31757:24;:::i;:::-;31737:45;:::i;:::-;31732:3;31725:58;31632:157;;:::o;31795:538::-;31963:3;31978:75;32049:3;32040:6;31978:75;:::i;:::-;32078:2;32073:3;32069:12;32062:19;;32091:75;32162:3;32153:6;32091:75;:::i;:::-;32191:2;32186:3;32182:12;32175:19;;32204:75;32275:3;32266:6;32204:75;:::i;:::-;32304:2;32299:3;32295:12;32288:19;;32324:3;32317:10;;31795:538;;;;;;:::o;32339:176::-;32371:1;32388:20;32406:1;32388:20;:::i;:::-;32383:25;;32422:20;32440:1;32422:20;:::i;:::-;32417:25;;32461:1;32451:35;;32466:18;;:::i;:::-;32451:35;32507:1;32504;32500:9;32495:14;;32339:176;;;;:::o",
	"source": "//SPDX-License-Identifier: Unlicense\npragma solidity ^0.8.0;\n\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\nimport \"./LiquidityPool.sol\";\n\ncontract JMToken is ERC20 {\n    event TokensBought(address indexed _account, uint256 amount); // 펀딩이후 토큰 클레임 \n    event OwnerAction(); // 오너의 액션\n    event FundsMoved(); // 펀딩 종료 \n\n    uint256 public MAX_SUPPLY; // 발행량 \n    uint256 public constant TAX = 1; //  수수료 tx 1%\n    uint256 public totalContributed; // 총 이더 기부금액 \n    bool public isContractPaused; // 컨트랙트 동작 상태\n    bool public fundsAlreadyMoved;\n    bool public isTaxOn = true; // 현재 수수료 on off \n    address public owner; // 오너 \n    address payable public treasuryWallet; // 비상금 계좌!\n    address public Router;\n    address public MapleNFT;\n    address public MapleItems;\n    address public winRewardAddr;\n    uint winRewardAmount;\n    uint randNum = 0;\n    uint rewardProbability = 70;\n\n    mapping(address => uint256) public balancesToClaim; // 투자금1:100 비율==jmt\n    mapping(address => uint256) public contributionsOf; // 실제 기부금 eth\n    mapping(address => bool) public isWhitelisted;\n\n    constructor(address payable treasury) ERC20(\"JMT Token\", \"JMT\") {\n        MAX_SUPPLY = 1000000 * 10**decimals(); \n        _mint(address(this), MAX_SUPPLY); \n        owner = msg.sender; \n        treasuryWallet = treasury; // 임시,현재는 오너 지갑\n        isWhitelisted[owner] = true; // 오너 자동 화리  \n    }\n\n    modifier ownerOnly() {\n        require(msg.sender == owner, \"OWNER_ONLY\");\n        _;\n    }\n\n    modifier mapleNFTOnly(){\n        require(msg.sender == MapleNFT || msg.sender == MapleItems, \"MAPLENFT_ONLY\");\n        _;\n    }\n    // router 컨트랙트에서만 실행\n    modifier routerOnly() {\n        require(msg.sender == Router || msg.sender == MapleNFT || msg.sender == MapleItems, \"ROUTER_OR_MAPLE_ONLY\");\n        _;\n    }\n    // 펀딩 종료 체크 \n    modifier areFundsMoved() {\n        require(!fundsAlreadyMoved, \"FUNDS_MOVED_TO_LP\");\n        _;\n    }\n\n    // 컨트랙트 상태 \n    modifier isPaused() {\n        require(!isContractPaused, \"CONTRACT_PAUSED\");\n        _;\n    }\n\n\n    // 첫 계약 제로 계정 배포자(0x0)와 같은지 확인, 딱 한번만 실행가능\n    function setRouterAddress(address _router) external  ownerOnly {\n        require(address(Router) == address(0), \"WRITE_ONCE!\"); // 0x00000000\n        Router = _router;\n    }\n\n     function setMapleNFTAddress(address _mapleNft) external  ownerOnly {\n        require(address(MapleNFT) == address(0), \"WRITE_ONCE!\");\n        MapleNFT = _mapleNft;\n    }\n    function setMapleItemsAddress(address _mapleItems ) external  ownerOnly {\n        require(address(MapleItems) == address(0), \"WRITE_ONCE!\");\n        MapleItems = _mapleItems;\n    }\n  \n    // 이더 펀딩 \n    function contribute() external payable isPaused areFundsMoved {\n\n        //교환 비율이 1:100\n        uint256 tokenAmount = msg.value * 100;\n        balancesToClaim[msg.sender] += tokenAmount;\n        contributionsOf[msg.sender] += msg.value;\n        totalContributed += msg.value; \n        emit TokensBought(msg.sender, tokenAmount);\n    }\n    \n    // 펀딩 jmt토큰 클레임 \n    function claimTokens() external isPaused areFundsMoved {\n        require(balancesToClaim[msg.sender] > 0, \"NO_AVAILABLE_FUNDS\"); // 수령이 가능한 토큰을 보유하고있는지 체크 \n        uint256 tokensToClaim = balancesToClaim[msg.sender];\n        balancesToClaim[msg.sender] = 0;\n\n        super._transfer(address(this), msg.sender, tokensToClaim); // 컨트랙트 -> sender 전송\n    }\n\n    //컨트랙트 pause스위치 \n    function togglePauseContract() external ownerOnly {\n        isContractPaused = !isContractPaused;\n        emit OwnerAction();\n    }\n\n    // tx스위치 기본 : true\n    function toggleTax() external ownerOnly {\n        isTaxOn = !isTaxOn;\n        emit OwnerAction();\n    }\n\n    // 화리에 유저 추가\n    function addToWhitelist(address account) external ownerOnly {\n        isWhitelisted[account] = true;\n    }\n\n    function _transfer(address sender, address recipient, uint256 amount) internal override {\n        uint256 amountToTake;\n        // tx계산\n        if (isTaxOn) {\n            amountToTake = (TAX * amount) / 100;\n        }\n        uint256 amountToTransfer = amount - amountToTake;\n        // 수수료를 뺀만큼 전송 \n        super._transfer(sender, recipient, amountToTransfer);\n        // 수수료는 비상금으로 축적\n        super._transfer(sender, treasuryWallet, amountToTake); \n    }\n\n    function mint(address account, uint256 amount) external ownerOnly {\n        require(account != address(0), \"ERC20: mint to the zero address\"); // 주소 전송 가능 여부 체크 \n        require(totalSupply() + amount <= MAX_SUPPLY, \"ABOVE_MAX_SUPPLY\"); // 총발행량 체크 \n        _mint(account, amount * 10**decimals());\n    }\n    \n    function burn(address account, uint256 amount) external ownerOnly {\n        _burn(account, amount * 10**decimals());\n    }\n\n    function marketBurn(address account, uint256 amount) external mapleNFTOnly {\n        _burn(account, amount);\n\n    }\n\n    //tranferfrom에서 권한 부여\n    //spender에게 토큰 거래 제한\n    //라우터에서만 호출 가능 외부 컨트랙트를 통한 호출x \n    function increaseContractAllowance(address _owner,address _spender,uint256 _amount)  \n        public routerOnly returns (bool) {\n        // spender에게 토큰 사용 허용 토큰양 추척해서 거래 제한 ㄱ \n        // allowance 현재 제한 해제된 토큰 상황 return \n        _approve(\n            _owner, // from\n            _spender, // to\n            allowance(msg.sender, address(this)) + _amount\n        ); \n        return true;\n    }\n\n    // 펀딩 금액 -> lp로 전송,  최초 리저브생성 \n    function sendLiquidityToLPContract(LiquidityPool liquidityPool) external ownerOnly areFundsMoved\n    {\n        fundsAlreadyMoved = true; //클레임불가\n\n        // 이더 기부금 * 100 jmt 에어드랍\n        uint256 jmtCoinAmountToTransfer = totalContributed * 100;\n\n        // lp풀 JMT전송 \n        super._transfer(\n            address(this),\n            address(liquidityPool),\n            jmtCoinAmountToTransfer\n        );\n\n        //msg.value = totalContributed, 리저브 생성, 이더전송\n        liquidityPool.deposit{value: totalContributed}(\n            jmtCoinAmountToTransfer,\n            address(this)\n        );\n\n        //펀딩 reserve_setting\n        liquidityPool.setFundedReserve();\n\n        sendRemainingFundsToTreasury();\n    }\n    //펀딩 이후 남은 토큰 재무 관련 지갑 전송\n    //일단은 오너지갑으로, 소프트런 각?\n    //실제 서비스시 오너지갑이라면 전쟁\n    function sendRemainingFundsToTreasury() internal {\n        uint256 remainingJMT = balanceOf(address(this));\n        super._transfer(address(this), address(treasuryWallet), remainingJMT);\n        emit FundsMoved();\n    }\n\n    // 전투 랜덤 보상(토큰)\n    function randMod(uint _modulus) internal returns(uint) { // 랜덤함수\n        randNum++;\n        return uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, randNum))) % _modulus;\n    }\n\n    function randRewardToken(address _addr, uint _amount) external {\n        winRewardAddr = _addr;\n        winRewardAmount = _amount;\n        uint rand = randMod(100);\n        require(rand <= rewardProbability, \"Not rewardToken.\" ); // 70% 확률로 JMT 토큰 획득\n        super._transfer(address(treasuryWallet), address(winRewardAddr), winRewardAmount); // JMT 토큰 \n    }\n\n}",
	"sourcePath": "/home/bcdy19/contest/BEB-05-JMT/contract/contracts/JMToken.sol",
	"ast": {
	  "absolutePath": "project:/contracts/JMToken.sol",
	  "exportedSymbols": {
		"Babylonian": [
		  5039
		],
		"Context": [
		  4142
		],
		"ERC20": [
		  2325
		],
		"IERC20": [
		  2403
		],
		"IERC20Metadata": [
		  2428
		],
		"JMToken": [
		  5887
		],
		"LPT": [
		  5940
		],
		"LiquidityPool": [
		  6417
		],
		"Math": [
		  4982
		],
		"Ownable": [
		  112
		]
	  },
	  "id": 5888,
	  "license": "Unlicense",
	  "nodeType": "SourceUnit",
	  "nodes": [
		{
		  "id": 5202,
		  "literals": [
			"solidity",
			"^",
			"0.8",
			".0"
		  ],
		  "nodeType": "PragmaDirective",
		  "src": "37:23:25"
		},
		{
		  "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
		  "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
		  "id": 5203,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 5888,
		  "sourceUnit": 2326,
		  "src": "62:55:25",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "absolutePath": "project:/contracts/LiquidityPool.sol",
		  "file": "./LiquidityPool.sol",
		  "id": 5204,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 5888,
		  "sourceUnit": 6418,
		  "src": "118:29:25",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "abstract": false,
		  "baseContracts": [
			{
			  "baseName": {
				"id": 5205,
				"name": "ERC20",
				"nameLocations": [
				  "169:5:25"
				],
				"nodeType": "IdentifierPath",
				"referencedDeclaration": 2325,
				"src": "169:5:25"
			  },
			  "id": 5206,
			  "nodeType": "InheritanceSpecifier",
			  "src": "169:5:25"
			}
		  ],
		  "canonicalName": "JMToken",
		  "contractDependencies": [],
		  "contractKind": "contract",
		  "fullyImplemented": true,
		  "id": 5887,
		  "linearizedBaseContracts": [
			5887,
			2325,
			2428,
			2403,
			4142
		  ],
		  "name": "JMToken",
		  "nameLocation": "158:7:25",
		  "nodeType": "ContractDefinition",
		  "nodes": [
			{
			  "anonymous": false,
			  "eventSelector": "745f661b8143944fb883f50694ebed3a871e43c451d9d4bf4648a9d551d7e47a",
			  "id": 5212,
			  "name": "TokensBought",
			  "nameLocation": "187:12:25",
			  "nodeType": "EventDefinition",
			  "parameters": {
				"id": 5211,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5208,
					"indexed": true,
					"mutability": "mutable",
					"name": "_account",
					"nameLocation": "216:8:25",
					"nodeType": "VariableDeclaration",
					"scope": 5212,
					"src": "200:24:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5207,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "200:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5210,
					"indexed": false,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "234:6:25",
					"nodeType": "VariableDeclaration",
					"scope": 5212,
					"src": "226:14:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5209,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "226:7:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "199:42:25"
			  },
			  "src": "181:61:25"
			},
			{
			  "anonymous": false,
			  "eventSelector": "e454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d3",
			  "id": 5214,
			  "name": "OwnerAction",
			  "nameLocation": "287:11:25",
			  "nodeType": "EventDefinition",
			  "parameters": {
				"id": 5213,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "298:2:25"
			  },
			  "src": "281:20:25"
			},
			{
			  "anonymous": false,
			  "eventSelector": "a01103220c31ee0c47e79a81104a3e82740390c1d918ad5638190cc185bd92e1",
			  "id": 5216,
			  "name": "FundsMoved",
			  "nameLocation": "332:10:25",
			  "nodeType": "EventDefinition",
			  "parameters": {
				"id": 5215,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "342:2:25"
			  },
			  "src": "326:19:25"
			},
			{
			  "constant": false,
			  "functionSelector": "32cb6b0c",
			  "id": 5218,
			  "mutability": "mutable",
			  "name": "MAX_SUPPLY",
			  "nameLocation": "384:10:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5887,
			  "src": "369:25:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_uint256",
				"typeString": "uint256"
			  },
			  "typeName": {
				"id": 5217,
				"name": "uint256",
				"nodeType": "ElementaryTypeName",
				"src": "369:7:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_uint256",
				  "typeString": "uint256"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": true,
			  "functionSelector": "68f58b03",
			  "id": 5221,
			  "mutability": "constant",
			  "name": "TAX",
			  "nameLocation": "438:3:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5887,
			  "src": "414:31:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_uint256",
				"typeString": "uint256"
			  },
			  "typeName": {
				"id": 5219,
				"name": "uint256",
				"nodeType": "ElementaryTypeName",
				"src": "414:7:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_uint256",
				  "typeString": "uint256"
				}
			  },
			  "value": {
				"hexValue": "31",
				"id": 5220,
				"isConstant": false,
				"isLValue": false,
				"isPure": true,
				"kind": "number",
				"lValueRequested": false,
				"nodeType": "Literal",
				"src": "444:1:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_rational_1_by_1",
				  "typeString": "int_const 1"
				},
				"value": "1"
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "023f4147",
			  "id": 5223,
			  "mutability": "mutable",
			  "name": "totalContributed",
			  "nameLocation": "486:16:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5887,
			  "src": "471:31:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_uint256",
				"typeString": "uint256"
			  },
			  "typeName": {
				"id": 5222,
				"name": "uint256",
				"nodeType": "ElementaryTypeName",
				"src": "471:7:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_uint256",
				  "typeString": "uint256"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "f4ab2928",
			  "id": 5225,
			  "mutability": "mutable",
			  "name": "isContractPaused",
			  "nameLocation": "548:16:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5887,
			  "src": "536:28:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_bool",
				"typeString": "bool"
			  },
			  "typeName": {
				"id": 5224,
				"name": "bool",
				"nodeType": "ElementaryTypeName",
				"src": "536:4:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_bool",
				  "typeString": "bool"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "65acacfe",
			  "id": 5227,
			  "mutability": "mutable",
			  "name": "fundsAlreadyMoved",
			  "nameLocation": "612:17:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5887,
			  "src": "600:29:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_bool",
				"typeString": "bool"
			  },
			  "typeName": {
				"id": 5226,
				"name": "bool",
				"nodeType": "ElementaryTypeName",
				"src": "600:4:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_bool",
				  "typeString": "bool"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "be07d17d",
			  "id": 5230,
			  "mutability": "mutable",
			  "name": "isTaxOn",
			  "nameLocation": "647:7:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5887,
			  "src": "635:26:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_bool",
				"typeString": "bool"
			  },
			  "typeName": {
				"id": 5228,
				"name": "bool",
				"nodeType": "ElementaryTypeName",
				"src": "635:4:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_bool",
				  "typeString": "bool"
				}
			  },
			  "value": {
				"hexValue": "74727565",
				"id": 5229,
				"isConstant": false,
				"isLValue": false,
				"isPure": true,
				"kind": "bool",
				"lValueRequested": false,
				"nodeType": "Literal",
				"src": "657:4:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_bool",
				  "typeString": "bool"
				},
				"value": "true"
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "8da5cb5b",
			  "id": 5232,
			  "mutability": "mutable",
			  "name": "owner",
			  "nameLocation": "710:5:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5887,
			  "src": "695:20:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 5231,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "695:7:25",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "4626402b",
			  "id": 5234,
			  "mutability": "mutable",
			  "name": "treasuryWallet",
			  "nameLocation": "755:14:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5887,
			  "src": "732:37:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address_payable",
				"typeString": "address payable"
			  },
			  "typeName": {
				"id": 5233,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "732:15:25",
				"stateMutability": "payable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address_payable",
				  "typeString": "address payable"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "f6d7eade",
			  "id": 5236,
			  "mutability": "mutable",
			  "name": "Router",
			  "nameLocation": "811:6:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5887,
			  "src": "796:21:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 5235,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "796:7:25",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "1b9631fc",
			  "id": 5238,
			  "mutability": "mutable",
			  "name": "MapleNFT",
			  "nameLocation": "838:8:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5887,
			  "src": "823:23:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 5237,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "823:7:25",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "6eefec11",
			  "id": 5240,
			  "mutability": "mutable",
			  "name": "MapleItems",
			  "nameLocation": "867:10:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5887,
			  "src": "852:25:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 5239,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "852:7:25",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "46c586c2",
			  "id": 5242,
			  "mutability": "mutable",
			  "name": "winRewardAddr",
			  "nameLocation": "898:13:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5887,
			  "src": "883:28:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 5241,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "883:7:25",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "id": 5244,
			  "mutability": "mutable",
			  "name": "winRewardAmount",
			  "nameLocation": "922:15:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5887,
			  "src": "917:20:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_uint256",
				"typeString": "uint256"
			  },
			  "typeName": {
				"id": 5243,
				"name": "uint",
				"nodeType": "ElementaryTypeName",
				"src": "917:4:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_uint256",
				  "typeString": "uint256"
				}
			  },
			  "visibility": "internal"
			},
			{
			  "constant": false,
			  "id": 5247,
			  "mutability": "mutable",
			  "name": "randNum",
			  "nameLocation": "948:7:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5887,
			  "src": "943:16:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_uint256",
				"typeString": "uint256"
			  },
			  "typeName": {
				"id": 5245,
				"name": "uint",
				"nodeType": "ElementaryTypeName",
				"src": "943:4:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_uint256",
				  "typeString": "uint256"
				}
			  },
			  "value": {
				"hexValue": "30",
				"id": 5246,
				"isConstant": false,
				"isLValue": false,
				"isPure": true,
				"kind": "number",
				"lValueRequested": false,
				"nodeType": "Literal",
				"src": "958:1:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_rational_0_by_1",
				  "typeString": "int_const 0"
				},
				"value": "0"
			  },
			  "visibility": "internal"
			},
			{
			  "constant": false,
			  "id": 5250,
			  "mutability": "mutable",
			  "name": "rewardProbability",
			  "nameLocation": "970:17:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5887,
			  "src": "965:27:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_uint256",
				"typeString": "uint256"
			  },
			  "typeName": {
				"id": 5248,
				"name": "uint",
				"nodeType": "ElementaryTypeName",
				"src": "965:4:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_uint256",
				  "typeString": "uint256"
				}
			  },
			  "value": {
				"hexValue": "3730",
				"id": 5249,
				"isConstant": false,
				"isLValue": false,
				"isPure": true,
				"kind": "number",
				"lValueRequested": false,
				"nodeType": "Literal",
				"src": "990:2:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_rational_70_by_1",
				  "typeString": "int_const 70"
				},
				"value": "70"
			  },
			  "visibility": "internal"
			},
			{
			  "constant": false,
			  "functionSelector": "b70f21c7",
			  "id": 5254,
			  "mutability": "mutable",
			  "name": "balancesToClaim",
			  "nameLocation": "1034:15:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5887,
			  "src": "999:50:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				"typeString": "mapping(address => uint256)"
			  },
			  "typeName": {
				"id": 5253,
				"keyType": {
				  "id": 5251,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "1007:7:25",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "999:27:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				  "typeString": "mapping(address => uint256)"
				},
				"valueType": {
				  "id": 5252,
				  "name": "uint256",
				  "nodeType": "ElementaryTypeName",
				  "src": "1018:7:25",
				  "typeDescriptions": {
					"typeIdentifier": "t_uint256",
					"typeString": "uint256"
				  }
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "3af0dbc1",
			  "id": 5258,
			  "mutability": "mutable",
			  "name": "contributionsOf",
			  "nameLocation": "1120:15:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5887,
			  "src": "1085:50:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				"typeString": "mapping(address => uint256)"
			  },
			  "typeName": {
				"id": 5257,
				"keyType": {
				  "id": 5255,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "1093:7:25",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "1085:27:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				  "typeString": "mapping(address => uint256)"
				},
				"valueType": {
				  "id": 5256,
				  "name": "uint256",
				  "nodeType": "ElementaryTypeName",
				  "src": "1104:7:25",
				  "typeDescriptions": {
					"typeIdentifier": "t_uint256",
					"typeString": "uint256"
				  }
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "3af32abf",
			  "id": 5262,
			  "mutability": "mutable",
			  "name": "isWhitelisted",
			  "nameLocation": "1197:13:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5887,
			  "src": "1165:45:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
				"typeString": "mapping(address => bool)"
			  },
			  "typeName": {
				"id": 5261,
				"keyType": {
				  "id": 5259,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "1173:7:25",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "1165:24:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
				  "typeString": "mapping(address => bool)"
				},
				"valueType": {
				  "id": 5260,
				  "name": "bool",
				  "nodeType": "ElementaryTypeName",
				  "src": "1184:4:25",
				  "typeDescriptions": {
					"typeIdentifier": "t_bool",
					"typeString": "bool"
				  }
				}
			  },
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 5303,
				"nodeType": "Block",
				"src": "1281:259:25",
				"statements": [
				  {
					"expression": {
					  "id": 5278,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5271,
						"name": "MAX_SUPPLY",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5218,
						"src": "1291:10:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"commonType": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"id": 5277,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"leftExpression": {
						  "hexValue": "31303030303030",
						  "id": 5272,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "number",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "1304:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_rational_1000000_by_1",
							"typeString": "int_const 1000000"
						  },
						  "value": "1000000"
						},
						"nodeType": "BinaryOperation",
						"operator": "*",
						"rightExpression": {
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 5276,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"hexValue": "3130",
							"id": 5273,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "number",
							"lValueRequested": false,
							"nodeType": "Literal",
							"src": "1314:2:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_rational_10_by_1",
							  "typeString": "int_const 10"
							},
							"value": "10"
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "**",
						  "rightExpression": {
							"arguments": [],
							"expression": {
							  "argumentTypes": [],
							  "id": 5274,
							  "name": "decimals",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 1814,
							  "src": "1318:8:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
								"typeString": "function () view returns (uint8)"
							  }
							},
							"id": 5275,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "1318:10:25",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_uint8",
							  "typeString": "uint8"
							}
						  },
						  "src": "1314:14:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"src": "1304:24:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "1291:37:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 5279,
					"nodeType": "ExpressionStatement",
					"src": "1291:37:25"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 5283,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "1353:4:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$5887",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$5887",
								"typeString": "contract JMToken"
							  }
							],
							"id": 5282,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "1345:7:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5281,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "1345:7:25",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5284,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "1345:13:25",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5285,
						  "name": "MAX_SUPPLY",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5218,
						  "src": "1360:10:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 5280,
						"name": "_mint",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2142,
						"src": "1339:5:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 5286,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1339:32:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5287,
					"nodeType": "ExpressionStatement",
					"src": "1339:32:25"
				  },
				  {
					"expression": {
					  "id": 5291,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5288,
						"name": "owner",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5232,
						"src": "1382:5:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"expression": {
						  "id": 5289,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "1390:3:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 5290,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "1394:6:25",
						"memberName": "sender",
						"nodeType": "MemberAccess",
						"src": "1390:10:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "1382:18:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 5292,
					"nodeType": "ExpressionStatement",
					"src": "1382:18:25"
				  },
				  {
					"expression": {
					  "id": 5295,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5293,
						"name": "treasuryWallet",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5234,
						"src": "1411:14:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address_payable",
						  "typeString": "address payable"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5294,
						"name": "treasury",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5264,
						"src": "1428:8:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address_payable",
						  "typeString": "address payable"
						}
					  },
					  "src": "1411:25:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_address_payable",
						"typeString": "address payable"
					  }
					},
					"id": 5296,
					"nodeType": "ExpressionStatement",
					"src": "1411:25:25"
				  },
				  {
					"expression": {
					  "id": 5301,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "id": 5297,
						  "name": "isWhitelisted",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5262,
						  "src": "1480:13:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
							"typeString": "mapping(address => bool)"
						  }
						},
						"id": 5299,
						"indexExpression": {
						  "id": 5298,
						  "name": "owner",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5232,
						  "src": "1494:5:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "1480:20:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "74727565",
						"id": 5300,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "bool",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "1503:4:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						},
						"value": "true"
					  },
					  "src": "1480:27:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5302,
					"nodeType": "ExpressionStatement",
					"src": "1480:27:25"
				  }
				]
			  },
			  "id": 5304,
			  "implemented": true,
			  "kind": "constructor",
			  "modifiers": [
				{
				  "arguments": [
					{
					  "hexValue": "4a4d5420546f6b656e",
					  "id": 5267,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "kind": "string",
					  "lValueRequested": false,
					  "nodeType": "Literal",
					  "src": "1261:11:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_stringliteral_a9a53302e4bb530eeacfd21a7a31e566429a171ca9336abbe7122b03852140c5",
						"typeString": "literal_string \"JMT Token\""
					  },
					  "value": "JMT Token"
					},
					{
					  "hexValue": "4a4d54",
					  "id": 5268,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "kind": "string",
					  "lValueRequested": false,
					  "nodeType": "Literal",
					  "src": "1274:5:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_stringliteral_5dd6c48417bf5763178b941ef6b12f7c9a2600518281e43bd45fc179a5eeda5c",
						"typeString": "literal_string \"JMT\""
					  },
					  "value": "JMT"
					}
				  ],
				  "id": 5269,
				  "kind": "baseConstructorSpecifier",
				  "modifierName": {
					"id": 5266,
					"name": "ERC20",
					"nameLocations": [
					  "1255:5:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 2325,
					"src": "1255:5:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "1255:25:25"
				}
			  ],
			  "name": "",
			  "nameLocation": "-1:-1:-1",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5265,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5264,
					"mutability": "mutable",
					"name": "treasury",
					"nameLocation": "1245:8:25",
					"nodeType": "VariableDeclaration",
					"scope": 5304,
					"src": "1229:24:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address_payable",
					  "typeString": "address payable"
					},
					"typeName": {
					  "id": 5263,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "1229:15:25",
					  "stateMutability": "payable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address_payable",
						"typeString": "address payable"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1228:26:25"
			  },
			  "returnParameters": {
				"id": 5270,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1281:0:25"
			  },
			  "scope": 5887,
			  "src": "1217:323:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 5315,
				"nodeType": "Block",
				"src": "1567:70:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5310,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"expression": {
							  "id": 5307,
							  "name": "msg",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967281,
							  "src": "1585:3:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_magic_message",
								"typeString": "msg"
							  }
							},
							"id": 5308,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"memberLocation": "1589:6:25",
							"memberName": "sender",
							"nodeType": "MemberAccess",
							"src": "1585:10:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"id": 5309,
							"name": "owner",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5232,
							"src": "1599:5:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "1585:19:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "4f574e45525f4f4e4c59",
						  "id": 5311,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "1606:12:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20",
							"typeString": "literal_string \"OWNER_ONLY\""
						  },
						  "value": "OWNER_ONLY"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20",
							"typeString": "literal_string \"OWNER_ONLY\""
						  }
						],
						"id": 5306,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "1577:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5312,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1577:42:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5313,
					"nodeType": "ExpressionStatement",
					"src": "1577:42:25"
				  },
				  {
					"id": 5314,
					"nodeType": "PlaceholderStatement",
					"src": "1629:1:25"
				  }
				]
			  },
			  "id": 5316,
			  "name": "ownerOnly",
			  "nameLocation": "1555:9:25",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 5305,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1564:2:25"
			  },
			  "src": "1546:91:25",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5332,
				"nodeType": "Block",
				"src": "1666:104:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  "id": 5327,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"commonType": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							},
							"id": 5322,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "expression": {
								"id": 5319,
								"name": "msg",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967281,
								"src": "1684:3:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_magic_message",
								  "typeString": "msg"
								}
							  },
							  "id": 5320,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberLocation": "1688:6:25",
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "1684:10:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": "==",
							"rightExpression": {
							  "id": 5321,
							  "name": "MapleNFT",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5238,
							  "src": "1698:8:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"src": "1684:22:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "||",
						  "rightExpression": {
							"commonType": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							},
							"id": 5326,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "expression": {
								"id": 5323,
								"name": "msg",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967281,
								"src": "1710:3:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_magic_message",
								  "typeString": "msg"
								}
							  },
							  "id": 5324,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberLocation": "1714:6:25",
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "1710:10:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": "==",
							"rightExpression": {
							  "id": 5325,
							  "name": "MapleItems",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5240,
							  "src": "1724:10:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"src": "1710:24:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "src": "1684:50:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "4d41504c454e46545f4f4e4c59",
						  "id": 5328,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "1736:15:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2",
							"typeString": "literal_string \"MAPLENFT_ONLY\""
						  },
						  "value": "MAPLENFT_ONLY"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2",
							"typeString": "literal_string \"MAPLENFT_ONLY\""
						  }
						],
						"id": 5318,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "1676:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5329,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1676:76:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5330,
					"nodeType": "ExpressionStatement",
					"src": "1676:76:25"
				  },
				  {
					"id": 5331,
					"nodeType": "PlaceholderStatement",
					"src": "1762:1:25"
				  }
				]
			  },
			  "id": 5333,
			  "name": "mapleNFTOnly",
			  "nameLocation": "1652:12:25",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 5317,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1664:2:25"
			  },
			  "src": "1643:127:25",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5354,
				"nodeType": "Block",
				"src": "1840:135:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  "id": 5349,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"commonType": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							},
							"id": 5344,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "commonType": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  },
							  "id": 5339,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "leftExpression": {
								"expression": {
								  "id": 5336,
								  "name": "msg",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 4294967281,
								  "src": "1858:3:25",
								  "typeDescriptions": {
									"typeIdentifier": "t_magic_message",
									"typeString": "msg"
								  }
								},
								"id": 5337,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"memberLocation": "1862:6:25",
								"memberName": "sender",
								"nodeType": "MemberAccess",
								"src": "1858:10:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  "nodeType": "BinaryOperation",
							  "operator": "==",
							  "rightExpression": {
								"id": 5338,
								"name": "Router",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5236,
								"src": "1872:6:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  "src": "1858:20:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": "||",
							"rightExpression": {
							  "commonType": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  },
							  "id": 5343,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "leftExpression": {
								"expression": {
								  "id": 5340,
								  "name": "msg",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 4294967281,
								  "src": "1882:3:25",
								  "typeDescriptions": {
									"typeIdentifier": "t_magic_message",
									"typeString": "msg"
								  }
								},
								"id": 5341,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"memberLocation": "1886:6:25",
								"memberName": "sender",
								"nodeType": "MemberAccess",
								"src": "1882:10:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  "nodeType": "BinaryOperation",
							  "operator": "==",
							  "rightExpression": {
								"id": 5342,
								"name": "MapleNFT",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5238,
								"src": "1896:8:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  "src": "1882:22:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							  }
							},
							"src": "1858:46:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "||",
						  "rightExpression": {
							"commonType": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							},
							"id": 5348,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "expression": {
								"id": 5345,
								"name": "msg",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967281,
								"src": "1908:3:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_magic_message",
								  "typeString": "msg"
								}
							  },
							  "id": 5346,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberLocation": "1912:6:25",
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "1908:10:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": "==",
							"rightExpression": {
							  "id": 5347,
							  "name": "MapleItems",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5240,
							  "src": "1922:10:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"src": "1908:24:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "src": "1858:74:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "524f555445525f4f525f4d41504c455f4f4e4c59",
						  "id": 5350,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "1934:22:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c",
							"typeString": "literal_string \"ROUTER_OR_MAPLE_ONLY\""
						  },
						  "value": "ROUTER_OR_MAPLE_ONLY"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c",
							"typeString": "literal_string \"ROUTER_OR_MAPLE_ONLY\""
						  }
						],
						"id": 5335,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "1850:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5351,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1850:107:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5352,
					"nodeType": "ExpressionStatement",
					"src": "1850:107:25"
				  },
				  {
					"id": 5353,
					"nodeType": "PlaceholderStatement",
					"src": "1967:1:25"
				  }
				]
			  },
			  "id": 5355,
			  "name": "routerOnly",
			  "nameLocation": "1827:10:25",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 5334,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1837:2:25"
			  },
			  "src": "1818:157:25",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5364,
				"nodeType": "Block",
				"src": "2034:76:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5359,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "nodeType": "UnaryOperation",
						  "operator": "!",
						  "prefix": true,
						  "src": "2052:18:25",
						  "subExpression": {
							"id": 5358,
							"name": "fundsAlreadyMoved",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5227,
							"src": "2053:17:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "46554e44535f4d4f5645445f544f5f4c50",
						  "id": 5360,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2072:19:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c",
							"typeString": "literal_string \"FUNDS_MOVED_TO_LP\""
						  },
						  "value": "FUNDS_MOVED_TO_LP"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c",
							"typeString": "literal_string \"FUNDS_MOVED_TO_LP\""
						  }
						],
						"id": 5357,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2044:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5361,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2044:48:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5362,
					"nodeType": "ExpressionStatement",
					"src": "2044:48:25"
				  },
				  {
					"id": 5363,
					"nodeType": "PlaceholderStatement",
					"src": "2102:1:25"
				  }
				]
			  },
			  "id": 5365,
			  "name": "areFundsMoved",
			  "nameLocation": "2018:13:25",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 5356,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2031:2:25"
			  },
			  "src": "2009:101:25",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5374,
				"nodeType": "Block",
				"src": "2164:73:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5369,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "nodeType": "UnaryOperation",
						  "operator": "!",
						  "prefix": true,
						  "src": "2182:17:25",
						  "subExpression": {
							"id": 5368,
							"name": "isContractPaused",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5225,
							"src": "2183:16:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "434f4e54524143545f504155534544",
						  "id": 5370,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2201:17:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3",
							"typeString": "literal_string \"CONTRACT_PAUSED\""
						  },
						  "value": "CONTRACT_PAUSED"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3",
							"typeString": "literal_string \"CONTRACT_PAUSED\""
						  }
						],
						"id": 5367,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2174:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5371,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2174:45:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5372,
					"nodeType": "ExpressionStatement",
					"src": "2174:45:25"
				  },
				  {
					"id": 5373,
					"nodeType": "PlaceholderStatement",
					"src": "2229:1:25"
				  }
				]
			  },
			  "id": 5375,
			  "name": "isPaused",
			  "nameLocation": "2153:8:25",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 5366,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2161:2:25"
			  },
			  "src": "2144:93:25",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5399,
				"nodeType": "Block",
				"src": "2402:110:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5391,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"arguments": [
							  {
								"id": 5385,
								"name": "Router",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5236,
								"src": "2428:6:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  ],
							  "id": 5384,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "2420:7:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5383,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "2420:7:25",
								"typeDescriptions": {}
							  }
							},
							"id": 5386,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2420:15:25",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"arguments": [
							  {
								"hexValue": "30",
								"id": 5389,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "2447:1:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								},
								"value": "0"
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								}
							  ],
							  "id": 5388,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "2439:7:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5387,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "2439:7:25",
								"typeDescriptions": {}
							  }
							},
							"id": 5390,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2439:10:25",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "2420:29:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "57524954455f4f4e434521",
						  "id": 5392,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2451:13:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  },
						  "value": "WRITE_ONCE!"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  }
						],
						"id": 5382,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2412:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5393,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2412:53:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5394,
					"nodeType": "ExpressionStatement",
					"src": "2412:53:25"
				  },
				  {
					"expression": {
					  "id": 5397,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5395,
						"name": "Router",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5236,
						"src": "2489:6:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5396,
						"name": "_router",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5377,
						"src": "2498:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "2489:16:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 5398,
					"nodeType": "ExpressionStatement",
					"src": "2489:16:25"
				  }
				]
			  },
			  "functionSelector": "41cb87fc",
			  "id": 5400,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5380,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5379,
					"name": "ownerOnly",
					"nameLocations": [
					  "2392:9:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5316,
					"src": "2392:9:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "2392:9:25"
				}
			  ],
			  "name": "setRouterAddress",
			  "nameLocation": "2348:16:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5378,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5377,
					"mutability": "mutable",
					"name": "_router",
					"nameLocation": "2373:7:25",
					"nodeType": "VariableDeclaration",
					"scope": 5400,
					"src": "2365:15:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5376,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "2365:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2364:17:25"
			  },
			  "returnParameters": {
				"id": 5381,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2402:0:25"
			  },
			  "scope": 5887,
			  "src": "2339:173:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5424,
				"nodeType": "Block",
				"src": "2586:102:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5416,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"arguments": [
							  {
								"id": 5410,
								"name": "MapleNFT",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5238,
								"src": "2612:8:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  ],
							  "id": 5409,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "2604:7:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5408,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "2604:7:25",
								"typeDescriptions": {}
							  }
							},
							"id": 5411,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2604:17:25",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"arguments": [
							  {
								"hexValue": "30",
								"id": 5414,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "2633:1:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								},
								"value": "0"
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								}
							  ],
							  "id": 5413,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "2625:7:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5412,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "2625:7:25",
								"typeDescriptions": {}
							  }
							},
							"id": 5415,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2625:10:25",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "2604:31:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "57524954455f4f4e434521",
						  "id": 5417,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2637:13:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  },
						  "value": "WRITE_ONCE!"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  }
						],
						"id": 5407,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2596:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5418,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2596:55:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5419,
					"nodeType": "ExpressionStatement",
					"src": "2596:55:25"
				  },
				  {
					"expression": {
					  "id": 5422,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5420,
						"name": "MapleNFT",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5238,
						"src": "2661:8:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5421,
						"name": "_mapleNft",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5402,
						"src": "2672:9:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "2661:20:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 5423,
					"nodeType": "ExpressionStatement",
					"src": "2661:20:25"
				  }
				]
			  },
			  "functionSelector": "83925460",
			  "id": 5425,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5405,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5404,
					"name": "ownerOnly",
					"nameLocations": [
					  "2576:9:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5316,
					"src": "2576:9:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "2576:9:25"
				}
			  ],
			  "name": "setMapleNFTAddress",
			  "nameLocation": "2528:18:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5403,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5402,
					"mutability": "mutable",
					"name": "_mapleNft",
					"nameLocation": "2555:9:25",
					"nodeType": "VariableDeclaration",
					"scope": 5425,
					"src": "2547:17:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5401,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "2547:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2546:19:25"
			  },
			  "returnParameters": {
				"id": 5406,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2586:0:25"
			  },
			  "scope": 5887,
			  "src": "2519:169:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5449,
				"nodeType": "Block",
				"src": "2765:108:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5441,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"arguments": [
							  {
								"id": 5435,
								"name": "MapleItems",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5240,
								"src": "2791:10:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  ],
							  "id": 5434,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "2783:7:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5433,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "2783:7:25",
								"typeDescriptions": {}
							  }
							},
							"id": 5436,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2783:19:25",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"arguments": [
							  {
								"hexValue": "30",
								"id": 5439,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "2814:1:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								},
								"value": "0"
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								}
							  ],
							  "id": 5438,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "2806:7:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5437,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "2806:7:25",
								"typeDescriptions": {}
							  }
							},
							"id": 5440,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2806:10:25",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "2783:33:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "57524954455f4f4e434521",
						  "id": 5442,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2818:13:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  },
						  "value": "WRITE_ONCE!"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  }
						],
						"id": 5432,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2775:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5443,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2775:57:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5444,
					"nodeType": "ExpressionStatement",
					"src": "2775:57:25"
				  },
				  {
					"expression": {
					  "id": 5447,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5445,
						"name": "MapleItems",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5240,
						"src": "2842:10:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5446,
						"name": "_mapleItems",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5427,
						"src": "2855:11:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "2842:24:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 5448,
					"nodeType": "ExpressionStatement",
					"src": "2842:24:25"
				  }
				]
			  },
			  "functionSelector": "ec71ef89",
			  "id": 5450,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5430,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5429,
					"name": "ownerOnly",
					"nameLocations": [
					  "2755:9:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5316,
					"src": "2755:9:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "2755:9:25"
				}
			  ],
			  "name": "setMapleItemsAddress",
			  "nameLocation": "2702:20:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5428,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5427,
					"mutability": "mutable",
					"name": "_mapleItems",
					"nameLocation": "2731:11:25",
					"nodeType": "VariableDeclaration",
					"scope": 5450,
					"src": "2723:19:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5426,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "2723:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2722:22:25"
			  },
			  "returnParameters": {
				"id": 5431,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2765:0:25"
			  },
			  "scope": 5887,
			  "src": "2693:180:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5490,
				"nodeType": "Block",
				"src": "2965:282:25",
				"statements": [
				  {
					"assignments": [
					  5458
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5458,
						"mutability": "mutable",
						"name": "tokenAmount",
						"nameLocation": "3017:11:25",
						"nodeType": "VariableDeclaration",
						"scope": 5490,
						"src": "3009:19:25",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5457,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "3009:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5463,
					"initialValue": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 5462,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"expression": {
						  "id": 5459,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "3031:3:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 5460,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "3035:5:25",
						"memberName": "value",
						"nodeType": "MemberAccess",
						"src": "3031:9:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "*",
					  "rightExpression": {
						"hexValue": "313030",
						"id": 5461,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "3043:3:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_100_by_1",
						  "typeString": "int_const 100"
						},
						"value": "100"
					  },
					  "src": "3031:15:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "3009:37:25"
				  },
				  {
					"expression": {
					  "id": 5469,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "id": 5464,
						  "name": "balancesToClaim",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5254,
						  "src": "3056:15:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
							"typeString": "mapping(address => uint256)"
						  }
						},
						"id": 5467,
						"indexExpression": {
						  "expression": {
							"id": 5465,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3072:3:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 5466,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "3076:6:25",
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3072:10:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "3056:27:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "+=",
					  "rightHandSide": {
						"id": 5468,
						"name": "tokenAmount",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5458,
						"src": "3087:11:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "3056:42:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 5470,
					"nodeType": "ExpressionStatement",
					"src": "3056:42:25"
				  },
				  {
					"expression": {
					  "id": 5477,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "id": 5471,
						  "name": "contributionsOf",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5258,
						  "src": "3108:15:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
							"typeString": "mapping(address => uint256)"
						  }
						},
						"id": 5474,
						"indexExpression": {
						  "expression": {
							"id": 5472,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3124:3:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 5473,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "3128:6:25",
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3124:10:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "3108:27:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "+=",
					  "rightHandSide": {
						"expression": {
						  "id": 5475,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "3139:3:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 5476,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "3143:5:25",
						"memberName": "value",
						"nodeType": "MemberAccess",
						"src": "3139:9:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "3108:40:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 5478,
					"nodeType": "ExpressionStatement",
					"src": "3108:40:25"
				  },
				  {
					"expression": {
					  "id": 5482,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5479,
						"name": "totalContributed",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5223,
						"src": "3158:16:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "+=",
					  "rightHandSide": {
						"expression": {
						  "id": 5480,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "3178:3:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 5481,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "3182:5:25",
						"memberName": "value",
						"nodeType": "MemberAccess",
						"src": "3178:9:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "3158:29:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 5483,
					"nodeType": "ExpressionStatement",
					"src": "3158:29:25"
				  },
				  {
					"eventCall": {
					  "arguments": [
						{
						  "expression": {
							"id": 5485,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3216:3:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 5486,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "3220:6:25",
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3216:10:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5487,
						  "name": "tokenAmount",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5458,
						  "src": "3228:11:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 5484,
						"name": "TokensBought",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5212,
						"src": "3203:12:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 5488,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3203:37:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5489,
					"nodeType": "EmitStatement",
					"src": "3198:42:25"
				  }
				]
			  },
			  "functionSelector": "d7bb99ba",
			  "id": 5491,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5453,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5452,
					"name": "isPaused",
					"nameLocations": [
					  "2942:8:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5375,
					"src": "2942:8:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "2942:8:25"
				},
				{
				  "id": 5455,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5454,
					"name": "areFundsMoved",
					"nameLocations": [
					  "2951:13:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5365,
					"src": "2951:13:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "2951:13:25"
				}
			  ],
			  "name": "contribute",
			  "nameLocation": "2912:10:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5451,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2922:2:25"
			  },
			  "returnParameters": {
				"id": 5456,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2965:0:25"
			  },
			  "scope": 5887,
			  "src": "2903:344:25",
			  "stateMutability": "payable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5534,
				"nodeType": "Block",
				"src": "3347:345:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 5504,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"baseExpression": {
							  "id": 5499,
							  "name": "balancesToClaim",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5254,
							  "src": "3365:15:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
								"typeString": "mapping(address => uint256)"
							  }
							},
							"id": 5502,
							"indexExpression": {
							  "expression": {
								"id": 5500,
								"name": "msg",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967281,
								"src": "3381:3:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_magic_message",
								  "typeString": "msg"
								}
							  },
							  "id": 5501,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberLocation": "3385:6:25",
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "3381:10:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"nodeType": "IndexAccess",
							"src": "3365:27:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": ">",
						  "rightExpression": {
							"hexValue": "30",
							"id": 5503,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "number",
							"lValueRequested": false,
							"nodeType": "Literal",
							"src": "3395:1:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_rational_0_by_1",
							  "typeString": "int_const 0"
							},
							"value": "0"
						  },
						  "src": "3365:31:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "4e4f5f415641494c41424c455f46554e4453",
						  "id": 5505,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "3398:20:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64",
							"typeString": "literal_string \"NO_AVAILABLE_FUNDS\""
						  },
						  "value": "NO_AVAILABLE_FUNDS"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64",
							"typeString": "literal_string \"NO_AVAILABLE_FUNDS\""
						  }
						],
						"id": 5498,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "3357:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5506,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3357:62:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5507,
					"nodeType": "ExpressionStatement",
					"src": "3357:62:25"
				  },
				  {
					"assignments": [
					  5509
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5509,
						"mutability": "mutable",
						"name": "tokensToClaim",
						"nameLocation": "3500:13:25",
						"nodeType": "VariableDeclaration",
						"scope": 5534,
						"src": "3492:21:25",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5508,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "3492:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5514,
					"initialValue": {
					  "baseExpression": {
						"id": 5510,
						"name": "balancesToClaim",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5254,
						"src": "3516:15:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
						  "typeString": "mapping(address => uint256)"
						}
					  },
					  "id": 5513,
					  "indexExpression": {
						"expression": {
						  "id": 5511,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "3532:3:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 5512,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "3536:6:25",
						"memberName": "sender",
						"nodeType": "MemberAccess",
						"src": "3532:10:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "isConstant": false,
					  "isLValue": true,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "IndexAccess",
					  "src": "3516:27:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "3492:51:25"
				  },
				  {
					"expression": {
					  "id": 5520,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "id": 5515,
						  "name": "balancesToClaim",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5254,
						  "src": "3553:15:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
							"typeString": "mapping(address => uint256)"
						  }
						},
						"id": 5518,
						"indexExpression": {
						  "expression": {
							"id": 5516,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3569:3:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 5517,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "3573:6:25",
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3569:10:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "3553:27:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "30",
						"id": 5519,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "3583:1:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_0_by_1",
						  "typeString": "int_const 0"
						},
						"value": "0"
					  },
					  "src": "3553:31:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 5521,
					"nodeType": "ExpressionStatement",
					"src": "3553:31:25"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 5527,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "3619:4:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$5887",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$5887",
								"typeString": "contract JMToken"
							  }
							],
							"id": 5526,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "3611:7:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5525,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "3611:7:25",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5528,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "3611:13:25",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "expression": {
							"id": 5529,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3626:3:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 5530,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "3630:6:25",
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3626:10:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5531,
						  "name": "tokensToClaim",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5509,
						  "src": "3638:13:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "id": 5522,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "3595:5:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$5887_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 5524,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "3601:9:25",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2086,
						"src": "3595:15:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5532,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3595:57:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5533,
					"nodeType": "ExpressionStatement",
					"src": "3595:57:25"
				  }
				]
			  },
			  "functionSelector": "48c54b9d",
			  "id": 5535,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5494,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5493,
					"name": "isPaused",
					"nameLocations": [
					  "3324:8:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5375,
					"src": "3324:8:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "3324:8:25"
				},
				{
				  "id": 5496,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5495,
					"name": "areFundsMoved",
					"nameLocations": [
					  "3333:13:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5365,
					"src": "3333:13:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "3333:13:25"
				}
			  ],
			  "name": "claimTokens",
			  "nameLocation": "3301:11:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5492,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3312:2:25"
			  },
			  "returnParameters": {
				"id": 5497,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3347:0:25"
			  },
			  "scope": 5887,
			  "src": "3292:400:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5548,
				"nodeType": "Block",
				"src": "3783:81:25",
				"statements": [
				  {
					"expression": {
					  "id": 5543,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5540,
						"name": "isContractPaused",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5225,
						"src": "3793:16:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5542,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"nodeType": "UnaryOperation",
						"operator": "!",
						"prefix": true,
						"src": "3812:17:25",
						"subExpression": {
						  "id": 5541,
						  "name": "isContractPaused",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5225,
						  "src": "3813:16:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "src": "3793:36:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5544,
					"nodeType": "ExpressionStatement",
					"src": "3793:36:25"
				  },
				  {
					"eventCall": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"id": 5545,
						"name": "OwnerAction",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5214,
						"src": "3844:11:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
						  "typeString": "function ()"
						}
					  },
					  "id": 5546,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3844:13:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5547,
					"nodeType": "EmitStatement",
					"src": "3839:18:25"
				  }
				]
			  },
			  "functionSelector": "d1cabc35",
			  "id": 5549,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5538,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5537,
					"name": "ownerOnly",
					"nameLocations": [
					  "3773:9:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5316,
					"src": "3773:9:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "3773:9:25"
				}
			  ],
			  "name": "togglePauseContract",
			  "nameLocation": "3742:19:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5536,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3761:2:25"
			  },
			  "returnParameters": {
				"id": 5539,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3783:0:25"
			  },
			  "scope": 5887,
			  "src": "3733:131:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5562,
				"nodeType": "Block",
				"src": "3943:63:25",
				"statements": [
				  {
					"expression": {
					  "id": 5557,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5554,
						"name": "isTaxOn",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5230,
						"src": "3953:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5556,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"nodeType": "UnaryOperation",
						"operator": "!",
						"prefix": true,
						"src": "3963:8:25",
						"subExpression": {
						  "id": 5555,
						  "name": "isTaxOn",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5230,
						  "src": "3964:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "src": "3953:18:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5558,
					"nodeType": "ExpressionStatement",
					"src": "3953:18:25"
				  },
				  {
					"eventCall": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"id": 5559,
						"name": "OwnerAction",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5214,
						"src": "3986:11:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
						  "typeString": "function ()"
						}
					  },
					  "id": 5560,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3986:13:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5561,
					"nodeType": "EmitStatement",
					"src": "3981:18:25"
				  }
				]
			  },
			  "functionSelector": "10bf6029",
			  "id": 5563,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5552,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5551,
					"name": "ownerOnly",
					"nameLocations": [
					  "3933:9:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5316,
					"src": "3933:9:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "3933:9:25"
				}
			  ],
			  "name": "toggleTax",
			  "nameLocation": "3912:9:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5550,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3921:2:25"
			  },
			  "returnParameters": {
				"id": 5553,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3943:0:25"
			  },
			  "scope": 5887,
			  "src": "3903:103:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5576,
				"nodeType": "Block",
				"src": "4103:46:25",
				"statements": [
				  {
					"expression": {
					  "id": 5574,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "id": 5570,
						  "name": "isWhitelisted",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5262,
						  "src": "4113:13:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
							"typeString": "mapping(address => bool)"
						  }
						},
						"id": 5572,
						"indexExpression": {
						  "id": 5571,
						  "name": "account",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5565,
						  "src": "4127:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "4113:22:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "74727565",
						"id": 5573,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "bool",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "4138:4:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						},
						"value": "true"
					  },
					  "src": "4113:29:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5575,
					"nodeType": "ExpressionStatement",
					"src": "4113:29:25"
				  }
				]
			  },
			  "functionSelector": "e43252d7",
			  "id": 5577,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5568,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5567,
					"name": "ownerOnly",
					"nameLocations": [
					  "4093:9:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5316,
					"src": "4093:9:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "4093:9:25"
				}
			  ],
			  "name": "addToWhitelist",
			  "nameLocation": "4052:14:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5566,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5565,
					"mutability": "mutable",
					"name": "account",
					"nameLocation": "4075:7:25",
					"nodeType": "VariableDeclaration",
					"scope": 5577,
					"src": "4067:15:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5564,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "4067:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4066:17:25"
			  },
			  "returnParameters": {
				"id": 5569,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "4103:0:25"
			  },
			  "scope": 5887,
			  "src": "4043:106:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "baseFunctions": [
				2086
			  ],
			  "body": {
				"id": 5624,
				"nodeType": "Block",
				"src": "4243:412:25",
				"statements": [
				  {
					"assignments": [
					  5588
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5588,
						"mutability": "mutable",
						"name": "amountToTake",
						"nameLocation": "4261:12:25",
						"nodeType": "VariableDeclaration",
						"scope": 5624,
						"src": "4253:20:25",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5587,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "4253:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5589,
					"nodeType": "VariableDeclarationStatement",
					"src": "4253:20:25"
				  },
				  {
					"condition": {
					  "id": 5590,
					  "name": "isTaxOn",
					  "nodeType": "Identifier",
					  "overloadedDeclarations": [],
					  "referencedDeclaration": 5230,
					  "src": "4307:7:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5601,
					"nodeType": "IfStatement",
					"src": "4303:73:25",
					"trueBody": {
					  "id": 5600,
					  "nodeType": "Block",
					  "src": "4316:60:25",
					  "statements": [
						{
						  "expression": {
							"id": 5598,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftHandSide": {
							  "id": 5591,
							  "name": "amountToTake",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5588,
							  "src": "4330:12:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"nodeType": "Assignment",
							"operator": "=",
							"rightHandSide": {
							  "commonType": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  },
							  "id": 5597,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "leftExpression": {
								"components": [
								  {
									"commonType": {
									  "typeIdentifier": "t_uint256",
									  "typeString": "uint256"
									},
									"id": 5594,
									"isConstant": false,
									"isLValue": false,
									"isPure": false,
									"lValueRequested": false,
									"leftExpression": {
									  "id": 5592,
									  "name": "TAX",
									  "nodeType": "Identifier",
									  "overloadedDeclarations": [],
									  "referencedDeclaration": 5221,
									  "src": "4346:3:25",
									  "typeDescriptions": {
										"typeIdentifier": "t_uint256",
										"typeString": "uint256"
									  }
									},
									"nodeType": "BinaryOperation",
									"operator": "*",
									"rightExpression": {
									  "id": 5593,
									  "name": "amount",
									  "nodeType": "Identifier",
									  "overloadedDeclarations": [],
									  "referencedDeclaration": 5583,
									  "src": "4352:6:25",
									  "typeDescriptions": {
										"typeIdentifier": "t_uint256",
										"typeString": "uint256"
									  }
									},
									"src": "4346:12:25",
									"typeDescriptions": {
									  "typeIdentifier": "t_uint256",
									  "typeString": "uint256"
									}
								  }
								],
								"id": 5595,
								"isConstant": false,
								"isInlineArray": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"nodeType": "TupleExpression",
								"src": "4345:14:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								}
							  },
							  "nodeType": "BinaryOperation",
							  "operator": "/",
							  "rightExpression": {
								"hexValue": "313030",
								"id": 5596,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "4362:3:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_rational_100_by_1",
								  "typeString": "int_const 100"
								},
								"value": "100"
							  },
							  "src": "4345:20:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"src": "4330:35:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "id": 5599,
						  "nodeType": "ExpressionStatement",
						  "src": "4330:35:25"
						}
					  ]
					}
				  },
				  {
					"assignments": [
					  5603
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5603,
						"mutability": "mutable",
						"name": "amountToTransfer",
						"nameLocation": "4393:16:25",
						"nodeType": "VariableDeclaration",
						"scope": 5624,
						"src": "4385:24:25",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5602,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "4385:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5607,
					"initialValue": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 5606,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"id": 5604,
						"name": "amount",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5583,
						"src": "4412:6:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "-",
					  "rightExpression": {
						"id": 5605,
						"name": "amountToTake",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5588,
						"src": "4421:12:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "4412:21:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "4385:48:25"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5611,
						  "name": "sender",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5579,
						  "src": "4501:6:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5612,
						  "name": "recipient",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5581,
						  "src": "4509:9:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5613,
						  "name": "amountToTransfer",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5603,
						  "src": "4520:16:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "id": 5608,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "4485:5:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$5887_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 5610,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "4491:9:25",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2086,
						"src": "4485:15:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5614,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4485:52:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5615,
					"nodeType": "ExpressionStatement",
					"src": "4485:52:25"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5619,
						  "name": "sender",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5579,
						  "src": "4610:6:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5620,
						  "name": "treasuryWallet",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5234,
						  "src": "4618:14:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  }
						},
						{
						  "id": 5621,
						  "name": "amountToTake",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5588,
						  "src": "4634:12:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "id": 5616,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "4594:5:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$5887_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 5618,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "4600:9:25",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2086,
						"src": "4594:15:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5622,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4594:53:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5623,
					"nodeType": "ExpressionStatement",
					"src": "4594:53:25"
				  }
				]
			  },
			  "id": 5625,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "_transfer",
			  "nameLocation": "4164:9:25",
			  "nodeType": "FunctionDefinition",
			  "overrides": {
				"id": 5585,
				"nodeType": "OverrideSpecifier",
				"overrides": [],
				"src": "4234:8:25"
			  },
			  "parameters": {
				"id": 5584,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5579,
					"mutability": "mutable",
					"name": "sender",
					"nameLocation": "4182:6:25",
					"nodeType": "VariableDeclaration",
					"scope": 5625,
					"src": "4174:14:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5578,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "4174:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5581,
					"mutability": "mutable",
					"name": "recipient",
					"nameLocation": "4198:9:25",
					"nodeType": "VariableDeclaration",
					"scope": 5625,
					"src": "4190:17:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5580,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "4190:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5583,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "4217:6:25",
					"nodeType": "VariableDeclaration",
					"scope": 5625,
					"src": "4209:14:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5582,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "4209:7:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4173:51:25"
			  },
			  "returnParameters": {
				"id": 5586,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "4243:0:25"
			  },
			  "scope": 5887,
			  "src": "4155:500:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5664,
				"nodeType": "Block",
				"src": "4727:269:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5640,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"id": 5635,
							"name": "account",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5627,
							"src": "4745:7:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "!=",
						  "rightExpression": {
							"arguments": [
							  {
								"hexValue": "30",
								"id": 5638,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "4764:1:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								},
								"value": "0"
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								}
							  ],
							  "id": 5637,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "4756:7:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5636,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "4756:7:25",
								"typeDescriptions": {}
							  }
							},
							"id": 5639,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "4756:10:25",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "4745:21:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
						  "id": 5641,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "4768:33:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
							"typeString": "literal_string \"ERC20: mint to the zero address\""
						  },
						  "value": "ERC20: mint to the zero address"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
							"typeString": "literal_string \"ERC20: mint to the zero address\""
						  }
						],
						"id": 5634,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "4737:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5642,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4737:65:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5643,
					"nodeType": "ExpressionStatement",
					"src": "4737:65:25"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 5650,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"commonType": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							},
							"id": 5648,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "arguments": [],
							  "expression": {
								"argumentTypes": [],
								"id": 5645,
								"name": "totalSupply",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 1824,
								"src": "4859:11:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
								  "typeString": "function () view returns (uint256)"
								}
							  },
							  "id": 5646,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "kind": "functionCall",
							  "lValueRequested": false,
							  "nameLocations": [],
							  "names": [],
							  "nodeType": "FunctionCall",
							  "src": "4859:13:25",
							  "tryCall": false,
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": "+",
							"rightExpression": {
							  "id": 5647,
							  "name": "amount",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5629,
							  "src": "4875:6:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"src": "4859:22:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "<=",
						  "rightExpression": {
							"id": 5649,
							"name": "MAX_SUPPLY",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5218,
							"src": "4885:10:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "4859:36:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "41424f56455f4d41585f535550504c59",
						  "id": 5651,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "4897:18:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff",
							"typeString": "literal_string \"ABOVE_MAX_SUPPLY\""
						  },
						  "value": "ABOVE_MAX_SUPPLY"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff",
							"typeString": "literal_string \"ABOVE_MAX_SUPPLY\""
						  }
						],
						"id": 5644,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "4851:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5652,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4851:65:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5653,
					"nodeType": "ExpressionStatement",
					"src": "4851:65:25"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5655,
						  "name": "account",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5627,
						  "src": "4956:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 5661,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"id": 5656,
							"name": "amount",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5629,
							"src": "4965:6:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "*",
						  "rightExpression": {
							"commonType": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							},
							"id": 5660,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "hexValue": "3130",
							  "id": 5657,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "kind": "number",
							  "lValueRequested": false,
							  "nodeType": "Literal",
							  "src": "4974:2:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_rational_10_by_1",
								"typeString": "int_const 10"
							  },
							  "value": "10"
							},
							"nodeType": "BinaryOperation",
							"operator": "**",
							"rightExpression": {
							  "arguments": [],
							  "expression": {
								"argumentTypes": [],
								"id": 5658,
								"name": "decimals",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 1814,
								"src": "4978:8:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
								  "typeString": "function () view returns (uint8)"
								}
							  },
							  "id": 5659,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "kind": "functionCall",
							  "lValueRequested": false,
							  "nameLocations": [],
							  "names": [],
							  "nodeType": "FunctionCall",
							  "src": "4978:10:25",
							  "tryCall": false,
							  "typeDescriptions": {
								"typeIdentifier": "t_uint8",
								"typeString": "uint8"
							  }
							},
							"src": "4974:14:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "4965:23:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 5654,
						"name": "_mint",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2142,
						"src": "4950:5:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 5662,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4950:39:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5663,
					"nodeType": "ExpressionStatement",
					"src": "4950:39:25"
				  }
				]
			  },
			  "functionSelector": "40c10f19",
			  "id": 5665,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5632,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5631,
					"name": "ownerOnly",
					"nameLocations": [
					  "4717:9:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5316,
					"src": "4717:9:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "4717:9:25"
				}
			  ],
			  "name": "mint",
			  "nameLocation": "4670:4:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5630,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5627,
					"mutability": "mutable",
					"name": "account",
					"nameLocation": "4683:7:25",
					"nodeType": "VariableDeclaration",
					"scope": 5665,
					"src": "4675:15:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5626,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "4675:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5629,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "4700:6:25",
					"nodeType": "VariableDeclaration",
					"scope": 5665,
					"src": "4692:14:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5628,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "4692:7:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4674:33:25"
			  },
			  "returnParameters": {
				"id": 5633,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "4727:0:25"
			  },
			  "scope": 5887,
			  "src": "4661:335:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5684,
				"nodeType": "Block",
				"src": "5072:56:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5675,
						  "name": "account",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5667,
						  "src": "5088:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 5681,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"id": 5676,
							"name": "amount",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5669,
							"src": "5097:6:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "*",
						  "rightExpression": {
							"commonType": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							},
							"id": 5680,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "hexValue": "3130",
							  "id": 5677,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "kind": "number",
							  "lValueRequested": false,
							  "nodeType": "Literal",
							  "src": "5106:2:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_rational_10_by_1",
								"typeString": "int_const 10"
							  },
							  "value": "10"
							},
							"nodeType": "BinaryOperation",
							"operator": "**",
							"rightExpression": {
							  "arguments": [],
							  "expression": {
								"argumentTypes": [],
								"id": 5678,
								"name": "decimals",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 1814,
								"src": "5110:8:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
								  "typeString": "function () view returns (uint8)"
								}
							  },
							  "id": 5679,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "kind": "functionCall",
							  "lValueRequested": false,
							  "nameLocations": [],
							  "names": [],
							  "nodeType": "FunctionCall",
							  "src": "5110:10:25",
							  "tryCall": false,
							  "typeDescriptions": {
								"typeIdentifier": "t_uint8",
								"typeString": "uint8"
							  }
							},
							"src": "5106:14:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "5097:23:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 5674,
						"name": "_burn",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2214,
						"src": "5082:5:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 5682,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "5082:39:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5683,
					"nodeType": "ExpressionStatement",
					"src": "5082:39:25"
				  }
				]
			  },
			  "functionSelector": "9dc29fac",
			  "id": 5685,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5672,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5671,
					"name": "ownerOnly",
					"nameLocations": [
					  "5062:9:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5316,
					"src": "5062:9:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "5062:9:25"
				}
			  ],
			  "name": "burn",
			  "nameLocation": "5015:4:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5670,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5667,
					"mutability": "mutable",
					"name": "account",
					"nameLocation": "5028:7:25",
					"nodeType": "VariableDeclaration",
					"scope": 5685,
					"src": "5020:15:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5666,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "5020:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5669,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "5045:6:25",
					"nodeType": "VariableDeclaration",
					"scope": 5685,
					"src": "5037:14:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5668,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "5037:7:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5019:33:25"
			  },
			  "returnParameters": {
				"id": 5673,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "5072:0:25"
			  },
			  "scope": 5887,
			  "src": "5006:122:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5699,
				"nodeType": "Block",
				"src": "5209:40:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5695,
						  "name": "account",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5687,
						  "src": "5225:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5696,
						  "name": "amount",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5689,
						  "src": "5234:6:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 5694,
						"name": "_burn",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2214,
						"src": "5219:5:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 5697,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "5219:22:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5698,
					"nodeType": "ExpressionStatement",
					"src": "5219:22:25"
				  }
				]
			  },
			  "functionSelector": "1d057bd9",
			  "id": 5700,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5692,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5691,
					"name": "mapleNFTOnly",
					"nameLocations": [
					  "5196:12:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5333,
					"src": "5196:12:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "5196:12:25"
				}
			  ],
			  "name": "marketBurn",
			  "nameLocation": "5143:10:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5690,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5687,
					"mutability": "mutable",
					"name": "account",
					"nameLocation": "5162:7:25",
					"nodeType": "VariableDeclaration",
					"scope": 5700,
					"src": "5154:15:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5686,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "5154:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5689,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "5179:6:25",
					"nodeType": "VariableDeclaration",
					"scope": 5700,
					"src": "5171:14:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5688,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "5171:7:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5153:33:25"
			  },
			  "returnParameters": {
				"id": 5693,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "5209:0:25"
			  },
			  "scope": 5887,
			  "src": "5134:115:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5730,
				"nodeType": "Block",
				"src": "5539:328:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5714,
						  "name": "_owner",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5702,
						  "src": "5726:6:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5715,
						  "name": "_spender",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5704,
						  "src": "5754:8:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 5725,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"arguments": [
							  {
								"expression": {
								  "id": 5717,
								  "name": "msg",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 4294967281,
								  "src": "5792:3:25",
								  "typeDescriptions": {
									"typeIdentifier": "t_magic_message",
									"typeString": "msg"
								  }
								},
								"id": 5718,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"memberLocation": "5796:6:25",
								"memberName": "sender",
								"nodeType": "MemberAccess",
								"src": "5792:10:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  {
								"arguments": [
								  {
									"id": 5721,
									"name": "this",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 4294967268,
									"src": "5812:4:25",
									"typeDescriptions": {
									  "typeIdentifier": "t_contract$_JMToken_$5887",
									  "typeString": "contract JMToken"
									}
								  }
								],
								"expression": {
								  "argumentTypes": [
									{
									  "typeIdentifier": "t_contract$_JMToken_$5887",
									  "typeString": "contract JMToken"
									}
								  ],
								  "id": 5720,
								  "isConstant": false,
								  "isLValue": false,
								  "isPure": true,
								  "lValueRequested": false,
								  "nodeType": "ElementaryTypeNameExpression",
								  "src": "5804:7:25",
								  "typeDescriptions": {
									"typeIdentifier": "t_type$_t_address_$",
									"typeString": "type(address)"
								  },
								  "typeName": {
									"id": 5719,
									"name": "address",
									"nodeType": "ElementaryTypeName",
									"src": "5804:7:25",
									"typeDescriptions": {}
								  }
								},
								"id": 5722,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"kind": "typeConversion",
								"lValueRequested": false,
								"nameLocations": [],
								"names": [],
								"nodeType": "FunctionCall",
								"src": "5804:13:25",
								"tryCall": false,
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								},
								{
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  ],
							  "id": 5716,
							  "name": "allowance",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 1881,
							  "src": "5782:9:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_uint256_$",
								"typeString": "function (address,address) view returns (uint256)"
							  }
							},
							"id": 5723,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "5782:36:25",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "+",
						  "rightExpression": {
							"id": 5724,
							"name": "_amount",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5706,
							"src": "5821:7:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "5782:46:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 5713,
						"name": "_approve",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2259,
						"src": "5704:8:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5726,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "5704:134:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5727,
					"nodeType": "ExpressionStatement",
					"src": "5704:134:25"
				  },
				  {
					"expression": {
					  "hexValue": "74727565",
					  "id": 5728,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "kind": "bool",
					  "lValueRequested": false,
					  "nodeType": "Literal",
					  "src": "5856:4:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  },
					  "value": "true"
					},
					"functionReturnParameters": 5712,
					"id": 5729,
					"nodeType": "Return",
					"src": "5849:11:25"
				  }
				]
			  },
			  "functionSelector": "d83a2bf3",
			  "id": 5731,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5709,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5708,
					"name": "routerOnly",
					"nameLocations": [
					  "5513:10:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5355,
					"src": "5513:10:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "5513:10:25"
				}
			  ],
			  "name": "increaseContractAllowance",
			  "nameLocation": "5421:25:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5707,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5702,
					"mutability": "mutable",
					"name": "_owner",
					"nameLocation": "5455:6:25",
					"nodeType": "VariableDeclaration",
					"scope": 5731,
					"src": "5447:14:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5701,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "5447:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5704,
					"mutability": "mutable",
					"name": "_spender",
					"nameLocation": "5470:8:25",
					"nodeType": "VariableDeclaration",
					"scope": 5731,
					"src": "5462:16:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5703,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "5462:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5706,
					"mutability": "mutable",
					"name": "_amount",
					"nameLocation": "5487:7:25",
					"nodeType": "VariableDeclaration",
					"scope": 5731,
					"src": "5479:15:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5705,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "5479:7:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5446:49:25"
			  },
			  "returnParameters": {
				"id": 5712,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5711,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 5731,
					"src": "5533:4:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 5710,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "5533:4:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5532:6:25"
			  },
			  "scope": 5887,
			  "src": "5412:455:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 5785,
				"nodeType": "Block",
				"src": "6037:660:25",
				"statements": [
				  {
					"expression": {
					  "id": 5743,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5741,
						"name": "fundsAlreadyMoved",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5227,
						"src": "6047:17:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "74727565",
						"id": 5742,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "bool",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "6067:4:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						},
						"value": "true"
					  },
					  "src": "6047:24:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5744,
					"nodeType": "ExpressionStatement",
					"src": "6047:24:25"
				  },
				  {
					"assignments": [
					  5746
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5746,
						"mutability": "mutable",
						"name": "jmtCoinAmountToTransfer",
						"nameLocation": "6159:23:25",
						"nodeType": "VariableDeclaration",
						"scope": 5785,
						"src": "6151:31:25",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5745,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "6151:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5750,
					"initialValue": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 5749,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"id": 5747,
						"name": "totalContributed",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5223,
						"src": "6185:16:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "*",
					  "rightExpression": {
						"hexValue": "313030",
						"id": 5748,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "6204:3:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_100_by_1",
						  "typeString": "int_const 100"
						},
						"value": "100"
					  },
					  "src": "6185:22:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "6151:56:25"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 5756,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "6283:4:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$5887",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$5887",
								"typeString": "contract JMToken"
							  }
							],
							"id": 5755,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "6275:7:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5754,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "6275:7:25",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5757,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "6275:13:25",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "arguments": [
							{
							  "id": 5760,
							  "name": "liquidityPool",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5734,
							  "src": "6310:13:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_LiquidityPool_$6417",
								"typeString": "contract LiquidityPool"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_LiquidityPool_$6417",
								"typeString": "contract LiquidityPool"
							  }
							],
							"id": 5759,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "6302:7:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5758,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "6302:7:25",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5761,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "6302:22:25",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5762,
						  "name": "jmtCoinAmountToTransfer",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5746,
						  "src": "6338:23:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "id": 5751,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "6246:5:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$5887_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 5753,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "6252:9:25",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2086,
						"src": "6246:15:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5763,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "6246:125:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5764,
					"nodeType": "ExpressionStatement",
					"src": "6246:125:25"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5770,
						  "name": "jmtCoinAmountToTransfer",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5746,
						  "src": "6513:23:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						{
						  "arguments": [
							{
							  "id": 5773,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "6558:4:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$5887",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$5887",
								"typeString": "contract JMToken"
							  }
							],
							"id": 5772,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "6550:7:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5771,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "6550:7:25",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5774,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "6550:13:25",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						],
						"expression": {
						  "argumentTypes": [
							{
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							},
							{
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  ],
						  "expression": {
							"id": 5765,
							"name": "liquidityPool",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5734,
							"src": "6453:13:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_contract$_LiquidityPool_$6417",
							  "typeString": "contract LiquidityPool"
							}
						  },
						  "id": 5767,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "6467:7:25",
						  "memberName": "deposit",
						  "nodeType": "MemberAccess",
						  "referencedDeclaration": 6312,
						  "src": "6453:21:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_function_external_payable$_t_uint256_$_t_address_$returns$__$",
							"typeString": "function (uint256,address) payable external"
						  }
						},
						"id": 5769,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"names": [
						  "value"
						],
						"nodeType": "FunctionCallOptions",
						"options": [
						  {
							"id": 5768,
							"name": "totalContributed",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5223,
							"src": "6482:16:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  }
						],
						"src": "6453:46:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_payable$_t_uint256_$_t_address_$returns$__$value",
						  "typeString": "function (uint256,address) payable external"
						}
					  },
					  "id": 5775,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "6453:120:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5776,
					"nodeType": "ExpressionStatement",
					"src": "6453:120:25"
				  },
				  {
					"expression": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"expression": {
						  "id": 5777,
						  "name": "liquidityPool",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5734,
						  "src": "6617:13:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_LiquidityPool_$6417",
							"typeString": "contract LiquidityPool"
						  }
						},
						"id": 5779,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "6631:16:25",
						"memberName": "setFundedReserve",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 6029,
						"src": "6617:30:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_nonpayable$__$returns$__$",
						  "typeString": "function () external"
						}
					  },
					  "id": 5780,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "6617:32:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5781,
					"nodeType": "ExpressionStatement",
					"src": "6617:32:25"
				  },
				  {
					"expression": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"id": 5782,
						"name": "sendRemainingFundsToTreasury",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5816,
						"src": "6660:28:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
						  "typeString": "function ()"
						}
					  },
					  "id": 5783,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "6660:30:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5784,
					"nodeType": "ExpressionStatement",
					"src": "6660:30:25"
				  }
				]
			  },
			  "functionSelector": "1690bb4e",
			  "id": 5786,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5737,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5736,
					"name": "ownerOnly",
					"nameLocations": [
					  "6009:9:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5316,
					"src": "6009:9:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "6009:9:25"
				},
				{
				  "id": 5739,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5738,
					"name": "areFundsMoved",
					"nameLocations": [
					  "6019:13:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5365,
					"src": "6019:13:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "6019:13:25"
				}
			  ],
			  "name": "sendLiquidityToLPContract",
			  "nameLocation": "5945:25:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5735,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5734,
					"mutability": "mutable",
					"name": "liquidityPool",
					"nameLocation": "5985:13:25",
					"nodeType": "VariableDeclaration",
					"scope": 5786,
					"src": "5971:27:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_contract$_LiquidityPool_$6417",
					  "typeString": "contract LiquidityPool"
					},
					"typeName": {
					  "id": 5733,
					  "nodeType": "UserDefinedTypeName",
					  "pathNode": {
						"id": 5732,
						"name": "LiquidityPool",
						"nameLocations": [
						  "5971:13:25"
						],
						"nodeType": "IdentifierPath",
						"referencedDeclaration": 6417,
						"src": "5971:13:25"
					  },
					  "referencedDeclaration": 6417,
					  "src": "5971:13:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_contract$_LiquidityPool_$6417",
						"typeString": "contract LiquidityPool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5970:29:25"
			  },
			  "returnParameters": {
				"id": 5740,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "6037:0:25"
			  },
			  "scope": 5887,
			  "src": "5936:761:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5815,
				"nodeType": "Block",
				"src": "6922:170:25",
				"statements": [
				  {
					"assignments": [
					  5790
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5790,
						"mutability": "mutable",
						"name": "remainingJMT",
						"nameLocation": "6940:12:25",
						"nodeType": "VariableDeclaration",
						"scope": 5815,
						"src": "6932:20:25",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5789,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "6932:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5797,
					"initialValue": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 5794,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "6973:4:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$5887",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$5887",
								"typeString": "contract JMToken"
							  }
							],
							"id": 5793,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "6965:7:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5792,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "6965:7:25",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5795,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "6965:13:25",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						],
						"id": 5791,
						"name": "balanceOf",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 1838,
						"src": "6955:9:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
						  "typeString": "function (address) view returns (uint256)"
						}
					  },
					  "id": 5796,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "6955:24:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "6932:47:25"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 5803,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "7013:4:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$5887",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$5887",
								"typeString": "contract JMToken"
							  }
							],
							"id": 5802,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "7005:7:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5801,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "7005:7:25",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5804,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "7005:13:25",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "arguments": [
							{
							  "id": 5807,
							  "name": "treasuryWallet",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5234,
							  "src": "7028:14:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_address_payable",
								"typeString": "address payable"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_address_payable",
								"typeString": "address payable"
							  }
							],
							"id": 5806,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "7020:7:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5805,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "7020:7:25",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5808,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "7020:23:25",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5809,
						  "name": "remainingJMT",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5790,
						  "src": "7045:12:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "id": 5798,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "6989:5:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$5887_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 5800,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "6995:9:25",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2086,
						"src": "6989:15:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5810,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "6989:69:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5811,
					"nodeType": "ExpressionStatement",
					"src": "6989:69:25"
				  },
				  {
					"eventCall": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"id": 5812,
						"name": "FundsMoved",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5216,
						"src": "7073:10:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
						  "typeString": "function ()"
						}
					  },
					  "id": 5813,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "7073:12:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5814,
					"nodeType": "EmitStatement",
					"src": "7068:17:25"
				  }
				]
			  },
			  "id": 5816,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "sendRemainingFundsToTreasury",
			  "nameLocation": "6882:28:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5787,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "6910:2:25"
			  },
			  "returnParameters": {
				"id": 5788,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "6922:0:25"
			  },
			  "scope": 5887,
			  "src": "6873:219:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5842,
				"nodeType": "Block",
				"src": "7189:141:25",
				"statements": [
				  {
					"expression": {
					  "id": 5824,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "UnaryOperation",
					  "operator": "++",
					  "prefix": false,
					  "src": "7215:9:25",
					  "subExpression": {
						"id": 5823,
						"name": "randNum",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5247,
						"src": "7215:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 5825,
					"nodeType": "ExpressionStatement",
					"src": "7215:9:25"
				  },
				  {
					"expression": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 5840,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"arguments": [
						  {
							"arguments": [
							  {
								"arguments": [
								  {
									"expression": {
									  "id": 5831,
									  "name": "block",
									  "nodeType": "Identifier",
									  "overloadedDeclarations": [],
									  "referencedDeclaration": 4294967292,
									  "src": "7273:5:25",
									  "typeDescriptions": {
										"typeIdentifier": "t_magic_block",
										"typeString": "block"
									  }
									},
									"id": 5832,
									"isConstant": false,
									"isLValue": false,
									"isPure": false,
									"lValueRequested": false,
									"memberLocation": "7279:9:25",
									"memberName": "timestamp",
									"nodeType": "MemberAccess",
									"src": "7273:15:25",
									"typeDescriptions": {
									  "typeIdentifier": "t_uint256",
									  "typeString": "uint256"
									}
								  },
								  {
									"expression": {
									  "id": 5833,
									  "name": "msg",
									  "nodeType": "Identifier",
									  "overloadedDeclarations": [],
									  "referencedDeclaration": 4294967281,
									  "src": "7290:3:25",
									  "typeDescriptions": {
										"typeIdentifier": "t_magic_message",
										"typeString": "msg"
									  }
									},
									"id": 5834,
									"isConstant": false,
									"isLValue": false,
									"isPure": false,
									"lValueRequested": false,
									"memberLocation": "7294:6:25",
									"memberName": "sender",
									"nodeType": "MemberAccess",
									"src": "7290:10:25",
									"typeDescriptions": {
									  "typeIdentifier": "t_address",
									  "typeString": "address"
									}
								  },
								  {
									"id": 5835,
									"name": "randNum",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 5247,
									"src": "7302:7:25",
									"typeDescriptions": {
									  "typeIdentifier": "t_uint256",
									  "typeString": "uint256"
									}
								  }
								],
								"expression": {
								  "argumentTypes": [
									{
									  "typeIdentifier": "t_uint256",
									  "typeString": "uint256"
									},
									{
									  "typeIdentifier": "t_address",
									  "typeString": "address"
									},
									{
									  "typeIdentifier": "t_uint256",
									  "typeString": "uint256"
									}
								  ],
								  "expression": {
									"id": 5829,
									"name": "abi",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 4294967295,
									"src": "7256:3:25",
									"typeDescriptions": {
									  "typeIdentifier": "t_magic_abi",
									  "typeString": "abi"
									}
								  },
								  "id": 5830,
								  "isConstant": false,
								  "isLValue": false,
								  "isPure": true,
								  "lValueRequested": false,
								  "memberLocation": "7260:12:25",
								  "memberName": "encodePacked",
								  "nodeType": "MemberAccess",
								  "src": "7256:16:25",
								  "typeDescriptions": {
									"typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
									"typeString": "function () pure returns (bytes memory)"
								  }
								},
								"id": 5836,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"kind": "functionCall",
								"lValueRequested": false,
								"nameLocations": [],
								"names": [],
								"nodeType": "FunctionCall",
								"src": "7256:54:25",
								"tryCall": false,
								"typeDescriptions": {
								  "typeIdentifier": "t_bytes_memory_ptr",
								  "typeString": "bytes memory"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_bytes_memory_ptr",
								  "typeString": "bytes memory"
								}
							  ],
							  "id": 5828,
							  "name": "keccak256",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967288,
							  "src": "7246:9:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
								"typeString": "function (bytes memory) pure returns (bytes32)"
							  }
							},
							"id": 5837,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "7246:65:25",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_bytes32",
							  "typeString": "bytes32"
							}
						  }
						],
						"expression": {
						  "argumentTypes": [
							{
							  "typeIdentifier": "t_bytes32",
							  "typeString": "bytes32"
							}
						  ],
						  "id": 5827,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "lValueRequested": false,
						  "nodeType": "ElementaryTypeNameExpression",
						  "src": "7241:4:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_uint256_$",
							"typeString": "type(uint256)"
						  },
						  "typeName": {
							"id": 5826,
							"name": "uint",
							"nodeType": "ElementaryTypeName",
							"src": "7241:4:25",
							"typeDescriptions": {}
						  }
						},
						"id": 5838,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"kind": "typeConversion",
						"lValueRequested": false,
						"nameLocations": [],
						"names": [],
						"nodeType": "FunctionCall",
						"src": "7241:71:25",
						"tryCall": false,
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "%",
					  "rightExpression": {
						"id": 5839,
						"name": "_modulus",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5818,
						"src": "7315:8:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "7241:82:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"functionReturnParameters": 5822,
					"id": 5841,
					"nodeType": "Return",
					"src": "7234:89:25"
				  }
				]
			  },
			  "id": 5843,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "randMod",
			  "nameLocation": "7143:7:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5819,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5818,
					"mutability": "mutable",
					"name": "_modulus",
					"nameLocation": "7156:8:25",
					"nodeType": "VariableDeclaration",
					"scope": 5843,
					"src": "7151:13:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5817,
					  "name": "uint",
					  "nodeType": "ElementaryTypeName",
					  "src": "7151:4:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "7150:15:25"
			  },
			  "returnParameters": {
				"id": 5822,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5821,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 5843,
					"src": "7183:4:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5820,
					  "name": "uint",
					  "nodeType": "ElementaryTypeName",
					  "src": "7183:4:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "7182:6:25"
			  },
			  "scope": 5887,
			  "src": "7134:196:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5885,
				"nodeType": "Block",
				"src": "7399:313:25",
				"statements": [
				  {
					"expression": {
					  "id": 5852,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5850,
						"name": "winRewardAddr",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5242,
						"src": "7409:13:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5851,
						"name": "_addr",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5845,
						"src": "7425:5:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "7409:21:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 5853,
					"nodeType": "ExpressionStatement",
					"src": "7409:21:25"
				  },
				  {
					"expression": {
					  "id": 5856,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5854,
						"name": "winRewardAmount",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5244,
						"src": "7440:15:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5855,
						"name": "_amount",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5847,
						"src": "7458:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "7440:25:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 5857,
					"nodeType": "ExpressionStatement",
					"src": "7440:25:25"
				  },
				  {
					"assignments": [
					  5859
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5859,
						"mutability": "mutable",
						"name": "rand",
						"nameLocation": "7480:4:25",
						"nodeType": "VariableDeclaration",
						"scope": 5885,
						"src": "7475:9:25",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5858,
						  "name": "uint",
						  "nodeType": "ElementaryTypeName",
						  "src": "7475:4:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5863,
					"initialValue": {
					  "arguments": [
						{
						  "hexValue": "313030",
						  "id": 5861,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "number",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "7495:3:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_rational_100_by_1",
							"typeString": "int_const 100"
						  },
						  "value": "100"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_rational_100_by_1",
							"typeString": "int_const 100"
						  }
						],
						"id": 5860,
						"name": "randMod",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5843,
						"src": "7487:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
						  "typeString": "function (uint256) returns (uint256)"
						}
					  },
					  "id": 5862,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "7487:12:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "7475:24:25"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 5867,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"id": 5865,
							"name": "rand",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5859,
							"src": "7517:4:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "<=",
						  "rightExpression": {
							"id": 5866,
							"name": "rewardProbability",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5250,
							"src": "7525:17:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "7517:25:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "4e6f7420726577617264546f6b656e2e",
						  "id": 5868,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "7544:18:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_0b30354e57513ff952ecf07981d939391700e68f173d33c7bc1a2fa4bbcc7e2b",
							"typeString": "literal_string \"Not rewardToken.\""
						  },
						  "value": "Not rewardToken."
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_0b30354e57513ff952ecf07981d939391700e68f173d33c7bc1a2fa4bbcc7e2b",
							"typeString": "literal_string \"Not rewardToken.\""
						  }
						],
						"id": 5864,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "7509:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5869,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "7509:55:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5870,
					"nodeType": "ExpressionStatement",
					"src": "7509:55:25"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 5876,
							  "name": "treasuryWallet",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5234,
							  "src": "7633:14:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_address_payable",
								"typeString": "address payable"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_address_payable",
								"typeString": "address payable"
							  }
							],
							"id": 5875,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "7625:7:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5874,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "7625:7:25",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5877,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "7625:23:25",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "arguments": [
							{
							  "id": 5880,
							  "name": "winRewardAddr",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5242,
							  "src": "7658:13:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							],
							"id": 5879,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "7650:7:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5878,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "7650:7:25",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5881,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "7650:22:25",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5882,
						  "name": "winRewardAmount",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5244,
						  "src": "7674:15:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "id": 5871,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "7609:5:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$5887_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 5873,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "7615:9:25",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2086,
						"src": "7609:15:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5883,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "7609:81:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5884,
					"nodeType": "ExpressionStatement",
					"src": "7609:81:25"
				  }
				]
			  },
			  "functionSelector": "85b1fb8e",
			  "id": 5886,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "randRewardToken",
			  "nameLocation": "7345:15:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5848,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5845,
					"mutability": "mutable",
					"name": "_addr",
					"nameLocation": "7369:5:25",
					"nodeType": "VariableDeclaration",
					"scope": 5886,
					"src": "7361:13:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5844,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "7361:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5847,
					"mutability": "mutable",
					"name": "_amount",
					"nameLocation": "7381:7:25",
					"nodeType": "VariableDeclaration",
					"scope": 5886,
					"src": "7376:12:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5846,
					  "name": "uint",
					  "nodeType": "ElementaryTypeName",
					  "src": "7376:4:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "7360:29:25"
			  },
			  "returnParameters": {
				"id": 5849,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "7399:0:25"
			  },
			  "scope": 5887,
			  "src": "7336:376:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			}
		  ],
		  "scope": 5888,
		  "src": "149:7566:25",
		  "usedErrors": []
		}
	  ],
	  "src": "37:7678:25"
	},
	"compiler": {
	  "name": "solc",
	  "version": "0.8.17+commit.8df45f5f.Emscripten.clang"
	},
	"networks": {
	  "5777": {
		"events": {
		  "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
			"anonymous": false,
			"inputs": [
			  {
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			  },
			  {
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			  },
			  {
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			  }
			],
			"name": "Approval",
			"type": "event"
		  },
		  "0xa01103220c31ee0c47e79a81104a3e82740390c1d918ad5638190cc185bd92e1": {
			"anonymous": false,
			"inputs": [],
			"name": "FundsMoved",
			"type": "event"
		  },
		  "0xe454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d3": {
			"anonymous": false,
			"inputs": [],
			"name": "OwnerAction",
			"type": "event"
		  },
		  "0x745f661b8143944fb883f50694ebed3a871e43c451d9d4bf4648a9d551d7e47a": {
			"anonymous": false,
			"inputs": [
			  {
				"indexed": true,
				"internalType": "address",
				"name": "_account",
				"type": "address"
			  },
			  {
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			  }
			],
			"name": "TokensBought",
			"type": "event"
		  },
		  "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
			"anonymous": false,
			"inputs": [
			  {
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			  },
			  {
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			  },
			  {
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			  }
			],
			"name": "Transfer",
			"type": "event"
		  }
		},
		"links": {},
		"address": "0x9232ab58302A279756bF38E92523229cE84BC39f",
		"transactionHash": "0x175c83f6b7844e1ae86796174b6b09a7f5cf55d6cf4d05180851cd4b4fed67e5"
	  }
	},
	"schemaVersion": "3.4.9",
	"updatedAt": "2022-09-20T06:10:51.113Z",
	"networkType": "ethereum",
	"devdoc": {
	  "kind": "dev",
	  "methods": {
		"allowance(address,address)": {
		  "details": "See {IERC20-allowance}."
		},
		"approve(address,uint256)": {
		  "details": "See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
		},
		"balanceOf(address)": {
		  "details": "See {IERC20-balanceOf}."
		},
		"decimals()": {
		  "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
		},
		"decreaseAllowance(address,uint256)": {
		  "details": "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
		},
		"increaseAllowance(address,uint256)": {
		  "details": "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."
		},
		"name()": {
		  "details": "Returns the name of the token."
		},
		"symbol()": {
		  "details": "Returns the symbol of the token, usually a shorter version of the name."
		},
		"totalSupply()": {
		  "details": "See {IERC20-totalSupply}."
		},
		"transfer(address,uint256)": {
		  "details": "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`."
		},
		"transferFrom(address,address,uint256)": {
		  "details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`."
		}
	  },
	  "version": 1
	},
	"userdoc": {
	  "kind": "user",
	  "methods": {},
	  "version": 1
	}
  }

  module.exports = TOKEN;