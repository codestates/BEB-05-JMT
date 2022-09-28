const USER = {
  "contractName": "MapleUser",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_tokenContractAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_nftContractAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_itemContractAddress",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "_treasuryWallet",
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
          "indexed": false,
          "internalType": "uint256",
          "name": "charId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "weaponId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "userId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "UserCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "charId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "weaponId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "userId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "UserDeleated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "charId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "weaponId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "userId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "UserMatching",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "charId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "weaponId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "userId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "UserUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "rewardTransferred",
      "type": "event"
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
          "internalType": "uint256",
          "name": "_charId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_weaponId",
          "type": "uint256"
        }
      ],
      "name": "signUp",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_charId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_userId",
          "type": "uint256"
        }
      ],
      "name": "updateChar",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_weaponId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_userId",
          "type": "uint256"
        }
      ],
      "name": "updateWeapon",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_rank",
          "type": "uint256"
        }
      ],
      "name": "checkReward",
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
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        }
      ],
      "name": "setRankReward",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_rank",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_userId",
          "type": "uint256"
        }
      ],
      "name": "requestReward",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "matchUser",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "userId",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "contractAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MapleUser.Token",
              "name": "charToken",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "contractAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MapleUser.Token",
              "name": "weaponToken",
              "type": "tuple"
            },
            {
              "internalType": "address payable",
              "name": "user",
              "type": "address"
            }
          ],
          "internalType": "struct MapleUser.UserInfo",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_userId",
          "type": "uint256"
        }
      ],
      "name": "fetchUser",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "userId",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "contractAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MapleUser.Token",
              "name": "charToken",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "contractAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MapleUser.Token",
              "name": "weaponToken",
              "type": "tuple"
            },
            {
              "internalType": "address payable",
              "name": "user",
              "type": "address"
            }
          ],
          "internalType": "struct MapleUser.UserInfo",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "fetchUsers",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "userId",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "contractAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MapleUser.Token",
              "name": "charToken",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "contractAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MapleUser.Token",
              "name": "weaponToken",
              "type": "tuple"
            },
            {
              "internalType": "address payable",
              "name": "user",
              "type": "address"
            }
          ],
          "internalType": "struct MapleUser.UserInfo[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC1155Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC1155BatchReceived",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC721Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_tokenContractAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_nftContractAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_itemContractAddress\",\"type\":\"address\"},{\"internalType\":\"address payable\",\"name\":\"_treasuryWallet\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"charId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"weaponId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"userId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"UserCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"charId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"weaponId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"userId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"UserDeleated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"charId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"weaponId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"userId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"UserMatching\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"charId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"weaponId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"userId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"UserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"reward\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"rewardTransferred\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_rank\",\"type\":\"uint256\"}],\"name\":\"checkReward\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_userId\",\"type\":\"uint256\"}],\"name\":\"fetchUser\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"userId\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"contractAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"internalType\":\"struct MapleUser.Token\",\"name\":\"charToken\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"contractAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"internalType\":\"struct MapleUser.Token\",\"name\":\"weaponToken\",\"type\":\"tuple\"},{\"internalType\":\"address payable\",\"name\":\"user\",\"type\":\"address\"}],\"internalType\":\"struct MapleUser.UserInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"fetchUsers\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"userId\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"contractAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"internalType\":\"struct MapleUser.Token\",\"name\":\"charToken\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"contractAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"internalType\":\"struct MapleUser.Token\",\"name\":\"weaponToken\",\"type\":\"tuple\"},{\"internalType\":\"address payable\",\"name\":\"user\",\"type\":\"address\"}],\"internalType\":\"struct MapleUser.UserInfo[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_user\",\"type\":\"address\"}],\"name\":\"matchUser\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"userId\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"contractAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"internalType\":\"struct MapleUser.Token\",\"name\":\"charToken\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"contractAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"internalType\":\"struct MapleUser.Token\",\"name\":\"weaponToken\",\"type\":\"tuple\"},{\"internalType\":\"address payable\",\"name\":\"user\",\"type\":\"address\"}],\"internalType\":\"struct MapleUser.UserInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"onERC1155BatchReceived\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"onERC1155Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"onERC721Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_rank\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_userId\",\"type\":\"uint256\"}],\"name\":\"requestReward\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"reward\",\"type\":\"uint256\"}],\"name\":\"setRankReward\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_charId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_weaponId\",\"type\":\"uint256\"}],\"name\":\"signUp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_charId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_userId\",\"type\":\"uint256\"}],\"name\":\"updateChar\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_weaponId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_userId\",\"type\":\"uint256\"}],\"name\":\"updateWeapon\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/MapleUser.sol\":\"MapleUser\"},\"evmVersion\":\"berlin\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/security/Pausable.sol\":{\"keccak256\":\"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004\",\"dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B\"]},\"@openzeppelin/contracts/security/ReentrancyGuard.sol\":{\"keccak256\":\"0x0e9621f60b2faabe65549f7ed0f24e8853a45c1b7990d47e8160e523683f3935\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://287a2f8d5814dd0f05f22b740f18ca8321acc21c9bd03a6cb2203ea626e2f3f2\",\"dweb:/ipfs/QmZRQv9iuwU817VuqkA2WweiaibKii69x9QxYBBEfbNEud\"]},\"@openzeppelin/contracts/token/ERC1155/ERC1155.sol\":{\"keccak256\":\"0x447a21c87433c0f11252912313a96f3454629ef88cca7a4eefbb283b3ec409f9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://67d35750fb5ced798b82b8ab085eb5f71529b0d4f72152d182b5bebdc770b20d\",\"dweb:/ipfs/QmUqmyzRZxaLvSXig87HFZgiUxv9ivc2VqfAbxEw7rx32d\"]},\"@openzeppelin/contracts/token/ERC1155/IERC1155.sol\":{\"keccak256\":\"0x6392f2cfe3a5ee802227fe7a2dfd47096d881aec89bddd214b35c5b46d3cd941\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bd9c47a375639888e726a99da718890ba16d17d7ad9eacb0ccc892d46d1b3ee0\",\"dweb:/ipfs/Qmb41W5RUjy2sWg49A2rMnxekSeEk6SvGyJL5tyCCSr7un\"]},\"@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol\":{\"keccak256\":\"0xeb373f1fdc7b755c6a750123a9b9e3a8a02c1470042fd6505d875000a80bde0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0e28648f994abf1d6bc345644a361cc0b7efa544f8bc0c8ec26011fed85a91ec\",\"dweb:/ipfs/QmVVE7AiRjKaQYYji7TkjmTeVzGpNmms5eoxqTCfvvpj6D\"]},\"@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol\":{\"keccak256\":\"0xa66d18b9a85458d28fc3304717964502ae36f7f8a2ff35bc83f6f85d74b03574\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e46c80ea068989111d6103e5521223f9ef337e93de76deed8b03f75c6f7b2797\",\"dweb:/ipfs/QmNoSE6knNfFncdDDLTb3fGR6oSQty1srG96Vsx3E9wQdw\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x24b04b8aacaaf1a4a0719117b29c9c3647b1f479c5ac2a60f5ff1bb6d839c238\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://43e46da9d9f49741ecd876a269e71bc7494058d7a8e9478429998adb5bc3eaa0\",\"dweb:/ipfs/QmUtp4cqzf22C5rJ76AabKADquGWcjsc33yjYXxXC4sDvy\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x0b606994df12f0ce35f6d2f6dcdde7e55e6899cdef7e00f180980caa81e3844e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4c827c981a552d1c76c96060e92f56b52bc20c6f9b4dbf911fe99ddbfb41f2ea\",\"dweb:/ipfs/QmW8xvJdzHrr8Ry34C7viBsgG2b8T1mL4BQWJ5CdfD9JLB\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xed6a749c5373af398105ce6ee3ac4763aa450ea7285d268c85d9eeca809cdb1f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://20a97f891d06f0fe91560ea1a142aaa26fdd22bed1b51606b7d48f670deeb50f\",\"dweb:/ipfs/QmTbCtZKChpaX5H2iRiTDMcSz29GSLCpTCDgJpcMR4wg8x\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e75cf83beb757b8855791088546b8337e9d4684e169400c20d44a515353b708\",\"dweb:/ipfs/QmYvPafLfoquiDMEj7CKHtvbgHu7TJNPSVPSCjrtjV8HjV\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a0a107160525724f9e1bbbab031defc2f298296dd9e331f16a6f7130cec32146\",\"dweb:/ipfs/QmemujxSd7gX8A9M8UwmNbz4Ms3U9FG9QfudUgxwvTmPWf\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xd6153ce99bcdcce22b124f755e72553295be6abcd63804cfdffceb188b8bef10\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://35c47bece3c03caaa07fab37dd2bb3413bfbca20db7bd9895024390e0a469487\",\"dweb:/ipfs/QmPGWT2x3QHcKxqe6gRmAkdakhbaRgx3DLzcakHz5M4eXG\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Counters.sol\":{\"keccak256\":\"0xf0018c2440fbe238dd3a8732fa8e17a0f9dce84d31451dc8a32f6d62b349c9f1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://59e1c62884d55b70f3ae5432b44bb3166ad71ae3acd19c57ab6ddc3c87c325ee\",\"dweb:/ipfs/QmezuXg5GK5oeA4F91EZhozBFekhq5TD966bHPH18cCqhu\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xaf159a8b1923ad2a26d516089bceca9bdeaeacd04be50983ea00ba63070f08a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6f2cf1c531122bc7ca96b8c8db6a60deae60441e5223065e792553d4849b5638\",\"dweb:/ipfs/QmPBdJmBBABMDCfyDjCbdxgiqRavgiSL88SYPGibgbPas9\"]},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xd15c3e400531f00203839159b2b8e7209c5158b35618f570c695b7e47f12e9f0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b600b852e0597aa69989cc263111f02097e2827edc1bdc70306303e3af5e9929\",\"dweb:/ipfs/QmU4WfM28A1nDqghuuGeFmN3CnVrk6opWtiF65K4vhFPeC\"]},\"@uniswap/lib/contracts/libraries/Babylonian.sol\":{\"keccak256\":\"0xe20fc48e3575b4a2932e5d2dd53b6742e1ca96f652bd41038cb89d7f5d49a096\",\"urls\":[\"bzz-raw://6ba298d8e592d39960eabc2328b7d4a01ad6cf8b06366adc3ef0133d3b196a9f\",\"dweb:/ipfs/QmQgrNaHssJ8XVsPUCMHpyYRFLbBqNrumaoFgXHWdDiTyy\"]},\"project:/contracts/JMToken.sol\":{\"keccak256\":\"0x6d46ba35a03980a62eb23b06bc1c9b4c381fb5cec22d24e22ef99187254378c3\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://89f07d0c627d6a08242969b011154e7620ff962753b147e64dc3b0870832db30\",\"dweb:/ipfs/Qmcdew5EtewTCyojfBihLYMB1Lge8Si9PSugNDyiofp1HY\"]},\"project:/contracts/LPT.sol\":{\"keccak256\":\"0xed736abaceb3ae48c617e3f658e9b025d5b61ef8df551970899895432b0ec7b6\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://ad6919c26ab33a0f95936b6de5c1267e1a4ce2d41ef609c72be2ea63e39cf275\",\"dweb:/ipfs/QmVMZpeSSxWUxc9SME2pgQ3xwazzvdjRYGxF7sfMWGspwn\"]},\"project:/contracts/LiquidityPool.sol\":{\"keccak256\":\"0x02add59a18b8f9012f2043575b93d04fde563e3b940ccf50b5358e1cbe9e6ebd\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://feb1b5de36d206ec0be059e8e5110936a9a5e13f73b0cb375b3a35e87819ebd0\",\"dweb:/ipfs/QmSX53o3uqjeSaaDofNKswHREGfbf13CXXfnsxye1yHF68\"]},\"project:/contracts/MapleUser.sol\":{\"keccak256\":\"0xc3e4a766177ff146228c107e66914a47df147ee064479757508451f26b989810\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f32185c8eab2862fa7c45bc39a4feb5c422f73bb1bb9fb470a237cc72d373b4c\",\"dweb:/ipfs/QmWEC9dSN5YedzfbgKzeCz6dFephnZpRFvbk4ua5WRmQdn\"]},\"project:/contracts/VJMToken.sol\":{\"keccak256\":\"0xe2f8a326fd1fbe8e2bf0e7365ad261285fde71804fe77694ce986d47c106f061\",\"license\":\"GPL-3.0-only\",\"urls\":[\"bzz-raw://f6ee599ebeff106e2eb9d3a6b0c01915cfc6f76e0916b4215e9c80c5c992e475\",\"dweb:/ipfs/QmXz1MZL3nGq7C8o1JW57rgYr6Z4iDV4Kba279dw4Smt4M\"]}},\"version\":1}",
  "bytecode": "0x6080604052670de0b6b3a76400006002556000600355600060045560006005553480156200002c57600080fd5b506040516200192d3803806200192d8339810160408190526200004f91620001b9565b6200005a33620000aa565b6200006584620000fa565b50600880546001600160a01b039485166001600160a01b0319918216179091556009805493851693821693909317909255600780549190931691161790555062000221565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000620001066200013f565b6001600160a01b0382166200011a57600080fd5b50600680546001600160a01b0383166001600160a01b03199091161790556001919050565b6000546001600160a01b031633146200019e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b6001600160a01b0381168114620001b657600080fd5b50565b60008060008060808587031215620001d057600080fd5b8451620001dd81620001a0565b6020860151909450620001f081620001a0565b60408601519093506200020381620001a0565b60608601519092506200021681620001a0565b939692955090935050565b6116fc80620002316000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063aeeda6bf11610097578063dfbf990011610066578063dfbf990014610258578063e46989911461026b578063f23a6e611461028c578063f2fde38b146102c457600080fd5b8063aeeda6bf146101d8578063bc197c81146101eb578063bfcad43314610223578063da56ef3a1461023857600080fd5b80635c7dec1b116100d35780635c7dec1b1461018f578063715018a6146101a25780638da5cb5b146101aa578063a3469f74146101c557600080fd5b8063150b7a02146100fa57806336b18165146101675780635062bc5a1461017c575b600080fd5b610131610108366004611248565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b61017a6101753660046112b4565b6102d7565b005b61017a61018a3660046112b4565b610428565b61017a61019d3660046112b4565b61073f565b61017a610872565b6000546040516001600160a01b03909116815260200161015e565b61017a6101d33660046112d6565b610886565b61017a6101e63660046112b4565b610912565b6101316101f936600461136f565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b61022b610bda565b60405161015e919061141d565b61024b6102463660046114bf565b610d0e565b60405161015e91906114e3565b61024b6102663660046112d6565b610e8a565b61027e6102793660046112d6565b610f84565b60405190815260200161015e565b61013161029a366004611545565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b61017a6102d23660046114bf565b610fc5565b600954604051627eeac760e11b8152336004820152602481018490526001600160a01b039091169062fdd58e90604401602060405180830381865afa158015610324573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034891906115ae565b6000036103c25760405162461bcd60e51b815260206004820152602660248201527f6f6e6c7920776561706f6e206f776e6572732063616e2075706461746520757360448201527f6572496e666f000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6000818152600a6020908152604091829020600481018590556002015482519081529081018490529081018290523360608201527fcf09b7402a0a51c2c51935cd064f1c8e910da6814d49b3badcaa04c81850948b906080015b60405180910390a15050565b6004821080156104385750600082115b6104aa5760405162461bcd60e51b815260206004820152602260248201527f796f75206e65656420746f2072616e6b20757020666f7220746865207265776160448201527f726400000000000000000000000000000000000000000000000000000000000060648201526084016103b9565b6000818152600a60205260409020600501546001600160a01b031633146105395760405162461bcd60e51b815260206004820152602860248201527f796f7520617265206e6f7420746865207573657220666f72207468652072616e60448201527f6b2072657761726400000000000000000000000000000000000000000000000060648201526084016103b9565b600082600103610552575060038054600090915561057c565b82600203610569575060048054600090915561057c565b8260030361057c57506005805460009091555b6006546007546040517fd83a2bf30000000000000000000000000000000000000000000000000000000081526001600160a01b03918216600482015230602482015260448101849052600092919091169063d83a2bf3906064016020604051808303816000875af11580156105f5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061991906115c7565b9050806106685760405162461bcd60e51b815260206004820152601560248201527f496e637265617365436f6e7472616374204661696c000000000000000000000060448201526064016103b9565b6006546007546040517f23b872dd0000000000000000000000000000000000000000000000000000000081526001600160a01b039182166004820152336024820152604481018590529116906323b872dd906064016020604051808303816000875af11580156106dc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070091906115c7565b50604080518381523360208201527ff77e4bb9025e3700758004f467a01764ed3e2b0245b45b918b6107e1770f32bb910160405180910390a150505050565b6008546040516331a9108f60e11b8152600481018490526001600160a01b0390911690636352211e90602401602060405180830381865afa158015610788573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ac91906115e9565b6001600160a01b0316336001600160a01b0316146108165760405162461bcd60e51b815260206004820152602160248201527f6f6e6c7920636861726163746572206f776e6572732063616e207369676e20756044820152600760fc1b60648201526084016103b9565b6000818152600a602090815260409182902060028101859055600401548251858152918201529081018290523360608201527fcf09b7402a0a51c2c51935cd064f1c8e910da6814d49b3badcaa04c81850948b9060800161041c565b61087a611055565b61088460006110af565b565b600a61089382600561161c565b61089d9190611649565b600360008282546108ae919061165d565b90915550600a90506108c182600361161c565b6108cb9190611649565b600460008282546108dc919061165d565b90915550600a90506108ef82600261161c565b6108f99190611649565b6005600082825461090a919061165d565b909155505050565b6008546040516331a9108f60e11b8152600481018490526001600160a01b0390911690636352211e90602401602060405180830381865afa15801561095b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097f91906115e9565b6001600160a01b0316336001600160a01b0316146109e95760405162461bcd60e51b815260206004820152602160248201527f6f6e6c7920636861726163746572206f776e6572732063616e207369676e20756044820152600760fc1b60648201526084016103b9565b600954604051627eeac760e11b8152336004820152602481018390526001600160a01b039091169062fdd58e90604401602060405180830381865afa158015610a36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5a91906115ae565b600003610aa95760405162461bcd60e51b815260206004820152601e60248201527f6f6e6c7920776561706f6e206f776e6572732063616e207369676e207570000060448201526064016103b9565b610ab7600180546001019055565b6000610ac260015490565b6040805160808082018352838252825180840184526008546001600160a01b03908116825260208083018a905280850192835285518087018752600954831681528082018a905285870190815233606080880182815260008b8152600a86528a9020985189559551805160018a01805491881673ffffffffffffffffffffffffffffffffffffffff199283161790559085015160028a01559251805160038a018054918816918616919091179055840151600489015594516005909701805497909416969091169590951790915584518981529081018890529384018590528301919091529192507fb71cf8dd9f35ff09f0b312ae47365f80792968af9383e6cbc7f9c12054d6cc3d910160405180910390a1505050565b60606000610be760015490565b905060008167ffffffffffffffff811115610c0457610c04611191565b604051908082528060200260200182016040528015610c3d57816020015b610c2a61110c565b815260200190600190039081610c225790505b50905060015b828111610d07576000818152600a602090815260408083205480845292819020815160808101835281548152825180840184526001808401546001600160a01b0390811683526002850154838801528387019290925284518086018652600385015483168152600485015496810196909652938201949094526005820154909316606084015291908590610cd79086611670565b81518110610ce757610ce7611683565b602002602001018190525050508080610cff90611699565b915050610c43565b5092915050565b610d1661110c565b600154600103610d685760405162461bcd60e51b815260206004820152601b60248201527f796f752061726520746865206f6e6c79206f6e6520706c61796572000000000060448201526064016103b9565b6000610d7360015490565b905060008142604051602001610d8b91815260200190565b6040516020818303038152906040528051906020012060001c610dae91906116b2565b90506001600160a01b038416600a6000610dc984600161165d565b81526020810191909152604001600020600501546001600160a01b031614610e79576000600a81610dfb84600161165d565b815260208082019290925260409081016000208151608081018352815481528251808401845260018301546001600160a01b0390811682526002840154828701528286019190915283518085018552600384015482168152600484015495810195909552928101939093526005015416606082015295945050505050565b610e8284610d0e565b949350505050565b610e9261110c565b600154600003610f0a5760405162461bcd60e51b815260206004820152602360248201527f6e6f207573657220696e666f20616464656420746f207468697320636f6e747260448201527f616374000000000000000000000000000000000000000000000000000000000060648201526084016103b9565b506000908152600a60209081526040918290208251608081018452815481528351808501855260018301546001600160a01b03908116825260028401548286015282850191909152845180860186526003840154821681526004840154948101949094529381019290925260050154909116606082015290565b6000806001839003610f995750600354610fbf565b82600203610faa5750600454610fbf565b82600303610fbb5750600554610fbf565b5060005b92915050565b610fcd611055565b6001600160a01b0381166110495760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016103b9565b611052816110af565b50565b6000546001600160a01b031633146108845760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103b9565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b604051806080016040528060008152602001611144604051806040016040528060006001600160a01b03168152602001600081525090565b815260200161116f604051806040016040528060006001600160a01b03168152602001600081525090565b8152600060209091015290565b6001600160a01b038116811461105257600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156111d0576111d0611191565b604052919050565b600082601f8301126111e957600080fd5b813567ffffffffffffffff81111561120357611203611191565b611216601f8201601f19166020016111a7565b81815284602083860101111561122b57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000806080858703121561125e57600080fd5b84356112698161117c565b935060208501356112798161117c565b925060408501359150606085013567ffffffffffffffff81111561129c57600080fd5b6112a8878288016111d8565b91505092959194509250565b600080604083850312156112c757600080fd5b50508035926020909101359150565b6000602082840312156112e857600080fd5b5035919050565b600082601f83011261130057600080fd5b8135602067ffffffffffffffff82111561131c5761131c611191565b8160051b61132b8282016111a7565b928352848101820192828101908785111561134557600080fd5b83870192505b848310156113645782358252918301919083019061134b565b979650505050505050565b600080600080600060a0868803121561138757600080fd5b85356113928161117c565b945060208601356113a28161117c565b9350604086013567ffffffffffffffff808211156113bf57600080fd5b6113cb89838a016112ef565b945060608801359150808211156113e157600080fd5b6113ed89838a016112ef565b9350608088013591508082111561140357600080fd5b50611410888289016111d8565b9150509295509295909350565b6020808252825182820181905260009190848201906040850190845b818110156114b3576114a08385518051825260208082015180516001600160a01b03168285015290810151604084015250604081015180516001600160a01b031660608401526020810151608084015250606001516001600160a01b031660a09190910152565b9284019260c09290920191600101611439565b50909695505050505050565b6000602082840312156114d157600080fd5b81356114dc8161117c565b9392505050565b60c08101610fbf82848051825260208082015180516001600160a01b03168285015290810151604084015250604081015180516001600160a01b031660608401526020810151608084015250606001516001600160a01b031660a09190910152565b600080600080600060a0868803121561155d57600080fd5b85356115688161117c565b945060208601356115788161117c565b93506040860135925060608601359150608086013567ffffffffffffffff8111156115a257600080fd5b611410888289016111d8565b6000602082840312156115c057600080fd5b5051919050565b6000602082840312156115d957600080fd5b815180151581146114dc57600080fd5b6000602082840312156115fb57600080fd5b81516114dc8161117c565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610fbf57610fbf611606565b634e487b7160e01b600052601260045260246000fd5b60008261165857611658611633565b500490565b80820180821115610fbf57610fbf611606565b81810381811115610fbf57610fbf611606565b634e487b7160e01b600052603260045260246000fd5b6000600182016116ab576116ab611606565b5060010190565b6000826116c1576116c1611633565b50069056fea26469706673582212200f40ebbd5312a4b7d27ab1f06d9740f935437471b7e5be6f69d4b719e2f1c35d64736f6c63430008110033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100f55760003560e01c8063aeeda6bf11610097578063dfbf990011610066578063dfbf990014610258578063e46989911461026b578063f23a6e611461028c578063f2fde38b146102c457600080fd5b8063aeeda6bf146101d8578063bc197c81146101eb578063bfcad43314610223578063da56ef3a1461023857600080fd5b80635c7dec1b116100d35780635c7dec1b1461018f578063715018a6146101a25780638da5cb5b146101aa578063a3469f74146101c557600080fd5b8063150b7a02146100fa57806336b18165146101675780635062bc5a1461017c575b600080fd5b610131610108366004611248565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b61017a6101753660046112b4565b6102d7565b005b61017a61018a3660046112b4565b610428565b61017a61019d3660046112b4565b61073f565b61017a610872565b6000546040516001600160a01b03909116815260200161015e565b61017a6101d33660046112d6565b610886565b61017a6101e63660046112b4565b610912565b6101316101f936600461136f565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b61022b610bda565b60405161015e919061141d565b61024b6102463660046114bf565b610d0e565b60405161015e91906114e3565b61024b6102663660046112d6565b610e8a565b61027e6102793660046112d6565b610f84565b60405190815260200161015e565b61013161029a366004611545565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b61017a6102d23660046114bf565b610fc5565b600954604051627eeac760e11b8152336004820152602481018490526001600160a01b039091169062fdd58e90604401602060405180830381865afa158015610324573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034891906115ae565b6000036103c25760405162461bcd60e51b815260206004820152602660248201527f6f6e6c7920776561706f6e206f776e6572732063616e2075706461746520757360448201527f6572496e666f000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6000818152600a6020908152604091829020600481018590556002015482519081529081018490529081018290523360608201527fcf09b7402a0a51c2c51935cd064f1c8e910da6814d49b3badcaa04c81850948b906080015b60405180910390a15050565b6004821080156104385750600082115b6104aa5760405162461bcd60e51b815260206004820152602260248201527f796f75206e65656420746f2072616e6b20757020666f7220746865207265776160448201527f726400000000000000000000000000000000000000000000000000000000000060648201526084016103b9565b6000818152600a60205260409020600501546001600160a01b031633146105395760405162461bcd60e51b815260206004820152602860248201527f796f7520617265206e6f7420746865207573657220666f72207468652072616e60448201527f6b2072657761726400000000000000000000000000000000000000000000000060648201526084016103b9565b600082600103610552575060038054600090915561057c565b82600203610569575060048054600090915561057c565b8260030361057c57506005805460009091555b6006546007546040517fd83a2bf30000000000000000000000000000000000000000000000000000000081526001600160a01b03918216600482015230602482015260448101849052600092919091169063d83a2bf3906064016020604051808303816000875af11580156105f5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061991906115c7565b9050806106685760405162461bcd60e51b815260206004820152601560248201527f496e637265617365436f6e7472616374204661696c000000000000000000000060448201526064016103b9565b6006546007546040517f23b872dd0000000000000000000000000000000000000000000000000000000081526001600160a01b039182166004820152336024820152604481018590529116906323b872dd906064016020604051808303816000875af11580156106dc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070091906115c7565b50604080518381523360208201527ff77e4bb9025e3700758004f467a01764ed3e2b0245b45b918b6107e1770f32bb910160405180910390a150505050565b6008546040516331a9108f60e11b8152600481018490526001600160a01b0390911690636352211e90602401602060405180830381865afa158015610788573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ac91906115e9565b6001600160a01b0316336001600160a01b0316146108165760405162461bcd60e51b815260206004820152602160248201527f6f6e6c7920636861726163746572206f776e6572732063616e207369676e20756044820152600760fc1b60648201526084016103b9565b6000818152600a602090815260409182902060028101859055600401548251858152918201529081018290523360608201527fcf09b7402a0a51c2c51935cd064f1c8e910da6814d49b3badcaa04c81850948b9060800161041c565b61087a611055565b61088460006110af565b565b600a61089382600561161c565b61089d9190611649565b600360008282546108ae919061165d565b90915550600a90506108c182600361161c565b6108cb9190611649565b600460008282546108dc919061165d565b90915550600a90506108ef82600261161c565b6108f99190611649565b6005600082825461090a919061165d565b909155505050565b6008546040516331a9108f60e11b8152600481018490526001600160a01b0390911690636352211e90602401602060405180830381865afa15801561095b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097f91906115e9565b6001600160a01b0316336001600160a01b0316146109e95760405162461bcd60e51b815260206004820152602160248201527f6f6e6c7920636861726163746572206f776e6572732063616e207369676e20756044820152600760fc1b60648201526084016103b9565b600954604051627eeac760e11b8152336004820152602481018390526001600160a01b039091169062fdd58e90604401602060405180830381865afa158015610a36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5a91906115ae565b600003610aa95760405162461bcd60e51b815260206004820152601e60248201527f6f6e6c7920776561706f6e206f776e6572732063616e207369676e207570000060448201526064016103b9565b610ab7600180546001019055565b6000610ac260015490565b6040805160808082018352838252825180840184526008546001600160a01b03908116825260208083018a905280850192835285518087018752600954831681528082018a905285870190815233606080880182815260008b8152600a86528a9020985189559551805160018a01805491881673ffffffffffffffffffffffffffffffffffffffff199283161790559085015160028a01559251805160038a018054918816918616919091179055840151600489015594516005909701805497909416969091169590951790915584518981529081018890529384018590528301919091529192507fb71cf8dd9f35ff09f0b312ae47365f80792968af9383e6cbc7f9c12054d6cc3d910160405180910390a1505050565b60606000610be760015490565b905060008167ffffffffffffffff811115610c0457610c04611191565b604051908082528060200260200182016040528015610c3d57816020015b610c2a61110c565b815260200190600190039081610c225790505b50905060015b828111610d07576000818152600a602090815260408083205480845292819020815160808101835281548152825180840184526001808401546001600160a01b0390811683526002850154838801528387019290925284518086018652600385015483168152600485015496810196909652938201949094526005820154909316606084015291908590610cd79086611670565b81518110610ce757610ce7611683565b602002602001018190525050508080610cff90611699565b915050610c43565b5092915050565b610d1661110c565b600154600103610d685760405162461bcd60e51b815260206004820152601b60248201527f796f752061726520746865206f6e6c79206f6e6520706c61796572000000000060448201526064016103b9565b6000610d7360015490565b905060008142604051602001610d8b91815260200190565b6040516020818303038152906040528051906020012060001c610dae91906116b2565b90506001600160a01b038416600a6000610dc984600161165d565b81526020810191909152604001600020600501546001600160a01b031614610e79576000600a81610dfb84600161165d565b815260208082019290925260409081016000208151608081018352815481528251808401845260018301546001600160a01b0390811682526002840154828701528286019190915283518085018552600384015482168152600484015495810195909552928101939093526005015416606082015295945050505050565b610e8284610d0e565b949350505050565b610e9261110c565b600154600003610f0a5760405162461bcd60e51b815260206004820152602360248201527f6e6f207573657220696e666f20616464656420746f207468697320636f6e747260448201527f616374000000000000000000000000000000000000000000000000000000000060648201526084016103b9565b506000908152600a60209081526040918290208251608081018452815481528351808501855260018301546001600160a01b03908116825260028401548286015282850191909152845180860186526003840154821681526004840154948101949094529381019290925260050154909116606082015290565b6000806001839003610f995750600354610fbf565b82600203610faa5750600454610fbf565b82600303610fbb5750600554610fbf565b5060005b92915050565b610fcd611055565b6001600160a01b0381166110495760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016103b9565b611052816110af565b50565b6000546001600160a01b031633146108845760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103b9565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b604051806080016040528060008152602001611144604051806040016040528060006001600160a01b03168152602001600081525090565b815260200161116f604051806040016040528060006001600160a01b03168152602001600081525090565b8152600060209091015290565b6001600160a01b038116811461105257600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156111d0576111d0611191565b604052919050565b600082601f8301126111e957600080fd5b813567ffffffffffffffff81111561120357611203611191565b611216601f8201601f19166020016111a7565b81815284602083860101111561122b57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000806080858703121561125e57600080fd5b84356112698161117c565b935060208501356112798161117c565b925060408501359150606085013567ffffffffffffffff81111561129c57600080fd5b6112a8878288016111d8565b91505092959194509250565b600080604083850312156112c757600080fd5b50508035926020909101359150565b6000602082840312156112e857600080fd5b5035919050565b600082601f83011261130057600080fd5b8135602067ffffffffffffffff82111561131c5761131c611191565b8160051b61132b8282016111a7565b928352848101820192828101908785111561134557600080fd5b83870192505b848310156113645782358252918301919083019061134b565b979650505050505050565b600080600080600060a0868803121561138757600080fd5b85356113928161117c565b945060208601356113a28161117c565b9350604086013567ffffffffffffffff808211156113bf57600080fd5b6113cb89838a016112ef565b945060608801359150808211156113e157600080fd5b6113ed89838a016112ef565b9350608088013591508082111561140357600080fd5b50611410888289016111d8565b9150509295509295909350565b6020808252825182820181905260009190848201906040850190845b818110156114b3576114a08385518051825260208082015180516001600160a01b03168285015290810151604084015250604081015180516001600160a01b031660608401526020810151608084015250606001516001600160a01b031660a09190910152565b9284019260c09290920191600101611439565b50909695505050505050565b6000602082840312156114d157600080fd5b81356114dc8161117c565b9392505050565b60c08101610fbf82848051825260208082015180516001600160a01b03168285015290810151604084015250604081015180516001600160a01b031660608401526020810151608084015250606001516001600160a01b031660a09190910152565b600080600080600060a0868803121561155d57600080fd5b85356115688161117c565b945060208601356115788161117c565b93506040860135925060608601359150608086013567ffffffffffffffff8111156115a257600080fd5b611410888289016111d8565b6000602082840312156115c057600080fd5b5051919050565b6000602082840312156115d957600080fd5b815180151581146114dc57600080fd5b6000602082840312156115fb57600080fd5b81516114dc8161117c565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610fbf57610fbf611606565b634e487b7160e01b600052601260045260246000fd5b60008261165857611658611633565b500490565b80820180821115610fbf57610fbf611606565b81810381811115610fbf57610fbf611606565b634e487b7160e01b600052603260045260246000fd5b6000600182016116ab576116ab611606565b5060010190565b6000826116c1576116c1611633565b50069056fea26469706673582212200f40ebbd5312a4b7d27ab1f06d9740f935437471b7e5be6f69d4b719e2f1c35d64736f6c63430008110033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:1175:38",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:38",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "59:86:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "123:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "132:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "135:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "125:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "125:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "125:12:38"
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
                            "src": "82:5:38"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "93:5:38"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "108:3:38",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "113:1:38",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "104:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "104:11:38"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "117:1:38",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "100:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "100:19:38"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "89:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "89:31:38"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "79:2:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "79:42:38"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "72:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "72:50:38"
                  },
                  "nodeType": "YulIf",
                  "src": "69:70:38"
                }
              ]
            },
            "name": "validator_revert_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "48:5:38",
                "type": ""
              }
            ],
            "src": "14:131:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "290:522:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "337:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "346:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "349:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "339:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "339:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "339:12:38"
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
                            "src": "311:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "320:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "307:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "307:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "332:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "303:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "303:33:38"
                  },
                  "nodeType": "YulIf",
                  "src": "300:53:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "362:29:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "381:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "375:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "375:16:38"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "366:5:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "425:5:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "400:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "400:31:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "400:31:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "440:15:38",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "450:5:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "440:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "464:40:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "489:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "500:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "485:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "485:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "479:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "479:25:38"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "468:7:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_1",
                        "nodeType": "YulIdentifier",
                        "src": "538:7:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "513:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "513:33:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "513:33:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "555:17:38",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "565:7:38"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "555:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "581:40:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "606:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "617:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "602:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "602:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "596:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "596:25:38"
                  },
                  "variables": [
                    {
                      "name": "value_2",
                      "nodeType": "YulTypedName",
                      "src": "585:7:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_2",
                        "nodeType": "YulIdentifier",
                        "src": "655:7:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "630:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "630:33:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "630:33:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "672:17:38",
                  "value": {
                    "name": "value_2",
                    "nodeType": "YulIdentifier",
                    "src": "682:7:38"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "672:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "698:40:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "723:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "734:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "719:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "719:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "713:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "713:25:38"
                  },
                  "variables": [
                    {
                      "name": "value_3",
                      "nodeType": "YulTypedName",
                      "src": "702:7:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_3",
                        "nodeType": "YulIdentifier",
                        "src": "772:7:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "747:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "747:33:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "747:33:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "789:17:38",
                  "value": {
                    "name": "value_3",
                    "nodeType": "YulIdentifier",
                    "src": "799:7:38"
                  },
                  "variableNames": [
                    {
                      "name": "value3",
                      "nodeType": "YulIdentifier",
                      "src": "789:6:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_addresst_address_payable_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "232:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "243:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "255:6:38",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "263:6:38",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "271:6:38",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "279:6:38",
                "type": ""
              }
            ],
            "src": "150:662:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "991:182:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1008:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1019:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1001:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1001:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1001:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1042:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1053:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1038:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1038:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1058:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1031:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1031:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1031:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1081:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1092:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1077:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1077:18:38"
                      },
                      {
                        "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "1097:34:38",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1070:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1070:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1070:62:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1141:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1153:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1164:2:38",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1149:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1149:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1141:4:38"
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
                "src": "968:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "982:4:38",
                "type": ""
              }
            ],
            "src": "817:356:38"
          }
        ]
      },
      "contents": "{\n    { }\n    function validator_revert_address(value)\n    {\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_addresst_addresst_addresst_address_payable_fromMemory(headStart, dataEnd) -> value0, value1, value2, value3\n    {\n        if slt(sub(dataEnd, headStart), 128) { revert(0, 0) }\n        let value := mload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := mload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n        let value_2 := mload(add(headStart, 64))\n        validator_revert_address(value_2)\n        value2 := value_2\n        let value_3 := mload(add(headStart, 96))\n        validator_revert_address(value_3)\n        value3 := value_3\n    }\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"Ownable: caller is not the owner\")\n        tail := add(headStart, 96)\n    }\n}",
      "id": 38,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:14954:38",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:38",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "59:109:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "146:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "155:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "158:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "148:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "148:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "148:12:38"
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
                            "src": "82:5:38"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "93:5:38"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "100:42:38",
                                "type": "",
                                "value": "0xffffffffffffffffffffffffffffffffffffffff"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "89:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "89:54:38"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "79:2:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "79:65:38"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "72:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "72:73:38"
                  },
                  "nodeType": "YulIf",
                  "src": "69:93:38"
                }
              ]
            },
            "name": "validator_revert_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "48:5:38",
                "type": ""
              }
            ],
            "src": "14:154:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "205:152:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "222:1:38",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "225:77:38",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "215:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "215:88:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "215:88:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "319:1:38",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "322:4:38",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "312:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "312:15:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "312:15:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "343:1:38",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "346:4:38",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "336:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "336:15:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "336:15:38"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "173:184:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "407:230:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "417:19:38",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "433:2:38",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "427:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "427:9:38"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "417:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "445:58:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "467:6:38"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "size",
                                "nodeType": "YulIdentifier",
                                "src": "483:4:38"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "489:2:38",
                                "type": "",
                                "value": "31"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "479:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "479:13:38"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "498:2:38",
                                "type": "",
                                "value": "31"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "494:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "494:7:38"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "475:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "475:27:38"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "463:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "463:40:38"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "449:10:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "578:22:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "580:16:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "580:18:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "580:18:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "521:10:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "533:18:38",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "518:2:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "518:34:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "557:10:38"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "569:6:38"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "554:2:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "554:22:38"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "515:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "515:62:38"
                  },
                  "nodeType": "YulIf",
                  "src": "512:88:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "616:2:38",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "620:10:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "609:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "609:22:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "609:22:38"
                }
              ]
            },
            "name": "allocate_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "387:4:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "396:6:38",
                "type": ""
              }
            ],
            "src": "362:275:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "694:478:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "743:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "752:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "755:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "745:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "745:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "745:12:38"
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
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "722:6:38"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "730:4:38",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "718:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "718:17:38"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "737:3:38"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "714:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "714:27:38"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "707:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "707:35:38"
                  },
                  "nodeType": "YulIf",
                  "src": "704:55:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "768:30:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "791:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "778:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "778:20:38"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "772:2:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "837:22:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "839:16:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "839:18:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "839:18:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "813:2:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "817:18:38",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "810:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "810:26:38"
                  },
                  "nodeType": "YulIf",
                  "src": "807:52:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "868:70:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "_1",
                                    "nodeType": "YulIdentifier",
                                    "src": "911:2:38"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "915:4:38",
                                    "type": "",
                                    "value": "0x1f"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "907:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "907:13:38"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "926:2:38",
                                    "type": "",
                                    "value": "31"
                                  }
                                ],
                                "functionName": {
                                  "name": "not",
                                  "nodeType": "YulIdentifier",
                                  "src": "922:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "922:7:38"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "903:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "903:27:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "932:4:38",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "899:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "899:38:38"
                      }
                    ],
                    "functionName": {
                      "name": "allocate_memory",
                      "nodeType": "YulIdentifier",
                      "src": "883:15:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "883:55:38"
                  },
                  "variables": [
                    {
                      "name": "array_1",
                      "nodeType": "YulTypedName",
                      "src": "872:7:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "array_1",
                        "nodeType": "YulIdentifier",
                        "src": "954:7:38"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "963:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "947:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "947:19:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "947:19:38"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1014:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1023:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1026:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1016:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1016:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1016:12:38"
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
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "989:6:38"
                              },
                              {
                                "name": "_1",
                                "nodeType": "YulIdentifier",
                                "src": "997:2:38"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "985:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "985:15:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1002:4:38",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "981:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "981:26:38"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "1009:3:38"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "978:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "978:35:38"
                  },
                  "nodeType": "YulIf",
                  "src": "975:55:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "array_1",
                            "nodeType": "YulIdentifier",
                            "src": "1056:7:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1065:4:38",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1052:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1052:18:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "1076:6:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1084:4:38",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1072:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1072:17:38"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "1091:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldatacopy",
                      "nodeType": "YulIdentifier",
                      "src": "1039:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1039:55:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1039:55:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "array_1",
                                "nodeType": "YulIdentifier",
                                "src": "1118:7:38"
                              },
                              {
                                "name": "_1",
                                "nodeType": "YulIdentifier",
                                "src": "1127:2:38"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1114:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1114:16:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1132:4:38",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1110:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1110:27:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1139:1:38",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1103:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1103:38:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1103:38:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1150:16:38",
                  "value": {
                    "name": "array_1",
                    "nodeType": "YulIdentifier",
                    "src": "1159:7:38"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "1150:5:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_bytes",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "668:6:38",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "676:3:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "684:5:38",
                "type": ""
              }
            ],
            "src": "642:530:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1307:535:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1354:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1363:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1366:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1356:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1356:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1356:12:38"
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
                            "src": "1328:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1337:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1324:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1324:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1349:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1320:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1320:33:38"
                  },
                  "nodeType": "YulIf",
                  "src": "1317:53:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1379:36:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1405:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1392:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1392:23:38"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1383:5:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1449:5:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "1424:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1424:31:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1424:31:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1464:15:38",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "1474:5:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1464:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1488:47:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1520:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1531:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1516:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1516:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1503:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1503:32:38"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "1492:7:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_1",
                        "nodeType": "YulIdentifier",
                        "src": "1569:7:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "1544:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1544:33:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1544:33:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1586:17:38",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "1596:7:38"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "1586:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1612:42:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1639:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1650:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1635:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1635:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1622:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1622:32:38"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "1612:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1663:46:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1694:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1705:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1690:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1690:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1677:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1677:32:38"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "1667:6:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1752:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1761:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1764:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1754:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1754:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1754:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "1724:6:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1732:18:38",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1721:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1721:30:38"
                  },
                  "nodeType": "YulIf",
                  "src": "1718:50:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1777:59:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1808:9:38"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "1819:6:38"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1804:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1804:22:38"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "1828:7:38"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "1787:16:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1787:49:38"
                  },
                  "variableNames": [
                    {
                      "name": "value3",
                      "nodeType": "YulIdentifier",
                      "src": "1777:6:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1249:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1260:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1272:6:38",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1280:6:38",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "1288:6:38",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "1296:6:38",
                "type": ""
              }
            ],
            "src": "1177:665:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1946:149:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1956:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1968:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1979:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1964:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1964:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1956:4:38"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1998:9:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2013:6:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2021:66:38",
                            "type": "",
                            "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "2009:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2009:79:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1991:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1991:98:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1991:98:38"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1915:9:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1926:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1937:4:38",
                "type": ""
              }
            ],
            "src": "1847:248:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2187:161:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2233:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2242:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2245:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2235:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2235:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2235:12:38"
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
                            "src": "2208:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2217:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2204:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2204:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2229:2:38",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2200:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2200:32:38"
                  },
                  "nodeType": "YulIf",
                  "src": "2197:52:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2258:33:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2281:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2268:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2268:23:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "2258:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2300:42:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2327:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2338:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2323:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2323:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2310:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2310:32:38"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "2300:6:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2145:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2156:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2168:6:38",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2176:6:38",
                "type": ""
              }
            ],
            "src": "2100:248:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2454:125:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2464:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2476:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2487:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2472:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2472:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2464:4:38"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2506:9:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2521:6:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2529:42:38",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "2517:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2517:55:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2499:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2499:74:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2499:74:38"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2423:9:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2434:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2445:4:38",
                "type": ""
              }
            ],
            "src": "2353:226:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2654:110:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2700:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2709:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2712:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2702:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2702:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2702:12:38"
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
                            "src": "2675:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2684:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2671:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2671:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2696:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2667:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2667:32:38"
                  },
                  "nodeType": "YulIf",
                  "src": "2664:52:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2725:33:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2748:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2735:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2735:23:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "2725:6:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2620:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2631:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2643:6:38",
                "type": ""
              }
            ],
            "src": "2584:180:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2833:648:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2882:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2891:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2894:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2884:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2884:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2884:12:38"
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
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2861:6:38"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2869:4:38",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2857:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2857:17:38"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "2876:3:38"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "2853:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2853:27:38"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "2846:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2846:35:38"
                  },
                  "nodeType": "YulIf",
                  "src": "2843:55:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2907:30:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "2930:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2917:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2917:20:38"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "2911:2:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2946:14:38",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "2956:4:38",
                    "type": "",
                    "value": "0x20"
                  },
                  "variables": [
                    {
                      "name": "_2",
                      "nodeType": "YulTypedName",
                      "src": "2950:2:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2999:22:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "3001:16:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3001:18:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3001:18:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "2975:2:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2979:18:38",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "2972:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2972:26:38"
                  },
                  "nodeType": "YulIf",
                  "src": "2969:52:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3030:20:38",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3044:1:38",
                        "type": "",
                        "value": "5"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "3047:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "shl",
                      "nodeType": "YulIdentifier",
                      "src": "3040:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3040:10:38"
                  },
                  "variables": [
                    {
                      "name": "_3",
                      "nodeType": "YulTypedName",
                      "src": "3034:2:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3059:39:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "_3",
                            "nodeType": "YulIdentifier",
                            "src": "3090:2:38"
                          },
                          {
                            "name": "_2",
                            "nodeType": "YulIdentifier",
                            "src": "3094:2:38"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3086:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3086:11:38"
                      }
                    ],
                    "functionName": {
                      "name": "allocate_memory",
                      "nodeType": "YulIdentifier",
                      "src": "3070:15:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3070:28:38"
                  },
                  "variables": [
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "3063:3:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3107:16:38",
                  "value": {
                    "name": "dst",
                    "nodeType": "YulIdentifier",
                    "src": "3120:3:38"
                  },
                  "variables": [
                    {
                      "name": "dst_1",
                      "nodeType": "YulTypedName",
                      "src": "3111:5:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "3139:3:38"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "3144:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3132:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3132:15:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3132:15:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3156:19:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "3167:3:38"
                      },
                      {
                        "name": "_2",
                        "nodeType": "YulIdentifier",
                        "src": "3172:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3163:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3163:12:38"
                  },
                  "variableNames": [
                    {
                      "name": "dst",
                      "nodeType": "YulIdentifier",
                      "src": "3156:3:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3184:38:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "3206:6:38"
                          },
                          {
                            "name": "_3",
                            "nodeType": "YulIdentifier",
                            "src": "3214:2:38"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3202:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3202:15:38"
                      },
                      {
                        "name": "_2",
                        "nodeType": "YulIdentifier",
                        "src": "3219:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3198:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3198:24:38"
                  },
                  "variables": [
                    {
                      "name": "srcEnd",
                      "nodeType": "YulTypedName",
                      "src": "3188:6:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3250:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3259:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3262:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3252:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3252:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3252:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "srcEnd",
                        "nodeType": "YulIdentifier",
                        "src": "3237:6:38"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "3245:3:38"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "3234:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3234:15:38"
                  },
                  "nodeType": "YulIf",
                  "src": "3231:35:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3275:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "3290:6:38"
                      },
                      {
                        "name": "_2",
                        "nodeType": "YulIdentifier",
                        "src": "3298:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3286:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3286:15:38"
                  },
                  "variables": [
                    {
                      "name": "src",
                      "nodeType": "YulTypedName",
                      "src": "3279:3:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3366:86:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "3387:3:38"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "src",
                                  "nodeType": "YulIdentifier",
                                  "src": "3405:3:38"
                                }
                              ],
                              "functionName": {
                                "name": "calldataload",
                                "nodeType": "YulIdentifier",
                                "src": "3392:12:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3392:17:38"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3380:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3380:30:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3380:30:38"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3423:19:38",
                        "value": {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "3434:3:38"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "3439:2:38"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3430:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3430:12:38"
                        },
                        "variableNames": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "3423:3:38"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "3321:3:38"
                      },
                      {
                        "name": "srcEnd",
                        "nodeType": "YulIdentifier",
                        "src": "3326:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "3318:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3318:15:38"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "3334:23:38",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3336:19:38",
                        "value": {
                          "arguments": [
                            {
                              "name": "src",
                              "nodeType": "YulIdentifier",
                              "src": "3347:3:38"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "3352:2:38"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3343:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3343:12:38"
                        },
                        "variableNames": [
                          {
                            "name": "src",
                            "nodeType": "YulIdentifier",
                            "src": "3336:3:38"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "3314:3:38",
                    "statements": []
                  },
                  "src": "3310:142:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3461:14:38",
                  "value": {
                    "name": "dst_1",
                    "nodeType": "YulIdentifier",
                    "src": "3470:5:38"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "3461:5:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_array_uint256_dyn",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "2807:6:38",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2815:3:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "2823:5:38",
                "type": ""
              }
            ],
            "src": "2769:712:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3683:874:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3730:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3739:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3742:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3732:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3732:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3732:12:38"
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
                            "src": "3704:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3713:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3700:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3700:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3725:3:38",
                        "type": "",
                        "value": "160"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3696:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3696:33:38"
                  },
                  "nodeType": "YulIf",
                  "src": "3693:53:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3755:36:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3781:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "3768:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3768:23:38"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "3759:5:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "3825:5:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "3800:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3800:31:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3800:31:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3840:15:38",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "3850:5:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "3840:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3864:47:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3896:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3907:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3892:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3892:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "3879:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3879:32:38"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "3868:7:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_1",
                        "nodeType": "YulIdentifier",
                        "src": "3945:7:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "3920:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3920:33:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3920:33:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3962:17:38",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "3972:7:38"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "3962:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3988:46:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4019:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4030:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4015:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4015:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4002:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4002:32:38"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "3992:6:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4043:28:38",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "4053:18:38",
                    "type": "",
                    "value": "0xffffffffffffffff"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "4047:2:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4098:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4107:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4110:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4100:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4100:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4100:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "4086:6:38"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "4094:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4083:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4083:14:38"
                  },
                  "nodeType": "YulIf",
                  "src": "4080:34:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4123:71:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4166:9:38"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "4177:6:38"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4162:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4162:22:38"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "4186:7:38"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_array_uint256_dyn",
                      "nodeType": "YulIdentifier",
                      "src": "4133:28:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4133:61:38"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "4123:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4203:48:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4236:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4247:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4232:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4232:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4219:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4219:32:38"
                  },
                  "variables": [
                    {
                      "name": "offset_1",
                      "nodeType": "YulTypedName",
                      "src": "4207:8:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4280:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4289:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4292:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4282:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4282:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4282:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset_1",
                        "nodeType": "YulIdentifier",
                        "src": "4266:8:38"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "4276:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4263:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4263:16:38"
                  },
                  "nodeType": "YulIf",
                  "src": "4260:36:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4305:73:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4348:9:38"
                          },
                          {
                            "name": "offset_1",
                            "nodeType": "YulIdentifier",
                            "src": "4359:8:38"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4344:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4344:24:38"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "4370:7:38"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_array_uint256_dyn",
                      "nodeType": "YulIdentifier",
                      "src": "4315:28:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4315:63:38"
                  },
                  "variableNames": [
                    {
                      "name": "value3",
                      "nodeType": "YulIdentifier",
                      "src": "4305:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4387:49:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4420:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4431:3:38",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4416:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4416:19:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4403:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4403:33:38"
                  },
                  "variables": [
                    {
                      "name": "offset_2",
                      "nodeType": "YulTypedName",
                      "src": "4391:8:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4465:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4474:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4477:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4467:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4467:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4467:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset_2",
                        "nodeType": "YulIdentifier",
                        "src": "4451:8:38"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "4461:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4448:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4448:16:38"
                  },
                  "nodeType": "YulIf",
                  "src": "4445:36:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4490:61:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4521:9:38"
                          },
                          {
                            "name": "offset_2",
                            "nodeType": "YulIdentifier",
                            "src": "4532:8:38"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4517:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4517:24:38"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "4543:7:38"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "4500:16:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4500:51:38"
                  },
                  "variableNames": [
                    {
                      "name": "value4",
                      "nodeType": "YulIdentifier",
                      "src": "4490:6:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_array$_t_uint256_$dyn_memory_ptrt_array$_t_uint256_$dyn_memory_ptrt_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3617:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3628:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3640:6:38",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "3648:6:38",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "3656:6:38",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "3664:6:38",
                "type": ""
              },
              {
                "name": "value4",
                "nodeType": "YulTypedName",
                "src": "3672:6:38",
                "type": ""
              }
            ],
            "src": "3486:1071:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4611:146:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4628:3:38"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "4643:5:38"
                              }
                            ],
                            "functionName": {
                              "name": "mload",
                              "nodeType": "YulIdentifier",
                              "src": "4637:5:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4637:12:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4651:42:38",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "4633:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4633:61:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4621:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4621:74:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4621:74:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "4715:3:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4720:4:38",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4711:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4711:14:38"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "4737:5:38"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4744:4:38",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4733:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4733:16:38"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "4727:5:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4727:23:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4704:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4704:47:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4704:47:38"
                }
              ]
            },
            "name": "abi_encode_struct_Token",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4595:5:38",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4602:3:38",
                "type": ""
              }
            ],
            "src": "4562:195:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4814:378:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4831:3:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "4842:5:38"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "4836:5:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4836:12:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4824:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4824:25:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4824:25:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4858:43:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "4888:5:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4895:4:38",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4884:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4884:16:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "4878:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4878:23:38"
                  },
                  "variables": [
                    {
                      "name": "memberValue0",
                      "nodeType": "YulTypedName",
                      "src": "4862:12:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "memberValue0",
                        "nodeType": "YulIdentifier",
                        "src": "4934:12:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "4952:3:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4957:4:38",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4948:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4948:14:38"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_struct_Token",
                      "nodeType": "YulIdentifier",
                      "src": "4910:23:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4910:53:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4910:53:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4972:45:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "5004:5:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5011:4:38",
                            "type": "",
                            "value": "0x40"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5000:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5000:16:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "4994:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4994:23:38"
                  },
                  "variables": [
                    {
                      "name": "memberValue0_1",
                      "nodeType": "YulTypedName",
                      "src": "4976:14:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "memberValue0_1",
                        "nodeType": "YulIdentifier",
                        "src": "5050:14:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "5070:3:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5075:4:38",
                            "type": "",
                            "value": "0x60"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5066:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5066:14:38"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_struct_Token",
                      "nodeType": "YulIdentifier",
                      "src": "5026:23:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5026:55:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5026:55:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "5101:3:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5106:4:38",
                            "type": "",
                            "value": "0xa0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5097:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5097:14:38"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "5127:5:38"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "5134:4:38",
                                    "type": "",
                                    "value": "0x60"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "5123:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5123:16:38"
                              }
                            ],
                            "functionName": {
                              "name": "mload",
                              "nodeType": "YulIdentifier",
                              "src": "5117:5:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5117:23:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5142:42:38",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "5113:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5113:72:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5090:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5090:96:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5090:96:38"
                }
              ]
            },
            "name": "abi_encode_struct_UserInfo",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4798:5:38",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4805:3:38",
                "type": ""
              }
            ],
            "src": "4762:430:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5402:503:38",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5412:12:38",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "5422:2:38",
                    "type": "",
                    "value": "32"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "5416:2:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5433:32:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5451:9:38"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "5462:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5447:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5447:18:38"
                  },
                  "variables": [
                    {
                      "name": "tail_1",
                      "nodeType": "YulTypedName",
                      "src": "5437:6:38",
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
                        "src": "5481:9:38"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "5492:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5474:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5474:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5474:21:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5504:17:38",
                  "value": {
                    "name": "tail_1",
                    "nodeType": "YulIdentifier",
                    "src": "5515:6:38"
                  },
                  "variables": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "5508:3:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5530:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "5550:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "5544:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5544:13:38"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "5534:6:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "tail_1",
                        "nodeType": "YulIdentifier",
                        "src": "5573:6:38"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5581:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5566:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5566:22:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5566:22:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5597:25:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5608:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5619:2:38",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5604:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5604:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "5597:3:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5631:29:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "5649:6:38"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "5657:2:38"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5645:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5645:15:38"
                  },
                  "variables": [
                    {
                      "name": "srcPtr",
                      "nodeType": "YulTypedName",
                      "src": "5635:6:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5669:10:38",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "5678:1:38",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "5673:1:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5737:142:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "srcPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "5784:6:38"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "5778:5:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5778:13:38"
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "5793:3:38"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_struct_UserInfo",
                            "nodeType": "YulIdentifier",
                            "src": "5751:26:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5751:46:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5751:46:38"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5810:21:38",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "5821:3:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5826:4:38",
                              "type": "",
                              "value": "0xc0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5817:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5817:14:38"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "5810:3:38"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5844:25:38",
                        "value": {
                          "arguments": [
                            {
                              "name": "srcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "5858:6:38"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "5866:2:38"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5854:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5854:15:38"
                        },
                        "variableNames": [
                          {
                            "name": "srcPtr",
                            "nodeType": "YulIdentifier",
                            "src": "5844:6:38"
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
                        "src": "5699:1:38"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5702:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "5696:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5696:13:38"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "5710:18:38",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "5712:14:38",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "5721:1:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5724:1:38",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5717:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5717:9:38"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "5712:1:38"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "5692:3:38",
                    "statements": []
                  },
                  "src": "5688:191:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5888:11:38",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "5896:3:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5888:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_array$_t_struct$_UserInfo_$10819_memory_ptr_$dyn_memory_ptr__to_t_array$_t_struct$_UserInfo_$10819_memory_ptr_$dyn_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5371:9:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5382:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5393:4:38",
                "type": ""
              }
            ],
            "src": "5197:708:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5980:177:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6026:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6035:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6038:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "6028:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6028:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6028:12:38"
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
                            "src": "6001:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6010:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5997:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5997:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6022:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "5993:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5993:32:38"
                  },
                  "nodeType": "YulIf",
                  "src": "5990:52:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6051:36:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6077:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6064:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6064:23:38"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "6055:5:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6121:5:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "6096:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6096:31:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6096:31:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6136:15:38",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "6146:5:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "6136:6:38"
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
                "src": "5946:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "5957:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5969:6:38",
                "type": ""
              }
            ],
            "src": "5910:247:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6317:97:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6327:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6339:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6350:3:38",
                        "type": "",
                        "value": "192"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6335:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6335:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6327:4:38"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "6390:6:38"
                      },
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6398:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_struct_UserInfo",
                      "nodeType": "YulIdentifier",
                      "src": "6363:26:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6363:45:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6363:45:38"
                }
              ]
            },
            "name": "abi_encode_tuple_t_struct$_UserInfo_$10819_memory_ptr__to_t_struct$_UserInfo_$10819_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6286:9:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6297:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6308:4:38",
                "type": ""
              }
            ],
            "src": "6162:252:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6520:76:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6530:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6542:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6553:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6538:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6538:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6530:4:38"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6572:9:38"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "6583:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6565:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6565:25:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6565:25:38"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6489:9:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6500:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6511:4:38",
                "type": ""
              }
            ],
            "src": "6419:177:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6748:587:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6795:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6804:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6807:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "6797:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6797:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6797:12:38"
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
                            "src": "6769:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6778:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "6765:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6765:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6790:3:38",
                        "type": "",
                        "value": "160"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "6761:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6761:33:38"
                  },
                  "nodeType": "YulIf",
                  "src": "6758:53:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6820:36:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6846:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6833:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6833:23:38"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "6824:5:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6890:5:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "6865:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6865:31:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6865:31:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6905:15:38",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "6915:5:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "6905:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6929:47:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6961:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6972:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6957:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6957:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6944:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6944:32:38"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "6933:7:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_1",
                        "nodeType": "YulIdentifier",
                        "src": "7010:7:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "6985:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6985:33:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6985:33:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7027:17:38",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "7037:7:38"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "7027:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7053:42:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7080:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7091:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7076:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7076:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "7063:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7063:32:38"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "7053:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7104:42:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7131:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7142:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7127:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7127:18:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "7114:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7114:32:38"
                  },
                  "variableNames": [
                    {
                      "name": "value3",
                      "nodeType": "YulIdentifier",
                      "src": "7104:6:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7155:47:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7186:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7197:3:38",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7182:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7182:19:38"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "7169:12:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7169:33:38"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "7159:6:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7245:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7254:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7257:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "7247:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7247:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7247:12:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "7217:6:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7225:18:38",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "7214:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7214:30:38"
                  },
                  "nodeType": "YulIf",
                  "src": "7211:50:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7270:59:38",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7301:9:38"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "7312:6:38"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7297:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7297:22:38"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "7321:7:38"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "7280:16:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7280:49:38"
                  },
                  "variableNames": [
                    {
                      "name": "value4",
                      "nodeType": "YulIdentifier",
                      "src": "7270:6:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256t_uint256t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6682:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "6693:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6705:6:38",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "6713:6:38",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "6721:6:38",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "6729:6:38",
                "type": ""
              },
              {
                "name": "value4",
                "nodeType": "YulTypedName",
                "src": "6737:6:38",
                "type": ""
              }
            ],
            "src": "6601:734:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7469:168:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7479:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7491:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7502:2:38",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7487:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7487:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7479:4:38"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7521:9:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "7536:6:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7544:42:38",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "7532:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7532:55:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7514:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7514:74:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7514:74:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7608:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7619:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7604:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7604:18:38"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "7624:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7597:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7597:34:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7597:34:38"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7430:9:38",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "7441:6:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "7449:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7460:4:38",
                "type": ""
              }
            ],
            "src": "7340:297:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7723:103:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7769:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7778:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7781:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "7771:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7771:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7771:12:38"
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
                            "src": "7744:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7753:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "7740:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7740:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7765:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "7736:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7736:32:38"
                  },
                  "nodeType": "YulIf",
                  "src": "7733:52:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7794:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7810:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "7804:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7804:16:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "7794:6:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7689:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "7700:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "7712:6:38",
                "type": ""
              }
            ],
            "src": "7642:184:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8005:228:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8022:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8033:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8015:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8015:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8015:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8056:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8067:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8052:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8052:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8072:2:38",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8045:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8045:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8045:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8095:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8106:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8091:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8091:18:38"
                      },
                      {
                        "hexValue": "6f6e6c7920776561706f6e206f776e6572732063616e20757064617465207573",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8111:34:38",
                        "type": "",
                        "value": "only weapon owners can update us"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8084:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8084:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8084:62:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8166:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8177:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8162:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8162:18:38"
                      },
                      {
                        "hexValue": "6572496e666f",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8182:8:38",
                        "type": "",
                        "value": "erInfo"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8155:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8155:36:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8155:36:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8200:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8212:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8223:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8208:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8208:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8200:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_b0fe3178bf6775920488275d1750f1843a0b30545c0744042557cc3e471381af__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7982:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7996:4:38",
                "type": ""
              }
            ],
            "src": "7831:402:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8423:255:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8433:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8445:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8456:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8441:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8441:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8433:4:38"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8476:9:38"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "8487:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8469:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8469:25:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8469:25:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8514:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8525:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8510:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8510:18:38"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "8530:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8503:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8503:34:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8503:34:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8557:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8568:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8553:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8553:18:38"
                      },
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "8573:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8546:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8546:34:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8546:34:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8600:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8611:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8596:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8596:18:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value3",
                            "nodeType": "YulIdentifier",
                            "src": "8620:6:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8628:42:38",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "8616:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8616:55:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8589:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8589:83:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8589:83:38"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256_t_uint256_t_uint256_t_address__to_t_uint256_t_uint256_t_uint256_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8368:9:38",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "8379:6:38",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "8387:6:38",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "8395:6:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "8403:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8414:4:38",
                "type": ""
              }
            ],
            "src": "8238:440:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8857:224:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8874:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8885:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8867:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8867:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8867:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8908:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8919:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8904:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8904:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8924:2:38",
                        "type": "",
                        "value": "34"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8897:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8897:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8897:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8947:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8958:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8943:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8943:18:38"
                      },
                      {
                        "hexValue": "796f75206e65656420746f2072616e6b20757020666f72207468652072657761",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8963:34:38",
                        "type": "",
                        "value": "you need to rank up for the rewa"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8936:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8936:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8936:62:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9018:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9029:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9014:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9014:18:38"
                      },
                      {
                        "hexValue": "7264",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9034:4:38",
                        "type": "",
                        "value": "rd"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9007:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9007:32:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9007:32:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9048:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9060:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9071:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9056:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9056:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9048:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_31a6f823e3ae97fdcda2fc01a3b621cb6a86a2be5567ef06565daa4942f7e905__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8834:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8848:4:38",
                "type": ""
              }
            ],
            "src": "8683:398:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9260:230:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9277:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9288:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9270:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9270:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9270:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9311:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9322:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9307:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9307:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9327:2:38",
                        "type": "",
                        "value": "40"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9300:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9300:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9300:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9350:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9361:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9346:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9346:18:38"
                      },
                      {
                        "hexValue": "796f7520617265206e6f7420746865207573657220666f72207468652072616e",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9366:34:38",
                        "type": "",
                        "value": "you are not the user for the ran"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9339:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9339:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9339:62:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9421:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9432:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9417:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9417:18:38"
                      },
                      {
                        "hexValue": "6b20726577617264",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9437:10:38",
                        "type": "",
                        "value": "k reward"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9410:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9410:38:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9410:38:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9457:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9469:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9480:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9465:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9465:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9457:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_3d6db16898e6b3978bfbffd34d2acf7b0649024a67bd30cf662af09bf59cb8e1__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9237:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9251:4:38",
                "type": ""
              }
            ],
            "src": "9086:404:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9660:241:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9670:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9682:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9693:2:38",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9678:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9678:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9670:4:38"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "9705:52:38",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "9715:42:38",
                    "type": "",
                    "value": "0xffffffffffffffffffffffffffffffffffffffff"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "9709:2:38",
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
                        "src": "9773:9:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "9788:6:38"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "9796:2:38"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "9784:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9784:15:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9766:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9766:34:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9766:34:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9820:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9831:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9816:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9816:18:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "9840:6:38"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "9848:2:38"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "9836:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9836:15:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9809:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9809:43:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9809:43:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9872:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9883:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9868:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9868:18:38"
                      },
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "9888:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9861:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9861:34:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9861:34:38"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_payable_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9613:9:38",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "9624:6:38",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "9632:6:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "9640:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9651:4:38",
                "type": ""
              }
            ],
            "src": "9495:406:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9984:199:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10030:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10039:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10042:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "10032:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10032:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10032:12:38"
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
                            "src": "10005:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10014:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "10001:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10001:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10026:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "9997:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9997:32:38"
                  },
                  "nodeType": "YulIf",
                  "src": "9994:52:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "10055:29:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10074:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "10068:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10068:16:38"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "10059:5:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10137:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10146:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10149:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "10139:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10139:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10139:12:38"
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
                            "src": "10106:5:38"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "10127:5:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nodeType": "YulIdentifier",
                                  "src": "10120:6:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "10120:13:38"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "10113:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10113:21:38"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "10103:2:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10103:32:38"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "10096:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10096:40:38"
                  },
                  "nodeType": "YulIf",
                  "src": "10093:60:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10162:15:38",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "10172:5:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "10162:6:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_bool_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9950:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "9961:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "9973:6:38",
                "type": ""
              }
            ],
            "src": "9906:277:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10362:171:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10379:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10390:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10372:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10372:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10372:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10413:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10424:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10409:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10409:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10429:2:38",
                        "type": "",
                        "value": "21"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10402:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10402:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10402:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10452:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10463:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10448:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10448:18:38"
                      },
                      {
                        "hexValue": "496e637265617365436f6e7472616374204661696c",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10468:23:38",
                        "type": "",
                        "value": "IncreaseContract Fail"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10441:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10441:51:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10441:51:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10501:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10513:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10524:2:38",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10509:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10509:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10501:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10339:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10353:4:38",
                "type": ""
              }
            ],
            "src": "10188:345:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10667:168:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10677:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10689:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10700:2:38",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10685:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10685:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10677:4:38"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10719:9:38"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "10730:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10712:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10712:25:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10712:25:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10757:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10768:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10753:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10753:18:38"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "10777:6:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10785:42:38",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "10773:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10773:55:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10746:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10746:83:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10746:83:38"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10628:9:38",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "10639:6:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "10647:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10658:4:38",
                "type": ""
              }
            ],
            "src": "10538:297:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10921:170:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10967:16:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10976:1:38",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10979:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "10969:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10969:12:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10969:12:38"
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
                            "src": "10942:7:38"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10951:9:38"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "10938:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10938:23:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10963:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "10934:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10934:32:38"
                  },
                  "nodeType": "YulIf",
                  "src": "10931:52:38"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "10992:29:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11011:9:38"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "11005:5:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11005:16:38"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "10996:5:38",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "11055:5:38"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "11030:24:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11030:31:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11030:31:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11070:15:38",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "11080:5:38"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "11070:6:38"
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
                "src": "10887:9:38",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "10898:7:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "10910:6:38",
                "type": ""
              }
            ],
            "src": "10840:251:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11270:223:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11287:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11298:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11280:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11280:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11280:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11321:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11332:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11317:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11317:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11337:2:38",
                        "type": "",
                        "value": "33"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11310:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11310:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11310:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11360:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11371:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11356:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11356:18:38"
                      },
                      {
                        "hexValue": "6f6e6c7920636861726163746572206f776e6572732063616e207369676e2075",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11376:34:38",
                        "type": "",
                        "value": "only character owners can sign u"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11349:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11349:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11349:62:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11431:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11442:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11427:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11427:18:38"
                      },
                      {
                        "hexValue": "70",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11447:3:38",
                        "type": "",
                        "value": "p"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11420:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11420:31:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11420:31:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11460:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11472:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11483:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11468:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11468:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11460:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_83713b9b24cd23a0cf8b29a6781c7948915eec658b8b5ae22fbd763cc013108f__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11247:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "11261:4:38",
                "type": ""
              }
            ],
            "src": "11096:397:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11530:152:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11547:1:38",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11550:77:38",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11540:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11540:88:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11540:88:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11644:1:38",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11647:4:38",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11637:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11637:15:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11637:15:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11668:1:38",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11671:4:38",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "11661:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11661:15:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11661:15:38"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "11498:184:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11739:116:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11749:20:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "11764:1:38"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "11767:1:38"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "11760:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11760:9:38"
                  },
                  "variableNames": [
                    {
                      "name": "product",
                      "nodeType": "YulIdentifier",
                      "src": "11749:7:38"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11827:22:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "11829:16:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11829:18:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "11829:18:38"
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
                                "src": "11798:1:38"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "11791:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11791:9:38"
                          },
                          {
                            "arguments": [
                              {
                                "name": "y",
                                "nodeType": "YulIdentifier",
                                "src": "11805:1:38"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "product",
                                    "nodeType": "YulIdentifier",
                                    "src": "11812:7:38"
                                  },
                                  {
                                    "name": "x",
                                    "nodeType": "YulIdentifier",
                                    "src": "11821:1:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "div",
                                  "nodeType": "YulIdentifier",
                                  "src": "11808:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "11808:15:38"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nodeType": "YulIdentifier",
                              "src": "11802:2:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11802:22:38"
                          }
                        ],
                        "functionName": {
                          "name": "or",
                          "nodeType": "YulIdentifier",
                          "src": "11788:2:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11788:37:38"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "11781:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11781:45:38"
                  },
                  "nodeType": "YulIf",
                  "src": "11778:71:38"
                }
              ]
            },
            "name": "checked_mul_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "11718:1:38",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "11721:1:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "product",
                "nodeType": "YulTypedName",
                "src": "11727:7:38",
                "type": ""
              }
            ],
            "src": "11687:168:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11892:152:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11909:1:38",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11912:77:38",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11902:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11902:88:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11902:88:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12006:1:38",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12009:4:38",
                        "type": "",
                        "value": "0x12"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11999:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11999:15:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11999:15:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12030:1:38",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12033:4:38",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "12023:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12023:15:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12023:15:38"
                }
              ]
            },
            "name": "panic_error_0x12",
            "nodeType": "YulFunctionDefinition",
            "src": "11860:184:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12095:74:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "12118:22:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x12",
                            "nodeType": "YulIdentifier",
                            "src": "12120:16:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12120:18:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "12120:18:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "12115:1:38"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "12108:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12108:9:38"
                  },
                  "nodeType": "YulIf",
                  "src": "12105:35:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12149:14:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "12158:1:38"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "12161:1:38"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "12154:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12154:9:38"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "12149:1:38"
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
                "src": "12080:1:38",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "12083:1:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "12089:1:38",
                "type": ""
              }
            ],
            "src": "12049:120:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12222:77:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12232:16:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "12243:1:38"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "12246:1:38"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12239:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12239:9:38"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "12232:3:38"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "12271:22:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "12273:16:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12273:18:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "12273:18:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "12263:1:38"
                      },
                      {
                        "name": "sum",
                        "nodeType": "YulIdentifier",
                        "src": "12266:3:38"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "12260:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12260:10:38"
                  },
                  "nodeType": "YulIf",
                  "src": "12257:36:38"
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "12205:1:38",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "12208:1:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "12214:3:38",
                "type": ""
              }
            ],
            "src": "12174:125:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12478:180:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12495:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12506:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12488:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12488:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12488:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12529:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12540:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12525:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12525:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12545:2:38",
                        "type": "",
                        "value": "30"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12518:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12518:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12518:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12568:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12579:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12564:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12564:18:38"
                      },
                      {
                        "hexValue": "6f6e6c7920776561706f6e206f776e6572732063616e207369676e207570",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12584:32:38",
                        "type": "",
                        "value": "only weapon owners can sign up"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12557:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12557:60:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12557:60:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12626:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12638:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12649:2:38",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12634:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12634:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12626:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9abfea7a1838e9b21b5acd87e6e61e6c5f51e3820429df0deb6f66d62e149bcf__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "12455:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "12469:4:38",
                "type": ""
              }
            ],
            "src": "12304:354:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12712:79:38",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12722:17:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "12734:1:38"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "12737:1:38"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "12730:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12730:9:38"
                  },
                  "variableNames": [
                    {
                      "name": "diff",
                      "nodeType": "YulIdentifier",
                      "src": "12722:4:38"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "12763:22:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "12765:16:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12765:18:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "12765:18:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "diff",
                        "nodeType": "YulIdentifier",
                        "src": "12754:4:38"
                      },
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "12760:1:38"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "12751:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12751:11:38"
                  },
                  "nodeType": "YulIf",
                  "src": "12748:37:38"
                }
              ]
            },
            "name": "checked_sub_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "12694:1:38",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "12697:1:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "diff",
                "nodeType": "YulTypedName",
                "src": "12703:4:38",
                "type": ""
              }
            ],
            "src": "12663:128:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12828:152:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12845:1:38",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12848:77:38",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12838:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12838:88:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12838:88:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12942:1:38",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12945:4:38",
                        "type": "",
                        "value": "0x32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12935:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12935:15:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12935:15:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12966:1:38",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12969:4:38",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "12959:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12959:15:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12959:15:38"
                }
              ]
            },
            "name": "panic_error_0x32",
            "nodeType": "YulFunctionDefinition",
            "src": "12796:184:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13032:88:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "13063:22:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "13065:16:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13065:18:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "13065:18:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "13048:5:38"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13059:1:38",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "13055:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13055:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "13045:2:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13045:17:38"
                  },
                  "nodeType": "YulIf",
                  "src": "13042:43:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13094:20:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "13105:5:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13112:1:38",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13101:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13101:13:38"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "13094:3:38"
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
                "src": "13014:5:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "13024:3:38",
                "type": ""
              }
            ],
            "src": "12985:135:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13299:177:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13316:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13327:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13309:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13309:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13309:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13350:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13361:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13346:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13346:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13366:2:38",
                        "type": "",
                        "value": "27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13339:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13339:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13339:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13389:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13400:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13385:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13385:18:38"
                      },
                      {
                        "hexValue": "796f752061726520746865206f6e6c79206f6e6520706c61796572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "13405:29:38",
                        "type": "",
                        "value": "you are the only one player"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13378:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13378:57:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13378:57:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13444:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13456:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13467:2:38",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13452:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13452:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13444:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_06c7266a375a0b7849b454e6c13ab1c26263d1dc67aeec645a7b8f63d86a6ddf__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "13276:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "13290:4:38",
                "type": ""
              }
            ],
            "src": "13125:351:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13600:63:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13617:3:38"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "13622:6:38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13610:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13610:19:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13610:19:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13638:19:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13649:3:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13654:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13645:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13645:12:38"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "13638:3:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_packed_t_uint256__to_t_uint256__nonPadded_inplace_fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "13576:3:38",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "13581:6:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "13592:3:38",
                "type": ""
              }
            ],
            "src": "13481:182:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13706:74:38",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "13729:22:38",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x12",
                            "nodeType": "YulIdentifier",
                            "src": "13731:16:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13731:18:38"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "13731:18:38"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "13726:1:38"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "13719:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13719:9:38"
                  },
                  "nodeType": "YulIf",
                  "src": "13716:35:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13760:14:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "13769:1:38"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "13772:1:38"
                      }
                    ],
                    "functionName": {
                      "name": "mod",
                      "nodeType": "YulIdentifier",
                      "src": "13765:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13765:9:38"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "13760:1:38"
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
                "src": "13691:1:38",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "13694:1:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "13700:1:38",
                "type": ""
              }
            ],
            "src": "13668:112:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13959:225:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13976:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13987:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13969:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13969:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13969:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14010:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14021:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14006:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14006:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14026:2:38",
                        "type": "",
                        "value": "35"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13999:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13999:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13999:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14049:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14060:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14045:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14045:18:38"
                      },
                      {
                        "hexValue": "6e6f207573657220696e666f20616464656420746f207468697320636f6e7472",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14065:34:38",
                        "type": "",
                        "value": "no user info added to this contr"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14038:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14038:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14038:62:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14120:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14131:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14116:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14116:18:38"
                      },
                      {
                        "hexValue": "616374",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14136:5:38",
                        "type": "",
                        "value": "act"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14109:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14109:33:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14109:33:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14151:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14163:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14174:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14159:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14159:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14151:4:38"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_bc010e87ffcbd574c945fcc64e5ec3c6ef5855c19afee97d46badb7d489d7cdb__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "13936:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "13950:4:38",
                "type": ""
              }
            ],
            "src": "13785:399:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14363:228:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14380:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14391:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14373:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14373:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14373:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14414:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14425:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14410:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14410:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14430:2:38",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14403:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14403:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14403:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14453:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14464:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14449:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14449:18:38"
                      },
                      {
                        "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14469:34:38",
                        "type": "",
                        "value": "Ownable: new owner is the zero a"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14442:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14442:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14442:62:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14524:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14535:2:38",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14520:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14520:18:38"
                      },
                      {
                        "hexValue": "646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14540:8:38",
                        "type": "",
                        "value": "ddress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14513:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14513:36:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14513:36:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14558:27:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14570:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14581:3:38",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14566:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14566:19:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14558:4:38"
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
                "src": "14340:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "14354:4:38",
                "type": ""
              }
            ],
            "src": "14189:402:38"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14770:182:38",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14787:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14798:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14780:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14780:21:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14780:21:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14821:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14832:2:38",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14817:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14817:18:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14837:2:38",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14810:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14810:30:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14810:30:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14860:9:38"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14871:2:38",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14856:3:38"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14856:18:38"
                      },
                      {
                        "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14876:34:38",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14849:6:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14849:62:38"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14849:62:38"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14920:26:38",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14932:9:38"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14943:2:38",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14928:3:38"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14928:18:38"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14920:4:38"
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
                "src": "14747:9:38",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "14761:4:38",
                "type": ""
              }
            ],
            "src": "14596:356:38"
          }
        ]
      },
      "contents": "{\n    { }\n    function validator_revert_address(value)\n    {\n        if iszero(eq(value, and(value, 0xffffffffffffffffffffffffffffffffffffffff))) { revert(0, 0) }\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function allocate_memory(size) -> memPtr\n    {\n        memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(size, 31), not(31)))\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n    function abi_decode_bytes(offset, end) -> array\n    {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let _1 := calldataload(offset)\n        if gt(_1, 0xffffffffffffffff) { panic_error_0x41() }\n        let array_1 := allocate_memory(add(and(add(_1, 0x1f), not(31)), 0x20))\n        mstore(array_1, _1)\n        if gt(add(add(offset, _1), 0x20), end) { revert(0, 0) }\n        calldatacopy(add(array_1, 0x20), add(offset, 0x20), _1)\n        mstore(add(add(array_1, _1), 0x20), 0)\n        array := array_1\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3\n    {\n        if slt(sub(dataEnd, headStart), 128) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n        value2 := calldataload(add(headStart, 64))\n        let offset := calldataload(add(headStart, 96))\n        if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n        value3 := abi_decode_bytes(add(headStart, offset), dataEnd)\n    }\n    function abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffff00000000000000000000000000000000000000000000000000000000))\n    }\n    function abi_decode_tuple_t_uint256t_uint256(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := calldataload(headStart)\n        value1 := calldataload(add(headStart, 32))\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := calldataload(headStart)\n    }\n    function abi_decode_array_uint256_dyn(offset, end) -> array\n    {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let _1 := calldataload(offset)\n        let _2 := 0x20\n        if gt(_1, 0xffffffffffffffff) { panic_error_0x41() }\n        let _3 := shl(5, _1)\n        let dst := allocate_memory(add(_3, _2))\n        let dst_1 := dst\n        mstore(dst, _1)\n        dst := add(dst, _2)\n        let srcEnd := add(add(offset, _3), _2)\n        if gt(srcEnd, end) { revert(0, 0) }\n        let src := add(offset, _2)\n        for { } lt(src, srcEnd) { src := add(src, _2) }\n        {\n            mstore(dst, calldataload(src))\n            dst := add(dst, _2)\n        }\n        array := dst_1\n    }\n    function abi_decode_tuple_t_addresst_addresst_array$_t_uint256_$dyn_memory_ptrt_array$_t_uint256_$dyn_memory_ptrt_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3, value4\n    {\n        if slt(sub(dataEnd, headStart), 160) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n        let offset := calldataload(add(headStart, 64))\n        let _1 := 0xffffffffffffffff\n        if gt(offset, _1) { revert(0, 0) }\n        value2 := abi_decode_array_uint256_dyn(add(headStart, offset), dataEnd)\n        let offset_1 := calldataload(add(headStart, 96))\n        if gt(offset_1, _1) { revert(0, 0) }\n        value3 := abi_decode_array_uint256_dyn(add(headStart, offset_1), dataEnd)\n        let offset_2 := calldataload(add(headStart, 128))\n        if gt(offset_2, _1) { revert(0, 0) }\n        value4 := abi_decode_bytes(add(headStart, offset_2), dataEnd)\n    }\n    function abi_encode_struct_Token(value, pos)\n    {\n        mstore(pos, and(mload(value), 0xffffffffffffffffffffffffffffffffffffffff))\n        mstore(add(pos, 0x20), mload(add(value, 0x20)))\n    }\n    function abi_encode_struct_UserInfo(value, pos)\n    {\n        mstore(pos, mload(value))\n        let memberValue0 := mload(add(value, 0x20))\n        abi_encode_struct_Token(memberValue0, add(pos, 0x20))\n        let memberValue0_1 := mload(add(value, 0x40))\n        abi_encode_struct_Token(memberValue0_1, add(pos, 0x60))\n        mstore(add(pos, 0xa0), and(mload(add(value, 0x60)), 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_encode_tuple_t_array$_t_struct$_UserInfo_$10819_memory_ptr_$dyn_memory_ptr__to_t_array$_t_struct$_UserInfo_$10819_memory_ptr_$dyn_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        let tail_1 := add(headStart, _1)\n        mstore(headStart, _1)\n        let pos := tail_1\n        let length := mload(value0)\n        mstore(tail_1, length)\n        pos := add(headStart, 64)\n        let srcPtr := add(value0, _1)\n        let i := 0\n        for { } lt(i, length) { i := add(i, 1) }\n        {\n            abi_encode_struct_UserInfo(mload(srcPtr), pos)\n            pos := add(pos, 0xc0)\n            srcPtr := add(srcPtr, _1)\n        }\n        tail := pos\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n    }\n    function abi_encode_tuple_t_struct$_UserInfo_$10819_memory_ptr__to_t_struct$_UserInfo_$10819_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 192)\n        abi_encode_struct_UserInfo(value0, headStart)\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256t_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3, value4\n    {\n        if slt(sub(dataEnd, headStart), 160) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n        value2 := calldataload(add(headStart, 64))\n        value3 := calldataload(add(headStart, 96))\n        let offset := calldataload(add(headStart, 128))\n        if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n        value4 := abi_decode_bytes(add(headStart, offset), dataEnd)\n    }\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n        mstore(add(headStart, 32), value1)\n    }\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := mload(headStart)\n    }\n    function abi_encode_tuple_t_stringliteral_b0fe3178bf6775920488275d1750f1843a0b30545c0744042557cc3e471381af__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"only weapon owners can update us\")\n        mstore(add(headStart, 96), \"erInfo\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_uint256_t_uint256_t_uint256_t_address__to_t_uint256_t_uint256_t_uint256_t_address__fromStack_reversed(headStart, value3, value2, value1, value0) -> tail\n    {\n        tail := add(headStart, 128)\n        mstore(headStart, value0)\n        mstore(add(headStart, 32), value1)\n        mstore(add(headStart, 64), value2)\n        mstore(add(headStart, 96), and(value3, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_encode_tuple_t_stringliteral_31a6f823e3ae97fdcda2fc01a3b621cb6a86a2be5567ef06565daa4942f7e905__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 34)\n        mstore(add(headStart, 64), \"you need to rank up for the rewa\")\n        mstore(add(headStart, 96), \"rd\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_3d6db16898e6b3978bfbffd34d2acf7b0649024a67bd30cf662af09bf59cb8e1__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 40)\n        mstore(add(headStart, 64), \"you are not the user for the ran\")\n        mstore(add(headStart, 96), \"k reward\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_address_payable_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed(headStart, value2, value1, value0) -> tail\n    {\n        tail := add(headStart, 96)\n        let _1 := 0xffffffffffffffffffffffffffffffffffffffff\n        mstore(headStart, and(value0, _1))\n        mstore(add(headStart, 32), and(value1, _1))\n        mstore(add(headStart, 64), value2)\n    }\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        if iszero(eq(value, iszero(iszero(value)))) { revert(0, 0) }\n        value0 := value\n    }\n    function abi_encode_tuple_t_stringliteral_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 21)\n        mstore(add(headStart, 64), \"IncreaseContract Fail\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, value0)\n        mstore(add(headStart, 32), and(value1, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_decode_tuple_t_address_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        validator_revert_address(value)\n        value0 := value\n    }\n    function abi_encode_tuple_t_stringliteral_83713b9b24cd23a0cf8b29a6781c7948915eec658b8b5ae22fbd763cc013108f__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 33)\n        mstore(add(headStart, 64), \"only character owners can sign u\")\n        mstore(add(headStart, 96), \"p\")\n        tail := add(headStart, 128)\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        product := mul(x, y)\n        if iszero(or(iszero(x), eq(y, div(product, x)))) { panic_error_0x11() }\n    }\n    function panic_error_0x12()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n    function checked_div_t_uint256(x, y) -> r\n    {\n        if iszero(y) { panic_error_0x12() }\n        r := div(x, y)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        sum := add(x, y)\n        if gt(x, sum) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_stringliteral_9abfea7a1838e9b21b5acd87e6e61e6c5f51e3820429df0deb6f66d62e149bcf__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 30)\n        mstore(add(headStart, 64), \"only weapon owners can sign up\")\n        tail := add(headStart, 96)\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        diff := sub(x, y)\n        if gt(diff, x) { panic_error_0x11() }\n    }\n    function panic_error_0x32()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0)) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n    function abi_encode_tuple_t_stringliteral_06c7266a375a0b7849b454e6c13ab1c26263d1dc67aeec645a7b8f63d86a6ddf__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 27)\n        mstore(add(headStart, 64), \"you are the only one player\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_packed_t_uint256__to_t_uint256__nonPadded_inplace_fromStack_reversed(pos, value0) -> end\n    {\n        mstore(pos, value0)\n        end := add(pos, 32)\n    }\n    function mod_t_uint256(x, y) -> r\n    {\n        if iszero(y) { panic_error_0x12() }\n        r := mod(x, y)\n    }\n    function abi_encode_tuple_t_stringliteral_bc010e87ffcbd574c945fcc64e5ec3c6ef5855c19afee97d46badb7d489d7cdb__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 35)\n        mstore(add(headStart, 64), \"no user info added to this contr\")\n        mstore(add(headStart, 96), \"act\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"Ownable: new owner is the zero a\")\n        mstore(add(headStart, 96), \"ddress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"Ownable: caller is not the owner\")\n        tail := add(headStart, 96)\n    }\n}",
      "id": 38,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "375:6977:34:-:0;;;510:6;491:25;;544:1;522:23;;574:1;551:24;;603:1;581:23;;764:367;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;936:32:0;719:10:19;936:18:0;:32::i;:::-;948::34;958:21;948:9;:32::i;:::-;-1:-1:-1;990:18:34;:40;;-1:-1:-1;;;;;990:40:34;;;-1:-1:-1;;;;;;990:40:34;;;;;;;1040:19;:42;;;;;;;;;;;;;;;1092:14;:32;;;;;;;;;;;-1:-1:-1;375:6977:34;;2433:187:0;2506:16;2525:6;;-1:-1:-1;;;;;2541:17:0;;;-1:-1:-1;;;;;;2541:17:0;;;;;;2573:40;;2525:6;;;;;;;2573:40;;2506:16;2573:40;2496:124;2433:187;:::o;1992:191:34:-;2061:4;1094:13:0;:11;:13::i;:::-;-1:-1:-1;;;;;2085:29:34;::::1;2077:38;;;::::0;::::1;;-1:-1:-1::0;2125:5:34::1;:30:::0;;-1:-1:-1;;;;;2125:30:34;::::1;-1:-1:-1::0;;;;;;2125:30:34;;::::1;;::::0;;;1992:191;;;:::o;1359:130:0:-;1247:7;1273:6;-1:-1:-1;;;;;1273:6:0;719:10:19;1422:23:0;1414:68;;;;-1:-1:-1;;;1414:68:0;;1019:2:38;1414:68:0;;;1001:21:38;;;1038:18;;;1031:30;1097:34;1077:18;;;1070:62;1149:18;;1414:68:0;;;;;;;;1359:130::o;14:131:38:-;-1:-1:-1;;;;;89:31:38;;79:42;;69:70;;135:1;132;125:12;69:70;14:131;:::o;150:662::-;255:6;263;271;279;332:3;320:9;311:7;307:23;303:33;300:53;;;349:1;346;339:12;300:53;381:9;375:16;400:31;425:5;400:31;:::i;:::-;500:2;485:18;;479:25;450:5;;-1:-1:-1;513:33:38;479:25;513:33;:::i;:::-;617:2;602:18;;596:25;565:7;;-1:-1:-1;630:33:38;596:25;630:33;:::i;:::-;734:2;719:18;;713:25;682:7;;-1:-1:-1;747:33:38;713:25;747:33;:::i;:::-;150:662;;;;-1:-1:-1;150:662:38;;-1:-1:-1;;150:662:38:o;817:356::-;375:6977:34;;;;;;",
  "deployedSourceMap": "375:6977:34:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7197:153;;;;;;:::i;:::-;7313:30;7197:153;;;;;;;;;;2021:66:38;2009:79;;;1991:98;;1979:2;1964:18;7197:153:34;;;;;;;;3524:438;;;;;;:::i;:::-;;:::i;:::-;;4686:1036;;;;;;:::i;:::-;;:::i;3100:418::-;;;;;;:::i;:::-;;:::i;1831:101:0:-;;;:::i;1201:85::-;1247:7;1273:6;1201:85;;-1:-1:-1;;;;;1273:6:0;;;2499:74:38;;2487:2;2472:18;1201:85:0;2353:226:38;4525:155:34;;;;;;:::i;:::-;;:::i;2189:905::-;;;;;;:::i;:::-;;:::i;6999:192::-;;;;;;:::i;:::-;7148:36;6999:192;;;;;;;;6411:412;;;:::i;:::-;;;;;;;:::i;5728:475::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;6209:196::-;;;;;;:::i;:::-;;:::i;3968:551::-;;;;;;:::i;:::-;;:::i;:::-;;;6565:25:38;;;6553:2;6538:18;3968:551:34;6419:177:38;6829:164:34;;;;;;:::i;:::-;6955:31;6829:164;;;;;;;;2081:198:0;;;;;;:::i;:::-;;:::i;3524:438:34:-;3637:19;;3629:61;;-1:-1:-1;;;3629:61:34;;3668:10;3629:61;;;7514:74:38;7604:18;;;7597:34;;;-1:-1:-1;;;;;3637:19:34;;;;3629:38;;7487:18:38;;3629:61:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3692:1;3629:64;3621:116;;;;-1:-1:-1;;;3621:116:34;;8033:2:38;3621:116:34;;;8015:21:38;8072:2;8052:18;;;8045:30;8111:34;8091:18;;;8084:62;8182:8;8162:18;;;8155:36;8208:19;;3621:116:34;;;;;;;;;3748:19;;;;:10;:19;;;;;;;;;:39;;;:51;;;3840:37;;;3815:140;;8469:25:38;;;8510:18;;;8503:34;;;8553:18;;;8546:34;;;3935:10:34;8611:2:38;8596:18;;8589:83;3815:140:34;;8456:3:38;8441:19;3815:140:34;;;;;;;;3524:438;;:::o;4686:1036::-;4891:1;4885:5;:7;:16;;;;;4900:1;4894:5;:7;4885:16;4877:64;;;;-1:-1:-1;;;4877:64:34;;8885:2:38;4877:64:34;;;8867:21:38;8924:2;8904:18;;;8897:30;8963:34;8943:18;;;8936:62;9034:4;9014:18;;;9007:32;9056:19;;4877:64:34;8683:398:38;4877:64:34;4959:19;;;;:10;:19;;;;;:24;;;-1:-1:-1;;;;;4959:24:34;4987:10;4959:38;4951:92;;;;-1:-1:-1;;;4951:92:34;;9288:2:38;4951:92:34;;;9270:21:38;9327:2;9307:18;;;9300:30;9366:34;9346:18;;;9339:62;9437:10;9417:18;;;9410:38;9465:19;;4951:92:34;9086:404:38;4951:92:34;5062:14;5093:5;5100:1;5093:8;5090:288;;-1:-1:-1;5125:11:34;;;5164:1;5150:15;;;5090:288;;;5193:5;5200:1;5193:8;5190:188;;-1:-1:-1;5225:12:34;;;5266:1;5251:16;;;5190:188;;;5295:5;5302:1;5295:8;5292:86;;-1:-1:-1;5327:11:34;;;5366:1;5352:15;;;5292:86;5403:5;;5448:14;;5403:116;;;;;-1:-1:-1;;;;;5448:14:34;;;5403:116;;;9766:34:38;5484:4:34;9816:18:38;;;9809:43;9868:18;;;9861:34;;;5388:12:34;;5403:5;;;;;:31;;9678:18:38;;5403:116:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5388:131;;5537:7;5529:41;;;;-1:-1:-1;;;5529:41:34;;10390:2:38;5529:41:34;;;10372:21:38;10429:2;10409:18;;;10402:30;10468:23;10448:18;;;10441:51;10509:18;;5529:41:34;10188:345:38;5529:41:34;5580:5;;5599:14;;5580:54;;;;;-1:-1:-1;;;;;5599:14:34;;;5580:54;;;9766:34:38;5615:10:34;9816:18:38;;;9809:43;9868:18;;;9861:34;;;5580:5:34;;;:18;;9678::38;;5580:54:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;5650:64:34;;;10712:25:38;;;5694:10:34;10768:2:38;10753:18;;10746:83;5650:64:34;;10685:18:38;5650:64:34;;;;;;;4770:952;;4686:1036;;:::o;3100:418::-;3222:18;;3215:43;;-1:-1:-1;;;3215:43:34;;;;;6565:25:38;;;-1:-1:-1;;;;;3222:18:34;;;;3215:34;;6538:18:38;;3215:43:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;3201:57:34;:10;-1:-1:-1;;;;;3201:57:34;;3193:104;;;;-1:-1:-1;;;3193:104:34;;11298:2:38;3193:104:34;;;11280:21:38;11337:2;11317:18;;;11310:30;11376:34;11356:18;;;11349:62;-1:-1:-1;;;11427:18:38;;;11420:31;11468:19;;3193:104:34;11096:397:38;3193:104:34;3308:19;;;;:10;:19;;;;;;;;;:37;;;:47;;;3417:39;;;3371:140;;8469:25:38;;;8510:18;;;8503:34;8553:18;;;8546:34;;;3491:10:34;8611:2:38;8596:18;;8589:83;3371:140:34;;8456:3:38;8441:19;3371:140:34;8238:440:38;1831:101:0;1094:13;:11;:13::i;:::-;1895:30:::1;1922:1;1895:18;:30::i;:::-;1831:101::o:0;4525:155:34:-;4602:2;4593:8;:6;4600:1;4593:8;:::i;:::-;:11;;;;:::i;:::-;4580;;:24;;;;;;;:::i;:::-;;;;-1:-1:-1;4637:2:34;;-1:-1:-1;4628:8:34;:6;4635:1;4628:8;:::i;:::-;:11;;;;:::i;:::-;4614:12;;:25;;;;;;;:::i;:::-;;;;-1:-1:-1;4671:2:34;;-1:-1:-1;4662:8:34;:6;4669:1;4662:8;:::i;:::-;:11;;;;:::i;:::-;4649;;:24;;;;;;;:::i;:::-;;;;-1:-1:-1;;;4525:155:34:o;2189:905::-;2309:18;;2302:43;;-1:-1:-1;;;2302:43:34;;;;;6565:25:38;;;-1:-1:-1;;;;;2309:18:34;;;;2302:34;;6538:18:38;;2302:43:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;2288:57:34;:10;-1:-1:-1;;;;;2288:57:34;;2280:104;;;;-1:-1:-1;;;2280:104:34;;11298:2:38;2280:104:34;;;11280:21:38;11337:2;11317:18;;;11310:30;11376:34;11356:18;;;11349:62;-1:-1:-1;;;11427:18:38;;;11420:31;11468:19;;2280:104:34;11096:397:38;2280:104:34;2410:19;;2402:61;;-1:-1:-1;;;2402:61:34;;2441:10;2402:61;;;7514:74:38;7604:18;;;7597:34;;;-1:-1:-1;;;;;2410:19:34;;;;2402:38;;7487:18:38;;2402:61:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2465:1;2402:64;2394:108;;;;-1:-1:-1;;;2394:108:34;;12506:2:38;2394:108:34;;;12488:21:38;12545:2;12525:18;;;12518:30;12584:32;12564:18;;;12557:60;12634:18;;2394:108:34;12304:354:38;2394:108:34;2513:20;:8;1032:19:20;;1050:1;1032:19;;;945:123;2513:20:34;2543:14;2560:18;:8;918:14:20;;827:112;2560:18:34;2610:352;;;;;;;;;;;;2672:105;;;;;;;2710:18;;-1:-1:-1;;;;;2710:18:34;;;2672:105;;2610:352;2672:105;;;;;;2610:352;;;;;;2804:108;;;;;;;2842:19;;;;2804:108;;;;;;;;2610:352;;;;;;2940:10;2610:352;;;;;;;-1:-1:-1;2589:18:34;;;:10;:18;;;;;:373;;;;;;;;2710:18;2589:373;;;;;;;-1:-1:-1;;2589:373:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2978:109;;8469:25:38;;;8510:18;;;8503:34;;;8553:18;;;8546:34;;;8596:18;;8589:83;;;;2610:352:34;;-1:-1:-1;2978:109:34;;8441:19:38;2978:109:34;;;;;;;2270:824;2189:905;;:::o;6411:412::-;6454:17;6483:14;6500:18;:8;918:14:20;;827:112;6500:18:34;6483:35;;6528:23;6570:9;6555:25;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;-1:-1:-1;6528:52:34;-1:-1:-1;6605:1:34;6591:204;6613:9;6608:1;:14;6591:204;;6643:14;6660:13;;;:10;:13;;;;;;;;:20;6725:21;;;;;;;6760:24;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;6760:24:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6725:21;6760:24;:5;;6766:3;;6671:1;6766:3;:::i;:::-;6760:10;;;;;;;;:::i;:::-;;;;;;:24;;;;6629:166;;6624:3;;;;;:::i;:::-;;;;6591:204;;;-1:-1:-1;6811:5:34;6411:412;-1:-1:-1;;6411:412:34:o;5728:475::-;5783:15;;:::i;:::-;5818:8;918:14:20;5838:1:34;5818:21;5810:61;;;;-1:-1:-1;;;5810:61:34;;13327:2:38;5810:61:34;;;13309:21:38;13366:2;13346:18;;;13339:30;13405:29;13385:18;;;13378:57;13452:18;;5810:61:34;13125:351:38;5810:61:34;5881:14;5898:18;:8;918:14:20;;827:112;5898:18:34;5881:35;;5926:9;5995;5973:15;5956:33;;;;;;13610:19:38;;13654:2;13645:12;;13481:182;5956:33:34;;;;;;;;;;;;;5946:44;;;;;;5938:53;;:67;;;;:::i;:::-;5926:79;-1:-1:-1;;;;;;6018:29:34;;:10;:15;6029:3;5926:79;6031:1;6029:3;:::i;:::-;6018:15;;;;;;;;;;;-1:-1:-1;6018:15:34;:20;;;-1:-1:-1;;;;;6018:20:34;:29;6015:182;;6062:24;6090:10;6062:24;6101:3;:1;6103;6101:3;:::i;:::-;6090:15;;;;;;;;;;;;;;-1:-1:-1;6090:15:34;6062:43;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;6062:43:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5728:475;-1:-1:-1;;;;;5728:475:34:o;6015:182::-;6170:16;6180:5;6170:9;:16::i;:::-;6163:23;5728:475;-1:-1:-1;;;;5728:475:34:o;6209:196::-;6266:15;;:::i;:::-;6301:8;918:14:20;6321:1:34;6301:21;6293:69;;;;-1:-1:-1;;;6293:69:34;;13987:2:38;6293:69:34;;;13969:21:38;14026:2;14006:18;;;13999:30;14065:34;14045:18;;;14038:62;14136:5;14116:18;;;14109:33;14159:19;;6293:69:34;13785:399:38;6293:69:34;-1:-1:-1;6379:19:34;;;;:10;:19;;;;;;;;;6372:26;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;6372:26:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6209:196::o;3968:551::-;4039:7;;4261:1;4254:8;;;4251:239;;-1:-1:-1;4286:11:34;;4251:239;;;4325:5;4332:1;4325:8;4322:168;;-1:-1:-1;4357:12:34;;4322:168;;;4397:5;4404:1;4397:8;4394:96;;-1:-1:-1;4429:11:34;;4394:96;;;-1:-1:-1;4478:1:34;4394:96;4506:6;3968:551;-1:-1:-1;;3968:551:34:o;2081:198:0:-;1094:13;:11;:13::i;:::-;-1:-1:-1;;;;;2169:22:0;::::1;2161:73;;;::::0;-1:-1:-1;;;2161:73:0;;14391:2:38;2161:73:0::1;::::0;::::1;14373:21:38::0;14430:2;14410:18;;;14403:30;14469:34;14449:18;;;14442:62;14540:8;14520:18;;;14513:36;14566:19;;2161:73:0::1;14189:402:38::0;2161:73:0::1;2244:28;2263:8;2244:18;:28::i;:::-;2081:198:::0;:::o;1359:130::-;1247:7;1273:6;-1:-1:-1;;;;;1273:6:0;719:10:19;1422:23:0;1414:68;;;;-1:-1:-1;;;1414:68:0;;14798:2:38;1414:68:0;;;14780:21:38;;;14817:18;;;14810:30;14876:34;14856:18;;;14849:62;14928:18;;1414:68:0;14596:356:38;2433:187:0;2506:16;2525:6;;-1:-1:-1;;;;;2541:17:0;;;-1:-1:-1;;2541:17:0;;;;;;2573:40;;2525:6;;;;;;;2573:40;;2506:16;2573:40;2496:124;2433:187;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:154:38:-;-1:-1:-1;;;;;93:5:38;89:54;82:5;79:65;69:93;;158:1;155;148:12;173:184;-1:-1:-1;;;222:1:38;215:88;322:4;319:1;312:15;346:4;343:1;336:15;362:275;433:2;427:9;498:2;479:13;;-1:-1:-1;;475:27:38;463:40;;533:18;518:34;;554:22;;;515:62;512:88;;;580:18;;:::i;:::-;616:2;609:22;362:275;;-1:-1:-1;362:275:38:o;642:530::-;684:5;737:3;730:4;722:6;718:17;714:27;704:55;;755:1;752;745:12;704:55;791:6;778:20;817:18;813:2;810:26;807:52;;;839:18;;:::i;:::-;883:55;926:2;907:13;;-1:-1:-1;;903:27:38;932:4;899:38;883:55;:::i;:::-;963:2;954:7;947:19;1009:3;1002:4;997:2;989:6;985:15;981:26;978:35;975:55;;;1026:1;1023;1016:12;975:55;1091:2;1084:4;1076:6;1072:17;1065:4;1056:7;1052:18;1039:55;1139:1;1114:16;;;1132:4;1110:27;1103:38;;;;1118:7;642:530;-1:-1:-1;;;642:530:38:o;1177:665::-;1272:6;1280;1288;1296;1349:3;1337:9;1328:7;1324:23;1320:33;1317:53;;;1366:1;1363;1356:12;1317:53;1405:9;1392:23;1424:31;1449:5;1424:31;:::i;:::-;1474:5;-1:-1:-1;1531:2:38;1516:18;;1503:32;1544:33;1503:32;1544:33;:::i;:::-;1596:7;-1:-1:-1;1650:2:38;1635:18;;1622:32;;-1:-1:-1;1705:2:38;1690:18;;1677:32;1732:18;1721:30;;1718:50;;;1764:1;1761;1754:12;1718:50;1787:49;1828:7;1819:6;1808:9;1804:22;1787:49;:::i;:::-;1777:59;;;1177:665;;;;;;;:::o;2100:248::-;2168:6;2176;2229:2;2217:9;2208:7;2204:23;2200:32;2197:52;;;2245:1;2242;2235:12;2197:52;-1:-1:-1;;2268:23:38;;;2338:2;2323:18;;;2310:32;;-1:-1:-1;2100:248:38:o;2584:180::-;2643:6;2696:2;2684:9;2675:7;2671:23;2667:32;2664:52;;;2712:1;2709;2702:12;2664:52;-1:-1:-1;2735:23:38;;2584:180;-1:-1:-1;2584:180:38:o;2769:712::-;2823:5;2876:3;2869:4;2861:6;2857:17;2853:27;2843:55;;2894:1;2891;2884:12;2843:55;2930:6;2917:20;2956:4;2979:18;2975:2;2972:26;2969:52;;;3001:18;;:::i;:::-;3047:2;3044:1;3040:10;3070:28;3094:2;3090;3086:11;3070:28;:::i;:::-;3132:15;;;3202;;;3198:24;;;3163:12;;;;3234:15;;;3231:35;;;3262:1;3259;3252:12;3231:35;3298:2;3290:6;3286:15;3275:26;;3310:142;3326:6;3321:3;3318:15;3310:142;;;3392:17;;3380:30;;3343:12;;;;3430;;;;3310:142;;;3470:5;2769:712;-1:-1:-1;;;;;;;2769:712:38:o;3486:1071::-;3640:6;3648;3656;3664;3672;3725:3;3713:9;3704:7;3700:23;3696:33;3693:53;;;3742:1;3739;3732:12;3693:53;3781:9;3768:23;3800:31;3825:5;3800:31;:::i;:::-;3850:5;-1:-1:-1;3907:2:38;3892:18;;3879:32;3920:33;3879:32;3920:33;:::i;:::-;3972:7;-1:-1:-1;4030:2:38;4015:18;;4002:32;4053:18;4083:14;;;4080:34;;;4110:1;4107;4100:12;4080:34;4133:61;4186:7;4177:6;4166:9;4162:22;4133:61;:::i;:::-;4123:71;;4247:2;4236:9;4232:18;4219:32;4203:48;;4276:2;4266:8;4263:16;4260:36;;;4292:1;4289;4282:12;4260:36;4315:63;4370:7;4359:8;4348:9;4344:24;4315:63;:::i;:::-;4305:73;;4431:3;4420:9;4416:19;4403:33;4387:49;;4461:2;4451:8;4448:16;4445:36;;;4477:1;4474;4467:12;4445:36;;4500:51;4543:7;4532:8;4521:9;4517:24;4500:51;:::i;:::-;4490:61;;;3486:1071;;;;;;;;:::o;5197:708::-;5422:2;5474:21;;;5544:13;;5447:18;;;5566:22;;;5393:4;;5422:2;5645:15;;;;5619:2;5604:18;;;5393:4;5688:191;5702:6;5699:1;5696:13;5688:191;;;5751:46;5793:3;5784:6;5778:13;4836:12;;4824:25;;4895:4;4884:16;;;4878:23;4637:12;;-1:-1:-1;;;;;4633:61:38;4948:14;;;4621:74;4733:16;;;4727:23;4711:14;;;4704:47;-1:-1:-1;5011:4:38;5000:16;;4994:23;4637:12;;-1:-1:-1;;;;;4633:61:38;5075:4;5066:14;;4621:74;4744:4;4733:16;;4727:23;4711:14;;;4704:47;-1:-1:-1;5134:4:38;5123:16;5117:23;-1:-1:-1;;;;;5113:72:38;5106:4;5097:14;;;;5090:96;4762:430;5751:46;5854:15;;;;5826:4;5817:14;;;;;5724:1;5717:9;5688:191;;;-1:-1:-1;5896:3:38;;5197:708;-1:-1:-1;;;;;;5197:708:38:o;5910:247::-;5969:6;6022:2;6010:9;6001:7;5997:23;5993:32;5990:52;;;6038:1;6035;6028:12;5990:52;6077:9;6064:23;6096:31;6121:5;6096:31;:::i;:::-;6146:5;5910:247;-1:-1:-1;;;5910:247:38:o;6162:252::-;6350:3;6335:19;;6363:45;6339:9;6390:6;4836:12;;4824:25;;4895:4;4884:16;;;4878:23;4637:12;;-1:-1:-1;;;;;4633:61:38;4948:14;;;4621:74;4733:16;;;4727:23;4711:14;;;4704:47;-1:-1:-1;5011:4:38;5000:16;;4994:23;4637:12;;-1:-1:-1;;;;;4633:61:38;5075:4;5066:14;;4621:74;4744:4;4733:16;;4727:23;4711:14;;;4704:47;-1:-1:-1;5134:4:38;5123:16;5117:23;-1:-1:-1;;;;;5113:72:38;5106:4;5097:14;;;;5090:96;4762:430;6601:734;6705:6;6713;6721;6729;6737;6790:3;6778:9;6769:7;6765:23;6761:33;6758:53;;;6807:1;6804;6797:12;6758:53;6846:9;6833:23;6865:31;6890:5;6865:31;:::i;:::-;6915:5;-1:-1:-1;6972:2:38;6957:18;;6944:32;6985:33;6944:32;6985:33;:::i;:::-;7037:7;-1:-1:-1;7091:2:38;7076:18;;7063:32;;-1:-1:-1;7142:2:38;7127:18;;7114:32;;-1:-1:-1;7197:3:38;7182:19;;7169:33;7225:18;7214:30;;7211:50;;;7257:1;7254;7247:12;7211:50;7280:49;7321:7;7312:6;7301:9;7297:22;7280:49;:::i;7642:184::-;7712:6;7765:2;7753:9;7744:7;7740:23;7736:32;7733:52;;;7781:1;7778;7771:12;7733:52;-1:-1:-1;7804:16:38;;7642:184;-1:-1:-1;7642:184:38:o;9906:277::-;9973:6;10026:2;10014:9;10005:7;10001:23;9997:32;9994:52;;;10042:1;10039;10032:12;9994:52;10074:9;10068:16;10127:5;10120:13;10113:21;10106:5;10103:32;10093:60;;10149:1;10146;10139:12;10840:251;10910:6;10963:2;10951:9;10942:7;10938:23;10934:32;10931:52;;;10979:1;10976;10969:12;10931:52;11011:9;11005:16;11030:31;11055:5;11030:31;:::i;11498:184::-;-1:-1:-1;;;11547:1:38;11540:88;11647:4;11644:1;11637:15;11671:4;11668:1;11661:15;11687:168;11760:9;;;11791;;11808:15;;;11802:22;;11788:37;11778:71;;11829:18;;:::i;11860:184::-;-1:-1:-1;;;11909:1:38;11902:88;12009:4;12006:1;11999:15;12033:4;12030:1;12023:15;12049:120;12089:1;12115;12105:35;;12120:18;;:::i;:::-;-1:-1:-1;12154:9:38;;12049:120::o;12174:125::-;12239:9;;;12260:10;;;12257:36;;;12273:18;;:::i;12663:128::-;12730:9;;;12751:11;;;12748:37;;;12765:18;;:::i;12796:184::-;-1:-1:-1;;;12845:1:38;12838:88;12945:4;12942:1;12935:15;12969:4;12966:1;12959:15;12985:135;13024:3;13045:17;;;13042:43;;13065:18;;:::i;:::-;-1:-1:-1;13112:1:38;13101:13;;12985:135::o;13668:112::-;13700:1;13726;13716:35;;13731:18;;:::i;:::-;-1:-1:-1;13765:9:38;;13668:112::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.7;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/token/ERC1155/ERC1155.sol\";\nimport \"@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\nimport \"@openzeppelin/contracts/utils/Counters.sol\";\nimport \"./JMToken.sol\";\n\ncontract MapleUser is Ownable {\n    using Counters for Counters.Counter;\n    Counters.Counter private _userIds;\n    uint256 decimals = 10**18;\n    uint256 firstReward = 0;\n    uint256 secondReward = 0;\n    uint256 thirdReward = 0;\n\n    JMToken private token;\n    address payable private treasuryWallet;\n    address private nftContractAddress;\n    address private itemContractAddress;\n\n    constructor (\n        address _tokenContractAddress,\n        address _nftContractAddress,\n        address _itemContractAddress,\n        address payable _treasuryWallet\n    ) {\n        _setToken(_tokenContractAddress);\n        nftContractAddress = _nftContractAddress;\n        itemContractAddress = _itemContractAddress;\n        treasuryWallet = _treasuryWallet;\n    }\n\n    mapping(uint256 => UserInfo) idUserInfo;\n\n    struct Token {\n        address contractAddr;\n        uint256 tokenId;\n    }\n\n    struct UserInfo {\n        uint256 userId;\n        Token charToken;\n        Token weaponToken;\n        address payable user;\n    }\n\n    event UserCreated (\n        uint256 charId,\n        uint256 weaponId,\n        uint256 userId,\n        address user\n    );\n\n    event UserUpdated (\n        uint256 charId,\n        uint256 weaponId,\n        uint256 userId,\n        address user\n    );\n\n    event UserMatching (\n        uint256 charId,\n        uint256 weaponId,\n        uint256 userId,\n        address user\n    );\n\n    event UserDeleated (\n        uint256 charId,\n        uint256 weaponId,\n        uint256 userId,\n        address user\n    );\n\n    event rewardTransferred (\n        uint256 reward,\n        address user\n    );\n\n    function _setToken(address _tokenAddress) private onlyOwner returns (bool) {\n        require(_tokenAddress != address(0x0));\n        token = JMToken(_tokenAddress);\n        return true;\n    }\n\n    function signUp(\n        uint256 _charId,\n        uint256 _weaponId\n    ) public {\n        require(msg.sender == ERC721(nftContractAddress).ownerOf(_charId),  \"only character owners can sign up\");\n        require(ERC1155(itemContractAddress).balanceOf(msg.sender, _weaponId)!=0,  \"only weapon owners can sign up\");\n\n        _userIds.increment();\n        uint256 userId = _userIds.current();\n\n        idUserInfo[userId] = UserInfo({\n            userId: userId,\n            charToken: Token({\n                contractAddr: nftContractAddress,\n                tokenId: _charId\n            }),\n            weaponToken: Token({\n                contractAddr: itemContractAddress,\n                tokenId: _weaponId\n            }),\n            user: payable(msg.sender)\n        });\n\n        emit UserCreated(\n            _charId,\n            _weaponId,\n            userId,\n            msg.sender\n        );\n    }\n\n    function updateChar(\n        uint256 _charId,\n        uint256 _userId\n    ) public {\n        require(msg.sender == ERC721(nftContractAddress).ownerOf(_charId),  \"only character owners can sign up\");\n\n        idUserInfo[_userId].charToken.tokenId = _charId;\n\n        emit UserUpdated(\n            _charId,\n            idUserInfo[_userId].weaponToken.tokenId,\n            _userId,\n            msg.sender\n        );\n    }\n\n    function updateWeapon(\n        uint256 _weaponId,\n        uint256 _userId\n    ) public {\n        require(ERC1155(itemContractAddress).balanceOf(msg.sender, _weaponId)!=0,  \"only weapon owners can update userInfo\");\n\n        idUserInfo[_userId].weaponToken.tokenId = _weaponId;\n\n        emit UserUpdated(\n            idUserInfo[_userId].charToken.tokenId,\n            _weaponId,\n            _userId,\n            msg.sender\n        );\n    }\n\n    function checkReward(\n        uint256 _rank\n    ) public view returns (uint256) {\n        //TODO: 보안을 위해 컨트랙트 내에서 랭크를 저장하고 불러와야 함.\n        // require(_rank<4,  \"you need to rank up for the reward\");\n        uint256 reward = 0;\n        if(_rank==1){\n            reward = firstReward;\n        }\n        else if(_rank==2){\n            reward = secondReward;\n        }\n        else if(_rank==3){\n            reward = thirdReward;\n        }else{\n            reward = 0;\n        }\n        return reward;\n    }\n\n    function setRankReward(uint256 reward) public{\n        firstReward+=reward*5/10;\n        secondReward+=reward*3/10;\n        thirdReward+=reward*2/10;\n    }\n\n    function requestReward(\n        uint256 _rank,\n        uint256 _userId\n    ) public {\n        //TODO: 보안을 위해 컨트랙트 내에서 랭크를 저장하고 불러와야 함.\n        require(_rank<4&&_rank>0,  \"you need to rank up for the reward\");\n        require(idUserInfo[_userId].user == msg.sender,  \"you are not the user for the rank reward\");\n        \n        uint256 reward = 0;\n        if(_rank==1){\n            reward = firstReward;\n            firstReward = 0;\n        }\n        else if(_rank==2){\n            reward = secondReward;\n            secondReward = 0;\n        }\n        else if(_rank==3){\n            reward = thirdReward;\n            thirdReward = 0;\n        }\n\n        bool success = token.increaseContractAllowance(\n            treasuryWallet,\n            address(this),\n            reward\n        );\n        require(success, \"IncreaseContract Fail\");\n        token.transferFrom(treasuryWallet, msg.sender, reward);\n\n        emit rewardTransferred (\n        reward,\n        msg.sender\n        );\n\n    }\n\n    function matchUser(address _user) public view returns (UserInfo memory) {\n        require(_userIds.current()!=1, \"you are the only one player\");\n        uint userCount = _userIds.current();\n        uint256 n = uint256(keccak256(abi.encodePacked(block.timestamp))) % (userCount);\n        if(idUserInfo[n+1].user != _user){\n            UserInfo memory opponent =  idUserInfo[n+1];\n            return opponent;\n        }else{\n            return matchUser(_user);\n        }\n    }\n\n    function fetchUser(uint256 _userId) public view returns (UserInfo memory) {\n        require(_userIds.current()!=0, \"no user info added to this contract\");\n        return idUserInfo[_userId];\n    }\n\n    function fetchUsers() public view returns (UserInfo[] memory) {\n        uint userCount = _userIds.current();\n        UserInfo[] memory users =  new UserInfo[](userCount);\n\n        for (uint i = 1; i <= userCount; i++) {\n            uint currentId = idUserInfo[i].userId;\n            UserInfo storage currentUser = idUserInfo[currentId];\n            users[i-1] = currentUser;\n        }\n        return users;\n    }\n\n    function onERC1155Received(address, address, uint256, uint256, bytes memory) public virtual returns (bytes4) {\n        return this.onERC1155Received.selector;\n    }\n\n    function onERC1155BatchReceived(address, address, uint256[] memory, uint256[] memory, bytes memory) public virtual returns (bytes4) {\n        return this.onERC1155BatchReceived.selector;\n    }\n\n    function onERC721Received(address, address, uint256, bytes memory) public virtual returns (bytes4) {\n        return this.onERC721Received.selector;\n    }\n}\n",
  "sourcePath": "/Users/hyenne/workspace/BEB-05-JMT/contract/contracts/MapleUser.sol",
  "ast": {
    "absolutePath": "project:/contracts/MapleUser.sol",
    "exportedSymbols": {
      "Address": [
        4268
      ],
      "Babylonian": [
        5187
      ],
      "Context": [
        4290
      ],
      "Counters": [
        4364
      ],
      "ERC1155": [
        1483
      ],
      "ERC165": [
        4614
      ],
      "ERC20": [
        2473
      ],
      "ERC721": [
        3443
      ],
      "IERC1155": [
        1605
      ],
      "IERC1155MetadataURI": [
        1887
      ],
      "IERC1155Receiver": [
        1646
      ],
      "IERC165": [
        4626
      ],
      "IERC20": [
        2551
      ],
      "IERC20Metadata": [
        2576
      ],
      "IERC721": [
        3559
      ],
      "IERC721Metadata": [
        3973
      ],
      "IERC721Receiver": [
        3577
      ],
      "JMToken": [
        6174
      ],
      "LPT": [
        6227
      ],
      "LiquidityPool": [
        7043
      ],
      "MapleUser": [
        11442
      ],
      "Math": [
        5130
      ],
      "Ownable": [
        112
      ],
      "Pausable": [
        220
      ],
      "ReentrancyGuard": [
        260
      ],
      "Strings": [
        4590
      ],
      "VJMToken": [
        12282
      ]
    },
    "id": 11443,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10732,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".7"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:23:34"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "id": 10733,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 11443,
        "sourceUnit": 3444,
        "src": "57:57:34",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC1155/ERC1155.sol",
        "file": "@openzeppelin/contracts/token/ERC1155/ERC1155.sol",
        "id": 10734,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 11443,
        "sourceUnit": 1484,
        "src": "115:59:34",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol",
        "file": "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol",
        "id": 10735,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 11443,
        "sourceUnit": 1647,
        "src": "175:68:34",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 10736,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 11443,
        "sourceUnit": 113,
        "src": "244:52:34",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
        "file": "@openzeppelin/contracts/utils/Counters.sol",
        "id": 10737,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 11443,
        "sourceUnit": 4365,
        "src": "297:52:34",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/contracts/JMToken.sol",
        "file": "./JMToken.sol",
        "id": 10738,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 11443,
        "sourceUnit": 6175,
        "src": "350:23:34",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 10739,
              "name": "Ownable",
              "nameLocations": [
                "397:7:34"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 112,
              "src": "397:7:34"
            },
            "id": 10740,
            "nodeType": "InheritanceSpecifier",
            "src": "397:7:34"
          }
        ],
        "canonicalName": "MapleUser",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 11442,
        "linearizedBaseContracts": [
          11442,
          112,
          4290
        ],
        "name": "MapleUser",
        "nameLocation": "384:9:34",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "global": false,
            "id": 10744,
            "libraryName": {
              "id": 10741,
              "name": "Counters",
              "nameLocations": [
                "417:8:34"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 4364,
              "src": "417:8:34"
            },
            "nodeType": "UsingForDirective",
            "src": "411:36:34",
            "typeName": {
              "id": 10743,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 10742,
                "name": "Counters.Counter",
                "nameLocations": [
                  "430:8:34",
                  "439:7:34"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 4296,
                "src": "430:16:34"
              },
              "referencedDeclaration": 4296,
              "src": "430:16:34",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$4296_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            }
          },
          {
            "constant": false,
            "id": 10747,
            "mutability": "mutable",
            "name": "_userIds",
            "nameLocation": "477:8:34",
            "nodeType": "VariableDeclaration",
            "scope": 11442,
            "src": "452:33:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Counter_$4296_storage",
              "typeString": "struct Counters.Counter"
            },
            "typeName": {
              "id": 10746,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 10745,
                "name": "Counters.Counter",
                "nameLocations": [
                  "452:8:34",
                  "461:7:34"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 4296,
                "src": "452:16:34"
              },
              "referencedDeclaration": 4296,
              "src": "452:16:34",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$4296_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 10752,
            "mutability": "mutable",
            "name": "decimals",
            "nameLocation": "499:8:34",
            "nodeType": "VariableDeclaration",
            "scope": 11442,
            "src": "491:25:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10748,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "491:7:34",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000"
              },
              "id": 10751,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "3130",
                "id": 10749,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "510:2:34",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_10_by_1",
                  "typeString": "int_const 10"
                },
                "value": "10"
              },
              "nodeType": "BinaryOperation",
              "operator": "**",
              "rightExpression": {
                "hexValue": "3138",
                "id": 10750,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "514:2:34",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_18_by_1",
                  "typeString": "int_const 18"
                },
                "value": "18"
              },
              "src": "510:6:34",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 10755,
            "mutability": "mutable",
            "name": "firstReward",
            "nameLocation": "530:11:34",
            "nodeType": "VariableDeclaration",
            "scope": 11442,
            "src": "522:23:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10753,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "522:7:34",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30",
              "id": 10754,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "544:1:34",
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
            "id": 10758,
            "mutability": "mutable",
            "name": "secondReward",
            "nameLocation": "559:12:34",
            "nodeType": "VariableDeclaration",
            "scope": 11442,
            "src": "551:24:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10756,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "551:7:34",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30",
              "id": 10757,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "574:1:34",
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
            "id": 10761,
            "mutability": "mutable",
            "name": "thirdReward",
            "nameLocation": "589:11:34",
            "nodeType": "VariableDeclaration",
            "scope": 11442,
            "src": "581:23:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10759,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "581:7:34",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30",
              "id": 10760,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "603:1:34",
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
            "id": 10764,
            "mutability": "mutable",
            "name": "token",
            "nameLocation": "627:5:34",
            "nodeType": "VariableDeclaration",
            "scope": 11442,
            "src": "611:21:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_JMToken_$6174",
              "typeString": "contract JMToken"
            },
            "typeName": {
              "id": 10763,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 10762,
                "name": "JMToken",
                "nameLocations": [
                  "611:7:34"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 6174,
                "src": "611:7:34"
              },
              "referencedDeclaration": 6174,
              "src": "611:7:34",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_JMToken_$6174",
                "typeString": "contract JMToken"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 10766,
            "mutability": "mutable",
            "name": "treasuryWallet",
            "nameLocation": "662:14:34",
            "nodeType": "VariableDeclaration",
            "scope": 11442,
            "src": "638:38:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 10765,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "638:15:34",
              "stateMutability": "payable",
              "typeDescriptions": {
                "typeIdentifier": "t_address_payable",
                "typeString": "address payable"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 10768,
            "mutability": "mutable",
            "name": "nftContractAddress",
            "nameLocation": "698:18:34",
            "nodeType": "VariableDeclaration",
            "scope": 11442,
            "src": "682:34:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 10767,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "682:7:34",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 10770,
            "mutability": "mutable",
            "name": "itemContractAddress",
            "nameLocation": "738:19:34",
            "nodeType": "VariableDeclaration",
            "scope": 11442,
            "src": "722:35:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 10769,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "722:7:34",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 10797,
              "nodeType": "Block",
              "src": "938:193:34",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 10782,
                        "name": "_tokenContractAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10772,
                        "src": "958:21:34",
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
                      "id": 10781,
                      "name": "_setToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10892,
                      "src": "948:9:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                        "typeString": "function (address) returns (bool)"
                      }
                    },
                    "id": 10783,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "948:32:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10784,
                  "nodeType": "ExpressionStatement",
                  "src": "948:32:34"
                },
                {
                  "expression": {
                    "id": 10787,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10785,
                      "name": "nftContractAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10768,
                      "src": "990:18:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 10786,
                      "name": "_nftContractAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10774,
                      "src": "1011:19:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "990:40:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 10788,
                  "nodeType": "ExpressionStatement",
                  "src": "990:40:34"
                },
                {
                  "expression": {
                    "id": 10791,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10789,
                      "name": "itemContractAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10770,
                      "src": "1040:19:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 10790,
                      "name": "_itemContractAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10776,
                      "src": "1062:20:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1040:42:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 10792,
                  "nodeType": "ExpressionStatement",
                  "src": "1040:42:34"
                },
                {
                  "expression": {
                    "id": 10795,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10793,
                      "name": "treasuryWallet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10766,
                      "src": "1092:14:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 10794,
                      "name": "_treasuryWallet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10778,
                      "src": "1109:15:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "1092:32:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 10796,
                  "nodeType": "ExpressionStatement",
                  "src": "1092:32:34"
                }
              ]
            },
            "id": 10798,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10779,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10772,
                  "mutability": "mutable",
                  "name": "_tokenContractAddress",
                  "nameLocation": "794:21:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10798,
                  "src": "786:29:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10771,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "786:7:34",
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
                  "id": 10774,
                  "mutability": "mutable",
                  "name": "_nftContractAddress",
                  "nameLocation": "833:19:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10798,
                  "src": "825:27:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10773,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "825:7:34",
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
                  "id": 10776,
                  "mutability": "mutable",
                  "name": "_itemContractAddress",
                  "nameLocation": "870:20:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10798,
                  "src": "862:28:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10775,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "862:7:34",
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
                  "id": 10778,
                  "mutability": "mutable",
                  "name": "_treasuryWallet",
                  "nameLocation": "916:15:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10798,
                  "src": "900:31:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 10777,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "900:15:34",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "776:161:34"
            },
            "returnParameters": {
              "id": 10780,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "938:0:34"
            },
            "scope": 11442,
            "src": "764:367:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10803,
            "mutability": "mutable",
            "name": "idUserInfo",
            "nameLocation": "1166:10:34",
            "nodeType": "VariableDeclaration",
            "scope": 11442,
            "src": "1137:39:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$10819_storage_$",
              "typeString": "mapping(uint256 => struct MapleUser.UserInfo)"
            },
            "typeName": {
              "id": 10802,
              "keyType": {
                "id": 10799,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1145:7:34",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1137:28:34",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$10819_storage_$",
                "typeString": "mapping(uint256 => struct MapleUser.UserInfo)"
              },
              "valueType": {
                "id": 10801,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 10800,
                  "name": "UserInfo",
                  "nameLocations": [
                    "1156:8:34"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 10819,
                  "src": "1156:8:34"
                },
                "referencedDeclaration": 10819,
                "src": "1156:8:34",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_UserInfo_$10819_storage_ptr",
                  "typeString": "struct MapleUser.UserInfo"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "canonicalName": "MapleUser.Token",
            "id": 10808,
            "members": [
              {
                "constant": false,
                "id": 10805,
                "mutability": "mutable",
                "name": "contractAddr",
                "nameLocation": "1214:12:34",
                "nodeType": "VariableDeclaration",
                "scope": 10808,
                "src": "1206:20:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 10804,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1206:7:34",
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
                "id": 10807,
                "mutability": "mutable",
                "name": "tokenId",
                "nameLocation": "1244:7:34",
                "nodeType": "VariableDeclaration",
                "scope": 10808,
                "src": "1236:15:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 10806,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1236:7:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Token",
            "nameLocation": "1190:5:34",
            "nodeType": "StructDefinition",
            "scope": 11442,
            "src": "1183:75:34",
            "visibility": "public"
          },
          {
            "canonicalName": "MapleUser.UserInfo",
            "id": 10819,
            "members": [
              {
                "constant": false,
                "id": 10810,
                "mutability": "mutable",
                "name": "userId",
                "nameLocation": "1298:6:34",
                "nodeType": "VariableDeclaration",
                "scope": 10819,
                "src": "1290:14:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 10809,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1290:7:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 10813,
                "mutability": "mutable",
                "name": "charToken",
                "nameLocation": "1320:9:34",
                "nodeType": "VariableDeclaration",
                "scope": 10819,
                "src": "1314:15:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Token_$10808_storage_ptr",
                  "typeString": "struct MapleUser.Token"
                },
                "typeName": {
                  "id": 10812,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 10811,
                    "name": "Token",
                    "nameLocations": [
                      "1314:5:34"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 10808,
                    "src": "1314:5:34"
                  },
                  "referencedDeclaration": 10808,
                  "src": "1314:5:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Token_$10808_storage_ptr",
                    "typeString": "struct MapleUser.Token"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 10816,
                "mutability": "mutable",
                "name": "weaponToken",
                "nameLocation": "1345:11:34",
                "nodeType": "VariableDeclaration",
                "scope": 10819,
                "src": "1339:17:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Token_$10808_storage_ptr",
                  "typeString": "struct MapleUser.Token"
                },
                "typeName": {
                  "id": 10815,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 10814,
                    "name": "Token",
                    "nameLocations": [
                      "1339:5:34"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 10808,
                    "src": "1339:5:34"
                  },
                  "referencedDeclaration": 10808,
                  "src": "1339:5:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Token_$10808_storage_ptr",
                    "typeString": "struct MapleUser.Token"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 10818,
                "mutability": "mutable",
                "name": "user",
                "nameLocation": "1382:4:34",
                "nodeType": "VariableDeclaration",
                "scope": 10819,
                "src": "1366:20:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address_payable",
                  "typeString": "address payable"
                },
                "typeName": {
                  "id": 10817,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1366:15:34",
                  "stateMutability": "payable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "UserInfo",
            "nameLocation": "1271:8:34",
            "nodeType": "StructDefinition",
            "scope": 11442,
            "src": "1264:129:34",
            "visibility": "public"
          },
          {
            "anonymous": false,
            "eventSelector": "b71cf8dd9f35ff09f0b312ae47365f80792968af9383e6cbc7f9c12054d6cc3d",
            "id": 10829,
            "name": "UserCreated",
            "nameLocation": "1405:11:34",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10828,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10821,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "charId",
                  "nameLocation": "1435:6:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10829,
                  "src": "1427:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10820,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1427:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10823,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "weaponId",
                  "nameLocation": "1459:8:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10829,
                  "src": "1451:16:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10822,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1451:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10825,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "userId",
                  "nameLocation": "1485:6:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10829,
                  "src": "1477:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10824,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1477:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10827,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1509:4:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10829,
                  "src": "1501:12:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10826,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1501:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1417:102:34"
            },
            "src": "1399:121:34"
          },
          {
            "anonymous": false,
            "eventSelector": "cf09b7402a0a51c2c51935cd064f1c8e910da6814d49b3badcaa04c81850948b",
            "id": 10839,
            "name": "UserUpdated",
            "nameLocation": "1532:11:34",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10838,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10831,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "charId",
                  "nameLocation": "1562:6:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10839,
                  "src": "1554:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10830,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1554:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10833,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "weaponId",
                  "nameLocation": "1586:8:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10839,
                  "src": "1578:16:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10832,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1578:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10835,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "userId",
                  "nameLocation": "1612:6:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10839,
                  "src": "1604:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10834,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1604:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10837,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1636:4:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10839,
                  "src": "1628:12:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10836,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1628:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1544:102:34"
            },
            "src": "1526:121:34"
          },
          {
            "anonymous": false,
            "eventSelector": "42674543ab0f3f2c815bc05dfda759e3d9116ad967c6a33989f9a4f085b529e4",
            "id": 10849,
            "name": "UserMatching",
            "nameLocation": "1659:12:34",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10848,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10841,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "charId",
                  "nameLocation": "1690:6:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10849,
                  "src": "1682:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10840,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1682:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10843,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "weaponId",
                  "nameLocation": "1714:8:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10849,
                  "src": "1706:16:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10842,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1706:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10845,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "userId",
                  "nameLocation": "1740:6:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10849,
                  "src": "1732:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10844,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1732:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10847,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1764:4:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10849,
                  "src": "1756:12:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10846,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1756:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1672:102:34"
            },
            "src": "1653:122:34"
          },
          {
            "anonymous": false,
            "eventSelector": "7a7c6948c6a3db8d1413aaffd01a9e07bc53d55489bcfe45cb5f45b703b1977a",
            "id": 10859,
            "name": "UserDeleated",
            "nameLocation": "1787:12:34",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10858,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10851,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "charId",
                  "nameLocation": "1818:6:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10859,
                  "src": "1810:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10850,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1810:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10853,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "weaponId",
                  "nameLocation": "1842:8:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10859,
                  "src": "1834:16:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10852,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1834:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10855,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "userId",
                  "nameLocation": "1868:6:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10859,
                  "src": "1860:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10854,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1860:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10857,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1892:4:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10859,
                  "src": "1884:12:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10856,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1884:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1800:102:34"
            },
            "src": "1781:122:34"
          },
          {
            "anonymous": false,
            "eventSelector": "f77e4bb9025e3700758004f467a01764ed3e2b0245b45b918b6107e1770f32bb",
            "id": 10865,
            "name": "rewardTransferred",
            "nameLocation": "1915:17:34",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10864,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10861,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "reward",
                  "nameLocation": "1951:6:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10865,
                  "src": "1943:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10860,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1943:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10863,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1975:4:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10865,
                  "src": "1967:12:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10862,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1967:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1933:52:34"
            },
            "src": "1909:77:34"
          },
          {
            "body": {
              "id": 10891,
              "nodeType": "Block",
              "src": "2067:116:34",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 10880,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 10875,
                          "name": "_tokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10867,
                          "src": "2085:13:34",
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
                              "hexValue": "307830",
                              "id": 10878,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2110:3:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0x0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 10877,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2102:7:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 10876,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2102:7:34",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 10879,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2102:12:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2085:29:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 10874,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2077:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 10881,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2077:38:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10882,
                  "nodeType": "ExpressionStatement",
                  "src": "2077:38:34"
                },
                {
                  "expression": {
                    "id": 10887,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10883,
                      "name": "token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10764,
                      "src": "2125:5:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_JMToken_$6174",
                        "typeString": "contract JMToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 10885,
                          "name": "_tokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10867,
                          "src": "2141:13:34",
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
                        "id": 10884,
                        "name": "JMToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6174,
                        "src": "2133:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_JMToken_$6174_$",
                          "typeString": "type(contract JMToken)"
                        }
                      },
                      "id": 10886,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2133:22:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_JMToken_$6174",
                        "typeString": "contract JMToken"
                      }
                    },
                    "src": "2125:30:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_JMToken_$6174",
                      "typeString": "contract JMToken"
                    }
                  },
                  "id": 10888,
                  "nodeType": "ExpressionStatement",
                  "src": "2125:30:34"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 10889,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2172:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 10873,
                  "id": 10890,
                  "nodeType": "Return",
                  "src": "2165:11:34"
                }
              ]
            },
            "id": 10892,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 10870,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 10869,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "2042:9:34"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "2042:9:34"
                },
                "nodeType": "ModifierInvocation",
                "src": "2042:9:34"
              }
            ],
            "name": "_setToken",
            "nameLocation": "2001:9:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10868,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10867,
                  "mutability": "mutable",
                  "name": "_tokenAddress",
                  "nameLocation": "2019:13:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10892,
                  "src": "2011:21:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10866,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2011:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2010:23:34"
            },
            "returnParameters": {
              "id": 10873,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10872,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 10892,
                  "src": "2061:4:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10871,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2061:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2060:6:34"
            },
            "scope": 11442,
            "src": "1992:191:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 10966,
              "nodeType": "Block",
              "src": "2270:824:34",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 10908,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 10900,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "2288:3:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 10901,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2292:6:34",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "2288:10:34",
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
                              "id": 10906,
                              "name": "_charId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10894,
                              "src": "2337:7:34",
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
                              }
                            ],
                            "expression": {
                              "arguments": [
                                {
                                  "id": 10903,
                                  "name": "nftContractAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10768,
                                  "src": "2309:18:34",
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
                                "id": 10902,
                                "name": "ERC721",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3443,
                                "src": "2302:6:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC721_$3443_$",
                                  "typeString": "type(contract ERC721)"
                                }
                              },
                              "id": 10904,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2302:26:34",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC721_$3443",
                                "typeString": "contract ERC721"
                              }
                            },
                            "id": 10905,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2329:7:34",
                            "memberName": "ownerOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 2722,
                            "src": "2302:34:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view external returns (address)"
                            }
                          },
                          "id": 10907,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2302:43:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2288:57:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "6f6e6c7920636861726163746572206f776e6572732063616e207369676e207570",
                        "id": 10909,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2348:35:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_83713b9b24cd23a0cf8b29a6781c7948915eec658b8b5ae22fbd763cc013108f",
                          "typeString": "literal_string \"only character owners can sign up\""
                        },
                        "value": "only character owners can sign up"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_83713b9b24cd23a0cf8b29a6781c7948915eec658b8b5ae22fbd763cc013108f",
                          "typeString": "literal_string \"only character owners can sign up\""
                        }
                      ],
                      "id": 10899,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2280:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 10910,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2280:104:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10911,
                  "nodeType": "ExpressionStatement",
                  "src": "2280:104:34"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 10922,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 10917,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "2441:3:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 10918,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2445:6:34",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "2441:10:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 10919,
                              "name": "_weaponId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10896,
                              "src": "2453:9:34",
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
                            "expression": {
                              "arguments": [
                                {
                                  "id": 10914,
                                  "name": "itemContractAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10770,
                                  "src": "2410:19:34",
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
                                "id": 10913,
                                "name": "ERC1155",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1483,
                                "src": "2402:7:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC1155_$1483_$",
                                  "typeString": "type(contract ERC1155)"
                                }
                              },
                              "id": 10915,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2402:28:34",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC1155_$1483",
                                "typeString": "contract ERC1155"
                              }
                            },
                            "id": 10916,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2431:9:34",
                            "memberName": "balanceOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 376,
                            "src": "2402:38:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (address,uint256) view external returns (uint256)"
                            }
                          },
                          "id": 10920,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2402:61:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 10921,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2465:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2402:64:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "6f6e6c7920776561706f6e206f776e6572732063616e207369676e207570",
                        "id": 10923,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2469:32:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_9abfea7a1838e9b21b5acd87e6e61e6c5f51e3820429df0deb6f66d62e149bcf",
                          "typeString": "literal_string \"only weapon owners can sign up\""
                        },
                        "value": "only weapon owners can sign up"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_9abfea7a1838e9b21b5acd87e6e61e6c5f51e3820429df0deb6f66d62e149bcf",
                          "typeString": "literal_string \"only weapon owners can sign up\""
                        }
                      ],
                      "id": 10912,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2394:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 10924,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2394:108:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10925,
                  "nodeType": "ExpressionStatement",
                  "src": "2394:108:34"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 10926,
                        "name": "_userIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10747,
                        "src": "2513:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$4296_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 10928,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2522:9:34",
                      "memberName": "increment",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4322,
                      "src": "2513:18:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$4296_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$4296_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer)"
                      }
                    },
                    "id": 10929,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2513:20:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10930,
                  "nodeType": "ExpressionStatement",
                  "src": "2513:20:34"
                },
                {
                  "assignments": [
                    10932
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 10932,
                      "mutability": "mutable",
                      "name": "userId",
                      "nameLocation": "2551:6:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 10966,
                      "src": "2543:14:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 10931,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2543:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 10936,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 10933,
                        "name": "_userIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10747,
                        "src": "2560:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$4296_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 10934,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2569:7:34",
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4308,
                      "src": "2560:16:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$4296_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$4296_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 10935,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2560:18:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2543:35:34"
                },
                {
                  "expression": {
                    "id": 10956,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 10937,
                        "name": "idUserInfo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10803,
                        "src": "2589:10:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$10819_storage_$",
                          "typeString": "mapping(uint256 => struct MapleUser.UserInfo storage ref)"
                        }
                      },
                      "id": 10939,
                      "indexExpression": {
                        "id": 10938,
                        "name": "userId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10932,
                        "src": "2600:6:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2589:18:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_UserInfo_$10819_storage",
                        "typeString": "struct MapleUser.UserInfo storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 10941,
                          "name": "userId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10932,
                          "src": "2641:6:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 10943,
                              "name": "nftContractAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10768,
                              "src": "2710:18:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 10944,
                              "name": "_charId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10894,
                              "src": "2755:7:34",
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
                            "id": 10942,
                            "name": "Token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10808,
                            "src": "2672:5:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_struct$_Token_$10808_storage_ptr_$",
                              "typeString": "type(struct MapleUser.Token storage pointer)"
                            }
                          },
                          "id": 10945,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "structConstructorCall",
                          "lValueRequested": false,
                          "nameLocations": [
                            "2696:12:34",
                            "2746:7:34"
                          ],
                          "names": [
                            "contractAddr",
                            "tokenId"
                          ],
                          "nodeType": "FunctionCall",
                          "src": "2672:105:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Token_$10808_memory_ptr",
                            "typeString": "struct MapleUser.Token memory"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 10947,
                              "name": "itemContractAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10770,
                              "src": "2842:19:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 10948,
                              "name": "_weaponId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10896,
                              "src": "2888:9:34",
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
                            "id": 10946,
                            "name": "Token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10808,
                            "src": "2804:5:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_struct$_Token_$10808_storage_ptr_$",
                              "typeString": "type(struct MapleUser.Token storage pointer)"
                            }
                          },
                          "id": 10949,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "structConstructorCall",
                          "lValueRequested": false,
                          "nameLocations": [
                            "2828:12:34",
                            "2879:7:34"
                          ],
                          "names": [
                            "contractAddr",
                            "tokenId"
                          ],
                          "nodeType": "FunctionCall",
                          "src": "2804:108:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Token_$10808_memory_ptr",
                            "typeString": "struct MapleUser.Token memory"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "expression": {
                                "id": 10952,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "2940:3:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 10953,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2944:6:34",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "2940:10:34",
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
                            "id": 10951,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2932:8:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_payable_$",
                              "typeString": "type(address payable)"
                            },
                            "typeName": {
                              "id": 10950,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2932:8:34",
                              "stateMutability": "payable",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 10954,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2932:19:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
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
                            "typeIdentifier": "t_struct$_Token_$10808_memory_ptr",
                            "typeString": "struct MapleUser.Token memory"
                          },
                          {
                            "typeIdentifier": "t_struct$_Token_$10808_memory_ptr",
                            "typeString": "struct MapleUser.Token memory"
                          },
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        ],
                        "id": 10940,
                        "name": "UserInfo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10819,
                        "src": "2610:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_UserInfo_$10819_storage_ptr_$",
                          "typeString": "type(struct MapleUser.UserInfo storage pointer)"
                        }
                      },
                      "id": 10955,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [
                        "2633:6:34",
                        "2661:9:34",
                        "2791:11:34",
                        "2926:4:34"
                      ],
                      "names": [
                        "userId",
                        "charToken",
                        "weaponToken",
                        "user"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "2610:352:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_UserInfo_$10819_memory_ptr",
                        "typeString": "struct MapleUser.UserInfo memory"
                      }
                    },
                    "src": "2589:373:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UserInfo_$10819_storage",
                      "typeString": "struct MapleUser.UserInfo storage ref"
                    }
                  },
                  "id": 10957,
                  "nodeType": "ExpressionStatement",
                  "src": "2589:373:34"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 10959,
                        "name": "_charId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10894,
                        "src": "3003:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 10960,
                        "name": "_weaponId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10896,
                        "src": "3024:9:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 10961,
                        "name": "userId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10932,
                        "src": "3047:6:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 10962,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "3067:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10963,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3071:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3067:10:34",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 10958,
                      "name": "UserCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10829,
                      "src": "2978:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256,address)"
                      }
                    },
                    "id": 10964,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2978:109:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10965,
                  "nodeType": "EmitStatement",
                  "src": "2973:114:34"
                }
              ]
            },
            "functionSelector": "aeeda6bf",
            "id": 10967,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "signUp",
            "nameLocation": "2198:6:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10897,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10894,
                  "mutability": "mutable",
                  "name": "_charId",
                  "nameLocation": "2222:7:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10967,
                  "src": "2214:15:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10893,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2214:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10896,
                  "mutability": "mutable",
                  "name": "_weaponId",
                  "nameLocation": "2247:9:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10967,
                  "src": "2239:17:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10895,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2239:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2204:58:34"
            },
            "returnParameters": {
              "id": 10898,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2270:0:34"
            },
            "scope": 11442,
            "src": "2189:905:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11007,
              "nodeType": "Block",
              "src": "3183:335:34",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 10983,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 10975,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "3201:3:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 10976,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3205:6:34",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "3201:10:34",
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
                              "id": 10981,
                              "name": "_charId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10969,
                              "src": "3250:7:34",
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
                              }
                            ],
                            "expression": {
                              "arguments": [
                                {
                                  "id": 10978,
                                  "name": "nftContractAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10768,
                                  "src": "3222:18:34",
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
                                "id": 10977,
                                "name": "ERC721",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3443,
                                "src": "3215:6:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC721_$3443_$",
                                  "typeString": "type(contract ERC721)"
                                }
                              },
                              "id": 10979,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3215:26:34",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC721_$3443",
                                "typeString": "contract ERC721"
                              }
                            },
                            "id": 10980,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3242:7:34",
                            "memberName": "ownerOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 2722,
                            "src": "3215:34:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view external returns (address)"
                            }
                          },
                          "id": 10982,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3215:43:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "3201:57:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "6f6e6c7920636861726163746572206f776e6572732063616e207369676e207570",
                        "id": 10984,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3261:35:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_83713b9b24cd23a0cf8b29a6781c7948915eec658b8b5ae22fbd763cc013108f",
                          "typeString": "literal_string \"only character owners can sign up\""
                        },
                        "value": "only character owners can sign up"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_83713b9b24cd23a0cf8b29a6781c7948915eec658b8b5ae22fbd763cc013108f",
                          "typeString": "literal_string \"only character owners can sign up\""
                        }
                      ],
                      "id": 10974,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "3193:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 10985,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3193:104:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10986,
                  "nodeType": "ExpressionStatement",
                  "src": "3193:104:34"
                },
                {
                  "expression": {
                    "id": 10993,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "expression": {
                          "baseExpression": {
                            "id": 10987,
                            "name": "idUserInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10803,
                            "src": "3308:10:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$10819_storage_$",
                              "typeString": "mapping(uint256 => struct MapleUser.UserInfo storage ref)"
                            }
                          },
                          "id": 10989,
                          "indexExpression": {
                            "id": 10988,
                            "name": "_userId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10971,
                            "src": "3319:7:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3308:19:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$10819_storage",
                            "typeString": "struct MapleUser.UserInfo storage ref"
                          }
                        },
                        "id": 10990,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3328:9:34",
                        "memberName": "charToken",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10813,
                        "src": "3308:29:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Token_$10808_storage",
                          "typeString": "struct MapleUser.Token storage ref"
                        }
                      },
                      "id": 10991,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3338:7:34",
                      "memberName": "tokenId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10807,
                      "src": "3308:37:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 10992,
                      "name": "_charId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10969,
                      "src": "3348:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3308:47:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10994,
                  "nodeType": "ExpressionStatement",
                  "src": "3308:47:34"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 10996,
                        "name": "_charId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10969,
                        "src": "3396:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "expression": {
                            "baseExpression": {
                              "id": 10997,
                              "name": "idUserInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10803,
                              "src": "3417:10:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$10819_storage_$",
                                "typeString": "mapping(uint256 => struct MapleUser.UserInfo storage ref)"
                              }
                            },
                            "id": 10999,
                            "indexExpression": {
                              "id": 10998,
                              "name": "_userId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10971,
                              "src": "3428:7:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3417:19:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_UserInfo_$10819_storage",
                              "typeString": "struct MapleUser.UserInfo storage ref"
                            }
                          },
                          "id": 11000,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3437:11:34",
                          "memberName": "weaponToken",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10816,
                          "src": "3417:31:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Token_$10808_storage",
                            "typeString": "struct MapleUser.Token storage ref"
                          }
                        },
                        "id": 11001,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3449:7:34",
                        "memberName": "tokenId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10807,
                        "src": "3417:39:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 11002,
                        "name": "_userId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10971,
                        "src": "3470:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 11003,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "3491:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11004,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3495:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3491:10:34",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 10995,
                      "name": "UserUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10839,
                      "src": "3371:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256,address)"
                      }
                    },
                    "id": 11005,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3371:140:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11006,
                  "nodeType": "EmitStatement",
                  "src": "3366:145:34"
                }
              ]
            },
            "functionSelector": "5c7dec1b",
            "id": 11008,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "updateChar",
            "nameLocation": "3109:10:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10972,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10969,
                  "mutability": "mutable",
                  "name": "_charId",
                  "nameLocation": "3137:7:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 11008,
                  "src": "3129:15:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10968,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3129:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10971,
                  "mutability": "mutable",
                  "name": "_userId",
                  "nameLocation": "3162:7:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 11008,
                  "src": "3154:15:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10970,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3154:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3119:56:34"
            },
            "returnParameters": {
              "id": 10973,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3183:0:34"
            },
            "scope": 11442,
            "src": "3100:418:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11049,
              "nodeType": "Block",
              "src": "3611:351:34",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 11025,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 11020,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "3668:3:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 11021,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3672:6:34",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "3668:10:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 11022,
                              "name": "_weaponId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11010,
                              "src": "3680:9:34",
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
                            "expression": {
                              "arguments": [
                                {
                                  "id": 11017,
                                  "name": "itemContractAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10770,
                                  "src": "3637:19:34",
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
                                "id": 11016,
                                "name": "ERC1155",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1483,
                                "src": "3629:7:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC1155_$1483_$",
                                  "typeString": "type(contract ERC1155)"
                                }
                              },
                              "id": 11018,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3629:28:34",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC1155_$1483",
                                "typeString": "contract ERC1155"
                              }
                            },
                            "id": 11019,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3658:9:34",
                            "memberName": "balanceOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 376,
                            "src": "3629:38:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (address,uint256) view external returns (uint256)"
                            }
                          },
                          "id": 11023,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3629:61:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 11024,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3692:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3629:64:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "6f6e6c7920776561706f6e206f776e6572732063616e207570646174652075736572496e666f",
                        "id": 11026,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3696:40:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_b0fe3178bf6775920488275d1750f1843a0b30545c0744042557cc3e471381af",
                          "typeString": "literal_string \"only weapon owners can update userInfo\""
                        },
                        "value": "only weapon owners can update userInfo"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_b0fe3178bf6775920488275d1750f1843a0b30545c0744042557cc3e471381af",
                          "typeString": "literal_string \"only weapon owners can update userInfo\""
                        }
                      ],
                      "id": 11015,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "3621:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 11027,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3621:116:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11028,
                  "nodeType": "ExpressionStatement",
                  "src": "3621:116:34"
                },
                {
                  "expression": {
                    "id": 11035,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "expression": {
                          "baseExpression": {
                            "id": 11029,
                            "name": "idUserInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10803,
                            "src": "3748:10:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$10819_storage_$",
                              "typeString": "mapping(uint256 => struct MapleUser.UserInfo storage ref)"
                            }
                          },
                          "id": 11031,
                          "indexExpression": {
                            "id": 11030,
                            "name": "_userId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11012,
                            "src": "3759:7:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3748:19:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$10819_storage",
                            "typeString": "struct MapleUser.UserInfo storage ref"
                          }
                        },
                        "id": 11032,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3768:11:34",
                        "memberName": "weaponToken",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10816,
                        "src": "3748:31:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Token_$10808_storage",
                          "typeString": "struct MapleUser.Token storage ref"
                        }
                      },
                      "id": 11033,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3780:7:34",
                      "memberName": "tokenId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10807,
                      "src": "3748:39:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 11034,
                      "name": "_weaponId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11010,
                      "src": "3790:9:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3748:51:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 11036,
                  "nodeType": "ExpressionStatement",
                  "src": "3748:51:34"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "expression": {
                            "baseExpression": {
                              "id": 11038,
                              "name": "idUserInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10803,
                              "src": "3840:10:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$10819_storage_$",
                                "typeString": "mapping(uint256 => struct MapleUser.UserInfo storage ref)"
                              }
                            },
                            "id": 11040,
                            "indexExpression": {
                              "id": 11039,
                              "name": "_userId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11012,
                              "src": "3851:7:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3840:19:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_UserInfo_$10819_storage",
                              "typeString": "struct MapleUser.UserInfo storage ref"
                            }
                          },
                          "id": 11041,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3860:9:34",
                          "memberName": "charToken",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10813,
                          "src": "3840:29:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Token_$10808_storage",
                            "typeString": "struct MapleUser.Token storage ref"
                          }
                        },
                        "id": 11042,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3870:7:34",
                        "memberName": "tokenId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10807,
                        "src": "3840:37:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 11043,
                        "name": "_weaponId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11010,
                        "src": "3891:9:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 11044,
                        "name": "_userId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11012,
                        "src": "3914:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 11045,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "3935:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11046,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3939:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3935:10:34",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 11037,
                      "name": "UserUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10839,
                      "src": "3815:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256,address)"
                      }
                    },
                    "id": 11047,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3815:140:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11048,
                  "nodeType": "EmitStatement",
                  "src": "3810:145:34"
                }
              ]
            },
            "functionSelector": "36b18165",
            "id": 11050,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "updateWeapon",
            "nameLocation": "3533:12:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11013,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11010,
                  "mutability": "mutable",
                  "name": "_weaponId",
                  "nameLocation": "3563:9:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 11050,
                  "src": "3555:17:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11009,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3555:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11012,
                  "mutability": "mutable",
                  "name": "_userId",
                  "nameLocation": "3590:7:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 11050,
                  "src": "3582:15:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11011,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3582:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3545:58:34"
            },
            "returnParameters": {
              "id": 11014,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3611:0:34"
            },
            "scope": 11442,
            "src": "3524:438:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11095,
              "nodeType": "Block",
              "src": "4048:471:34",
              "statements": [
                {
                  "assignments": [
                    11058
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11058,
                      "mutability": "mutable",
                      "name": "reward",
                      "nameLocation": "4231:6:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 11095,
                      "src": "4223:14:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11057,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4223:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11060,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 11059,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4240:1:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4223:18:34"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11063,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 11061,
                      "name": "_rank",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11052,
                      "src": "4254:5:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 11062,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4261:1:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "4254:8:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 11071,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 11069,
                        "name": "_rank",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11052,
                        "src": "4325:5:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "32",
                        "id": 11070,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4332:1:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "src": "4325:8:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 11079,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 11077,
                          "name": "_rank",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11052,
                          "src": "4397:5:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "33",
                          "id": 11078,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4404:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_3_by_1",
                            "typeString": "int_const 3"
                          },
                          "value": "3"
                        },
                        "src": "4397:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseBody": {
                        "id": 11089,
                        "nodeType": "Block",
                        "src": "4455:35:34",
                        "statements": [
                          {
                            "expression": {
                              "id": 11087,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 11085,
                                "name": "reward",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11058,
                                "src": "4469:6:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                "hexValue": "30",
                                "id": 11086,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4478:1:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "src": "4469:10:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 11088,
                            "nodeType": "ExpressionStatement",
                            "src": "4469:10:34"
                          }
                        ]
                      },
                      "id": 11090,
                      "nodeType": "IfStatement",
                      "src": "4394:96:34",
                      "trueBody": {
                        "id": 11084,
                        "nodeType": "Block",
                        "src": "4406:45:34",
                        "statements": [
                          {
                            "expression": {
                              "id": 11082,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 11080,
                                "name": "reward",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11058,
                                "src": "4420:6:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                "id": 11081,
                                "name": "thirdReward",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10761,
                                "src": "4429:11:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "4420:20:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 11083,
                            "nodeType": "ExpressionStatement",
                            "src": "4420:20:34"
                          }
                        ]
                      }
                    },
                    "id": 11091,
                    "nodeType": "IfStatement",
                    "src": "4322:168:34",
                    "trueBody": {
                      "id": 11076,
                      "nodeType": "Block",
                      "src": "4334:46:34",
                      "statements": [
                        {
                          "expression": {
                            "id": 11074,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 11072,
                              "name": "reward",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11058,
                              "src": "4348:6:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "id": 11073,
                              "name": "secondReward",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10758,
                              "src": "4357:12:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "4348:21:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 11075,
                          "nodeType": "ExpressionStatement",
                          "src": "4348:21:34"
                        }
                      ]
                    }
                  },
                  "id": 11092,
                  "nodeType": "IfStatement",
                  "src": "4251:239:34",
                  "trueBody": {
                    "id": 11068,
                    "nodeType": "Block",
                    "src": "4263:45:34",
                    "statements": [
                      {
                        "expression": {
                          "id": 11066,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 11064,
                            "name": "reward",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11058,
                            "src": "4277:6:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 11065,
                            "name": "firstReward",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10755,
                            "src": "4286:11:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4277:20:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11067,
                        "nodeType": "ExpressionStatement",
                        "src": "4277:20:34"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 11093,
                    "name": "reward",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 11058,
                    "src": "4506:6:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 11056,
                  "id": 11094,
                  "nodeType": "Return",
                  "src": "4499:13:34"
                }
              ]
            },
            "functionSelector": "e4698991",
            "id": 11096,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "checkReward",
            "nameLocation": "3977:11:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11053,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11052,
                  "mutability": "mutable",
                  "name": "_rank",
                  "nameLocation": "4006:5:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 11096,
                  "src": "3998:13:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11051,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3998:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3988:29:34"
            },
            "returnParameters": {
              "id": 11056,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11055,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11096,
                  "src": "4039:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11054,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4039:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4038:9:34"
            },
            "scope": 11442,
            "src": "3968:551:34",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11125,
              "nodeType": "Block",
              "src": "4570:110:34",
              "statements": [
                {
                  "expression": {
                    "id": 11107,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 11101,
                      "name": "firstReward",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10755,
                      "src": "4580:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 11106,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 11104,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 11102,
                          "name": "reward",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11098,
                          "src": "4593:6:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "hexValue": "35",
                          "id": 11103,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4600:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_5_by_1",
                            "typeString": "int_const 5"
                          },
                          "value": "5"
                        },
                        "src": "4593:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "3130",
                        "id": 11105,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4602:2:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10_by_1",
                          "typeString": "int_const 10"
                        },
                        "value": "10"
                      },
                      "src": "4593:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4580:24:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 11108,
                  "nodeType": "ExpressionStatement",
                  "src": "4580:24:34"
                },
                {
                  "expression": {
                    "id": 11115,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 11109,
                      "name": "secondReward",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10758,
                      "src": "4614:12:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 11114,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 11112,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 11110,
                          "name": "reward",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11098,
                          "src": "4628:6:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "hexValue": "33",
                          "id": 11111,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4635:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_3_by_1",
                            "typeString": "int_const 3"
                          },
                          "value": "3"
                        },
                        "src": "4628:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "3130",
                        "id": 11113,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4637:2:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10_by_1",
                          "typeString": "int_const 10"
                        },
                        "value": "10"
                      },
                      "src": "4628:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4614:25:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 11116,
                  "nodeType": "ExpressionStatement",
                  "src": "4614:25:34"
                },
                {
                  "expression": {
                    "id": 11123,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 11117,
                      "name": "thirdReward",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10761,
                      "src": "4649:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 11122,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 11120,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 11118,
                          "name": "reward",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11098,
                          "src": "4662:6:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 11119,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4669:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "4662:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "hexValue": "3130",
                        "id": 11121,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4671:2:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10_by_1",
                          "typeString": "int_const 10"
                        },
                        "value": "10"
                      },
                      "src": "4662:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4649:24:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 11124,
                  "nodeType": "ExpressionStatement",
                  "src": "4649:24:34"
                }
              ]
            },
            "functionSelector": "a3469f74",
            "id": 11126,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setRankReward",
            "nameLocation": "4534:13:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11099,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11098,
                  "mutability": "mutable",
                  "name": "reward",
                  "nameLocation": "4556:6:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 11126,
                  "src": "4548:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11097,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4548:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4547:16:34"
            },
            "returnParameters": {
              "id": 11100,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4570:0:34"
            },
            "scope": 11442,
            "src": "4525:155:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11230,
              "nodeType": "Block",
              "src": "4770:952:34",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 11140,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 11136,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 11134,
                            "name": "_rank",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11128,
                            "src": "4885:5:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "hexValue": "34",
                            "id": 11135,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4891:1:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_4_by_1",
                              "typeString": "int_const 4"
                            },
                            "value": "4"
                          },
                          "src": "4885:7:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 11139,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 11137,
                            "name": "_rank",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11128,
                            "src": "4894:5:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 11138,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4900:1:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "4894:7:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "4885:16:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "796f75206e65656420746f2072616e6b20757020666f722074686520726577617264",
                        "id": 11141,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4904:36:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_31a6f823e3ae97fdcda2fc01a3b621cb6a86a2be5567ef06565daa4942f7e905",
                          "typeString": "literal_string \"you need to rank up for the reward\""
                        },
                        "value": "you need to rank up for the reward"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_31a6f823e3ae97fdcda2fc01a3b621cb6a86a2be5567ef06565daa4942f7e905",
                          "typeString": "literal_string \"you need to rank up for the reward\""
                        }
                      ],
                      "id": 11133,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "4877:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 11142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4877:64:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11143,
                  "nodeType": "ExpressionStatement",
                  "src": "4877:64:34"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 11151,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "baseExpression": {
                              "id": 11145,
                              "name": "idUserInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10803,
                              "src": "4959:10:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$10819_storage_$",
                                "typeString": "mapping(uint256 => struct MapleUser.UserInfo storage ref)"
                              }
                            },
                            "id": 11147,
                            "indexExpression": {
                              "id": 11146,
                              "name": "_userId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11130,
                              "src": "4970:7:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4959:19:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_UserInfo_$10819_storage",
                              "typeString": "struct MapleUser.UserInfo storage ref"
                            }
                          },
                          "id": 11148,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4979:4:34",
                          "memberName": "user",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10818,
                          "src": "4959:24:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "expression": {
                            "id": 11149,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "4987:3:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 11150,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4991:6:34",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "4987:10:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "4959:38:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "796f7520617265206e6f7420746865207573657220666f72207468652072616e6b20726577617264",
                        "id": 11152,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5000:42:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_3d6db16898e6b3978bfbffd34d2acf7b0649024a67bd30cf662af09bf59cb8e1",
                          "typeString": "literal_string \"you are not the user for the rank reward\""
                        },
                        "value": "you are not the user for the rank reward"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_3d6db16898e6b3978bfbffd34d2acf7b0649024a67bd30cf662af09bf59cb8e1",
                          "typeString": "literal_string \"you are not the user for the rank reward\""
                        }
                      ],
                      "id": 11144,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "4951:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 11153,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4951:92:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11154,
                  "nodeType": "ExpressionStatement",
                  "src": "4951:92:34"
                },
                {
                  "assignments": [
                    11156
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11156,
                      "mutability": "mutable",
                      "name": "reward",
                      "nameLocation": "5070:6:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 11230,
                      "src": "5062:14:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11155,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5062:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11158,
                  "initialValue": {
                    "hexValue": "30",
                    "id": 11157,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "5079:1:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5062:18:34"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 11159,
                      "name": "_rank",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11128,
                      "src": "5093:5:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 11160,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5100:1:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "5093:8:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 11173,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 11171,
                        "name": "_rank",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11128,
                        "src": "5193:5:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "32",
                        "id": 11172,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5200:1:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "src": "5193:8:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 11185,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 11183,
                          "name": "_rank",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11128,
                          "src": "5295:5:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "33",
                          "id": 11184,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5302:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_3_by_1",
                            "typeString": "int_const 3"
                          },
                          "value": "3"
                        },
                        "src": "5295:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 11195,
                      "nodeType": "IfStatement",
                      "src": "5292:86:34",
                      "trueBody": {
                        "id": 11194,
                        "nodeType": "Block",
                        "src": "5304:74:34",
                        "statements": [
                          {
                            "expression": {
                              "id": 11188,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 11186,
                                "name": "reward",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11156,
                                "src": "5318:6:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                "id": 11187,
                                "name": "thirdReward",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10761,
                                "src": "5327:11:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "5318:20:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 11189,
                            "nodeType": "ExpressionStatement",
                            "src": "5318:20:34"
                          },
                          {
                            "expression": {
                              "id": 11192,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "id": 11190,
                                "name": "thirdReward",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10761,
                                "src": "5352:11:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                "hexValue": "30",
                                "id": 11191,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5366:1:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0"
                              },
                              "src": "5352:15:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 11193,
                            "nodeType": "ExpressionStatement",
                            "src": "5352:15:34"
                          }
                        ]
                      }
                    },
                    "id": 11196,
                    "nodeType": "IfStatement",
                    "src": "5190:188:34",
                    "trueBody": {
                      "id": 11182,
                      "nodeType": "Block",
                      "src": "5202:76:34",
                      "statements": [
                        {
                          "expression": {
                            "id": 11176,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 11174,
                              "name": "reward",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11156,
                              "src": "5216:6:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "id": 11175,
                              "name": "secondReward",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10758,
                              "src": "5225:12:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5216:21:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 11177,
                          "nodeType": "ExpressionStatement",
                          "src": "5216:21:34"
                        },
                        {
                          "expression": {
                            "id": 11180,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 11178,
                              "name": "secondReward",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10758,
                              "src": "5251:12:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "hexValue": "30",
                              "id": 11179,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5266:1:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "5251:16:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 11181,
                          "nodeType": "ExpressionStatement",
                          "src": "5251:16:34"
                        }
                      ]
                    }
                  },
                  "id": 11197,
                  "nodeType": "IfStatement",
                  "src": "5090:288:34",
                  "trueBody": {
                    "id": 11170,
                    "nodeType": "Block",
                    "src": "5102:74:34",
                    "statements": [
                      {
                        "expression": {
                          "id": 11164,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 11162,
                            "name": "reward",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11156,
                            "src": "5116:6:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 11163,
                            "name": "firstReward",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10755,
                            "src": "5125:11:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5116:20:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11165,
                        "nodeType": "ExpressionStatement",
                        "src": "5116:20:34"
                      },
                      {
                        "expression": {
                          "id": 11168,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 11166,
                            "name": "firstReward",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10755,
                            "src": "5150:11:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "30",
                            "id": 11167,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5164:1:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "5150:15:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 11169,
                        "nodeType": "ExpressionStatement",
                        "src": "5150:15:34"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    11199
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11199,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "5393:7:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 11230,
                      "src": "5388:12:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 11198,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "5388:4:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11209,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 11202,
                        "name": "treasuryWallet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10766,
                        "src": "5448:14:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 11205,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "5484:4:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MapleUser_$11442",
                              "typeString": "contract MapleUser"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_MapleUser_$11442",
                              "typeString": "contract MapleUser"
                            }
                          ],
                          "id": 11204,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5476:7:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 11203,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "5476:7:34",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 11206,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5476:13:34",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 11207,
                        "name": "reward",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11156,
                        "src": "5503:6:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
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
                        "id": 11200,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10764,
                        "src": "5403:5:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JMToken_$6174",
                          "typeString": "contract JMToken"
                        }
                      },
                      "id": 11201,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5409:25:34",
                      "memberName": "increaseContractAllowance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5981,
                      "src": "5403:31:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 11208,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5403:116:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5388:131:34"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 11211,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11199,
                        "src": "5537:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "496e637265617365436f6e7472616374204661696c",
                        "id": 11212,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5546:23:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4",
                          "typeString": "literal_string \"IncreaseContract Fail\""
                        },
                        "value": "IncreaseContract Fail"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4",
                          "typeString": "literal_string \"IncreaseContract Fail\""
                        }
                      ],
                      "id": 11210,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "5529:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 11213,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5529:41:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11214,
                  "nodeType": "ExpressionStatement",
                  "src": "5529:41:34"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 11218,
                        "name": "treasuryWallet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10766,
                        "src": "5599:14:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "expression": {
                          "id": 11219,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "5615:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11220,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5619:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "5615:10:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 11221,
                        "name": "reward",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11156,
                        "src": "5627:6:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
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
                        "id": 11215,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10764,
                        "src": "5580:5:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JMToken_$6174",
                          "typeString": "contract JMToken"
                        }
                      },
                      "id": 11217,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5586:12:34",
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2087,
                      "src": "5580:18:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 11222,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5580:54:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 11223,
                  "nodeType": "ExpressionStatement",
                  "src": "5580:54:34"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 11225,
                        "name": "reward",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11156,
                        "src": "5678:6:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 11226,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "5694:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11227,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5698:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "5694:10:34",
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
                      "id": 11224,
                      "name": "rewardTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10865,
                      "src": "5650:17:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address)"
                      }
                    },
                    "id": 11228,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5650:64:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11229,
                  "nodeType": "EmitStatement",
                  "src": "5645:69:34"
                }
              ]
            },
            "functionSelector": "5062bc5a",
            "id": 11231,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "requestReward",
            "nameLocation": "4695:13:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11131,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11128,
                  "mutability": "mutable",
                  "name": "_rank",
                  "nameLocation": "4726:5:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 11231,
                  "src": "4718:13:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11127,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4718:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11130,
                  "mutability": "mutable",
                  "name": "_userId",
                  "nameLocation": "4749:7:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 11231,
                  "src": "4741:15:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11129,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4741:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4708:54:34"
            },
            "returnParameters": {
              "id": 11132,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4770:0:34"
            },
            "scope": 11442,
            "src": "4686:1036:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11296,
              "nodeType": "Block",
              "src": "5800:403:34",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 11244,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 11240,
                              "name": "_userIds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10747,
                              "src": "5818:8:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Counter_$4296_storage",
                                "typeString": "struct Counters.Counter storage ref"
                              }
                            },
                            "id": 11241,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5827:7:34",
                            "memberName": "current",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4308,
                            "src": "5818:16:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$4296_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$4296_storage_ptr_$",
                              "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                            }
                          },
                          "id": 11242,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5818:18:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 11243,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5838:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "5818:21:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "796f752061726520746865206f6e6c79206f6e6520706c61796572",
                        "id": 11245,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5841:29:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_06c7266a375a0b7849b454e6c13ab1c26263d1dc67aeec645a7b8f63d86a6ddf",
                          "typeString": "literal_string \"you are the only one player\""
                        },
                        "value": "you are the only one player"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_06c7266a375a0b7849b454e6c13ab1c26263d1dc67aeec645a7b8f63d86a6ddf",
                          "typeString": "literal_string \"you are the only one player\""
                        }
                      ],
                      "id": 11239,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "5810:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 11246,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5810:61:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11247,
                  "nodeType": "ExpressionStatement",
                  "src": "5810:61:34"
                },
                {
                  "assignments": [
                    11249
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11249,
                      "mutability": "mutable",
                      "name": "userCount",
                      "nameLocation": "5886:9:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 11296,
                      "src": "5881:14:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11248,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "5881:4:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11253,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 11250,
                        "name": "_userIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10747,
                        "src": "5898:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$4296_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 11251,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5907:7:34",
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4308,
                      "src": "5898:16:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$4296_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$4296_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 11252,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5898:18:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5881:35:34"
                },
                {
                  "assignments": [
                    11255
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11255,
                      "mutability": "mutable",
                      "name": "n",
                      "nameLocation": "5934:1:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 11296,
                      "src": "5926:9:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11254,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5926:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11269,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11268,
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
                                    "id": 11261,
                                    "name": "block",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4294967292,
                                    "src": "5973:5:34",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_block",
                                      "typeString": "block"
                                    }
                                  },
                                  "id": 11262,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "5979:9:34",
                                  "memberName": "timestamp",
                                  "nodeType": "MemberAccess",
                                  "src": "5973:15:34",
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
                                  }
                                ],
                                "expression": {
                                  "id": 11259,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967295,
                                  "src": "5956:3:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 11260,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "5960:12:34",
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "src": "5956:16:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 11263,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5956:33:34",
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
                            "id": 11258,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967288,
                            "src": "5946:9:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 11264,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5946:44:34",
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
                        "id": 11257,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5938:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 11256,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "5938:7:34",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 11265,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5938:53:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "%",
                    "rightExpression": {
                      "components": [
                        {
                          "id": 11266,
                          "name": "userCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11249,
                          "src": "5995:9:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 11267,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "5994:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5938:67:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5926:79:34"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 11277,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "baseExpression": {
                          "id": 11270,
                          "name": "idUserInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10803,
                          "src": "6018:10:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$10819_storage_$",
                            "typeString": "mapping(uint256 => struct MapleUser.UserInfo storage ref)"
                          }
                        },
                        "id": 11274,
                        "indexExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 11273,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 11271,
                            "name": "n",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11255,
                            "src": "6029:1:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 11272,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6031:1:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "6029:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "6018:15:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_UserInfo_$10819_storage",
                          "typeString": "struct MapleUser.UserInfo storage ref"
                        }
                      },
                      "id": 11275,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6034:4:34",
                      "memberName": "user",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10818,
                      "src": "6018:20:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 11276,
                      "name": "_user",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11233,
                      "src": "6042:5:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6018:29:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 11294,
                    "nodeType": "Block",
                    "src": "6149:48:34",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 11291,
                              "name": "_user",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11233,
                              "src": "6180:5:34",
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
                            "id": 11290,
                            "name": "matchUser",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11297,
                            "src": "6170:9:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_struct$_UserInfo_$10819_memory_ptr_$",
                              "typeString": "function (address) view returns (struct MapleUser.UserInfo memory)"
                            }
                          },
                          "id": 11292,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6170:16:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$10819_memory_ptr",
                            "typeString": "struct MapleUser.UserInfo memory"
                          }
                        },
                        "functionReturnParameters": 11238,
                        "id": 11293,
                        "nodeType": "Return",
                        "src": "6163:23:34"
                      }
                    ]
                  },
                  "id": 11295,
                  "nodeType": "IfStatement",
                  "src": "6015:182:34",
                  "trueBody": {
                    "id": 11289,
                    "nodeType": "Block",
                    "src": "6048:97:34",
                    "statements": [
                      {
                        "assignments": [
                          11280
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 11280,
                            "mutability": "mutable",
                            "name": "opponent",
                            "nameLocation": "6078:8:34",
                            "nodeType": "VariableDeclaration",
                            "scope": 11289,
                            "src": "6062:24:34",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_UserInfo_$10819_memory_ptr",
                              "typeString": "struct MapleUser.UserInfo"
                            },
                            "typeName": {
                              "id": 11279,
                              "nodeType": "UserDefinedTypeName",
                              "pathNode": {
                                "id": 11278,
                                "name": "UserInfo",
                                "nameLocations": [
                                  "6062:8:34"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 10819,
                                "src": "6062:8:34"
                              },
                              "referencedDeclaration": 10819,
                              "src": "6062:8:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_UserInfo_$10819_storage_ptr",
                                "typeString": "struct MapleUser.UserInfo"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 11286,
                        "initialValue": {
                          "baseExpression": {
                            "id": 11281,
                            "name": "idUserInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10803,
                            "src": "6090:10:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$10819_storage_$",
                              "typeString": "mapping(uint256 => struct MapleUser.UserInfo storage ref)"
                            }
                          },
                          "id": 11285,
                          "indexExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 11284,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 11282,
                              "name": "n",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11255,
                              "src": "6101:1:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "hexValue": "31",
                              "id": 11283,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6103:1:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "6101:3:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "6090:15:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$10819_storage",
                            "typeString": "struct MapleUser.UserInfo storage ref"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6062:43:34"
                      },
                      {
                        "expression": {
                          "id": 11287,
                          "name": "opponent",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11280,
                          "src": "6126:8:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$10819_memory_ptr",
                            "typeString": "struct MapleUser.UserInfo memory"
                          }
                        },
                        "functionReturnParameters": 11238,
                        "id": 11288,
                        "nodeType": "Return",
                        "src": "6119:15:34"
                      }
                    ]
                  }
                }
              ]
            },
            "functionSelector": "da56ef3a",
            "id": 11297,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "matchUser",
            "nameLocation": "5737:9:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11234,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11233,
                  "mutability": "mutable",
                  "name": "_user",
                  "nameLocation": "5755:5:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 11297,
                  "src": "5747:13:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11232,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5747:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5746:15:34"
            },
            "returnParameters": {
              "id": 11238,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11237,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11297,
                  "src": "5783:15:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UserInfo_$10819_memory_ptr",
                    "typeString": "struct MapleUser.UserInfo"
                  },
                  "typeName": {
                    "id": 11236,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 11235,
                      "name": "UserInfo",
                      "nameLocations": [
                        "5783:8:34"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 10819,
                      "src": "5783:8:34"
                    },
                    "referencedDeclaration": 10819,
                    "src": "5783:8:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UserInfo_$10819_storage_ptr",
                      "typeString": "struct MapleUser.UserInfo"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5782:17:34"
            },
            "scope": 11442,
            "src": "5728:475:34",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11318,
              "nodeType": "Block",
              "src": "6283:122:34",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 11310,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 11306,
                              "name": "_userIds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10747,
                              "src": "6301:8:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Counter_$4296_storage",
                                "typeString": "struct Counters.Counter storage ref"
                              }
                            },
                            "id": 11307,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6310:7:34",
                            "memberName": "current",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4308,
                            "src": "6301:16:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$4296_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$4296_storage_ptr_$",
                              "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                            }
                          },
                          "id": 11308,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6301:18:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 11309,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6321:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "6301:21:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "6e6f207573657220696e666f20616464656420746f207468697320636f6e7472616374",
                        "id": 11311,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6324:37:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_bc010e87ffcbd574c945fcc64e5ec3c6ef5855c19afee97d46badb7d489d7cdb",
                          "typeString": "literal_string \"no user info added to this contract\""
                        },
                        "value": "no user info added to this contract"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_bc010e87ffcbd574c945fcc64e5ec3c6ef5855c19afee97d46badb7d489d7cdb",
                          "typeString": "literal_string \"no user info added to this contract\""
                        }
                      ],
                      "id": 11305,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "6293:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 11312,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6293:69:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 11313,
                  "nodeType": "ExpressionStatement",
                  "src": "6293:69:34"
                },
                {
                  "expression": {
                    "baseExpression": {
                      "id": 11314,
                      "name": "idUserInfo",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10803,
                      "src": "6379:10:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$10819_storage_$",
                        "typeString": "mapping(uint256 => struct MapleUser.UserInfo storage ref)"
                      }
                    },
                    "id": 11316,
                    "indexExpression": {
                      "id": 11315,
                      "name": "_userId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11299,
                      "src": "6390:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "6379:19:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UserInfo_$10819_storage",
                      "typeString": "struct MapleUser.UserInfo storage ref"
                    }
                  },
                  "functionReturnParameters": 11304,
                  "id": 11317,
                  "nodeType": "Return",
                  "src": "6372:26:34"
                }
              ]
            },
            "functionSelector": "dfbf9900",
            "id": 11319,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "fetchUser",
            "nameLocation": "6218:9:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11300,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11299,
                  "mutability": "mutable",
                  "name": "_userId",
                  "nameLocation": "6236:7:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 11319,
                  "src": "6228:15:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11298,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6228:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6227:17:34"
            },
            "returnParameters": {
              "id": 11304,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11303,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11319,
                  "src": "6266:15:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UserInfo_$10819_memory_ptr",
                    "typeString": "struct MapleUser.UserInfo"
                  },
                  "typeName": {
                    "id": 11302,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 11301,
                      "name": "UserInfo",
                      "nameLocations": [
                        "6266:8:34"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 10819,
                      "src": "6266:8:34"
                    },
                    "referencedDeclaration": 10819,
                    "src": "6266:8:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UserInfo_$10819_storage_ptr",
                      "typeString": "struct MapleUser.UserInfo"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6265:17:34"
            },
            "scope": 11442,
            "src": "6209:196:34",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11380,
              "nodeType": "Block",
              "src": "6473:350:34",
              "statements": [
                {
                  "assignments": [
                    11327
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11327,
                      "mutability": "mutable",
                      "name": "userCount",
                      "nameLocation": "6488:9:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 11380,
                      "src": "6483:14:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 11326,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "6483:4:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11331,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 11328,
                        "name": "_userIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10747,
                        "src": "6500:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$4296_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 11329,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6509:7:34",
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4308,
                      "src": "6500:16:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$4296_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$4296_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 11330,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6500:18:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6483:35:34"
                },
                {
                  "assignments": [
                    11336
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 11336,
                      "mutability": "mutable",
                      "name": "users",
                      "nameLocation": "6546:5:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 11380,
                      "src": "6528:23:34",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_UserInfo_$10819_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct MapleUser.UserInfo[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 11334,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 11333,
                            "name": "UserInfo",
                            "nameLocations": [
                              "6528:8:34"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 10819,
                            "src": "6528:8:34"
                          },
                          "referencedDeclaration": 10819,
                          "src": "6528:8:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$10819_storage_ptr",
                            "typeString": "struct MapleUser.UserInfo"
                          }
                        },
                        "id": 11335,
                        "nodeType": "ArrayTypeName",
                        "src": "6528:10:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_UserInfo_$10819_storage_$dyn_storage_ptr",
                          "typeString": "struct MapleUser.UserInfo[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 11343,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 11341,
                        "name": "userCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11327,
                        "src": "6570:9:34",
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
                        }
                      ],
                      "id": 11340,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "6555:14:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_struct$_UserInfo_$10819_memory_ptr_$dyn_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (struct MapleUser.UserInfo memory[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 11338,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 11337,
                            "name": "UserInfo",
                            "nameLocations": [
                              "6559:8:34"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 10819,
                            "src": "6559:8:34"
                          },
                          "referencedDeclaration": 10819,
                          "src": "6559:8:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$10819_storage_ptr",
                            "typeString": "struct MapleUser.UserInfo"
                          }
                        },
                        "id": 11339,
                        "nodeType": "ArrayTypeName",
                        "src": "6559:10:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_UserInfo_$10819_storage_$dyn_storage_ptr",
                          "typeString": "struct MapleUser.UserInfo[]"
                        }
                      }
                    },
                    "id": 11342,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6555:25:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_UserInfo_$10819_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct MapleUser.UserInfo memory[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6528:52:34"
                },
                {
                  "body": {
                    "id": 11376,
                    "nodeType": "Block",
                    "src": "6629:166:34",
                    "statements": [
                      {
                        "assignments": [
                          11355
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 11355,
                            "mutability": "mutable",
                            "name": "currentId",
                            "nameLocation": "6648:9:34",
                            "nodeType": "VariableDeclaration",
                            "scope": 11376,
                            "src": "6643:14:34",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 11354,
                              "name": "uint",
                              "nodeType": "ElementaryTypeName",
                              "src": "6643:4:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 11360,
                        "initialValue": {
                          "expression": {
                            "baseExpression": {
                              "id": 11356,
                              "name": "idUserInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10803,
                              "src": "6660:10:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$10819_storage_$",
                                "typeString": "mapping(uint256 => struct MapleUser.UserInfo storage ref)"
                              }
                            },
                            "id": 11358,
                            "indexExpression": {
                              "id": 11357,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11345,
                              "src": "6671:1:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "6660:13:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_UserInfo_$10819_storage",
                              "typeString": "struct MapleUser.UserInfo storage ref"
                            }
                          },
                          "id": 11359,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6674:6:34",
                          "memberName": "userId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10810,
                          "src": "6660:20:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6643:37:34"
                      },
                      {
                        "assignments": [
                          11363
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 11363,
                            "mutability": "mutable",
                            "name": "currentUser",
                            "nameLocation": "6711:11:34",
                            "nodeType": "VariableDeclaration",
                            "scope": 11376,
                            "src": "6694:28:34",
                            "stateVariable": false,
                            "storageLocation": "storage",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_UserInfo_$10819_storage_ptr",
                              "typeString": "struct MapleUser.UserInfo"
                            },
                            "typeName": {
                              "id": 11362,
                              "nodeType": "UserDefinedTypeName",
                              "pathNode": {
                                "id": 11361,
                                "name": "UserInfo",
                                "nameLocations": [
                                  "6694:8:34"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 10819,
                                "src": "6694:8:34"
                              },
                              "referencedDeclaration": 10819,
                              "src": "6694:8:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_UserInfo_$10819_storage_ptr",
                                "typeString": "struct MapleUser.UserInfo"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 11367,
                        "initialValue": {
                          "baseExpression": {
                            "id": 11364,
                            "name": "idUserInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10803,
                            "src": "6725:10:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$10819_storage_$",
                              "typeString": "mapping(uint256 => struct MapleUser.UserInfo storage ref)"
                            }
                          },
                          "id": 11366,
                          "indexExpression": {
                            "id": 11365,
                            "name": "currentId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11355,
                            "src": "6736:9:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "6725:21:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$10819_storage",
                            "typeString": "struct MapleUser.UserInfo storage ref"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6694:52:34"
                      },
                      {
                        "expression": {
                          "id": 11374,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 11368,
                              "name": "users",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11336,
                              "src": "6760:5:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_UserInfo_$10819_memory_ptr_$dyn_memory_ptr",
                                "typeString": "struct MapleUser.UserInfo memory[] memory"
                              }
                            },
                            "id": 11372,
                            "indexExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 11371,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 11369,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11345,
                                "src": "6766:1:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "hexValue": "31",
                                "id": 11370,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6768:1:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "6766:3:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "6760:10:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_UserInfo_$10819_memory_ptr",
                              "typeString": "struct MapleUser.UserInfo memory"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 11373,
                            "name": "currentUser",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11363,
                            "src": "6773:11:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_UserInfo_$10819_storage_ptr",
                              "typeString": "struct MapleUser.UserInfo storage pointer"
                            }
                          },
                          "src": "6760:24:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$10819_memory_ptr",
                            "typeString": "struct MapleUser.UserInfo memory"
                          }
                        },
                        "id": 11375,
                        "nodeType": "ExpressionStatement",
                        "src": "6760:24:34"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 11350,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 11348,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11345,
                      "src": "6608:1:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "id": 11349,
                      "name": "userCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11327,
                      "src": "6613:9:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6608:14:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 11377,
                  "initializationExpression": {
                    "assignments": [
                      11345
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 11345,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "6601:1:34",
                        "nodeType": "VariableDeclaration",
                        "scope": 11377,
                        "src": "6596:6:34",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 11344,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "6596:4:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 11347,
                    "initialValue": {
                      "hexValue": "31",
                      "id": 11346,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6605:1:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "6596:10:34"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 11352,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "6624:3:34",
                      "subExpression": {
                        "id": 11351,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11345,
                        "src": "6624:1:34",
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
                    "id": 11353,
                    "nodeType": "ExpressionStatement",
                    "src": "6624:3:34"
                  },
                  "nodeType": "ForStatement",
                  "src": "6591:204:34"
                },
                {
                  "expression": {
                    "id": 11378,
                    "name": "users",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 11336,
                    "src": "6811:5:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_UserInfo_$10819_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct MapleUser.UserInfo memory[] memory"
                    }
                  },
                  "functionReturnParameters": 11325,
                  "id": 11379,
                  "nodeType": "Return",
                  "src": "6804:12:34"
                }
              ]
            },
            "functionSelector": "bfcad433",
            "id": 11381,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "fetchUsers",
            "nameLocation": "6420:10:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11320,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6430:2:34"
            },
            "returnParameters": {
              "id": 11325,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11324,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11381,
                  "src": "6454:17:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_UserInfo_$10819_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct MapleUser.UserInfo[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 11322,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 11321,
                        "name": "UserInfo",
                        "nameLocations": [
                          "6454:8:34"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 10819,
                        "src": "6454:8:34"
                      },
                      "referencedDeclaration": 10819,
                      "src": "6454:8:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_UserInfo_$10819_storage_ptr",
                        "typeString": "struct MapleUser.UserInfo"
                      }
                    },
                    "id": 11323,
                    "nodeType": "ArrayTypeName",
                    "src": "6454:10:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_UserInfo_$10819_storage_$dyn_storage_ptr",
                      "typeString": "struct MapleUser.UserInfo[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6453:19:34"
            },
            "scope": 11442,
            "src": "6411:412:34",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11400,
              "nodeType": "Block",
              "src": "6938:55:34",
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "expression": {
                        "id": 11396,
                        "name": "this",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967268,
                        "src": "6955:4:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MapleUser_$11442",
                          "typeString": "contract MapleUser"
                        }
                      },
                      "id": 11397,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6960:17:34",
                      "memberName": "onERC1155Received",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11401,
                      "src": "6955:22:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                        "typeString": "function (address,address,uint256,uint256,bytes memory) external returns (bytes4)"
                      }
                    },
                    "id": 11398,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "6978:8:34",
                    "memberName": "selector",
                    "nodeType": "MemberAccess",
                    "src": "6955:31:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 11395,
                  "id": 11399,
                  "nodeType": "Return",
                  "src": "6948:38:34"
                }
              ]
            },
            "functionSelector": "f23a6e61",
            "id": 11401,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "onERC1155Received",
            "nameLocation": "6838:17:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11392,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11383,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11401,
                  "src": "6856:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11382,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6856:7:34",
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
                  "id": 11385,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11401,
                  "src": "6865:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11384,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6865:7:34",
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
                  "id": 11387,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11401,
                  "src": "6874:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11386,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6874:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11389,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11401,
                  "src": "6883:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11388,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6883:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11391,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11401,
                  "src": "6892:12:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 11390,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6892:5:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6855:50:34"
            },
            "returnParameters": {
              "id": 11395,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11394,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11401,
                  "src": "6930:6:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 11393,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "6930:6:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6929:8:34"
            },
            "scope": 11442,
            "src": "6829:164:34",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11422,
              "nodeType": "Block",
              "src": "7131:60:34",
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "expression": {
                        "id": 11418,
                        "name": "this",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967268,
                        "src": "7148:4:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MapleUser_$11442",
                          "typeString": "contract MapleUser"
                        }
                      },
                      "id": 11419,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7153:22:34",
                      "memberName": "onERC1155BatchReceived",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11423,
                      "src": "7148:27:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                        "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory) external returns (bytes4)"
                      }
                    },
                    "id": 11420,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "7176:8:34",
                    "memberName": "selector",
                    "nodeType": "MemberAccess",
                    "src": "7148:36:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 11417,
                  "id": 11421,
                  "nodeType": "Return",
                  "src": "7141:43:34"
                }
              ]
            },
            "functionSelector": "bc197c81",
            "id": 11423,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "onERC1155BatchReceived",
            "nameLocation": "7008:22:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11414,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11403,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11423,
                  "src": "7031:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11402,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7031:7:34",
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
                  "id": 11405,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11423,
                  "src": "7040:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11404,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7040:7:34",
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
                  "id": 11408,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11423,
                  "src": "7049:16:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 11406,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "7049:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 11407,
                    "nodeType": "ArrayTypeName",
                    "src": "7049:9:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11411,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11423,
                  "src": "7067:16:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 11409,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "7067:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 11410,
                    "nodeType": "ArrayTypeName",
                    "src": "7067:9:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11413,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11423,
                  "src": "7085:12:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 11412,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7085:5:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7030:68:34"
            },
            "returnParameters": {
              "id": 11417,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11416,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11423,
                  "src": "7123:6:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 11415,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "7123:6:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7122:8:34"
            },
            "scope": 11442,
            "src": "6999:192:34",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "body": {
              "id": 11440,
              "nodeType": "Block",
              "src": "7296:54:34",
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "expression": {
                        "id": 11436,
                        "name": "this",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967268,
                        "src": "7313:4:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MapleUser_$11442",
                          "typeString": "contract MapleUser"
                        }
                      },
                      "id": 11437,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7318:16:34",
                      "memberName": "onERC721Received",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11441,
                      "src": "7313:21:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                        "typeString": "function (address,address,uint256,bytes memory) external returns (bytes4)"
                      }
                    },
                    "id": 11438,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "7335:8:34",
                    "memberName": "selector",
                    "nodeType": "MemberAccess",
                    "src": "7313:30:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 11435,
                  "id": 11439,
                  "nodeType": "Return",
                  "src": "7306:37:34"
                }
              ]
            },
            "functionSelector": "150b7a02",
            "id": 11441,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "onERC721Received",
            "nameLocation": "7206:16:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11432,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11425,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11441,
                  "src": "7223:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11424,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7223:7:34",
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
                  "id": 11427,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11441,
                  "src": "7232:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11426,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7232:7:34",
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
                  "id": 11429,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11441,
                  "src": "7241:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11428,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7241:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 11431,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11441,
                  "src": "7250:12:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 11430,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "7250:5:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7222:41:34"
            },
            "returnParameters": {
              "id": 11435,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11434,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 11441,
                  "src": "7288:6:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 11433,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "7288:6:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7287:8:34"
            },
            "scope": 11442,
            "src": "7197:153:34",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          }
        ],
        "scope": 11443,
        "src": "375:6977:34",
        "usedErrors": []
      }
    ],
    "src": "32:7321:34"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.17+commit.8df45f5f.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
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
        "0xb71cf8dd9f35ff09f0b312ae47365f80792968af9383e6cbc7f9c12054d6cc3d": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "charId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "weaponId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "userId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "name": "UserCreated",
          "type": "event"
        },
        "0x7a7c6948c6a3db8d1413aaffd01a9e07bc53d55489bcfe45cb5f45b703b1977a": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "charId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "weaponId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "userId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "name": "UserDeleated",
          "type": "event"
        },
        "0x42674543ab0f3f2c815bc05dfda759e3d9116ad967c6a33989f9a4f085b529e4": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "charId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "weaponId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "userId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "name": "UserMatching",
          "type": "event"
        },
        "0xcf09b7402a0a51c2c51935cd064f1c8e910da6814d49b3badcaa04c81850948b": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "charId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "weaponId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "userId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "name": "UserUpdated",
          "type": "event"
        },
        "0xf77e4bb9025e3700758004f467a01764ed3e2b0245b45b918b6107e1770f32bb": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "reward",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "name": "rewardTransferred",
          "type": "event"
        }
      },
      "links": {},
      "address": "0xc6280B9247804d4A06434507A3dEF963fb13a5AC",
      "transactionHash": "0x63a99083452772b2d01b3d4e9556642f5c4d3637aff73562b3abedc3d77cc903"
    }
  },
  "schemaVersion": "3.4.9",
  "updatedAt": "2022-09-28T01:56:46.747Z",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
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
module.exports = USER;