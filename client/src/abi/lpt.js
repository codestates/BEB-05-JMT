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
  "metadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_lpAddress\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/LPT.sol\":\"LPT\"},\"evmVersion\":\"berlin\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x24b04b8aacaaf1a4a0719117b29c9c3647b1f479c5ac2a60f5ff1bb6d839c238\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://43e46da9d9f49741ecd876a269e71bc7494058d7a8e9478429998adb5bc3eaa0\",\"dweb:/ipfs/QmUtp4cqzf22C5rJ76AabKADquGWcjsc33yjYXxXC4sDvy\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"project:/contracts/LPT.sol\":{\"keccak256\":\"0xed736abaceb3ae48c617e3f658e9b025d5b61ef8df551970899895432b0ec7b6\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://ad6919c26ab33a0f95936b6de5c1267e1a4ce2d41ef609c72be2ea63e39cf275\",\"dweb:/ipfs/QmVMZpeSSxWUxc9SME2pgQ3xwazzvdjRYGxF7sfMWGspwn\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b50604051620010923803806200109283398101604081905262000034916200020c565b6040518060400160405280601481526020017f4c697175696469747920506f6f6c20546f6b656e0000000000000000000000008152506040518060400160405280600381526020016213141560ea1b8152508160039081620000979190620002e3565b506004620000a68282620002e3565b505050620000c3620000bd620000d560201b60201c565b620000d9565b620000ce816200012b565b50620003af565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b62000135620001ae565b6001600160a01b038116620001a05760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b620001ab81620000d9565b50565b6005546001600160a01b031633146200020a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000197565b565b6000602082840312156200021f57600080fd5b81516001600160a01b03811681146200023757600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200026957607f821691505b6020821081036200028a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002de57600081815260208120601f850160051c81016020861015620002b95750805b601f850160051c820191505b81811015620002da57828155600101620002c5565b5050505b505050565b81516001600160401b03811115620002ff57620002ff6200023e565b620003178162000310845462000254565b8462000290565b602080601f8311600181146200034f5760008415620003365750858301515b600019600386901b1c1916600185901b178555620002da565b600085815260208120601f198616915b8281101562000380578886015182559484019460019091019084016200035f565b50858210156200039f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610cd380620003bf6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063715018a611610097578063a457c2d711610066578063a457c2d714610209578063a9059cbb1461021c578063dd62ed3e1461022f578063f2fde38b1461024257600080fd5b8063715018a6146101cb5780638da5cb5b146101d357806395d89b41146101ee5780639dc29fac146101f657600080fd5b8063313ce567116100d3578063313ce5671461016b578063395093511461017a57806340c10f191461018d57806370a08231146101a257600080fd5b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014657806323b872dd14610158575b600080fd5b61010d610255565b60405161011a9190610b02565b60405180910390f35b610136610131366004610b6c565b6102e7565b604051901515815260200161011a565b6002545b60405190815260200161011a565b610136610166366004610b96565b610301565b6040516012815260200161011a565b610136610188366004610b6c565b610325565b6101a061019b366004610b6c565b610347565b005b61014a6101b0366004610bd2565b6001600160a01b031660009081526020819052604090205490565b6101a061035d565b6005546040516001600160a01b03909116815260200161011a565b61010d610371565b6101a0610204366004610b6c565b610380565b610136610217366004610b6c565b610392565b61013661022a366004610b6c565b610412565b61014a61023d366004610bf4565b610420565b6101a0610250366004610bd2565b61044b565b60606003805461026490610c27565b80601f016020809104026020016040519081016040528092919081815260200182805461029090610c27565b80156102dd5780601f106102b2576101008083540402835291602001916102dd565b820191906000526020600020905b8154815290600101906020018083116102c057829003601f168201915b5050505050905090565b6000336102f58185856104c4565b60019150505b92915050565b60003361030f8582856105e9565b61031a858585610663565b506001949350505050565b6000336102f58185856103388383610420565b6103429190610c77565b6104c4565b61034f610831565b610359828261088b565b5050565b610365610831565b61036f600061096a565b565b60606004805461026490610c27565b610388610831565b61035982826109bc565b600033816103a08286610420565b9050838110156104055760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61031a82868684036104c4565b6000336102f5818585610663565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610453610831565b6001600160a01b0381166104b85760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103fc565b6104c18161096a565b50565b6001600160a01b0383166105265760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103fc565b6001600160a01b0382166105875760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103fc565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b60006105f58484610420565b9050600019811461065d57818110156106505760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103fc565b61065d84848484036104c4565b50505050565b6001600160a01b0383166106c75760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103fc565b6001600160a01b0382166107295760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103fc565b6001600160a01b038316600090815260208190526040902054818110156107a15760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103fc565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107d8908490610c77565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161082491815260200190565b60405180910390a361065d565b6005546001600160a01b0316331461036f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103fc565b6001600160a01b0382166108e15760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103fc565b80600260008282546108f39190610c77565b90915550506001600160a01b03821660009081526020819052604081208054839290610920908490610c77565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216610a1c5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103fc565b6001600160a01b03821660009081526020819052604090205481811015610a905760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103fc565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610abf908490610c8a565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016105dc565b600060208083528351808285015260005b81811015610b2f57858101830151858201604001528201610b13565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610b6757600080fd5b919050565b60008060408385031215610b7f57600080fd5b610b8883610b50565b946020939093013593505050565b600080600060608486031215610bab57600080fd5b610bb484610b50565b9250610bc260208501610b50565b9150604084013590509250925092565b600060208284031215610be457600080fd5b610bed82610b50565b9392505050565b60008060408385031215610c0757600080fd5b610c1083610b50565b9150610c1e60208401610b50565b90509250929050565b600181811c90821680610c3b57607f821691505b602082108103610c5b57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156102fb576102fb610c61565b818103818111156102fb576102fb610c6156fea264697066735822122013254b9c9f40a42ca4432e29535302f34c860ee045537ca406b8b0c21947e41564736f6c63430008110033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101005760003560e01c8063715018a611610097578063a457c2d711610066578063a457c2d714610209578063a9059cbb1461021c578063dd62ed3e1461022f578063f2fde38b1461024257600080fd5b8063715018a6146101cb5780638da5cb5b146101d357806395d89b41146101ee5780639dc29fac146101f657600080fd5b8063313ce567116100d3578063313ce5671461016b578063395093511461017a57806340c10f191461018d57806370a08231146101a257600080fd5b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014657806323b872dd14610158575b600080fd5b61010d610255565b60405161011a9190610b02565b60405180910390f35b610136610131366004610b6c565b6102e7565b604051901515815260200161011a565b6002545b60405190815260200161011a565b610136610166366004610b96565b610301565b6040516012815260200161011a565b610136610188366004610b6c565b610325565b6101a061019b366004610b6c565b610347565b005b61014a6101b0366004610bd2565b6001600160a01b031660009081526020819052604090205490565b6101a061035d565b6005546040516001600160a01b03909116815260200161011a565b61010d610371565b6101a0610204366004610b6c565b610380565b610136610217366004610b6c565b610392565b61013661022a366004610b6c565b610412565b61014a61023d366004610bf4565b610420565b6101a0610250366004610bd2565b61044b565b60606003805461026490610c27565b80601f016020809104026020016040519081016040528092919081815260200182805461029090610c27565b80156102dd5780601f106102b2576101008083540402835291602001916102dd565b820191906000526020600020905b8154815290600101906020018083116102c057829003601f168201915b5050505050905090565b6000336102f58185856104c4565b60019150505b92915050565b60003361030f8582856105e9565b61031a858585610663565b506001949350505050565b6000336102f58185856103388383610420565b6103429190610c77565b6104c4565b61034f610831565b610359828261088b565b5050565b610365610831565b61036f600061096a565b565b60606004805461026490610c27565b610388610831565b61035982826109bc565b600033816103a08286610420565b9050838110156104055760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61031a82868684036104c4565b6000336102f5818585610663565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610453610831565b6001600160a01b0381166104b85760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103fc565b6104c18161096a565b50565b6001600160a01b0383166105265760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103fc565b6001600160a01b0382166105875760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103fc565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b60006105f58484610420565b9050600019811461065d57818110156106505760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103fc565b61065d84848484036104c4565b50505050565b6001600160a01b0383166106c75760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103fc565b6001600160a01b0382166107295760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103fc565b6001600160a01b038316600090815260208190526040902054818110156107a15760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103fc565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107d8908490610c77565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161082491815260200190565b60405180910390a361065d565b6005546001600160a01b0316331461036f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103fc565b6001600160a01b0382166108e15760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103fc565b80600260008282546108f39190610c77565b90915550506001600160a01b03821660009081526020819052604081208054839290610920908490610c77565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216610a1c5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103fc565b6001600160a01b03821660009081526020819052604090205481811015610a905760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103fc565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610abf908490610c8a565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016105dc565b600060208083528351808285015260005b81811015610b2f57858101830151858201604001528201610b13565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610b6757600080fd5b919050565b60008060408385031215610b7f57600080fd5b610b8883610b50565b946020939093013593505050565b600080600060608486031215610bab57600080fd5b610bb484610b50565b9250610bc260208501610b50565b9150604084013590509250925092565b600060208284031215610be457600080fd5b610bed82610b50565b9392505050565b60008060408385031215610c0757600080fd5b610c1083610b50565b9150610c1e60208401610b50565b90509250929050565b600181811c90821680610c3b57607f821691505b602082108103610c5b57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156102fb576102fb610c61565b818103818111156102fb576102fb610c6156fea264697066735822122013254b9c9f40a42ca4432e29535302f34c860ee045537ca406b8b0c21947e41564736f6c63430008110033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:3795:37",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:37",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "95:209:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "141:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "150:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "153:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "143:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "143:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "143:12:37"
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
                            "src": "116:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "125:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "112:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "112:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "137:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "108:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "108:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "105:52:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "166:29:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "185:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "179:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "179:16:37"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "170:5:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "258:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "267:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "270:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "260:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "260:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "260:12:37"
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
                            "src": "217:5:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "228:5:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "243:3:37",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "248:1:37",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "239:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "239:11:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "252:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "235:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "235:19:37"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "224:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "224:31:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "214:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "214:42:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "207:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "207:50:37"
                  },
                  "nodeType": "YulIf",
                  "src": "204:70:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "283:15:37",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "293:5:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "283:6:37"
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
                "src": "61:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "72:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "84:6:37",
                "type": ""
              }
            ],
            "src": "14:290:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "341:95:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "358:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "365:3:37",
                            "type": "",
                            "value": "224"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "370:10:37",
                            "type": "",
                            "value": "0x4e487b71"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "361:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "361:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "351:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "351:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "351:31:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "398:1:37",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "401:4:37",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "391:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "391:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "391:15:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "422:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "425:4:37",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "415:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "415:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "415:15:37"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "309:127:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "496:325:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "506:22:37",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "520:1:37",
                        "type": "",
                        "value": "1"
                      },
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "523:4:37"
                      }
                    ],
                    "functionName": {
                      "name": "shr",
                      "nodeType": "YulIdentifier",
                      "src": "516:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "516:12:37"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "506:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "537:38:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "567:4:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "573:1:37",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "563:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "563:12:37"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "541:18:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "614:31:37",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "616:27:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "630:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "638:4:37",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "626:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "626:17:37"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "616:6:37"
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
                        "src": "594:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "587:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "587:26:37"
                  },
                  "nodeType": "YulIf",
                  "src": "584:61:37"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "704:111:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "725:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "732:3:37",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "737:10:37",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "728:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "728:20:37"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "718:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "718:31:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "718:31:37"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "769:1:37",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "772:4:37",
                              "type": "",
                              "value": "0x22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "762:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "762:15:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "762:15:37"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "797:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "800:4:37",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "790:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "790:15:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "790:15:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "660:18:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "683:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "691:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "680:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "680:14:37"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "657:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "657:38:37"
                  },
                  "nodeType": "YulIf",
                  "src": "654:161:37"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "476:4:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "485:6:37",
                "type": ""
              }
            ],
            "src": "441:380:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "882:65:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "899:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "name": "ptr",
                        "nodeType": "YulIdentifier",
                        "src": "902:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "892:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "892:14:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "892:14:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "915:26:37",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "933:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "936:4:37",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "keccak256",
                      "nodeType": "YulIdentifier",
                      "src": "923:9:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "923:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "915:4:37"
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
                "src": "865:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "873:4:37",
                "type": ""
              }
            ],
            "src": "826:121:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1033:464:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1066:425:37",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1080:11:37",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1090:1:37",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "1084:2:37",
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
                              "src": "1111:2:37"
                            },
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "1115:5:37"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1104:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1104:17:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1104:17:37"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1134:31:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1156:2:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1160:4:37",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nodeType": "YulIdentifier",
                            "src": "1146:9:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1146:19:37"
                        },
                        "variables": [
                          {
                            "name": "data",
                            "nodeType": "YulTypedName",
                            "src": "1138:4:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1178:57:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "1201:4:37"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1211:1:37",
                                  "type": "",
                                  "value": "5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "startIndex",
                                      "nodeType": "YulIdentifier",
                                      "src": "1218:10:37"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1230:2:37",
                                      "type": "",
                                      "value": "31"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1214:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1214:19:37"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nodeType": "YulIdentifier",
                                "src": "1207:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1207:27:37"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1197:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1197:38:37"
                        },
                        "variables": [
                          {
                            "name": "deleteStart",
                            "nodeType": "YulTypedName",
                            "src": "1182:11:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1272:23:37",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "1274:19:37",
                              "value": {
                                "name": "data",
                                "nodeType": "YulIdentifier",
                                "src": "1289:4:37"
                              },
                              "variableNames": [
                                {
                                  "name": "deleteStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1274:11:37"
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
                              "src": "1254:10:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1266:4:37",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "1251:2:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1251:20:37"
                        },
                        "nodeType": "YulIf",
                        "src": "1248:47:37"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1308:41:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "1322:4:37"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1332:1:37",
                                  "type": "",
                                  "value": "5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "len",
                                      "nodeType": "YulIdentifier",
                                      "src": "1339:3:37"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1344:2:37",
                                      "type": "",
                                      "value": "31"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1335:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1335:12:37"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nodeType": "YulIdentifier",
                                "src": "1328:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1328:20:37"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1318:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1318:31:37"
                        },
                        "variables": [
                          {
                            "name": "_2",
                            "nodeType": "YulTypedName",
                            "src": "1312:2:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1362:24:37",
                        "value": {
                          "name": "deleteStart",
                          "nodeType": "YulIdentifier",
                          "src": "1375:11:37"
                        },
                        "variables": [
                          {
                            "name": "start",
                            "nodeType": "YulTypedName",
                            "src": "1366:5:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1460:21:37",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "start",
                                    "nodeType": "YulIdentifier",
                                    "src": "1469:5:37"
                                  },
                                  {
                                    "name": "_1",
                                    "nodeType": "YulIdentifier",
                                    "src": "1476:2:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "1462:6:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1462:17:37"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1462:17:37"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "1410:5:37"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "1417:2:37"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "1407:2:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1407:13:37"
                        },
                        "nodeType": "YulForLoop",
                        "post": {
                          "nodeType": "YulBlock",
                          "src": "1421:26:37",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "1423:22:37",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "start",
                                    "nodeType": "YulIdentifier",
                                    "src": "1436:5:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1443:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "1432:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1432:13:37"
                              },
                              "variableNames": [
                                {
                                  "name": "start",
                                  "nodeType": "YulIdentifier",
                                  "src": "1423:5:37"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nodeType": "YulBlock",
                          "src": "1403:3:37",
                          "statements": []
                        },
                        "src": "1399:82:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "len",
                        "nodeType": "YulIdentifier",
                        "src": "1049:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1054:2:37",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1046:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1046:11:37"
                  },
                  "nodeType": "YulIf",
                  "src": "1043:448:37"
                }
              ]
            },
            "name": "clean_up_bytearray_end_slots_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "1005:5:37",
                "type": ""
              },
              {
                "name": "len",
                "nodeType": "YulTypedName",
                "src": "1012:3:37",
                "type": ""
              },
              {
                "name": "startIndex",
                "nodeType": "YulTypedName",
                "src": "1017:10:37",
                "type": ""
              }
            ],
            "src": "952:545:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1587:81:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1597:65:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "data",
                            "nodeType": "YulIdentifier",
                            "src": "1612:4:37"
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
                                        "src": "1630:1:37",
                                        "type": "",
                                        "value": "3"
                                      },
                                      {
                                        "name": "len",
                                        "nodeType": "YulIdentifier",
                                        "src": "1633:3:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "1626:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1626:11:37"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "1643:1:37",
                                        "type": "",
                                        "value": "0"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nodeType": "YulIdentifier",
                                      "src": "1639:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1639:6:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "1622:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1622:24:37"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "1618:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1618:29:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "1608:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1608:40:37"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1654:1:37",
                            "type": "",
                            "value": "1"
                          },
                          {
                            "name": "len",
                            "nodeType": "YulIdentifier",
                            "src": "1657:3:37"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "1650:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1650:11:37"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "1605:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1605:57:37"
                  },
                  "variableNames": [
                    {
                      "name": "used",
                      "nodeType": "YulIdentifier",
                      "src": "1597:4:37"
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
                "src": "1564:4:37",
                "type": ""
              },
              {
                "name": "len",
                "nodeType": "YulTypedName",
                "src": "1570:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "used",
                "nodeType": "YulTypedName",
                "src": "1578:4:37",
                "type": ""
              }
            ],
            "src": "1502:166:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1769:1256:37",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1779:24:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "1799:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1793:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1793:10:37"
                  },
                  "variables": [
                    {
                      "name": "newLen",
                      "nodeType": "YulTypedName",
                      "src": "1783:6:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1846:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "1848:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1848:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1848:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "1818:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1834:2:37",
                                "type": "",
                                "value": "64"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1838:1:37",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "shl",
                              "nodeType": "YulIdentifier",
                              "src": "1830:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1830:10:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1842:1:37",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1826:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1826:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1815:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1815:30:37"
                  },
                  "nodeType": "YulIf",
                  "src": "1812:56:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "slot",
                        "nodeType": "YulIdentifier",
                        "src": "1921:4:37"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "slot",
                                "nodeType": "YulIdentifier",
                                "src": "1959:4:37"
                              }
                            ],
                            "functionName": {
                              "name": "sload",
                              "nodeType": "YulIdentifier",
                              "src": "1953:5:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1953:11:37"
                          }
                        ],
                        "functionName": {
                          "name": "extract_byte_array_length",
                          "nodeType": "YulIdentifier",
                          "src": "1927:25:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1927:38:37"
                      },
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "1967:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "clean_up_bytearray_end_slots_string_storage",
                      "nodeType": "YulIdentifier",
                      "src": "1877:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1877:97:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1877:97:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1983:18:37",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "2000:1:37",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "srcOffset",
                      "nodeType": "YulTypedName",
                      "src": "1987:9:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2010:23:37",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "2029:4:37",
                    "type": "",
                    "value": "0x20"
                  },
                  "variables": [
                    {
                      "name": "srcOffset_1",
                      "nodeType": "YulTypedName",
                      "src": "2014:11:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2042:24:37",
                  "value": {
                    "name": "srcOffset_1",
                    "nodeType": "YulIdentifier",
                    "src": "2055:11:37"
                  },
                  "variableNames": [
                    {
                      "name": "srcOffset",
                      "nodeType": "YulIdentifier",
                      "src": "2042:9:37"
                    }
                  ]
                },
                {
                  "cases": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "2112:656:37",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "2126:35:37",
                            "value": {
                              "arguments": [
                                {
                                  "name": "newLen",
                                  "nodeType": "YulIdentifier",
                                  "src": "2145:6:37"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2157:2:37",
                                      "type": "",
                                      "value": "31"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nodeType": "YulIdentifier",
                                    "src": "2153:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2153:7:37"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "2141:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2141:20:37"
                            },
                            "variables": [
                              {
                                "name": "loopEnd",
                                "nodeType": "YulTypedName",
                                "src": "2130:7:37",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "2174:49:37",
                            "value": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "2218:4:37"
                                }
                              ],
                              "functionName": {
                                "name": "array_dataslot_string_storage",
                                "nodeType": "YulIdentifier",
                                "src": "2188:29:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2188:35:37"
                            },
                            "variables": [
                              {
                                "name": "dstPtr",
                                "nodeType": "YulTypedName",
                                "src": "2178:6:37",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "2236:10:37",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2245:1:37",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "i",
                                "nodeType": "YulTypedName",
                                "src": "2240:1:37",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "2323:172:37",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "2348:6:37"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "src",
                                                "nodeType": "YulIdentifier",
                                                "src": "2366:3:37"
                                              },
                                              {
                                                "name": "srcOffset",
                                                "nodeType": "YulIdentifier",
                                                "src": "2371:9:37"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "add",
                                              "nodeType": "YulIdentifier",
                                              "src": "2362:3:37"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2362:19:37"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mload",
                                          "nodeType": "YulIdentifier",
                                          "src": "2356:5:37"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "2356:26:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "2341:6:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2341:42:37"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "2341:42:37"
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "2400:24:37",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "2414:6:37"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "2422:1:37",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "2410:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2410:14:37"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "dstPtr",
                                      "nodeType": "YulIdentifier",
                                      "src": "2400:6:37"
                                    }
                                  ]
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "2441:40:37",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "srcOffset",
                                        "nodeType": "YulIdentifier",
                                        "src": "2458:9:37"
                                      },
                                      {
                                        "name": "srcOffset_1",
                                        "nodeType": "YulIdentifier",
                                        "src": "2469:11:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "2454:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2454:27:37"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "srcOffset",
                                      "nodeType": "YulIdentifier",
                                      "src": "2441:9:37"
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
                                  "src": "2270:1:37"
                                },
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "2273:7:37"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "2267:2:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2267:14:37"
                            },
                            "nodeType": "YulForLoop",
                            "post": {
                              "nodeType": "YulBlock",
                              "src": "2282:28:37",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "2284:24:37",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "2293:1:37"
                                      },
                                      {
                                        "name": "srcOffset_1",
                                        "nodeType": "YulIdentifier",
                                        "src": "2296:11:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "2289:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2289:19:37"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "2284:1:37"
                                    }
                                  ]
                                }
                              ]
                            },
                            "pre": {
                              "nodeType": "YulBlock",
                              "src": "2263:3:37",
                              "statements": []
                            },
                            "src": "2259:236:37"
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "2543:166:37",
                              "statements": [
                                {
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "2561:43:37",
                                  "value": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "2588:3:37"
                                          },
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "2593:9:37"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "2584:3:37"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "2584:19:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "2578:5:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2578:26:37"
                                  },
                                  "variables": [
                                    {
                                      "name": "lastValue",
                                      "nodeType": "YulTypedName",
                                      "src": "2565:9:37",
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
                                        "src": "2628:6:37"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "name": "lastValue",
                                            "nodeType": "YulIdentifier",
                                            "src": "2640:9:37"
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
                                                            "src": "2667:1:37",
                                                            "type": "",
                                                            "value": "3"
                                                          },
                                                          {
                                                            "name": "newLen",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2670:6:37"
                                                          }
                                                        ],
                                                        "functionName": {
                                                          "name": "shl",
                                                          "nodeType": "YulIdentifier",
                                                          "src": "2663:3:37"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "2663:14:37"
                                                      },
                                                      {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "2679:3:37",
                                                        "type": "",
                                                        "value": "248"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "and",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "2659:3:37"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2659:24:37"
                                                  },
                                                  {
                                                    "arguments": [
                                                      {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "2689:1:37",
                                                        "type": "",
                                                        "value": "0"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "not",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "2685:3:37"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2685:6:37"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "shr",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "2655:3:37"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "2655:37:37"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "not",
                                              "nodeType": "YulIdentifier",
                                              "src": "2651:3:37"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2651:42:37"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "and",
                                          "nodeType": "YulIdentifier",
                                          "src": "2636:3:37"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "2636:58:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "2621:6:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2621:74:37"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "2621:74:37"
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "2514:7:37"
                                },
                                {
                                  "name": "newLen",
                                  "nodeType": "YulIdentifier",
                                  "src": "2523:6:37"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "2511:2:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2511:19:37"
                            },
                            "nodeType": "YulIf",
                            "src": "2508:201:37"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "2729:4:37"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "2743:1:37",
                                          "type": "",
                                          "value": "1"
                                        },
                                        {
                                          "name": "newLen",
                                          "nodeType": "YulIdentifier",
                                          "src": "2746:6:37"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shl",
                                        "nodeType": "YulIdentifier",
                                        "src": "2739:3:37"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2739:14:37"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2755:1:37",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2735:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2735:22:37"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nodeType": "YulIdentifier",
                                "src": "2722:6:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2722:36:37"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "2722:36:37"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "2105:663:37",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2110:1:37",
                        "type": "",
                        "value": "1"
                      }
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "2785:234:37",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "2799:14:37",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2812:1:37",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "2803:5:37",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "2848:67:37",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "2866:35:37",
                                  "value": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "2885:3:37"
                                          },
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "2890:9:37"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "2881:3:37"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "2881:19:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "2875:5:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2875:26:37"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "2866:5:37"
                                    }
                                  ]
                                }
                              ]
                            },
                            "condition": {
                              "name": "newLen",
                              "nodeType": "YulIdentifier",
                              "src": "2829:6:37"
                            },
                            "nodeType": "YulIf",
                            "src": "2826:89:37"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "2935:4:37"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "2994:5:37"
                                    },
                                    {
                                      "name": "newLen",
                                      "nodeType": "YulIdentifier",
                                      "src": "3001:6:37"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "extract_used_part_and_set_length_of_short_byte_array",
                                    "nodeType": "YulIdentifier",
                                    "src": "2941:52:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2941:67:37"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nodeType": "YulIdentifier",
                                "src": "2928:6:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2928:81:37"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "2928:81:37"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "2777:242:37",
                      "value": "default"
                    }
                  ],
                  "expression": {
                    "arguments": [
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "2085:6:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2093:2:37",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "2082:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2082:14:37"
                  },
                  "nodeType": "YulSwitch",
                  "src": "2075:944:37"
                }
              ]
            },
            "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "1754:4:37",
                "type": ""
              },
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "1760:3:37",
                "type": ""
              }
            ],
            "src": "1673:1352:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3204:228:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3221:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3232:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3214:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3214:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3214:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3255:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3266:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3251:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3251:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3271:2:37",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3244:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3244:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3244:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3294:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3305:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3290:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3290:18:37"
                      },
                      {
                        "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "3310:34:37",
                        "type": "",
                        "value": "Ownable: new owner is the zero a"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3283:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3283:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3283:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3365:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3376:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3361:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3361:18:37"
                      },
                      {
                        "hexValue": "646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "3381:8:37",
                        "type": "",
                        "value": "ddress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3354:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3354:36:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3354:36:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3399:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3411:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3422:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3407:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3407:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3399:4:37"
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
                "src": "3181:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3195:4:37",
                "type": ""
              }
            ],
            "src": "3030:402:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3611:182:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3628:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3639:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3621:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3621:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3621:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3662:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3673:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3658:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3658:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3678:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3651:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3651:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3651:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3701:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3712:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3697:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3697:18:37"
                      },
                      {
                        "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "3717:34:37",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3690:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3690:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3690:62:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3761:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3773:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3784:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3769:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3769:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3761:4:37"
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
                "src": "3588:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3602:4:37",
                "type": ""
              }
            ],
            "src": "3437:356:37"
          }
        ]
      },
      "contents": "{\n    { }\n    function abi_decode_tuple_t_address_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n        value0 := value\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function array_dataslot_string_storage(ptr) -> data\n    {\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n    }\n    function clean_up_bytearray_end_slots_string_storage(array, len, startIndex)\n    {\n        if gt(len, 31)\n        {\n            let _1 := 0\n            mstore(_1, array)\n            let data := keccak256(_1, 0x20)\n            let deleteStart := add(data, shr(5, add(startIndex, 31)))\n            if lt(startIndex, 0x20) { deleteStart := data }\n            let _2 := add(data, shr(5, add(len, 31)))\n            let start := deleteStart\n            for { } lt(start, _2) { start := add(start, 1) }\n            { sstore(start, _1) }\n        }\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used\n    {\n        used := or(and(data, not(shr(shl(3, len), not(0)))), shl(1, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src)\n    {\n        let newLen := mload(src)\n        if gt(newLen, sub(shl(64, 1), 1)) { panic_error_0x41() }\n        clean_up_bytearray_end_slots_string_storage(slot, extract_byte_array_length(sload(slot)), newLen)\n        let srcOffset := 0\n        let srcOffset_1 := 0x20\n        srcOffset := srcOffset_1\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(31))\n            let dstPtr := array_dataslot_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, srcOffset_1) }\n            {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, srcOffset_1)\n            }\n            if lt(loopEnd, newLen)\n            {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, and(lastValue, not(shr(and(shl(3, newLen), 248), not(0)))))\n            }\n            sstore(slot, add(shl(1, newLen), 1))\n        }\n        default {\n            let value := 0\n            if newLen\n            {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"Ownable: new owner is the zero a\")\n        mstore(add(headStart, 96), \"ddress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"Ownable: caller is not the owner\")\n        tail := add(headStart, 96)\n    }\n}",
      "id": 37,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:8063:37",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:37",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "135:427:37",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "145:12:37",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "155:2:37",
                    "type": "",
                    "value": "32"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "149:2:37",
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
                        "src": "173:9:37"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "184:2:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "166:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "166:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "166:21:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "196:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "216:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "210:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "210:13:37"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "200:6:37",
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
                            "src": "243:9:37"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "254:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "239:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "239:18:37"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "259:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "232:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "232:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "232:34:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "275:10:37",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "284:1:37",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "279:1:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "344:90:37",
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
                                      "src": "373:9:37"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "384:1:37"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "369:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "369:17:37"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "388:2:37",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "365:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "365:26:37"
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
                                          "src": "407:6:37"
                                        },
                                        {
                                          "name": "i",
                                          "nodeType": "YulIdentifier",
                                          "src": "415:1:37"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "403:3:37"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "403:14:37"
                                    },
                                    {
                                      "name": "_1",
                                      "nodeType": "YulIdentifier",
                                      "src": "419:2:37"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "399:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "399:23:37"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "393:5:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "393:30:37"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "358:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "358:66:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "358:66:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "305:1:37"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "308:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "302:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "302:13:37"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "316:19:37",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "318:15:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "327:1:37"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "330:2:37"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "323:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "323:10:37"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "318:1:37"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "298:3:37",
                    "statements": []
                  },
                  "src": "294:140:37"
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
                                "src": "458:9:37"
                              },
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "469:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "454:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "454:22:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "478:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "450:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "450:31:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "483:1:37",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "443:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "443:42:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "443:42:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "494:62:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "510:9:37"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "length",
                                    "nodeType": "YulIdentifier",
                                    "src": "529:6:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "537:2:37",
                                    "type": "",
                                    "value": "31"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "525:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "525:15:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "546:2:37",
                                    "type": "",
                                    "value": "31"
                                  }
                                ],
                                "functionName": {
                                  "name": "not",
                                  "nodeType": "YulIdentifier",
                                  "src": "542:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "542:7:37"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "521:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "521:29:37"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "506:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "506:45:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "553:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "502:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "502:54:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "494:4:37"
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
                "src": "104:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "115:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "126:4:37",
                "type": ""
              }
            ],
            "src": "14:548:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "616:124:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "626:29:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "648:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "635:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "635:20:37"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "626:5:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "718:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "727:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "730:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "720:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "720:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "720:12:37"
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
                            "src": "677:5:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "688:5:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "703:3:37",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "708:1:37",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "699:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "699:11:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "712:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "695:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "695:19:37"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "684:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "684:31:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "674:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "674:42:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "667:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "667:50:37"
                  },
                  "nodeType": "YulIf",
                  "src": "664:70:37"
                }
              ]
            },
            "name": "abi_decode_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "595:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "606:5:37",
                "type": ""
              }
            ],
            "src": "567:173:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "832:167:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "878:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "887:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "890:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "880:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "880:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "880:12:37"
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
                            "src": "853:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "862:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "849:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "849:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "874:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "845:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "845:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "842:52:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "903:39:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "932:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "913:18:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "913:29:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "903:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "951:42:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "978:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "989:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "974:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "974:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "961:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "961:32:37"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "951:6:37"
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
                "src": "790:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "801:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "813:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "821:6:37",
                "type": ""
              }
            ],
            "src": "745:254:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1099:92:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1109:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1121:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1132:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1117:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1117:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1109:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1151:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "1176:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "1169:6:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1169:14:37"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "1162:6:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1162:22:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1144:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1144:41:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1144:41:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1068:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1079:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1090:4:37",
                "type": ""
              }
            ],
            "src": "1004:187:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1297:76:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1307:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1319:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1330:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1315:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1315:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1307:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1349:9:37"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "1360:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1342:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1342:25:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1342:25:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1266:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1277:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1288:4:37",
                "type": ""
              }
            ],
            "src": "1196:177:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1482:224:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1528:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1537:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1540:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1530:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1530:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1530:12:37"
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
                            "src": "1503:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1512:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1499:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1499:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1524:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1495:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1495:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "1492:52:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1553:39:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1582:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "1563:18:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1563:29:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1553:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1601:48:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1634:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1645:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1630:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1630:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "1611:18:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1611:38:37"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "1601:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1658:42:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1685:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1696:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1681:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1681:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1668:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1668:32:37"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "1658:6:37"
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
                "src": "1432:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1443:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1455:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1463:6:37",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "1471:6:37",
                "type": ""
              }
            ],
            "src": "1378:328:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1808:87:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1818:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1830:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1841:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1826:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1826:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1818:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1860:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1875:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1883:4:37",
                            "type": "",
                            "value": "0xff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "1871:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1871:17:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1853:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1853:36:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1853:36:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1777:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1788:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1799:4:37",
                "type": ""
              }
            ],
            "src": "1711:184:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1970:116:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2016:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2025:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2028:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2018:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2018:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2018:12:37"
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
                            "src": "1991:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2000:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1987:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1987:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2012:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1983:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1983:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "1980:52:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2041:39:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2070:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "2051:18:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2051:29:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "2041:6:37"
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
                "src": "1936:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1947:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1959:6:37",
                "type": ""
              }
            ],
            "src": "1900:186:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2192:102:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2202:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2214:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2225:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2210:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2210:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2202:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2244:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2259:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2275:3:37",
                                    "type": "",
                                    "value": "160"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2280:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "2271:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2271:11:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2284:1:37",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "2267:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2267:19:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "2255:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2255:32:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2237:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2237:51:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2237:51:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2161:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2172:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2183:4:37",
                "type": ""
              }
            ],
            "src": "2091:203:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2386:173:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2432:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2441:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2444:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2434:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2434:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2434:12:37"
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
                            "src": "2407:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2416:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2403:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2403:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2428:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2399:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2399:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "2396:52:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2457:39:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2486:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "2467:18:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2467:29:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "2457:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2505:48:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2538:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2549:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2534:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2534:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "2515:18:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2515:38:37"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "2505:6:37"
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
                "src": "2344:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2355:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2367:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2375:6:37",
                "type": ""
              }
            ],
            "src": "2299:260:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2619:325:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2629:22:37",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2643:1:37",
                        "type": "",
                        "value": "1"
                      },
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "2646:4:37"
                      }
                    ],
                    "functionName": {
                      "name": "shr",
                      "nodeType": "YulIdentifier",
                      "src": "2639:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2639:12:37"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "2629:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2660:38:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "2690:4:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2696:1:37",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "2686:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2686:12:37"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "2664:18:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2737:31:37",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2739:27:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "2753:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2761:4:37",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "2749:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2749:17:37"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2739:6:37"
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
                        "src": "2717:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "2710:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2710:26:37"
                  },
                  "nodeType": "YulIf",
                  "src": "2707:61:37"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2827:111:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2848:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2855:3:37",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2860:10:37",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "2851:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2851:20:37"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2841:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2841:31:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2841:31:37"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2892:1:37",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2895:4:37",
                              "type": "",
                              "value": "0x22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2885:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2885:15:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2885:15:37"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2920:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2923:4:37",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2913:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2913:15:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2913:15:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "2783:18:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2806:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2814:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "2803:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2803:14:37"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "2780:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2780:38:37"
                  },
                  "nodeType": "YulIf",
                  "src": "2777:161:37"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "2599:4:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "2608:6:37",
                "type": ""
              }
            ],
            "src": "2564:380:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2981:95:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2998:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3005:3:37",
                            "type": "",
                            "value": "224"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3010:10:37",
                            "type": "",
                            "value": "0x4e487b71"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "3001:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3001:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2991:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2991:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2991:31:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3038:1:37",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3041:4:37",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3031:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3031:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3031:15:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3062:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3065:4:37",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "3055:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3055:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3055:15:37"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "2949:127:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3129:77:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3139:16:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "3150:1:37"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "3153:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3146:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3146:9:37"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "3139:3:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3178:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "3180:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3180:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3180:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "3170:1:37"
                      },
                      {
                        "name": "sum",
                        "nodeType": "YulIdentifier",
                        "src": "3173:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "3167:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3167:10:37"
                  },
                  "nodeType": "YulIf",
                  "src": "3164:36:37"
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "3112:1:37",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "3115:1:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "3121:3:37",
                "type": ""
              }
            ],
            "src": "3081:125:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3385:227:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3402:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3413:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3395:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3395:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3395:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3436:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3447:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3432:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3432:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3452:2:37",
                        "type": "",
                        "value": "37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3425:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3425:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3425:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3475:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3486:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3471:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3471:18:37"
                      },
                      {
                        "hexValue": "45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "3491:34:37",
                        "type": "",
                        "value": "ERC20: decreased allowance below"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3464:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3464:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3464:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3546:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3557:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3542:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3542:18:37"
                      },
                      {
                        "hexValue": "207a65726f",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "3562:7:37",
                        "type": "",
                        "value": " zero"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3535:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3535:35:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3535:35:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3579:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3591:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3602:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3587:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3587:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3579:4:37"
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
                "src": "3362:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3376:4:37",
                "type": ""
              }
            ],
            "src": "3211:401:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3791:228:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3808:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3819:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3801:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3801:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3801:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3842:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3853:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3838:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3838:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3858:2:37",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3831:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3831:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3831:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3881:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3892:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3877:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3877:18:37"
                      },
                      {
                        "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "3897:34:37",
                        "type": "",
                        "value": "Ownable: new owner is the zero a"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3870:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3870:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3870:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3952:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3963:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3948:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3948:18:37"
                      },
                      {
                        "hexValue": "646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "3968:8:37",
                        "type": "",
                        "value": "ddress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3941:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3941:36:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3941:36:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3986:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3998:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4009:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3994:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3994:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3986:4:37"
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
                "src": "3768:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3782:4:37",
                "type": ""
              }
            ],
            "src": "3617:402:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4198:226:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4215:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4226:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4208:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4208:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4208:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4249:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4260:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4245:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4245:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4265:2:37",
                        "type": "",
                        "value": "36"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4238:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4238:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4238:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4288:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4299:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4284:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4284:18:37"
                      },
                      {
                        "hexValue": "45524332303a20617070726f76652066726f6d20746865207a65726f20616464",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4304:34:37",
                        "type": "",
                        "value": "ERC20: approve from the zero add"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4277:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4277:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4277:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4359:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4370:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4355:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4355:18:37"
                      },
                      {
                        "hexValue": "72657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4375:6:37",
                        "type": "",
                        "value": "ress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4348:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4348:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4348:34:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4391:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4403:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4414:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4399:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4399:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4391:4:37"
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
                "src": "4175:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4189:4:37",
                "type": ""
              }
            ],
            "src": "4024:400:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4603:224:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4620:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4631:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4613:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4613:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4613:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4654:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4665:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4650:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4650:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4670:2:37",
                        "type": "",
                        "value": "34"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4643:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4643:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4643:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4693:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4704:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4689:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4689:18:37"
                      },
                      {
                        "hexValue": "45524332303a20617070726f766520746f20746865207a65726f206164647265",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4709:34:37",
                        "type": "",
                        "value": "ERC20: approve to the zero addre"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4682:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4682:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4682:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4764:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4775:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4760:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4760:18:37"
                      },
                      {
                        "hexValue": "7373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4780:4:37",
                        "type": "",
                        "value": "ss"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4753:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4753:32:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4753:32:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4794:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4806:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4817:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4802:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4802:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4794:4:37"
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
                "src": "4580:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4594:4:37",
                "type": ""
              }
            ],
            "src": "4429:398:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5006:179:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5023:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5034:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5016:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5016:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5016:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5057:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5068:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5053:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5053:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5073:2:37",
                        "type": "",
                        "value": "29"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5046:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5046:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5046:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5096:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5107:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5092:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5092:18:37"
                      },
                      {
                        "hexValue": "45524332303a20696e73756666696369656e7420616c6c6f77616e6365",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "5112:31:37",
                        "type": "",
                        "value": "ERC20: insufficient allowance"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5085:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5085:59:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5085:59:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5153:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5165:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5176:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5161:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5161:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5153:4:37"
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
                "src": "4983:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4997:4:37",
                "type": ""
              }
            ],
            "src": "4832:353:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5364:227:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5381:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5392:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5374:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5374:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5374:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5415:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5426:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5411:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5411:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5431:2:37",
                        "type": "",
                        "value": "37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5404:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5404:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5404:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5454:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5465:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5450:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5450:18:37"
                      },
                      {
                        "hexValue": "45524332303a207472616e736665722066726f6d20746865207a65726f206164",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "5470:34:37",
                        "type": "",
                        "value": "ERC20: transfer from the zero ad"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5443:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5443:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5443:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5525:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5536:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5521:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5521:18:37"
                      },
                      {
                        "hexValue": "6472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "5541:7:37",
                        "type": "",
                        "value": "dress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5514:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5514:35:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5514:35:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5558:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5570:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5581:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5566:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5566:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5558:4:37"
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
                "src": "5341:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5355:4:37",
                "type": ""
              }
            ],
            "src": "5190:401:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5770:225:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5787:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5798:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5780:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5780:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5780:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5821:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5832:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5817:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5817:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5837:2:37",
                        "type": "",
                        "value": "35"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5810:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5810:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5810:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5860:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5871:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5856:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5856:18:37"
                      },
                      {
                        "hexValue": "45524332303a207472616e7366657220746f20746865207a65726f2061646472",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "5876:34:37",
                        "type": "",
                        "value": "ERC20: transfer to the zero addr"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5849:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5849:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5849:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5931:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5942:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5927:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5927:18:37"
                      },
                      {
                        "hexValue": "657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "5947:5:37",
                        "type": "",
                        "value": "ess"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5920:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5920:33:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5920:33:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5962:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5974:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5985:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5970:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5970:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5962:4:37"
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
                "src": "5747:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5761:4:37",
                "type": ""
              }
            ],
            "src": "5596:399:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6174:228:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6191:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6202:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6184:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6184:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6184:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6225:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6236:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6221:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6221:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6241:2:37",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6214:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6214:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6214:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6264:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6275:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6260:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6260:18:37"
                      },
                      {
                        "hexValue": "45524332303a207472616e7366657220616d6f756e7420657863656564732062",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "6280:34:37",
                        "type": "",
                        "value": "ERC20: transfer amount exceeds b"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6253:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6253:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6253:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6335:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6346:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6331:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6331:18:37"
                      },
                      {
                        "hexValue": "616c616e6365",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "6351:8:37",
                        "type": "",
                        "value": "alance"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6324:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6324:36:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6324:36:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6369:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6381:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6392:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6377:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6377:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6369:4:37"
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
                "src": "6151:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6165:4:37",
                "type": ""
              }
            ],
            "src": "6000:402:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6581:182:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6598:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6609:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6591:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6591:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6591:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6632:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6643:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6628:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6628:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6648:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6621:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6621:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6621:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6671:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6682:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6667:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6667:18:37"
                      },
                      {
                        "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "6687:34:37",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6660:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6660:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6660:62:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6731:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6743:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6754:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6739:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6739:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6731:4:37"
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
                "src": "6558:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6572:4:37",
                "type": ""
              }
            ],
            "src": "6407:356:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6942:181:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6959:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6970:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6952:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6952:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6952:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6993:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7004:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6989:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6989:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7009:2:37",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6982:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6982:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6982:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7032:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7043:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7028:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7028:18:37"
                      },
                      {
                        "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7048:33:37",
                        "type": "",
                        "value": "ERC20: mint to the zero address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7021:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7021:61:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7021:61:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7091:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7103:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7114:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7099:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7099:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7091:4:37"
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
                "src": "6919:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6933:4:37",
                "type": ""
              }
            ],
            "src": "6768:355:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7302:223:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7319:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7330:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7312:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7312:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7312:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7353:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7364:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7349:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7349:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7369:2:37",
                        "type": "",
                        "value": "33"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7342:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7342:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7342:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7392:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7403:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7388:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7388:18:37"
                      },
                      {
                        "hexValue": "45524332303a206275726e2066726f6d20746865207a65726f20616464726573",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7408:34:37",
                        "type": "",
                        "value": "ERC20: burn from the zero addres"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7381:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7381:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7381:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7463:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7474:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7459:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7459:18:37"
                      },
                      {
                        "hexValue": "73",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7479:3:37",
                        "type": "",
                        "value": "s"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7452:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7452:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7452:31:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7492:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7504:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7515:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7500:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7500:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7492:4:37"
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
                "src": "7279:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7293:4:37",
                "type": ""
              }
            ],
            "src": "7128:397:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7704:224:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7721:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7732:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7714:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7714:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7714:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7755:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7766:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7751:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7751:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7771:2:37",
                        "type": "",
                        "value": "34"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7744:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7744:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7744:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7794:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7805:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7790:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7790:18:37"
                      },
                      {
                        "hexValue": "45524332303a206275726e20616d6f756e7420657863656564732062616c616e",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7810:34:37",
                        "type": "",
                        "value": "ERC20: burn amount exceeds balan"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7783:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7783:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7783:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7865:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7876:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7861:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7861:18:37"
                      },
                      {
                        "hexValue": "6365",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7881:4:37",
                        "type": "",
                        "value": "ce"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7854:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7854:32:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7854:32:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7895:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7907:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7918:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7903:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7903:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7895:4:37"
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
                "src": "7681:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7695:4:37",
                "type": ""
              }
            ],
            "src": "7530:398:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7982:79:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7992:17:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "8004:1:37"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "8007:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "8000:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8000:9:37"
                  },
                  "variableNames": [
                    {
                      "name": "diff",
                      "nodeType": "YulIdentifier",
                      "src": "7992:4:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8033:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "8035:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8035:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8035:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "diff",
                        "nodeType": "YulIdentifier",
                        "src": "8024:4:37"
                      },
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "8030:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "8021:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8021:11:37"
                  },
                  "nodeType": "YulIf",
                  "src": "8018:37:37"
                }
              ]
            },
            "name": "checked_sub_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "7964:1:37",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "7967:1:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "diff",
                "nodeType": "YulTypedName",
                "src": "7973:4:37",
                "type": ""
              }
            ],
            "src": "7933:128:37"
          }
        ]
      },
      "contents": "{\n    { }\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        mstore(headStart, _1)\n        let length := mload(value0)\n        mstore(add(headStart, _1), length)\n        let i := 0\n        for { } lt(i, length) { i := add(i, _1) }\n        {\n            mstore(add(add(headStart, i), 64), mload(add(add(value0, i), _1)))\n        }\n        mstore(add(add(headStart, length), 64), 0)\n        tail := add(add(headStart, and(add(length, 31), not(31))), 64)\n    }\n    function abi_decode_address(offset) -> value\n    {\n        value := calldataload(offset)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := calldataload(add(headStart, 32))\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n        value2 := calldataload(add(headStart, 64))\n    }\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xff))\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        sum := add(x, y)\n        if gt(x, sum) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 37)\n        mstore(add(headStart, 64), \"ERC20: decreased allowance below\")\n        mstore(add(headStart, 96), \" zero\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"Ownable: new owner is the zero a\")\n        mstore(add(headStart, 96), \"ddress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 36)\n        mstore(add(headStart, 64), \"ERC20: approve from the zero add\")\n        mstore(add(headStart, 96), \"ress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 34)\n        mstore(add(headStart, 64), \"ERC20: approve to the zero addre\")\n        mstore(add(headStart, 96), \"ss\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 29)\n        mstore(add(headStart, 64), \"ERC20: insufficient allowance\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 37)\n        mstore(add(headStart, 64), \"ERC20: transfer from the zero ad\")\n        mstore(add(headStart, 96), \"dress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 35)\n        mstore(add(headStart, 64), \"ERC20: transfer to the zero addr\")\n        mstore(add(headStart, 96), \"ess\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"ERC20: transfer amount exceeds b\")\n        mstore(add(headStart, 96), \"alance\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"Ownable: caller is not the owner\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 31)\n        mstore(add(headStart, 64), \"ERC20: mint to the zero address\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 33)\n        mstore(add(headStart, 64), \"ERC20: burn from the zero addres\")\n        mstore(add(headStart, 96), \"s\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 34)\n        mstore(add(headStart, 64), \"ERC20: burn amount exceeds balan\")\n        mstore(add(headStart, 96), \"ce\")\n        tail := add(headStart, 128)\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        diff := sub(x, y)\n        if gt(diff, x) { panic_error_0x11() }\n    }\n}",
      "id": 37,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "186:376:28:-:0;;;223:115;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1978:113:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1978:113:9;;;2052:5;2044;:13;;;;;;:::i;:::-;-1:-1:-1;2067:7:9;:17;2077:7;2067;:17;:::i;:::-;;1978:113;;936:32:0;955:12;:10;;;:12;;:::i;:::-;936:18;:32::i;:::-;302:29:28::1;320:10:::0;302:17:::1;:29::i;:::-;223:115:::0;186:376;;640:96:19;719:10;;640:96::o;2433:187:0:-;2525:6;;;-1:-1:-1;;;;;2541:17:0;;;-1:-1:-1;;;;;;2541:17:0;;;;;;;2573:40;;2525:6;;;2541:17;2525:6;;2573:40;;2506:16;;2573:40;2496:124;2433:187;:::o;2081:198::-;1094:13;:11;:13::i;:::-;-1:-1:-1;;;;;2169:22:0;::::1;2161:73;;;::::0;-1:-1:-1;;;2161:73:0;;3232:2:37;2161:73:0::1;::::0;::::1;3214:21:37::0;3271:2;3251:18;;;3244:30;3310:34;3290:18;;;3283:62;-1:-1:-1;;;3361:18:37;;;3354:36;3407:19;;2161:73:0::1;;;;;;;;;2244:28;2263:8:::0;2244:18:::1;:28::i;:::-;2081:198:::0;:::o;1359:130::-;1273:6;;-1:-1:-1;;;;;1273:6:0;719:10:19;1422:23:0;1414:68;;;;-1:-1:-1;;;1414:68:0;;3639:2:37;1414:68:0;;;3621:21:37;;;3658:18;;;3651:30;3717:34;3697:18;;;3690:62;3769:18;;1414:68:0;3437:356:37;1414:68:0;1359:130::o;14:290:37:-;84:6;137:2;125:9;116:7;112:23;108:32;105:52;;;153:1;150;143:12;105:52;179:16;;-1:-1:-1;;;;;224:31:37;;214:42;;204:70;;270:1;267;260:12;204:70;293:5;14:290;-1:-1:-1;;;14:290:37:o;309:127::-;370:10;365:3;361:20;358:1;351:31;401:4;398:1;391:15;425:4;422:1;415:15;441:380;520:1;516:12;;;;563;;;584:61;;638:4;630:6;626:17;616:27;;584:61;691:2;683:6;680:14;660:18;657:38;654:161;;737:10;732:3;728:20;725:1;718:31;772:4;769:1;762:15;800:4;797:1;790:15;654:161;;441:380;;;:::o;952:545::-;1054:2;1049:3;1046:11;1043:448;;;1090:1;1115:5;1111:2;1104:17;1160:4;1156:2;1146:19;1230:2;1218:10;1214:19;1211:1;1207:27;1201:4;1197:38;1266:4;1254:10;1251:20;1248:47;;;-1:-1:-1;1289:4:37;1248:47;1344:2;1339:3;1335:12;1332:1;1328:20;1322:4;1318:31;1308:41;;1399:82;1417:2;1410:5;1407:13;1399:82;;;1462:17;;;1443:1;1432:13;1399:82;;;1403:3;;;1043:448;952:545;;;:::o;1673:1352::-;1793:10;;-1:-1:-1;;;;;1815:30:37;;1812:56;;;1848:18;;:::i;:::-;1877:97;1967:6;1927:38;1959:4;1953:11;1927:38;:::i;:::-;1921:4;1877:97;:::i;:::-;2029:4;;2093:2;2082:14;;2110:1;2105:663;;;;2812:1;2829:6;2826:89;;;-1:-1:-1;2881:19:37;;;2875:26;2826:89;-1:-1:-1;;1630:1:37;1626:11;;;1622:24;1618:29;1608:40;1654:1;1650:11;;;1605:57;2928:81;;2075:944;;2105:663;899:1;892:14;;;936:4;923:18;;-1:-1:-1;;2141:20:37;;;2259:236;2273:7;2270:1;2267:14;2259:236;;;2362:19;;;2356:26;2341:42;;2454:27;;;;2422:1;2410:14;;;;2289:19;;2259:236;;;2263:3;2523:6;2514:7;2511:19;2508:201;;;2584:19;;;2578:26;-1:-1:-1;;2667:1:37;2663:14;;;2679:3;2659:24;2655:37;2651:42;2636:58;2621:74;;2508:201;-1:-1:-1;;;;;2755:1:37;2739:14;;;2735:22;2722:36;;-1:-1:-1;1673:1352:37:o;3437:356::-;186:376:28;;;;;;",
  "deployedSourceMap": "186:376:28:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:98:9;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4433:197;;;;;;:::i;:::-;;:::i;:::-;;;1169:14:37;;1162:22;1144:41;;1132:2;1117:18;4433:197:9;1004:187:37;3244:106:9;3331:12;;3244:106;;;1342:25:37;;;1330:2;1315:18;3244:106:9;1196:177:37;5192:286:9;;;;;;:::i;:::-;;:::i;3093:91::-;;;3175:2;1853:36:37;;1841:2;1826:18;3093:91:9;1711:184:37;5873:234:9;;;;;;:::i;:::-;;:::i;344:105:28:-;;;;;;:::i;:::-;;:::i;:::-;;3408:125:9;;;;;;:::i;:::-;-1:-1:-1;;;;;3508:18:9;3482:7;3508:18;;;;;;;;;;;;3408:125;1831:101:0;;;:::i;1201:85::-;1273:6;;1201:85;;-1:-1:-1;;;;;1273:6:0;;;2237:51:37;;2225:2;2210:18;1201:85:0;2091:203:37;2367:102:9;;;:::i;455:105:28:-;;;;;;:::i;:::-;;:::i;6594:427:9:-;;;;;;:::i;:::-;;:::i;3729:189::-;;;;;;:::i;:::-;;:::i;3976:149::-;;;;;;:::i;:::-;;:::i;2081:198:0:-;;;;;;:::i;:::-;;:::i;2156:98:9:-;2210:13;2242:5;2235:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:98;:::o;4433:197::-;4516:4;719:10:19;4570:32:9;719:10:19;4586:7:9;4595:6;4570:8;:32::i;:::-;4619:4;4612:11;;;4433:197;;;;;:::o;5192:286::-;5319:4;719:10:19;5375:38:9;5391:4;719:10:19;5406:6:9;5375:15;:38::i;:::-;5423:27;5433:4;5439:2;5443:6;5423:9;:27::i;:::-;-1:-1:-1;5467:4:9;;5192:286;-1:-1:-1;;;;5192:286:9:o;5873:234::-;5961:4;719:10:19;6015:64:9;719:10:19;6031:7:9;6068:10;6040:25;719:10:19;6031:7:9;6040:9;:25::i;:::-;:38;;;;:::i;:::-;6015:8;:64::i;344:105:28:-;1094:13:0;:11;:13::i;:::-;420:22:28::1;426:7;435:6;420:5;:22::i;:::-;344:105:::0;;:::o;1831:101:0:-;1094:13;:11;:13::i;:::-;1895:30:::1;1922:1;1895:18;:30::i;:::-;1831:101::o:0;2367:102:9:-;2423:13;2455:7;2448:14;;;;;:::i;455:105:28:-;1094:13:0;:11;:13::i;:::-;531:22:28::1;537:7;546:6;531:5;:22::i;6594:427:9:-:0;6687:4;719:10:19;6687:4:9;6768:25;719:10:19;6785:7:9;6768:9;:25::i;:::-;6741:52;;6831:15;6811:16;:35;;6803:85;;;;-1:-1:-1;;;6803:85:9;;3413:2:37;6803:85:9;;;3395:21:37;3452:2;3432:18;;;3425:30;3491:34;3471:18;;;3464:62;-1:-1:-1;;;3542:18:37;;;3535:35;3587:19;;6803:85:9;;;;;;;;;6922:60;6931:5;6938:7;6966:15;6947:16;:34;6922:8;:60::i;3729:189::-;3808:4;719:10:19;3862:28:9;719:10:19;3879:2:9;3883:6;3862:9;:28::i;3976:149::-;-1:-1:-1;;;;;4091:18:9;;;4065:7;4091:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;3976:149::o;2081:198:0:-;1094:13;:11;:13::i;:::-;-1:-1:-1;;;;;2169:22:0;::::1;2161:73;;;::::0;-1:-1:-1;;;2161:73:0;;3819:2:37;2161:73:0::1;::::0;::::1;3801:21:37::0;3858:2;3838:18;;;3831:30;3897:34;3877:18;;;3870:62;-1:-1:-1;;;3948:18:37;;;3941:36;3994:19;;2161:73:0::1;3617:402:37::0;2161:73:0::1;2244:28;2263:8;2244:18;:28::i;:::-;2081:198:::0;:::o;10110:370:9:-;-1:-1:-1;;;;;10241:19:9;;10233:68;;;;-1:-1:-1;;;10233:68:9;;4226:2:37;10233:68:9;;;4208:21:37;4265:2;4245:18;;;4238:30;4304:34;4284:18;;;4277:62;-1:-1:-1;;;4355:18:37;;;4348:34;4399:19;;10233:68:9;4024:400:37;10233:68:9;-1:-1:-1;;;;;10319:21:9;;10311:68;;;;-1:-1:-1;;;10311:68:9;;4631:2:37;10311:68:9;;;4613:21:37;4670:2;4650:18;;;4643:30;4709:34;4689:18;;;4682:62;-1:-1:-1;;;4760:18:37;;;4753:32;4802:19;;10311:68:9;4429:398:37;10311:68:9;-1:-1:-1;;;;;10390:18:9;;;;;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;:36;;;10441:32;;1342:25:37;;;10441:32:9;;1315:18:37;10441:32:9;;;;;;;;10110:370;;;:::o;10761:441::-;10891:24;10918:25;10928:5;10935:7;10918:9;:25::i;:::-;10891:52;;-1:-1:-1;;10957:16:9;:37;10953:243;;11038:6;11018:16;:26;;11010:68;;;;-1:-1:-1;;;11010:68:9;;5034:2:37;11010:68:9;;;5016:21:37;5073:2;5053:18;;;5046:30;5112:31;5092:18;;;5085:59;5161:18;;11010:68:9;4832:353:37;11010:68:9;11120:51;11129:5;11136:7;11164:6;11145:16;:25;11120:8;:51::i;:::-;10881:321;10761:441;;;:::o;7475:651::-;-1:-1:-1;;;;;7601:18:9;;7593:68;;;;-1:-1:-1;;;7593:68:9;;5392:2:37;7593:68:9;;;5374:21:37;5431:2;5411:18;;;5404:30;5470:34;5450:18;;;5443:62;-1:-1:-1;;;5521:18:37;;;5514:35;5566:19;;7593:68:9;5190:401:37;7593:68:9;-1:-1:-1;;;;;7679:16:9;;7671:64;;;;-1:-1:-1;;;7671:64:9;;5798:2:37;7671:64:9;;;5780:21:37;5837:2;5817:18;;;5810:30;5876:34;5856:18;;;5849:62;-1:-1:-1;;;5927:18:37;;;5920:33;5970:19;;7671:64:9;5596:399:37;7671:64:9;-1:-1:-1;;;;;7817:15:9;;7795:19;7817:15;;;;;;;;;;;7850:21;;;;7842:72;;;;-1:-1:-1;;;7842:72:9;;6202:2:37;7842:72:9;;;6184:21:37;6241:2;6221:18;;;6214:30;6280:34;6260:18;;;6253:62;-1:-1:-1;;;6331:18:37;;;6324:36;6377:19;;7842:72:9;6000:402:37;7842:72:9;-1:-1:-1;;;;;7948:15:9;;;:9;:15;;;;;;;;;;;7966:20;;;7948:38;;8006:13;;;;;;;;:23;;7980:6;;7948:9;8006:23;;7980:6;;8006:23;:::i;:::-;;;;;;;;8060:2;-1:-1:-1;;;;;8045:26:9;8054:4;-1:-1:-1;;;;;8045:26:9;;8064:6;8045:26;;;;1342:25:37;;1330:2;1315:18;;1196:177;8045:26:9;;;;;;;;8082:37;9111:576;1359:130:0;1273:6;;-1:-1:-1;;;;;1273:6:0;719:10:19;1422:23:0;1414:68;;;;-1:-1:-1;;;1414:68:0;;6609:2:37;1414:68:0;;;6591:21:37;;;6628:18;;;6621:30;6687:34;6667:18;;;6660:62;6739:18;;1414:68:0;6407:356:37;8402:389:9;-1:-1:-1;;;;;8485:21:9;;8477:65;;;;-1:-1:-1;;;8477:65:9;;6970:2:37;8477:65:9;;;6952:21:37;7009:2;6989:18;;;6982:30;7048:33;7028:18;;;7021:61;7099:18;;8477:65:9;6768:355:37;8477:65:9;8629:6;8613:12;;:22;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;8645:18:9;;:9;:18;;;;;;;;;;:28;;8667:6;;8645:9;:28;;8667:6;;8645:28;:::i;:::-;;;;-1:-1:-1;;8688:37:9;;1342:25:37;;;-1:-1:-1;;;;;8688:37:9;;;8705:1;;8688:37;;1330:2:37;1315:18;8688:37:9;;;;;;;344:105:28;;:::o;2433:187:0:-;2525:6;;;-1:-1:-1;;;;;2541:17:0;;;-1:-1:-1;;;;;;2541:17:0;;;;;;;2573:40;;2525:6;;;2541:17;2525:6;;2573:40;;2506:16;;2573:40;2496:124;2433:187;:::o;9111:576:9:-;-1:-1:-1;;;;;9194:21:9;;9186:67;;;;-1:-1:-1;;;9186:67:9;;7330:2:37;9186:67:9;;;7312:21:37;7369:2;7349:18;;;7342:30;7408:34;7388:18;;;7381:62;-1:-1:-1;;;7459:18:37;;;7452:31;7500:19;;9186:67:9;7128:397:37;9186:67:9;-1:-1:-1;;;;;9349:18:9;;9324:22;9349:18;;;;;;;;;;;9385:24;;;;9377:71;;;;-1:-1:-1;;;9377:71:9;;7732:2:37;9377:71:9;;;7714:21:37;7771:2;7751:18;;;7744:30;7810:34;7790:18;;;7783:62;-1:-1:-1;;;7861:18:37;;;7854:32;7903:19;;9377:71:9;7530:398:37;9377:71:9;-1:-1:-1;;;;;9482:18:9;;:9;:18;;;;;;;;;;9503:23;;;9482:44;;9546:12;:22;;9520:6;;9482:9;9546:22;;9520:6;;9546:22;:::i;:::-;;;;-1:-1:-1;;9584:37:9;;1342:25:37;;;9610:1:9;;-1:-1:-1;;;;;9584:37:9;;;;;1330:2:37;1315:18;9584:37:9;1196:177:37;14:548;126:4;155:2;184;173:9;166:21;216:6;210:13;259:6;254:2;243:9;239:18;232:34;284:1;294:140;308:6;305:1;302:13;294:140;;;403:14;;;399:23;;393:30;369:17;;;388:2;365:26;358:66;323:10;;294:140;;;298:3;483:1;478:2;469:6;458:9;454:22;450:31;443:42;553:2;546;542:7;537:2;529:6;525:15;521:29;510:9;506:45;502:54;494:62;;;;14:548;;;;:::o;567:173::-;635:20;;-1:-1:-1;;;;;684:31:37;;674:42;;664:70;;730:1;727;720:12;664:70;567:173;;;:::o;745:254::-;813:6;821;874:2;862:9;853:7;849:23;845:32;842:52;;;890:1;887;880:12;842:52;913:29;932:9;913:29;:::i;:::-;903:39;989:2;974:18;;;;961:32;;-1:-1:-1;;;745:254:37:o;1378:328::-;1455:6;1463;1471;1524:2;1512:9;1503:7;1499:23;1495:32;1492:52;;;1540:1;1537;1530:12;1492:52;1563:29;1582:9;1563:29;:::i;:::-;1553:39;;1611:38;1645:2;1634:9;1630:18;1611:38;:::i;:::-;1601:48;;1696:2;1685:9;1681:18;1668:32;1658:42;;1378:328;;;;;:::o;1900:186::-;1959:6;2012:2;2000:9;1991:7;1987:23;1983:32;1980:52;;;2028:1;2025;2018:12;1980:52;2051:29;2070:9;2051:29;:::i;:::-;2041:39;1900:186;-1:-1:-1;;;1900:186:37:o;2299:260::-;2367:6;2375;2428:2;2416:9;2407:7;2403:23;2399:32;2396:52;;;2444:1;2441;2434:12;2396:52;2467:29;2486:9;2467:29;:::i;:::-;2457:39;;2515:38;2549:2;2538:9;2534:18;2515:38;:::i;:::-;2505:48;;2299:260;;;;;:::o;2564:380::-;2643:1;2639:12;;;;2686;;;2707:61;;2761:4;2753:6;2749:17;2739:27;;2707:61;2814:2;2806:6;2803:14;2783:18;2780:38;2777:161;;2860:10;2855:3;2851:20;2848:1;2841:31;2895:4;2892:1;2885:15;2923:4;2920:1;2913:15;2777:161;;2564:380;;;:::o;2949:127::-;3010:10;3005:3;3001:20;2998:1;2991:31;3041:4;3038:1;3031:15;3065:4;3062:1;3055:15;3081:125;3146:9;;;3167:10;;;3164:36;;;3180:18;;:::i;7933:128::-;8000:9;;;8021:11;;;8018:37;;;8035:18;;:::i",
  "source": "//SPDX-License-Identifier: Unlicense\npragma solidity ^0.8.0;\n\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\n\n//pool token \ncontract LPT is ERC20, Ownable {\n    constructor(address _lpAddress) ERC20(\"Liquidity Pool Token\", \"LPT\") {\n        transferOwnership(_lpAddress);\n    }\n\n    function mint(address account, uint256 amount) external onlyOwner {\n        _mint(account, amount);\n    }\n\n    function burn(address account, uint256 amount) external onlyOwner {\n        _burn(account, amount);\n    }\n}",
  "sourcePath": "/Users/rokrokss/workspace/hyein/BEB-05-JMT/contract/contracts/LPT.sol",
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
        6195
      ],
      "Ownable": [
        112
      ]
    },
    "id": 6196,
    "license": "Unlicense",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6144,
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
        "id": 6145,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 6196,
        "sourceUnit": 2474,
        "src": "62:55:28",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 6146,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 6196,
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
              "id": 6147,
              "name": "ERC20",
              "nameLocations": [
                "202:5:28"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2473,
              "src": "202:5:28"
            },
            "id": 6148,
            "nodeType": "InheritanceSpecifier",
            "src": "202:5:28"
          },
          {
            "baseName": {
              "id": 6149,
              "name": "Ownable",
              "nameLocations": [
                "209:7:28"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 112,
              "src": "209:7:28"
            },
            "id": 6150,
            "nodeType": "InheritanceSpecifier",
            "src": "209:7:28"
          }
        ],
        "canonicalName": "LPT",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 6195,
        "linearizedBaseContracts": [
          6195,
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
              "id": 6163,
              "nodeType": "Block",
              "src": "292:46:28",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 6160,
                        "name": "_lpAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6152,
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
                      "id": 6159,
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
                    "id": 6161,
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
                  "id": 6162,
                  "nodeType": "ExpressionStatement",
                  "src": "302:29:28"
                }
              ]
            },
            "id": 6164,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "hexValue": "4c697175696469747920506f6f6c20546f6b656e",
                    "id": 6155,
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
                    "id": 6156,
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
                "id": 6157,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 6154,
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
              "id": 6153,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6152,
                  "mutability": "mutable",
                  "name": "_lpAddress",
                  "nameLocation": "243:10:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 6164,
                  "src": "235:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6151,
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
              "id": 6158,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "292:0:28"
            },
            "scope": 6195,
            "src": "223:115:28",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6178,
              "nodeType": "Block",
              "src": "410:39:28",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 6174,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6166,
                        "src": "426:7:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 6175,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6168,
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
                      "id": 6173,
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
                    "id": 6176,
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
                  "id": 6177,
                  "nodeType": "ExpressionStatement",
                  "src": "420:22:28"
                }
              ]
            },
            "functionSelector": "40c10f19",
            "id": 6179,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 6171,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 6170,
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
              "id": 6169,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6166,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "366:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 6179,
                  "src": "358:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6165,
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
                  "id": 6168,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "383:6:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 6179,
                  "src": "375:14:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6167,
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
              "id": 6172,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "410:0:28"
            },
            "scope": 6195,
            "src": "344:105:28",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 6193,
              "nodeType": "Block",
              "src": "521:39:28",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 6189,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6181,
                        "src": "537:7:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 6190,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6183,
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
                      "id": 6188,
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
                    "id": 6191,
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
                  "id": 6192,
                  "nodeType": "ExpressionStatement",
                  "src": "531:22:28"
                }
              ]
            },
            "functionSelector": "9dc29fac",
            "id": 6194,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 6186,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 6185,
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
              "id": 6184,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6181,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "477:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 6194,
                  "src": "469:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6180,
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
                  "id": 6183,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "494:6:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 6194,
                  "src": "486:14:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6182,
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
              "id": 6187,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "521:0:28"
            },
            "scope": 6195,
            "src": "455:105:28",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 6196,
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
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0xc3d641eCd0E1b847C5681E8aDd5476FA85a2f774",
      "transactionHash": "0x3fc25f66f2751c04c681153f918f6af6d1c6449743c2d0de1d74414411a9010e"
    }
  },
  "schemaVersion": "3.4.10",
  "updatedAt": "2022-09-27T01:24:43.710Z",
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