const ROUTER =[ {
		"inputs": [
			{
				"internalType": "contract LiquidityPool",
				"name": "_liquidityPool",
				"type": "address"
			},
			{
				"internalType": "contract JMToken",
				"name": "_jonMatang",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "_getAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_jmtAmount",
				"type": "uint256"
			}
		],
		"name": "addLiquidity",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pullLiquidity",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_jmtAmount",
				"type": "uint256"
			}
		],
		"name": "swapTokens",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
]
export default ROUTER;
