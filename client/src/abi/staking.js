const STAKING = {
  "contractName": "Staking",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract VJMToken",
          "name": "_tokenAddress",
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
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Claimed",
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
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Staked",
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
          "indexed": false,
          "internalType": "uint256",
          "name": "unStakedTime",
          "type": "uint256"
        }
      ],
      "name": "UnStaked",
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
          "indexed": false,
          "internalType": "uint256",
          "name": "unStakedTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "UnStakedClaimed",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "APR",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "Deploytime",
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
          "name": "",
          "type": "address"
        }
      ],
      "name": "addressStaked",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
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
          "name": "",
          "type": "address"
        }
      ],
      "name": "stakeInfos",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "startTS",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "claimedTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "unStakingTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalClaimed",
          "type": "uint256"
        },
        {
          "internalType": "uint32",
          "name": "state",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
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
          "internalType": "contract JMToken",
          "name": "_jmt",
          "type": "address"
        }
      ],
      "name": "setJMTokenAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "setStakeInfo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "stakeAmount",
          "type": "uint256"
        }
      ],
      "name": "stakeToken",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unStakingToken",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unStakingClaime",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claimReward",
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
      "name": "claimableReward",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract VJMToken\",\"name\":\"_tokenAddress\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Claimed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Staked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"unStakedTime\",\"type\":\"uint256\"}],\"name\":\"UnStaked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"unStakedTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"UnStakedClaimed\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"APR\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"Deploytime\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"addressStaked\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"claimReward\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"claimableReward\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract JMToken\",\"name\":\"_jmt\",\"type\":\"address\"}],\"name\":\"setJMTokenAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"setStakeInfo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"stakeInfos\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"startTS\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"claimedTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"unStakingTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalClaimed\",\"type\":\"uint256\"},{\"internalType\":\"uint32\",\"name\":\"state\",\"type\":\"uint32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"stakeAmount\",\"type\":\"uint256\"}],\"name\":\"stakeToken\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unStakingClaime\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unStakingToken\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/Staking.sol\":\"Staking\"},\"evmVersion\":\"berlin\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/security/Pausable.sol\":{\"keccak256\":\"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004\",\"dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B\"]},\"@openzeppelin/contracts/security/ReentrancyGuard.sol\":{\"keccak256\":\"0x0e9621f60b2faabe65549f7ed0f24e8853a45c1b7990d47e8160e523683f3935\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://287a2f8d5814dd0f05f22b740f18ca8321acc21c9bd03a6cb2203ea626e2f3f2\",\"dweb:/ipfs/QmZRQv9iuwU817VuqkA2WweiaibKii69x9QxYBBEfbNEud\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x24b04b8aacaaf1a4a0719117b29c9c3647b1f479c5ac2a60f5ff1bb6d839c238\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://43e46da9d9f49741ecd876a269e71bc7494058d7a8e9478429998adb5bc3eaa0\",\"dweb:/ipfs/QmUtp4cqzf22C5rJ76AabKADquGWcjsc33yjYXxXC4sDvy\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xaf159a8b1923ad2a26d516089bceca9bdeaeacd04be50983ea00ba63070f08a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6f2cf1c531122bc7ca96b8c8db6a60deae60441e5223065e792553d4849b5638\",\"dweb:/ipfs/QmPBdJmBBABMDCfyDjCbdxgiqRavgiSL88SYPGibgbPas9\"]},\"@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xd15c3e400531f00203839159b2b8e7209c5158b35618f570c695b7e47f12e9f0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b600b852e0597aa69989cc263111f02097e2827edc1bdc70306303e3af5e9929\",\"dweb:/ipfs/QmU4WfM28A1nDqghuuGeFmN3CnVrk6opWtiF65K4vhFPeC\"]},\"@uniswap/lib/contracts/libraries/Babylonian.sol\":{\"keccak256\":\"0xe20fc48e3575b4a2932e5d2dd53b6742e1ca96f652bd41038cb89d7f5d49a096\",\"urls\":[\"bzz-raw://6ba298d8e592d39960eabc2328b7d4a01ad6cf8b06366adc3ef0133d3b196a9f\",\"dweb:/ipfs/QmQgrNaHssJ8XVsPUCMHpyYRFLbBqNrumaoFgXHWdDiTyy\"]},\"project:/contracts/JMToken.sol\":{\"keccak256\":\"0x5ac24ee9d28244c27fe7607fd74f9712bb4c39b6b7c1b09f427c60c3a3f34903\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://9cf73304d3160b73cac46833df2e26ab6e3a0adad1c432e664d74ecdf0d1d7eb\",\"dweb:/ipfs/QmYginHntRFEMFLrcFiACEt2hvrhCrZb7Fv8vWCYXniQbQ\"]},\"project:/contracts/LPT.sol\":{\"keccak256\":\"0xed736abaceb3ae48c617e3f658e9b025d5b61ef8df551970899895432b0ec7b6\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://ad6919c26ab33a0f95936b6de5c1267e1a4ce2d41ef609c72be2ea63e39cf275\",\"dweb:/ipfs/QmVMZpeSSxWUxc9SME2pgQ3xwazzvdjRYGxF7sfMWGspwn\"]},\"project:/contracts/LiquidityPool.sol\":{\"keccak256\":\"0x02add59a18b8f9012f2043575b93d04fde563e3b940ccf50b5358e1cbe9e6ebd\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://feb1b5de36d206ec0be059e8e5110936a9a5e13f73b0cb375b3a35e87819ebd0\",\"dweb:/ipfs/QmSX53o3uqjeSaaDofNKswHREGfbf13CXXfnsxye1yHF68\"]},\"project:/contracts/Staking.sol\":{\"keccak256\":\"0x710ebd15335631cc00d5b5f211dfcd90d819895d66555cc3a11fcc6a46706ac3\",\"license\":\"GPL-3.0-only\",\"urls\":[\"bzz-raw://5563b27916283b171195095843bf28a321570eb7f50d8f63b5be8e9ed02086b3\",\"dweb:/ipfs/QmaMvKGeXkfZVnNDLkagqCKimpuq4pk8nuTRuTMC7t86hJ\"]},\"project:/contracts/VJMToken.sol\":{\"keccak256\":\"0xe2f8a326fd1fbe8e2bf0e7365ad261285fde71804fe77694ce986d47c106f061\",\"license\":\"GPL-3.0-only\",\"urls\":[\"bzz-raw://f6ee599ebeff106e2eb9d3a6b0c01915cfc6f76e0916b4215e9c80c5c992e475\",\"dweb:/ipfs/QmXz1MZL3nGq7C8o1JW57rgYr6Z4iDV4Kba279dw4Smt4M\"]}},\"version\":1}",
  "bytecode": "0x6080604052670de0b6b3a7640000600255600380546a01518001e13380000000966001600160601b03199091161780825561004d916801000000000000000090910463ffffffff1690610167565b63ffffffff1660045534801561006257600080fd5b5060405161124e38038061124e8339810160408190526100819161019d565b61008a33610117565b6001600160a01b0381166100ee5760405162461bcd60e51b815260206004820152602160248201527f546f6b656e20416464726573732063616e6e6f742062652061646472657373206044820152600360fc1b606482015260840160405180910390fd5b600580546001600160a01b0319166001600160a01b0392909216919091179055426001556101cd565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b63ffffffff81811683821602808216919082811461019557634e487b7160e01b600052601160045260246000fd5b505092915050565b6000602082840312156101af57600080fd5b81516001600160a01b03811681146101c657600080fd5b9392505050565b611072806101dc6000396000f3fe6080604052600436106100e85760003560e01c806391de6b161161008a578063dfbf9def11610059578063dfbf9def14610244578063e7181edc146102cd578063e74d059f146102e2578063f2fde38b1461031257600080fd5b806391de6b16146101ba578063b88a802f146101da578063bd30558e146101ff578063cda6b8471461023157600080fd5b8063715018a6116100c6578063715018a6146101365780637b9ba7fd1461014b57806389fb2e461461016a5780638da5cb5b1461019257600080fd5b8063313ce567146100ed5780633595bf7a14610116578063397eee8014610120575b600080fd5b3480156100f957600080fd5b5061010360025481565b6040519081526020015b60405180910390f35b61011e610332565b005b34801561012c57600080fd5b5061010360015481565b34801561014257600080fd5b5061011e61055d565b610153610571565b60408051921515835260208301919091520161010d565b34801561017657600080fd5b5061011e33600090815260076020526040902042600190910155565b34801561019e57600080fd5b506000546040516001600160a01b03909116815260200161010d565b3480156101c657600080fd5b5061011e6101d5366004610f49565b610769565b3480156101e657600080fd5b506101ef6107ec565b604051901515815260200161010d565b34801561020b57600080fd5b5060035461021c9063ffffffff1681565b60405163ffffffff909116815260200161010d565b6101ef61023f366004610f6d565b6109c7565b34801561025057600080fd5b5061029a61025f366004610f49565b600760205260009081526040902080546001820154600283015460038401546004850154600590950154939492939192909163ffffffff1686565b604080519687526020870195909552938501929092526060840152608083015263ffffffff1660a082015260c00161010d565b3480156102d957600080fd5b50610103610d5a565b3480156102ee57600080fd5b506101ef6102fd366004610f49565b60086020526000908152604090205460ff1681565b34801561031e57600080fd5b5061011e61032d366004610f49565b610e11565b3360009081526008602052604090205460ff1615156001146103965760405162461bcd60e51b8152602060048201526018602482015277165bdd48185b1c9958591e481c185c9d1a58da5c185d195960421b60448201526064015b60405180910390fd5b336000908152600760205260408120600101546103b39042610f9c565b6003805433600090815260076020526040812090920154929350909163ffffffff600160401b830481169264010000000081048216926064926103f7921690610fb5565b6104019190610fcc565b61040b9190610fcc565b6104159190610fcc565b905060006104238383610fb5565b6006549091506001600160a01b031663a9059cbb33610443600a85610fcc565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af115801561048e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b29190610fee565b503360008181526007602081815260408084204260028083018290556008855295839020805460ff19169055938352600501805463ffffffff191690941790935591519081527f79d3df6837cc49ff0e09fd3258e6e45594e0703445bb06825e9d75156eaee8f0910160405180910390a260405181815233907fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a9060200160405180910390a2505050565b610565610e8a565b61056f6000610ee4565b565b33600090815260076020526040812060050154819063ffffffff166002146105ec5760405162461bcd60e51b815260206004820152602860248201527f6e6f77205374617465206973205374616b696e672c20506c6561736520556e5360448201526774616b696e67212160c01b606482015260840161038d565b60045433600090815260076020526040902060020154429161060d91611010565b101561073057336000818152600760205260409081902060030154600554915163a9059cbb60e01b8152600481019390935260248301819052916001600160a01b039091169063a9059cbb906044016020604051808303816000875af115801561067b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069f9190610fee565b5033600081815260076020908152604080832083815560018101849055600281018490556003810184905560048101849055600501805463ffffffff191690556008825291829020805460ff1916905581514281529081018490527fec4c5e119b3c2211affd553a6167326af1472cb3b7966b96b0f84a56d8d5317c910160405180910390a2506001924292509050565b60045433600090815260076020526040812060020154909142916107549190611010565b61075e9190610f9c565b600094909350915050565b610771610e8a565b6006546001600160a01b0316156107ca5760405162461bcd60e51b815260206004820152601b60248201527f41444452455353204953204e4f54205a65726f20416464726573730000000000604482015260640161038d565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b3360009081526008602052604081205460ff1615156001146108505760405162461bcd60e51b815260206004820152601860248201527f596f7520617265206e6f74207061727469636970617465640000000000000000604482015260640161038d565b3360009081526007602052604081206001015461086d9042610f9c565b6003805433600090815260076020526040812090920154929350909163ffffffff600160401b830481169264010000000081048216926064926108b1921690610fb5565b6108bb9190610fcc565b6108c59190610fcc565b6108cf9190610fcc565b905060006108dd8383610fb5565b6006549091506001600160a01b031663a9059cbb336108fd600a85610fcc565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af1158015610948573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096c9190610fee565b5061098833600090815260076020526040902042600190910155565b60405181815233907fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a9060200160405180910390a26001935050505090565b6006546040516370a0823160e01b8152306004820152600091839182916001600160a01b0316906370a0823190602401602060405180830381865afa158015610a14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a389190611023565b11610a725760405162461bcd60e51b815260206004820152600a602482015269544f4b454e5f4c41434b60b01b604482015260640161038d565b60008311610ac25760405162461bcd60e51b815260206004820152601e60248201527f5374616b6520616d6f756e742073686f756c6420626520636f72726563740000604482015260640161038d565b3360009081526008602052604090205460ff1615610b1d5760405162461bcd60e51b8152602060048201526018602482015277165bdd48185b1c9958591e481c185c9d1a58da5c185d195960421b604482015260640161038d565b3360009081526007602052604090206005015463ffffffff16600203610b465760009150610d54565b60055460405163d83a2bf360e01b8152336004820152306024820152604481018590526000916001600160a01b03169063d83a2bf3906064016020604051808303816000875af1158015610b9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc29190610fee565b905080610c095760405162461bcd60e51b8152602060048201526015602482015274125b98dc99585cd950dbdb9d1c9858dd0811985a5b605a1b604482015260640161038d565b6005546040516323b872dd60e01b8152336004820152306024820152604481018690526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610c60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c849190610fee565b503360008181526008602090815260408083208054600160ff199091168117909155815160c08101835242808252818501908152818401868152606083018c81526080840188815260a085018681528a8a52600789529887902094518555925194840194909455516002830155915160038201559051600482015592516005909301805463ffffffff191663ffffffff9094169390931790925590518681527f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d910160405180910390a260019250505b50919050565b3360009081526008602052604081205460ff161515600103610e0b5733600090815260076020526040812060010154610d939042610f9c565b6003805433600090815260076020526040812090920154929350909163ffffffff600160401b83048116926401000000008104821692606492610dd7921690610fb5565b610de19190610fcc565b610deb9190610fcc565b610df59190610fcc565b90506000610e038383610fb5565b949350505050565b50600090565b610e19610e8a565b6001600160a01b038116610e7e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161038d565b610e8781610ee4565b50565b6000546001600160a01b0316331461056f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161038d565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381168114610e8757600080fd5b600060208284031215610f5b57600080fd5b8135610f6681610f34565b9392505050565b600060208284031215610f7f57600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b81810381811115610faf57610faf610f86565b92915050565b8082028115828204841417610faf57610faf610f86565b600082610fe957634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561100057600080fd5b81518015158114610f6657600080fd5b80820180821115610faf57610faf610f86565b60006020828403121561103557600080fd5b505191905056fea26469706673582212209d8bee3431b3993235c8b78ea450fa714a7bb589ec5a89522012ebc3360cff9f64736f6c63430008110033",
  "deployedBytecode": "0x6080604052600436106100e85760003560e01c806391de6b161161008a578063dfbf9def11610059578063dfbf9def14610244578063e7181edc146102cd578063e74d059f146102e2578063f2fde38b1461031257600080fd5b806391de6b16146101ba578063b88a802f146101da578063bd30558e146101ff578063cda6b8471461023157600080fd5b8063715018a6116100c6578063715018a6146101365780637b9ba7fd1461014b57806389fb2e461461016a5780638da5cb5b1461019257600080fd5b8063313ce567146100ed5780633595bf7a14610116578063397eee8014610120575b600080fd5b3480156100f957600080fd5b5061010360025481565b6040519081526020015b60405180910390f35b61011e610332565b005b34801561012c57600080fd5b5061010360015481565b34801561014257600080fd5b5061011e61055d565b610153610571565b60408051921515835260208301919091520161010d565b34801561017657600080fd5b5061011e33600090815260076020526040902042600190910155565b34801561019e57600080fd5b506000546040516001600160a01b03909116815260200161010d565b3480156101c657600080fd5b5061011e6101d5366004610f49565b610769565b3480156101e657600080fd5b506101ef6107ec565b604051901515815260200161010d565b34801561020b57600080fd5b5060035461021c9063ffffffff1681565b60405163ffffffff909116815260200161010d565b6101ef61023f366004610f6d565b6109c7565b34801561025057600080fd5b5061029a61025f366004610f49565b600760205260009081526040902080546001820154600283015460038401546004850154600590950154939492939192909163ffffffff1686565b604080519687526020870195909552938501929092526060840152608083015263ffffffff1660a082015260c00161010d565b3480156102d957600080fd5b50610103610d5a565b3480156102ee57600080fd5b506101ef6102fd366004610f49565b60086020526000908152604090205460ff1681565b34801561031e57600080fd5b5061011e61032d366004610f49565b610e11565b3360009081526008602052604090205460ff1615156001146103965760405162461bcd60e51b8152602060048201526018602482015277165bdd48185b1c9958591e481c185c9d1a58da5c185d195960421b60448201526064015b60405180910390fd5b336000908152600760205260408120600101546103b39042610f9c565b6003805433600090815260076020526040812090920154929350909163ffffffff600160401b830481169264010000000081048216926064926103f7921690610fb5565b6104019190610fcc565b61040b9190610fcc565b6104159190610fcc565b905060006104238383610fb5565b6006549091506001600160a01b031663a9059cbb33610443600a85610fcc565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af115801561048e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b29190610fee565b503360008181526007602081815260408084204260028083018290556008855295839020805460ff19169055938352600501805463ffffffff191690941790935591519081527f79d3df6837cc49ff0e09fd3258e6e45594e0703445bb06825e9d75156eaee8f0910160405180910390a260405181815233907fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a9060200160405180910390a2505050565b610565610e8a565b61056f6000610ee4565b565b33600090815260076020526040812060050154819063ffffffff166002146105ec5760405162461bcd60e51b815260206004820152602860248201527f6e6f77205374617465206973205374616b696e672c20506c6561736520556e5360448201526774616b696e67212160c01b606482015260840161038d565b60045433600090815260076020526040902060020154429161060d91611010565b101561073057336000818152600760205260409081902060030154600554915163a9059cbb60e01b8152600481019390935260248301819052916001600160a01b039091169063a9059cbb906044016020604051808303816000875af115801561067b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069f9190610fee565b5033600081815260076020908152604080832083815560018101849055600281018490556003810184905560048101849055600501805463ffffffff191690556008825291829020805460ff1916905581514281529081018490527fec4c5e119b3c2211affd553a6167326af1472cb3b7966b96b0f84a56d8d5317c910160405180910390a2506001924292509050565b60045433600090815260076020526040812060020154909142916107549190611010565b61075e9190610f9c565b600094909350915050565b610771610e8a565b6006546001600160a01b0316156107ca5760405162461bcd60e51b815260206004820152601b60248201527f41444452455353204953204e4f54205a65726f20416464726573730000000000604482015260640161038d565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b3360009081526008602052604081205460ff1615156001146108505760405162461bcd60e51b815260206004820152601860248201527f596f7520617265206e6f74207061727469636970617465640000000000000000604482015260640161038d565b3360009081526007602052604081206001015461086d9042610f9c565b6003805433600090815260076020526040812090920154929350909163ffffffff600160401b830481169264010000000081048216926064926108b1921690610fb5565b6108bb9190610fcc565b6108c59190610fcc565b6108cf9190610fcc565b905060006108dd8383610fb5565b6006549091506001600160a01b031663a9059cbb336108fd600a85610fcc565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af1158015610948573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096c9190610fee565b5061098833600090815260076020526040902042600190910155565b60405181815233907fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a9060200160405180910390a26001935050505090565b6006546040516370a0823160e01b8152306004820152600091839182916001600160a01b0316906370a0823190602401602060405180830381865afa158015610a14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a389190611023565b11610a725760405162461bcd60e51b815260206004820152600a602482015269544f4b454e5f4c41434b60b01b604482015260640161038d565b60008311610ac25760405162461bcd60e51b815260206004820152601e60248201527f5374616b6520616d6f756e742073686f756c6420626520636f72726563740000604482015260640161038d565b3360009081526008602052604090205460ff1615610b1d5760405162461bcd60e51b8152602060048201526018602482015277165bdd48185b1c9958591e481c185c9d1a58da5c185d195960421b604482015260640161038d565b3360009081526007602052604090206005015463ffffffff16600203610b465760009150610d54565b60055460405163d83a2bf360e01b8152336004820152306024820152604481018590526000916001600160a01b03169063d83a2bf3906064016020604051808303816000875af1158015610b9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc29190610fee565b905080610c095760405162461bcd60e51b8152602060048201526015602482015274125b98dc99585cd950dbdb9d1c9858dd0811985a5b605a1b604482015260640161038d565b6005546040516323b872dd60e01b8152336004820152306024820152604481018690526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610c60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c849190610fee565b503360008181526008602090815260408083208054600160ff199091168117909155815160c08101835242808252818501908152818401868152606083018c81526080840188815260a085018681528a8a52600789529887902094518555925194840194909455516002830155915160038201559051600482015592516005909301805463ffffffff191663ffffffff9094169390931790925590518681527f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d910160405180910390a260019250505b50919050565b3360009081526008602052604081205460ff161515600103610e0b5733600090815260076020526040812060010154610d939042610f9c565b6003805433600090815260076020526040812090920154929350909163ffffffff600160401b83048116926401000000008104821692606492610dd7921690610fb5565b610de19190610fcc565b610deb9190610fcc565b610df59190610fcc565b90506000610e038383610fb5565b949350505050565b50600090565b610e19610e8a565b6001600160a01b038116610e7e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161038d565b610e8781610ee4565b50565b6000546001600160a01b0316331461056f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161038d565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381168114610e8757600080fd5b600060208284031215610f5b57600080fd5b8135610f6681610f34565b9392505050565b600060208284031215610f7f57600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b81810381811115610faf57610faf610f86565b92915050565b8082028115828204841417610faf57610faf610f86565b600082610fe957634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561100057600080fd5b81518015158114610f6657600080fd5b80820180821115610faf57610faf610f86565b60006020828403121561103557600080fd5b505191905056fea26469706673582212209d8bee3431b3993235c8b78ea450fa714a7bb589ec5a89522012ebc3360cff9f64736f6c63430008110033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:1077:37",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:37",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "65:295:37",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "75:20:37",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "85:10:37",
                    "type": "",
                    "value": "0xffffffff"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "79:2:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "104:46:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "131:1:37"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "134:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "127:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "127:10:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "143:1:37"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "146:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "139:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "139:10:37"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "123:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "123:27:37"
                  },
                  "variables": [
                    {
                      "name": "product_raw",
                      "nodeType": "YulTypedName",
                      "src": "108:11:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "159:31:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "product_raw",
                        "nodeType": "YulIdentifier",
                        "src": "174:11:37"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "187:2:37"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "170:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "170:20:37"
                  },
                  "variableNames": [
                    {
                      "name": "product",
                      "nodeType": "YulIdentifier",
                      "src": "159:7:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "243:111:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "264:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "271:3:37",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "276:10:37",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "267:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "267:20:37"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "257:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "257:31:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "257:31:37"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "308:1:37",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "311:4:37",
                              "type": "",
                              "value": "0x11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "301:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "301:15:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "301:15:37"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "336:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "339:4:37",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "329:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "329:15:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "329:15:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "product",
                            "nodeType": "YulIdentifier",
                            "src": "212:7:37"
                          },
                          {
                            "name": "product_raw",
                            "nodeType": "YulIdentifier",
                            "src": "221:11:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "209:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "209:24:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "202:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "202:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "199:155:37"
                }
              ]
            },
            "name": "checked_mul_t_uint32",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "44:1:37",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "47:1:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "product",
                "nodeType": "YulTypedName",
                "src": "53:7:37",
                "type": ""
              }
            ],
            "src": "14:346:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "464:209:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "510:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "519:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "522:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "512:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "512:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "512:12:37"
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
                            "src": "485:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "494:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "481:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "481:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "506:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "477:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "477:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "474:52:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "535:29:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "554:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "548:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "548:16:37"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "539:5:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "627:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "636:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "639:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "629:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "629:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "629:12:37"
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
                            "src": "586:5:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "597:5:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "612:3:37",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "617:1:37",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "608:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "608:11:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "621:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "604:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "604:19:37"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "593:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "593:31:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "583:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "583:42:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "576:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "576:50:37"
                  },
                  "nodeType": "YulIf",
                  "src": "573:70:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "652:15:37",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "662:5:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "652:6:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_contract$_VJMToken_$10764_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "430:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "441:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "453:6:37",
                "type": ""
              }
            ],
            "src": "365:308:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "852:223:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "869:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "880:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "862:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "862:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "862:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "903:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "914:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "899:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "899:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "919:2:37",
                        "type": "",
                        "value": "33"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "892:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "892:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "892:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "942:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "953:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "938:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "938:18:37"
                      },
                      {
                        "hexValue": "546f6b656e20416464726573732063616e6e6f74206265206164647265737320",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "958:34:37",
                        "type": "",
                        "value": "Token Address cannot be address "
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "931:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "931:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "931:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1013:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1024:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1009:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1009:18:37"
                      },
                      {
                        "hexValue": "30",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "1029:3:37",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1002:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1002:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1002:31:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1042:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1054:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1065:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1050:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1050:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1042:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_f2202c1f725dcbd51d00258bd50ca4766e24b49c836557e7bdc6a84c67402a7f__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "829:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "843:4:37",
                "type": ""
              }
            ],
            "src": "678:397:37"
          }
        ]
      },
      "contents": "{\n    { }\n    function checked_mul_t_uint32(x, y) -> product\n    {\n        let _1 := 0xffffffff\n        let product_raw := mul(and(x, _1), and(y, _1))\n        product := and(product_raw, _1)\n        if iszero(eq(product, product_raw))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x11)\n            revert(0, 0x24)\n        }\n    }\n    function abi_decode_tuple_t_contract$_VJMToken_$10764_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n        value0 := value\n    }\n    function abi_encode_tuple_t_stringliteral_f2202c1f725dcbd51d00258bd50ca4766e24b49c836557e7bdc6a84c67402a7f__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 33)\n        mstore(add(headStart, 64), \"Token Address cannot be address \")\n        mstore(add(headStart, 96), \"0\")\n        tail := add(headStart, 128)\n    }\n}",
      "id": 37,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:7936:37",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:37",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "115:76:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "125:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "137:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "148:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "133:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "133:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "125:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "167:9:37"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "178:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "160:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "160:25:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "160:25:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "84:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "95:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "106:4:37",
                "type": ""
              }
            ],
            "src": "14:177:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "319:135:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "329:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "341:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "352:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "337:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "337:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "329:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "371:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "396:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "389:6:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "389:14:37"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "382:6:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "382:22:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "364:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "364:41:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "364:41:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "425:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "436:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "421:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "421:18:37"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "441:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "414:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "414:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "414:34:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool_t_uint256__to_t_bool_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "280:9:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "291:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "299:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "310:4:37",
                "type": ""
              }
            ],
            "src": "196:258:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "560:102:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "570:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "582:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "593:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "578:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "578:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "570:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "612:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "627:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "643:3:37",
                                    "type": "",
                                    "value": "160"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "648:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "639:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "639:11:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "652:1:37",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "635:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "635:19:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "623:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "623:32:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "605:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "605:51:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "605:51:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "529:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "540:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "551:4:37",
                "type": ""
              }
            ],
            "src": "459:203:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "721:86:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "785:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "794:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "797:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "787:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "787:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "787:12:37"
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
                            "src": "744:5:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "755:5:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "770:3:37",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "775:1:37",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "766:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "766:11:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "779:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "762:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "762:19:37"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "751:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "751:31:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "741:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "741:42:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "734:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "734:50:37"
                  },
                  "nodeType": "YulIf",
                  "src": "731:70:37"
                }
              ]
            },
            "name": "validator_revert_contract_JMToken",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "710:5:37",
                "type": ""
              }
            ],
            "src": "667:140:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "898:186:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "944:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "953:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "956:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "946:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "946:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "946:12:37"
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
                            "src": "919:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "928:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "915:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "915:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "940:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "911:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "911:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "908:52:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "969:36:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "995:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "982:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "982:23:37"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "973:5:37",
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
                        "src": "1048:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_contract_JMToken",
                      "nodeType": "YulIdentifier",
                      "src": "1014:33:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1014:40:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1014:40:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1063:15:37",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "1073:5:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1063:6:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_contract$_JMToken_$6142",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "864:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "875:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "887:6:37",
                "type": ""
              }
            ],
            "src": "812:272:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1184:92:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1194:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1206:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1217:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1202:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1202:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1194:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1236:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "1261:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "1254:6:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1254:14:37"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "1247:6:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1247:22:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1229:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1229:41:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1229:41:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1153:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1164:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1175:4:37",
                "type": ""
              }
            ],
            "src": "1089:187:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1380:93:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1390:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1402:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1413:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1398:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1398:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1390:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1432:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1447:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1455:10:37",
                            "type": "",
                            "value": "0xffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "1443:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1443:23:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1425:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1425:42:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1425:42:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint32__to_t_uint32__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1349:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1360:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1371:4:37",
                "type": ""
              }
            ],
            "src": "1281:192:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1548:110:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1594:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1603:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1606:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1596:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1596:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1596:12:37"
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
                            "src": "1569:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1578:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1565:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1565:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1590:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1561:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1561:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "1558:52:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1619:33:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1642:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1629:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1629:23:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1619:6:37"
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
                "src": "1514:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1525:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1537:6:37",
                "type": ""
              }
            ],
            "src": "1478:180:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1733:186:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1779:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1788:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1791:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1781:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1781:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1781:12:37"
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
                            "src": "1754:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1763:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1750:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1750:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1775:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1746:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1746:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "1743:52:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1804:36:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1830:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1817:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1817:23:37"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1808:5:37",
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
                        "src": "1883:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_contract_JMToken",
                      "nodeType": "YulIdentifier",
                      "src": "1849:33:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1849:40:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1849:40:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1898:15:37",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "1908:5:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1898:6:37"
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
                "src": "1699:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1710:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1722:6:37",
                "type": ""
              }
            ],
            "src": "1663:256:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2163:311:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2173:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2185:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2196:3:37",
                        "type": "",
                        "value": "192"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2181:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2181:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2173:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2216:9:37"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2227:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2209:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2209:25:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2209:25:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2254:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2265:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2250:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2250:18:37"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "2270:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2243:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2243:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2243:34:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2297:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2308:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2293:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2293:18:37"
                      },
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "2313:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2286:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2286:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2286:34:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2340:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2351:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2336:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2336:18:37"
                      },
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "2356:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2329:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2329:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2329:34:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2383:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2394:3:37",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2379:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2379:19:37"
                      },
                      {
                        "name": "value4",
                        "nodeType": "YulIdentifier",
                        "src": "2400:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2372:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2372:35:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2372:35:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2427:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2438:3:37",
                            "type": "",
                            "value": "160"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2423:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2423:19:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value5",
                            "nodeType": "YulIdentifier",
                            "src": "2448:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2456:10:37",
                            "type": "",
                            "value": "0xffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "2444:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2444:23:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2416:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2416:52:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2416:52:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256_t_uint256_t_uint256_t_uint256_t_uint256_t_uint32__to_t_uint256_t_uint256_t_uint256_t_uint256_t_uint256_t_uint32__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2092:9:37",
                "type": ""
              },
              {
                "name": "value5",
                "nodeType": "YulTypedName",
                "src": "2103:6:37",
                "type": ""
              },
              {
                "name": "value4",
                "nodeType": "YulTypedName",
                "src": "2111:6:37",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "2119:6:37",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "2127:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2135:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2143:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2154:4:37",
                "type": ""
              }
            ],
            "src": "1924:550:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2653:174:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2670:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2681:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2663:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2663:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2663:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2704:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2715:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2700:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2700:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2720:2:37",
                        "type": "",
                        "value": "24"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2693:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2693:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2693:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2743:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2754:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2739:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2739:18:37"
                      },
                      {
                        "hexValue": "596f7520616c726561647920706172746963697061746564",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "2759:26:37",
                        "type": "",
                        "value": "You already participated"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2732:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2732:54:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2732:54:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2795:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2807:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2818:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2803:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2803:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2795:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_0e75d8d12a7dbee9f06677c3321bb311b9f1e86b675875c5f6d32a870ba6ec0c__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2630:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2644:4:37",
                "type": ""
              }
            ],
            "src": "2479:348:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2864:95:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2881:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2888:3:37",
                            "type": "",
                            "value": "224"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2893:10:37",
                            "type": "",
                            "value": "0x4e487b71"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "2884:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2884:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2874:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2874:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2874:31:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2921:1:37",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2924:4:37",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2914:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2914:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2914:15:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2945:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2948:4:37",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "2938:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2938:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2938:15:37"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "2832:127:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3013:79:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3023:17:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "3035:1:37"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "3038:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "3031:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3031:9:37"
                  },
                  "variableNames": [
                    {
                      "name": "diff",
                      "nodeType": "YulIdentifier",
                      "src": "3023:4:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3064:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "3066:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3066:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3066:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "diff",
                        "nodeType": "YulIdentifier",
                        "src": "3055:4:37"
                      },
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "3061:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "3052:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3052:11:37"
                  },
                  "nodeType": "YulIf",
                  "src": "3049:37:37"
                }
              ]
            },
            "name": "checked_sub_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "2995:1:37",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "2998:1:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "diff",
                "nodeType": "YulTypedName",
                "src": "3004:4:37",
                "type": ""
              }
            ],
            "src": "2964:128:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3149:116:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3159:20:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "3174:1:37"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "3177:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "3170:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3170:9:37"
                  },
                  "variableNames": [
                    {
                      "name": "product",
                      "nodeType": "YulIdentifier",
                      "src": "3159:7:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3237:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "3239:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3239:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3239:18:37"
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
                                "src": "3208:1:37"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "3201:6:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3201:9:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "y",
                                "nodeType": "YulIdentifier",
                                "src": "3215:1:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "product",
                                    "nodeType": "YulIdentifier",
                                    "src": "3222:7:37"
                                  },
                                  {
                                    "name": "x",
                                    "nodeType": "YulIdentifier",
                                    "src": "3231:1:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "div",
                                  "nodeType": "YulIdentifier",
                                  "src": "3218:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3218:15:37"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nodeType": "YulIdentifier",
                              "src": "3212:2:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3212:22:37"
                          }
                        ],
                        "functionName": {
                          "name": "or",
                          "nodeType": "YulIdentifier",
                          "src": "3198:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3198:37:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "3191:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3191:45:37"
                  },
                  "nodeType": "YulIf",
                  "src": "3188:71:37"
                }
              ]
            },
            "name": "checked_mul_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "3128:1:37",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "3131:1:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "product",
                "nodeType": "YulTypedName",
                "src": "3137:7:37",
                "type": ""
              }
            ],
            "src": "3097:168:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3316:171:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3347:111:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3368:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3375:3:37",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3380:10:37",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "3371:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3371:20:37"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3361:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3361:31:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3361:31:37"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3412:1:37",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3415:4:37",
                              "type": "",
                              "value": "0x12"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3405:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3405:15:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3405:15:37"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3440:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3443:4:37",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3433:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3433:15:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3433:15:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "3336:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "3329:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3329:9:37"
                  },
                  "nodeType": "YulIf",
                  "src": "3326:132:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3467:14:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "3476:1:37"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "3479:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "3472:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3472:9:37"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "3467:1:37"
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
                "src": "3301:1:37",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "3304:1:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "3310:1:37",
                "type": ""
              }
            ],
            "src": "3270:217:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3621:145:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3631:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3643:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3654:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3639:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3639:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3631:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3673:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "3688:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3704:3:37",
                                    "type": "",
                                    "value": "160"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3709:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "3700:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3700:11:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3713:1:37",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "3696:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3696:19:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "3684:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3684:32:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3666:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3666:51:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3666:51:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3737:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3748:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3733:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3733:18:37"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "3753:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3726:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3726:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3726:34:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3582:9:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "3593:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3601:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3612:4:37",
                "type": ""
              }
            ],
            "src": "3492:274:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3849:199:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3895:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3904:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3907:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3897:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3897:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3897:12:37"
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
                            "src": "3870:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3879:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3866:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3866:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3891:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3862:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3862:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "3859:52:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3920:29:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3939:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "3933:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3933:16:37"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "3924:5:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4002:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4011:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4014:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4004:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4004:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4004:12:37"
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
                            "src": "3971:5:37"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "3992:5:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nodeType": "YulIdentifier",
                                  "src": "3985:6:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3985:13:37"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "3978:6:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3978:21:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "3968:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3968:32:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "3961:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3961:40:37"
                  },
                  "nodeType": "YulIf",
                  "src": "3958:60:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4027:15:37",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "4037:5:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "4027:6:37"
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
                "src": "3815:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3826:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3838:6:37",
                "type": ""
              }
            ],
            "src": "3771:277:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4227:230:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4244:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4255:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4237:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4237:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4237:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4278:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4289:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4274:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4274:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4294:2:37",
                        "type": "",
                        "value": "40"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4267:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4267:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4267:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4317:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4328:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4313:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4313:18:37"
                      },
                      {
                        "hexValue": "6e6f77205374617465206973205374616b696e672c20506c6561736520556e53",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4333:34:37",
                        "type": "",
                        "value": "now State is Staking, Please UnS"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4306:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4306:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4306:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4388:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4399:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4384:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4384:18:37"
                      },
                      {
                        "hexValue": "74616b696e672121",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4404:10:37",
                        "type": "",
                        "value": "taking!!"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4377:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4377:38:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4377:38:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4424:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4436:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4447:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4432:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4432:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4424:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_3fa08d1bdb203005192b699e199b03078e7204a335f58d9200658261ed42d204__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4204:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4218:4:37",
                "type": ""
              }
            ],
            "src": "4053:404:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4510:77:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4520:16:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "4531:1:37"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "4534:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4527:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4527:9:37"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "4520:3:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4559:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "4561:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4561:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4561:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "4551:1:37"
                      },
                      {
                        "name": "sum",
                        "nodeType": "YulIdentifier",
                        "src": "4554:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4548:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4548:10:37"
                  },
                  "nodeType": "YulIf",
                  "src": "4545:36:37"
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "4493:1:37",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "4496:1:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "4502:3:37",
                "type": ""
              }
            ],
            "src": "4462:125:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4721:119:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4731:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4743:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4754:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4739:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4739:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4731:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4773:9:37"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "4784:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4766:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4766:25:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4766:25:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4811:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4822:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4807:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4807:18:37"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "4827:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4800:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4800:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4800:34:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256_t_uint256__to_t_uint256_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4682:9:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "4693:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4701:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4712:4:37",
                "type": ""
              }
            ],
            "src": "4592:248:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5019:177:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5036:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5047:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5029:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5029:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5029:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5070:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5081:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5066:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5066:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5086:2:37",
                        "type": "",
                        "value": "27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5059:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5059:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5059:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5109:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5120:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5105:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5105:18:37"
                      },
                      {
                        "hexValue": "41444452455353204953204e4f54205a65726f2041646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "5125:29:37",
                        "type": "",
                        "value": "ADDRESS IS NOT Zero Address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5098:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5098:57:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5098:57:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5164:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5176:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5187:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5172:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5172:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5164:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_5e968b1b9d679d611ccf949429dd4656124f3d05f600330c38eabd5c429f5b9e__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4996:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5010:4:37",
                "type": ""
              }
            ],
            "src": "4845:351:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5375:174:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5392:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5403:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5385:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5385:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5385:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5426:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5437:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5422:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5422:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5442:2:37",
                        "type": "",
                        "value": "24"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5415:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5415:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5415:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5465:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5476:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5461:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5461:18:37"
                      },
                      {
                        "hexValue": "596f7520617265206e6f7420706172746963697061746564",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "5481:26:37",
                        "type": "",
                        "value": "You are not participated"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5454:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5454:54:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5454:54:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5517:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5529:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5540:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5525:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5525:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5517:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_14e119e374624bd5141fb3d3b6f1df053339f5b657ddfe13cf912bfd50e9b8af__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5352:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5366:4:37",
                "type": ""
              }
            ],
            "src": "5201:348:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5635:103:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5681:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5690:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5693:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "5683:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5683:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5683:12:37"
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
                            "src": "5656:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5665:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5652:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5652:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5677:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "5648:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5648:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "5645:52:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5706:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5722:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "5716:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5716:16:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "5706:6:37"
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
                "src": "5601:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "5612:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5624:6:37",
                "type": ""
              }
            ],
            "src": "5554:184:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5917:160:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5934:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5945:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5927:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5927:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5927:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5968:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5979:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5964:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5964:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5984:2:37",
                        "type": "",
                        "value": "10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5957:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5957:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5957:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6007:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6018:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6003:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6003:18:37"
                      },
                      {
                        "hexValue": "544f4b454e5f4c41434b",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "6023:12:37",
                        "type": "",
                        "value": "TOKEN_LACK"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5996:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5996:40:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5996:40:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6045:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6057:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6068:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6053:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6053:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6045:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_a753c832f5dff5664adf074d4ff580bea611cf44945f22ffe1b00a3d8df0bdb4__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5894:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5908:4:37",
                "type": ""
              }
            ],
            "src": "5743:334:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6256:180:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6273:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6284:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6266:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6266:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6266:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6307:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6318:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6303:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6303:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6323:2:37",
                        "type": "",
                        "value": "30"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6296:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6296:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6296:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6346:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6357:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6342:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6342:18:37"
                      },
                      {
                        "hexValue": "5374616b6520616d6f756e742073686f756c6420626520636f7272656374",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "6362:32:37",
                        "type": "",
                        "value": "Stake amount should be correct"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6335:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6335:60:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6335:60:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6404:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6416:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6427:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6412:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6412:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6404:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_0ab0414546a08082c35f8d614914f9a063567c270f996193e25fed9c5af250ba__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6233:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6247:4:37",
                "type": ""
              }
            ],
            "src": "6082:354:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6598:218:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6608:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6620:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6631:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6616:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6616:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6608:4:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6643:29:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6661:3:37",
                            "type": "",
                            "value": "160"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6666:1:37",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "6657:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6657:11:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6670:1:37",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "6653:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6653:19:37"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "6647:2:37",
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
                        "src": "6688:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "6703:6:37"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "6711:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "6699:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6699:15:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6681:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6681:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6681:34:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6735:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6746:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6731:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6731:18:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "6755:6:37"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "6763:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "6751:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6751:15:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6724:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6724:43:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6724:43:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6787:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6798:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6783:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6783:18:37"
                      },
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "6803:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6776:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6776:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6776:34:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6551:9:37",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "6562:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "6570:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6578:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6589:4:37",
                "type": ""
              }
            ],
            "src": "6441:375:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6995:171:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7012:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7023:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7005:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7005:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7005:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7046:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7057:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7042:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7042:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7062:2:37",
                        "type": "",
                        "value": "21"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7035:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7035:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7035:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7085:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7096:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7081:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7081:18:37"
                      },
                      {
                        "hexValue": "496e637265617365436f6e7472616374204661696c",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7101:23:37",
                        "type": "",
                        "value": "IncreaseContract Fail"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7074:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7074:51:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7074:51:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7134:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7146:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7157:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7142:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7142:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7134:4:37"
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
                "src": "6972:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6986:4:37",
                "type": ""
              }
            ],
            "src": "6821:345:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7345:228:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7362:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7373:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7355:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7355:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7355:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7396:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7407:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7392:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7392:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7412:2:37",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7385:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7385:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7385:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7435:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7446:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7431:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7431:18:37"
                      },
                      {
                        "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7451:34:37",
                        "type": "",
                        "value": "Ownable: new owner is the zero a"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7424:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7424:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7424:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7506:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7517:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7502:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7502:18:37"
                      },
                      {
                        "hexValue": "646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7522:8:37",
                        "type": "",
                        "value": "ddress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7495:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7495:36:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7495:36:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7540:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7552:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7563:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7548:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7548:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7540:4:37"
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
                "src": "7322:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7336:4:37",
                "type": ""
              }
            ],
            "src": "7171:402:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7752:182:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7769:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7780:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7762:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7762:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7762:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7803:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7814:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7799:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7799:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7819:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7792:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7792:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7792:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7842:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7853:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7838:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7838:18:37"
                      },
                      {
                        "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7858:34:37",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7831:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7831:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7831:62:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7902:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7914:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7925:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7910:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7910:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7902:4:37"
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
                "src": "7729:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7743:4:37",
                "type": ""
              }
            ],
            "src": "7578:356:37"
          }
        ]
      },
      "contents": "{\n    { }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_encode_tuple_t_bool_t_uint256__to_t_bool_t_uint256__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, iszero(iszero(value0)))\n        mstore(add(headStart, 32), value1)\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function validator_revert_contract_JMToken(value)\n    {\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_contract$_JMToken_$6142(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_contract_JMToken(value)\n        value0 := value\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_encode_tuple_t_uint32__to_t_uint32__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffff))\n    }\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := calldataload(headStart)\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_contract_JMToken(value)\n        value0 := value\n    }\n    function abi_encode_tuple_t_uint256_t_uint256_t_uint256_t_uint256_t_uint256_t_uint32__to_t_uint256_t_uint256_t_uint256_t_uint256_t_uint256_t_uint32__fromStack_reversed(headStart, value5, value4, value3, value2, value1, value0) -> tail\n    {\n        tail := add(headStart, 192)\n        mstore(headStart, value0)\n        mstore(add(headStart, 32), value1)\n        mstore(add(headStart, 64), value2)\n        mstore(add(headStart, 96), value3)\n        mstore(add(headStart, 128), value4)\n        mstore(add(headStart, 160), and(value5, 0xffffffff))\n    }\n    function abi_encode_tuple_t_stringliteral_0e75d8d12a7dbee9f06677c3321bb311b9f1e86b675875c5f6d32a870ba6ec0c__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 24)\n        mstore(add(headStart, 64), \"You already participated\")\n        tail := add(headStart, 96)\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        diff := sub(x, y)\n        if gt(diff, x) { panic_error_0x11() }\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        product := mul(x, y)\n        if iszero(or(iszero(x), eq(y, div(product, x)))) { panic_error_0x11() }\n    }\n    function checked_div_t_uint256(x, y) -> r\n    {\n        if iszero(y)\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x12)\n            revert(0, 0x24)\n        }\n        r := div(x, y)\n    }\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n        mstore(add(headStart, 32), value1)\n    }\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        if iszero(eq(value, iszero(iszero(value)))) { revert(0, 0) }\n        value0 := value\n    }\n    function abi_encode_tuple_t_stringliteral_3fa08d1bdb203005192b699e199b03078e7204a335f58d9200658261ed42d204__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 40)\n        mstore(add(headStart, 64), \"now State is Staking, Please UnS\")\n        mstore(add(headStart, 96), \"taking!!\")\n        tail := add(headStart, 128)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        sum := add(x, y)\n        if gt(x, sum) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_uint256_t_uint256__to_t_uint256_t_uint256__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, value0)\n        mstore(add(headStart, 32), value1)\n    }\n    function abi_encode_tuple_t_stringliteral_5e968b1b9d679d611ccf949429dd4656124f3d05f600330c38eabd5c429f5b9e__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 27)\n        mstore(add(headStart, 64), \"ADDRESS IS NOT Zero Address\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_14e119e374624bd5141fb3d3b6f1df053339f5b657ddfe13cf912bfd50e9b8af__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 24)\n        mstore(add(headStart, 64), \"You are not participated\")\n        tail := add(headStart, 96)\n    }\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := mload(headStart)\n    }\n    function abi_encode_tuple_t_stringliteral_a753c832f5dff5664adf074d4ff580bea611cf44945f22ffe1b00a3d8df0bdb4__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 10)\n        mstore(add(headStart, 64), \"TOKEN_LACK\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_0ab0414546a08082c35f8d614914f9a063567c270f996193e25fed9c5af250ba__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 30)\n        mstore(add(headStart, 64), \"Stake amount should be correct\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed(headStart, value2, value1, value0) -> tail\n    {\n        tail := add(headStart, 96)\n        let _1 := sub(shl(160, 1), 1)\n        mstore(headStart, and(value0, _1))\n        mstore(add(headStart, 32), and(value1, _1))\n        mstore(add(headStart, 64), value2)\n    }\n    function abi_encode_tuple_t_stringliteral_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 21)\n        mstore(add(headStart, 64), \"IncreaseContract Fail\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"Ownable: new owner is the zero a\")\n        mstore(add(headStart, 96), \"ddress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"Ownable: caller is not the owner\")\n        tail := add(headStart, 96)\n    }\n}",
      "id": 37,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "169:6596:34:-:0;;;554:6;528:32;;566:23;;;653:34;-1:-1:-1;;;;;;653:34:34;;;;;;;725:15;;653:34;725:11;;;566:23;725:11;;:15;:::i;:::-;693:47;;;;1491:254;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;936:32:0;719:10:19;936:18:0;:32::i;:::-;-1:-1:-1;;;;;1581:36:34;;1573:81;;;;-1:-1:-1;;;1573:81:34;;880:2:37;1573:81:34;;;862:21:37;919:2;899:18;;;892:30;958:34;938:18;;;931:62;-1:-1:-1;;;1009:18:37;;;1002:31;1050:19;;1573:81:34;;;;;;;;1680:4;:20;;-1:-1:-1;;;;;;1680:20:34;-1:-1:-1;;;;;1680:20:34;;;;;;;;;;1723:15;-1:-1:-1;1710:28:34;169:6596;;2433:187:0;2506:16;2525:6;;-1:-1:-1;;;;;2541:17:0;;;-1:-1:-1;;;;;;2541:17:0;;;;;;2573:40;;2525:6;;;;;;;2573:40;;2506:16;2573:40;2496:124;2433:187;:::o;14:346:37:-;85:10;127;;;139;;;123:27;170:20;;;;85:10;209:24;;;199:155;;276:10;271:3;267:20;264:1;257:31;311:4;308:1;301:15;339:4;336:1;329:15;199:155;;;14:346;;;;:::o;365:308::-;453:6;506:2;494:9;485:7;481:23;477:32;474:52;;;522:1;519;512:12;474:52;548:16;;-1:-1:-1;;;;;593:31:37;;583:42;;573:70;;639:1;636;629:12;573:70;662:5;365:308;-1:-1:-1;;;365:308:37:o;678:397::-;169:6596:34;;;;;;",
  "deployedSourceMap": "169:6596:34:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;528:32;;;;;;;;;;;;;;;;;;;160:25:37;;;148:2;133:18;528:32:34;;;;;;;;3451:991;;;:::i;:::-;;471:25;;;;;;;;;;;;;;;;1831:101:0;;;;;;;;;;;;;:::i;4488:929:34:-;;;:::i;:::-;;;;389:14:37;;382:22;364:41;;436:2;421:18;;414:34;;;;337:18;4488:929:34;196:258:37;2162:100:34;;;;;;;;;;;;2214:10;2203:22;;;;:10;:22;;;;;2240:15;2203:34;;;;:52;2162:100;1201:85:0;;;;;;;;;;-1:-1:-1;1247:7:0;1273:6;1201:85;;-1:-1:-1;;;;;1273:6:0;;;605:51:37;;593:2;578:18;1201:85:0;459:203:37;1926:161:34;;;;;;;;;;-1:-1:-1;1926:161:34;;;;;:::i;:::-;;:::i;5445:718::-;;;;;;;;;;;;;:::i;:::-;;;1254:14:37;;1247:22;1229:41;;1217:2;1202:18;5445:718:34;1089:187:37;566:23:34;;;;;;;;;;-1:-1:-1;566:23:34;;;;;;;;;;;1455:10:37;1443:23;;;1425:42;;1413:2;1398:18;566:23:34;1281:192:37;2295:1124:34;;;;;;:::i;:::-;;:::i;1312:47::-;;;;;;;;;;-1:-1:-1;1312:47:34;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2209:25:37;;;2265:2;2250:18;;2243:34;;;;2293:18;;;2286:34;;;;2351:2;2336:18;;2329:34;2394:3;2379:19;;2372:35;2456:10;2444:23;2438:3;2423:19;;2416:52;2196:3;2181:19;1312:47:34;1924:550:37;6201:562:34;;;;;;;;;;;;;:::i;1405:45::-;;;;;;;;;;-1:-1:-1;1405:45:34;;;;;:::i;:::-;;;;;;;;;;;;;;;;2081:198:0;;;;;;;;;;-1:-1:-1;2081:198:0;;;;;:::i;:::-;;:::i;3451:991:34:-;3524:10;3510:25;;;;:13;:25;;;;;;;;:33;;:25;:33;3502:70;;;;-1:-1:-1;;;3502:70:34;;2681:2:37;3502:70:34;;;2663:21:37;2720:2;2700:18;;;2693:30;-1:-1:-1;;;2739:18:37;;;2732:54;2803:18;;3502:70:34;;;;;;;;;3698:10;3643:23;3687:22;;;:10;:22;;;;;:34;;;3669:52;;:15;:52;:::i;:::-;3872:11;;;3822:10;3784:23;3811:22;;;:10;:22;;;;;:29;;;;3643:78;;-1:-1:-1;3784:23:34;;3872:11;-1:-1:-1;;;3872:11:34;;;;;3856:13;;;;;;3849:3;;3811:35;;3843:3;;3811:35;:::i;:::-;:41;;;;:::i;:::-;3810:59;;;;:::i;:::-;:73;;;;:::i;:::-;3784:99;-1:-1:-1;3914:23:34;3940:33;3958:15;3784:99;3940:33;:::i;:::-;4000:3;;3914:59;;-1:-1:-1;;;;;;4000:3:34;:12;4013:10;4025:20;4043:2;3914:59;4025:20;:::i;:::-;4000:46;;-1:-1:-1;;;;;;4000:46:34;;;;;;;-1:-1:-1;;;;;3684:32:37;;;4000:46:34;;;3666:51:37;3733:18;;;3726:34;3639:18;;4000:46:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;4091:10:34;4080:22;;;;:10;:22;;;;;;;;4119:15;4080:36;;;;:54;;;4174:13;:25;;;;;;:33;;-1:-1:-1;;4174:33:34;;;4241:22;;;:28;;:32;;-1:-1:-1;;4241:32:34;;;;;;;4332:37;;160:25:37;;;4332:37:34;;133:18:37;4332:37:34;;;;;;;4391:36;;160:25:37;;;4399:10:34;;4391:36;;148:2:37;133:18;4391:36:34;;;;;;;3492:950;;;3451:991::o;1831:101:0:-;1094:13;:11;:13::i;:::-;1895:30:::1;1922:1;1895:18;:30::i;:::-;1831:101::o:0;4488:929:34:-;4580:10;4538:4;4569:22;;;:10;:22;;;;;:28;;;4538:4;;4569:28;;4601:1;4569:33;4561:86;;;;-1:-1:-1;;;4561:86:34;;4255:2:37;4561:86:34;;;4237:21:37;4294:2;4274:18;;;4267:30;4333:34;4313:18;;;4306:62;-1:-1:-1;;;4384:18:37;;;4377:38;4432:19;;4561:86:34;4053:404:37;4561:86:34;4699:13;;4671:10;4660:22;;;;:10;:22;;;;;:36;;;4715:15;;4660:52;;;:::i;:::-;:70;4657:746;;;4793:10;4765:14;4782:22;;;:10;:22;;;;;;;:29;;;4852:4;;:32;;-1:-1:-1;;;4852:32:34;;;;;3666:51:37;;;;3733:18;;;3726:34;;;4782:29:34;-1:-1:-1;;;;;4852:4:34;;;;:13;;3639:18:37;;4852:32:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;4928:10:34;4917:22;;;;:10;:22;;;;;;;;4910:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;4910:29:34;;;4991:13;:25;;;;;;4984:32;;-1:-1:-1;;4984:32:34;;;5073:52;;5101:15;4766:25:37;;4807:18;;;4800:34;;;5073:52:34;;4739:18:37;5073:52:34;;;;;;;-1:-1:-1;5146:4:34;;5152:15;;-1:-1:-1;4488:929:34;-1:-1:-1;4488:929:34:o;4657:746::-;5282:13;;5254:10;5218:21;5243:22;;;:10;:22;;;;;:36;;;5218:21;;5299:15;;5243:52;;5282:13;5243:52;:::i;:::-;5242:72;;;;:::i;:::-;5371:5;;5218:96;;-1:-1:-1;4488:929:34;-1:-1:-1;;4488:929:34:o;1926:161::-;1094:13:0;:11;:13::i;:::-;2011:3:34::1;::::0;-1:-1:-1;;;;;2011:3:34::1;2003:26:::0;1995:65:::1;;;::::0;-1:-1:-1;;;1995:65:34;;5047:2:37;1995:65:34::1;::::0;::::1;5029:21:37::0;5086:2;5066:18;;;5059:30;5125:29;5105:18;;;5098:57;5172:18;;1995:65:34::1;4845:351:37::0;1995:65:34::1;2070:3;:10:::0;;-1:-1:-1;;;;;;2070:10:34::1;-1:-1:-1::0;;;;;2070:10:34;;;::::1;::::0;;;::::1;::::0;;1926:161::o;5445:718::-;5523:10;5486:4;5509:25;;;:13;:25;;;;;;;;:33;;:25;:33;5501:70;;;;-1:-1:-1;;;5501:70:34;;5403:2:37;5501:70:34;;;5385:21:37;5442:2;5422:18;;;5415:30;5481:26;5461:18;;;5454:54;5525:18;;5501:70:34;5201:348:37;5501:70:34;5637:10;5582:23;5626:22;;;:10;:22;;;;;:34;;;5608:52;;:15;:52;:::i;:::-;5811:11;;;5761:10;5723:23;5750:22;;;:10;:22;;;;;:29;;;;5582:78;;-1:-1:-1;5723:23:34;;5811:11;-1:-1:-1;;;5811:11:34;;;;;5795:13;;;;;;5788:3;;5750:35;;5782:3;;5750:35;:::i;:::-;:41;;;;:::i;:::-;5749:59;;;;:::i;:::-;:73;;;;:::i;:::-;5723:99;-1:-1:-1;5853:23:34;5879:33;5897:15;5723:99;5879:33;:::i;:::-;5940:3;;5853:59;;-1:-1:-1;;;;;;5940:3:34;:12;5953:10;5965:20;5983:2;5853:59;5965:20;:::i;:::-;5940:46;;-1:-1:-1;;;;;;5940:46:34;;;;;;;-1:-1:-1;;;;;3684:32:37;;;5940:46:34;;;3666:51:37;3733:18;;;3726:34;3639:18;;5940:46:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6023:14;2214:10;2203:22;;;;:10;:22;;;;;2240:15;2203:34;;;;:52;2162:100;6023:14;6098:36;;160:25:37;;;6106:10:34;;6098:36;;148:2:37;133:18;6098:36:34;;;;;;;6152:4;6145:11;;;;;5445:718;:::o;2295:1124::-;1846:3;;:28;;-1:-1:-1;;;1846:28:34;;1868:4;1846:28;;;605:51:37;2382:4:34;;2361:11;;;;-1:-1:-1;;;;;1846:3:34;;:13;;578:18:37;;1846:28:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:37;1838:60;;;;-1:-1:-1;;;1838:60:34;;5945:2:37;1838:60:34;;;5927:21:37;5984:2;5964:18;;;5957:30;-1:-1:-1;;;6003:18:37;;;5996:40;6053:18;;1838:60:34;5743:334:37;1838:60:34;2419:1:::1;2405:11;:15;2397:58;;;::::0;-1:-1:-1;;;2397:58:34;;6284:2:37;2397:58:34::1;::::0;::::1;6266:21:37::0;6323:2;6303:18;;;6296:30;6362:32;6342:18;;;6335:60;6412:18;;2397:58:34::1;6082:354:37::0;2397:58:34::1;2501:10;2487:25;::::0;;;:13:::1;:25;::::0;;;;;::::1;;:34;2479:71;;;::::0;-1:-1:-1;;;2479:71:34;;2681:2:37;2479:71:34::1;::::0;::::1;2663:21:37::0;2720:2;2700:18;;;2693:30;-1:-1:-1;;;2739:18:37;;;2732:54;2803:18;;2479:71:34::1;:348:37::0;:71:34::1;2649:10;2638:22;::::0;;;:10:::1;:22;::::0;;;;:28:::1;;::::0;::::1;;2670:1;2638:33:::0;2635:74:::1;;2693:5;2686:12;;;;2635:74;2734:4;::::0;:117:::1;::::0;-1:-1:-1;;;2734:117:34;;2778:10:::1;2734:117;::::0;::::1;6681:34:37::0;2811:4:34::1;6731:18:37::0;;;6724:43;6783:18;;;6776:34;;;2719:12:34::1;::::0;-1:-1:-1;;;;;2734:4:34::1;::::0;:30:::1;::::0;6616:18:37;;2734:117:34::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2719:132;;2869:7;2861:40;;;::::0;-1:-1:-1;;;2861:40:34;;7023:2:37;2861:40:34::1;::::0;::::1;7005:21:37::0;7062:2;7042:18;;;7035:30;-1:-1:-1;;;7081:18:37;;;7074:51;7142:18;;2861:40:34::1;6821:345:37::0;2861:40:34::1;2911:4;::::0;:57:::1;::::0;-1:-1:-1;;;2911:57:34;;2929:10:::1;2911:57;::::0;::::1;6681:34:37::0;2949:4:34::1;6731:18:37::0;;;6724:43;6783:18;;;6776:34;;;-1:-1:-1;;;;;2911:4:34;;::::1;::::0;:17:::1;::::0;6616:18:37;;2911:57:34::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;3013:10:34::1;2999:25;::::0;;;:13:::1;:25;::::0;;;;;;;:32;;3027:4:::1;-1:-1:-1::0;;2999:32:34;;::::1;::::0;::::1;::::0;;;3067:277;;::::1;::::0;::::1;::::0;;3116:15:::1;3067:277:::0;;;;;::::1;::::0;;;;;;;;;;;;;;;;;;;;;;;;;;;3042:22;;;:10:::1;:22:::0;;;;;;:302;;;;;;;;::::1;::::0;;;;;::::1;::::0;::::1;::::0;;;::::1;::::0;::::1;::::0;;;::::1;::::0;::::1;::::0;;;::::1;::::0;;::::1;::::0;;-1:-1:-1;;3042:302:34::1;3067:277;3042:302:::0;;::::1;::::0;;;::::1;::::0;;;3360:31;;160:25:37;;;3360:31:34::1;::::0;133:18:37;3360:31:34::1;;;;;;;3408:4;3401:11;;;1908:1;2295:1124:::0;;;;:::o;6201:562::-;6284:10;6248:7;6270:25;;;:13;:25;;;;;;;;:33;;:25;:33;6267:490;;6373:10;6318:23;6362:22;;;:10;:22;;;;;:34;;;6344:52;;:15;:52;:::i;:::-;6551:11;;;6501:10;6463:23;6490:22;;;:10;:22;;;;;:29;;;;6318:78;;-1:-1:-1;6463:23:34;;6551:11;-1:-1:-1;;;6551:11:34;;;;;6535:13;;;;;;6528:3;;6490:35;;6522:3;;6490:35;:::i;:::-;:41;;;;:::i;:::-;6489:59;;;;:::i;:::-;:73;;;;:::i;:::-;6463:99;-1:-1:-1;6597:23:34;6623:33;6641:15;6463:99;6623:33;:::i;:::-;6597:59;6201:562;-1:-1:-1;;;;6201:562:34:o;6267:490::-;-1:-1:-1;6745:1:34;;6201:562::o;2081:198:0:-;1094:13;:11;:13::i;:::-;-1:-1:-1;;;;;2169:22:0;::::1;2161:73;;;::::0;-1:-1:-1;;;2161:73:0;;7373:2:37;2161:73:0::1;::::0;::::1;7355:21:37::0;7412:2;7392:18;;;7385:30;7451:34;7431:18;;;7424:62;-1:-1:-1;;;7502:18:37;;;7495:36;7548:19;;2161:73:0::1;7171:402:37::0;2161:73:0::1;2244:28;2263:8;2244:18;:28::i;:::-;2081:198:::0;:::o;1359:130::-;1247:7;1273:6;-1:-1:-1;;;;;1273:6:0;719:10:19;1422:23:0;1414:68;;;;-1:-1:-1;;;1414:68:0;;7780:2:37;1414:68:0;;;7762:21:37;;;7799:18;;;7792:30;7858:34;7838:18;;;7831:62;7910:18;;1414:68:0;7578:356:37;2433:187:0;2506:16;2525:6;;-1:-1:-1;;;;;2541:17:0;;;-1:-1:-1;;;;;;2541:17:0;;;;;;2573:40;;2525:6;;;;;;;2573:40;;2506:16;2573:40;2496:124;2433:187;:::o;667:140:37:-;-1:-1:-1;;;;;751:31:37;;741:42;;731:70;;797:1;794;787:12;812:272;887:6;940:2;928:9;919:7;915:23;911:32;908:52;;;956:1;953;946:12;908:52;995:9;982:23;1014:40;1048:5;1014:40;:::i;:::-;1073:5;812:272;-1:-1:-1;;;812:272:37:o;1478:180::-;1537:6;1590:2;1578:9;1569:7;1565:23;1561:32;1558:52;;;1606:1;1603;1596:12;1558:52;-1:-1:-1;1629:23:37;;1478:180;-1:-1:-1;1478:180:37:o;2832:127::-;2893:10;2888:3;2884:20;2881:1;2874:31;2924:4;2921:1;2914:15;2948:4;2945:1;2938:15;2964:128;3031:9;;;3052:11;;;3049:37;;;3066:18;;:::i;:::-;2964:128;;;;:::o;3097:168::-;3170:9;;;3201;;3218:15;;;3212:22;;3198:37;3188:71;;3239:18;;:::i;3270:217::-;3310:1;3336;3326:132;;3380:10;3375:3;3371:20;3368:1;3361:31;3415:4;3412:1;3405:15;3443:4;3440:1;3433:15;3326:132;-1:-1:-1;3472:9:37;;3270:217::o;3771:277::-;3838:6;3891:2;3879:9;3870:7;3866:23;3862:32;3859:52;;;3907:1;3904;3897:12;3859:52;3939:9;3933:16;3992:5;3985:13;3978:21;3971:5;3968:32;3958:60;;4014:1;4011;4004:12;4462:125;4527:9;;;4548:10;;;4545:36;;;4561:18;;:::i;5554:184::-;5624:6;5677:2;5665:9;5656:7;5652:23;5648:32;5645:52;;;5693:1;5690;5683:12;5645:52;-1:-1:-1;5716:16:37;;5554:184;-1:-1:-1;5554:184:37:o",
  "source": "// SPDX-License-Identifier: GPL-3.0-only\npragma solidity ^0.8.0;\n\nimport \"./VJMToken.sol\";\nimport \"./JMToken.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\n\ncontract Staking is Ownable {\n    event Staked(address indexed from, uint256 amount);\n    event UnStaked(address indexed from, uint256 unStakedTime);\n    event UnStakedClaimed(address indexed from, uint256 unStakedTime, uint256 amount);\n    event Claimed(address indexed from, uint256 amount);\n   \n    uint256 public Deploytime; // 프로제트 시작일\n    uint256 public decimals = 10**18;\n    uint32 public APR = 150; // 이자율\n    uint32 private yearsDuration = 31536000;\n    uint32 private dayDuration = 86400;\n    uint256 private stakingExpire = dayDuration * 3; // 스테이킹 종료 3일  // test = 180 -> 3분\n    VJMToken vJmt;  // 스테이킹 할 토큰\n    JMToken jmt; // 스테이킹 보상 토큰\n\n    struct StakeInfo {        \n        uint256 startTS; //스테이킹 시작 시간\n        uint256 claimedTime; // 마지막 으로클레임한 시간 \n        uint256 unStakingTime; // 언스테이킹한 시간\n        uint256 amount; // 스테이킹 양\n        uint256 totalClaimed; //클레임한 토큰 decimals적용하여 계산\n        uint32 state; // 스테이킹 상태 스테이킹==1, unstaking==2\n    }\n\n    mapping(address => StakeInfo) public stakeInfos; // 주소당 스테이킹 정보 저장\n    mapping(address => bool) public addressStaked;  // 주소당 스테이킹 상태\n\n    constructor(VJMToken _tokenAddress) { // staking 할 erc20  토큰 정보\n        require(address(_tokenAddress) != address(0),\"Token Address cannot be address 0\");                \n        vJmt = _tokenAddress;\n        Deploytime = block.timestamp;\n    }\n\n    // 현재 토큰 분배 가능한지 \n    modifier Claimable(uint256 amount) {\n        require(jmt.balanceOf(address(this)) > amount, \"TOKEN_LACK\");\n        _;\n    }\n    \n    function setJMTokenAddress(JMToken _jmt) external onlyOwner{\n        require(address(jmt) == address(0),\"ADDRESS IS NOT Zero Address\");\n        jmt = _jmt;\n    }\n\n    //set stakeInfoe startTime // get은 stakeinfos(address) 이용 \n    function setStakeInfo() public {\n        stakeInfos[msg.sender].claimedTime = block.timestamp;\n    }\n\n\n    //토큰 스테이킹\n    function stakeToken(uint256 stakeAmount) public payable Claimable(stakeAmount) returns(bool){\n        require(stakeAmount > 0, \"Stake amount should be correct\"); // 양 체크\n        require(addressStaked[msg.sender] == false, \"You already participated\"); // 스테이킹 여부\n        // 언스 상태에서 스테이킹 안댐 \n        if(stakeInfos[msg.sender].state == 2){\n            return false;\n        }\n\n        bool success = vJmt.increaseContractAllowance(\n            msg.sender, \n            address(this),\n            stakeAmount\n        );\n        require(success,\"IncreaseContract Fail\");\n        vJmt.transferFrom(msg.sender, address(this), stakeAmount); // vjmt토큰 전송\n        addressStaked[msg.sender] = true;\n\n        stakeInfos[msg.sender] = StakeInfo({                \n            startTS: block.timestamp,\n            claimedTime: block.timestamp, //클레임한 시간 \n            unStakingTime: 0,\n            amount: stakeAmount, // 스테이킹한 양\n            totalClaimed: 0,\n            state: 1\n        });\n\n        emit Staked(msg.sender, stakeAmount);\n        return true;\n    }   \n\n    //언스테이킹 \n    function unStakingToken() public payable {\n        require(addressStaked[msg.sender] == true, \"You already participated\"); // 스테이킹 여부\n    \n        // staking 보상 수령\n        uint256 stakingDuration = block.timestamp - stakeInfos[msg.sender].claimedTime; // 마지막 클레임이후 스테이킹한 기간 \n        uint256 persecondAmount = (stakeInfos[msg.sender].amount * APR / 100) / yearsDuration / dayDuration; // 초당 리워드 \n        uint256 claimableAmount = persecondAmount * stakingDuration; // 최종 보상\n        jmt.transfer(msg.sender, claimableAmount / 10); //vjmt:jmt1:10 비율 \n\n        stakeInfos[msg.sender].unStakingTime = block.timestamp; // 언스테이킹한 시점 \n        addressStaked[msg.sender] = false; // 스테이킹 종료 \n        stakeInfos[msg.sender].state = 2; // 언스테이킹 토큰 클레임 가능\n\n        emit UnStaked(msg.sender, block.timestamp); //jmt \n        emit Claimed(msg.sender, claimableAmount); // vjmt\n    }\n\n    //언스테이킹 토큰 클레임 \n    function unStakingClaime() public payable returns(bool,uint256){\n        require(stakeInfos[msg.sender].state == 2, \"now State is Staking, Please UnStaking!!\");\n        if(stakeInfos[msg.sender].unStakingTime + stakingExpire < block.timestamp){ //클레임 가능 \n            uint256 amount = stakeInfos[msg.sender].amount; // 스테이킹한 벨류 \n            vJmt.transfer(msg.sender,amount); // 전송 \n\n            delete stakeInfos[msg.sender]; // 스테이킹 정보 제거 \n            delete addressStaked[msg.sender]; // 스테이킹 상태 주소 제거 \n            emit UnStakedClaimed(msg.sender, block.timestamp, amount);\n            return(true, block.timestamp);\n        }else{ // 클레임 불가 \n            uint256 remainingTime = (stakeInfos[msg.sender].unStakingTime + stakingExpire) - block.timestamp; // 보상가능까지 남은 시간\n            return(false, remainingTime);\n        }\n       \n    }\n\n\n    // 보상 수령\n    function claimReward() external returns (bool){\n        require(addressStaked[msg.sender] == true, \"You are not participated\");\n\n        uint256 stakingDuration = block.timestamp - stakeInfos[msg.sender].claimedTime; // 마지막 클레임이후 스테이킹한 기간 \n        uint256 persecondAmount = (stakeInfos[msg.sender].amount * APR / 100) / yearsDuration / dayDuration; // 초당 리워드 \n        uint256 claimableAmount = persecondAmount * stakingDuration; // 최종 보상\n\n        jmt.transfer(msg.sender, claimableAmount / 10); //vjmt:jmt == 10:1 비율 \n        setStakeInfo(); // 클레임시간 현재 시간으로 수정\n        emit Claimed(msg.sender, claimableAmount);\n\n        return true;\n    }\n\n    // 보상 가능한 수량 \n    function claimableReward() public view returns(uint256) {\n        if(addressStaked[msg.sender] == true){\n            uint256 stakingDuration = block.timestamp - stakeInfos[msg.sender].claimedTime; // 마지막 클레임이후 스테이킹한 기간 \n            uint256 persecondAmount = (stakeInfos[msg.sender].amount * APR / 100) / yearsDuration / dayDuration; // 초당 리워드 \n            uint256 claimableAmount = persecondAmount * stakingDuration; // 최종 보상\n            return claimableAmount;\n        }else{\n            return 0;\n        }\n    }\n}",
  "sourcePath": "/Users/rokrokss/workspace/hyein/BEB-05-JMT/contract/contracts/Staking.sol",
  "ast": {
    "absolutePath": "project:/contracts/Staking.sol",
    "exportedSymbols": {
      "Babylonian": [
        5187
      ],
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
      "JMToken": [
        6142
      ],
      "LPT": [
        6195
      ],
      "LiquidityPool": [
        7011
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
      "Staking": [
        10504
      ],
      "Strings": [
        4590
      ],
      "VJMToken": [
        10764
      ]
    },
    "id": 10505,
    "license": "GPL-3.0-only",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9926,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "41:23:34"
      },
      {
        "absolutePath": "project:/contracts/VJMToken.sol",
        "file": "./VJMToken.sol",
        "id": 9927,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 10505,
        "sourceUnit": 10765,
        "src": "66:24:34",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/contracts/JMToken.sol",
        "file": "./JMToken.sol",
        "id": 9928,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 10505,
        "sourceUnit": 6143,
        "src": "91:23:34",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 9929,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 10505,
        "sourceUnit": 113,
        "src": "115:52:34",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 9930,
              "name": "Ownable",
              "nameLocations": [
                "189:7:34"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 112,
              "src": "189:7:34"
            },
            "id": 9931,
            "nodeType": "InheritanceSpecifier",
            "src": "189:7:34"
          }
        ],
        "canonicalName": "Staking",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 10504,
        "linearizedBaseContracts": [
          10504,
          112,
          4290
        ],
        "name": "Staking",
        "nameLocation": "178:7:34",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "eventSelector": "9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d",
            "id": 9937,
            "name": "Staked",
            "nameLocation": "209:6:34",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9936,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9933,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "232:4:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9937,
                  "src": "216:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9932,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "216:7:34",
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
                  "id": 9935,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "246:6:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9937,
                  "src": "238:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9934,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "215:38:34"
            },
            "src": "203:51:34"
          },
          {
            "anonymous": false,
            "eventSelector": "79d3df6837cc49ff0e09fd3258e6e45594e0703445bb06825e9d75156eaee8f0",
            "id": 9943,
            "name": "UnStaked",
            "nameLocation": "265:8:34",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9942,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9939,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "290:4:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9943,
                  "src": "274:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9938,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "274:7:34",
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
                  "id": 9941,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "unStakedTime",
                  "nameLocation": "304:12:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9943,
                  "src": "296:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9940,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "296:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "273:44:34"
            },
            "src": "259:59:34"
          },
          {
            "anonymous": false,
            "eventSelector": "ec4c5e119b3c2211affd553a6167326af1472cb3b7966b96b0f84a56d8d5317c",
            "id": 9951,
            "name": "UnStakedClaimed",
            "nameLocation": "329:15:34",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9950,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9945,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "361:4:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9951,
                  "src": "345:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9944,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "345:7:34",
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
                  "id": 9947,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "unStakedTime",
                  "nameLocation": "375:12:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9951,
                  "src": "367:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9946,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "367:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9949,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "397:6:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9951,
                  "src": "389:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9948,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "389:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "344:60:34"
            },
            "src": "323:82:34"
          },
          {
            "anonymous": false,
            "eventSelector": "d8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a",
            "id": 9957,
            "name": "Claimed",
            "nameLocation": "416:7:34",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9956,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9953,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "440:4:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9957,
                  "src": "424:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9952,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:7:34",
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
                  "id": 9955,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "454:6:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9957,
                  "src": "446:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9954,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "446:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "423:38:34"
            },
            "src": "410:52:34"
          },
          {
            "constant": false,
            "functionSelector": "397eee80",
            "id": 9959,
            "mutability": "mutable",
            "name": "Deploytime",
            "nameLocation": "486:10:34",
            "nodeType": "VariableDeclaration",
            "scope": 10504,
            "src": "471:25:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9958,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "471:7:34",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "313ce567",
            "id": 9964,
            "mutability": "mutable",
            "name": "decimals",
            "nameLocation": "543:8:34",
            "nodeType": "VariableDeclaration",
            "scope": 10504,
            "src": "528:32:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9960,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "528:7:34",
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
              "id": 9963,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "3130",
                "id": 9961,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "554:2:34",
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
                "id": 9962,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "558:2:34",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_18_by_1",
                  "typeString": "int_const 18"
                },
                "value": "18"
              },
              "src": "554:6:34",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "bd30558e",
            "id": 9967,
            "mutability": "mutable",
            "name": "APR",
            "nameLocation": "580:3:34",
            "nodeType": "VariableDeclaration",
            "scope": 10504,
            "src": "566:23:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint32",
              "typeString": "uint32"
            },
            "typeName": {
              "id": 9965,
              "name": "uint32",
              "nodeType": "ElementaryTypeName",
              "src": "566:6:34",
              "typeDescriptions": {
                "typeIdentifier": "t_uint32",
                "typeString": "uint32"
              }
            },
            "value": {
              "hexValue": "313530",
              "id": 9966,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "586:3:34",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_150_by_1",
                "typeString": "int_const 150"
              },
              "value": "150"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 9970,
            "mutability": "mutable",
            "name": "yearsDuration",
            "nameLocation": "623:13:34",
            "nodeType": "VariableDeclaration",
            "scope": 10504,
            "src": "608:39:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint32",
              "typeString": "uint32"
            },
            "typeName": {
              "id": 9968,
              "name": "uint32",
              "nodeType": "ElementaryTypeName",
              "src": "608:6:34",
              "typeDescriptions": {
                "typeIdentifier": "t_uint32",
                "typeString": "uint32"
              }
            },
            "value": {
              "hexValue": "3331353336303030",
              "id": 9969,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "639:8:34",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_31536000_by_1",
                "typeString": "int_const 31536000"
              },
              "value": "31536000"
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 9973,
            "mutability": "mutable",
            "name": "dayDuration",
            "nameLocation": "668:11:34",
            "nodeType": "VariableDeclaration",
            "scope": 10504,
            "src": "653:34:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint32",
              "typeString": "uint32"
            },
            "typeName": {
              "id": 9971,
              "name": "uint32",
              "nodeType": "ElementaryTypeName",
              "src": "653:6:34",
              "typeDescriptions": {
                "typeIdentifier": "t_uint32",
                "typeString": "uint32"
              }
            },
            "value": {
              "hexValue": "3836343030",
              "id": 9972,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "682:5:34",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_86400_by_1",
                "typeString": "int_const 86400"
              },
              "value": "86400"
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 9978,
            "mutability": "mutable",
            "name": "stakingExpire",
            "nameLocation": "709:13:34",
            "nodeType": "VariableDeclaration",
            "scope": 10504,
            "src": "693:47:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9974,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "693:7:34",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_uint32",
                "typeString": "uint32"
              },
              "id": 9977,
              "isConstant": false,
              "isLValue": false,
              "isPure": false,
              "lValueRequested": false,
              "leftExpression": {
                "id": 9975,
                "name": "dayDuration",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 9973,
                "src": "725:11:34",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint32",
                  "typeString": "uint32"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "*",
              "rightExpression": {
                "hexValue": "33",
                "id": 9976,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "739:1:34",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_3_by_1",
                  "typeString": "int_const 3"
                },
                "value": "3"
              },
              "src": "725:15:34",
              "typeDescriptions": {
                "typeIdentifier": "t_uint32",
                "typeString": "uint32"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 9981,
            "mutability": "mutable",
            "name": "vJmt",
            "nameLocation": "806:4:34",
            "nodeType": "VariableDeclaration",
            "scope": 10504,
            "src": "797:13:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_VJMToken_$10764",
              "typeString": "contract VJMToken"
            },
            "typeName": {
              "id": 9980,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 9979,
                "name": "VJMToken",
                "nameLocations": [
                  "797:8:34"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 10764,
                "src": "797:8:34"
              },
              "referencedDeclaration": 10764,
              "src": "797:8:34",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_VJMToken_$10764",
                "typeString": "contract VJMToken"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 9984,
            "mutability": "mutable",
            "name": "jmt",
            "nameLocation": "852:3:34",
            "nodeType": "VariableDeclaration",
            "scope": 10504,
            "src": "844:11:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_JMToken_$6142",
              "typeString": "contract JMToken"
            },
            "typeName": {
              "id": 9983,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 9982,
                "name": "JMToken",
                "nameLocations": [
                  "844:7:34"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 6142,
                "src": "844:7:34"
              },
              "referencedDeclaration": 6142,
              "src": "844:7:34",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_JMToken_$6142",
                "typeString": "contract JMToken"
              }
            },
            "visibility": "internal"
          },
          {
            "canonicalName": "Staking.StakeInfo",
            "id": 9997,
            "members": [
              {
                "constant": false,
                "id": 9986,
                "mutability": "mutable",
                "name": "startTS",
                "nameLocation": "935:7:34",
                "nodeType": "VariableDeclaration",
                "scope": 9997,
                "src": "927:15:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 9985,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "927:7:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 9988,
                "mutability": "mutable",
                "name": "claimedTime",
                "nameLocation": "989:11:34",
                "nodeType": "VariableDeclaration",
                "scope": 9997,
                "src": "981:19:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 9987,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "981:7:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 9990,
                "mutability": "mutable",
                "name": "unStakingTime",
                "nameLocation": "1058:13:34",
                "nodeType": "VariableDeclaration",
                "scope": 9997,
                "src": "1050:21:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 9989,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1050:7:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 9992,
                "mutability": "mutable",
                "name": "amount",
                "nameLocation": "1118:6:34",
                "nodeType": "VariableDeclaration",
                "scope": 9997,
                "src": "1110:14:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 9991,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1110:7:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 9994,
                "mutability": "mutable",
                "name": "totalClaimed",
                "nameLocation": "1162:12:34",
                "nodeType": "VariableDeclaration",
                "scope": 9997,
                "src": "1154:20:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 9993,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1154:7:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 9996,
                "mutability": "mutable",
                "name": "state",
                "nameLocation": "1241:5:34",
                "nodeType": "VariableDeclaration",
                "scope": 9997,
                "src": "1234:12:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint32",
                  "typeString": "uint32"
                },
                "typeName": {
                  "id": 9995,
                  "name": "uint32",
                  "nodeType": "ElementaryTypeName",
                  "src": "1234:6:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "StakeInfo",
            "nameLocation": "899:9:34",
            "nodeType": "StructDefinition",
            "scope": 10504,
            "src": "892:414:34",
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "dfbf9def",
            "id": 10002,
            "mutability": "mutable",
            "name": "stakeInfos",
            "nameLocation": "1349:10:34",
            "nodeType": "VariableDeclaration",
            "scope": 10504,
            "src": "1312:47:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$9997_storage_$",
              "typeString": "mapping(address => struct Staking.StakeInfo)"
            },
            "typeName": {
              "id": 10001,
              "keyType": {
                "id": 9998,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1320:7:34",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1312:29:34",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$9997_storage_$",
                "typeString": "mapping(address => struct Staking.StakeInfo)"
              },
              "valueType": {
                "id": 10000,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 9999,
                  "name": "StakeInfo",
                  "nameLocations": [
                    "1331:9:34"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 9997,
                  "src": "1331:9:34"
                },
                "referencedDeclaration": 9997,
                "src": "1331:9:34",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_StakeInfo_$9997_storage_ptr",
                  "typeString": "struct Staking.StakeInfo"
                }
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "e74d059f",
            "id": 10006,
            "mutability": "mutable",
            "name": "addressStaked",
            "nameLocation": "1437:13:34",
            "nodeType": "VariableDeclaration",
            "scope": 10504,
            "src": "1405:45:34",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 10005,
              "keyType": {
                "id": 10003,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1413:7:34",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1405:24:34",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueType": {
                "id": 10004,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "1424:4:34",
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
              "id": 10034,
              "nodeType": "Block",
              "src": "1527:218:34",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 10021,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "id": 10015,
                              "name": "_tokenAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10009,
                              "src": "1589:13:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VJMToken_$10764",
                                "typeString": "contract VJMToken"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_VJMToken_$10764",
                                "typeString": "contract VJMToken"
                              }
                            ],
                            "id": 10014,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1581:7:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 10013,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1581:7:34",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 10016,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1581:22:34",
                          "tryCall": false,
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
                              "id": 10019,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1615:1:34",
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
                            "id": 10018,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1607:7:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 10017,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1607:7:34",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 10020,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1607:10:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1581:36:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "546f6b656e20416464726573732063616e6e6f7420626520616464726573732030",
                        "id": 10022,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1618:35:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f2202c1f725dcbd51d00258bd50ca4766e24b49c836557e7bdc6a84c67402a7f",
                          "typeString": "literal_string \"Token Address cannot be address 0\""
                        },
                        "value": "Token Address cannot be address 0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f2202c1f725dcbd51d00258bd50ca4766e24b49c836557e7bdc6a84c67402a7f",
                          "typeString": "literal_string \"Token Address cannot be address 0\""
                        }
                      ],
                      "id": 10012,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1573:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 10023,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1573:81:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10024,
                  "nodeType": "ExpressionStatement",
                  "src": "1573:81:34"
                },
                {
                  "expression": {
                    "id": 10027,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10025,
                      "name": "vJmt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9981,
                      "src": "1680:4:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_VJMToken_$10764",
                        "typeString": "contract VJMToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 10026,
                      "name": "_tokenAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10009,
                      "src": "1687:13:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_VJMToken_$10764",
                        "typeString": "contract VJMToken"
                      }
                    },
                    "src": "1680:20:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_VJMToken_$10764",
                      "typeString": "contract VJMToken"
                    }
                  },
                  "id": 10028,
                  "nodeType": "ExpressionStatement",
                  "src": "1680:20:34"
                },
                {
                  "expression": {
                    "id": 10032,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10029,
                      "name": "Deploytime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9959,
                      "src": "1710:10:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 10030,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967292,
                        "src": "1723:5:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 10031,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1729:9:34",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "1723:15:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1710:28:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10033,
                  "nodeType": "ExpressionStatement",
                  "src": "1710:28:34"
                }
              ]
            },
            "id": 10035,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10010,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10009,
                  "mutability": "mutable",
                  "name": "_tokenAddress",
                  "nameLocation": "1512:13:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10035,
                  "src": "1503:22:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_VJMToken_$10764",
                    "typeString": "contract VJMToken"
                  },
                  "typeName": {
                    "id": 10008,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 10007,
                      "name": "VJMToken",
                      "nameLocations": [
                        "1503:8:34"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 10764,
                      "src": "1503:8:34"
                    },
                    "referencedDeclaration": 10764,
                    "src": "1503:8:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_VJMToken_$10764",
                      "typeString": "contract VJMToken"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1502:24:34"
            },
            "returnParameters": {
              "id": 10011,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1527:0:34"
            },
            "scope": 10504,
            "src": "1491:254:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10053,
              "nodeType": "Block",
              "src": "1828:88:34",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 10048,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 10044,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967268,
                                  "src": "1868:4:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_Staking_$10504",
                                    "typeString": "contract Staking"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_Staking_$10504",
                                    "typeString": "contract Staking"
                                  }
                                ],
                                "id": 10043,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1860:7:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 10042,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1860:7:34",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 10045,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1860:13:34",
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
                            "expression": {
                              "id": 10040,
                              "name": "jmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9984,
                              "src": "1846:3:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_JMToken_$6142",
                                "typeString": "contract JMToken"
                              }
                            },
                            "id": 10041,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1850:9:34",
                            "memberName": "balanceOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1986,
                            "src": "1846:13:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view external returns (uint256)"
                            }
                          },
                          "id": 10046,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1846:28:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 10047,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10037,
                          "src": "1877:6:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1846:37:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "544f4b454e5f4c41434b",
                        "id": 10049,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1885:12:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a753c832f5dff5664adf074d4ff580bea611cf44945f22ffe1b00a3d8df0bdb4",
                          "typeString": "literal_string \"TOKEN_LACK\""
                        },
                        "value": "TOKEN_LACK"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a753c832f5dff5664adf074d4ff580bea611cf44945f22ffe1b00a3d8df0bdb4",
                          "typeString": "literal_string \"TOKEN_LACK\""
                        }
                      ],
                      "id": 10039,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1838:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 10050,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1838:60:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10051,
                  "nodeType": "ExpressionStatement",
                  "src": "1838:60:34"
                },
                {
                  "id": 10052,
                  "nodeType": "PlaceholderStatement",
                  "src": "1908:1:34"
                }
              ]
            },
            "id": 10054,
            "name": "Claimable",
            "nameLocation": "1802:9:34",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 10038,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10037,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1820:6:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10054,
                  "src": "1812:14:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10036,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1812:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1811:16:34"
            },
            "src": "1793:123:34",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 10079,
              "nodeType": "Block",
              "src": "1985:102:34",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 10071,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "id": 10065,
                              "name": "jmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9984,
                              "src": "2011:3:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_JMToken_$6142",
                                "typeString": "contract JMToken"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_JMToken_$6142",
                                "typeString": "contract JMToken"
                              }
                            ],
                            "id": 10064,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2003:7:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 10063,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2003:7:34",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 10066,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2003:12:34",
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
                              "id": 10069,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2027:1:34",
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
                            "id": 10068,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2019:7:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 10067,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2019:7:34",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 10070,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2019:10:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2003:26:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "41444452455353204953204e4f54205a65726f2041646472657373",
                        "id": 10072,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2030:29:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5e968b1b9d679d611ccf949429dd4656124f3d05f600330c38eabd5c429f5b9e",
                          "typeString": "literal_string \"ADDRESS IS NOT Zero Address\""
                        },
                        "value": "ADDRESS IS NOT Zero Address"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5e968b1b9d679d611ccf949429dd4656124f3d05f600330c38eabd5c429f5b9e",
                          "typeString": "literal_string \"ADDRESS IS NOT Zero Address\""
                        }
                      ],
                      "id": 10062,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1995:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 10073,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1995:65:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10074,
                  "nodeType": "ExpressionStatement",
                  "src": "1995:65:34"
                },
                {
                  "expression": {
                    "id": 10077,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10075,
                      "name": "jmt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9984,
                      "src": "2070:3:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_JMToken_$6142",
                        "typeString": "contract JMToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 10076,
                      "name": "_jmt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10057,
                      "src": "2076:4:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_JMToken_$6142",
                        "typeString": "contract JMToken"
                      }
                    },
                    "src": "2070:10:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_JMToken_$6142",
                      "typeString": "contract JMToken"
                    }
                  },
                  "id": 10078,
                  "nodeType": "ExpressionStatement",
                  "src": "2070:10:34"
                }
              ]
            },
            "functionSelector": "91de6b16",
            "id": 10080,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 10060,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 10059,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "1976:9:34"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "1976:9:34"
                },
                "nodeType": "ModifierInvocation",
                "src": "1976:9:34"
              }
            ],
            "name": "setJMTokenAddress",
            "nameLocation": "1935:17:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10058,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10057,
                  "mutability": "mutable",
                  "name": "_jmt",
                  "nameLocation": "1961:4:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10080,
                  "src": "1953:12:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_JMToken_$6142",
                    "typeString": "contract JMToken"
                  },
                  "typeName": {
                    "id": 10056,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 10055,
                      "name": "JMToken",
                      "nameLocations": [
                        "1953:7:34"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6142,
                      "src": "1953:7:34"
                    },
                    "referencedDeclaration": 6142,
                    "src": "1953:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_JMToken_$6142",
                      "typeString": "contract JMToken"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1952:14:34"
            },
            "returnParameters": {
              "id": 10061,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1985:0:34"
            },
            "scope": 10504,
            "src": "1926:161:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10092,
              "nodeType": "Block",
              "src": "2193:69:34",
              "statements": [
                {
                  "expression": {
                    "id": 10090,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 10083,
                          "name": "stakeInfos",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10002,
                          "src": "2203:10:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$9997_storage_$",
                            "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                          }
                        },
                        "id": 10086,
                        "indexExpression": {
                          "expression": {
                            "id": 10084,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "2214:3:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 10085,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2218:6:34",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "2214:10:34",
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
                        "src": "2203:22:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StakeInfo_$9997_storage",
                          "typeString": "struct Staking.StakeInfo storage ref"
                        }
                      },
                      "id": 10087,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "2226:11:34",
                      "memberName": "claimedTime",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9988,
                      "src": "2203:34:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 10088,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967292,
                        "src": "2240:5:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 10089,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2246:9:34",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "2240:15:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2203:52:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10091,
                  "nodeType": "ExpressionStatement",
                  "src": "2203:52:34"
                }
              ]
            },
            "functionSelector": "89fb2e46",
            "id": 10093,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setStakeInfo",
            "nameLocation": "2171:12:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10081,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2183:2:34"
            },
            "returnParameters": {
              "id": 10082,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2193:0:34"
            },
            "scope": 10504,
            "src": "2162:100:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10192,
              "nodeType": "Block",
              "src": "2387:1032:34",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 10106,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 10104,
                          "name": "stakeAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10095,
                          "src": "2405:11:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 10105,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2419:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2405:15:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5374616b6520616d6f756e742073686f756c6420626520636f7272656374",
                        "id": 10107,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2422:32:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_0ab0414546a08082c35f8d614914f9a063567c270f996193e25fed9c5af250ba",
                          "typeString": "literal_string \"Stake amount should be correct\""
                        },
                        "value": "Stake amount should be correct"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_0ab0414546a08082c35f8d614914f9a063567c270f996193e25fed9c5af250ba",
                          "typeString": "literal_string \"Stake amount should be correct\""
                        }
                      ],
                      "id": 10103,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2397:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 10108,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2397:58:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10109,
                  "nodeType": "ExpressionStatement",
                  "src": "2397:58:34"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 10116,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 10111,
                            "name": "addressStaked",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10006,
                            "src": "2487:13:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 10114,
                          "indexExpression": {
                            "expression": {
                              "id": 10112,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "2501:3:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 10113,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2505:6:34",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "2501:10:34",
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
                          "src": "2487:25:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "66616c7365",
                          "id": 10115,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2516:5:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "src": "2487:34:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "596f7520616c726561647920706172746963697061746564",
                        "id": 10117,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2523:26:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_0e75d8d12a7dbee9f06677c3321bb311b9f1e86b675875c5f6d32a870ba6ec0c",
                          "typeString": "literal_string \"You already participated\""
                        },
                        "value": "You already participated"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_0e75d8d12a7dbee9f06677c3321bb311b9f1e86b675875c5f6d32a870ba6ec0c",
                          "typeString": "literal_string \"You already participated\""
                        }
                      ],
                      "id": 10110,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2479:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 10118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2479:71:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10119,
                  "nodeType": "ExpressionStatement",
                  "src": "2479:71:34"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    },
                    "id": 10126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "baseExpression": {
                          "id": 10120,
                          "name": "stakeInfos",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10002,
                          "src": "2638:10:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$9997_storage_$",
                            "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                          }
                        },
                        "id": 10123,
                        "indexExpression": {
                          "expression": {
                            "id": 10121,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "2649:3:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 10122,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2653:6:34",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "2649:10:34",
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
                        "src": "2638:22:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StakeInfo_$9997_storage",
                          "typeString": "struct Staking.StakeInfo storage ref"
                        }
                      },
                      "id": 10124,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2661:5:34",
                      "memberName": "state",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9996,
                      "src": "2638:28:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "32",
                      "id": 10125,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2670:1:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "src": "2638:33:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10130,
                  "nodeType": "IfStatement",
                  "src": "2635:74:34",
                  "trueBody": {
                    "id": 10129,
                    "nodeType": "Block",
                    "src": "2672:37:34",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "66616c7365",
                          "id": 10127,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2693:5:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 10102,
                        "id": 10128,
                        "nodeType": "Return",
                        "src": "2686:12:34"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    10132
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 10132,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "2724:7:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 10192,
                      "src": "2719:12:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 10131,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "2719:4:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 10143,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 10135,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "2778:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10136,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2782:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2778:10:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 10139,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "2811:4:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Staking_$10504",
                              "typeString": "contract Staking"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Staking_$10504",
                              "typeString": "contract Staking"
                            }
                          ],
                          "id": 10138,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2803:7:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 10137,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2803:7:34",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 10140,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2803:13:34",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 10141,
                        "name": "stakeAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10095,
                        "src": "2830:11:34",
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
                        "id": 10133,
                        "name": "vJmt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9981,
                        "src": "2734:4:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VJMToken_$10764",
                          "typeString": "contract VJMToken"
                        }
                      },
                      "id": 10134,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2739:25:34",
                      "memberName": "increaseContractAllowance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10708,
                      "src": "2734:30:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 10142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2734:117:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2719:132:34"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 10145,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10132,
                        "src": "2869:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "496e637265617365436f6e7472616374204661696c",
                        "id": 10146,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2877:23:34",
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
                      "id": 10144,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2861:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 10147,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2861:40:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10148,
                  "nodeType": "ExpressionStatement",
                  "src": "2861:40:34"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 10152,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "2929:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10153,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2933:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2929:10:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 10156,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "2949:4:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Staking_$10504",
                              "typeString": "contract Staking"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Staking_$10504",
                              "typeString": "contract Staking"
                            }
                          ],
                          "id": 10155,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2941:7:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 10154,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2941:7:34",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 10157,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2941:13:34",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 10158,
                        "name": "stakeAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10095,
                        "src": "2956:11:34",
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
                        "id": 10149,
                        "name": "vJmt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9981,
                        "src": "2911:4:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VJMToken_$10764",
                          "typeString": "contract VJMToken"
                        }
                      },
                      "id": 10151,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2916:12:34",
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2087,
                      "src": "2911:17:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 10159,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2911:57:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10160,
                  "nodeType": "ExpressionStatement",
                  "src": "2911:57:34"
                },
                {
                  "expression": {
                    "id": 10166,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 10161,
                        "name": "addressStaked",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10006,
                        "src": "2999:13:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 10164,
                      "indexExpression": {
                        "expression": {
                          "id": 10162,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "3013:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10163,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3017:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3013:10:34",
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
                      "src": "2999:25:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 10165,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3027:4:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2999:32:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10167,
                  "nodeType": "ExpressionStatement",
                  "src": "2999:32:34"
                },
                {
                  "expression": {
                    "id": 10182,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 10168,
                        "name": "stakeInfos",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10002,
                        "src": "3042:10:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$9997_storage_$",
                          "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                        }
                      },
                      "id": 10171,
                      "indexExpression": {
                        "expression": {
                          "id": 10169,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "3053:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10170,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3057:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3053:10:34",
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
                      "src": "3042:22:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StakeInfo_$9997_storage",
                        "typeString": "struct Staking.StakeInfo storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 10173,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967292,
                            "src": "3116:5:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 10174,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3122:9:34",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "3116:15:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 10175,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967292,
                            "src": "3158:5:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 10176,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3164:9:34",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "3158:15:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "hexValue": "30",
                          "id": 10177,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3225:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "id": 10178,
                          "name": "stakeAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10095,
                          "src": "3248:11:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "hexValue": "30",
                          "id": 10179,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3310:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "hexValue": "31",
                          "id": 10180,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3332:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
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
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          }
                        ],
                        "id": 10172,
                        "name": "StakeInfo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9997,
                        "src": "3067:9:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_StakeInfo_$9997_storage_ptr_$",
                          "typeString": "type(struct Staking.StakeInfo storage pointer)"
                        }
                      },
                      "id": 10181,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [
                        "3107:7:34",
                        "3145:11:34",
                        "3210:13:34",
                        "3240:6:34",
                        "3296:12:34",
                        "3325:5:34"
                      ],
                      "names": [
                        "startTS",
                        "claimedTime",
                        "unStakingTime",
                        "amount",
                        "totalClaimed",
                        "state"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "3067:277:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_StakeInfo_$9997_memory_ptr",
                        "typeString": "struct Staking.StakeInfo memory"
                      }
                    },
                    "src": "3042:302:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_StakeInfo_$9997_storage",
                      "typeString": "struct Staking.StakeInfo storage ref"
                    }
                  },
                  "id": 10183,
                  "nodeType": "ExpressionStatement",
                  "src": "3042:302:34"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 10185,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "3367:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10186,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3371:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3367:10:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 10187,
                        "name": "stakeAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10095,
                        "src": "3379:11:34",
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
                      "id": 10184,
                      "name": "Staked",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9937,
                      "src": "3360:6:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 10188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3360:31:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10189,
                  "nodeType": "EmitStatement",
                  "src": "3355:36:34"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 10190,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3408:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 10102,
                  "id": 10191,
                  "nodeType": "Return",
                  "src": "3401:11:34"
                }
              ]
            },
            "functionSelector": "cda6b847",
            "id": 10193,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 10098,
                    "name": "stakeAmount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 10095,
                    "src": "2361:11:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 10099,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 10097,
                  "name": "Claimable",
                  "nameLocations": [
                    "2351:9:34"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 10054,
                  "src": "2351:9:34"
                },
                "nodeType": "ModifierInvocation",
                "src": "2351:22:34"
              }
            ],
            "name": "stakeToken",
            "nameLocation": "2304:10:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10096,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10095,
                  "mutability": "mutable",
                  "name": "stakeAmount",
                  "nameLocation": "2323:11:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 10193,
                  "src": "2315:19:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10094,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2315:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2314:21:34"
            },
            "returnParameters": {
              "id": 10102,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10101,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 10193,
                  "src": "2382:4:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10100,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2382:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2381:6:34"
            },
            "scope": 10504,
            "src": "2295:1124:34",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10287,
              "nodeType": "Block",
              "src": "3492:950:34",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 10202,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 10197,
                            "name": "addressStaked",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10006,
                            "src": "3510:13:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 10200,
                          "indexExpression": {
                            "expression": {
                              "id": 10198,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "3524:3:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 10199,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3528:6:34",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "3524:10:34",
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
                          "src": "3510:25:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "74727565",
                          "id": 10201,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3539:4:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "3510:33:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "596f7520616c726561647920706172746963697061746564",
                        "id": 10203,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3545:26:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_0e75d8d12a7dbee9f06677c3321bb311b9f1e86b675875c5f6d32a870ba6ec0c",
                          "typeString": "literal_string \"You already participated\""
                        },
                        "value": "You already participated"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_0e75d8d12a7dbee9f06677c3321bb311b9f1e86b675875c5f6d32a870ba6ec0c",
                          "typeString": "literal_string \"You already participated\""
                        }
                      ],
                      "id": 10196,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "3502:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 10204,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3502:70:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10205,
                  "nodeType": "ExpressionStatement",
                  "src": "3502:70:34"
                },
                {
                  "assignments": [
                    10207
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 10207,
                      "mutability": "mutable",
                      "name": "stakingDuration",
                      "nameLocation": "3651:15:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 10287,
                      "src": "3643:23:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 10206,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3643:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 10216,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 10215,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 10208,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967292,
                        "src": "3669:5:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 10209,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3675:9:34",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "3669:15:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "expression": {
                        "baseExpression": {
                          "id": 10210,
                          "name": "stakeInfos",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10002,
                          "src": "3687:10:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$9997_storage_$",
                            "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                          }
                        },
                        "id": 10213,
                        "indexExpression": {
                          "expression": {
                            "id": 10211,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "3698:3:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 10212,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3702:6:34",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "3698:10:34",
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
                        "src": "3687:22:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StakeInfo_$9997_storage",
                          "typeString": "struct Staking.StakeInfo storage ref"
                        }
                      },
                      "id": 10214,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3710:11:34",
                      "memberName": "claimedTime",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9988,
                      "src": "3687:34:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3669:52:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3643:78:34"
                },
                {
                  "assignments": [
                    10218
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 10218,
                      "mutability": "mutable",
                      "name": "persecondAmount",
                      "nameLocation": "3792:15:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 10287,
                      "src": "3784:23:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 10217,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3784:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 10233,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 10232,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 10230,
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
                            "id": 10227,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 10225,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "expression": {
                                  "baseExpression": {
                                    "id": 10219,
                                    "name": "stakeInfos",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 10002,
                                    "src": "3811:10:34",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$9997_storage_$",
                                      "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                                    }
                                  },
                                  "id": 10222,
                                  "indexExpression": {
                                    "expression": {
                                      "id": 10220,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4294967281,
                                      "src": "3822:3:34",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 10221,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "3826:6:34",
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "src": "3822:10:34",
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
                                  "src": "3811:22:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_StakeInfo_$9997_storage",
                                    "typeString": "struct Staking.StakeInfo storage ref"
                                  }
                                },
                                "id": 10223,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "3834:6:34",
                                "memberName": "amount",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 9992,
                                "src": "3811:29:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "id": 10224,
                                "name": "APR",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9967,
                                "src": "3843:3:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint32",
                                  "typeString": "uint32"
                                }
                              },
                              "src": "3811:35:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "hexValue": "313030",
                              "id": 10226,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3849:3:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_100_by_1",
                                "typeString": "int_const 100"
                              },
                              "value": "100"
                            },
                            "src": "3811:41:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 10228,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "3810:43:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 10229,
                        "name": "yearsDuration",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9970,
                        "src": "3856:13:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      },
                      "src": "3810:59:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "id": 10231,
                      "name": "dayDuration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9973,
                      "src": "3872:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "src": "3810:73:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3784:99:34"
                },
                {
                  "assignments": [
                    10235
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 10235,
                      "mutability": "mutable",
                      "name": "claimableAmount",
                      "nameLocation": "3922:15:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 10287,
                      "src": "3914:23:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 10234,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3914:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 10239,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 10238,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 10236,
                      "name": "persecondAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10218,
                      "src": "3940:15:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "id": 10237,
                      "name": "stakingDuration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10207,
                      "src": "3958:15:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3940:33:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3914:59:34"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 10243,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "4013:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10244,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4017:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "4013:10:34",
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
                        "id": 10247,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 10245,
                          "name": "claimableAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10235,
                          "src": "4025:15:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "3130",
                          "id": 10246,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4043:2:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10_by_1",
                            "typeString": "int_const 10"
                          },
                          "value": "10"
                        },
                        "src": "4025:20:34",
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
                        "id": 10240,
                        "name": "jmt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9984,
                        "src": "4000:3:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JMToken_$6142",
                          "typeString": "contract JMToken"
                        }
                      },
                      "id": 10242,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4004:8:34",
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2011,
                      "src": "4000:12:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 10248,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4000:46:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10249,
                  "nodeType": "ExpressionStatement",
                  "src": "4000:46:34"
                },
                {
                  "expression": {
                    "id": 10257,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 10250,
                          "name": "stakeInfos",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10002,
                          "src": "4080:10:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$9997_storage_$",
                            "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                          }
                        },
                        "id": 10253,
                        "indexExpression": {
                          "expression": {
                            "id": 10251,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "4091:3:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 10252,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4095:6:34",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "4091:10:34",
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
                        "src": "4080:22:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StakeInfo_$9997_storage",
                          "typeString": "struct Staking.StakeInfo storage ref"
                        }
                      },
                      "id": 10254,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4103:13:34",
                      "memberName": "unStakingTime",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9990,
                      "src": "4080:36:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 10255,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967292,
                        "src": "4119:5:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 10256,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4125:9:34",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "4119:15:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4080:54:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10258,
                  "nodeType": "ExpressionStatement",
                  "src": "4080:54:34"
                },
                {
                  "expression": {
                    "id": 10264,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 10259,
                        "name": "addressStaked",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10006,
                        "src": "4174:13:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 10262,
                      "indexExpression": {
                        "expression": {
                          "id": 10260,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "4188:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10261,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4192:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "4188:10:34",
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
                      "src": "4174:25:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "66616c7365",
                      "id": 10263,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4202:5:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "4174:33:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10265,
                  "nodeType": "ExpressionStatement",
                  "src": "4174:33:34"
                },
                {
                  "expression": {
                    "id": 10272,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 10266,
                          "name": "stakeInfos",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10002,
                          "src": "4241:10:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$9997_storage_$",
                            "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                          }
                        },
                        "id": 10269,
                        "indexExpression": {
                          "expression": {
                            "id": 10267,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "4252:3:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 10268,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4256:6:34",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "4252:10:34",
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
                        "src": "4241:22:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StakeInfo_$9997_storage",
                          "typeString": "struct Staking.StakeInfo storage ref"
                        }
                      },
                      "id": 10270,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4264:5:34",
                      "memberName": "state",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9996,
                      "src": "4241:28:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "32",
                      "id": 10271,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4272:1:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "src": "4241:32:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "id": 10273,
                  "nodeType": "ExpressionStatement",
                  "src": "4241:32:34"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 10275,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "4341:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10276,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4345:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "4341:10:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 10277,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967292,
                          "src": "4353:5:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 10278,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4359:9:34",
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "src": "4353:15:34",
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
                      "id": 10274,
                      "name": "UnStaked",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9943,
                      "src": "4332:8:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 10279,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4332:37:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10280,
                  "nodeType": "EmitStatement",
                  "src": "4327:42:34"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 10282,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "4399:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10283,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4403:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "4399:10:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 10284,
                        "name": "claimableAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10235,
                        "src": "4411:15:34",
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
                      "id": 10281,
                      "name": "Claimed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9957,
                      "src": "4391:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 10285,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4391:36:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10286,
                  "nodeType": "EmitStatement",
                  "src": "4386:41:34"
                }
              ]
            },
            "functionSelector": "3595bf7a",
            "id": 10288,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "unStakingToken",
            "nameLocation": "3460:14:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10194,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3474:2:34"
            },
            "returnParameters": {
              "id": 10195,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3492:0:34"
            },
            "scope": 10504,
            "src": "3451:991:34",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10378,
              "nodeType": "Block",
              "src": "4551:866:34",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        },
                        "id": 10302,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "baseExpression": {
                              "id": 10296,
                              "name": "stakeInfos",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10002,
                              "src": "4569:10:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$9997_storage_$",
                                "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                              }
                            },
                            "id": 10299,
                            "indexExpression": {
                              "expression": {
                                "id": 10297,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "4580:3:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 10298,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4584:6:34",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "4580:10:34",
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
                            "src": "4569:22:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StakeInfo_$9997_storage",
                              "typeString": "struct Staking.StakeInfo storage ref"
                            }
                          },
                          "id": 10300,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4592:5:34",
                          "memberName": "state",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9996,
                          "src": "4569:28:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 10301,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4601:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "4569:33:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "6e6f77205374617465206973205374616b696e672c20506c6561736520556e5374616b696e672121",
                        "id": 10303,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4604:42:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_3fa08d1bdb203005192b699e199b03078e7204a335f58d9200658261ed42d204",
                          "typeString": "literal_string \"now State is Staking, Please UnStaking!!\""
                        },
                        "value": "now State is Staking, Please UnStaking!!"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_3fa08d1bdb203005192b699e199b03078e7204a335f58d9200658261ed42d204",
                          "typeString": "literal_string \"now State is Staking, Please UnStaking!!\""
                        }
                      ],
                      "id": 10295,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "4561:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 10304,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4561:86:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10305,
                  "nodeType": "ExpressionStatement",
                  "src": "4561:86:34"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 10315,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 10312,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "baseExpression": {
                            "id": 10306,
                            "name": "stakeInfos",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10002,
                            "src": "4660:10:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$9997_storage_$",
                              "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                            }
                          },
                          "id": 10309,
                          "indexExpression": {
                            "expression": {
                              "id": 10307,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "4671:3:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 10308,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4675:6:34",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "4671:10:34",
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
                          "src": "4660:22:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_StakeInfo_$9997_storage",
                            "typeString": "struct Staking.StakeInfo storage ref"
                          }
                        },
                        "id": 10310,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4683:13:34",
                        "memberName": "unStakingTime",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9990,
                        "src": "4660:36:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "id": 10311,
                        "name": "stakingExpire",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9978,
                        "src": "4699:13:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4660:52:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "expression": {
                        "id": 10313,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967292,
                        "src": "4715:5:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 10314,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4721:9:34",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "4715:15:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4660:70:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 10376,
                    "nodeType": "Block",
                    "src": "5183:220:34",
                    "statements": [
                      {
                        "assignments": [
                          10359
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 10359,
                            "mutability": "mutable",
                            "name": "remainingTime",
                            "nameLocation": "5226:13:34",
                            "nodeType": "VariableDeclaration",
                            "scope": 10376,
                            "src": "5218:21:34",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 10358,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "5218:7:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 10371,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 10370,
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
                                "id": 10366,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "expression": {
                                    "baseExpression": {
                                      "id": 10360,
                                      "name": "stakeInfos",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 10002,
                                      "src": "5243:10:34",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$9997_storage_$",
                                        "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                                      }
                                    },
                                    "id": 10363,
                                    "indexExpression": {
                                      "expression": {
                                        "id": 10361,
                                        "name": "msg",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 4294967281,
                                        "src": "5254:3:34",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_magic_message",
                                          "typeString": "msg"
                                        }
                                      },
                                      "id": 10362,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "5258:6:34",
                                      "memberName": "sender",
                                      "nodeType": "MemberAccess",
                                      "src": "5254:10:34",
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
                                    "src": "5243:22:34",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_StakeInfo_$9997_storage",
                                      "typeString": "struct Staking.StakeInfo storage ref"
                                    }
                                  },
                                  "id": 10364,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "5266:13:34",
                                  "memberName": "unStakingTime",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 9990,
                                  "src": "5243:36:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "id": 10365,
                                  "name": "stakingExpire",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9978,
                                  "src": "5282:13:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "5243:52:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 10367,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "5242:54:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "expression": {
                              "id": 10368,
                              "name": "block",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967292,
                              "src": "5299:5:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_block",
                                "typeString": "block"
                              }
                            },
                            "id": 10369,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5305:9:34",
                            "memberName": "timestamp",
                            "nodeType": "MemberAccess",
                            "src": "5299:15:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5242:72:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "5218:96:34"
                      },
                      {
                        "expression": {
                          "components": [
                            {
                              "hexValue": "66616c7365",
                              "id": 10372,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5371:5:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "false"
                            },
                            {
                              "id": 10373,
                              "name": "remainingTime",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10359,
                              "src": "5378:13:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 10374,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "5370:22:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                            "typeString": "tuple(bool,uint256)"
                          }
                        },
                        "functionReturnParameters": 10294,
                        "id": 10375,
                        "nodeType": "Return",
                        "src": "5364:28:34"
                      }
                    ]
                  },
                  "id": 10377,
                  "nodeType": "IfStatement",
                  "src": "4657:746:34",
                  "trueBody": {
                    "id": 10357,
                    "nodeType": "Block",
                    "src": "4731:448:34",
                    "statements": [
                      {
                        "assignments": [
                          10317
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 10317,
                            "mutability": "mutable",
                            "name": "amount",
                            "nameLocation": "4773:6:34",
                            "nodeType": "VariableDeclaration",
                            "scope": 10357,
                            "src": "4765:14:34",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 10316,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "4765:7:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 10323,
                        "initialValue": {
                          "expression": {
                            "baseExpression": {
                              "id": 10318,
                              "name": "stakeInfos",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10002,
                              "src": "4782:10:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$9997_storage_$",
                                "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                              }
                            },
                            "id": 10321,
                            "indexExpression": {
                              "expression": {
                                "id": 10319,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "4793:3:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 10320,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4797:6:34",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "4793:10:34",
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
                            "src": "4782:22:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StakeInfo_$9997_storage",
                              "typeString": "struct Staking.StakeInfo storage ref"
                            }
                          },
                          "id": 10322,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4805:6:34",
                          "memberName": "amount",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9992,
                          "src": "4782:29:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "4765:46:34"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 10327,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "4866:3:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 10328,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4870:6:34",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "4866:10:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 10329,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10317,
                              "src": "4877:6:34",
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
                              "id": 10324,
                              "name": "vJmt",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9981,
                              "src": "4852:4:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VJMToken_$10764",
                                "typeString": "contract VJMToken"
                              }
                            },
                            "id": 10326,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4857:8:34",
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 2011,
                            "src": "4852:13:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,uint256) external returns (bool)"
                            }
                          },
                          "id": 10330,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4852:32:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 10331,
                        "nodeType": "ExpressionStatement",
                        "src": "4852:32:34"
                      },
                      {
                        "expression": {
                          "id": 10336,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "delete",
                          "prefix": true,
                          "src": "4910:29:34",
                          "subExpression": {
                            "baseExpression": {
                              "id": 10332,
                              "name": "stakeInfos",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10002,
                              "src": "4917:10:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$9997_storage_$",
                                "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                              }
                            },
                            "id": 10335,
                            "indexExpression": {
                              "expression": {
                                "id": 10333,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "4928:3:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 10334,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4932:6:34",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "4928:10:34",
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
                            "src": "4917:22:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_StakeInfo_$9997_storage",
                              "typeString": "struct Staking.StakeInfo storage ref"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 10337,
                        "nodeType": "ExpressionStatement",
                        "src": "4910:29:34"
                      },
                      {
                        "expression": {
                          "id": 10342,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "delete",
                          "prefix": true,
                          "src": "4984:32:34",
                          "subExpression": {
                            "baseExpression": {
                              "id": 10338,
                              "name": "addressStaked",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10006,
                              "src": "4991:13:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 10341,
                            "indexExpression": {
                              "expression": {
                                "id": 10339,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "5005:3:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 10340,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5009:6:34",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "5005:10:34",
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
                            "src": "4991:25:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 10343,
                        "nodeType": "ExpressionStatement",
                        "src": "4984:32:34"
                      },
                      {
                        "eventCall": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 10345,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "5089:3:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 10346,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5093:6:34",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "5089:10:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "expression": {
                                "id": 10347,
                                "name": "block",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967292,
                                "src": "5101:5:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_block",
                                  "typeString": "block"
                                }
                              },
                              "id": 10348,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5107:9:34",
                              "memberName": "timestamp",
                              "nodeType": "MemberAccess",
                              "src": "5101:15:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 10349,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10317,
                              "src": "5118:6:34",
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
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 10344,
                            "name": "UnStakedClaimed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9951,
                            "src": "5073:15:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256,uint256)"
                            }
                          },
                          "id": 10350,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5073:52:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 10351,
                        "nodeType": "EmitStatement",
                        "src": "5068:57:34"
                      },
                      {
                        "expression": {
                          "components": [
                            {
                              "hexValue": "74727565",
                              "id": 10352,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5146:4:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "true"
                            },
                            {
                              "expression": {
                                "id": 10353,
                                "name": "block",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967292,
                                "src": "5152:5:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_block",
                                  "typeString": "block"
                                }
                              },
                              "id": 10354,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5158:9:34",
                              "memberName": "timestamp",
                              "nodeType": "MemberAccess",
                              "src": "5152:15:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 10355,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "5145:23:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_bool_$_t_uint256_$",
                            "typeString": "tuple(bool,uint256)"
                          }
                        },
                        "functionReturnParameters": 10294,
                        "id": 10356,
                        "nodeType": "Return",
                        "src": "5139:29:34"
                      }
                    ]
                  }
                }
              ]
            },
            "functionSelector": "7b9ba7fd",
            "id": 10379,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "unStakingClaime",
            "nameLocation": "4497:15:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10289,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4512:2:34"
            },
            "returnParameters": {
              "id": 10294,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10291,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 10379,
                  "src": "4538:4:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10290,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4538:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10293,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 10379,
                  "src": "4543:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10292,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4543:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4537:14:34"
            },
            "scope": 10504,
            "src": "4488:929:34",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10449,
              "nodeType": "Block",
              "src": "5491:672:34",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 10390,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "baseExpression": {
                            "id": 10385,
                            "name": "addressStaked",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10006,
                            "src": "5509:13:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 10388,
                          "indexExpression": {
                            "expression": {
                              "id": 10386,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "5523:3:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 10387,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5527:6:34",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "5523:10:34",
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
                          "src": "5509:25:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "74727565",
                          "id": 10389,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5538:4:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "src": "5509:33:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "596f7520617265206e6f7420706172746963697061746564",
                        "id": 10391,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5544:26:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_14e119e374624bd5141fb3d3b6f1df053339f5b657ddfe13cf912bfd50e9b8af",
                          "typeString": "literal_string \"You are not participated\""
                        },
                        "value": "You are not participated"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_14e119e374624bd5141fb3d3b6f1df053339f5b657ddfe13cf912bfd50e9b8af",
                          "typeString": "literal_string \"You are not participated\""
                        }
                      ],
                      "id": 10384,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "5501:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 10392,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5501:70:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10393,
                  "nodeType": "ExpressionStatement",
                  "src": "5501:70:34"
                },
                {
                  "assignments": [
                    10395
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 10395,
                      "mutability": "mutable",
                      "name": "stakingDuration",
                      "nameLocation": "5590:15:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 10449,
                      "src": "5582:23:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 10394,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5582:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 10404,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 10403,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 10396,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967292,
                        "src": "5608:5:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 10397,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5614:9:34",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "5608:15:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "expression": {
                        "baseExpression": {
                          "id": 10398,
                          "name": "stakeInfos",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10002,
                          "src": "5626:10:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$9997_storage_$",
                            "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                          }
                        },
                        "id": 10401,
                        "indexExpression": {
                          "expression": {
                            "id": 10399,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "5637:3:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 10400,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5641:6:34",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "5637:10:34",
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
                        "src": "5626:22:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_StakeInfo_$9997_storage",
                          "typeString": "struct Staking.StakeInfo storage ref"
                        }
                      },
                      "id": 10402,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5649:11:34",
                      "memberName": "claimedTime",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9988,
                      "src": "5626:34:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5608:52:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5582:78:34"
                },
                {
                  "assignments": [
                    10406
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 10406,
                      "mutability": "mutable",
                      "name": "persecondAmount",
                      "nameLocation": "5731:15:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 10449,
                      "src": "5723:23:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 10405,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5723:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 10421,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 10420,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 10418,
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
                            "id": 10415,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 10413,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "expression": {
                                  "baseExpression": {
                                    "id": 10407,
                                    "name": "stakeInfos",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 10002,
                                    "src": "5750:10:34",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$9997_storage_$",
                                      "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                                    }
                                  },
                                  "id": 10410,
                                  "indexExpression": {
                                    "expression": {
                                      "id": 10408,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4294967281,
                                      "src": "5761:3:34",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 10409,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "5765:6:34",
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "src": "5761:10:34",
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
                                  "src": "5750:22:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_StakeInfo_$9997_storage",
                                    "typeString": "struct Staking.StakeInfo storage ref"
                                  }
                                },
                                "id": 10411,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "5773:6:34",
                                "memberName": "amount",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 9992,
                                "src": "5750:29:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "id": 10412,
                                "name": "APR",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9967,
                                "src": "5782:3:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint32",
                                  "typeString": "uint32"
                                }
                              },
                              "src": "5750:35:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "hexValue": "313030",
                              "id": 10414,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5788:3:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_100_by_1",
                                "typeString": "int_const 100"
                              },
                              "value": "100"
                            },
                            "src": "5750:41:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 10416,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "5749:43:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "id": 10417,
                        "name": "yearsDuration",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9970,
                        "src": "5795:13:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      },
                      "src": "5749:59:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "id": 10419,
                      "name": "dayDuration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9973,
                      "src": "5811:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint32",
                        "typeString": "uint32"
                      }
                    },
                    "src": "5749:73:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5723:99:34"
                },
                {
                  "assignments": [
                    10423
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 10423,
                      "mutability": "mutable",
                      "name": "claimableAmount",
                      "nameLocation": "5861:15:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 10449,
                      "src": "5853:23:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 10422,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5853:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 10427,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 10426,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 10424,
                      "name": "persecondAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10406,
                      "src": "5879:15:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "id": 10425,
                      "name": "stakingDuration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10395,
                      "src": "5897:15:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5879:33:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5853:59:34"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 10431,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "5953:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10432,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5957:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "5953:10:34",
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
                        "id": 10435,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 10433,
                          "name": "claimableAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10423,
                          "src": "5965:15:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "3130",
                          "id": 10434,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5983:2:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10_by_1",
                            "typeString": "int_const 10"
                          },
                          "value": "10"
                        },
                        "src": "5965:20:34",
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
                        "id": 10428,
                        "name": "jmt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9984,
                        "src": "5940:3:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JMToken_$6142",
                          "typeString": "contract JMToken"
                        }
                      },
                      "id": 10430,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5944:8:34",
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2011,
                      "src": "5940:12:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 10436,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5940:46:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10437,
                  "nodeType": "ExpressionStatement",
                  "src": "5940:46:34"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 10438,
                      "name": "setStakeInfo",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10093,
                      "src": "6023:12:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 10439,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6023:14:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10440,
                  "nodeType": "ExpressionStatement",
                  "src": "6023:14:34"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 10442,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "6106:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10443,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6110:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "6106:10:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 10444,
                        "name": "claimableAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10423,
                        "src": "6118:15:34",
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
                      "id": 10441,
                      "name": "Claimed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9957,
                      "src": "6098:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 10445,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6098:36:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10446,
                  "nodeType": "EmitStatement",
                  "src": "6093:41:34"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 10447,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "6152:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 10383,
                  "id": 10448,
                  "nodeType": "Return",
                  "src": "6145:11:34"
                }
              ]
            },
            "functionSelector": "b88a802f",
            "id": 10450,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "claimReward",
            "nameLocation": "5454:11:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10380,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5465:2:34"
            },
            "returnParameters": {
              "id": 10383,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10382,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 10450,
                  "src": "5486:4:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10381,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5486:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5485:6:34"
            },
            "scope": 10504,
            "src": "5445:718:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 10502,
              "nodeType": "Block",
              "src": "6257:506:34",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 10460,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "baseExpression": {
                        "id": 10455,
                        "name": "addressStaked",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10006,
                        "src": "6270:13:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 10458,
                      "indexExpression": {
                        "expression": {
                          "id": 10456,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "6284:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 10457,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6288:6:34",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "6284:10:34",
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
                      "src": "6270:25:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "74727565",
                      "id": 10459,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6299:4:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "6270:33:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 10500,
                    "nodeType": "Block",
                    "src": "6724:33:34",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "30",
                          "id": 10498,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6745:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 10454,
                        "id": 10499,
                        "nodeType": "Return",
                        "src": "6738:8:34"
                      }
                    ]
                  },
                  "id": 10501,
                  "nodeType": "IfStatement",
                  "src": "6267:490:34",
                  "trueBody": {
                    "id": 10497,
                    "nodeType": "Block",
                    "src": "6304:416:34",
                    "statements": [
                      {
                        "assignments": [
                          10462
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 10462,
                            "mutability": "mutable",
                            "name": "stakingDuration",
                            "nameLocation": "6326:15:34",
                            "nodeType": "VariableDeclaration",
                            "scope": 10497,
                            "src": "6318:23:34",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 10461,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6318:7:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 10471,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 10470,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 10463,
                              "name": "block",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967292,
                              "src": "6344:5:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_block",
                                "typeString": "block"
                              }
                            },
                            "id": 10464,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6350:9:34",
                            "memberName": "timestamp",
                            "nodeType": "MemberAccess",
                            "src": "6344:15:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "expression": {
                              "baseExpression": {
                                "id": 10465,
                                "name": "stakeInfos",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10002,
                                "src": "6362:10:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$9997_storage_$",
                                  "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                                }
                              },
                              "id": 10468,
                              "indexExpression": {
                                "expression": {
                                  "id": 10466,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967281,
                                  "src": "6373:3:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 10467,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "6377:6:34",
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "src": "6373:10:34",
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
                              "src": "6362:22:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_StakeInfo_$9997_storage",
                                "typeString": "struct Staking.StakeInfo storage ref"
                              }
                            },
                            "id": 10469,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6385:11:34",
                            "memberName": "claimedTime",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9988,
                            "src": "6362:34:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6344:52:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6318:78:34"
                      },
                      {
                        "assignments": [
                          10473
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 10473,
                            "mutability": "mutable",
                            "name": "persecondAmount",
                            "nameLocation": "6471:15:34",
                            "nodeType": "VariableDeclaration",
                            "scope": 10497,
                            "src": "6463:23:34",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 10472,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6463:7:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 10488,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 10487,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 10485,
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
                                  "id": 10482,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 10480,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "expression": {
                                        "baseExpression": {
                                          "id": 10474,
                                          "name": "stakeInfos",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 10002,
                                          "src": "6490:10:34",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_StakeInfo_$9997_storage_$",
                                            "typeString": "mapping(address => struct Staking.StakeInfo storage ref)"
                                          }
                                        },
                                        "id": 10477,
                                        "indexExpression": {
                                          "expression": {
                                            "id": 10475,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 4294967281,
                                            "src": "6501:3:34",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_magic_message",
                                              "typeString": "msg"
                                            }
                                          },
                                          "id": 10476,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "6505:6:34",
                                          "memberName": "sender",
                                          "nodeType": "MemberAccess",
                                          "src": "6501:10:34",
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
                                        "src": "6490:22:34",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_StakeInfo_$9997_storage",
                                          "typeString": "struct Staking.StakeInfo storage ref"
                                        }
                                      },
                                      "id": 10478,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "6513:6:34",
                                      "memberName": "amount",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 9992,
                                      "src": "6490:29:34",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "*",
                                    "rightExpression": {
                                      "id": 10479,
                                      "name": "APR",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 9967,
                                      "src": "6522:3:34",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint32",
                                        "typeString": "uint32"
                                      }
                                    },
                                    "src": "6490:35:34",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "hexValue": "313030",
                                    "id": 10481,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6528:3:34",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_100_by_1",
                                      "typeString": "int_const 100"
                                    },
                                    "value": "100"
                                  },
                                  "src": "6490:41:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "id": 10483,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "6489:43:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "id": 10484,
                              "name": "yearsDuration",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9970,
                              "src": "6535:13:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint32",
                                "typeString": "uint32"
                              }
                            },
                            "src": "6489:59:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "id": 10486,
                            "name": "dayDuration",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9973,
                            "src": "6551:11:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint32",
                              "typeString": "uint32"
                            }
                          },
                          "src": "6489:73:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6463:99:34"
                      },
                      {
                        "assignments": [
                          10490
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 10490,
                            "mutability": "mutable",
                            "name": "claimableAmount",
                            "nameLocation": "6605:15:34",
                            "nodeType": "VariableDeclaration",
                            "scope": 10497,
                            "src": "6597:23:34",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 10489,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6597:7:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 10494,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 10493,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 10491,
                            "name": "persecondAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10473,
                            "src": "6623:15:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 10492,
                            "name": "stakingDuration",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10462,
                            "src": "6641:15:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6623:33:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6597:59:34"
                      },
                      {
                        "expression": {
                          "id": 10495,
                          "name": "claimableAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10490,
                          "src": "6694:15:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 10454,
                        "id": 10496,
                        "nodeType": "Return",
                        "src": "6687:22:34"
                      }
                    ]
                  }
                }
              ]
            },
            "functionSelector": "e7181edc",
            "id": 10503,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "claimableReward",
            "nameLocation": "6210:15:34",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10451,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6225:2:34"
            },
            "returnParameters": {
              "id": 10454,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10453,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 10503,
                  "src": "6248:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10452,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6248:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6247:9:34"
            },
            "scope": 10504,
            "src": "6201:562:34",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 10505,
        "src": "169:6596:34",
        "usedErrors": []
      }
    ],
    "src": "41:6724:34"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.17+commit.8df45f5f.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x5b4a93c1c363a1F6FDd266C92C5Ced45F2E375D0",
      "transactionHash": "0x8ac9c74aa1452a3aa6e806381594501ecc6ffb4a5b1405bb69e7420b0bdec71a"
    }
  },
  "schemaVersion": "3.4.10",
  "updatedAt": "2022-09-27T01:24:43.813Z",
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
module.exports = STAKING;
