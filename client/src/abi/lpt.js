const LPT = {
  "contractName": "LPT",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_lpAddress",
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
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
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
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
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
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_lpAddress\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/LPT.sol\":\"LPT\"},\"evmVersion\":\"berlin\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x24b04b8aacaaf1a4a0719117b29c9c3647b1f479c5ac2a60f5ff1bb6d839c238\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://43e46da9d9f49741ecd876a269e71bc7494058d7a8e9478429998adb5bc3eaa0\",\"dweb:/ipfs/QmUtp4cqzf22C5rJ76AabKADquGWcjsc33yjYXxXC4sDvy\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"project:/contracts/LPT.sol\":{\"keccak256\":\"0xed736abaceb3ae48c617e3f658e9b025d5b61ef8df551970899895432b0ec7b6\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://ad6919c26ab33a0f95936b6de5c1267e1a4ce2d41ef609c72be2ea63e39cf275\",\"dweb:/ipfs/QmVMZpeSSxWUxc9SME2pgQ3xwazzvdjRYGxF7sfMWGspwn\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b50604051620011d4380380620011d483398101604081905262000034916200020c565b6040518060400160405280601481526020017f4c697175696469747920506f6f6c20546f6b656e0000000000000000000000008152506040518060400160405280600381526020016213141560ea1b8152508160039081620000979190620002e3565b506004620000a68282620002e3565b505050620000c3620000bd620000d560201b60201c565b620000d9565b620000ce816200012b565b50620003af565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b62000135620001ae565b6001600160a01b038116620001a05760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b620001ab81620000d9565b50565b6005546001600160a01b031633146200020a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000197565b565b6000602082840312156200021f57600080fd5b81516001600160a01b03811681146200023757600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200026957607f821691505b6020821081036200028a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002de57600081815260208120601f850160051c81016020861015620002b95750805b601f850160051c820191505b81811015620002da57828155600101620002c5565b5050505b505050565b81516001600160401b03811115620002ff57620002ff6200023e565b620003178162000310845462000254565b8462000290565b602080601f8311600181146200034f5760008415620003365750858301515b600019600386901b1c1916600185901b178555620002da565b600085815260208120601f198616915b8281101562000380578886015182559484019460019091019084016200035f565b50858210156200039f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610e1580620003bf6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063715018a611610097578063a457c2d711610066578063a457c2d714610209578063a9059cbb1461021c578063dd62ed3e1461022f578063f2fde38b1461026857600080fd5b8063715018a6146101cb5780638da5cb5b146101d357806395d89b41146101ee5780639dc29fac146101f657600080fd5b8063313ce567116100d3578063313ce5671461016b578063395093511461017a57806340c10f191461018d57806370a08231146101a257600080fd5b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014657806323b872dd14610158575b600080fd5b61010d61027b565b60405161011a9190610c44565b60405180910390f35b610136610131366004610cae565b61030d565b604051901515815260200161011a565b6002545b60405190815260200161011a565b610136610166366004610cd8565b610327565b6040516012815260200161011a565b610136610188366004610cae565b61034b565b6101a061019b366004610cae565b61038a565b005b61014a6101b0366004610d14565b6001600160a01b031660009081526020819052604090205490565b6101a06103a0565b6005546040516001600160a01b03909116815260200161011a565b61010d6103b4565b6101a0610204366004610cae565b6103c3565b610136610217366004610cae565b6103d5565b61013661022a366004610cae565b610484565b61014a61023d366004610d36565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101a0610276366004610d14565b610492565b60606003805461028a90610d69565b80601f01602080910402602001604051908101604052809291908181526020018280546102b690610d69565b80156103035780601f106102d857610100808354040283529160200191610303565b820191906000526020600020905b8154815290600101906020018083116102e657829003601f168201915b5050505050905090565b60003361031b818585610522565b60019150505b92915050565b60003361033585828561067b565b61034085858561070d565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061031b9082908690610385908790610db9565b610522565b610392610924565b61039c828261097e565b5050565b6103a8610924565b6103b26000610a5d565b565b60606004805461028a90610d69565b6103cb610924565b61039c8282610ac7565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104775760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6103408286868403610522565b60003361031b81858561070d565b61049a610924565b6001600160a01b0381166105165760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161046e565b61051f81610a5d565b50565b6001600160a01b03831661059d5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161046e565b6001600160a01b0382166106195760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161046e565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461070757818110156106fa5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161046e565b6107078484848403610522565b50505050565b6001600160a01b0383166107895760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161046e565b6001600160a01b0382166108055760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161046e565b6001600160a01b038316600090815260208190526040902054818110156108945760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161046e565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906108cb908490610db9565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161091791815260200190565b60405180910390a3610707565b6005546001600160a01b031633146103b25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161046e565b6001600160a01b0382166109d45760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161046e565b80600260008282546109e69190610db9565b90915550506001600160a01b03821660009081526020819052604081208054839290610a13908490610db9565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600580546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216610b435760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161046e565b6001600160a01b03821660009081526020819052604090205481811015610bd25760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f6365000000000000000000000000000000000000000000000000000000000000606482015260840161046e565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610c01908490610dcc565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161066e565b600060208083528351808285015260005b81811015610c7157858101830151858201604001528201610c55565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610ca957600080fd5b919050565b60008060408385031215610cc157600080fd5b610cca83610c92565b946020939093013593505050565b600080600060608486031215610ced57600080fd5b610cf684610c92565b9250610d0460208501610c92565b9150604084013590509250925092565b600060208284031215610d2657600080fd5b610d2f82610c92565b9392505050565b60008060408385031215610d4957600080fd5b610d5283610c92565b9150610d6060208401610c92565b90509250929050565b600181811c90821680610d7d57607f821691505b602082108103610d9d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561032157610321610da3565b8181038181111561032157610321610da356fea2646970667358221220ad64c158176cf81001aea5e04b0b38a82859c3557ade50e2184137831786881d64736f6c63430008110033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101005760003560e01c8063715018a611610097578063a457c2d711610066578063a457c2d714610209578063a9059cbb1461021c578063dd62ed3e1461022f578063f2fde38b1461026857600080fd5b8063715018a6146101cb5780638da5cb5b146101d357806395d89b41146101ee5780639dc29fac146101f657600080fd5b8063313ce567116100d3578063313ce5671461016b578063395093511461017a57806340c10f191461018d57806370a08231146101a257600080fd5b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014657806323b872dd14610158575b600080fd5b61010d61027b565b60405161011a9190610c44565b60405180910390f35b610136610131366004610cae565b61030d565b604051901515815260200161011a565b6002545b60405190815260200161011a565b610136610166366004610cd8565b610327565b6040516012815260200161011a565b610136610188366004610cae565b61034b565b6101a061019b366004610cae565b61038a565b005b61014a6101b0366004610d14565b6001600160a01b031660009081526020819052604090205490565b6101a06103a0565b6005546040516001600160a01b03909116815260200161011a565b61010d6103b4565b6101a0610204366004610cae565b6103c3565b610136610217366004610cae565b6103d5565b61013661022a366004610cae565b610484565b61014a61023d366004610d36565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101a0610276366004610d14565b610492565b60606003805461028a90610d69565b80601f01602080910402602001604051908101604052809291908181526020018280546102b690610d69565b80156103035780601f106102d857610100808354040283529160200191610303565b820191906000526020600020905b8154815290600101906020018083116102e657829003601f168201915b5050505050905090565b60003361031b818585610522565b60019150505b92915050565b60003361033585828561067b565b61034085858561070d565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061031b9082908690610385908790610db9565b610522565b610392610924565b61039c828261097e565b5050565b6103a8610924565b6103b26000610a5d565b565b60606004805461028a90610d69565b6103cb610924565b61039c8282610ac7565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104775760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6103408286868403610522565b60003361031b81858561070d565b61049a610924565b6001600160a01b0381166105165760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161046e565b61051f81610a5d565b50565b6001600160a01b03831661059d5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161046e565b6001600160a01b0382166106195760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161046e565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461070757818110156106fa5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161046e565b6107078484848403610522565b50505050565b6001600160a01b0383166107895760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161046e565b6001600160a01b0382166108055760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161046e565b6001600160a01b038316600090815260208190526040902054818110156108945760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161046e565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906108cb908490610db9565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161091791815260200190565b60405180910390a3610707565b6005546001600160a01b031633146103b25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161046e565b6001600160a01b0382166109d45760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161046e565b80600260008282546109e69190610db9565b90915550506001600160a01b03821660009081526020819052604081208054839290610a13908490610db9565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600580546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216610b435760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161046e565b6001600160a01b03821660009081526020819052604090205481811015610bd25760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f6365000000000000000000000000000000000000000000000000000000000000606482015260840161046e565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610c01908490610dcc565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161066e565b600060208083528351808285015260005b81811015610c7157858101830151858201604001528201610c55565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610ca957600080fd5b919050565b60008060408385031215610cc157600080fd5b610cca83610c92565b946020939093013593505050565b600080600060608486031215610ced57600080fd5b610cf684610c92565b9250610d0460208501610c92565b9150604084013590509250925092565b600060208284031215610d2657600080fd5b610d2f82610c92565b9392505050565b60008060408385031215610d4957600080fd5b610d5283610c92565b9150610d6060208401610c92565b90509250929050565b600181811c90821680610d7d57607f821691505b602082108103610d9d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561032157610321610da3565b8181038181111561032157610321610da356fea2646970667358221220ad64c158176cf81001aea5e04b0b38a82859c3557ade50e2184137831786881d64736f6c63430008110033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:3795:38",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:38",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "95:209:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "141:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "150:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "153:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "143:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "143:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "143:12:38"
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
                            "src": "116:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "125:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "112:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "112:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "137:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "108:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "108:32:38"
                  },
                  "nodeType": "YulIf",
                  "src": "105:52:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "166:29:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "185:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "179:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "179:16:38"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "170:5:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "258:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "267:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "270:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "260:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "260:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "260:12:38"
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
                            "src": "217:5:38"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "228:5:38"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "243:3:38",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "248:1:38",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "239:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "239:11:38"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "252:1:38",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "235:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "235:19:38"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "224:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "224:31:38"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "214:2:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "214:42:38"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "207:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "207:50:38"
                  },
                  "nodeType": "YulIf",
                  "src": "204:70:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "283:15:38",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "293:5:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "283:6:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "61:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "72:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "84:6:38",
                "type": ""
              }
            ],
            "src": "14:290:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "341:95:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "358:1:38",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "365:3:38",
                            "type": "",
                            "value": "224"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "370:10:38",
                            "type": "",
                            "value": "0x4e487b71"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "361:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "361:20:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "351:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "351:31:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "351:31:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "398:1:38",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "401:4:38",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "391:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "391:15:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "391:15:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "422:1:38",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "425:4:38",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "415:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "415:15:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "415:15:38"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "309:127:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "496:325:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "506:22:38",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "520:1:38",
                        "type": "",
                        "value": "1"
                      },
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "523:4:38"
                      }
                    ],
                    "functionName": {
                      "name": "shr",
                      "nodeType": "YulIdentifier",
                      "src": "516:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "516:12:38"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "506:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "537:38:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "567:4:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "573:1:38",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "563:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "563:12:38"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "541:18:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "614:31:38",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "616:27:38",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "630:6:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "638:4:38",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "626:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "626:17:38"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "616:6:38"
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
                        "src": "594:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "587:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "587:26:38"
                  },
                  "nodeType": "YulIf",
                  "src": "584:61:38"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "704:111:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "725:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "732:3:38",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "737:10:38",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "728:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "728:20:38"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "718:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "718:31:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "718:31:38"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "769:1:38",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "772:4:38",
                              "type": "",
                              "value": "0x22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "762:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "762:15:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "762:15:38"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "797:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "800:4:38",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "790:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "790:15:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "790:15:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "660:18:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "683:6:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "691:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "680:2:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "680:14:38"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "657:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "657:38:38"
                  },
                  "nodeType": "YulIf",
                  "src": "654:161:38"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "476:4:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "485:6:38",
                "type": ""
              }
            ],
            "src": "441:380:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "882:65:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "899:1:38",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "name": "ptr",
                        "nodeType": "YulIdentifier",
                        "src": "902:3:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "892:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "892:14:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "892:14:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "915:26:38",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "933:1:38",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "936:4:38",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "keccak256",
                      "nodeType": "YulIdentifier",
                      "src": "923:9:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "923:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "915:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "array_dataslot_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "ptr",
                "nodeType": "YulTypedName",
                "src": "865:3:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "873:4:38",
                "type": ""
              }
            ],
            "src": "826:121:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1033:464:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1066:425:38",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1080:11:38",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1090:1:38",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "1084:2:38",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1111:2:38"
                            },
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "1115:5:38"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1104:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1104:17:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1104:17:38"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1134:31:38",
                        "value": {
                          "arguments": [
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1156:2:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1160:4:38",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nodeType": "YulIdentifier",
                            "src": "1146:9:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1146:19:38"
                        },
                        "variables": [
                          {
                            "name": "data",
                            "nodeType": "YulTypedName",
                            "src": "1138:4:38",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1178:57:38",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "1201:4:38"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1211:1:38",
                                  "type": "",
                                  "value": "5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "startIndex",
                                      "nodeType": "YulIdentifier",
                                      "src": "1218:10:38"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1230:2:38",
                                      "type": "",
                                      "value": "31"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1214:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1214:19:38"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nodeType": "YulIdentifier",
                                "src": "1207:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1207:27:38"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1197:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1197:38:38"
                        },
                        "variables": [
                          {
                            "name": "deleteStart",
                            "nodeType": "YulTypedName",
                            "src": "1182:11:38",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1272:23:38",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "1274:19:38",
                              "value": {
                                "name": "data",
                                "nodeType": "YulIdentifier",
                                "src": "1289:4:38"
                              },
                              "variableNames": [
                                {
                                  "name": "deleteStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1274:11:38"
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
                              "src": "1254:10:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1266:4:38",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "1251:2:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1251:20:38"
                        },
                        "nodeType": "YulIf",
                        "src": "1248:47:38"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1308:41:38",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "1322:4:38"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1332:1:38",
                                  "type": "",
                                  "value": "5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "len",
                                      "nodeType": "YulIdentifier",
                                      "src": "1339:3:38"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1344:2:38",
                                      "type": "",
                                      "value": "31"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1335:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1335:12:38"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nodeType": "YulIdentifier",
                                "src": "1328:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1328:20:38"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1318:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1318:31:38"
                        },
                        "variables": [
                          {
                            "name": "_2",
                            "nodeType": "YulTypedName",
                            "src": "1312:2:38",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1362:24:38",
                        "value": {
                          "name": "deleteStart",
                          "nodeType": "YulIdentifier",
                          "src": "1375:11:38"
                        },
                        "variables": [
                          {
                            "name": "start",
                            "nodeType": "YulTypedName",
                            "src": "1366:5:38",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1460:21:38",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "start",
                                    "nodeType": "YulIdentifier",
                                    "src": "1469:5:38"
                                  },
                                  {
                                    "name": "_1",
                                    "nodeType": "YulIdentifier",
                                    "src": "1476:2:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "1462:6:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1462:17:38"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1462:17:38"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "1410:5:38"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "1417:2:38"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "1407:2:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1407:13:38"
                        },
                        "nodeType": "YulForLoop",
                        "post": {
                          "nodeType": "YulBlock",
                          "src": "1421:26:38",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "1423:22:38",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "start",
                                    "nodeType": "YulIdentifier",
                                    "src": "1436:5:38"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1443:1:38",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "1432:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1432:13:38"
                              },
                              "variableNames": [
                                {
                                  "name": "start",
                                  "nodeType": "YulIdentifier",
                                  "src": "1423:5:38"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nodeType": "YulBlock",
                          "src": "1403:3:38",
                          "statements": []
                        },
                        "src": "1399:82:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "len",
                        "nodeType": "YulIdentifier",
                        "src": "1049:3:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1054:2:38",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1046:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1046:11:38"
                  },
                  "nodeType": "YulIf",
                  "src": "1043:448:38"
                }
              ]
            },
            "name": "clean_up_bytearray_end_slots_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "1005:5:38",
                "type": ""
              },
              {
                "name": "len",
                "nodeType": "YulTypedName",
                "src": "1012:3:38",
                "type": ""
              },
              {
                "name": "startIndex",
                "nodeType": "YulTypedName",
                "src": "1017:10:38",
                "type": ""
              }
            ],
            "src": "952:545:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1587:81:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1597:65:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "data",
                            "nodeType": "YulIdentifier",
                            "src": "1612:4:38"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "1630:1:38",
                                        "type": "",
                                        "value": "3"
                                      },
                                      {
                                        "name": "len",
                                        "nodeType": "YulIdentifier",
                                        "src": "1633:3:38"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "1626:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1626:11:38"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "1643:1:38",
                                        "type": "",
                                        "value": "0"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nodeType": "YulIdentifier",
                                      "src": "1639:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1639:6:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "1622:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1622:24:38"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "1618:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1618:29:38"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "1608:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1608:40:38"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1654:1:38",
                            "type": "",
                            "value": "1"
                          },
                          {
                            "name": "len",
                            "nodeType": "YulIdentifier",
                            "src": "1657:3:38"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "1650:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1650:11:38"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "1605:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1605:57:38"
                  },
                  "variableNames": [
                    {
                      "name": "used",
                      "nodeType": "YulIdentifier",
                      "src": "1597:4:38"
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
                "src": "1564:4:38",
                "type": ""
              },
              {
                "name": "len",
                "nodeType": "YulTypedName",
                "src": "1570:3:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "used",
                "nodeType": "YulTypedName",
                "src": "1578:4:38",
                "type": ""
              }
            ],
            "src": "1502:166:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1769:1256:38",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1779:24:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "1799:3:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1793:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1793:10:38"
                  },
                  "variables": [
                    {
                      "name": "newLen",
                      "nodeType": "YulTypedName",
                      "src": "1783:6:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1846:22:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "1848:16:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1848:18:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1848:18:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "1818:6:38"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1834:2:38",
                                "type": "",
                                "value": "64"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1838:1:38",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "shl",
                              "nodeType": "YulIdentifier",
                              "src": "1830:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1830:10:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1842:1:38",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1826:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1826:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1815:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1815:30:38"
                  },
                  "nodeType": "YulIf",
                  "src": "1812:56:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "slot",
                        "nodeType": "YulIdentifier",
                        "src": "1921:4:38"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "slot",
                                "nodeType": "YulIdentifier",
                                "src": "1959:4:38"
                              }
                            ],
                            "functionName": {
                              "name": "sload",
                              "nodeType": "YulIdentifier",
                              "src": "1953:5:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1953:11:38"
                          }
                        ],
                        "functionName": {
                          "name": "extract_byte_array_length",
                          "nodeType": "YulIdentifier",
                          "src": "1927:25:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1927:38:38"
                      },
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "1967:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "clean_up_bytearray_end_slots_string_storage",
                      "nodeType": "YulIdentifier",
                      "src": "1877:43:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1877:97:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1877:97:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1983:18:38",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "2000:1:38",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "srcOffset",
                      "nodeType": "YulTypedName",
                      "src": "1987:9:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2010:23:38",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "2029:4:38",
                    "type": "",
                    "value": "0x20"
                  },
                  "variables": [
                    {
                      "name": "srcOffset_1",
                      "nodeType": "YulTypedName",
                      "src": "2014:11:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2042:24:38",
                  "value": {
                    "name": "srcOffset_1",
                    "nodeType": "YulIdentifier",
                    "src": "2055:11:38"
                  },
                  "variableNames": [
                    {
                      "name": "srcOffset",
                      "nodeType": "YulIdentifier",
                      "src": "2042:9:38"
                    }
                  ]
                },
                {
                  "cases": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "2112:656:38",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "2126:35:38",
                            "value": {
                              "arguments": [
                                {
                                  "name": "newLen",
                                  "nodeType": "YulIdentifier",
                                  "src": "2145:6:38"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2157:2:38",
                                      "type": "",
                                      "value": "31"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nodeType": "YulIdentifier",
                                    "src": "2153:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2153:7:38"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "2141:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2141:20:38"
                            },
                            "variables": [
                              {
                                "name": "loopEnd",
                                "nodeType": "YulTypedName",
                                "src": "2130:7:38",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "2174:49:38",
                            "value": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "2218:4:38"
                                }
                              ],
                              "functionName": {
                                "name": "array_dataslot_string_storage",
                                "nodeType": "YulIdentifier",
                                "src": "2188:29:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2188:35:38"
                            },
                            "variables": [
                              {
                                "name": "dstPtr",
                                "nodeType": "YulTypedName",
                                "src": "2178:6:38",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "2236:10:38",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2245:1:38",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "i",
                                "nodeType": "YulTypedName",
                                "src": "2240:1:38",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "2323:172:38",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "2348:6:38"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "src",
                                                "nodeType": "YulIdentifier",
                                                "src": "2366:3:38"
                                              },
                                              {
                                                "name": "srcOffset",
                                                "nodeType": "YulIdentifier",
                                                "src": "2371:9:38"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "add",
                                              "nodeType": "YulIdentifier",
                                              "src": "2362:3:38"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2362:19:38"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mload",
                                          "nodeType": "YulIdentifier",
                                          "src": "2356:5:38"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "2356:26:38"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "2341:6:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2341:42:38"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "2341:42:38"
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "2400:24:38",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "2414:6:38"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "2422:1:38",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "2410:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2410:14:38"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "dstPtr",
                                      "nodeType": "YulIdentifier",
                                      "src": "2400:6:38"
                                    }
                                  ]
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "2441:40:38",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "srcOffset",
                                        "nodeType": "YulIdentifier",
                                        "src": "2458:9:38"
                                      },
                                      {
                                        "name": "srcOffset_1",
                                        "nodeType": "YulIdentifier",
                                        "src": "2469:11:38"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "2454:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2454:27:38"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "srcOffset",
                                      "nodeType": "YulIdentifier",
                                      "src": "2441:9:38"
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
                                  "src": "2270:1:38"
                                },
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "2273:7:38"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "2267:2:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2267:14:38"
                            },
                            "nodeType": "YulForLoop",
                            "post": {
                              "nodeType": "YulBlock",
                              "src": "2282:28:38",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "2284:24:38",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "2293:1:38"
                                      },
                                      {
                                        "name": "srcOffset_1",
                                        "nodeType": "YulIdentifier",
                                        "src": "2296:11:38"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "2289:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2289:19:38"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "2284:1:38"
                                    }
                                  ]
                                }
                              ]
                            },
                            "pre": {
                              "nodeType": "YulBlock",
                              "src": "2263:3:38",
                              "statements": []
                            },
                            "src": "2259:236:38"
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "2543:166:38",
                              "statements": [
                                {
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "2561:43:38",
                                  "value": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "2588:3:38"
                                          },
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "2593:9:38"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "2584:3:38"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "2584:19:38"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "2578:5:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2578:26:38"
                                  },
                                  "variables": [
                                    {
                                      "name": "lastValue",
                                      "nodeType": "YulTypedName",
                                      "src": "2565:9:38",
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
                                        "src": "2628:6:38"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "name": "lastValue",
                                            "nodeType": "YulIdentifier",
                                            "src": "2640:9:38"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "arguments": [
                                                  {
                                                    "arguments": [
                                                      {
                                                        "arguments": [
                                                          {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "2667:1:38",
                                                            "type": "",
                                                            "value": "3"
                                                          },
                                                          {
                                                            "name": "newLen",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2670:6:38"
                                                          }
                                                        ],
                                                        "functionName": {
                                                          "name": "shl",
                                                          "nodeType": "YulIdentifier",
                                                          "src": "2663:3:38"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "2663:14:38"
                                                      },
                                                      {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "2679:3:38",
                                                        "type": "",
                                                        "value": "248"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "and",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "2659:3:38"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2659:24:38"
                                                  },
                                                  {
                                                    "arguments": [
                                                      {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "2689:1:38",
                                                        "type": "",
                                                        "value": "0"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "not",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "2685:3:38"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2685:6:38"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "shr",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "2655:3:38"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "2655:37:38"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "not",
                                              "nodeType": "YulIdentifier",
                                              "src": "2651:3:38"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2651:42:38"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "and",
                                          "nodeType": "YulIdentifier",
                                          "src": "2636:3:38"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "2636:58:38"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "2621:6:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2621:74:38"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "2621:74:38"
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "2514:7:38"
                                },
                                {
                                  "name": "newLen",
                                  "nodeType": "YulIdentifier",
                                  "src": "2523:6:38"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "2511:2:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2511:19:38"
                            },
                            "nodeType": "YulIf",
                            "src": "2508:201:38"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "2729:4:38"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "2743:1:38",
                                          "type": "",
                                          "value": "1"
                                        },
                                        {
                                          "name": "newLen",
                                          "nodeType": "YulIdentifier",
                                          "src": "2746:6:38"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shl",
                                        "nodeType": "YulIdentifier",
                                        "src": "2739:3:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2739:14:38"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2755:1:38",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2735:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2735:22:38"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nodeType": "YulIdentifier",
                                "src": "2722:6:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2722:36:38"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "2722:36:38"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "2105:663:38",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2110:1:38",
                        "type": "",
                        "value": "1"
                      }
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "2785:234:38",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "2799:14:38",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2812:1:38",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "2803:5:38",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "2848:67:38",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "2866:35:38",
                                  "value": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "2885:3:38"
                                          },
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "2890:9:38"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "2881:3:38"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "2881:19:38"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "2875:5:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2875:26:38"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "2866:5:38"
                                    }
                                  ]
                                }
                              ]
                            },
                            "condition": {
                              "name": "newLen",
                              "nodeType": "YulIdentifier",
                              "src": "2829:6:38"
                            },
                            "nodeType": "YulIf",
                            "src": "2826:89:38"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "2935:4:38"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "2994:5:38"
                                    },
                                    {
                                      "name": "newLen",
                                      "nodeType": "YulIdentifier",
                                      "src": "3001:6:38"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "extract_used_part_and_set_length_of_short_byte_array",
                                    "nodeType": "YulIdentifier",
                                    "src": "2941:52:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2941:67:38"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nodeType": "YulIdentifier",
                                "src": "2928:6:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2928:81:38"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "2928:81:38"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "2777:242:38",
                      "value": "default"
                    }
                  ],
                  "expression": {
                    "arguments": [
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "2085:6:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2093:2:38",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "2082:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2082:14:38"
                  },
                  "nodeType": "YulSwitch",
                  "src": "2075:944:38"
                }
              ]
            },
            "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "1754:4:38",
                "type": ""
              },
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "1760:3:38",
                "type": ""
              }
            ],
            "src": "1673:1352:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3204:228:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3221:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3232:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3214:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3214:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3214:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3255:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3266:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3251:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3251:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3271:2:38",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3244:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3244:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3244:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3294:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3305:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3290:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3290:18:38"
                      },
                      {
                        "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "3310:34:38",
                        "type": "",
                        "value": "Ownable: new owner is the zero a"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3283:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3283:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3283:62:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3365:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3376:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3361:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3361:18:38"
                      },
                      {
                        "hexValue": "646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "3381:8:38",
                        "type": "",
                        "value": "ddress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3354:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3354:36:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3354:36:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3399:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3411:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3422:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3407:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3407:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3399:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3181:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3195:4:38",
                "type": ""
              }
            ],
            "src": "3030:402:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3611:182:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3628:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3639:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3621:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3621:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3621:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3662:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3673:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3658:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3658:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3678:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3651:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3651:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3651:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3701:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3712:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3697:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3697:18:38"
                      },
                      {
                        "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "3717:34:38",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3690:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3690:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3690:62:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3761:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3773:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3784:2:38",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3769:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3769:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3761:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3588:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3602:4:38",
                "type": ""
              }
            ],
            "src": "3437:356:38"
          }
        ]
      },
      "contents": "{\n    { }\n    function abi_decode_tuple_t_address_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n        value0 := value\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function array_dataslot_string_storage(ptr) -> data\n    {\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n    }\n    function clean_up_bytearray_end_slots_string_storage(array, len, startIndex)\n    {\n        if gt(len, 31)\n        {\n            let _1 := 0\n            mstore(_1, array)\n            let data := keccak256(_1, 0x20)\n            let deleteStart := add(data, shr(5, add(startIndex, 31)))\n            if lt(startIndex, 0x20) { deleteStart := data }\n            let _2 := add(data, shr(5, add(len, 31)))\n            let start := deleteStart\n            for { } lt(start, _2) { start := add(start, 1) }\n            { sstore(start, _1) }\n        }\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used\n    {\n        used := or(and(data, not(shr(shl(3, len), not(0)))), shl(1, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src)\n    {\n        let newLen := mload(src)\n        if gt(newLen, sub(shl(64, 1), 1)) { panic_error_0x41() }\n        clean_up_bytearray_end_slots_string_storage(slot, extract_byte_array_length(sload(slot)), newLen)\n        let srcOffset := 0\n        let srcOffset_1 := 0x20\n        srcOffset := srcOffset_1\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(31))\n            let dstPtr := array_dataslot_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, srcOffset_1) }\n            {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, srcOffset_1)\n            }\n            if lt(loopEnd, newLen)\n            {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, and(lastValue, not(shr(and(shl(3, newLen), 248), not(0)))))\n            }\n            sstore(slot, add(shl(1, newLen), 1))\n        }\n        default {\n            let value := 0\n            if newLen\n            {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"Ownable: new owner is the zero a\")\n        mstore(add(headStart, 96), \"ddress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"Ownable: caller is not the owner\")\n        tail := add(headStart, 96)\n    }\n}",
      "id": 38,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:8223:38",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:38",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "135:427:38",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "145:12:38",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "155:2:38",
                    "type": "",
                    "value": "32"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "149:2:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "173:9:38"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "184:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "166:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "166:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "166:21:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "196:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "216:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "210:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "210:13:38"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "200:6:38",
                      "type": ""
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
                            "src": "243:9:38"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "254:2:38"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "239:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "239:18:38"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "259:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "232:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "232:34:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "232:34:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "275:10:38",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "284:1:38",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "279:1:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "344:90:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "373:9:38"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "384:1:38"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "369:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "369:17:38"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "388:2:38",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "365:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "365:26:38"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "value0",
                                          "nodeType": "YulIdentifier",
                                          "src": "407:6:38"
                                        },
                                        {
                                          "name": "i",
                                          "nodeType": "YulIdentifier",
                                          "src": "415:1:38"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "403:3:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "403:14:38"
                                    },
                                    {
                                      "name": "_1",
                                      "nodeType": "YulIdentifier",
                                      "src": "419:2:38"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "399:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "399:23:38"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "393:5:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "393:30:38"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "358:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "358:66:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "358:66:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "305:1:38"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "308:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "302:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "302:13:38"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "316:19:38",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "318:15:38",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "327:1:38"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "330:2:38"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "323:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "323:10:38"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "318:1:38"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "298:3:38",
                    "statements": []
                  },
                  "src": "294:140:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "458:9:38"
                              },
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "469:6:38"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "454:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "454:22:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "478:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "450:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "450:31:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "483:1:38",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "443:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "443:42:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "443:42:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "494:62:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "510:9:38"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "length",
                                    "nodeType": "YulIdentifier",
                                    "src": "529:6:38"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "537:2:38",
                                    "type": "",
                                    "value": "31"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "525:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "525:15:38"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "546:2:38",
                                    "type": "",
                                    "value": "31"
                                  }
                                ],
                                "functionName": {
                                  "name": "not",
                                  "nodeType": "YulIdentifier",
                                  "src": "542:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "542:7:38"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "521:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "521:29:38"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "506:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "506:45:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "553:2:38",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "502:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "502:54:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "494:4:38"
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
                "src": "104:9:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "115:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "126:4:38",
                "type": ""
              }
            ],
            "src": "14:548:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "616:147:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "626:29:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "648:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "635:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "635:20:38"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "626:5:38"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "741:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "750:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "753:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "743:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "743:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "743:12:38"
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
                            "src": "677:5:38"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "688:5:38"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "695:42:38",
                                "type": "",
                                "value": "0xffffffffffffffffffffffffffffffffffffffff"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "684:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "684:54:38"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "674:2:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "674:65:38"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "667:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "667:73:38"
                  },
                  "nodeType": "YulIf",
                  "src": "664:93:38"
                }
              ]
            },
            "name": "abi_decode_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "595:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "606:5:38",
                "type": ""
              }
            ],
            "src": "567:196:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "855:167:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "901:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "910:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "913:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "903:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "903:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "903:12:38"
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
                            "src": "876:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "885:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "872:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "872:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "897:2:38",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "868:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "868:32:38"
                  },
                  "nodeType": "YulIf",
                  "src": "865:52:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "926:39:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "955:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "936:18:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "936:29:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "926:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "974:42:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1001:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1012:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "997:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "997:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "984:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "984:32:38"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "974:6:38"
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
                "src": "813:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "824:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "836:6:38",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "844:6:38",
                "type": ""
              }
            ],
            "src": "768:254:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1122:92:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1132:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1144:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1155:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1140:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1140:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1132:4:38"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1174:9:38"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "1199:6:38"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "1192:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1192:14:38"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "1185:6:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1185:22:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1167:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1167:41:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1167:41:38"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1091:9:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1102:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1113:4:38",
                "type": ""
              }
            ],
            "src": "1027:187:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1320:76:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1330:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1342:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1353:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1338:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1338:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1330:4:38"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1372:9:38"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "1383:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1365:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1365:25:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1365:25:38"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1289:9:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1300:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1311:4:38",
                "type": ""
              }
            ],
            "src": "1219:177:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1505:224:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1551:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1560:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1563:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1553:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1553:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1553:12:38"
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
                            "src": "1526:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1535:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1522:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1522:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1547:2:38",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1518:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1518:32:38"
                  },
                  "nodeType": "YulIf",
                  "src": "1515:52:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1576:39:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1605:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "1586:18:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1586:29:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1576:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1624:48:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1657:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1668:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1653:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1653:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "1634:18:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1634:38:38"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "1624:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1681:42:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1708:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1719:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1704:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1704:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1691:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1691:32:38"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "1681:6:38"
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
                "src": "1455:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1466:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1478:6:38",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1486:6:38",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "1494:6:38",
                "type": ""
              }
            ],
            "src": "1401:328:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1831:87:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1841:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1853:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1864:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1849:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1849:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1841:4:38"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1883:9:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1898:6:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1906:4:38",
                            "type": "",
                            "value": "0xff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "1894:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1894:17:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1876:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1876:36:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1876:36:38"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1800:9:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1811:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1822:4:38",
                "type": ""
              }
            ],
            "src": "1734:184:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1993:116:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2039:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2048:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2051:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2041:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2041:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2041:12:38"
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
                            "src": "2014:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2023:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2010:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2010:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2035:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2006:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2006:32:38"
                  },
                  "nodeType": "YulIf",
                  "src": "2003:52:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2064:39:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2093:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "2074:18:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2074:29:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "2064:6:38"
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
                "src": "1959:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1970:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1982:6:38",
                "type": ""
              }
            ],
            "src": "1923:186:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2215:125:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2225:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2237:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2248:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2233:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2233:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2225:4:38"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2267:9:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2282:6:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2290:42:38",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "2278:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2278:55:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2260:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2260:74:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2260:74:38"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2184:9:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2195:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2206:4:38",
                "type": ""
              }
            ],
            "src": "2114:226:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2432:173:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2478:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2487:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2490:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2480:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2480:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2480:12:38"
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
                            "src": "2453:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2462:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2449:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2449:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2474:2:38",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2445:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2445:32:38"
                  },
                  "nodeType": "YulIf",
                  "src": "2442:52:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2503:39:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2532:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "2513:18:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2513:29:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "2503:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2551:48:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2584:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2595:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2580:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2580:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "2561:18:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2561:38:38"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "2551:6:38"
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
                "src": "2390:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2401:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2413:6:38",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2421:6:38",
                "type": ""
              }
            ],
            "src": "2345:260:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2665:382:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2675:22:38",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2689:1:38",
                        "type": "",
                        "value": "1"
                      },
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "2692:4:38"
                      }
                    ],
                    "functionName": {
                      "name": "shr",
                      "nodeType": "YulIdentifier",
                      "src": "2685:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2685:12:38"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "2675:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2706:38:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "2736:4:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2742:1:38",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "2732:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2732:12:38"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "2710:18:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2783:31:38",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2785:27:38",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "2799:6:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2807:4:38",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "2795:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2795:17:38"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2785:6:38"
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
                        "src": "2763:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "2756:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2756:26:38"
                  },
                  "nodeType": "YulIf",
                  "src": "2753:61:38"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2873:168:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2894:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2897:77:38",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2887:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2887:88:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2887:88:38"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2995:1:38",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2998:4:38",
                              "type": "",
                              "value": "0x22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2988:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2988:15:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2988:15:38"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3023:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3026:4:38",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3016:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3016:15:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3016:15:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "2829:18:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2852:6:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2860:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "2849:2:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2849:14:38"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "2826:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2826:38:38"
                  },
                  "nodeType": "YulIf",
                  "src": "2823:218:38"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "2645:4:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "2654:6:38",
                "type": ""
              }
            ],
            "src": "2610:437:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3084:152:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3101:1:38",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3104:77:38",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3094:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3094:88:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3094:88:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3198:1:38",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3201:4:38",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3191:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3191:15:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3191:15:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3222:1:38",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3225:4:38",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "3215:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3215:15:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3215:15:38"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "3052:184:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3289:77:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3299:16:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "3310:1:38"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "3313:1:38"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3306:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3306:9:38"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "3299:3:38"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3338:22:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "3340:16:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3340:18:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3340:18:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "3330:1:38"
                      },
                      {
                        "name": "sum",
                        "nodeType": "YulIdentifier",
                        "src": "3333:3:38"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "3327:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3327:10:38"
                  },
                  "nodeType": "YulIf",
                  "src": "3324:36:38"
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "3272:1:38",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "3275:1:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "3281:3:38",
                "type": ""
              }
            ],
            "src": "3241:125:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3545:227:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3562:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3573:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3555:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3555:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3555:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3596:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3607:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3592:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3592:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3612:2:38",
                        "type": "",
                        "value": "37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3585:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3585:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3585:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3635:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3646:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3631:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3631:18:38"
                      },
                      {
                        "hexValue": "45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "3651:34:38",
                        "type": "",
                        "value": "ERC20: decreased allowance below"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3624:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3624:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3624:62:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3706:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3717:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3702:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3702:18:38"
                      },
                      {
                        "hexValue": "207a65726f",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "3722:7:38",
                        "type": "",
                        "value": " zero"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3695:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3695:35:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3695:35:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3739:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3751:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3762:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3747:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3747:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3739:4:38"
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
                "src": "3522:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3536:4:38",
                "type": ""
              }
            ],
            "src": "3371:401:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3951:228:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3968:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3979:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3961:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3961:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3961:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4002:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4013:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3998:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3998:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4018:2:38",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3991:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3991:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3991:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4041:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4052:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4037:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4037:18:38"
                      },
                      {
                        "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4057:34:38",
                        "type": "",
                        "value": "Ownable: new owner is the zero a"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4030:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4030:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4030:62:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4112:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4123:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4108:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4108:18:38"
                      },
                      {
                        "hexValue": "646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4128:8:38",
                        "type": "",
                        "value": "ddress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4101:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4101:36:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4101:36:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4146:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4158:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4169:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4154:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4154:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4146:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3928:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3942:4:38",
                "type": ""
              }
            ],
            "src": "3777:402:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4358:226:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4375:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4386:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4368:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4368:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4368:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4409:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4420:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4405:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4405:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4425:2:38",
                        "type": "",
                        "value": "36"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4398:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4398:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4398:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4448:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4459:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4444:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4444:18:38"
                      },
                      {
                        "hexValue": "45524332303a20617070726f76652066726f6d20746865207a65726f20616464",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4464:34:38",
                        "type": "",
                        "value": "ERC20: approve from the zero add"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4437:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4437:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4437:62:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4519:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4530:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4515:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4515:18:38"
                      },
                      {
                        "hexValue": "72657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4535:6:38",
                        "type": "",
                        "value": "ress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4508:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4508:34:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4508:34:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4551:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4563:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4574:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4559:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4559:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4551:4:38"
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
                "src": "4335:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4349:4:38",
                "type": ""
              }
            ],
            "src": "4184:400:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4763:224:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4780:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4791:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4773:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4773:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4773:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4814:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4825:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4810:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4810:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4830:2:38",
                        "type": "",
                        "value": "34"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4803:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4803:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4803:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4853:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4864:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4849:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4849:18:38"
                      },
                      {
                        "hexValue": "45524332303a20617070726f766520746f20746865207a65726f206164647265",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4869:34:38",
                        "type": "",
                        "value": "ERC20: approve to the zero addre"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4842:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4842:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4842:62:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4924:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4935:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4920:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4920:18:38"
                      },
                      {
                        "hexValue": "7373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4940:4:38",
                        "type": "",
                        "value": "ss"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4913:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4913:32:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4913:32:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4954:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4966:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4977:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4962:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4962:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4954:4:38"
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
                "src": "4740:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4754:4:38",
                "type": ""
              }
            ],
            "src": "4589:398:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5166:179:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5183:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5194:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5176:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5176:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5176:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5217:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5228:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5213:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5213:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5233:2:38",
                        "type": "",
                        "value": "29"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5206:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5206:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5206:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5256:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5267:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5252:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5252:18:38"
                      },
                      {
                        "hexValue": "45524332303a20696e73756666696369656e7420616c6c6f77616e6365",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "5272:31:38",
                        "type": "",
                        "value": "ERC20: insufficient allowance"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5245:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5245:59:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5245:59:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5313:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5325:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5336:2:38",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5321:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5321:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5313:4:38"
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
                "src": "5143:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5157:4:38",
                "type": ""
              }
            ],
            "src": "4992:353:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5524:227:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5541:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5552:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5534:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5534:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5534:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5575:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5586:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5571:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5571:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5591:2:38",
                        "type": "",
                        "value": "37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5564:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5564:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5564:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5614:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5625:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5610:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5610:18:38"
                      },
                      {
                        "hexValue": "45524332303a207472616e736665722066726f6d20746865207a65726f206164",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "5630:34:38",
                        "type": "",
                        "value": "ERC20: transfer from the zero ad"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5603:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5603:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5603:62:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5685:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5696:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5681:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5681:18:38"
                      },
                      {
                        "hexValue": "6472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "5701:7:38",
                        "type": "",
                        "value": "dress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5674:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5674:35:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5674:35:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5718:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5730:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5741:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5726:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5726:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5718:4:38"
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
                "src": "5501:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5515:4:38",
                "type": ""
              }
            ],
            "src": "5350:401:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5930:225:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5947:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5958:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5940:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5940:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5940:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5981:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5992:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5977:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5977:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5997:2:38",
                        "type": "",
                        "value": "35"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5970:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5970:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5970:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6020:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6031:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6016:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6016:18:38"
                      },
                      {
                        "hexValue": "45524332303a207472616e7366657220746f20746865207a65726f2061646472",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "6036:34:38",
                        "type": "",
                        "value": "ERC20: transfer to the zero addr"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6009:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6009:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6009:62:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6091:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6102:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6087:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6087:18:38"
                      },
                      {
                        "hexValue": "657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "6107:5:38",
                        "type": "",
                        "value": "ess"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6080:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6080:33:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6080:33:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6122:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6134:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6145:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6130:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6130:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6122:4:38"
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
                "src": "5907:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5921:4:38",
                "type": ""
              }
            ],
            "src": "5756:399:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6334:228:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6351:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6362:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6344:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6344:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6344:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6385:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6396:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6381:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6381:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6401:2:38",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6374:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6374:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6374:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6424:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6435:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6420:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6420:18:38"
                      },
                      {
                        "hexValue": "45524332303a207472616e7366657220616d6f756e7420657863656564732062",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "6440:34:38",
                        "type": "",
                        "value": "ERC20: transfer amount exceeds b"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6413:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6413:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6413:62:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6495:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6506:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6491:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6491:18:38"
                      },
                      {
                        "hexValue": "616c616e6365",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "6511:8:38",
                        "type": "",
                        "value": "alance"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6484:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6484:36:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6484:36:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6529:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6541:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6552:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6537:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6537:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6529:4:38"
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
                "src": "6311:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6325:4:38",
                "type": ""
              }
            ],
            "src": "6160:402:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6741:182:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6758:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6769:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6751:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6751:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6751:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6792:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6803:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6788:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6788:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6808:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6781:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6781:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6781:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6831:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6842:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6827:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6827:18:38"
                      },
                      {
                        "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "6847:34:38",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6820:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6820:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6820:62:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6891:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6903:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6914:2:38",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6899:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6899:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6891:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6718:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6732:4:38",
                "type": ""
              }
            ],
            "src": "6567:356:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7102:181:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7119:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7130:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7112:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7112:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7112:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7153:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7164:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7149:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7149:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7169:2:38",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7142:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7142:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7142:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7192:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7203:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7188:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7188:18:38"
                      },
                      {
                        "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7208:33:38",
                        "type": "",
                        "value": "ERC20: mint to the zero address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7181:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7181:61:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7181:61:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7251:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7263:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7274:2:38",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7259:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7259:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7251:4:38"
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
                "src": "7079:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7093:4:38",
                "type": ""
              }
            ],
            "src": "6928:355:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7462:223:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7479:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7490:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7472:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7472:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7472:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7513:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7524:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7509:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7509:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7529:2:38",
                        "type": "",
                        "value": "33"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7502:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7502:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7502:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7552:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7563:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7548:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7548:18:38"
                      },
                      {
                        "hexValue": "45524332303a206275726e2066726f6d20746865207a65726f20616464726573",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7568:34:38",
                        "type": "",
                        "value": "ERC20: burn from the zero addres"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7541:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7541:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7541:62:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7623:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7634:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7619:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7619:18:38"
                      },
                      {
                        "hexValue": "73",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7639:3:38",
                        "type": "",
                        "value": "s"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7612:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7612:31:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7612:31:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7652:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7664:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7675:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7660:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7660:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7652:4:38"
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
                "src": "7439:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7453:4:38",
                "type": ""
              }
            ],
            "src": "7288:397:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7864:224:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7881:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7892:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7874:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7874:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7874:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7915:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7926:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7911:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7911:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7931:2:38",
                        "type": "",
                        "value": "34"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7904:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7904:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7904:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7954:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7965:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7950:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7950:18:38"
                      },
                      {
                        "hexValue": "45524332303a206275726e20616d6f756e7420657863656564732062616c616e",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7970:34:38",
                        "type": "",
                        "value": "ERC20: burn amount exceeds balan"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7943:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7943:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7943:62:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8025:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8036:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8021:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8021:18:38"
                      },
                      {
                        "hexValue": "6365",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8041:4:38",
                        "type": "",
                        "value": "ce"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8014:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8014:32:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8014:32:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8055:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8067:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8078:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8063:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8063:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8055:4:38"
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
                "src": "7841:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7855:4:38",
                "type": ""
              }
            ],
            "src": "7690:398:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8142:79:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8152:17:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "8164:1:38"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "8167:1:38"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "8160:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8160:9:38"
                  },
                  "variableNames": [
                    {
                      "name": "diff",
                      "nodeType": "YulIdentifier",
                      "src": "8152:4:38"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8193:22:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "8195:16:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8195:18:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8195:18:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "diff",
                        "nodeType": "YulIdentifier",
                        "src": "8184:4:38"
                      },
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "8190:1:38"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "8181:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8181:11:38"
                  },
                  "nodeType": "YulIf",
                  "src": "8178:37:38"
                }
              ]
            },
            "name": "checked_sub_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "8124:1:38",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "8127:1:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "diff",
                "nodeType": "YulTypedName",
                "src": "8133:4:38",
                "type": ""
              }
            ],
            "src": "8093:128:38"
          }
        ]
      },
      "contents": "{\n    { }\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        mstore(headStart, _1)\n        let length := mload(value0)\n        mstore(add(headStart, _1), length)\n        let i := 0\n        for { } lt(i, length) { i := add(i, _1) }\n        {\n            mstore(add(add(headStart, i), 64), mload(add(add(value0, i), _1)))\n        }\n        mstore(add(add(headStart, length), 64), 0)\n        tail := add(add(headStart, and(add(length, 31), not(31))), 64)\n    }\n    function abi_decode_address(offset) -> value\n    {\n        value := calldataload(offset)\n        if iszero(eq(value, and(value, 0xffffffffffffffffffffffffffffffffffffffff))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := calldataload(add(headStart, 32))\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n        value2 := calldataload(add(headStart, 64))\n    }\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xff))\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        sum := add(x, y)\n        if gt(x, sum) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 37)\n        mstore(add(headStart, 64), \"ERC20: decreased allowance below\")\n        mstore(add(headStart, 96), \" zero\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"Ownable: new owner is the zero a\")\n        mstore(add(headStart, 96), \"ddress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 36)\n        mstore(add(headStart, 64), \"ERC20: approve from the zero add\")\n        mstore(add(headStart, 96), \"ress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 34)\n        mstore(add(headStart, 64), \"ERC20: approve to the zero addre\")\n        mstore(add(headStart, 96), \"ss\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 29)\n        mstore(add(headStart, 64), \"ERC20: insufficient allowance\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 37)\n        mstore(add(headStart, 64), \"ERC20: transfer from the zero ad\")\n        mstore(add(headStart, 96), \"dress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 35)\n        mstore(add(headStart, 64), \"ERC20: transfer to the zero addr\")\n        mstore(add(headStart, 96), \"ess\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"ERC20: transfer amount exceeds b\")\n        mstore(add(headStart, 96), \"alance\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"Ownable: caller is not the owner\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 31)\n        mstore(add(headStart, 64), \"ERC20: mint to the zero address\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 33)\n        mstore(add(headStart, 64), \"ERC20: burn from the zero addres\")\n        mstore(add(headStart, 96), \"s\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 34)\n        mstore(add(headStart, 64), \"ERC20: burn amount exceeds balan\")\n        mstore(add(headStart, 96), \"ce\")\n        tail := add(headStart, 128)\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        diff := sub(x, y)\n        if gt(diff, x) { panic_error_0x11() }\n    }\n}",
      "id": 38,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "186:376:28:-:0;;;223:115;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1978:113:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1978:113:9;;;2052:5;2044;:13;;;;;;:::i;:::-;-1:-1:-1;2067:7:9;:17;2077:7;2067;:17;:::i;:::-;;1978:113;;936:32:0;955:12;:10;;;:12;;:::i;:::-;936:18;:32::i;:::-;302:29:28::1;320:10:::0;302:17:::1;:29::i;:::-;223:115:::0;186:376;;640:96:19;719:10;;640:96::o;2433:187:0:-;2525:6;;;-1:-1:-1;;;;;2541:17:0;;;-1:-1:-1;;;;;;2541:17:0;;;;;;;2573:40;;2525:6;;;2541:17;2525:6;;2573:40;;2506:16;;2573:40;2496:124;2433:187;:::o;2081:198::-;1094:13;:11;:13::i;:::-;-1:-1:-1;;;;;2169:22:0;::::1;2161:73;;;::::0;-1:-1:-1;;;2161:73:0;;3232:2:38;2161:73:0::1;::::0;::::1;3214:21:38::0;3271:2;3251:18;;;3244:30;3310:34;3290:18;;;3283:62;-1:-1:-1;;;3361:18:38;;;3354:36;3407:19;;2161:73:0::1;;;;;;;;;2244:28;2263:8:::0;2244:18:::1;:28::i;:::-;2081:198:::0;:::o;1359:130::-;1273:6;;-1:-1:-1;;;;;1273:6:0;719:10:19;1422:23:0;1414:68;;;;-1:-1:-1;;;1414:68:0;;3639:2:38;1414:68:0;;;3621:21:38;;;3658:18;;;3651:30;3717:34;3697:18;;;3690:62;3769:18;;1414:68:0;3437:356:38;1414:68:0;1359:130::o;14:290:38:-;84:6;137:2;125:9;116:7;112:23;108:32;105:52;;;153:1;150;143:12;105:52;179:16;;-1:-1:-1;;;;;224:31:38;;214:42;;204:70;;270:1;267;260:12;204:70;293:5;14:290;-1:-1:-1;;;14:290:38:o;309:127::-;370:10;365:3;361:20;358:1;351:31;401:4;398:1;391:15;425:4;422:1;415:15;441:380;520:1;516:12;;;;563;;;584:61;;638:4;630:6;626:17;616:27;;584:61;691:2;683:6;680:14;660:18;657:38;654:161;;737:10;732:3;728:20;725:1;718:31;772:4;769:1;762:15;800:4;797:1;790:15;654:161;;441:380;;;:::o;952:545::-;1054:2;1049:3;1046:11;1043:448;;;1090:1;1115:5;1111:2;1104:17;1160:4;1156:2;1146:19;1230:2;1218:10;1214:19;1211:1;1207:27;1201:4;1197:38;1266:4;1254:10;1251:20;1248:47;;;-1:-1:-1;1289:4:38;1248:47;1344:2;1339:3;1335:12;1332:1;1328:20;1322:4;1318:31;1308:41;;1399:82;1417:2;1410:5;1407:13;1399:82;;;1462:17;;;1443:1;1432:13;1399:82;;;1403:3;;;1043:448;952:545;;;:::o;1673:1352::-;1793:10;;-1:-1:-1;;;;;1815:30:38;;1812:56;;;1848:18;;:::i;:::-;1877:97;1967:6;1927:38;1959:4;1953:11;1927:38;:::i;:::-;1921:4;1877:97;:::i;:::-;2029:4;;2093:2;2082:14;;2110:1;2105:663;;;;2812:1;2829:6;2826:89;;;-1:-1:-1;2881:19:38;;;2875:26;2826:89;-1:-1:-1;;1630:1:38;1626:11;;;1622:24;1618:29;1608:40;1654:1;1650:11;;;1605:57;2928:81;;2075:944;;2105:663;899:1;892:14;;;936:4;923:18;;-1:-1:-1;;2141:20:38;;;2259:236;2273:7;2270:1;2267:14;2259:236;;;2362:19;;;2356:26;2341:42;;2454:27;;;;2422:1;2410:14;;;;2289:19;;2259:236;;;2263:3;2523:6;2514:7;2511:19;2508:201;;;2584:19;;;2578:26;-1:-1:-1;;2667:1:38;2663:14;;;2679:3;2659:24;2655:37;2651:42;2636:58;2621:74;;2508:201;-1:-1:-1;;;;;2755:1:38;2739:14;;;2735:22;2722:36;;-1:-1:-1;1673:1352:38:o;3437:356::-;186:376:28;;;;;;",
  "deployedSourceMap": "186:376:28:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:98:9;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4433:197;;;;;;:::i;:::-;;:::i;:::-;;;1192:14:38;;1185:22;1167:41;;1155:2;1140:18;4433:197:9;1027:187:38;3244:106:9;3331:12;;3244:106;;;1365:25:38;;;1353:2;1338:18;3244:106:9;1219:177:38;5192:286:9;;;;;;:::i;:::-;;:::i;3093:91::-;;;3175:2;1876:36:38;;1864:2;1849:18;3093:91:9;1734:184:38;5873:234:9;;;;;;:::i;:::-;;:::i;344:105:28:-;;;;;;:::i;:::-;;:::i;:::-;;3408:125:9;;;;;;:::i;:::-;-1:-1:-1;;;;;3508:18:9;3482:7;3508:18;;;;;;;;;;;;3408:125;1831:101:0;;;:::i;1201:85::-;1273:6;;1201:85;;-1:-1:-1;;;;;1273:6:0;;;2260:74:38;;2248:2;2233:18;1201:85:0;2114:226:38;2367:102:9;;;:::i;455:105:28:-;;;;;;:::i;:::-;;:::i;6594:427:9:-;;;;;;:::i;:::-;;:::i;3729:189::-;;;;;;:::i;:::-;;:::i;3976:149::-;;;;;;:::i;:::-;-1:-1:-1;;;;;4091:18:9;;;4065:7;4091:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;3976:149;2081:198:0;;;;;;:::i;:::-;;:::i;2156:98:9:-;2210:13;2242:5;2235:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:98;:::o;4433:197::-;4516:4;719:10:19;4570:32:9;719:10:19;4586:7:9;4595:6;4570:8;:32::i;:::-;4619:4;4612:11;;;4433:197;;;;;:::o;5192:286::-;5319:4;719:10:19;5375:38:9;5391:4;719:10:19;5406:6:9;5375:15;:38::i;:::-;5423:27;5433:4;5439:2;5443:6;5423:9;:27::i;:::-;-1:-1:-1;5467:4:9;;5192:286;-1:-1:-1;;;;5192:286:9:o;5873:234::-;719:10:19;5961:4:9;4091:18;;;:11;:18;;;;;;;;-1:-1:-1;;;;;4091:27:9;;;;;;;;;;5961:4;;719:10:19;6015:64:9;;719:10:19;;4091:27:9;;6040:38;;6068:10;;6040:38;:::i;:::-;6015:8;:64::i;344:105:28:-;1094:13:0;:11;:13::i;:::-;420:22:28::1;426:7;435:6;420:5;:22::i;:::-;344:105:::0;;:::o;1831:101:0:-;1094:13;:11;:13::i;:::-;1895:30:::1;1922:1;1895:18;:30::i;:::-;1831:101::o:0;2367:102:9:-;2423:13;2455:7;2448:14;;;;;:::i;455:105:28:-;1094:13:0;:11;:13::i;:::-;531:22:28::1;537:7;546:6;531:5;:22::i;6594:427:9:-:0;719:10:19;6687:4:9;4091:18;;;:11;:18;;;;;;;;-1:-1:-1;;;;;4091:27:9;;;;;;;;;;6687:4;;719:10:19;6831:15:9;6811:16;:35;;6803:85;;;;-1:-1:-1;;;6803:85:9;;3573:2:38;6803:85:9;;;3555:21:38;3612:2;3592:18;;;3585:30;3651:34;3631:18;;;3624:62;3722:7;3702:18;;;3695:35;3747:19;;6803:85:9;;;;;;;;;6922:60;6931:5;6938:7;6966:15;6947:16;:34;6922:8;:60::i;3729:189::-;3808:4;719:10:19;3862:28:9;719:10:19;3879:2:9;3883:6;3862:9;:28::i;2081:198:0:-;1094:13;:11;:13::i;:::-;-1:-1:-1;;;;;2169:22:0;::::1;2161:73;;;::::0;-1:-1:-1;;;2161:73:0;;3979:2:38;2161:73:0::1;::::0;::::1;3961:21:38::0;4018:2;3998:18;;;3991:30;4057:34;4037:18;;;4030:62;4128:8;4108:18;;;4101:36;4154:19;;2161:73:0::1;3777:402:38::0;2161:73:0::1;2244:28;2263:8;2244:18;:28::i;:::-;2081:198:::0;:::o;10110:370:9:-;-1:-1:-1;;;;;10241:19:9;;10233:68;;;;-1:-1:-1;;;10233:68:9;;4386:2:38;10233:68:9;;;4368:21:38;4425:2;4405:18;;;4398:30;4464:34;4444:18;;;4437:62;4535:6;4515:18;;;4508:34;4559:19;;10233:68:9;4184:400:38;10233:68:9;-1:-1:-1;;;;;10319:21:9;;10311:68;;;;-1:-1:-1;;;10311:68:9;;4791:2:38;10311:68:9;;;4773:21:38;4830:2;4810:18;;;4803:30;4869:34;4849:18;;;4842:62;4940:4;4920:18;;;4913:32;4962:19;;10311:68:9;4589:398:38;10311:68:9;-1:-1:-1;;;;;10390:18:9;;;;;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;:36;;;10441:32;;1365:25:38;;;10441:32:9;;1338:18:38;10441:32:9;;;;;;;;10110:370;;;:::o;10761:441::-;-1:-1:-1;;;;;4091:18:9;;;10891:24;4091:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;-1:-1:-1;;10957:37:9;;10953:243;;11038:6;11018:16;:26;;11010:68;;;;-1:-1:-1;;;11010:68:9;;5194:2:38;11010:68:9;;;5176:21:38;5233:2;5213:18;;;5206:30;5272:31;5252:18;;;5245:59;5321:18;;11010:68:9;4992:353:38;11010:68:9;11120:51;11129:5;11136:7;11164:6;11145:16;:25;11120:8;:51::i;:::-;10881:321;10761:441;;;:::o;7475:651::-;-1:-1:-1;;;;;7601:18:9;;7593:68;;;;-1:-1:-1;;;7593:68:9;;5552:2:38;7593:68:9;;;5534:21:38;5591:2;5571:18;;;5564:30;5630:34;5610:18;;;5603:62;5701:7;5681:18;;;5674:35;5726:19;;7593:68:9;5350:401:38;7593:68:9;-1:-1:-1;;;;;7679:16:9;;7671:64;;;;-1:-1:-1;;;7671:64:9;;5958:2:38;7671:64:9;;;5940:21:38;5997:2;5977:18;;;5970:30;6036:34;6016:18;;;6009:62;6107:5;6087:18;;;6080:33;6130:19;;7671:64:9;5756:399:38;7671:64:9;-1:-1:-1;;;;;7817:15:9;;7795:19;7817:15;;;;;;;;;;;7850:21;;;;7842:72;;;;-1:-1:-1;;;7842:72:9;;6362:2:38;7842:72:9;;;6344:21:38;6401:2;6381:18;;;6374:30;6440:34;6420:18;;;6413:62;6511:8;6491:18;;;6484:36;6537:19;;7842:72:9;6160:402:38;7842:72:9;-1:-1:-1;;;;;7948:15:9;;;:9;:15;;;;;;;;;;;7966:20;;;7948:38;;8006:13;;;;;;;;:23;;7980:6;;7948:9;8006:23;;7980:6;;8006:23;:::i;:::-;;;;;;;;8060:2;-1:-1:-1;;;;;8045:26:9;8054:4;-1:-1:-1;;;;;8045:26:9;;8064:6;8045:26;;;;1365:25:38;;1353:2;1338:18;;1219:177;8045:26:9;;;;;;;;8082:37;9111:576;1359:130:0;1273:6;;-1:-1:-1;;;;;1273:6:0;719:10:19;1422:23:0;1414:68;;;;-1:-1:-1;;;1414:68:0;;6769:2:38;1414:68:0;;;6751:21:38;;;6788:18;;;6781:30;6847:34;6827:18;;;6820:62;6899:18;;1414:68:0;6567:356:38;8402:389:9;-1:-1:-1;;;;;8485:21:9;;8477:65;;;;-1:-1:-1;;;8477:65:9;;7130:2:38;8477:65:9;;;7112:21:38;7169:2;7149:18;;;7142:30;7208:33;7188:18;;;7181:61;7259:18;;8477:65:9;6928:355:38;8477:65:9;8629:6;8613:12;;:22;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;8645:18:9;;:9;:18;;;;;;;;;;:28;;8667:6;;8645:9;:28;;8667:6;;8645:28;:::i;:::-;;;;-1:-1:-1;;8688:37:9;;1365:25:38;;;-1:-1:-1;;;;;8688:37:9;;;8705:1;;8688:37;;1353:2:38;1338:18;8688:37:9;;;;;;;344:105:28;;:::o;2433:187:0:-;2525:6;;;-1:-1:-1;;;;;2541:17:0;;;;;;;;;;;2573:40;;2525:6;;;2541:17;2525:6;;2573:40;;2506:16;;2573:40;2496:124;2433:187;:::o;9111:576:9:-;-1:-1:-1;;;;;9194:21:9;;9186:67;;;;-1:-1:-1;;;9186:67:9;;7490:2:38;9186:67:9;;;7472:21:38;7529:2;7509:18;;;7502:30;7568:34;7548:18;;;7541:62;7639:3;7619:18;;;7612:31;7660:19;;9186:67:9;7288:397:38;9186:67:9;-1:-1:-1;;;;;9349:18:9;;9324:22;9349:18;;;;;;;;;;;9385:24;;;;9377:71;;;;-1:-1:-1;;;9377:71:9;;7892:2:38;9377:71:9;;;7874:21:38;7931:2;7911:18;;;7904:30;7970:34;7950:18;;;7943:62;8041:4;8021:18;;;8014:32;8063:19;;9377:71:9;7690:398:38;9377:71:9;-1:-1:-1;;;;;9482:18:9;;:9;:18;;;;;;;;;;9503:23;;;9482:44;;9546:12;:22;;9520:6;;9482:9;9546:22;;9520:6;;9546:22;:::i;:::-;;;;-1:-1:-1;;9584:37:9;;1365:25:38;;;9610:1:9;;-1:-1:-1;;;;;9584:37:9;;;;;1353:2:38;1338:18;9584:37:9;1219:177:38;14:548;126:4;155:2;184;173:9;166:21;216:6;210:13;259:6;254:2;243:9;239:18;232:34;284:1;294:140;308:6;305:1;302:13;294:140;;;403:14;;;399:23;;393:30;369:17;;;388:2;365:26;358:66;323:10;;294:140;;;298:3;483:1;478:2;469:6;458:9;454:22;450:31;443:42;553:2;546;542:7;537:2;529:6;525:15;521:29;510:9;506:45;502:54;494:62;;;;14:548;;;;:::o;567:196::-;635:20;;-1:-1:-1;;;;;684:54:38;;674:65;;664:93;;753:1;750;743:12;664:93;567:196;;;:::o;768:254::-;836:6;844;897:2;885:9;876:7;872:23;868:32;865:52;;;913:1;910;903:12;865:52;936:29;955:9;936:29;:::i;:::-;926:39;1012:2;997:18;;;;984:32;;-1:-1:-1;;;768:254:38:o;1401:328::-;1478:6;1486;1494;1547:2;1535:9;1526:7;1522:23;1518:32;1515:52;;;1563:1;1560;1553:12;1515:52;1586:29;1605:9;1586:29;:::i;:::-;1576:39;;1634:38;1668:2;1657:9;1653:18;1634:38;:::i;:::-;1624:48;;1719:2;1708:9;1704:18;1691:32;1681:42;;1401:328;;;;;:::o;1923:186::-;1982:6;2035:2;2023:9;2014:7;2010:23;2006:32;2003:52;;;2051:1;2048;2041:12;2003:52;2074:29;2093:9;2074:29;:::i;:::-;2064:39;1923:186;-1:-1:-1;;;1923:186:38:o;2345:260::-;2413:6;2421;2474:2;2462:9;2453:7;2449:23;2445:32;2442:52;;;2490:1;2487;2480:12;2442:52;2513:29;2532:9;2513:29;:::i;:::-;2503:39;;2561:38;2595:2;2584:9;2580:18;2561:38;:::i;:::-;2551:48;;2345:260;;;;;:::o;2610:437::-;2689:1;2685:12;;;;2732;;;2753:61;;2807:4;2799:6;2795:17;2785:27;;2753:61;2860:2;2852:6;2849:14;2829:18;2826:38;2823:218;;-1:-1:-1;;;2894:1:38;2887:88;2998:4;2995:1;2988:15;3026:4;3023:1;3016:15;2823:218;;2610:437;;;:::o;3052:184::-;-1:-1:-1;;;3101:1:38;3094:88;3201:4;3198:1;3191:15;3225:4;3222:1;3215:15;3241:125;3306:9;;;3327:10;;;3324:36;;;3340:18;;:::i;8093:128::-;8160:9;;;8181:11;;;8178:37;;;8195:18;;:::i",
  "source": "//SPDX-License-Identifier: Unlicense\npragma solidity ^0.8.0;\n\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\n\n//pool token \ncontract LPT is ERC20, Ownable {\n    constructor(address _lpAddress) ERC20(\"Liquidity Pool Token\", \"LPT\") {\n        transferOwnership(_lpAddress);\n    }\n\n    function mint(address account, uint256 amount) external onlyOwner {\n        _mint(account, amount);\n    }\n\n    function burn(address account, uint256 amount) external onlyOwner {\n        _burn(account, amount);\n    }\n}",
  "sourcePath": "/Users/hyenne/workspace/BEB-05-JMT/contract/contracts/LPT.sol",
  "ast": {
    "absolutePath": "project:/contracts/LPT.sol",
    "exportedSymbols": {
      "Context": [
        4290
      ],
      "ERC20": [
        2473
      ],
      "IERC20": [
        2551
      ],
      "IERC20Metadata": [
        2576
      ],
      "LPT": [
        6227
      ],
      "Ownable": [
        112
      ]
    },
    "id": 6228,
    "license": "Unlicense",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6176,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "37:23:28"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "id": 6177,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 6228,
        "sourceUnit": 2474,
        "src": "62:55:28",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 6178,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 6228,
        "sourceUnit": 113,
        "src": "118:52:28",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 6179,
              "name": "ERC20",
              "nameLocations": [
                "202:5:28"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2473,
              "src": "202:5:28"
            },
            "id": 6180,
            "nodeType": "InheritanceSpecifier",
            "src": "202:5:28"
          },
          {
            "baseName": {
              "id": 6181,
              "name": "Ownable",
              "nameLocations": [
                "209:7:28"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 112,
              "src": "209:7:28"
            },
            "id": 6182,
            "nodeType": "InheritanceSpecifier",
            "src": "209:7:28"
          }
        ],
        "canonicalName": "LPT",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 6227,
        "linearizedBaseContracts": [
          6227,
          112,
          2473,
          2576,
          2551,
          4290
        ],
        "name": "LPT",
        "nameLocation": "195:3:28",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 6195,
              "nodeType": "Block",
              "src": "292:46:28",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 6192,
                        "name": "_lpAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6184,
                        "src": "320:10:28",
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
                      "id": 6191,
                      "name": "transferOwnership",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 91,
                      "src": "302:17:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 6193,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "302:29:28",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6194,
                  "nodeType": "ExpressionStatement",
                  "src": "302:29:28"
                }
              ]
            },
            "id": 6196,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "hexValue": "4c697175696469747920506f6f6c20546f6b656e",
                    "id": 6187,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "261:22:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_23c3a70458b86ce4eb1c7c78d4c5129b3766ab1bb855d9e7939cc2ffada3d015",
                      "typeString": "literal_string \"Liquidity Pool Token\""
                    },
                    "value": "Liquidity Pool Token"
                  },
                  {
                    "hexValue": "4c5054",
                    "id": 6188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "285:5:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_32e82afd8218e1d9053bf5b198b85ca1af3dff4739f28e3618abcbfacb818cfa",
                      "typeString": "literal_string \"LPT\""
                    },
                    "value": "LPT"
                  }
                ],
                "id": 6189,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 6186,
                  "name": "ERC20",
                  "nameLocations": [
                    "255:5:28"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 2473,
                  "src": "255:5:28"
                },
                "nodeType": "ModifierInvocation",
                "src": "255:36:28"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6185,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6184,
                  "mutability": "mutable",
                  "name": "_lpAddress",
                  "nameLocation": "243:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 6196,
                  "src": "235:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6183,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "235:7:28",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "234:20:28"
            },
            "returnParameters": {
              "id": 6190,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "292:0:28"
            },
            "scope": 6227,
            "src": "223:115:28",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6210,
              "nodeType": "Block",
              "src": "410:39:28",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 6206,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6198,
                        "src": "426:7:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 6207,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6200,
                        "src": "435:6:28",
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
                      "id": 6205,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2290,
                      "src": "420:5:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 6208,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "420:22:28",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6209,
                  "nodeType": "ExpressionStatement",
                  "src": "420:22:28"
                }
              ]
            },
            "functionSelector": "40c10f19",
            "id": 6211,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 6203,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 6202,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "400:9:28"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "400:9:28"
                },
                "nodeType": "ModifierInvocation",
                "src": "400:9:28"
              }
            ],
            "name": "mint",
            "nameLocation": "353:4:28",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6201,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6198,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "366:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 6211,
                  "src": "358:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6197,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "358:7:28",
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
                  "id": 6200,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "383:6:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 6211,
                  "src": "375:14:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6199,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "375:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "357:33:28"
            },
            "returnParameters": {
              "id": 6204,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "410:0:28"
            },
            "scope": 6227,
            "src": "344:105:28",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 6225,
              "nodeType": "Block",
              "src": "521:39:28",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 6221,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6213,
                        "src": "537:7:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 6222,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6215,
                        "src": "546:6:28",
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
                      "id": 6220,
                      "name": "_burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2362,
                      "src": "531:5:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 6223,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "531:22:28",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6224,
                  "nodeType": "ExpressionStatement",
                  "src": "531:22:28"
                }
              ]
            },
            "functionSelector": "9dc29fac",
            "id": 6226,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 6218,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 6217,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "511:9:28"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "511:9:28"
                },
                "nodeType": "ModifierInvocation",
                "src": "511:9:28"
              }
            ],
            "name": "burn",
            "nameLocation": "464:4:28",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6216,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6213,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "477:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 6226,
                  "src": "469:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6212,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "469:7:28",
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
                  "id": 6215,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "494:6:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 6226,
                  "src": "486:14:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6214,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "486:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "468:33:28"
            },
            "returnParameters": {
              "id": 6219,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "521:0:28"
            },
            "scope": 6227,
            "src": "455:105:28",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 6228,
        "src": "186:376:28",
        "usedErrors": []
      }
    ],
    "src": "37:525:28"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.17+commit.8df45f5f.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.4.9",
  "updatedAt": "2022-09-27T15:21:47.090Z",
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
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
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
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
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
module.exports = LPT;