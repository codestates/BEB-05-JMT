const NFT = {
  "contractName": "MapleNFT",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_marketAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_tokenContractAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_MapleBaseURI",
          "type": "string"
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
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
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
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "tokenURI",
          "type": "string"
        }
      ],
      "name": "Minted",
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
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
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
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
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
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
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
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
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
      "name": "renounceOwnership",
      "outputs": [],
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
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
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
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
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
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
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
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
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
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
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
      "name": "mintMapleNFT",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
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
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
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
      "name": "withdraw",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_marketAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_tokenContractAddress\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_MapleBaseURI\",\"type\":\"string\"},{\"internalType\":\"address payable\",\"name\":\"_treasuryWallet\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"tokenURI\",\"type\":\"string\"}],\"name\":\"Minted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"mintMapleNFT\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"treasuryWallet\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenByIndex(uint256)\":{\"details\":\"See {IERC721Enumerable-tokenByIndex}.\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"See {IERC721Enumerable-tokenOfOwnerByIndex}.\"},\"totalSupply()\":{\"details\":\"See {IERC721Enumerable-totalSupply}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/MapleNFT.sol\":\"MapleNFT\"},\"evmVersion\":\"berlin\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/security/Pausable.sol\":{\"keccak256\":\"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004\",\"dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B\"]},\"@openzeppelin/contracts/security/ReentrancyGuard.sol\":{\"keccak256\":\"0x0e9621f60b2faabe65549f7ed0f24e8853a45c1b7990d47e8160e523683f3935\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://287a2f8d5814dd0f05f22b740f18ca8321acc21c9bd03a6cb2203ea626e2f3f2\",\"dweb:/ipfs/QmZRQv9iuwU817VuqkA2WweiaibKii69x9QxYBBEfbNEud\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x24b04b8aacaaf1a4a0719117b29c9c3647b1f479c5ac2a60f5ff1bb6d839c238\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://43e46da9d9f49741ecd876a269e71bc7494058d7a8e9478429998adb5bc3eaa0\",\"dweb:/ipfs/QmUtp4cqzf22C5rJ76AabKADquGWcjsc33yjYXxXC4sDvy\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x0b606994df12f0ce35f6d2f6dcdde7e55e6899cdef7e00f180980caa81e3844e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4c827c981a552d1c76c96060e92f56b52bc20c6f9b4dbf911fe99ddbfb41f2ea\",\"dweb:/ipfs/QmW8xvJdzHrr8Ry34C7viBsgG2b8T1mL4BQWJ5CdfD9JLB\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xed6a749c5373af398105ce6ee3ac4763aa450ea7285d268c85d9eeca809cdb1f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://20a97f891d06f0fe91560ea1a142aaa26fdd22bed1b51606b7d48f670deeb50f\",\"dweb:/ipfs/QmTbCtZKChpaX5H2iRiTDMcSz29GSLCpTCDgJpcMR4wg8x\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e75cf83beb757b8855791088546b8337e9d4684e169400c20d44a515353b708\",\"dweb:/ipfs/QmYvPafLfoquiDMEj7CKHtvbgHu7TJNPSVPSCjrtjV8HjV\"]},\"@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol\":{\"keccak256\":\"0x0a79511df8151b10b0a0004d6a76ad956582d32824af4c0f4886bdbdfe5746e5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://afbedcf17f31db719e6fdc56caa8f458799c5fa2eb94cb1e94ef18f89af85768\",\"dweb:/ipfs/QmVmqRdBfbgYThpZSoAJ5o9mnAMjx8mCHHjv3Rh8cQAAg3\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol\":{\"keccak256\":\"0xd1556954440b31c97a142c6ba07d5cade45f96fafd52091d33a14ebe365aecbf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://26fef835622b46a5ba08b3ef6b46a22e94b5f285d0f0fb66b703bd30217d2c34\",\"dweb:/ipfs/QmZ548qdwfL1qF7aXz3xh1GCdTiST81kGGuKRqVUfYmPZR\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a0a107160525724f9e1bbbab031defc2f298296dd9e331f16a6f7130cec32146\",\"dweb:/ipfs/QmemujxSd7gX8A9M8UwmNbz4Ms3U9FG9QfudUgxwvTmPWf\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xd6153ce99bcdcce22b124f755e72553295be6abcd63804cfdffceb188b8bef10\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://35c47bece3c03caaa07fab37dd2bb3413bfbca20db7bd9895024390e0a469487\",\"dweb:/ipfs/QmPGWT2x3QHcKxqe6gRmAkdakhbaRgx3DLzcakHz5M4eXG\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Counters.sol\":{\"keccak256\":\"0xf0018c2440fbe238dd3a8732fa8e17a0f9dce84d31451dc8a32f6d62b349c9f1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://59e1c62884d55b70f3ae5432b44bb3166ad71ae3acd19c57ab6ddc3c87c325ee\",\"dweb:/ipfs/QmezuXg5GK5oeA4F91EZhozBFekhq5TD966bHPH18cCqhu\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xaf159a8b1923ad2a26d516089bceca9bdeaeacd04be50983ea00ba63070f08a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6f2cf1c531122bc7ca96b8c8db6a60deae60441e5223065e792553d4849b5638\",\"dweb:/ipfs/QmPBdJmBBABMDCfyDjCbdxgiqRavgiSL88SYPGibgbPas9\"]},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xd15c3e400531f00203839159b2b8e7209c5158b35618f570c695b7e47f12e9f0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b600b852e0597aa69989cc263111f02097e2827edc1bdc70306303e3af5e9929\",\"dweb:/ipfs/QmU4WfM28A1nDqghuuGeFmN3CnVrk6opWtiF65K4vhFPeC\"]},\"@uniswap/lib/contracts/libraries/Babylonian.sol\":{\"keccak256\":\"0xe20fc48e3575b4a2932e5d2dd53b6742e1ca96f652bd41038cb89d7f5d49a096\",\"urls\":[\"bzz-raw://6ba298d8e592d39960eabc2328b7d4a01ad6cf8b06366adc3ef0133d3b196a9f\",\"dweb:/ipfs/QmQgrNaHssJ8XVsPUCMHpyYRFLbBqNrumaoFgXHWdDiTyy\"]},\"project:/contracts/JMToken.sol\":{\"keccak256\":\"0x5ac24ee9d28244c27fe7607fd74f9712bb4c39b6b7c1b09f427c60c3a3f34903\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://9cf73304d3160b73cac46833df2e26ab6e3a0adad1c432e664d74ecdf0d1d7eb\",\"dweb:/ipfs/QmYginHntRFEMFLrcFiACEt2hvrhCrZb7Fv8vWCYXniQbQ\"]},\"project:/contracts/LPT.sol\":{\"keccak256\":\"0xed736abaceb3ae48c617e3f658e9b025d5b61ef8df551970899895432b0ec7b6\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://ad6919c26ab33a0f95936b6de5c1267e1a4ce2d41ef609c72be2ea63e39cf275\",\"dweb:/ipfs/QmVMZpeSSxWUxc9SME2pgQ3xwazzvdjRYGxF7sfMWGspwn\"]},\"project:/contracts/LiquidityPool.sol\":{\"keccak256\":\"0x02add59a18b8f9012f2043575b93d04fde563e3b940ccf50b5358e1cbe9e6ebd\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://feb1b5de36d206ec0be059e8e5110936a9a5e13f73b0cb375b3a35e87819ebd0\",\"dweb:/ipfs/QmSX53o3uqjeSaaDofNKswHREGfbf13CXXfnsxye1yHF68\"]},\"project:/contracts/MapleNFT.sol\":{\"keccak256\":\"0xc0c9479cc840e62b153ce71e7c4bb063cb3e81c59bf14c560f72fb6e219f2c67\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c2397da4b05edb53e3ece6e330631836419042ee6ec95b9f751b7e960ee86bf8\",\"dweb:/ipfs/QmToc4L4LGcs5DRJmCnc5BvHVNzaCmUCwUH9RLpuvnSH4V\"]},\"project:/contracts/VJMToken.sol\":{\"keccak256\":\"0xe2f8a326fd1fbe8e2bf0e7365ad261285fde71804fe77694ce986d47c106f061\",\"license\":\"GPL-3.0-only\",\"urls\":[\"bzz-raw://f6ee599ebeff106e2eb9d3a6b0c01915cfc6f76e0916b4215e9c80c5c992e475\",\"dweb:/ipfs/QmXz1MZL3nGq7C8o1JW57rgYr6Z4iDV4Kba279dw4Smt4M\"]},\"project:/contracts/interfaces/ERC20Interface.sol\":{\"keccak256\":\"0xb042aa31e292bbc9fade54bf3279bbc904f65c935f597a01c269f1f44874317a\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://4b04f222ce79fb25e09cf97ecf81cc98ac26f56e76c22bdb4c3f2b9aa35bca9f\",\"dweb:/ipfs/QmbR9BSzUNPf68mTzqxuic7D8jjNZne3dWsdAAKSVnhBqr\"]}},\"version\":1}",
  "bytecode": "0x6080604052670de0b6b3a7640000600d553480156200001d57600080fd5b50604051620025cd380380620025cd8339810160408190526200004091620002da565b6040518060400160405280600881526020016713585c1b1953919560c21b8152506040518060400160405280600381526020016213919560ea1b81525062000097620000916200012860201b60201c565b6200012c565b6001620000a583826200047c565b506002620000b482826200047c565b5050601080546001600160a01b0319166001600160a01b038716179055506001600f55611387601255620000e8836200017c565b50620000f482620001c0565b620000fe620001dc565b600e80546001600160a01b0319166001600160a01b03929092169190911790555062000570915050565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006200018862000240565b6001600160a01b0382166200019c57600080fd5b50600c80546001600160a01b0319166001600160a01b03831617905560015b919050565b620001ca62000240565b6013620001d882826200047c565b5050565b620001e662000240565b60005b60125481116200023d57601180546001810182556000919091527f31ecc21a745e3968a04e9570e4425bc18fa8019c68028196b546d1669c200c680181905580620002348162000548565b915050620001e9565b50565b6000546001600160a01b031633146200029f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b6001600160a01b03811681146200023d57600080fd5b634e487b7160e01b600052604160045260246000fd5b8051620001bb81620002a1565b60008060008060808587031215620002f157600080fd5b8451620002fe81620002a1565b809450506020808601516200031381620002a1565b60408701519094506001600160401b03808211156200033157600080fd5b818801915088601f8301126200034657600080fd5b8151818111156200035b576200035b620002b7565b604051601f8201601f19908116603f01168101908382118183101715620003865762000386620002b7565b816040528281528b868487010111156200039f57600080fd5b600093505b82841015620003c35784840186015181850187015292850192620003a4565b6000868483010152809750505050505050620003e260608601620002cd565b905092959194509250565b600181811c908216806200040257607f821691505b6020821081036200042357634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200047757600081815260208120601f850160051c81016020861015620004525750805b601f850160051c820191505b8181101562000473578281556001016200045e565b5050505b505050565b81516001600160401b03811115620004985762000498620002b7565b620004b081620004a98454620003ed565b8462000429565b602080601f831160018114620004e85760008415620004cf5750858301515b600019600386901b1c1916600185901b17855562000473565b600085815260208120601f198616915b828110156200051957888601518255948401946001909101908401620004f8565b5085821015620005385787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000600182016200056957634e487b7160e01b600052601160045260246000fd5b5060010190565b61204d80620005806000396000f3fe6080604052600436106101355760003560e01c80634f6ccce7116100ab57806395d89b411161006f57806395d89b411461033a578063a22cb4651461034f578063b88d4fde1461036f578063c87b56dd1461038f578063e985e9c5146103af578063f2fde38b146103f857600080fd5b80634f6ccce7146102a75780636352211e146102c757806370a08231146102e7578063715018a6146103075780638da5cb5b1461031c57600080fd5b806323b872dd116100fd57806323b872dd1461020a57806325379b001461022a5780632f745c59146102325780633ccfd60b1461025257806342842e0e146102675780634626402b1461028757600080fd5b806301ffc9a71461013a57806306fdde031461016f578063081812fc14610191578063095ea7b3146101c957806318160ddd146101eb575b600080fd5b34801561014657600080fd5b5061015a610155366004611ad8565b610418565b60405190151581526020015b60405180910390f35b34801561017b57600080fd5b50610184610429565b6040516101669190611b45565b34801561019d57600080fd5b506101b16101ac366004611b58565b6104bb565b6040516001600160a01b039091168152602001610166565b3480156101d557600080fd5b506101e96101e4366004611b8d565b6104e2565b005b3480156101f757600080fd5b506009545b604051908152602001610166565b34801561021657600080fd5b506101e9610225366004611bb7565b6105fc565b6101fc61062d565b34801561023e57600080fd5b506101fc61024d366004611b8d565b610a3e565b34801561025e57600080fd5b506101fc610ad4565b34801561027357600080fd5b506101e9610282366004611bb7565b610c43565b34801561029357600080fd5b50600e546101b1906001600160a01b031681565b3480156102b357600080fd5b506101fc6102c2366004611b58565b610c5e565b3480156102d357600080fd5b506101b16102e2366004611b58565b610cf1565b3480156102f357600080fd5b506101fc610302366004611bf3565b610d51565b34801561031357600080fd5b506101e9610dd7565b34801561032857600080fd5b506000546001600160a01b03166101b1565b34801561034657600080fd5b50610184610deb565b34801561035b57600080fd5b506101e961036a366004611c1c565b610dfa565b34801561037b57600080fd5b506101e961038a366004611c69565b610e09565b34801561039b57600080fd5b506101846103aa366004611b58565b610e41565b3480156103bb57600080fd5b5061015a6103ca366004611d45565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b34801561040457600080fd5b506101e9610413366004611bf3565b610e4c565b600061042382610ec5565b92915050565b60606001805461043890611d78565b80601f016020809104026020016040519081016040528092919081815260200182805461046490611d78565b80156104b15780601f10610486576101008083540402835291602001916104b1565b820191906000526020600020905b81548152906001019060200180831161049457829003601f168201915b5050505050905090565b60006104c682610eea565b506000908152600560205260409020546001600160a01b031690565b60006104ed82610cf1565b9050806001600160a01b0316836001600160a01b03160361055f5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061057b575061057b81336103ca565b6105ed5760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610556565b6105f78383610f49565b505050565b6106063382610fb7565b6106225760405162461bcd60e51b815260040161055690611db2565b6105f7838383611036565b600f54600c546040516370a0823160e01b8152336004820152600092916001600160a01b0316906370a0823190602401602060405180830381865afa15801561067a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069e9190611e00565b10156106fc5760405162461bcd60e51b815260206004820152602760248201527f4552433732313a20726563697069656e74206c61636b206f662065726332302060448201526662616c616e636560c81b6064820152608401610556565b60095460125410156107505760405162461bcd60e51b815260206004820152601b60248201527f4552433732313a20616c6c206e66747320617265206d696e74656400000000006044820152606401610556565b6107586111dd565b601180546000919061076c90600190611e2f565b8154811061077c5761077c611e42565b90600052602060002001549050601180548061079a5761079a611e58565b600190038181906000526020600020016000905590556107ba33826112ae565b6010546107d1906001600160a01b03166001610dfa565b600c54600d54600f546000926001600160a01b03169163d83a2bf391339130916107fb9190611e6e565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015260448201526064016020604051808303816000875af115801561084f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108739190611e85565b9050806108ba5760405162461bcd60e51b8152602060048201526015602482015274125b98dc99585cd950dbdb9d1c9858dd0811985a5b605a1b6044820152606401610556565b600c54600e54600d54600f546001600160a01b03938416936323b872dd9333939116916108e79190611e6e565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015260448201526064016020604051808303816000875af115801561093b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095f9190611e85565b50600c54600e54600d54600f546001600160a01b0393841693631d057bd993169160029161098d9190611e6e565b6109979190611eb8565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b1580156109dd57600080fd5b505af11580156109f1573d6000803e3d6000fd5b505050507fe7cd4ce7f2a465edc730269a1305e8a48bad821e8fb7e152ec413829c01a53c43383610a2185610e41565b604051610a3093929190611ecc565b60405180910390a150919050565b6000610a4983610d51565b8210610aab5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610556565b506001600160a01b03919091166000908152600760209081526040808320938352929052205490565b6000610ade6113fc565b600c546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610b27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4b9190611e00565b600c5460405163095ea7b360e01b8152306004820152602481018390529192506001600160a01b03169063095ea7b3906044016020604051808303816000875af1158015610b9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc19190611e85565b50600c546040516323b872dd60e01b8152306004820152336024820152604481018390526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610c19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3d9190611e85565b50905090565b6105f783838360405180602001604052806000815250610e09565b6000610c6960095490565b8210610ccc5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610556565b60098281548110610cdf57610cdf611e42565b90600052602060002001549050919050565b6000818152600360205260408120546001600160a01b0316806104235760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610556565b60006001600160a01b038216610dbb5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610556565b506001600160a01b031660009081526004602052604090205490565b610ddf6113fc565b610de96000611456565b565b60606002805461043890611d78565b610e053383836114a6565b5050565b610e133383610fb7565b610e2f5760405162461bcd60e51b815260040161055690611db2565b610e3b84848484611574565b50505050565b6060610423826115a7565b610e546113fc565b6001600160a01b038116610eb95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610556565b610ec281611456565b50565b60006001600160e01b0319821663780e9d6360e01b148061042357506104238261160e565b6000818152600360205260409020546001600160a01b0316610ec25760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610556565b600081815260056020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610f7e82610cf1565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610fc383610cf1565b9050806001600160a01b0316846001600160a01b0316148061100a57506001600160a01b0380821660009081526006602090815260408083209388168352929052205460ff165b8061102e5750836001600160a01b0316611023846104bb565b6001600160a01b0316145b949350505050565b826001600160a01b031661104982610cf1565b6001600160a01b0316146110ad5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610556565b6001600160a01b03821661110f5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610556565b61111a83838361165e565b611125600082610f49565b6001600160a01b038316600090815260046020526040812080546001929061114e908490611e2f565b90915550506001600160a01b038216600090815260046020526040812080546001929061117c908490611efc565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6011546000906111ef90600190611e2f565b60115460408051426020820152929350600092016040516020818303038152906040528051906020012060001c6112269190611f0f565b905060006011828154811061123d5761123d611e42565b906000526020600020015490506011838154811061125d5761125d611e42565b90600052602060002001546011838154811061127b5761127b611e42565b9060005260206000200181905550806011848154811061129d5761129d611e42565b600091825260209091200155505050565b6001600160a01b0382166113045760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610556565b6000818152600360205260409020546001600160a01b0316156113695760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610556565b6113756000838361165e565b6001600160a01b038216600090815260046020526040812080546001929061139e908490611efc565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000546001600160a01b03163314610de95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610556565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b816001600160a01b0316836001600160a01b0316036115075760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610556565b6001600160a01b03838116600081815260066020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61157f848484611036565b61158b84848484611669565b610e3b5760405162461bcd60e51b815260040161055690611f23565b60606115b282610eea565b60006115bc61176a565b905060008151116115dc5760405180602001604052806000815250611607565b806115e684611779565b6040516020016115f7929190611f75565b6040516020818303038152906040525b9392505050565b60006001600160e01b031982166380ac58cd60e01b148061163f57506001600160e01b03198216635b5e139f60e01b145b8061042357506301ffc9a760e01b6001600160e01b0319831614610423565b6105f783838361187a565b60006001600160a01b0384163b1561175f57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906116ad903390899088908890600401611fa4565b6020604051808303816000875af19250505080156116e8575060408051601f3d908101601f191682019092526116e591810190611fe1565b60015b611745573d808015611716576040519150601f19603f3d011682016040523d82523d6000602084013e61171b565b606091505b50805160000361173d5760405162461bcd60e51b815260040161055690611f23565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061102e565b506001949350505050565b60606013805461043890611d78565b6060816000036117a05750506040805180820190915260018152600360fc1b602082015290565b8160005b81156117ca57806117b481611ffe565b91506117c39050600a83611eb8565b91506117a4565b60008167ffffffffffffffff8111156117e5576117e5611c53565b6040519080825280601f01601f19166020018201604052801561180f576020820181803683370190505b5090505b841561102e57611824600183611e2f565b9150611831600a86611f0f565b61183c906030611efc565b60f81b81838151811061185157611851611e42565b60200101906001600160f81b031916908160001a905350611873600a86611eb8565b9450611813565b6001600160a01b0383166118d5576118d081600980546000838152600a60205260408120829055600182018355919091527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af0155565b6118f8565b816001600160a01b0316836001600160a01b0316146118f8576118f88382611932565b6001600160a01b03821661190f576105f7816119cf565b826001600160a01b0316826001600160a01b0316146105f7576105f78282611a7e565b6000600161193f84610d51565b6119499190611e2f565b60008381526008602052604090205490915080821461199c576001600160a01b03841660009081526007602090815260408083208584528252808320548484528184208190558352600890915290208190555b5060009182526008602090815260408084208490556001600160a01b039094168352600781528383209183525290812055565b6009546000906119e190600190611e2f565b6000838152600a602052604081205460098054939450909284908110611a0957611a09611e42565b906000526020600020015490508060098381548110611a2a57611a2a611e42565b6000918252602080832090910192909255828152600a90915260408082208490558582528120556009805480611a6257611a62611e58565b6001900381819060005260206000200160009055905550505050565b6000611a8983610d51565b6001600160a01b039093166000908152600760209081526040808320868452825280832085905593825260089052919091209190915550565b6001600160e01b031981168114610ec257600080fd5b600060208284031215611aea57600080fd5b813561160781611ac2565b60005b83811015611b10578181015183820152602001611af8565b50506000910152565b60008151808452611b31816020860160208601611af5565b601f01601f19169290920160200192915050565b6020815260006116076020830184611b19565b600060208284031215611b6a57600080fd5b5035919050565b80356001600160a01b0381168114611b8857600080fd5b919050565b60008060408385031215611ba057600080fd5b611ba983611b71565b946020939093013593505050565b600080600060608486031215611bcc57600080fd5b611bd584611b71565b9250611be360208501611b71565b9150604084013590509250925092565b600060208284031215611c0557600080fd5b61160782611b71565b8015158114610ec257600080fd5b60008060408385031215611c2f57600080fd5b611c3883611b71565b91506020830135611c4881611c0e565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215611c7f57600080fd5b611c8885611b71565b9350611c9660208601611b71565b925060408501359150606085013567ffffffffffffffff80821115611cba57600080fd5b818701915087601f830112611cce57600080fd5b813581811115611ce057611ce0611c53565b604051601f8201601f19908116603f01168101908382118183101715611d0857611d08611c53565b816040528281528a6020848701011115611d2157600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215611d5857600080fd5b611d6183611b71565b9150611d6f60208401611b71565b90509250929050565b600181811c90821680611d8c57607f821691505b602082108103611dac57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b600060208284031215611e1257600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561042357610423611e19565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b808202811582820484141761042357610423611e19565b600060208284031215611e9757600080fd5b815161160781611c0e565b634e487b7160e01b600052601260045260246000fd5b600082611ec757611ec7611ea2565b500490565b60018060a01b0384168152826020820152606060408201526000611ef36060830184611b19565b95945050505050565b8082018082111561042357610423611e19565b600082611f1e57611f1e611ea2565b500690565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60008351611f87818460208801611af5565b835190830190611f9b818360208801611af5565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611fd790830184611b19565b9695505050505050565b600060208284031215611ff357600080fd5b815161160781611ac2565b60006001820161201057612010611e19565b506001019056fea264697066735822122017406e919cb72ad626f5cab4ce1da64a1205866283196370b726d6d049ea92fd64736f6c63430008110033",
  "deployedBytecode": "0x6080604052600436106101355760003560e01c80634f6ccce7116100ab57806395d89b411161006f57806395d89b411461033a578063a22cb4651461034f578063b88d4fde1461036f578063c87b56dd1461038f578063e985e9c5146103af578063f2fde38b146103f857600080fd5b80634f6ccce7146102a75780636352211e146102c757806370a08231146102e7578063715018a6146103075780638da5cb5b1461031c57600080fd5b806323b872dd116100fd57806323b872dd1461020a57806325379b001461022a5780632f745c59146102325780633ccfd60b1461025257806342842e0e146102675780634626402b1461028757600080fd5b806301ffc9a71461013a57806306fdde031461016f578063081812fc14610191578063095ea7b3146101c957806318160ddd146101eb575b600080fd5b34801561014657600080fd5b5061015a610155366004611ad8565b610418565b60405190151581526020015b60405180910390f35b34801561017b57600080fd5b50610184610429565b6040516101669190611b45565b34801561019d57600080fd5b506101b16101ac366004611b58565b6104bb565b6040516001600160a01b039091168152602001610166565b3480156101d557600080fd5b506101e96101e4366004611b8d565b6104e2565b005b3480156101f757600080fd5b506009545b604051908152602001610166565b34801561021657600080fd5b506101e9610225366004611bb7565b6105fc565b6101fc61062d565b34801561023e57600080fd5b506101fc61024d366004611b8d565b610a3e565b34801561025e57600080fd5b506101fc610ad4565b34801561027357600080fd5b506101e9610282366004611bb7565b610c43565b34801561029357600080fd5b50600e546101b1906001600160a01b031681565b3480156102b357600080fd5b506101fc6102c2366004611b58565b610c5e565b3480156102d357600080fd5b506101b16102e2366004611b58565b610cf1565b3480156102f357600080fd5b506101fc610302366004611bf3565b610d51565b34801561031357600080fd5b506101e9610dd7565b34801561032857600080fd5b506000546001600160a01b03166101b1565b34801561034657600080fd5b50610184610deb565b34801561035b57600080fd5b506101e961036a366004611c1c565b610dfa565b34801561037b57600080fd5b506101e961038a366004611c69565b610e09565b34801561039b57600080fd5b506101846103aa366004611b58565b610e41565b3480156103bb57600080fd5b5061015a6103ca366004611d45565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b34801561040457600080fd5b506101e9610413366004611bf3565b610e4c565b600061042382610ec5565b92915050565b60606001805461043890611d78565b80601f016020809104026020016040519081016040528092919081815260200182805461046490611d78565b80156104b15780601f10610486576101008083540402835291602001916104b1565b820191906000526020600020905b81548152906001019060200180831161049457829003601f168201915b5050505050905090565b60006104c682610eea565b506000908152600560205260409020546001600160a01b031690565b60006104ed82610cf1565b9050806001600160a01b0316836001600160a01b03160361055f5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061057b575061057b81336103ca565b6105ed5760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610556565b6105f78383610f49565b505050565b6106063382610fb7565b6106225760405162461bcd60e51b815260040161055690611db2565b6105f7838383611036565b600f54600c546040516370a0823160e01b8152336004820152600092916001600160a01b0316906370a0823190602401602060405180830381865afa15801561067a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069e9190611e00565b10156106fc5760405162461bcd60e51b815260206004820152602760248201527f4552433732313a20726563697069656e74206c61636b206f662065726332302060448201526662616c616e636560c81b6064820152608401610556565b60095460125410156107505760405162461bcd60e51b815260206004820152601b60248201527f4552433732313a20616c6c206e66747320617265206d696e74656400000000006044820152606401610556565b6107586111dd565b601180546000919061076c90600190611e2f565b8154811061077c5761077c611e42565b90600052602060002001549050601180548061079a5761079a611e58565b600190038181906000526020600020016000905590556107ba33826112ae565b6010546107d1906001600160a01b03166001610dfa565b600c54600d54600f546000926001600160a01b03169163d83a2bf391339130916107fb9190611e6e565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015260448201526064016020604051808303816000875af115801561084f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108739190611e85565b9050806108ba5760405162461bcd60e51b8152602060048201526015602482015274125b98dc99585cd950dbdb9d1c9858dd0811985a5b605a1b6044820152606401610556565b600c54600e54600d54600f546001600160a01b03938416936323b872dd9333939116916108e79190611e6e565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015260448201526064016020604051808303816000875af115801561093b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095f9190611e85565b50600c54600e54600d54600f546001600160a01b0393841693631d057bd993169160029161098d9190611e6e565b6109979190611eb8565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b1580156109dd57600080fd5b505af11580156109f1573d6000803e3d6000fd5b505050507fe7cd4ce7f2a465edc730269a1305e8a48bad821e8fb7e152ec413829c01a53c43383610a2185610e41565b604051610a3093929190611ecc565b60405180910390a150919050565b6000610a4983610d51565b8210610aab5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610556565b506001600160a01b03919091166000908152600760209081526040808320938352929052205490565b6000610ade6113fc565b600c546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610b27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4b9190611e00565b600c5460405163095ea7b360e01b8152306004820152602481018390529192506001600160a01b03169063095ea7b3906044016020604051808303816000875af1158015610b9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc19190611e85565b50600c546040516323b872dd60e01b8152306004820152336024820152604481018390526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610c19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3d9190611e85565b50905090565b6105f783838360405180602001604052806000815250610e09565b6000610c6960095490565b8210610ccc5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610556565b60098281548110610cdf57610cdf611e42565b90600052602060002001549050919050565b6000818152600360205260408120546001600160a01b0316806104235760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610556565b60006001600160a01b038216610dbb5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610556565b506001600160a01b031660009081526004602052604090205490565b610ddf6113fc565b610de96000611456565b565b60606002805461043890611d78565b610e053383836114a6565b5050565b610e133383610fb7565b610e2f5760405162461bcd60e51b815260040161055690611db2565b610e3b84848484611574565b50505050565b6060610423826115a7565b610e546113fc565b6001600160a01b038116610eb95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610556565b610ec281611456565b50565b60006001600160e01b0319821663780e9d6360e01b148061042357506104238261160e565b6000818152600360205260409020546001600160a01b0316610ec25760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610556565b600081815260056020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610f7e82610cf1565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610fc383610cf1565b9050806001600160a01b0316846001600160a01b0316148061100a57506001600160a01b0380821660009081526006602090815260408083209388168352929052205460ff165b8061102e5750836001600160a01b0316611023846104bb565b6001600160a01b0316145b949350505050565b826001600160a01b031661104982610cf1565b6001600160a01b0316146110ad5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610556565b6001600160a01b03821661110f5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610556565b61111a83838361165e565b611125600082610f49565b6001600160a01b038316600090815260046020526040812080546001929061114e908490611e2f565b90915550506001600160a01b038216600090815260046020526040812080546001929061117c908490611efc565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6011546000906111ef90600190611e2f565b60115460408051426020820152929350600092016040516020818303038152906040528051906020012060001c6112269190611f0f565b905060006011828154811061123d5761123d611e42565b906000526020600020015490506011838154811061125d5761125d611e42565b90600052602060002001546011838154811061127b5761127b611e42565b9060005260206000200181905550806011848154811061129d5761129d611e42565b600091825260209091200155505050565b6001600160a01b0382166113045760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610556565b6000818152600360205260409020546001600160a01b0316156113695760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610556565b6113756000838361165e565b6001600160a01b038216600090815260046020526040812080546001929061139e908490611efc565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000546001600160a01b03163314610de95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610556565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b816001600160a01b0316836001600160a01b0316036115075760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610556565b6001600160a01b03838116600081815260066020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61157f848484611036565b61158b84848484611669565b610e3b5760405162461bcd60e51b815260040161055690611f23565b60606115b282610eea565b60006115bc61176a565b905060008151116115dc5760405180602001604052806000815250611607565b806115e684611779565b6040516020016115f7929190611f75565b6040516020818303038152906040525b9392505050565b60006001600160e01b031982166380ac58cd60e01b148061163f57506001600160e01b03198216635b5e139f60e01b145b8061042357506301ffc9a760e01b6001600160e01b0319831614610423565b6105f783838361187a565b60006001600160a01b0384163b1561175f57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906116ad903390899088908890600401611fa4565b6020604051808303816000875af19250505080156116e8575060408051601f3d908101601f191682019092526116e591810190611fe1565b60015b611745573d808015611716576040519150601f19603f3d011682016040523d82523d6000602084013e61171b565b606091505b50805160000361173d5760405162461bcd60e51b815260040161055690611f23565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061102e565b506001949350505050565b60606013805461043890611d78565b6060816000036117a05750506040805180820190915260018152600360fc1b602082015290565b8160005b81156117ca57806117b481611ffe565b91506117c39050600a83611eb8565b91506117a4565b60008167ffffffffffffffff8111156117e5576117e5611c53565b6040519080825280601f01601f19166020018201604052801561180f576020820181803683370190505b5090505b841561102e57611824600183611e2f565b9150611831600a86611f0f565b61183c906030611efc565b60f81b81838151811061185157611851611e42565b60200101906001600160f81b031916908160001a905350611873600a86611eb8565b9450611813565b6001600160a01b0383166118d5576118d081600980546000838152600a60205260408120829055600182018355919091527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af0155565b6118f8565b816001600160a01b0316836001600160a01b0316146118f8576118f88382611932565b6001600160a01b03821661190f576105f7816119cf565b826001600160a01b0316826001600160a01b0316146105f7576105f78282611a7e565b6000600161193f84610d51565b6119499190611e2f565b60008381526008602052604090205490915080821461199c576001600160a01b03841660009081526007602090815260408083208584528252808320548484528184208190558352600890915290208190555b5060009182526008602090815260408084208490556001600160a01b039094168352600781528383209183525290812055565b6009546000906119e190600190611e2f565b6000838152600a602052604081205460098054939450909284908110611a0957611a09611e42565b906000526020600020015490508060098381548110611a2a57611a2a611e42565b6000918252602080832090910192909255828152600a90915260408082208490558582528120556009805480611a6257611a62611e58565b6001900381819060005260206000200160009055905550505050565b6000611a8983610d51565b6001600160a01b039093166000908152600760209081526040808320868452825280832085905593825260089052919091209190915550565b6001600160e01b031981168114610ec257600080fd5b600060208284031215611aea57600080fd5b813561160781611ac2565b60005b83811015611b10578181015183820152602001611af8565b50506000910152565b60008151808452611b31816020860160208601611af5565b601f01601f19169290920160200192915050565b6020815260006116076020830184611b19565b600060208284031215611b6a57600080fd5b5035919050565b80356001600160a01b0381168114611b8857600080fd5b919050565b60008060408385031215611ba057600080fd5b611ba983611b71565b946020939093013593505050565b600080600060608486031215611bcc57600080fd5b611bd584611b71565b9250611be360208501611b71565b9150604084013590509250925092565b600060208284031215611c0557600080fd5b61160782611b71565b8015158114610ec257600080fd5b60008060408385031215611c2f57600080fd5b611c3883611b71565b91506020830135611c4881611c0e565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215611c7f57600080fd5b611c8885611b71565b9350611c9660208601611b71565b925060408501359150606085013567ffffffffffffffff80821115611cba57600080fd5b818701915087601f830112611cce57600080fd5b813581811115611ce057611ce0611c53565b604051601f8201601f19908116603f01168101908382118183101715611d0857611d08611c53565b816040528281528a6020848701011115611d2157600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215611d5857600080fd5b611d6183611b71565b9150611d6f60208401611b71565b90509250929050565b600181811c90821680611d8c57607f821691505b602082108103611dac57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b600060208284031215611e1257600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561042357610423611e19565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b808202811582820484141761042357610423611e19565b600060208284031215611e9757600080fd5b815161160781611c0e565b634e487b7160e01b600052601260045260246000fd5b600082611ec757611ec7611ea2565b500490565b60018060a01b0384168152826020820152606060408201526000611ef36060830184611b19565b95945050505050565b8082018082111561042357610423611e19565b600082611f1e57611f1e611ea2565b500690565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60008351611f87818460208801611af5565b835190830190611f9b818360208801611af5565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611fd790830184611b19565b9695505050505050565b600060208284031215611ff357600080fd5b815161160781611ac2565b60006001820161201057612010611e19565b506001019056fea264697066735822122017406e919cb72ad626f5cab4ce1da64a1205866283196370b726d6d049ea92fd64736f6c63430008110033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:5028:37",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:37",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "59:86:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "123:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "132:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "135:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "125:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "125:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "125:12:37"
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
                            "src": "82:5:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "93:5:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "108:3:37",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "113:1:37",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "104:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "104:11:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "117:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "100:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "100:19:37"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "89:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "89:31:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "79:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "79:42:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "72:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "72:50:37"
                  },
                  "nodeType": "YulIf",
                  "src": "69:70:37"
                }
              ]
            },
            "name": "validator_revert_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "48:5:37",
                "type": ""
              }
            ],
            "src": "14:131:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "182:95:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "199:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "206:3:37",
                            "type": "",
                            "value": "224"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "211:10:37",
                            "type": "",
                            "value": "0x4e487b71"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "202:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "202:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "192:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "192:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "192:31:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "239:1:37",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "242:4:37",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "232:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "232:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "232:15:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "263:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "266:4:37",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "256:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "256:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "256:15:37"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "150:127:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "350:78:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "360:22:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "375:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "369:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "369:13:37"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "360:5:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "416:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "391:24:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "391:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "391:31:37"
                }
              ]
            },
            "name": "abi_decode_address_payable_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "329:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "340:5:37",
                "type": ""
              }
            ],
            "src": "282:146:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "583:1256:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "630:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "639:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "642:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "632:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "632:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "632:12:37"
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
                            "src": "604:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "613:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "600:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "600:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "625:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "596:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "596:33:37"
                  },
                  "nodeType": "YulIf",
                  "src": "593:53:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "655:29:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "674:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "668:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "668:16:37"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "659:5:37",
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
                        "src": "718:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "693:24:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "693:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "693:31:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "733:15:37",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "743:5:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "733:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "757:12:37",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "767:2:37",
                    "type": "",
                    "value": "32"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "761:2:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "778:40:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "803:9:37"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "814:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "799:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "799:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "793:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "793:25:37"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "782:7:37",
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
                        "src": "852:7:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "827:24:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "827:33:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "827:33:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "869:17:37",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "879:7:37"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "869:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "895:39:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "919:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "930:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "915:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "915:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "909:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "909:25:37"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "899:6:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "943:28:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "961:2:37",
                            "type": "",
                            "value": "64"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "965:1:37",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "957:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "957:10:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "969:1:37",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "953:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "953:18:37"
                  },
                  "variables": [
                    {
                      "name": "_2",
                      "nodeType": "YulTypedName",
                      "src": "947:2:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "998:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1007:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1010:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1000:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1000:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1000:12:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "986:6:37"
                      },
                      {
                        "name": "_2",
                        "nodeType": "YulIdentifier",
                        "src": "994:2:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "983:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "983:14:37"
                  },
                  "nodeType": "YulIf",
                  "src": "980:34:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1023:32:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1037:9:37"
                      },
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "1048:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1033:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1033:22:37"
                  },
                  "variables": [
                    {
                      "name": "_3",
                      "nodeType": "YulTypedName",
                      "src": "1027:2:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1103:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1112:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1115:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1105:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1105:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1105:12:37"
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
                                "name": "_3",
                                "nodeType": "YulIdentifier",
                                "src": "1082:2:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1086:4:37",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1078:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1078:13:37"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1093:7:37"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "1074:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1074:27:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "1067:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1067:35:37"
                  },
                  "nodeType": "YulIf",
                  "src": "1064:55:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1128:19:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "_3",
                        "nodeType": "YulIdentifier",
                        "src": "1144:2:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1138:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1138:9:37"
                  },
                  "variables": [
                    {
                      "name": "_4",
                      "nodeType": "YulTypedName",
                      "src": "1132:2:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1170:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "1172:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1172:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1172:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "_4",
                        "nodeType": "YulIdentifier",
                        "src": "1162:2:37"
                      },
                      {
                        "name": "_2",
                        "nodeType": "YulIdentifier",
                        "src": "1166:2:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1159:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1159:10:37"
                  },
                  "nodeType": "YulIf",
                  "src": "1156:36:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1201:17:37",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1215:2:37",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "not",
                      "nodeType": "YulIdentifier",
                      "src": "1211:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1211:7:37"
                  },
                  "variables": [
                    {
                      "name": "_5",
                      "nodeType": "YulTypedName",
                      "src": "1205:2:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1227:23:37",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1247:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1241:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1241:9:37"
                  },
                  "variables": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "1231:6:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1259:71:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "1281:6:37"
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
                                        "name": "_4",
                                        "nodeType": "YulIdentifier",
                                        "src": "1305:2:37"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "1309:4:37",
                                        "type": "",
                                        "value": "0x1f"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "1301:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1301:13:37"
                                  },
                                  {
                                    "name": "_5",
                                    "nodeType": "YulIdentifier",
                                    "src": "1316:2:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "1297:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1297:22:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1321:2:37",
                                "type": "",
                                "value": "63"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1293:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1293:31:37"
                          },
                          {
                            "name": "_5",
                            "nodeType": "YulIdentifier",
                            "src": "1326:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "1289:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1289:40:37"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1277:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1277:53:37"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "1263:10:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1389:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "1391:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1391:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1391:18:37"
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
                            "src": "1348:10:37"
                          },
                          {
                            "name": "_2",
                            "nodeType": "YulIdentifier",
                            "src": "1360:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "1345:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1345:18:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "1368:10:37"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "1380:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "1365:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1365:22:37"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "1342:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1342:46:37"
                  },
                  "nodeType": "YulIf",
                  "src": "1339:72:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1427:2:37",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "1431:10:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1420:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1420:22:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1420:22:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "1458:6:37"
                      },
                      {
                        "name": "_4",
                        "nodeType": "YulIdentifier",
                        "src": "1466:2:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1451:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1451:18:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1451:18:37"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1515:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1524:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1527:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1517:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1517:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1517:12:37"
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
                                "name": "_3",
                                "nodeType": "YulIdentifier",
                                "src": "1492:2:37"
                              },
                              {
                                "name": "_4",
                                "nodeType": "YulIdentifier",
                                "src": "1496:2:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1488:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1488:11:37"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "1501:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1484:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1484:20:37"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "1506:7:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1481:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1481:33:37"
                  },
                  "nodeType": "YulIf",
                  "src": "1478:53:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1540:10:37",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "1549:1:37",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "1544:1:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1605:83:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "memPtr",
                                      "nodeType": "YulIdentifier",
                                      "src": "1634:6:37"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "1642:1:37"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1630:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1630:14:37"
                                },
                                {
                                  "name": "_1",
                                  "nodeType": "YulIdentifier",
                                  "src": "1646:2:37"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1626:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1626:23:37"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "_3",
                                          "nodeType": "YulIdentifier",
                                          "src": "1665:2:37"
                                        },
                                        {
                                          "name": "i",
                                          "nodeType": "YulIdentifier",
                                          "src": "1669:1:37"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "1661:3:37"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1661:10:37"
                                    },
                                    {
                                      "name": "_1",
                                      "nodeType": "YulIdentifier",
                                      "src": "1673:2:37"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1657:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1657:19:37"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "1651:5:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1651:26:37"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1619:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1619:59:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1619:59:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "1570:1:37"
                      },
                      {
                        "name": "_4",
                        "nodeType": "YulIdentifier",
                        "src": "1573:2:37"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "1567:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1567:9:37"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "1577:19:37",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1579:15:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "1588:1:37"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1591:2:37"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1584:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1584:10:37"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "1579:1:37"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "1563:3:37",
                    "statements": []
                  },
                  "src": "1559:129:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "memPtr",
                                "nodeType": "YulIdentifier",
                                "src": "1712:6:37"
                              },
                              {
                                "name": "_4",
                                "nodeType": "YulIdentifier",
                                "src": "1720:2:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1708:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1708:15:37"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "1725:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1704:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1704:24:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1730:1:37",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1697:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1697:35:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1697:35:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1741:16:37",
                  "value": {
                    "name": "memPtr",
                    "nodeType": "YulIdentifier",
                    "src": "1751:6:37"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "1741:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1766:67:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1818:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1829:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1814:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1814:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address_payable_fromMemory",
                      "nodeType": "YulIdentifier",
                      "src": "1776:37:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1776:57:37"
                  },
                  "variableNames": [
                    {
                      "name": "value3",
                      "nodeType": "YulIdentifier",
                      "src": "1766:6:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_string_memory_ptrt_address_payable_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "525:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "536:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "548:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "556:6:37",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "564:6:37",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "572:6:37",
                "type": ""
              }
            ],
            "src": "433:1406:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1899:325:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1909:22:37",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1923:1:37",
                        "type": "",
                        "value": "1"
                      },
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "1926:4:37"
                      }
                    ],
                    "functionName": {
                      "name": "shr",
                      "nodeType": "YulIdentifier",
                      "src": "1919:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1919:12:37"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "1909:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1940:38:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "1970:4:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1976:1:37",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "1966:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1966:12:37"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "1944:18:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2017:31:37",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2019:27:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "2033:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2041:4:37",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "2029:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2029:17:37"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2019:6:37"
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
                        "src": "1997:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "1990:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1990:26:37"
                  },
                  "nodeType": "YulIf",
                  "src": "1987:61:37"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2107:111:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2128:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2135:3:37",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2140:10:37",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "2131:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2131:20:37"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2121:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2121:31:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2121:31:37"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2172:1:37",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2175:4:37",
                              "type": "",
                              "value": "0x22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2165:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2165:15:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2165:15:37"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2200:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2203:4:37",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2193:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2193:15:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2193:15:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "2063:18:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2086:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2094:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "2083:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2083:14:37"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "2060:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2060:38:37"
                  },
                  "nodeType": "YulIf",
                  "src": "2057:161:37"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "1879:4:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1888:6:37",
                "type": ""
              }
            ],
            "src": "1844:380:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2285:65:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2302:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "name": "ptr",
                        "nodeType": "YulIdentifier",
                        "src": "2305:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2295:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2295:14:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2295:14:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2318:26:37",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2336:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2339:4:37",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "keccak256",
                      "nodeType": "YulIdentifier",
                      "src": "2326:9:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2326:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "2318:4:37"
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
                "src": "2268:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "2276:4:37",
                "type": ""
              }
            ],
            "src": "2229:121:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2436:464:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2469:425:37",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2483:11:37",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2493:1:37",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "2487:2:37",
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
                              "src": "2514:2:37"
                            },
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "2518:5:37"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2507:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2507:17:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2507:17:37"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2537:31:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "2559:2:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2563:4:37",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nodeType": "YulIdentifier",
                            "src": "2549:9:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2549:19:37"
                        },
                        "variables": [
                          {
                            "name": "data",
                            "nodeType": "YulTypedName",
                            "src": "2541:4:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2581:57:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "2604:4:37"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2614:1:37",
                                  "type": "",
                                  "value": "5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "startIndex",
                                      "nodeType": "YulIdentifier",
                                      "src": "2621:10:37"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2633:2:37",
                                      "type": "",
                                      "value": "31"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2617:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2617:19:37"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nodeType": "YulIdentifier",
                                "src": "2610:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2610:27:37"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2600:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2600:38:37"
                        },
                        "variables": [
                          {
                            "name": "deleteStart",
                            "nodeType": "YulTypedName",
                            "src": "2585:11:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2675:23:37",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "2677:19:37",
                              "value": {
                                "name": "data",
                                "nodeType": "YulIdentifier",
                                "src": "2692:4:37"
                              },
                              "variableNames": [
                                {
                                  "name": "deleteStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2677:11:37"
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
                              "src": "2657:10:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2669:4:37",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "2654:2:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2654:20:37"
                        },
                        "nodeType": "YulIf",
                        "src": "2651:47:37"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2711:41:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "2725:4:37"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2735:1:37",
                                  "type": "",
                                  "value": "5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "len",
                                      "nodeType": "YulIdentifier",
                                      "src": "2742:3:37"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2747:2:37",
                                      "type": "",
                                      "value": "31"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2738:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2738:12:37"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nodeType": "YulIdentifier",
                                "src": "2731:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2731:20:37"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2721:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2721:31:37"
                        },
                        "variables": [
                          {
                            "name": "_2",
                            "nodeType": "YulTypedName",
                            "src": "2715:2:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2765:24:37",
                        "value": {
                          "name": "deleteStart",
                          "nodeType": "YulIdentifier",
                          "src": "2778:11:37"
                        },
                        "variables": [
                          {
                            "name": "start",
                            "nodeType": "YulTypedName",
                            "src": "2769:5:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2863:21:37",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "start",
                                    "nodeType": "YulIdentifier",
                                    "src": "2872:5:37"
                                  },
                                  {
                                    "name": "_1",
                                    "nodeType": "YulIdentifier",
                                    "src": "2879:2:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "2865:6:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2865:17:37"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2865:17:37"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "2813:5:37"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "2820:2:37"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "2810:2:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2810:13:37"
                        },
                        "nodeType": "YulForLoop",
                        "post": {
                          "nodeType": "YulBlock",
                          "src": "2824:26:37",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "2826:22:37",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "start",
                                    "nodeType": "YulIdentifier",
                                    "src": "2839:5:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2846:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "2835:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2835:13:37"
                              },
                              "variableNames": [
                                {
                                  "name": "start",
                                  "nodeType": "YulIdentifier",
                                  "src": "2826:5:37"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nodeType": "YulBlock",
                          "src": "2806:3:37",
                          "statements": []
                        },
                        "src": "2802:82:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "len",
                        "nodeType": "YulIdentifier",
                        "src": "2452:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2457:2:37",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "2449:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2449:11:37"
                  },
                  "nodeType": "YulIf",
                  "src": "2446:448:37"
                }
              ]
            },
            "name": "clean_up_bytearray_end_slots_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "2408:5:37",
                "type": ""
              },
              {
                "name": "len",
                "nodeType": "YulTypedName",
                "src": "2415:3:37",
                "type": ""
              },
              {
                "name": "startIndex",
                "nodeType": "YulTypedName",
                "src": "2420:10:37",
                "type": ""
              }
            ],
            "src": "2355:545:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2990:81:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3000:65:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "data",
                            "nodeType": "YulIdentifier",
                            "src": "3015:4:37"
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
                                        "src": "3033:1:37",
                                        "type": "",
                                        "value": "3"
                                      },
                                      {
                                        "name": "len",
                                        "nodeType": "YulIdentifier",
                                        "src": "3036:3:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "3029:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3029:11:37"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3046:1:37",
                                        "type": "",
                                        "value": "0"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nodeType": "YulIdentifier",
                                      "src": "3042:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3042:6:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "3025:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3025:24:37"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "3021:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3021:29:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "3011:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3011:40:37"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3057:1:37",
                            "type": "",
                            "value": "1"
                          },
                          {
                            "name": "len",
                            "nodeType": "YulIdentifier",
                            "src": "3060:3:37"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "3053:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3053:11:37"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "3008:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3008:57:37"
                  },
                  "variableNames": [
                    {
                      "name": "used",
                      "nodeType": "YulIdentifier",
                      "src": "3000:4:37"
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
                "src": "2967:4:37",
                "type": ""
              },
              {
                "name": "len",
                "nodeType": "YulTypedName",
                "src": "2973:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "used",
                "nodeType": "YulTypedName",
                "src": "2981:4:37",
                "type": ""
              }
            ],
            "src": "2905:166:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3172:1256:37",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3182:24:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "3202:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "3196:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3196:10:37"
                  },
                  "variables": [
                    {
                      "name": "newLen",
                      "nodeType": "YulTypedName",
                      "src": "3186:6:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3249:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "3251:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3251:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3251:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "3221:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3237:2:37",
                                "type": "",
                                "value": "64"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3241:1:37",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "shl",
                              "nodeType": "YulIdentifier",
                              "src": "3233:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3233:10:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3245:1:37",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3229:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3229:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "3218:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3218:30:37"
                  },
                  "nodeType": "YulIf",
                  "src": "3215:56:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "slot",
                        "nodeType": "YulIdentifier",
                        "src": "3324:4:37"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "slot",
                                "nodeType": "YulIdentifier",
                                "src": "3362:4:37"
                              }
                            ],
                            "functionName": {
                              "name": "sload",
                              "nodeType": "YulIdentifier",
                              "src": "3356:5:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3356:11:37"
                          }
                        ],
                        "functionName": {
                          "name": "extract_byte_array_length",
                          "nodeType": "YulIdentifier",
                          "src": "3330:25:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3330:38:37"
                      },
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "3370:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "clean_up_bytearray_end_slots_string_storage",
                      "nodeType": "YulIdentifier",
                      "src": "3280:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3280:97:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3280:97:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3386:18:37",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "3403:1:37",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "srcOffset",
                      "nodeType": "YulTypedName",
                      "src": "3390:9:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3413:23:37",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "3432:4:37",
                    "type": "",
                    "value": "0x20"
                  },
                  "variables": [
                    {
                      "name": "srcOffset_1",
                      "nodeType": "YulTypedName",
                      "src": "3417:11:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3445:24:37",
                  "value": {
                    "name": "srcOffset_1",
                    "nodeType": "YulIdentifier",
                    "src": "3458:11:37"
                  },
                  "variableNames": [
                    {
                      "name": "srcOffset",
                      "nodeType": "YulIdentifier",
                      "src": "3445:9:37"
                    }
                  ]
                },
                {
                  "cases": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "3515:656:37",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "3529:35:37",
                            "value": {
                              "arguments": [
                                {
                                  "name": "newLen",
                                  "nodeType": "YulIdentifier",
                                  "src": "3548:6:37"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "3560:2:37",
                                      "type": "",
                                      "value": "31"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nodeType": "YulIdentifier",
                                    "src": "3556:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3556:7:37"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "3544:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3544:20:37"
                            },
                            "variables": [
                              {
                                "name": "loopEnd",
                                "nodeType": "YulTypedName",
                                "src": "3533:7:37",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "3577:49:37",
                            "value": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "3621:4:37"
                                }
                              ],
                              "functionName": {
                                "name": "array_dataslot_string_storage",
                                "nodeType": "YulIdentifier",
                                "src": "3591:29:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3591:35:37"
                            },
                            "variables": [
                              {
                                "name": "dstPtr",
                                "nodeType": "YulTypedName",
                                "src": "3581:6:37",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "3639:10:37",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3648:1:37",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "i",
                                "nodeType": "YulTypedName",
                                "src": "3643:1:37",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "3726:172:37",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "3751:6:37"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "src",
                                                "nodeType": "YulIdentifier",
                                                "src": "3769:3:37"
                                              },
                                              {
                                                "name": "srcOffset",
                                                "nodeType": "YulIdentifier",
                                                "src": "3774:9:37"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "add",
                                              "nodeType": "YulIdentifier",
                                              "src": "3765:3:37"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "3765:19:37"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mload",
                                          "nodeType": "YulIdentifier",
                                          "src": "3759:5:37"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "3759:26:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "3744:6:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3744:42:37"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "3744:42:37"
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "3803:24:37",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "3817:6:37"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3825:1:37",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "3813:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3813:14:37"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "dstPtr",
                                      "nodeType": "YulIdentifier",
                                      "src": "3803:6:37"
                                    }
                                  ]
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "3844:40:37",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "srcOffset",
                                        "nodeType": "YulIdentifier",
                                        "src": "3861:9:37"
                                      },
                                      {
                                        "name": "srcOffset_1",
                                        "nodeType": "YulIdentifier",
                                        "src": "3872:11:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "3857:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3857:27:37"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "srcOffset",
                                      "nodeType": "YulIdentifier",
                                      "src": "3844:9:37"
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
                                  "src": "3673:1:37"
                                },
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "3676:7:37"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "3670:2:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3670:14:37"
                            },
                            "nodeType": "YulForLoop",
                            "post": {
                              "nodeType": "YulBlock",
                              "src": "3685:28:37",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "3687:24:37",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "3696:1:37"
                                      },
                                      {
                                        "name": "srcOffset_1",
                                        "nodeType": "YulIdentifier",
                                        "src": "3699:11:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "3692:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3692:19:37"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "3687:1:37"
                                    }
                                  ]
                                }
                              ]
                            },
                            "pre": {
                              "nodeType": "YulBlock",
                              "src": "3666:3:37",
                              "statements": []
                            },
                            "src": "3662:236:37"
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "3946:166:37",
                              "statements": [
                                {
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "3964:43:37",
                                  "value": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "3991:3:37"
                                          },
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "3996:9:37"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "3987:3:37"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "3987:19:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "3981:5:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3981:26:37"
                                  },
                                  "variables": [
                                    {
                                      "name": "lastValue",
                                      "nodeType": "YulTypedName",
                                      "src": "3968:9:37",
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
                                        "src": "4031:6:37"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "name": "lastValue",
                                            "nodeType": "YulIdentifier",
                                            "src": "4043:9:37"
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
                                                            "src": "4070:1:37",
                                                            "type": "",
                                                            "value": "3"
                                                          },
                                                          {
                                                            "name": "newLen",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4073:6:37"
                                                          }
                                                        ],
                                                        "functionName": {
                                                          "name": "shl",
                                                          "nodeType": "YulIdentifier",
                                                          "src": "4066:3:37"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "4066:14:37"
                                                      },
                                                      {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "4082:3:37",
                                                        "type": "",
                                                        "value": "248"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "and",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "4062:3:37"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "4062:24:37"
                                                  },
                                                  {
                                                    "arguments": [
                                                      {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "4092:1:37",
                                                        "type": "",
                                                        "value": "0"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "not",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "4088:3:37"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "4088:6:37"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "shr",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4058:3:37"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4058:37:37"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "not",
                                              "nodeType": "YulIdentifier",
                                              "src": "4054:3:37"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4054:42:37"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "and",
                                          "nodeType": "YulIdentifier",
                                          "src": "4039:3:37"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4039:58:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "4024:6:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4024:74:37"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "4024:74:37"
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "3917:7:37"
                                },
                                {
                                  "name": "newLen",
                                  "nodeType": "YulIdentifier",
                                  "src": "3926:6:37"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "3914:2:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3914:19:37"
                            },
                            "nodeType": "YulIf",
                            "src": "3911:201:37"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "4132:4:37"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "4146:1:37",
                                          "type": "",
                                          "value": "1"
                                        },
                                        {
                                          "name": "newLen",
                                          "nodeType": "YulIdentifier",
                                          "src": "4149:6:37"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shl",
                                        "nodeType": "YulIdentifier",
                                        "src": "4142:3:37"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4142:14:37"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "4158:1:37",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "4138:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4138:22:37"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nodeType": "YulIdentifier",
                                "src": "4125:6:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4125:36:37"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "4125:36:37"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "3508:663:37",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3513:1:37",
                        "type": "",
                        "value": "1"
                      }
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "4188:234:37",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "4202:14:37",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4215:1:37",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "4206:5:37",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "4251:67:37",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "4269:35:37",
                                  "value": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "4288:3:37"
                                          },
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "4293:9:37"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "4284:3:37"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4284:19:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "4278:5:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4278:26:37"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "4269:5:37"
                                    }
                                  ]
                                }
                              ]
                            },
                            "condition": {
                              "name": "newLen",
                              "nodeType": "YulIdentifier",
                              "src": "4232:6:37"
                            },
                            "nodeType": "YulIf",
                            "src": "4229:89:37"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "4338:4:37"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "4397:5:37"
                                    },
                                    {
                                      "name": "newLen",
                                      "nodeType": "YulIdentifier",
                                      "src": "4404:6:37"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "extract_used_part_and_set_length_of_short_byte_array",
                                    "nodeType": "YulIdentifier",
                                    "src": "4344:52:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4344:67:37"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nodeType": "YulIdentifier",
                                "src": "4331:6:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4331:81:37"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "4331:81:37"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "4180:242:37",
                      "value": "default"
                    }
                  ],
                  "expression": {
                    "arguments": [
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "3488:6:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3496:2:37",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "3485:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3485:14:37"
                  },
                  "nodeType": "YulSwitch",
                  "src": "3478:944:37"
                }
              ]
            },
            "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "3157:4:37",
                "type": ""
              },
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "3163:3:37",
                "type": ""
              }
            ],
            "src": "3076:1352:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4480:185:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4519:111:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4540:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4547:3:37",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4552:10:37",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "4543:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4543:20:37"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4533:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4533:31:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4533:31:37"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4584:1:37",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4587:4:37",
                              "type": "",
                              "value": "0x11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4577:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4577:15:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4577:15:37"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4612:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4615:4:37",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4605:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4605:15:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4605:15:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4496:5:37"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4507:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "4503:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4503:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "4493:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4493:17:37"
                  },
                  "nodeType": "YulIf",
                  "src": "4490:140:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4639:20:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4650:5:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4657:1:37",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4646:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4646:13:37"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "4639:3:37"
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
                "src": "4462:5:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "4472:3:37",
                "type": ""
              }
            ],
            "src": "4433:232:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4844:182:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4861:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4872:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4854:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4854:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4854:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4895:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4906:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4891:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4891:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4911:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4884:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4884:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4884:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4934:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4945:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4930:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4930:18:37"
                      },
                      {
                        "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4950:34:37",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4923:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4923:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4923:62:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4994:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5006:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5017:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5002:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5002:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4994:4:37"
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
                "src": "4821:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4835:4:37",
                "type": ""
              }
            ],
            "src": "4670:356:37"
          }
        ]
      },
      "contents": "{\n    { }\n    function validator_revert_address(value)\n    {\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function abi_decode_address_payable_fromMemory(offset) -> value\n    {\n        value := mload(offset)\n        validator_revert_address(value)\n    }\n    function abi_decode_tuple_t_addresst_addresst_string_memory_ptrt_address_payable_fromMemory(headStart, dataEnd) -> value0, value1, value2, value3\n    {\n        if slt(sub(dataEnd, headStart), 128) { revert(0, 0) }\n        let value := mload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let _1 := 32\n        let value_1 := mload(add(headStart, _1))\n        validator_revert_address(value_1)\n        value1 := value_1\n        let offset := mload(add(headStart, 64))\n        let _2 := sub(shl(64, 1), 1)\n        if gt(offset, _2) { revert(0, 0) }\n        let _3 := add(headStart, offset)\n        if iszero(slt(add(_3, 0x1f), dataEnd)) { revert(0, 0) }\n        let _4 := mload(_3)\n        if gt(_4, _2) { panic_error_0x41() }\n        let _5 := not(31)\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(and(add(_4, 0x1f), _5), 63), _5))\n        if or(gt(newFreePtr, _2), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        mstore(memPtr, _4)\n        if gt(add(add(_3, _4), _1), dataEnd) { revert(0, 0) }\n        let i := 0\n        for { } lt(i, _4) { i := add(i, _1) }\n        {\n            mstore(add(add(memPtr, i), _1), mload(add(add(_3, i), _1)))\n        }\n        mstore(add(add(memPtr, _4), _1), 0)\n        value2 := memPtr\n        value3 := abi_decode_address_payable_fromMemory(add(headStart, 96))\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function array_dataslot_string_storage(ptr) -> data\n    {\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n    }\n    function clean_up_bytearray_end_slots_string_storage(array, len, startIndex)\n    {\n        if gt(len, 31)\n        {\n            let _1 := 0\n            mstore(_1, array)\n            let data := keccak256(_1, 0x20)\n            let deleteStart := add(data, shr(5, add(startIndex, 31)))\n            if lt(startIndex, 0x20) { deleteStart := data }\n            let _2 := add(data, shr(5, add(len, 31)))\n            let start := deleteStart\n            for { } lt(start, _2) { start := add(start, 1) }\n            { sstore(start, _1) }\n        }\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used\n    {\n        used := or(and(data, not(shr(shl(3, len), not(0)))), shl(1, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src)\n    {\n        let newLen := mload(src)\n        if gt(newLen, sub(shl(64, 1), 1)) { panic_error_0x41() }\n        clean_up_bytearray_end_slots_string_storage(slot, extract_byte_array_length(sload(slot)), newLen)\n        let srcOffset := 0\n        let srcOffset_1 := 0x20\n        srcOffset := srcOffset_1\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(31))\n            let dstPtr := array_dataslot_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, srcOffset_1) }\n            {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, srcOffset_1)\n            }\n            if lt(loopEnd, newLen)\n            {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, and(lastValue, not(shr(and(shl(3, newLen), 248), not(0)))))\n            }\n            sstore(slot, add(shl(1, newLen), 1))\n        }\n        default {\n            let value := 0\n            if newLen\n            {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x11)\n            revert(0, 0x24)\n        }\n        ret := add(value, 1)\n    }\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"Ownable: caller is not the owner\")\n        tail := add(headStart, 96)\n    }\n}",
      "id": 37,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:17441:37",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:37",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "58:87:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "123:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "132:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "135:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "125:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "125:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "125:12:37"
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
                            "src": "81:5:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "92:5:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "103:3:37",
                                    "type": "",
                                    "value": "224"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "108:10:37",
                                    "type": "",
                                    "value": "0xffffffff"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "99:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "99:20:37"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "88:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "88:32:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "78:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "78:43:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "71:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "71:51:37"
                  },
                  "nodeType": "YulIf",
                  "src": "68:71:37"
                }
              ]
            },
            "name": "validator_revert_bytes4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "47:5:37",
                "type": ""
              }
            ],
            "src": "14:131:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "219:176:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "265:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "274:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "277:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "267:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "267:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "267:12:37"
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
                            "src": "240:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "249:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "236:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "236:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "261:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "232:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "232:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "229:52:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "290:36:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "316:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "303:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "303:23:37"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "294:5:37",
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
                        "src": "359:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_bytes4",
                      "nodeType": "YulIdentifier",
                      "src": "335:23:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "335:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "335:30:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "374:15:37",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "384:5:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "374:6:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_bytes4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "185:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "196:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "208:6:37",
                "type": ""
              }
            ],
            "src": "150:245:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "495:92:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "505:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "517:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "528:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "513:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "513:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "505:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "547:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "572:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "565:6:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "565:14:37"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "558:6:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "558:22:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "540:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "540:41:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "540:41:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "464:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "475:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "486:4:37",
                "type": ""
              }
            ],
            "src": "400:187:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "658:184:37",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "668:10:37",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "677:1:37",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "672:1:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "737:63:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "762:3:37"
                                },
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "767:1:37"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "758:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "758:11:37"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "src",
                                      "nodeType": "YulIdentifier",
                                      "src": "781:3:37"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "786:1:37"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "777:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "777:11:37"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "771:5:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "771:18:37"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "751:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "751:39:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "751:39:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "698:1:37"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "701:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "695:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "695:13:37"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "709:19:37",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "711:15:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "720:1:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "723:2:37",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "716:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "716:10:37"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "711:1:37"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "691:3:37",
                    "statements": []
                  },
                  "src": "687:113:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "820:3:37"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "825:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "816:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "816:16:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "834:1:37",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "809:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "809:27:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "809:27:37"
                }
              ]
            },
            "name": "copy_memory_to_memory_with_cleanup",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "636:3:37",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "641:3:37",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "646:6:37",
                "type": ""
              }
            ],
            "src": "592:250:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "897:221:37",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "907:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "927:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "921:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "921:12:37"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "911:6:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "949:3:37"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "954:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "942:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "942:19:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "942:19:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1009:5:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1016:4:37",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1005:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1005:16:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "1027:3:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1032:4:37",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1023:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1023:14:37"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1039:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory_with_cleanup",
                      "nodeType": "YulIdentifier",
                      "src": "970:34:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "970:76:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "970:76:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1055:57:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "1070:3:37"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "length",
                                    "nodeType": "YulIdentifier",
                                    "src": "1083:6:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1091:2:37",
                                    "type": "",
                                    "value": "31"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "1079:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1079:15:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1100:2:37",
                                    "type": "",
                                    "value": "31"
                                  }
                                ],
                                "functionName": {
                                  "name": "not",
                                  "nodeType": "YulIdentifier",
                                  "src": "1096:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1096:7:37"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "1075:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1075:29:37"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1066:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1066:39:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1107:4:37",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1062:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1062:50:37"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "1055:3:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_string",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "874:5:37",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "881:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "889:3:37",
                "type": ""
              }
            ],
            "src": "847:271:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1244:99:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1261:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1272:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1254:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1254:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1254:21:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1284:53:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "1310:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1322:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1333:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1318:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1318:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_string",
                      "nodeType": "YulIdentifier",
                      "src": "1292:17:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1292:45:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1284:4:37"
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
                "src": "1213:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1224:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1235:4:37",
                "type": ""
              }
            ],
            "src": "1123:220:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1418:110:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1464:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1473:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1476:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1466:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1466:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1466:12:37"
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
                            "src": "1439:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1448:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1435:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1435:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1460:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1431:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1431:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "1428:52:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1489:33:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1512:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1499:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1499:23:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1489:6:37"
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
                "src": "1384:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1395:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1407:6:37",
                "type": ""
              }
            ],
            "src": "1348:180:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1634:102:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1644:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1656:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1667:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1652:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1652:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1644:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1686:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1701:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1717:3:37",
                                    "type": "",
                                    "value": "160"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1722:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "1713:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1713:11:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1726:1:37",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "1709:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1709:19:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "1697:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1697:32:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1679:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1679:51:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1679:51:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1603:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1614:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1625:4:37",
                "type": ""
              }
            ],
            "src": "1533:203:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1790:124:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1800:29:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "1822:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1809:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1809:20:37"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "1800:5:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1892:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1901:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1904:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1894:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1894:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1894:12:37"
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
                            "src": "1851:5:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "1862:5:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "1877:3:37",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "1882:1:37",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "1873:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1873:11:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1886:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "1869:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1869:19:37"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "1858:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1858:31:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "1848:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1848:42:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "1841:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1841:50:37"
                  },
                  "nodeType": "YulIf",
                  "src": "1838:70:37"
                }
              ]
            },
            "name": "abi_decode_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "1769:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1780:5:37",
                "type": ""
              }
            ],
            "src": "1741:173:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2006:167:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2052:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2061:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2064:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2054:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2054:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2054:12:37"
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
                            "src": "2027:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2036:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2023:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2023:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2048:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2019:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2019:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "2016:52:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2077:39:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2106:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "2087:18:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2087:29:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "2077:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2125:42:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2152:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2163:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2148:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2148:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2135:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2135:32:37"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "2125:6:37"
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
                "src": "1964:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1975:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1987:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1995:6:37",
                "type": ""
              }
            ],
            "src": "1919:254:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2279:76:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2289:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2301:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2312:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2297:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2297:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2289:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2331:9:37"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2342:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2324:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2324:25:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2324:25:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2248:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2259:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2270:4:37",
                "type": ""
              }
            ],
            "src": "2178:177:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2464:224:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2510:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2519:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2522:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2512:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2512:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2512:12:37"
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
                            "src": "2485:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2494:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2481:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2481:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2506:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2477:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2477:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "2474:52:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2535:39:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2564:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "2545:18:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2545:29:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "2535:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2583:48:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2616:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2627:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2612:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2612:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "2593:18:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2593:38:37"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "2583:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2640:42:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2667:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2678:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2663:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2663:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2650:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2650:32:37"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "2640:6:37"
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
                "src": "2414:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2425:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2437:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2445:6:37",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "2453:6:37",
                "type": ""
              }
            ],
            "src": "2360:328:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2810:102:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2820:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2832:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2843:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2828:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2828:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2820:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2862:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2877:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2893:3:37",
                                    "type": "",
                                    "value": "160"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2898:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "2889:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2889:11:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2902:1:37",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "2885:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2885:19:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "2873:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2873:32:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2855:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2855:51:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2855:51:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_payable__to_t_address_payable__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2779:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2790:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2801:4:37",
                "type": ""
              }
            ],
            "src": "2693:219:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2987:116:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3033:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3042:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3045:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3035:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3035:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3035:12:37"
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
                            "src": "3008:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3017:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3004:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3004:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3029:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3000:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3000:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "2997:52:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3058:39:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3087:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "3068:18:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3068:29:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "3058:6:37"
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
                "src": "2953:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2964:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2976:6:37",
                "type": ""
              }
            ],
            "src": "2917:186:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3150:76:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3204:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3213:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3216:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3206:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3206:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3206:12:37"
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
                            "src": "3173:5:37"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "3194:5:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nodeType": "YulIdentifier",
                                  "src": "3187:6:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3187:13:37"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "3180:6:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3180:21:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "3170:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3170:32:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "3163:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3163:40:37"
                  },
                  "nodeType": "YulIf",
                  "src": "3160:60:37"
                }
              ]
            },
            "name": "validator_revert_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3139:5:37",
                "type": ""
              }
            ],
            "src": "3108:118:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3315:231:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3361:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3370:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3373:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3363:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3363:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3363:12:37"
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
                            "src": "3336:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3345:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3332:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3332:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3357:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3328:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3328:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "3325:52:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3386:39:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3415:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "3396:18:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3396:29:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "3386:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3434:45:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3464:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3475:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3460:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3460:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "3447:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3447:32:37"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "3438:5:37",
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
                        "src": "3510:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_bool",
                      "nodeType": "YulIdentifier",
                      "src": "3488:21:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3488:28:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3488:28:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3525:15:37",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "3535:5:37"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "3525:6:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3273:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3284:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3296:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "3304:6:37",
                "type": ""
              }
            ],
            "src": "3231:315:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3583:95:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3600:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3607:3:37",
                            "type": "",
                            "value": "224"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3612:10:37",
                            "type": "",
                            "value": "0x4e487b71"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "3603:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3603:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3593:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3593:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3593:31:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3640:1:37",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3643:4:37",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3633:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3633:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3633:15:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3664:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3667:4:37",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "3657:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3657:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3657:15:37"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "3551:127:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3813:1008:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3860:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3869:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3872:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3862:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3862:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3862:12:37"
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
                            "src": "3834:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3843:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3830:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3830:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3855:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3826:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3826:33:37"
                  },
                  "nodeType": "YulIf",
                  "src": "3823:53:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3885:39:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3914:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "3895:18:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3895:29:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "3885:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3933:48:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3966:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3977:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3962:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3962:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "3943:18:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3943:38:37"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "3933:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3990:42:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4017:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4028:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4013:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4013:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4000:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4000:32:37"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "3990:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4041:46:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4072:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4083:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4068:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4068:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4055:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4055:32:37"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "4045:6:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4096:28:37",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "4106:18:37",
                    "type": "",
                    "value": "0xffffffffffffffff"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "4100:2:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4151:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4160:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4163:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4153:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4153:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4153:12:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "4139:6:37"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "4147:2:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4136:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4136:14:37"
                  },
                  "nodeType": "YulIf",
                  "src": "4133:34:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4176:32:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4190:9:37"
                      },
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "4201:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4186:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4186:22:37"
                  },
                  "variables": [
                    {
                      "name": "_2",
                      "nodeType": "YulTypedName",
                      "src": "4180:2:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4256:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4265:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4268:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4258:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4258:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4258:12:37"
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
                                "name": "_2",
                                "nodeType": "YulIdentifier",
                                "src": "4235:2:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4239:4:37",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4231:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4231:13:37"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4246:7:37"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "4227:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4227:27:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "4220:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4220:35:37"
                  },
                  "nodeType": "YulIf",
                  "src": "4217:55:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4281:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "_2",
                        "nodeType": "YulIdentifier",
                        "src": "4304:2:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4291:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4291:16:37"
                  },
                  "variables": [
                    {
                      "name": "_3",
                      "nodeType": "YulTypedName",
                      "src": "4285:2:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4330:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "4332:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4332:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4332:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "_3",
                        "nodeType": "YulIdentifier",
                        "src": "4322:2:37"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "4326:2:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4319:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4319:10:37"
                  },
                  "nodeType": "YulIf",
                  "src": "4316:36:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4361:17:37",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4375:2:37",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "not",
                      "nodeType": "YulIdentifier",
                      "src": "4371:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4371:7:37"
                  },
                  "variables": [
                    {
                      "name": "_4",
                      "nodeType": "YulTypedName",
                      "src": "4365:2:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4387:23:37",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4407:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "4401:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4401:9:37"
                  },
                  "variables": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "4391:6:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4419:71:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "4441:6:37"
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
                                        "name": "_3",
                                        "nodeType": "YulIdentifier",
                                        "src": "4465:2:37"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "4469:4:37",
                                        "type": "",
                                        "value": "0x1f"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "4461:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4461:13:37"
                                  },
                                  {
                                    "name": "_4",
                                    "nodeType": "YulIdentifier",
                                    "src": "4476:2:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "4457:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4457:22:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4481:2:37",
                                "type": "",
                                "value": "63"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4453:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4453:31:37"
                          },
                          {
                            "name": "_4",
                            "nodeType": "YulIdentifier",
                            "src": "4486:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "4449:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4449:40:37"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4437:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4437:53:37"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "4423:10:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4549:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "4551:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4551:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4551:18:37"
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
                            "src": "4508:10:37"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "4520:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "4505:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4505:18:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "4528:10:37"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "4540:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "4525:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4525:22:37"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "4502:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4502:46:37"
                  },
                  "nodeType": "YulIf",
                  "src": "4499:72:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4587:2:37",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "4591:10:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4580:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4580:22:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4580:22:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "4618:6:37"
                      },
                      {
                        "name": "_3",
                        "nodeType": "YulIdentifier",
                        "src": "4626:2:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4611:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4611:18:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4611:18:37"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4675:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4684:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4687:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4677:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4677:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4677:12:37"
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
                                "name": "_2",
                                "nodeType": "YulIdentifier",
                                "src": "4652:2:37"
                              },
                              {
                                "name": "_3",
                                "nodeType": "YulIdentifier",
                                "src": "4656:2:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4648:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4648:11:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4661:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4644:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4644:20:37"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "4666:7:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4641:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4641:33:37"
                  },
                  "nodeType": "YulIf",
                  "src": "4638:53:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "4717:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4725:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4713:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4713:15:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "_2",
                            "nodeType": "YulIdentifier",
                            "src": "4734:2:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4738:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4730:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4730:11:37"
                      },
                      {
                        "name": "_3",
                        "nodeType": "YulIdentifier",
                        "src": "4743:2:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldatacopy",
                      "nodeType": "YulIdentifier",
                      "src": "4700:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4700:46:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4700:46:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "memPtr",
                                "nodeType": "YulIdentifier",
                                "src": "4770:6:37"
                              },
                              {
                                "name": "_3",
                                "nodeType": "YulIdentifier",
                                "src": "4778:2:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4766:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4766:15:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4783:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4762:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4762:24:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4788:1:37",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4755:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4755:35:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4755:35:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4799:16:37",
                  "value": {
                    "name": "memPtr",
                    "nodeType": "YulIdentifier",
                    "src": "4809:6:37"
                  },
                  "variableNames": [
                    {
                      "name": "value3",
                      "nodeType": "YulIdentifier",
                      "src": "4799:6:37"
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
                "src": "3755:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3766:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3778:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "3786:6:37",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "3794:6:37",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "3802:6:37",
                "type": ""
              }
            ],
            "src": "3683:1138:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4913:173:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4959:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4968:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4971:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4961:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4961:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4961:12:37"
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
                            "src": "4934:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4943:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4930:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4930:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4955:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4926:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4926:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "4923:52:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4984:39:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5013:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "4994:18:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4994:29:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "4984:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5032:48:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5065:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5076:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5061:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5061:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_address",
                      "nodeType": "YulIdentifier",
                      "src": "5042:18:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5042:38:37"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "5032:6:37"
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
                "src": "4871:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4882:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4894:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "4902:6:37",
                "type": ""
              }
            ],
            "src": "4826:260:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5146:325:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5156:22:37",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5170:1:37",
                        "type": "",
                        "value": "1"
                      },
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "5173:4:37"
                      }
                    ],
                    "functionName": {
                      "name": "shr",
                      "nodeType": "YulIdentifier",
                      "src": "5166:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5166:12:37"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "5156:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5187:38:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "5217:4:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5223:1:37",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "5213:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5213:12:37"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "5191:18:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5264:31:37",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "5266:27:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "5280:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5288:4:37",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "5276:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5276:17:37"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "5266:6:37"
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
                        "src": "5244:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "5237:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5237:26:37"
                  },
                  "nodeType": "YulIf",
                  "src": "5234:61:37"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5354:111:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5375:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5382:3:37",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5387:10:37",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "5378:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5378:20:37"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "5368:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5368:31:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5368:31:37"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5419:1:37",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5422:4:37",
                              "type": "",
                              "value": "0x22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "5412:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5412:15:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5412:15:37"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5447:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5450:4:37",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "5440:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5440:15:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5440:15:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "5310:18:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "5333:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5341:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "5330:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5330:14:37"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "5307:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5307:38:37"
                  },
                  "nodeType": "YulIf",
                  "src": "5304:161:37"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "5126:4:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "5135:6:37",
                "type": ""
              }
            ],
            "src": "5091:380:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5650:223:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5667:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5678:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5660:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5660:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5660:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5701:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5712:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5697:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5697:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5717:2:37",
                        "type": "",
                        "value": "33"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5690:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5690:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5690:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5740:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5751:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5736:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5736:18:37"
                      },
                      {
                        "hexValue": "4552433732313a20617070726f76616c20746f2063757272656e74206f776e65",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "5756:34:37",
                        "type": "",
                        "value": "ERC721: approval to current owne"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5729:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5729:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5729:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5811:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5822:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5807:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5807:18:37"
                      },
                      {
                        "hexValue": "72",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "5827:3:37",
                        "type": "",
                        "value": "r"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5800:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5800:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5800:31:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5840:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5852:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5863:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5848:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5848:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5840:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5627:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5641:4:37",
                "type": ""
              }
            ],
            "src": "5476:397:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6052:252:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6069:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6080:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6062:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6062:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6062:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6103:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6114:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6099:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6099:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6119:2:37",
                        "type": "",
                        "value": "62"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6092:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6092:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6092:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6142:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6153:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6138:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6138:18:37"
                      },
                      {
                        "hexValue": "4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "6158:34:37",
                        "type": "",
                        "value": "ERC721: approve caller is not to"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6131:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6131:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6131:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6213:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6224:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6209:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6209:18:37"
                      },
                      {
                        "hexValue": "6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "6229:32:37",
                        "type": "",
                        "value": "ken owner nor approved for all"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6202:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6202:60:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6202:60:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6271:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6283:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6294:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6279:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6279:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6271:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6029:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6043:4:37",
                "type": ""
              }
            ],
            "src": "5878:426:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6483:236:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6500:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6511:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6493:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6493:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6493:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6534:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6545:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6530:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6530:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6550:2:37",
                        "type": "",
                        "value": "46"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6523:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6523:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6523:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6573:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6584:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6569:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6569:18:37"
                      },
                      {
                        "hexValue": "4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e65",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "6589:34:37",
                        "type": "",
                        "value": "ERC721: caller is not token owne"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6562:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6562:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6562:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6644:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6655:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6640:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6640:18:37"
                      },
                      {
                        "hexValue": "72206e6f7220617070726f766564",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "6660:16:37",
                        "type": "",
                        "value": "r nor approved"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6633:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6633:44:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6633:44:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6686:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6698:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6709:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6694:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6694:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6686:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6460:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6474:4:37",
                "type": ""
              }
            ],
            "src": "6309:410:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6805:103:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6851:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6860:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6863:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "6853:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6853:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6853:12:37"
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
                            "src": "6826:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6835:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "6822:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6822:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6847:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "6818:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6818:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "6815:52:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6876:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6892:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "6886:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6886:16:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "6876:6:37"
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
                "src": "6771:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "6782:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6794:6:37",
                "type": ""
              }
            ],
            "src": "6724:184:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7087:229:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7104:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7115:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7097:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7097:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7097:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7138:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7149:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7134:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7134:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7154:2:37",
                        "type": "",
                        "value": "39"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7127:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7127:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7127:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7177:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7188:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7173:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7173:18:37"
                      },
                      {
                        "hexValue": "4552433732313a20726563697069656e74206c61636b206f6620657263323020",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7193:34:37",
                        "type": "",
                        "value": "ERC721: recipient lack of erc20 "
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7166:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7166:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7166:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7248:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7259:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7244:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7244:18:37"
                      },
                      {
                        "hexValue": "62616c616e6365",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7264:9:37",
                        "type": "",
                        "value": "balance"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7237:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7237:37:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7237:37:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7283:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7295:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7306:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7291:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7291:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7283:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_be6ad8021e6b80a9a985704237732530c0e3cdf07bbf9d28e13e90abe670112e__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7064:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7078:4:37",
                "type": ""
              }
            ],
            "src": "6913:403:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7495:177:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7512:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7523:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7505:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7505:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7505:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7546:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7557:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7542:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7542:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7562:2:37",
                        "type": "",
                        "value": "27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7535:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7535:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7535:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7585:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7596:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7581:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7581:18:37"
                      },
                      {
                        "hexValue": "4552433732313a20616c6c206e66747320617265206d696e746564",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7601:29:37",
                        "type": "",
                        "value": "ERC721: all nfts are minted"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7574:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7574:57:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7574:57:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7640:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7652:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7663:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7648:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7648:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7640:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_df3d2f59522d891de16a4252d65c969fd7e0ed099ebf38783c0a5e88ec8b1c22__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7472:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7486:4:37",
                "type": ""
              }
            ],
            "src": "7321:351:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7709:95:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7726:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7733:3:37",
                            "type": "",
                            "value": "224"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7738:10:37",
                            "type": "",
                            "value": "0x4e487b71"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "7729:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7729:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7719:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7719:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7719:31:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7766:1:37",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7769:4:37",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7759:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7759:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7759:15:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7790:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7793:4:37",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "7783:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7783:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7783:15:37"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "7677:127:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7858:79:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7868:17:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "7880:1:37"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "7883:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "7876:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7876:9:37"
                  },
                  "variableNames": [
                    {
                      "name": "diff",
                      "nodeType": "YulIdentifier",
                      "src": "7868:4:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7909:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "7911:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7911:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7911:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "diff",
                        "nodeType": "YulIdentifier",
                        "src": "7900:4:37"
                      },
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "7906:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "7897:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7897:11:37"
                  },
                  "nodeType": "YulIf",
                  "src": "7894:37:37"
                }
              ]
            },
            "name": "checked_sub_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "7840:1:37",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "7843:1:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "diff",
                "nodeType": "YulTypedName",
                "src": "7849:4:37",
                "type": ""
              }
            ],
            "src": "7809:128:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7974:95:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7991:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7998:3:37",
                            "type": "",
                            "value": "224"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8003:10:37",
                            "type": "",
                            "value": "0x4e487b71"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "7994:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7994:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7984:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7984:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7984:31:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8031:1:37",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8034:4:37",
                        "type": "",
                        "value": "0x32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8024:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8024:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8024:15:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8055:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8058:4:37",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "8048:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8048:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8048:15:37"
                }
              ]
            },
            "name": "panic_error_0x32",
            "nodeType": "YulFunctionDefinition",
            "src": "7942:127:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8106:95:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8123:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8130:3:37",
                            "type": "",
                            "value": "224"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8135:10:37",
                            "type": "",
                            "value": "0x4e487b71"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "8126:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8126:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8116:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8116:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8116:31:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8163:1:37",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8166:4:37",
                        "type": "",
                        "value": "0x31"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8156:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8156:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8156:15:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8187:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8190:4:37",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "8180:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8180:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8180:15:37"
                }
              ]
            },
            "name": "panic_error_0x31",
            "nodeType": "YulFunctionDefinition",
            "src": "8074:127:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8258:116:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8268:20:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "8283:1:37"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "8286:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "8279:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8279:9:37"
                  },
                  "variableNames": [
                    {
                      "name": "product",
                      "nodeType": "YulIdentifier",
                      "src": "8268:7:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8346:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "8348:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8348:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8348:18:37"
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
                                "src": "8317:1:37"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "8310:6:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8310:9:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "y",
                                "nodeType": "YulIdentifier",
                                "src": "8324:1:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "product",
                                    "nodeType": "YulIdentifier",
                                    "src": "8331:7:37"
                                  },
                                  {
                                    "name": "x",
                                    "nodeType": "YulIdentifier",
                                    "src": "8340:1:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "div",
                                  "nodeType": "YulIdentifier",
                                  "src": "8327:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "8327:15:37"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nodeType": "YulIdentifier",
                              "src": "8321:2:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8321:22:37"
                          }
                        ],
                        "functionName": {
                          "name": "or",
                          "nodeType": "YulIdentifier",
                          "src": "8307:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8307:37:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "8300:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8300:45:37"
                  },
                  "nodeType": "YulIf",
                  "src": "8297:71:37"
                }
              ]
            },
            "name": "checked_mul_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "8237:1:37",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "8240:1:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "product",
                "nodeType": "YulTypedName",
                "src": "8246:7:37",
                "type": ""
              }
            ],
            "src": "8206:168:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8536:218:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8546:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8558:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8569:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8554:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8554:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8546:4:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "8581:29:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8599:3:37",
                            "type": "",
                            "value": "160"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8604:1:37",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "8595:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8595:11:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8608:1:37",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "8591:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8591:19:37"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "8585:2:37",
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
                        "src": "8626:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "8641:6:37"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "8649:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "8637:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8637:15:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8619:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8619:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8619:34:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8673:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8684:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8669:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8669:18:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "8693:6:37"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "8701:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "8689:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8689:15:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8662:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8662:43:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8662:43:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8725:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8736:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8721:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8721:18:37"
                      },
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "8741:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8714:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8714:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8714:34:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8489:9:37",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "8500:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "8508:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "8516:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8527:4:37",
                "type": ""
              }
            ],
            "src": "8379:375:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8837:167:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8883:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8892:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8895:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "8885:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8885:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8885:12:37"
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
                            "src": "8858:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8867:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "8854:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8854:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8879:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "8850:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8850:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "8847:52:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "8908:29:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8927:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "8921:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8921:16:37"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "8912:5:37",
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
                        "src": "8968:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_bool",
                      "nodeType": "YulIdentifier",
                      "src": "8946:21:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8946:28:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8946:28:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8983:15:37",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "8993:5:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "8983:6:37"
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
                "src": "8803:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "8814:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "8826:6:37",
                "type": ""
              }
            ],
            "src": "8759:245:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9183:171:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9200:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9211:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9193:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9193:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9193:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9234:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9245:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9230:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9230:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9250:2:37",
                        "type": "",
                        "value": "21"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9223:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9223:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9223:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9273:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9284:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9269:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9269:18:37"
                      },
                      {
                        "hexValue": "496e637265617365436f6e7472616374204661696c",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9289:23:37",
                        "type": "",
                        "value": "IncreaseContract Fail"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9262:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9262:51:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9262:51:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9322:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9334:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9345:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9330:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9330:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9322:4:37"
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
                "src": "9160:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9174:4:37",
                "type": ""
              }
            ],
            "src": "9009:345:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9524:218:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9534:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9546:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9557:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9542:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9542:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9534:4:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "9569:29:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9587:3:37",
                            "type": "",
                            "value": "160"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9592:1:37",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "9583:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9583:11:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9596:1:37",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "9579:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9579:19:37"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "9573:2:37",
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
                        "src": "9614:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "9629:6:37"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "9637:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "9625:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9625:15:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9607:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9607:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9607:34:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9661:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9672:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9657:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9657:18:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "9681:6:37"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "9689:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "9677:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9677:15:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9650:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9650:43:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9650:43:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9713:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9724:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9709:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9709:18:37"
                      },
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "9729:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9702:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9702:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9702:34:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_address_payable_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9477:9:37",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "9488:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "9496:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "9504:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9515:4:37",
                "type": ""
              }
            ],
            "src": "9359:383:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9779:95:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9796:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9803:3:37",
                            "type": "",
                            "value": "224"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9808:10:37",
                            "type": "",
                            "value": "0x4e487b71"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "9799:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9799:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9789:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9789:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9789:31:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9836:1:37",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9839:4:37",
                        "type": "",
                        "value": "0x12"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9829:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9829:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9829:15:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9860:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9863:4:37",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "9853:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9853:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9853:15:37"
                }
              ]
            },
            "name": "panic_error_0x12",
            "nodeType": "YulFunctionDefinition",
            "src": "9747:127:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9925:74:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9948:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x12",
                            "nodeType": "YulIdentifier",
                            "src": "9950:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9950:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9950:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "9945:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "9938:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9938:9:37"
                  },
                  "nodeType": "YulIf",
                  "src": "9935:35:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9979:14:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "9988:1:37"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "9991:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "9984:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9984:9:37"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "9979:1:37"
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
                "src": "9910:1:37",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "9913:1:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "9919:1:37",
                "type": ""
              }
            ],
            "src": "9879:120:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10141:145:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10151:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10163:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10174:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10159:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10159:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10151:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10193:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "10208:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "10224:3:37",
                                    "type": "",
                                    "value": "160"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "10229:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "10220:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "10220:11:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "10233:1:37",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "10216:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10216:19:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "10204:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10204:32:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10186:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10186:51:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10186:51:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10257:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10268:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10253:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10253:18:37"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "10273:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10246:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10246:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10246:34:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_payable_t_uint256__to_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10102:9:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "10113:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "10121:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10132:4:37",
                "type": ""
              }
            ],
            "src": "10004:282:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10468:211:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10485:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "10500:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "10516:3:37",
                                    "type": "",
                                    "value": "160"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "10521:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "10512:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "10512:11:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "10525:1:37",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "10508:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10508:19:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "10496:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10496:32:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10478:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10478:51:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10478:51:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10549:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10560:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10545:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10545:18:37"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "10565:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10538:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10538:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10538:34:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10592:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10603:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10588:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10588:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10608:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10581:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10581:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10581:30:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10620:53:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "10646:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10658:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10669:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10654:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10654:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_string",
                      "nodeType": "YulIdentifier",
                      "src": "10628:17:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10628:45:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10620:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_uint256_t_string_memory_ptr__to_t_address_t_uint256_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10421:9:37",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "10432:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "10440:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "10448:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10459:4:37",
                "type": ""
              }
            ],
            "src": "10291:388:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10858:233:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10875:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10886:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10868:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10868:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10868:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10909:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10920:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10905:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10905:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10925:2:37",
                        "type": "",
                        "value": "43"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10898:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10898:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10898:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10948:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10959:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10944:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10944:18:37"
                      },
                      {
                        "hexValue": "455243373231456e756d657261626c653a206f776e657220696e646578206f75",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10964:34:37",
                        "type": "",
                        "value": "ERC721Enumerable: owner index ou"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10937:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10937:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10937:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11019:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11030:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11015:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11015:18:37"
                      },
                      {
                        "hexValue": "74206f6620626f756e6473",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11035:13:37",
                        "type": "",
                        "value": "t of bounds"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11008:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11008:41:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11008:41:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11058:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11070:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11081:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11066:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11066:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11058:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10835:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10849:4:37",
                "type": ""
              }
            ],
            "src": "10684:407:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11225:145:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11235:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11247:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11258:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11243:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11243:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11235:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11277:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "11292:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "11308:3:37",
                                    "type": "",
                                    "value": "160"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "11313:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "11304:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "11304:11:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "11317:1:37",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "11300:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11300:19:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "11288:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11288:32:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11270:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11270:51:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11270:51:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11341:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11352:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11337:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11337:18:37"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "11357:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11330:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11330:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11330:34:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11186:9:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "11197:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "11205:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "11216:4:37",
                "type": ""
              }
            ],
            "src": "11096:274:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11549:234:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11566:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11577:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11559:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11559:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11559:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11600:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11611:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11596:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11596:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11616:2:37",
                        "type": "",
                        "value": "44"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11589:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11589:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11589:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11639:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11650:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11635:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11635:18:37"
                      },
                      {
                        "hexValue": "455243373231456e756d657261626c653a20676c6f62616c20696e646578206f",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11655:34:37",
                        "type": "",
                        "value": "ERC721Enumerable: global index o"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11628:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11628:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11628:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11710:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11721:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11706:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11706:18:37"
                      },
                      {
                        "hexValue": "7574206f6620626f756e6473",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11726:14:37",
                        "type": "",
                        "value": "ut of bounds"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11699:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11699:42:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11699:42:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11750:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11762:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11773:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11758:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11758:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11750:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11526:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "11540:4:37",
                "type": ""
              }
            ],
            "src": "11375:408:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11962:174:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11979:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11990:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11972:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11972:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11972:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12013:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12024:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12009:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12009:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12029:2:37",
                        "type": "",
                        "value": "24"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12002:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12002:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12002:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12052:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12063:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12048:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12048:18:37"
                      },
                      {
                        "hexValue": "4552433732313a20696e76616c696420746f6b656e204944",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12068:26:37",
                        "type": "",
                        "value": "ERC721: invalid token ID"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12041:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12041:54:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12041:54:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12104:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12116:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12127:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12112:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12112:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12104:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11939:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "11953:4:37",
                "type": ""
              }
            ],
            "src": "11788:348:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12315:231:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12332:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12343:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12325:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12325:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12325:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12366:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12377:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12362:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12362:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12382:2:37",
                        "type": "",
                        "value": "41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12355:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12355:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12355:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12405:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12416:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12401:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12401:18:37"
                      },
                      {
                        "hexValue": "4552433732313a2061646472657373207a65726f206973206e6f742061207661",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12421:34:37",
                        "type": "",
                        "value": "ERC721: address zero is not a va"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12394:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12394:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12394:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12476:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12487:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12472:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12472:18:37"
                      },
                      {
                        "hexValue": "6c6964206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12492:11:37",
                        "type": "",
                        "value": "lid owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12465:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12465:39:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12465:39:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12513:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12525:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12536:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12521:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12521:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12513:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "12292:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "12306:4:37",
                "type": ""
              }
            ],
            "src": "12141:405:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12725:228:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12742:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12753:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12735:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12735:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12735:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12776:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12787:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12772:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12772:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12792:2:37",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12765:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12765:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12765:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12815:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12826:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12811:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12811:18:37"
                      },
                      {
                        "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12831:34:37",
                        "type": "",
                        "value": "Ownable: new owner is the zero a"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12804:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12804:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12804:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12886:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12897:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12882:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12882:18:37"
                      },
                      {
                        "hexValue": "646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12902:8:37",
                        "type": "",
                        "value": "ddress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12875:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12875:36:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12875:36:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12920:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12932:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12943:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12928:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12928:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12920:4:37"
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
                "src": "12702:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "12716:4:37",
                "type": ""
              }
            ],
            "src": "12551:402:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13132:227:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13149:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13160:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13142:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13142:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13142:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13183:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13194:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13179:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13179:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13199:2:37",
                        "type": "",
                        "value": "37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13172:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13172:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13172:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13222:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13233:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13218:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13218:18:37"
                      },
                      {
                        "hexValue": "4552433732313a207472616e736665722066726f6d20696e636f727265637420",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "13238:34:37",
                        "type": "",
                        "value": "ERC721: transfer from incorrect "
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13211:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13211:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13211:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13293:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13304:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13289:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13289:18:37"
                      },
                      {
                        "hexValue": "6f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "13309:7:37",
                        "type": "",
                        "value": "owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13282:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13282:35:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13282:35:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13326:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13338:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13349:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13334:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13334:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13326:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "13109:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "13123:4:37",
                "type": ""
              }
            ],
            "src": "12958:401:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13538:226:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13555:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13566:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13548:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13548:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13548:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13589:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13600:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13585:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13585:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13605:2:37",
                        "type": "",
                        "value": "36"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13578:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13578:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13578:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13628:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13639:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13624:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13624:18:37"
                      },
                      {
                        "hexValue": "4552433732313a207472616e7366657220746f20746865207a65726f20616464",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "13644:34:37",
                        "type": "",
                        "value": "ERC721: transfer to the zero add"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13617:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13617:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13617:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13699:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13710:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13695:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13695:18:37"
                      },
                      {
                        "hexValue": "72657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "13715:6:37",
                        "type": "",
                        "value": "ress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13688:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13688:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13688:34:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13731:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13743:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13754:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13739:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13739:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13731:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "13515:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "13529:4:37",
                "type": ""
              }
            ],
            "src": "13364:400:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13817:77:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "13827:16:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "13838:1:37"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "13841:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13834:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13834:9:37"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "13827:3:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "13866:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "13868:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13868:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "13868:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "13858:1:37"
                      },
                      {
                        "name": "sum",
                        "nodeType": "YulIdentifier",
                        "src": "13861:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "13855:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13855:10:37"
                  },
                  "nodeType": "YulIf",
                  "src": "13852:36:37"
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "13800:1:37",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "13803:1:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "13809:3:37",
                "type": ""
              }
            ],
            "src": "13769:125:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14018:63:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "14035:3:37"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "14040:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14028:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14028:19:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14028:19:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14056:19:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "14067:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14072:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14063:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14063:12:37"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "14056:3:37"
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
                "src": "13994:3:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "13999:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "14010:3:37",
                "type": ""
              }
            ],
            "src": "13899:182:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14124:74:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "14147:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x12",
                            "nodeType": "YulIdentifier",
                            "src": "14149:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14149:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "14149:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "14144:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "14137:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14137:9:37"
                  },
                  "nodeType": "YulIf",
                  "src": "14134:35:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14178:14:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "14187:1:37"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "14190:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "mod",
                      "nodeType": "YulIdentifier",
                      "src": "14183:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14183:9:37"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "14178:1:37"
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
                "src": "14109:1:37",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "14112:1:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "14118:1:37",
                "type": ""
              }
            ],
            "src": "14086:112:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14377:182:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14394:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14405:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14387:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14387:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14387:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14428:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14439:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14424:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14424:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14444:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14417:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14417:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14417:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14467:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14478:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14463:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14463:18:37"
                      },
                      {
                        "hexValue": "4552433732313a206d696e7420746f20746865207a65726f2061646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14483:34:37",
                        "type": "",
                        "value": "ERC721: mint to the zero address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14456:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14456:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14456:62:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14527:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14539:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14550:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14535:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14535:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14527:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "14354:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "14368:4:37",
                "type": ""
              }
            ],
            "src": "14203:356:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14738:178:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14755:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14766:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14748:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14748:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14748:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14789:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14800:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14785:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14785:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14805:2:37",
                        "type": "",
                        "value": "28"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14778:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14778:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14778:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14828:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14839:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14824:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14824:18:37"
                      },
                      {
                        "hexValue": "4552433732313a20746f6b656e20616c7265616479206d696e746564",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14844:30:37",
                        "type": "",
                        "value": "ERC721: token already minted"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14817:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14817:58:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14817:58:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14884:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14896:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14907:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14892:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14892:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14884:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "14715:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "14729:4:37",
                "type": ""
              }
            ],
            "src": "14564:352:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15095:182:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15112:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15123:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15105:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15105:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15105:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15146:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15157:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15142:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15142:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15162:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15135:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15135:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15135:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15185:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15196:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15181:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15181:18:37"
                      },
                      {
                        "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15201:34:37",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15174:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15174:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15174:62:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "15245:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15257:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15268:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "15253:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15253:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15245:4:37"
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
                "src": "15072:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "15086:4:37",
                "type": ""
              }
            ],
            "src": "14921:356:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15456:175:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15473:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15484:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15466:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15466:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15466:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15507:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15518:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15503:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15503:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15523:2:37",
                        "type": "",
                        "value": "25"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15496:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15496:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15496:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15546:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15557:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15542:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15542:18:37"
                      },
                      {
                        "hexValue": "4552433732313a20617070726f766520746f2063616c6c6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15562:27:37",
                        "type": "",
                        "value": "ERC721: approve to caller"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15535:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15535:55:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15535:55:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "15599:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15611:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15622:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "15607:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15607:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15599:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "15433:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "15447:4:37",
                "type": ""
              }
            ],
            "src": "15282:349:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15810:240:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15827:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15838:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15820:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15820:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15820:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15861:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15872:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15857:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15857:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15877:2:37",
                        "type": "",
                        "value": "50"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15850:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15850:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15850:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15900:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15911:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15896:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15896:18:37"
                      },
                      {
                        "hexValue": "4552433732313a207472616e7366657220746f206e6f6e204552433732315265",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15916:34:37",
                        "type": "",
                        "value": "ERC721: transfer to non ERC721Re"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15889:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15889:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15889:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15971:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15982:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15967:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15967:18:37"
                      },
                      {
                        "hexValue": "63656976657220696d706c656d656e746572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15987:20:37",
                        "type": "",
                        "value": "ceiver implementer"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15960:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15960:48:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15960:48:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "16017:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "16029:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16040:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "16025:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16025:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16017:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "15787:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "15801:4:37",
                "type": ""
              }
            ],
            "src": "15636:414:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16242:309:37",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "16252:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "16272:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "16266:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16266:13:37"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "16256:6:37",
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
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "16327:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16335:4:37",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16323:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16323:17:37"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "16342:3:37"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "16347:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory_with_cleanup",
                      "nodeType": "YulIdentifier",
                      "src": "16288:34:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16288:66:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16288:66:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "16363:29:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "16380:3:37"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "16385:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "16376:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16376:16:37"
                  },
                  "variables": [
                    {
                      "name": "end_1",
                      "nodeType": "YulTypedName",
                      "src": "16367:5:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "16401:29:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "16423:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "16417:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16417:13:37"
                  },
                  "variables": [
                    {
                      "name": "length_1",
                      "nodeType": "YulTypedName",
                      "src": "16405:8:37",
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
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "16478:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16486:4:37",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16474:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16474:17:37"
                      },
                      {
                        "name": "end_1",
                        "nodeType": "YulIdentifier",
                        "src": "16493:5:37"
                      },
                      {
                        "name": "length_1",
                        "nodeType": "YulIdentifier",
                        "src": "16500:8:37"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory_with_cleanup",
                      "nodeType": "YulIdentifier",
                      "src": "16439:34:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16439:70:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16439:70:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "16518:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "end_1",
                        "nodeType": "YulIdentifier",
                        "src": "16529:5:37"
                      },
                      {
                        "name": "length_1",
                        "nodeType": "YulIdentifier",
                        "src": "16536:8:37"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "16525:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16525:20:37"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "16518:3:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "16210:3:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "16215:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "16223:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "16234:3:37",
                "type": ""
              }
            ],
            "src": "16055:496:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16759:286:37",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "16769:29:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16787:3:37",
                            "type": "",
                            "value": "160"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16792:1:37",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "16783:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16783:11:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16796:1:37",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "16779:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16779:19:37"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "16773:2:37",
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
                        "src": "16814:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "16829:6:37"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "16837:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "16825:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16825:15:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16807:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16807:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16807:34:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16861:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16872:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16857:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16857:18:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "16881:6:37"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "16889:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "16877:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16877:15:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16850:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16850:43:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16850:43:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16913:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16924:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16909:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16909:18:37"
                      },
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "16929:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16902:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16902:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16902:34:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16956:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16967:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16952:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16952:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16972:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16945:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16945:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16945:31:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "16985:54:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "17011:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17023:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17034:3:37",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17019:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17019:19:37"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_string",
                      "nodeType": "YulIdentifier",
                      "src": "16993:17:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16993:46:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16985:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "16704:9:37",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "16715:6:37",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "16723:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "16731:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "16739:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "16750:4:37",
                "type": ""
              }
            ],
            "src": "16556:489:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17130:169:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "17176:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17185:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17188:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "17178:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17178:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "17178:12:37"
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
                            "src": "17151:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17160:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "17147:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17147:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17172:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "17143:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17143:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "17140:52:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "17201:29:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "17220:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "17214:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17214:16:37"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "17205:5:37",
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
                        "src": "17263:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_bytes4",
                      "nodeType": "YulIdentifier",
                      "src": "17239:23:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17239:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17239:30:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17278:15:37",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "17288:5:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "17278:6:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_bytes4_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "17096:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "17107:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "17119:6:37",
                "type": ""
              }
            ],
            "src": "17050:249:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17351:88:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "17382:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "17384:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17384:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "17384:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "17367:5:37"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17378:1:37",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "17374:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17374:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "17364:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17364:17:37"
                  },
                  "nodeType": "YulIf",
                  "src": "17361:43:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17413:20:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "17424:5:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17431:1:37",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "17420:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17420:13:37"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "17413:3:37"
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
                "src": "17333:5:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "17343:3:37",
                "type": ""
              }
            ],
            "src": "17304:135:37"
          }
        ]
      },
      "contents": "{\n    { }\n    function validator_revert_bytes4(value)\n    {\n        if iszero(eq(value, and(value, shl(224, 0xffffffff)))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_bytes4(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_bytes4(value)\n        value0 := value\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function copy_memory_to_memory_with_cleanup(src, dst, length)\n    {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        mstore(add(dst, length), 0)\n    }\n    function abi_encode_string(value, pos) -> end\n    {\n        let length := mload(value)\n        mstore(pos, length)\n        copy_memory_to_memory_with_cleanup(add(value, 0x20), add(pos, 0x20), length)\n        end := add(add(pos, and(add(length, 31), not(31))), 0x20)\n    }\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        mstore(headStart, 32)\n        tail := abi_encode_string(value0, add(headStart, 32))\n    }\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := calldataload(headStart)\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function abi_decode_address(offset) -> value\n    {\n        value := calldataload(offset)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := calldataload(add(headStart, 32))\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n        value2 := calldataload(add(headStart, 64))\n    }\n    function abi_encode_tuple_t_address_payable__to_t_address_payable__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n    }\n    function validator_revert_bool(value)\n    {\n        if iszero(eq(value, iszero(iszero(value)))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_addresst_bool(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        let value := calldataload(add(headStart, 32))\n        validator_revert_bool(value)\n        value1 := value\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3\n    {\n        if slt(sub(dataEnd, headStart), 128) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n        value2 := calldataload(add(headStart, 64))\n        let offset := calldataload(add(headStart, 96))\n        let _1 := 0xffffffffffffffff\n        if gt(offset, _1) { revert(0, 0) }\n        let _2 := add(headStart, offset)\n        if iszero(slt(add(_2, 0x1f), dataEnd)) { revert(0, 0) }\n        let _3 := calldataload(_2)\n        if gt(_3, _1) { panic_error_0x41() }\n        let _4 := not(31)\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(and(add(_3, 0x1f), _4), 63), _4))\n        if or(gt(newFreePtr, _1), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        mstore(memPtr, _3)\n        if gt(add(add(_2, _3), 32), dataEnd) { revert(0, 0) }\n        calldatacopy(add(memPtr, 32), add(_2, 32), _3)\n        mstore(add(add(memPtr, _3), 32), 0)\n        value3 := memPtr\n    }\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 33)\n        mstore(add(headStart, 64), \"ERC721: approval to current owne\")\n        mstore(add(headStart, 96), \"r\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 62)\n        mstore(add(headStart, 64), \"ERC721: approve caller is not to\")\n        mstore(add(headStart, 96), \"ken owner nor approved for all\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 46)\n        mstore(add(headStart, 64), \"ERC721: caller is not token owne\")\n        mstore(add(headStart, 96), \"r nor approved\")\n        tail := add(headStart, 128)\n    }\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := mload(headStart)\n    }\n    function abi_encode_tuple_t_stringliteral_be6ad8021e6b80a9a985704237732530c0e3cdf07bbf9d28e13e90abe670112e__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 39)\n        mstore(add(headStart, 64), \"ERC721: recipient lack of erc20 \")\n        mstore(add(headStart, 96), \"balance\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_df3d2f59522d891de16a4252d65c969fd7e0ed099ebf38783c0a5e88ec8b1c22__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 27)\n        mstore(add(headStart, 64), \"ERC721: all nfts are minted\")\n        tail := add(headStart, 96)\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        diff := sub(x, y)\n        if gt(diff, x) { panic_error_0x11() }\n    }\n    function panic_error_0x32()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n    function panic_error_0x31()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x31)\n        revert(0, 0x24)\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        product := mul(x, y)\n        if iszero(or(iszero(x), eq(y, div(product, x)))) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed(headStart, value2, value1, value0) -> tail\n    {\n        tail := add(headStart, 96)\n        let _1 := sub(shl(160, 1), 1)\n        mstore(headStart, and(value0, _1))\n        mstore(add(headStart, 32), and(value1, _1))\n        mstore(add(headStart, 64), value2)\n    }\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        validator_revert_bool(value)\n        value0 := value\n    }\n    function abi_encode_tuple_t_stringliteral_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 21)\n        mstore(add(headStart, 64), \"IncreaseContract Fail\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_address_t_address_payable_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed(headStart, value2, value1, value0) -> tail\n    {\n        tail := add(headStart, 96)\n        let _1 := sub(shl(160, 1), 1)\n        mstore(headStart, and(value0, _1))\n        mstore(add(headStart, 32), and(value1, _1))\n        mstore(add(headStart, 64), value2)\n    }\n    function panic_error_0x12()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n    function checked_div_t_uint256(x, y) -> r\n    {\n        if iszero(y) { panic_error_0x12() }\n        r := div(x, y)\n    }\n    function abi_encode_tuple_t_address_payable_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n        mstore(add(headStart, 32), value1)\n    }\n    function abi_encode_tuple_t_address_t_uint256_t_string_memory_ptr__to_t_address_t_uint256_t_string_memory_ptr__fromStack_reversed(headStart, value2, value1, value0) -> tail\n    {\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n        mstore(add(headStart, 32), value1)\n        mstore(add(headStart, 64), 96)\n        tail := abi_encode_string(value2, add(headStart, 96))\n    }\n    function abi_encode_tuple_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 43)\n        mstore(add(headStart, 64), \"ERC721Enumerable: owner index ou\")\n        mstore(add(headStart, 96), \"t of bounds\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n        mstore(add(headStart, 32), value1)\n    }\n    function abi_encode_tuple_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 44)\n        mstore(add(headStart, 64), \"ERC721Enumerable: global index o\")\n        mstore(add(headStart, 96), \"ut of bounds\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 24)\n        mstore(add(headStart, 64), \"ERC721: invalid token ID\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 41)\n        mstore(add(headStart, 64), \"ERC721: address zero is not a va\")\n        mstore(add(headStart, 96), \"lid owner\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"Ownable: new owner is the zero a\")\n        mstore(add(headStart, 96), \"ddress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 37)\n        mstore(add(headStart, 64), \"ERC721: transfer from incorrect \")\n        mstore(add(headStart, 96), \"owner\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 36)\n        mstore(add(headStart, 64), \"ERC721: transfer to the zero add\")\n        mstore(add(headStart, 96), \"ress\")\n        tail := add(headStart, 128)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        sum := add(x, y)\n        if gt(x, sum) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_packed_t_uint256__to_t_uint256__nonPadded_inplace_fromStack_reversed(pos, value0) -> end\n    {\n        mstore(pos, value0)\n        end := add(pos, 32)\n    }\n    function mod_t_uint256(x, y) -> r\n    {\n        if iszero(y) { panic_error_0x12() }\n        r := mod(x, y)\n    }\n    function abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"ERC721: mint to the zero address\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 28)\n        mstore(add(headStart, 64), \"ERC721: token already minted\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"Ownable: caller is not the owner\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 25)\n        mstore(add(headStart, 64), \"ERC721: approve to caller\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 50)\n        mstore(add(headStart, 64), \"ERC721: transfer to non ERC721Re\")\n        mstore(add(headStart, 96), \"ceiver implementer\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed(pos, value1, value0) -> end\n    {\n        let length := mload(value0)\n        copy_memory_to_memory_with_cleanup(add(value0, 0x20), pos, length)\n        let end_1 := add(pos, length)\n        let length_1 := mload(value1)\n        copy_memory_to_memory_with_cleanup(add(value1, 0x20), end_1, length_1)\n        end := add(end_1, length_1)\n    }\n    function abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed(headStart, value3, value2, value1, value0) -> tail\n    {\n        let _1 := sub(shl(160, 1), 1)\n        mstore(headStart, and(value0, _1))\n        mstore(add(headStart, 32), and(value1, _1))\n        mstore(add(headStart, 64), value2)\n        mstore(add(headStart, 96), 128)\n        tail := abi_encode_string(value3, add(headStart, 128))\n    }\n    function abi_decode_tuple_t_bytes4_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        validator_revert_bytes4(value)\n        value0 := value\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0)) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n}",
      "id": 37,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "366:3908:33:-:0;;;547:6;528:25;;874:448;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1390:113:12;;;;;;;;;;;;;-1:-1:-1;;;1390:113:12;;;;;;;;;;;;;;;;-1:-1:-1;;;1390:113:12;;;936:32:0;955:12;:10;;;:12;;:::i;:::-;936:18;:32::i;:::-;1456:5:12;:13;1464:5;1456;:13;:::i;:::-;-1:-1:-1;1479:7:12;:17;1489:7;1479;:17;:::i;:::-;-1:-1:-1;;1076:21:33::1;:38:::0;;-1:-1:-1;;;;;;1076:38:33::1;-1:-1:-1::0;;;;;1076:38:33;::::1;;::::0;;-1:-1:-1;;1124:9:33::1;:13:::0;1161:4:::1;1147:11;:18:::0;1175:32:::1;1185:21:::0;1175:9:::1;:32::i;:::-;-1:-1:-1::0;1217:26:33::1;1229:13:::0;1217:11:::1;:26::i;:::-;1253:20;:18;:20::i;:::-;1283:14;:32:::0;;-1:-1:-1;;;;;;1283:32:33::1;-1:-1:-1::0;;;;;1283:32:33;;;::::1;::::0;;;::::1;::::0;;-1:-1:-1;366:3908:33;;-1:-1:-1;;366:3908:33;640:96:19;719:10;;640:96::o;2433:187:0:-;2506:16;2525:6;;-1:-1:-1;;;;;2541:17:0;;;-1:-1:-1;;;;;;2541:17:0;;;;;;2573:40;;2525:6;;;;;;;2573:40;;2506:16;2573:40;2496:124;2433:187;:::o;3803:194:33:-;3873:4;1094:13:0;:11;:13::i;:::-;-1:-1:-1;;;;;3897:30:33;::::1;3889:39;;;::::0;::::1;;-1:-1:-1::0;3938:5:33::1;:31:::0;;-1:-1:-1;;;;;;3938:31:33::1;-1:-1:-1::0;;;;;3938:31:33;::::1;;::::0;;-1:-1:-1;1117:1:0::1;3803:194:33::0;;;:::o;2965:116::-;1094:13:0;:11;:13::i;:::-;3043:15:33::1;:31;3061:13:::0;3043:15;:31:::1;:::i;:::-;;2965:116:::0;:::o;1328:151::-;1094:13:0;:11;:13::i;:::-;1391:9:33::1;1386:87;1411:11;;1406:1;:16;1386:87;;1443:11;:19:::0;;::::1;::::0;::::1;::::0;;-1:-1:-1;1443:19:33;;;;;::::1;::::0;;;1460:1;1424:3:::1;1460:1:::0;1424:3:::1;:::i;:::-;;;;1386:87;;;;1328:151::o:0;1359:130:0:-;1247:7;1273:6;-1:-1:-1;;;;;1273:6:0;719:10:19;1422:23:0;1414:68;;;;-1:-1:-1;;;1414:68:0;;4872:2:37;1414:68:0;;;4854:21:37;;;4891:18;;;4884:30;4950:34;4930:18;;;4923:62;5002:18;;1414:68:0;;;;;;;;1359:130::o;14:131:37:-;-1:-1:-1;;;;;89:31:37;;79:42;;69:70;;135:1;132;125:12;150:127;211:10;206:3;202:20;199:1;192:31;242:4;239:1;232:15;266:4;263:1;256:15;282:146;369:13;;391:31;369:13;391:31;:::i;433:1406::-;548:6;556;564;572;625:3;613:9;604:7;600:23;596:33;593:53;;;642:1;639;632:12;593:53;674:9;668:16;693:31;718:5;693:31;:::i;:::-;743:5;733:15;;;767:2;814;803:9;799:18;793:25;827:33;852:7;827:33;:::i;:::-;930:2;915:18;;909:25;879:7;;-1:-1:-1;;;;;;983:14:37;;;980:34;;;1010:1;1007;1000:12;980:34;1048:6;1037:9;1033:22;1023:32;;1093:7;1086:4;1082:2;1078:13;1074:27;1064:55;;1115:1;1112;1105:12;1064:55;1144:2;1138:9;1166:2;1162;1159:10;1156:36;;;1172:18;;:::i;:::-;1247:2;1241:9;1215:2;1301:13;;-1:-1:-1;;1297:22:37;;;1321:2;1293:31;1289:40;1277:53;;;1345:18;;;1365:22;;;1342:46;1339:72;;;1391:18;;:::i;:::-;1431:10;1427:2;1420:22;1466:2;1458:6;1451:18;1506:7;1501:2;1496;1492;1488:11;1484:20;1481:33;1478:53;;;1527:1;1524;1517:12;1478:53;1549:1;1540:10;;1559:129;1573:2;1570:1;1567:9;1559:129;;;1661:10;;;1657:19;;1651:26;1630:14;;;1626:23;;1619:59;1584:10;;;;1559:129;;;1730:1;1725:2;1720;1712:6;1708:15;1704:24;1697:35;1751:6;1741:16;;;;;;;;1776:57;1829:2;1818:9;1814:18;1776:57;:::i;:::-;1766:67;;433:1406;;;;;;;:::o;1844:380::-;1923:1;1919:12;;;;1966;;;1987:61;;2041:4;2033:6;2029:17;2019:27;;1987:61;2094:2;2086:6;2083:14;2063:18;2060:38;2057:161;;2140:10;2135:3;2131:20;2128:1;2121:31;2175:4;2172:1;2165:15;2203:4;2200:1;2193:15;2057:161;;1844:380;;;:::o;2355:545::-;2457:2;2452:3;2449:11;2446:448;;;2493:1;2518:5;2514:2;2507:17;2563:4;2559:2;2549:19;2633:2;2621:10;2617:19;2614:1;2610:27;2604:4;2600:38;2669:4;2657:10;2654:20;2651:47;;;-1:-1:-1;2692:4:37;2651:47;2747:2;2742:3;2738:12;2735:1;2731:20;2725:4;2721:31;2711:41;;2802:82;2820:2;2813:5;2810:13;2802:82;;;2865:17;;;2846:1;2835:13;2802:82;;;2806:3;;;2446:448;2355:545;;;:::o;3076:1352::-;3196:10;;-1:-1:-1;;;;;3218:30:37;;3215:56;;;3251:18;;:::i;:::-;3280:97;3370:6;3330:38;3362:4;3356:11;3330:38;:::i;:::-;3324:4;3280:97;:::i;:::-;3432:4;;3496:2;3485:14;;3513:1;3508:663;;;;4215:1;4232:6;4229:89;;;-1:-1:-1;4284:19:37;;;4278:26;4229:89;-1:-1:-1;;3033:1:37;3029:11;;;3025:24;3021:29;3011:40;3057:1;3053:11;;;3008:57;4331:81;;3478:944;;3508:663;2302:1;2295:14;;;2339:4;2326:18;;-1:-1:-1;;3544:20:37;;;3662:236;3676:7;3673:1;3670:14;3662:236;;;3765:19;;;3759:26;3744:42;;3857:27;;;;3825:1;3813:14;;;;3692:19;;3662:236;;;3666:3;3926:6;3917:7;3914:19;3911:201;;;3987:19;;;3981:26;-1:-1:-1;;4070:1:37;4066:14;;;4082:3;4062:24;4058:37;4054:42;4039:58;4024:74;;3911:201;-1:-1:-1;;;;;4158:1:37;4142:14;;;4138:22;4125:36;;-1:-1:-1;3076:1352:37:o;4433:232::-;4472:3;4493:17;;;4490:140;;4552:10;4547:3;4543:20;4540:1;4533:31;4587:4;4584:1;4577:15;4615:4;4612:1;4605:15;4490:140;-1:-1:-1;4657:1:37;4646:13;;4433:232::o;4670:356::-;366:3908:33;;;;;;",
  "deployedSourceMap": "366:3908:33:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3505:143;;;;;;;;;;-1:-1:-1;3505:143:33;;;;;:::i;:::-;;:::i;:::-;;;565:14:37;;558:22;540:41;;528:2;513:18;3505:143:33;;;;;;;;2470:98:12;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;3935:167::-;;;;;;;;;;-1:-1:-1;3935:167:12;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;1697:32:37;;;1679:51;;1667:2;1652:18;3935:167:12;1533:203:37;3467:407:12;;;;;;;;;;-1:-1:-1;3467:407:12;;;;;:::i;:::-;;:::i;:::-;;1615:111:15;;;;;;;;;;-1:-1:-1;1702:10:15;:17;1615:111;;;2324:25:37;;;2312:2;2297:18;1615:111:15;2178:177:37;4612:327:12;;;;;;;;;;-1:-1:-1;4612:327:12;;;;;:::i;:::-;;:::i;1517:975:33:-;;;:::i;1291:253:15:-;;;;;;;;;;-1:-1:-1;1291:253:15;;;;;:::i;:::-;;:::i;4003:269:33:-;;;;;;;;;;;;;:::i;5005:179:12:-;;;;;;;;;;-1:-1:-1;5005:179:12;;;;;:::i;:::-;;:::i;559:37:33:-;;;;;;;;;;-1:-1:-1;559:37:33;;;;-1:-1:-1;;;;;559:37:33;;;1798:230:15;;;;;;;;;;-1:-1:-1;1798:230:15;;;;;:::i;:::-;;:::i;2190:218:12:-;;;;;;;;;;-1:-1:-1;2190:218:12;;;;;:::i;:::-;;:::i;1929:204::-;;;;;;;;;;-1:-1:-1;1929:204:12;;;;;:::i;:::-;;:::i;1831:101:0:-;;;;;;;;;;;;;:::i;1201:85::-;;;;;;;;;;-1:-1:-1;1247:7:0;1273:6;-1:-1:-1;;;;;1273:6:0;1201:85;;2632:102:12;;;;;;;;;;;;;:::i;4169:153::-;;;;;;;;;;-1:-1:-1;4169:153:12;;;;;:::i;:::-;;:::i;5250:315::-;;;;;;;;;;-1:-1:-1;5250:315:12;;;;;:::i;:::-;;:::i;3654:143:33:-;;;;;;;;;;-1:-1:-1;3654:143:33;;;;;:::i;:::-;;:::i;4388:162:12:-;;;;;;;;;;-1:-1:-1;4388:162:12;;;;;:::i;:::-;-1:-1:-1;;;;;4508:25:12;;;4485:4;4508:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;;;4388:162;2081:198:0;;;;;;;;;;-1:-1:-1;2081:198:0;;;;;:::i;:::-;;:::i;3505:143:33:-;3582:4;3605:36;3629:11;3605:23;:36::i;:::-;3598:43;3505:143;-1:-1:-1;;3505:143:33:o;2470:98:12:-;2524:13;2556:5;2549:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2470:98;:::o;3935:167::-;4011:7;4030:23;4045:7;4030:14;:23::i;:::-;-1:-1:-1;4071:24:12;;;;:15;:24;;;;;;-1:-1:-1;;;;;4071:24:12;;3935:167::o;3467:407::-;3547:13;3563:23;3578:7;3563:14;:23::i;:::-;3547:39;;3610:5;-1:-1:-1;;;;;3604:11:12;:2;-1:-1:-1;;;;;3604:11:12;;3596:57;;;;-1:-1:-1;;;3596:57:12;;5678:2:37;3596:57:12;;;5660:21:37;5717:2;5697:18;;;5690:30;5756:34;5736:18;;;5729:62;-1:-1:-1;;;5807:18:37;;;5800:31;5848:19;;3596:57:12;;;;;;;;;719:10:19;-1:-1:-1;;;;;3685:21:12;;;;:62;;-1:-1:-1;3710:37:12;3727:5;719:10:19;4388:162:12;:::i;3710:37::-;3664:171;;;;-1:-1:-1;;;3664:171:12;;6080:2:37;3664:171:12;;;6062:21:37;6119:2;6099:18;;;6092:30;6158:34;6138:18;;;6131:62;6229:32;6209:18;;;6202:60;6279:19;;3664:171:12;5878:426:37;3664:171:12;3846:21;3855:2;3859:7;3846:8;:21::i;:::-;3537:337;3467:407;;:::o;4612:327::-;4801:41;719:10:19;4834:7:12;4801:18;:41::i;:::-;4793:100;;;;-1:-1:-1;;;4793:100:12;;;;;;;:::i;:::-;4904:28;4914:4;4920:2;4924:7;4904:9;:28::i;1517:975:33:-;1624:9;;1593:5;;:27;;-1:-1:-1;;;1593:27:33;;1609:10;1593:27;;;1679:51:37;1565:7:33;;1624:9;-1:-1:-1;;;;;1593:5:33;;:15;;1652:18:37;;1593:27:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:40;;1585:92;;;;-1:-1:-1;;;1585:92:33;;7115:2:37;1585:92:33;;;7097:21:37;7154:2;7134:18;;;7127:30;7193:34;7173:18;;;7166:62;-1:-1:-1;;;7244:18:37;;;7237:37;7291:19;;1585:92:33;6913:403:37;1585:92:33;1702:10:15;:17;1695:11:33;;:28;;1687:68;;;;-1:-1:-1;;;1687:68:33;;7523:2:37;1687:68:33;;;7505:21:37;7562:2;7542:18;;;7535:30;7601:29;7581:18;;;7574:57;7648:18;;1687:68:33;7321:351:37;1687:68:33;1766:19;:17;:19::i;:::-;1812:11;1824:18;;1795:14;;1812:11;1824:22;;1845:1;;1824:22;:::i;:::-;1812:35;;;;;;;;:::i;:::-;;;;;;;;;1795:52;;1857:11;:17;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;1885:25;1891:10;1903:6;1885:5;:25::i;:::-;1938:21;;1920:46;;-1:-1:-1;;;;;1938:21:33;;1920:17;:46::i;:::-;2078:5;;2186:8;;2174:9;;2063:12;;-1:-1:-1;;;;;2078:5:33;;:31;;2123:10;;2155:4;;2174:20;;2186:8;2174:20;:::i;:::-;2078:126;;-1:-1:-1;;;;;;2078:126:33;;;;;;;-1:-1:-1;;;;;8637:15:37;;;2078:126:33;;;8619:34:37;8689:15;;;;8669:18;;;8662:43;8721:18;;;8714:34;8554:18;;2078:126:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2063:141;;2222:7;2214:40;;;;-1:-1:-1;;;2214:40:33;;9211:2:37;2214:40:33;;;9193:21:37;9250:2;9230:18;;;9223:30;-1:-1:-1;;;9269:18:37;;;9262:51;9330:18;;2214:40:33;9009:345:37;2214:40:33;2264:5;;2295:14;;2323:8;;2311:9;;-1:-1:-1;;;;;2264:5:33;;;;:18;;2283:10;;2295:14;;;2311:20;;2323:8;2311:20;:::i;:::-;2264:68;;-1:-1:-1;;;;;;2264:68:33;;;;;;;-1:-1:-1;;;;;8637:15:37;;;2264:68:33;;;8619:34:37;8689:15;;;;8669:18;;;8662:43;8721:18;;;8714:34;8554:18;;2264:68:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;2343:5:33;;2360:14;;2389:8;;2377:9;;-1:-1:-1;;;;;2343:5:33;;;;:16;;2360:14;;2399:1;;2377:20;;2389:8;2377:20;:::i;:::-;2376:24;;;;:::i;:::-;2343:58;;-1:-1:-1;;;;;;2343:58:33;;;;;;;-1:-1:-1;;;;;10204:32:37;;;2343:58:33;;;10186:51:37;10253:18;;;10246:34;10159:18;;2343:58:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2417:44;2424:10;2436:6;2444:16;2453:6;2444:8;:16::i;:::-;2417:44;;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;2479:6:33;1517:975;-1:-1:-1;1517:975:33:o;1291:253:15:-;1388:7;1423:23;1440:5;1423:16;:23::i;:::-;1415:5;:31;1407:87;;;;-1:-1:-1;;;1407:87:15;;10886:2:37;1407:87:15;;;10868:21:37;10925:2;10905:18;;;10898:30;10964:34;10944:18;;;10937:62;-1:-1:-1;;;11015:18:37;;;11008:41;11066:19;;1407:87:15;10684:407:37;1407:87:15;-1:-1:-1;;;;;;1511:19:15;;;;;;;;:12;:19;;;;;;;;:26;;;;;;;;;1291:253::o;4003:269:33:-;4051:7;1094:13:0;:11;:13::i;:::-;4091:5:33::1;::::0;:30:::1;::::0;-1:-1:-1;;;4091:30:33;;4115:4:::1;4091:30;::::0;::::1;1679:51:37::0;4070:18:33::1;::::0;-1:-1:-1;;;;;4091:5:33::1;::::0;:15:::1;::::0;1652:18:37;;4091:30:33::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4131:5;::::0;:40:::1;::::0;-1:-1:-1;;;4131:40:33;;4153:4:::1;4131:40;::::0;::::1;10186:51:37::0;10253:18;;;10246:34;;;4070:51:33;;-1:-1:-1;;;;;;4131:5:33::1;::::0;:13:::1;::::0;10159:18:37;;4131:40:33::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;4181:5:33::1;::::0;:57:::1;::::0;-1:-1:-1;;;4181:57:33;;4208:4:::1;4181:57;::::0;::::1;8619:34:37::0;4215:10:33::1;8669:18:37::0;;;8662:43;8721:18;;;8714:34;;;-1:-1:-1;;;;;4181:5:33;;::::1;::::0;:18:::1;::::0;8554::37;;4181:57:33::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;4255:10:33;-1:-1:-1;4003:269:33;:::o;5005:179:12:-;5138:39;5155:4;5161:2;5165:7;5138:39;;;;;;;;;;;;:16;:39::i;1798:230:15:-;1873:7;1908:30;1702:10;:17;;1615:111;1908:30;1900:5;:38;1892:95;;;;-1:-1:-1;;;1892:95:15;;11577:2:37;1892:95:15;;;11559:21:37;11616:2;11596:18;;;11589:30;11655:34;11635:18;;;11628:62;-1:-1:-1;;;11706:18:37;;;11699:42;11758:19;;1892:95:15;11375:408:37;1892:95:15;2004:10;2015:5;2004:17;;;;;;;;:::i;:::-;;;;;;;;;1997:24;;1798:230;;;:::o;2190:218:12:-;2262:7;2297:16;;;:7;:16;;;;;;-1:-1:-1;;;;;2297:16:12;;2323:56;;;;-1:-1:-1;;;2323:56:12;;11990:2:37;2323:56:12;;;11972:21:37;12029:2;12009:18;;;12002:30;-1:-1:-1;;;12048:18:37;;;12041:54;12112:18;;2323:56:12;11788:348:37;1929:204:12;2001:7;-1:-1:-1;;;;;2028:19:12;;2020:73;;;;-1:-1:-1;;;2020:73:12;;12343:2:37;2020:73:12;;;12325:21:37;12382:2;12362:18;;;12355:30;12421:34;12401:18;;;12394:62;-1:-1:-1;;;12472:18:37;;;12465:39;12521:19;;2020:73:12;12141:405:37;2020:73:12;-1:-1:-1;;;;;;2110:16:12;;;;;:9;:16;;;;;;;1929:204::o;1831:101:0:-;1094:13;:11;:13::i;:::-;1895:30:::1;1922:1;1895:18;:30::i;:::-;1831:101::o:0;2632:102:12:-;2688:13;2720:7;2713:14;;;;;:::i;4169:153::-;4263:52;719:10:19;4296:8:12;4306;4263:18;:52::i;:::-;4169:153;;:::o;5250:315::-;5418:41;719:10:19;5451:7:12;5418:18;:41::i;:::-;5410:100;;;;-1:-1:-1;;;5410:100:12;;;;;;;:::i;:::-;5520:38;5534:4;5540:2;5544:7;5553:4;5520:13;:38::i;:::-;5250:315;;;;:::o;3654:143:33:-;3734:13;3766:24;3781:8;3766:14;:24::i;2081:198:0:-;1094:13;:11;:13::i;:::-;-1:-1:-1;;;;;2169:22:0;::::1;2161:73;;;::::0;-1:-1:-1;;;2161:73:0;;12753:2:37;2161:73:0::1;::::0;::::1;12735:21:37::0;12792:2;12772:18;;;12765:30;12831:34;12811:18;;;12804:62;-1:-1:-1;;;12882:18:37;;;12875:36;12928:19;;2161:73:0::1;12551:402:37::0;2161:73:0::1;2244:28;2263:8;2244:18;:28::i;:::-;2081:198:::0;:::o;990:222:15:-;1092:4;-1:-1:-1;;;;;;1115:50:15;;-1:-1:-1;;;1115:50:15;;:90;;;1169:36;1193:11;1169:23;:36::i;11657:133:12:-;7099:4;7122:16;;;:7;:16;;;;;;-1:-1:-1;;;;;7122:16:12;11730:53;;;;-1:-1:-1;;;11730:53:12;;11990:2:37;11730:53:12;;;11972:21:37;12029:2;12009:18;;;12002:30;-1:-1:-1;;;12048:18:37;;;12041:54;12112:18;;11730:53:12;11788:348:37;10959:171:12;11033:24;;;;:15;:24;;;;;:29;;-1:-1:-1;;;;;;11033:29:12;-1:-1:-1;;;;;11033:29:12;;;;;;;;:24;;11086:23;11033:24;11086:14;:23::i;:::-;-1:-1:-1;;;;;11077:46:12;;;;;;;;;;;10959:171;;:::o;7317:261::-;7410:4;7426:13;7442:23;7457:7;7442:14;:23::i;:::-;7426:39;;7494:5;-1:-1:-1;;;;;7483:16:12;:7;-1:-1:-1;;;;;7483:16:12;;:52;;;-1:-1:-1;;;;;;4508:25:12;;;4485:4;4508:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;7503:32;7483:87;;;;7563:7;-1:-1:-1;;;;;7539:31:12;:20;7551:7;7539:11;:20::i;:::-;-1:-1:-1;;;;;7539:31:12;;7483:87;7475:96;7317:261;-1:-1:-1;;;;7317:261:12:o;10242:605::-;10396:4;-1:-1:-1;;;;;10369:31:12;:23;10384:7;10369:14;:23::i;:::-;-1:-1:-1;;;;;10369:31:12;;10361:81;;;;-1:-1:-1;;;10361:81:12;;13160:2:37;10361:81:12;;;13142:21:37;13199:2;13179:18;;;13172:30;13238:34;13218:18;;;13211:62;-1:-1:-1;;;13289:18:37;;;13282:35;13334:19;;10361:81:12;12958:401:37;10361:81:12;-1:-1:-1;;;;;10460:16:12;;10452:65;;;;-1:-1:-1;;;10452:65:12;;13566:2:37;10452:65:12;;;13548:21:37;13605:2;13585:18;;;13578:30;13644:34;13624:18;;;13617:62;-1:-1:-1;;;13695:18:37;;;13688:34;13739:19;;10452:65:12;13364:400:37;10452:65:12;10528:39;10549:4;10555:2;10559:7;10528:20;:39::i;:::-;10629:29;10646:1;10650:7;10629:8;:29::i;:::-;-1:-1:-1;;;;;10669:15:12;;;;;;:9;:15;;;;;:20;;10688:1;;10669:15;:20;;10688:1;;10669:20;:::i;:::-;;;;-1:-1:-1;;;;;;;10699:13:12;;;;;;:9;:13;;;;;:18;;10716:1;;10699:13;:18;;10716:1;;10699:18;:::i;:::-;;;;-1:-1:-1;;10727:16:12;;;;:7;:16;;;;;;:21;;-1:-1:-1;;;;;;10727:21:12;-1:-1:-1;;;;;10727:21:12;;;;;;;;;10764:27;;10727:16;;10764:27;;;;;;;3537:337;3467:407;;:::o;2498:461:33:-;2557:11;:18;2545:9;;2557:22;;2578:1;;2557:22;:::i;:::-;2822:11;:18;2783:33;;;2800:15;2783:33;;;14028:19:37;2545:34:33;;-1:-1:-1;2753:9:33;;14063:12:37;2783:33:33;;;;;;;;;;;;2773:44;;;;;;2765:53;;:76;;;;:::i;:::-;2753:88;;2851:12;2866:11;2878:1;2866:14;;;;;;;;:::i;:::-;;;;;;;;;2851:29;;2907:11;2919:1;2907:14;;;;;;;;:::i;:::-;;;;;;;;;2890:11;2902:1;2890:14;;;;;;;;:::i;:::-;;;;;;;;:31;;;;2948:4;2931:11;2943:1;2931:14;;;;;;;;:::i;:::-;;;;;;;;;;:21;-1:-1:-1;;;2498:461:33:o;8868:427:12:-;-1:-1:-1;;;;;8947:16:12;;8939:61;;;;-1:-1:-1;;;8939:61:12;;14405:2:37;8939:61:12;;;14387:21:37;;;14424:18;;;14417:30;14483:34;14463:18;;;14456:62;14535:18;;8939:61:12;14203:356:37;8939:61:12;7099:4;7122:16;;;:7;:16;;;;;;-1:-1:-1;;;;;7122:16:12;:30;9010:58;;;;-1:-1:-1;;;9010:58:12;;14766:2:37;9010:58:12;;;14748:21:37;14805:2;14785:18;;;14778:30;14844;14824:18;;;14817:58;14892:18;;9010:58:12;14564:352:37;9010:58:12;9079:45;9108:1;9112:2;9116:7;9079:20;:45::i;:::-;-1:-1:-1;;;;;9135:13:12;;;;;;:9;:13;;;;;:18;;9152:1;;9135:13;:18;;9152:1;;9135:18;:::i;:::-;;;;-1:-1:-1;;9163:16:12;;;;:7;:16;;;;;;:21;;-1:-1:-1;;;;;;9163:21:12;-1:-1:-1;;;;;9163:21:12;;;;;;;;9200:33;;9163:16;;;9200:33;;9163:16;;9200:33;4169:153;;:::o;1359:130:0:-;1247:7;1273:6;-1:-1:-1;;;;;1273:6:0;719:10:19;1422:23:0;1414:68;;;;-1:-1:-1;;;1414:68:0;;15123:2:37;1414:68:0;;;15105:21:37;;;15142:18;;;15135:30;15201:34;15181:18;;;15174:62;15253:18;;1414:68:0;14921:356:37;2433:187:0;2506:16;2525:6;;-1:-1:-1;;;;;2541:17:0;;;-1:-1:-1;;;;;;2541:17:0;;;;;;2573:40;;2525:6;;;;;;;2573:40;;2506:16;2573:40;2496:124;2433:187;:::o;11266:307:12:-;11416:8;-1:-1:-1;;;;;11407:17:12;:5;-1:-1:-1;;;;;11407:17:12;;11399:55;;;;-1:-1:-1;;;11399:55:12;;15484:2:37;11399:55:12;;;15466:21:37;15523:2;15503:18;;;15496:30;15562:27;15542:18;;;15535:55;15607:18;;11399:55:12;15282:349:37;11399:55:12;-1:-1:-1;;;;;11464:25:12;;;;;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;:46;;-1:-1:-1;;11464:46:12;;;;;;;;;;11525:41;;540::37;;;11525::12;;513:18:37;11525:41:12;;;;;;;11266:307;;;:::o;6426:305::-;6576:28;6586:4;6592:2;6596:7;6576:9;:28::i;:::-;6622:47;6645:4;6651:2;6655:7;6664:4;6622:22;:47::i;:::-;6614:110;;;;-1:-1:-1;;;6614:110:12;;;;;;;:::i;2800:276::-;2873:13;2898:23;2913:7;2898:14;:23::i;:::-;2932:21;2956:10;:8;:10::i;:::-;2932:34;;3007:1;2989:7;2983:21;:25;:86;;;;;;;;;;;;;;;;;3035:7;3044:18;:7;:16;:18::i;:::-;3018:45;;;;;;;;;:::i;:::-;;;;;;;;;;;;;2983:86;2976:93;2800:276;-1:-1:-1;;;2800:276:12:o;1570:300::-;1672:4;-1:-1:-1;;;;;;1707:40:12;;-1:-1:-1;;;1707:40:12;;:104;;-1:-1:-1;;;;;;;1763:48:12;;-1:-1:-1;;;1763:48:12;1707:104;:156;;;-1:-1:-1;;;;;;;;;;937:40:22;;;1827:36:12;829:155:22;3207:183:33;3338:45;3365:4;3371:2;3375:7;3338:26;:45::i;12342:831:12:-;12491:4;-1:-1:-1;;;;;12511:13:12;;1465:19:18;:23;12507:660:12;;12546:71;;-1:-1:-1;;;12546:71:12;;-1:-1:-1;;;;;12546:36:12;;;;;:71;;719:10:19;;12597:4:12;;12603:7;;12612:4;;12546:71;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;-1:-1:-1;12546:71:12;;;;;;;;-1:-1:-1;;12546:71:12;;;;;;;;;;;;:::i;:::-;;;12542:573;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12784:6;:13;12801:1;12784:18;12780:321;;12826:60;;-1:-1:-1;;;12826:60:12;;;;;;;:::i;12780:321::-;13053:6;13047:13;13038:6;13034:2;13030:15;13023:38;12542:573;-1:-1:-1;;;;;;12667:51:12;-1:-1:-1;;;12667:51:12;;-1:-1:-1;12660:58:12;;12507:660;-1:-1:-1;13152:4:12;12342:831;;;;;;:::o;3087:114:33:-;3147:13;3179:15;3172:22;;;;;:::i;392:703:21:-;448:13;665:5;674:1;665:10;661:51;;-1:-1:-1;;691:10:21;;;;;;;;;;;;-1:-1:-1;;;691:10:21;;;;;392:703::o;661:51::-;736:5;721:12;775:75;782:9;;775:75;;807:8;;;;:::i;:::-;;-1:-1:-1;829:10:21;;-1:-1:-1;837:2:21;829:10;;:::i;:::-;;;775:75;;;859:19;891:6;881:17;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;881:17:21;;859:39;;908:150;915:10;;908:150;;941:11;951:1;941:11;;:::i;:::-;;-1:-1:-1;1009:10:21;1017:2;1009:5;:10;:::i;:::-;996:24;;:2;:24;:::i;:::-;983:39;;966:6;973;966:14;;;;;;;;:::i;:::-;;;;:56;-1:-1:-1;;;;;966:56:21;;;;;;;;-1:-1:-1;1036:11:21;1045:2;1036:11;;:::i;:::-;;;908:150;;2624:572:15;-1:-1:-1;;;;;2823:18:15;;2819:183;;2857:40;2889:7;4005:10;:17;;3978:24;;;;:15;:24;;;;;:44;;;4032:24;;;;;;;;;;;;3902:161;2857:40;2819:183;;;2926:2;-1:-1:-1;;;;;2918:10:15;:4;-1:-1:-1;;;;;2918:10:15;;2914:88;;2944:47;2977:4;2983:7;2944:32;:47::i;:::-;-1:-1:-1;;;;;3015:16:15;;3011:179;;3047:45;3084:7;3047:36;:45::i;3011:179::-;3119:4;-1:-1:-1;;;;;3113:10:15;:2;-1:-1:-1;;;;;3113:10:15;;3109:81;;3139:40;3167:2;3171:7;3139:27;:40::i;4680:970::-;4942:22;4992:1;4967:22;4984:4;4967:16;:22::i;:::-;:26;;;;:::i;:::-;5003:18;5024:26;;;:17;:26;;;;;;4942:51;;-1:-1:-1;5154:28:15;;;5150:323;;-1:-1:-1;;;;;5220:18:15;;5198:19;5220:18;;;:12;:18;;;;;;;;:34;;;;;;;;;5269:30;;;;;;:44;;;5385:30;;:17;:30;;;;;:43;;;5150:323;-1:-1:-1;5566:26:15;;;;:17;:26;;;;;;;;5559:33;;;-1:-1:-1;;;;;5609:18:15;;;;;:12;:18;;;;;:34;;;;;;;5602:41;4680:970::o;5938:1061::-;6212:10;:17;6187:22;;6212:21;;6232:1;;6212:21;:::i;:::-;6243:18;6264:24;;;:15;:24;;;;;;6632:10;:26;;6187:46;;-1:-1:-1;6264:24:15;;6187:46;;6632:26;;;;;;:::i;:::-;;;;;;;;;6610:48;;6694:11;6669:10;6680;6669:22;;;;;;;;:::i;:::-;;;;;;;;;;;;:36;;;;6773:28;;;:15;:28;;;;;;;:41;;;6942:24;;;;;6935:31;6976:10;:16;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;6009:990;;;5938:1061;:::o;3490:217::-;3574:14;3591:20;3608:2;3591:16;:20::i;:::-;-1:-1:-1;;;;;3621:16:15;;;;;;;:12;:16;;;;;;;;:24;;;;;;;;:34;;;3665:26;;;:17;:26;;;;;;:35;;;;-1:-1:-1;3490:217:15:o;14:131:37:-;-1:-1:-1;;;;;;88:32:37;;78:43;;68:71;;135:1;132;125:12;150:245;208:6;261:2;249:9;240:7;236:23;232:32;229:52;;;277:1;274;267:12;229:52;316:9;303:23;335:30;359:5;335:30;:::i;592:250::-;677:1;687:113;701:6;698:1;695:13;687:113;;;777:11;;;771:18;758:11;;;751:39;723:2;716:10;687:113;;;-1:-1:-1;;834:1:37;816:16;;809:27;592:250::o;847:271::-;889:3;927:5;921:12;954:6;949:3;942:19;970:76;1039:6;1032:4;1027:3;1023:14;1016:4;1009:5;1005:16;970:76;:::i;:::-;1100:2;1079:15;-1:-1:-1;;1075:29:37;1066:39;;;;1107:4;1062:50;;847:271;-1:-1:-1;;847:271:37:o;1123:220::-;1272:2;1261:9;1254:21;1235:4;1292:45;1333:2;1322:9;1318:18;1310:6;1292:45;:::i;1348:180::-;1407:6;1460:2;1448:9;1439:7;1435:23;1431:32;1428:52;;;1476:1;1473;1466:12;1428:52;-1:-1:-1;1499:23:37;;1348:180;-1:-1:-1;1348:180:37:o;1741:173::-;1809:20;;-1:-1:-1;;;;;1858:31:37;;1848:42;;1838:70;;1904:1;1901;1894:12;1838:70;1741:173;;;:::o;1919:254::-;1987:6;1995;2048:2;2036:9;2027:7;2023:23;2019:32;2016:52;;;2064:1;2061;2054:12;2016:52;2087:29;2106:9;2087:29;:::i;:::-;2077:39;2163:2;2148:18;;;;2135:32;;-1:-1:-1;;;1919:254:37:o;2360:328::-;2437:6;2445;2453;2506:2;2494:9;2485:7;2481:23;2477:32;2474:52;;;2522:1;2519;2512:12;2474:52;2545:29;2564:9;2545:29;:::i;:::-;2535:39;;2593:38;2627:2;2616:9;2612:18;2593:38;:::i;:::-;2583:48;;2678:2;2667:9;2663:18;2650:32;2640:42;;2360:328;;;;;:::o;2917:186::-;2976:6;3029:2;3017:9;3008:7;3004:23;3000:32;2997:52;;;3045:1;3042;3035:12;2997:52;3068:29;3087:9;3068:29;:::i;3108:118::-;3194:5;3187:13;3180:21;3173:5;3170:32;3160:60;;3216:1;3213;3206:12;3231:315;3296:6;3304;3357:2;3345:9;3336:7;3332:23;3328:32;3325:52;;;3373:1;3370;3363:12;3325:52;3396:29;3415:9;3396:29;:::i;:::-;3386:39;;3475:2;3464:9;3460:18;3447:32;3488:28;3510:5;3488:28;:::i;:::-;3535:5;3525:15;;;3231:315;;;;;:::o;3551:127::-;3612:10;3607:3;3603:20;3600:1;3593:31;3643:4;3640:1;3633:15;3667:4;3664:1;3657:15;3683:1138;3778:6;3786;3794;3802;3855:3;3843:9;3834:7;3830:23;3826:33;3823:53;;;3872:1;3869;3862:12;3823:53;3895:29;3914:9;3895:29;:::i;:::-;3885:39;;3943:38;3977:2;3966:9;3962:18;3943:38;:::i;:::-;3933:48;;4028:2;4017:9;4013:18;4000:32;3990:42;;4083:2;4072:9;4068:18;4055:32;4106:18;4147:2;4139:6;4136:14;4133:34;;;4163:1;4160;4153:12;4133:34;4201:6;4190:9;4186:22;4176:32;;4246:7;4239:4;4235:2;4231:13;4227:27;4217:55;;4268:1;4265;4258:12;4217:55;4304:2;4291:16;4326:2;4322;4319:10;4316:36;;;4332:18;;:::i;:::-;4407:2;4401:9;4375:2;4461:13;;-1:-1:-1;;4457:22:37;;;4481:2;4453:31;4449:40;4437:53;;;4505:18;;;4525:22;;;4502:46;4499:72;;;4551:18;;:::i;:::-;4591:10;4587:2;4580:22;4626:2;4618:6;4611:18;4666:7;4661:2;4656;4652;4648:11;4644:20;4641:33;4638:53;;;4687:1;4684;4677:12;4638:53;4743:2;4738;4734;4730:11;4725:2;4717:6;4713:15;4700:46;4788:1;4783:2;4778;4770:6;4766:15;4762:24;4755:35;4809:6;4799:16;;;;;;;3683:1138;;;;;;;:::o;4826:260::-;4894:6;4902;4955:2;4943:9;4934:7;4930:23;4926:32;4923:52;;;4971:1;4968;4961:12;4923:52;4994:29;5013:9;4994:29;:::i;:::-;4984:39;;5042:38;5076:2;5065:9;5061:18;5042:38;:::i;:::-;5032:48;;4826:260;;;;;:::o;5091:380::-;5170:1;5166:12;;;;5213;;;5234:61;;5288:4;5280:6;5276:17;5266:27;;5234:61;5341:2;5333:6;5330:14;5310:18;5307:38;5304:161;;5387:10;5382:3;5378:20;5375:1;5368:31;5422:4;5419:1;5412:15;5450:4;5447:1;5440:15;5304:161;;5091:380;;;:::o;6309:410::-;6511:2;6493:21;;;6550:2;6530:18;;;6523:30;6589:34;6584:2;6569:18;;6562:62;-1:-1:-1;;;6655:2:37;6640:18;;6633:44;6709:3;6694:19;;6309:410::o;6724:184::-;6794:6;6847:2;6835:9;6826:7;6822:23;6818:32;6815:52;;;6863:1;6860;6853:12;6815:52;-1:-1:-1;6886:16:37;;6724:184;-1:-1:-1;6724:184:37:o;7677:127::-;7738:10;7733:3;7729:20;7726:1;7719:31;7769:4;7766:1;7759:15;7793:4;7790:1;7783:15;7809:128;7876:9;;;7897:11;;;7894:37;;;7911:18;;:::i;7942:127::-;8003:10;7998:3;7994:20;7991:1;7984:31;8034:4;8031:1;8024:15;8058:4;8055:1;8048:15;8074:127;8135:10;8130:3;8126:20;8123:1;8116:31;8166:4;8163:1;8156:15;8190:4;8187:1;8180:15;8206:168;8279:9;;;8310;;8327:15;;;8321:22;;8307:37;8297:71;;8348:18;;:::i;8759:245::-;8826:6;8879:2;8867:9;8858:7;8854:23;8850:32;8847:52;;;8895:1;8892;8885:12;8847:52;8927:9;8921:16;8946:28;8968:5;8946:28;:::i;9747:127::-;9808:10;9803:3;9799:20;9796:1;9789:31;9839:4;9836:1;9829:15;9863:4;9860:1;9853:15;9879:120;9919:1;9945;9935:35;;9950:18;;:::i;:::-;-1:-1:-1;9984:9:37;;9879:120::o;10291:388::-;10525:1;10521;10516:3;10512:11;10508:19;10500:6;10496:32;10485:9;10478:51;10565:6;10560:2;10549:9;10545:18;10538:34;10608:2;10603;10592:9;10588:18;10581:30;10459:4;10628:45;10669:2;10658:9;10654:18;10646:6;10628:45;:::i;:::-;10620:53;10291:388;-1:-1:-1;;;;;10291:388:37:o;13769:125::-;13834:9;;;13855:10;;;13852:36;;;13868:18;;:::i;14086:112::-;14118:1;14144;14134:35;;14149:18;;:::i;:::-;-1:-1:-1;14183:9:37;;14086:112::o;15636:414::-;15838:2;15820:21;;;15877:2;15857:18;;;15850:30;15916:34;15911:2;15896:18;;15889:62;-1:-1:-1;;;15982:2:37;15967:18;;15960:48;16040:3;16025:19;;15636:414::o;16055:496::-;16234:3;16272:6;16266:13;16288:66;16347:6;16342:3;16335:4;16327:6;16323:17;16288:66;:::i;:::-;16417:13;;16376:16;;;;16439:70;16417:13;16376:16;16486:4;16474:17;;16439:70;:::i;:::-;16525:20;;16055:496;-1:-1:-1;;;;16055:496:37:o;16556:489::-;-1:-1:-1;;;;;16825:15:37;;;16807:34;;16877:15;;16872:2;16857:18;;16850:43;16924:2;16909:18;;16902:34;;;16972:3;16967:2;16952:18;;16945:31;;;16750:4;;16993:46;;17019:19;;17011:6;16993:46;:::i;:::-;16985:54;16556:489;-1:-1:-1;;;;;;16556:489:37:o;17050:249::-;17119:6;17172:2;17160:9;17151:7;17147:23;17143:32;17140:52;;;17188:1;17185;17178:12;17140:52;17220:9;17214:16;17239:30;17263:5;17239:30;:::i;17304:135::-;17343:3;17364:17;;;17361:43;;17384:18;;:::i;:::-;-1:-1:-1;17431:1:37;17420:13;;17304:135::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/utils/Counters.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\nimport \"@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol\";\nimport \"./interfaces/ERC20Interface.sol\";\nimport \"./JMToken.sol\";\n\ncontract MapleNFT is Ownable, ERC721Enumerable {\n    using Counters for Counters.Counter;\n    Counters.Counter private _tokenIds;\n\n    JMToken private token;\n    uint256 decimals = 10**18;\n    address payable public treasuryWallet; // 비상금 계좌!\n    uint256 private mintPrice;\n    address private marketContractAddress;\n    uint256[] private waitForMint;\n    uint256 private maxTokenNum;\n    string private baseURIextended;\n    \n\n    event Minted(address addr, uint256 tokenId, string tokenURI);\n\n    constructor(\n        address _marketAddress,\n        address _tokenContractAddress, \n        string memory _MapleBaseURI, \n        address payable _treasuryWallet)  ERC721(\"MapleNFT\", \"NFT\") {\n\n        marketContractAddress = _marketAddress;\n        mintPrice = 1;\n        maxTokenNum = 4999;\n        _setToken(_tokenContractAddress);\n        _setBaseURI(_MapleBaseURI);\n        _generateMintArray();\n        treasuryWallet = _treasuryWallet;\n    }\n\n    function _generateMintArray() private onlyOwner {\n        for (uint256 i = 0; i <= maxTokenNum; i++) {\n            waitForMint.push(i);\n        }\n    }\n    \n    // 민팅 페이어블 \n    function mintMapleNFT() public payable returns (uint256)  {\n        require(token.balanceOf(msg.sender) >= mintPrice, \"ERC721: recipient lack of erc20 balance\");\n        require(maxTokenNum >= totalSupply(), \"ERC721: all nfts are minted\");\n\n        _shuffleMintArray();\n        uint256 minted = waitForMint[waitForMint.length - 1];\n        waitForMint.pop();\n\n        _mint(msg.sender, minted);\n        setApprovalForAll(marketContractAddress, true); // grant transaction permission to market\n\n        //재무 토큰 지갑으로 전송\n        bool success = token.increaseContractAllowance(\n            msg.sender,\n            address(this),\n            mintPrice * decimals\n        );\n        require(success,\"IncreaseContract Fail\");\n        token.transferFrom(msg.sender, treasuryWallet, mintPrice * decimals); \n        token.marketBurn(treasuryWallet, (mintPrice * decimals)/2);\n\n        emit Minted(msg.sender, minted, tokenURI(minted));\n\n        return minted;\n    }\n\n    function _shuffleMintArray() private {\n        uint256 i = waitForMint.length - 1;\n        /*\n         * IMPORTANT: 실제 프로덕트라면 block.timestamp가 아닌 chainlink 등의 오라클을 통해 난수를 주입해야한다.\n         */\n        uint256 n = uint256(keccak256(abi.encodePacked(block.timestamp))) % (waitForMint.length);\n        uint256 temp = waitForMint[n];\n        waitForMint[n] = waitForMint[i];\n        waitForMint[i] = temp;\n    }\n\n    function _setBaseURI(string memory _MapleBaseURI) private onlyOwner {\n        baseURIextended = _MapleBaseURI;\n    }\n\n    function _baseURI() internal view virtual override returns (string memory) {\n        return baseURIextended;\n    }\n\n    function _beforeTokenTransfer(\n        address from,\n        address to,\n        uint256 tokenId\n    ) internal override {\n        super._beforeTokenTransfer(from, to, tokenId);\n    }\n\n    function _burn(\n        uint256 _tokenId\n    ) internal override {\n        super._burn(_tokenId);\n    }\n\n    function supportsInterface(bytes4 interfaceId) public view override returns (bool) {\n        return super.supportsInterface(interfaceId);\n    }\n\n    function tokenURI(\n        uint256 _tokenId\n    ) public view override returns (string memory) {\n        return super.tokenURI(_tokenId);\n    }\n\n    function _setToken(address jmtokenAddress) private onlyOwner returns (bool) {\n        require(jmtokenAddress != address(0x0));\n        token = JMToken(jmtokenAddress);\n        return true;\n    }\n\n    function withdraw() external onlyOwner returns (uint256) {\n        uint256 totalValue = token.balanceOf(address(this));\n        token.approve(address(this), totalValue);\n        token.transferFrom(address(this), msg.sender, totalValue);\n        return totalValue;\n    }\n}\n",
  "sourcePath": "/Users/rokrokss/workspace/hyein/BEB-05-JMT/contract/contracts/MapleNFT.sol",
  "ast": {
    "absolutePath": "project:/contracts/MapleNFT.sol",
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
      "ERC165": [
        4614
      ],
      "ERC20": [
        2473
      ],
      "ERC20Interface": [
        10845
      ],
      "ERC721": [
        3443
      ],
      "ERC721Enumerable": [
        3915
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
      "IERC721Enumerable": [
        3946
      ],
      "IERC721Metadata": [
        3973
      ],
      "IERC721Receiver": [
        3577
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
      "MapleNFT": [
        9924
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
        10764
      ]
    },
    "id": 9925,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9505,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:23:33"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "id": 9506,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 9925,
        "sourceUnit": 3444,
        "src": "56:57:33",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
        "file": "@openzeppelin/contracts/utils/Counters.sol",
        "id": 9507,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 9925,
        "sourceUnit": 4365,
        "src": "114:52:33",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 9508,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 9925,
        "sourceUnit": 113,
        "src": "167:52:33",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol",
        "file": "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol",
        "id": 9509,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 9925,
        "sourceUnit": 3916,
        "src": "220:78:33",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/contracts/interfaces/ERC20Interface.sol",
        "file": "./interfaces/ERC20Interface.sol",
        "id": 9510,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 9925,
        "sourceUnit": 10846,
        "src": "299:41:33",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/contracts/JMToken.sol",
        "file": "./JMToken.sol",
        "id": 9511,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 9925,
        "sourceUnit": 6143,
        "src": "341:23:33",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 9512,
              "name": "Ownable",
              "nameLocations": [
                "387:7:33"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 112,
              "src": "387:7:33"
            },
            "id": 9513,
            "nodeType": "InheritanceSpecifier",
            "src": "387:7:33"
          },
          {
            "baseName": {
              "id": 9514,
              "name": "ERC721Enumerable",
              "nameLocations": [
                "396:16:33"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 3915,
              "src": "396:16:33"
            },
            "id": 9515,
            "nodeType": "InheritanceSpecifier",
            "src": "396:16:33"
          }
        ],
        "canonicalName": "MapleNFT",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 9924,
        "linearizedBaseContracts": [
          9924,
          3915,
          3946,
          3443,
          3973,
          3559,
          4614,
          4626,
          112,
          4290
        ],
        "name": "MapleNFT",
        "nameLocation": "375:8:33",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "global": false,
            "id": 9519,
            "libraryName": {
              "id": 9516,
              "name": "Counters",
              "nameLocations": [
                "425:8:33"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 4364,
              "src": "425:8:33"
            },
            "nodeType": "UsingForDirective",
            "src": "419:36:33",
            "typeName": {
              "id": 9518,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 9517,
                "name": "Counters.Counter",
                "nameLocations": [
                  "438:8:33",
                  "447:7:33"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 4296,
                "src": "438:16:33"
              },
              "referencedDeclaration": 4296,
              "src": "438:16:33",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$4296_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            }
          },
          {
            "constant": false,
            "id": 9522,
            "mutability": "mutable",
            "name": "_tokenIds",
            "nameLocation": "485:9:33",
            "nodeType": "VariableDeclaration",
            "scope": 9924,
            "src": "460:34:33",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Counter_$4296_storage",
              "typeString": "struct Counters.Counter"
            },
            "typeName": {
              "id": 9521,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 9520,
                "name": "Counters.Counter",
                "nameLocations": [
                  "460:8:33",
                  "469:7:33"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 4296,
                "src": "460:16:33"
              },
              "referencedDeclaration": 4296,
              "src": "460:16:33",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$4296_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 9525,
            "mutability": "mutable",
            "name": "token",
            "nameLocation": "517:5:33",
            "nodeType": "VariableDeclaration",
            "scope": 9924,
            "src": "501:21:33",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_JMToken_$6142",
              "typeString": "contract JMToken"
            },
            "typeName": {
              "id": 9524,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 9523,
                "name": "JMToken",
                "nameLocations": [
                  "501:7:33"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 6142,
                "src": "501:7:33"
              },
              "referencedDeclaration": 6142,
              "src": "501:7:33",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_JMToken_$6142",
                "typeString": "contract JMToken"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 9530,
            "mutability": "mutable",
            "name": "decimals",
            "nameLocation": "536:8:33",
            "nodeType": "VariableDeclaration",
            "scope": 9924,
            "src": "528:25:33",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9526,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "528:7:33",
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
              "id": 9529,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "3130",
                "id": 9527,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "547:2:33",
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
                "id": 9528,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "551:2:33",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_18_by_1",
                  "typeString": "int_const 18"
                },
                "value": "18"
              },
              "src": "547:6:33",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "functionSelector": "4626402b",
            "id": 9532,
            "mutability": "mutable",
            "name": "treasuryWallet",
            "nameLocation": "582:14:33",
            "nodeType": "VariableDeclaration",
            "scope": 9924,
            "src": "559:37:33",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 9531,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "559:15:33",
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
            "id": 9534,
            "mutability": "mutable",
            "name": "mintPrice",
            "nameLocation": "639:9:33",
            "nodeType": "VariableDeclaration",
            "scope": 9924,
            "src": "623:25:33",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9533,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "623:7:33",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 9536,
            "mutability": "mutable",
            "name": "marketContractAddress",
            "nameLocation": "670:21:33",
            "nodeType": "VariableDeclaration",
            "scope": 9924,
            "src": "654:37:33",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 9535,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "654:7:33",
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
            "id": 9539,
            "mutability": "mutable",
            "name": "waitForMint",
            "nameLocation": "715:11:33",
            "nodeType": "VariableDeclaration",
            "scope": 9924,
            "src": "697:29:33",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
              "typeString": "uint256[]"
            },
            "typeName": {
              "baseType": {
                "id": 9537,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "697:7:33",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 9538,
              "nodeType": "ArrayTypeName",
              "src": "697:9:33",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                "typeString": "uint256[]"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 9541,
            "mutability": "mutable",
            "name": "maxTokenNum",
            "nameLocation": "748:11:33",
            "nodeType": "VariableDeclaration",
            "scope": 9924,
            "src": "732:27:33",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9540,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "732:7:33",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 9543,
            "mutability": "mutable",
            "name": "baseURIextended",
            "nameLocation": "780:15:33",
            "nodeType": "VariableDeclaration",
            "scope": 9924,
            "src": "765:30:33",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 9542,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "765:6:33",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "visibility": "private"
          },
          {
            "anonymous": false,
            "eventSelector": "e7cd4ce7f2a465edc730269a1305e8a48bad821e8fb7e152ec413829c01a53c4",
            "id": 9551,
            "name": "Minted",
            "nameLocation": "813:6:33",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9550,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9545,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "addr",
                  "nameLocation": "828:4:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9551,
                  "src": "820:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9544,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "820:7:33",
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
                  "id": 9547,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "842:7:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9551,
                  "src": "834:15:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9546,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "834:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9549,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "tokenURI",
                  "nameLocation": "858:8:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9551,
                  "src": "851:15:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9548,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "851:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "819:48:33"
            },
            "src": "807:61:33"
          },
          {
            "body": {
              "id": 9593,
              "nodeType": "Block",
              "src": "1065:257:33",
              "statements": [
                {
                  "expression": {
                    "id": 9568,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9566,
                      "name": "marketContractAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9536,
                      "src": "1076:21:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 9567,
                      "name": "_marketAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9553,
                      "src": "1100:14:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1076:38:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9569,
                  "nodeType": "ExpressionStatement",
                  "src": "1076:38:33"
                },
                {
                  "expression": {
                    "id": 9572,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9570,
                      "name": "mintPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9534,
                      "src": "1124:9:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "31",
                      "id": 9571,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1136:1:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "1124:13:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9573,
                  "nodeType": "ExpressionStatement",
                  "src": "1124:13:33"
                },
                {
                  "expression": {
                    "id": 9576,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9574,
                      "name": "maxTokenNum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9541,
                      "src": "1147:11:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "34393939",
                      "id": 9575,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1161:4:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_4999_by_1",
                        "typeString": "int_const 4999"
                      },
                      "value": "4999"
                    },
                    "src": "1147:18:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9577,
                  "nodeType": "ExpressionStatement",
                  "src": "1147:18:33"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 9579,
                        "name": "_tokenContractAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9555,
                        "src": "1185:21:33",
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
                      "id": 9578,
                      "name": "_setToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9881,
                      "src": "1175:9:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                        "typeString": "function (address) returns (bool)"
                      }
                    },
                    "id": 9580,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1175:32:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9581,
                  "nodeType": "ExpressionStatement",
                  "src": "1175:32:33"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 9583,
                        "name": "_MapleBaseURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9557,
                        "src": "1229:13:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 9582,
                      "name": "_setBaseURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9785,
                      "src": "1217:11:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 9584,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1217:26:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9585,
                  "nodeType": "ExpressionStatement",
                  "src": "1217:26:33"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 9586,
                      "name": "_generateMintArray",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9618,
                      "src": "1253:18:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 9587,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1253:20:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9588,
                  "nodeType": "ExpressionStatement",
                  "src": "1253:20:33"
                },
                {
                  "expression": {
                    "id": 9591,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9589,
                      "name": "treasuryWallet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9532,
                      "src": "1283:14:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 9590,
                      "name": "_treasuryWallet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9559,
                      "src": "1300:15:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "1283:32:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 9592,
                  "nodeType": "ExpressionStatement",
                  "src": "1283:32:33"
                }
              ]
            },
            "id": 9594,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "hexValue": "4d61706c654e4654",
                    "id": 9562,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1046:10:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_3f6731cc0a798433602ef87cf869c7375df1a96e2f6fa946bc19099a469d2702",
                      "typeString": "literal_string \"MapleNFT\""
                    },
                    "value": "MapleNFT"
                  },
                  {
                    "hexValue": "4e4654",
                    "id": 9563,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1058:5:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_9c4138cd0a1311e4748f70d0fe3dc55f0f5f75e0f20db731225cbc3b8914016a",
                      "typeString": "literal_string \"NFT\""
                    },
                    "value": "NFT"
                  }
                ],
                "id": 9564,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 9561,
                  "name": "ERC721",
                  "nameLocations": [
                    "1039:6:33"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 3443,
                  "src": "1039:6:33"
                },
                "nodeType": "ModifierInvocation",
                "src": "1039:25:33"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9560,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9553,
                  "mutability": "mutable",
                  "name": "_marketAddress",
                  "nameLocation": "903:14:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9594,
                  "src": "895:22:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9552,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "895:7:33",
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
                  "id": 9555,
                  "mutability": "mutable",
                  "name": "_tokenContractAddress",
                  "nameLocation": "935:21:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9594,
                  "src": "927:29:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9554,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "927:7:33",
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
                  "id": 9557,
                  "mutability": "mutable",
                  "name": "_MapleBaseURI",
                  "nameLocation": "981:13:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9594,
                  "src": "967:27:33",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9556,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "967:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9559,
                  "mutability": "mutable",
                  "name": "_treasuryWallet",
                  "nameLocation": "1021:15:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9594,
                  "src": "1005:31:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 9558,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1005:15:33",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "885:152:33"
            },
            "returnParameters": {
              "id": 9565,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1065:0:33"
            },
            "scope": 9924,
            "src": "874:448:33",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9617,
              "nodeType": "Block",
              "src": "1376:103:33",
              "statements": [
                {
                  "body": {
                    "id": 9615,
                    "nodeType": "Block",
                    "src": "1429:44:33",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 9612,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9600,
                              "src": "1460:1:33",
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
                              "id": 9609,
                              "name": "waitForMint",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9539,
                              "src": "1443:11:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 9611,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1455:4:33",
                            "memberName": "push",
                            "nodeType": "MemberAccess",
                            "src": "1443:16:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_uint256_$dyn_storage_ptr_$_t_uint256_$returns$__$bound_to$_t_array$_t_uint256_$dyn_storage_ptr_$",
                              "typeString": "function (uint256[] storage pointer,uint256)"
                            }
                          },
                          "id": 9613,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1443:19:33",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 9614,
                        "nodeType": "ExpressionStatement",
                        "src": "1443:19:33"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9605,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 9603,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9600,
                      "src": "1406:1:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "id": 9604,
                      "name": "maxTokenNum",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9541,
                      "src": "1411:11:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1406:16:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9616,
                  "initializationExpression": {
                    "assignments": [
                      9600
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 9600,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "1399:1:33",
                        "nodeType": "VariableDeclaration",
                        "scope": 9616,
                        "src": "1391:9:33",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 9599,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1391:7:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 9602,
                    "initialValue": {
                      "hexValue": "30",
                      "id": 9601,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1403:1:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1391:13:33"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 9607,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1424:3:33",
                      "subExpression": {
                        "id": 9606,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9600,
                        "src": "1424:1:33",
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
                    "id": 9608,
                    "nodeType": "ExpressionStatement",
                    "src": "1424:3:33"
                  },
                  "nodeType": "ForStatement",
                  "src": "1386:87:33"
                }
              ]
            },
            "id": 9618,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 9597,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 9596,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "1366:9:33"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "1366:9:33"
                },
                "nodeType": "ModifierInvocation",
                "src": "1366:9:33"
              }
            ],
            "name": "_generateMintArray",
            "nameLocation": "1337:18:33",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9595,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1355:2:33"
            },
            "returnParameters": {
              "id": 9598,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1376:0:33"
            },
            "scope": 9924,
            "src": "1328:151:33",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 9724,
              "nodeType": "Block",
              "src": "1575:917:33",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 9630,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 9626,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "1609:3:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 9627,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1613:6:33",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "1609:10:33",
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
                              "id": 9624,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9525,
                              "src": "1593:5:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_JMToken_$6142",
                                "typeString": "contract JMToken"
                              }
                            },
                            "id": 9625,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1599:9:33",
                            "memberName": "balanceOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1986,
                            "src": "1593:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view external returns (uint256)"
                            }
                          },
                          "id": 9628,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1593:27:33",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 9629,
                          "name": "mintPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9534,
                          "src": "1624:9:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1593:40:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4552433732313a20726563697069656e74206c61636b206f662065726332302062616c616e6365",
                        "id": 9631,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1635:41:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_be6ad8021e6b80a9a985704237732530c0e3cdf07bbf9d28e13e90abe670112e",
                          "typeString": "literal_string \"ERC721: recipient lack of erc20 balance\""
                        },
                        "value": "ERC721: recipient lack of erc20 balance"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_be6ad8021e6b80a9a985704237732530c0e3cdf07bbf9d28e13e90abe670112e",
                          "typeString": "literal_string \"ERC721: recipient lack of erc20 balance\""
                        }
                      ],
                      "id": 9623,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1585:7:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 9632,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1585:92:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9633,
                  "nodeType": "ExpressionStatement",
                  "src": "1585:92:33"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 9638,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 9635,
                          "name": "maxTokenNum",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9541,
                          "src": "1695:11:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 9636,
                            "name": "totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3666,
                            "src": "1710:11:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 9637,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1710:13:33",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1695:28:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4552433732313a20616c6c206e66747320617265206d696e746564",
                        "id": 9639,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1725:29:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_df3d2f59522d891de16a4252d65c969fd7e0ed099ebf38783c0a5e88ec8b1c22",
                          "typeString": "literal_string \"ERC721: all nfts are minted\""
                        },
                        "value": "ERC721: all nfts are minted"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_df3d2f59522d891de16a4252d65c969fd7e0ed099ebf38783c0a5e88ec8b1c22",
                          "typeString": "literal_string \"ERC721: all nfts are minted\""
                        }
                      ],
                      "id": 9634,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1687:7:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 9640,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1687:68:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9641,
                  "nodeType": "ExpressionStatement",
                  "src": "1687:68:33"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 9642,
                      "name": "_shuffleMintArray",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9773,
                      "src": "1766:17:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 9643,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1766:19:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9644,
                  "nodeType": "ExpressionStatement",
                  "src": "1766:19:33"
                },
                {
                  "assignments": [
                    9646
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9646,
                      "mutability": "mutable",
                      "name": "minted",
                      "nameLocation": "1803:6:33",
                      "nodeType": "VariableDeclaration",
                      "scope": 9724,
                      "src": "1795:14:33",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9645,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1795:7:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9653,
                  "initialValue": {
                    "baseExpression": {
                      "id": 9647,
                      "name": "waitForMint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9539,
                      "src": "1812:11:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 9652,
                    "indexExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 9651,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 9648,
                          "name": "waitForMint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9539,
                          "src": "1824:11:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        },
                        "id": 9649,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1836:6:33",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "1824:18:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 9650,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1845:1:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "1824:22:33",
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
                    "src": "1812:35:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1795:52:33"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 9654,
                        "name": "waitForMint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9539,
                        "src": "1857:11:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 9656,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1869:3:33",
                      "memberName": "pop",
                      "nodeType": "MemberAccess",
                      "src": "1857:15:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypop_nonpayable$_t_array$_t_uint256_$dyn_storage_ptr_$returns$__$bound_to$_t_array$_t_uint256_$dyn_storage_ptr_$",
                        "typeString": "function (uint256[] storage pointer)"
                      }
                    },
                    "id": 9657,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1857:17:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9658,
                  "nodeType": "ExpressionStatement",
                  "src": "1857:17:33"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 9660,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1891:3:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 9661,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1895:6:33",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1891:10:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 9662,
                        "name": "minted",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9646,
                        "src": "1903:6:33",
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
                      "id": 9659,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3153,
                      "src": "1885:5:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 9663,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1885:25:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9664,
                  "nodeType": "ExpressionStatement",
                  "src": "1885:25:33"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 9666,
                        "name": "marketContractAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9536,
                        "src": "1938:21:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "hexValue": "74727565",
                        "id": 9667,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1961:4:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 9665,
                      "name": "setApprovalForAll",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2868,
                      "src": "1920:17:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bool_$returns$__$",
                        "typeString": "function (address,bool)"
                      }
                    },
                    "id": 9668,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1920:46:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9669,
                  "nodeType": "ExpressionStatement",
                  "src": "1920:46:33"
                },
                {
                  "assignments": [
                    9671
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9671,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "2068:7:33",
                      "nodeType": "VariableDeclaration",
                      "scope": 9724,
                      "src": "2063:12:33",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 9670,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "2063:4:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9684,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 9674,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "2123:3:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 9675,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2127:6:33",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2123:10:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 9678,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "2155:4:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MapleNFT_$9924",
                              "typeString": "contract MapleNFT"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_MapleNFT_$9924",
                              "typeString": "contract MapleNFT"
                            }
                          ],
                          "id": 9677,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2147:7:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 9676,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2147:7:33",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 9679,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2147:13:33",
                        "tryCall": false,
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
                        "id": 9682,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 9680,
                          "name": "mintPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9534,
                          "src": "2174:9:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "id": 9681,
                          "name": "decimals",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9530,
                          "src": "2186:8:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2174:20:33",
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
                        "id": 9672,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9525,
                        "src": "2078:5:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JMToken_$6142",
                          "typeString": "contract JMToken"
                        }
                      },
                      "id": 9673,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2084:25:33",
                      "memberName": "increaseContractAllowance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5949,
                      "src": "2078:31:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 9683,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2078:126:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2063:141:33"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 9686,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9671,
                        "src": "2222:7:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "496e637265617365436f6e7472616374204661696c",
                        "id": 9687,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2230:23:33",
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
                      "id": 9685,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2214:7:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 9688,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2214:40:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9689,
                  "nodeType": "ExpressionStatement",
                  "src": "2214:40:33"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 9693,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "2283:3:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 9694,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2287:6:33",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2283:10:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 9695,
                        "name": "treasuryWallet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9532,
                        "src": "2295:14:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 9698,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 9696,
                          "name": "mintPrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9534,
                          "src": "2311:9:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "id": 9697,
                          "name": "decimals",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9530,
                          "src": "2323:8:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2311:20:33",
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
                        "id": 9690,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9525,
                        "src": "2264:5:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JMToken_$6142",
                          "typeString": "contract JMToken"
                        }
                      },
                      "id": 9692,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2270:12:33",
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2087,
                      "src": "2264:18:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 9699,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2264:68:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9700,
                  "nodeType": "ExpressionStatement",
                  "src": "2264:68:33"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 9704,
                        "name": "treasuryWallet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9532,
                        "src": "2360:14:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 9710,
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
                              "id": 9707,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 9705,
                                "name": "mintPrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9534,
                                "src": "2377:9:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "id": 9706,
                                "name": "decimals",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9530,
                                "src": "2389:8:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "2377:20:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 9708,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "2376:22:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "hexValue": "32",
                          "id": 9709,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2399:1:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2_by_1",
                            "typeString": "int_const 2"
                          },
                          "value": "2"
                        },
                        "src": "2376:24:33",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 9701,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9525,
                        "src": "2343:5:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JMToken_$6142",
                          "typeString": "contract JMToken"
                        }
                      },
                      "id": 9703,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2349:10:33",
                      "memberName": "marketBurn",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5918,
                      "src": "2343:16:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256) external"
                      }
                    },
                    "id": 9711,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2343:58:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9712,
                  "nodeType": "ExpressionStatement",
                  "src": "2343:58:33"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 9714,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "2424:3:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 9715,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2428:6:33",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2424:10:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 9716,
                        "name": "minted",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9646,
                        "src": "2436:6:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 9718,
                            "name": "minted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9646,
                            "src": "2453:6:33",
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
                          "id": 9717,
                          "name": "tokenURI",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            9854
                          ],
                          "referencedDeclaration": 9854,
                          "src": "2444:8:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_string_memory_ptr_$",
                            "typeString": "function (uint256) view returns (string memory)"
                          }
                        },
                        "id": 9719,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2444:16:33",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
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
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 9713,
                      "name": "Minted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9551,
                      "src": "2417:6:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,string memory)"
                      }
                    },
                    "id": 9720,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2417:44:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9721,
                  "nodeType": "EmitStatement",
                  "src": "2412:49:33"
                },
                {
                  "expression": {
                    "id": 9722,
                    "name": "minted",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9646,
                    "src": "2479:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 9622,
                  "id": 9723,
                  "nodeType": "Return",
                  "src": "2472:13:33"
                }
              ]
            },
            "functionSelector": "25379b00",
            "id": 9725,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mintMapleNFT",
            "nameLocation": "1526:12:33",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9619,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1538:2:33"
            },
            "returnParameters": {
              "id": 9622,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9621,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9725,
                  "src": "1565:7:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9620,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1565:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1564:9:33"
            },
            "scope": 9924,
            "src": "1517:975:33",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9772,
              "nodeType": "Block",
              "src": "2535:424:33",
              "statements": [
                {
                  "assignments": [
                    9729
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9729,
                      "mutability": "mutable",
                      "name": "i",
                      "nameLocation": "2553:1:33",
                      "nodeType": "VariableDeclaration",
                      "scope": 9772,
                      "src": "2545:9:33",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9728,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2545:7:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9734,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9733,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 9730,
                        "name": "waitForMint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9539,
                        "src": "2557:11:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 9731,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2569:6:33",
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "src": "2557:18:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "hexValue": "31",
                      "id": 9732,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2578:1:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "2557:22:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2545:34:33"
                },
                {
                  "assignments": [
                    9736
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9736,
                      "mutability": "mutable",
                      "name": "n",
                      "nameLocation": "2761:1:33",
                      "nodeType": "VariableDeclaration",
                      "scope": 9772,
                      "src": "2753:9:33",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9735,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2753:7:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9751,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9750,
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
                                    "id": 9742,
                                    "name": "block",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4294967292,
                                    "src": "2800:5:33",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_block",
                                      "typeString": "block"
                                    }
                                  },
                                  "id": 9743,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "2806:9:33",
                                  "memberName": "timestamp",
                                  "nodeType": "MemberAccess",
                                  "src": "2800:15:33",
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
                                  "id": 9740,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967295,
                                  "src": "2783:3:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 9741,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "2787:12:33",
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "src": "2783:16:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 9744,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2783:33:33",
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
                            "id": 9739,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967288,
                            "src": "2773:9:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 9745,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2773:44:33",
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
                        "id": 9738,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2765:7:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 9737,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2765:7:33",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 9746,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2765:53:33",
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
                          "expression": {
                            "id": 9747,
                            "name": "waitForMint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9539,
                            "src": "2822:11:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            }
                          },
                          "id": 9748,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2834:6:33",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "2822:18:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 9749,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2821:20:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2765:76:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2753:88:33"
                },
                {
                  "assignments": [
                    9753
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9753,
                      "mutability": "mutable",
                      "name": "temp",
                      "nameLocation": "2859:4:33",
                      "nodeType": "VariableDeclaration",
                      "scope": 9772,
                      "src": "2851:12:33",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9752,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2851:7:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9757,
                  "initialValue": {
                    "baseExpression": {
                      "id": 9754,
                      "name": "waitForMint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9539,
                      "src": "2866:11:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 9756,
                    "indexExpression": {
                      "id": 9755,
                      "name": "n",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9736,
                      "src": "2878:1:33",
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
                    "src": "2866:14:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2851:29:33"
                },
                {
                  "expression": {
                    "id": 9764,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 9758,
                        "name": "waitForMint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9539,
                        "src": "2890:11:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 9760,
                      "indexExpression": {
                        "id": 9759,
                        "name": "n",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9736,
                        "src": "2902:1:33",
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
                      "src": "2890:14:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "baseExpression": {
                        "id": 9761,
                        "name": "waitForMint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9539,
                        "src": "2907:11:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 9763,
                      "indexExpression": {
                        "id": 9762,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9729,
                        "src": "2919:1:33",
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
                      "src": "2907:14:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2890:31:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9765,
                  "nodeType": "ExpressionStatement",
                  "src": "2890:31:33"
                },
                {
                  "expression": {
                    "id": 9770,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 9766,
                        "name": "waitForMint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9539,
                        "src": "2931:11:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 9768,
                      "indexExpression": {
                        "id": 9767,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9729,
                        "src": "2943:1:33",
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
                      "src": "2931:14:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 9769,
                      "name": "temp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9753,
                      "src": "2948:4:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2931:21:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9771,
                  "nodeType": "ExpressionStatement",
                  "src": "2931:21:33"
                }
              ]
            },
            "id": 9773,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_shuffleMintArray",
            "nameLocation": "2507:17:33",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9726,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2524:2:33"
            },
            "returnParameters": {
              "id": 9727,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2535:0:33"
            },
            "scope": 9924,
            "src": "2498:461:33",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 9784,
              "nodeType": "Block",
              "src": "3033:48:33",
              "statements": [
                {
                  "expression": {
                    "id": 9782,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9780,
                      "name": "baseURIextended",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9543,
                      "src": "3043:15:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 9781,
                      "name": "_MapleBaseURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9775,
                      "src": "3061:13:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "3043:31:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 9783,
                  "nodeType": "ExpressionStatement",
                  "src": "3043:31:33"
                }
              ]
            },
            "id": 9785,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 9778,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 9777,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "3023:9:33"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "3023:9:33"
                },
                "nodeType": "ModifierInvocation",
                "src": "3023:9:33"
              }
            ],
            "name": "_setBaseURI",
            "nameLocation": "2974:11:33",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9776,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9775,
                  "mutability": "mutable",
                  "name": "_MapleBaseURI",
                  "nameLocation": "3000:13:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9785,
                  "src": "2986:27:33",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9774,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2986:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2985:29:33"
            },
            "returnParameters": {
              "id": 9779,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3033:0:33"
            },
            "scope": 9924,
            "src": "2965:116:33",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "baseFunctions": [
              2790
            ],
            "body": {
              "id": 9793,
              "nodeType": "Block",
              "src": "3162:39:33",
              "statements": [
                {
                  "expression": {
                    "id": 9791,
                    "name": "baseURIextended",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9543,
                    "src": "3179:15:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 9790,
                  "id": 9792,
                  "nodeType": "Return",
                  "src": "3172:22:33"
                }
              ]
            },
            "id": 9794,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_baseURI",
            "nameLocation": "3096:8:33",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 9787,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3129:8:33"
            },
            "parameters": {
              "id": 9786,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3104:2:33"
            },
            "returnParameters": {
              "id": 9790,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9789,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9794,
                  "src": "3147:13:33",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9788,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3147:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3146:15:33"
            },
            "scope": 9924,
            "src": "3087:114:33",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "baseFunctions": [
              3753
            ],
            "body": {
              "id": 9812,
              "nodeType": "Block",
              "src": "3328:62:33",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 9807,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9796,
                        "src": "3365:4:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 9808,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9798,
                        "src": "3371:2:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 9809,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9800,
                        "src": "3375:7:33",
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
                        "id": 9804,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967271,
                        "src": "3338:5:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_MapleNFT_$9924_$",
                          "typeString": "type(contract super MapleNFT)"
                        }
                      },
                      "id": 9806,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3344:20:33",
                      "memberName": "_beforeTokenTransfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3753,
                      "src": "3338:26:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 9810,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3338:45:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9811,
                  "nodeType": "ExpressionStatement",
                  "src": "3338:45:33"
                }
              ]
            },
            "id": 9813,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_beforeTokenTransfer",
            "nameLocation": "3216:20:33",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 9802,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3319:8:33"
            },
            "parameters": {
              "id": 9801,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9796,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "3254:4:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9813,
                  "src": "3246:12:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9795,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3246:7:33",
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
                  "id": 9798,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "3276:2:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9813,
                  "src": "3268:10:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9797,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3268:7:33",
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
                  "id": 9800,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "3296:7:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9813,
                  "src": "3288:15:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9799,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3288:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3236:73:33"
            },
            "returnParameters": {
              "id": 9803,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3328:0:33"
            },
            "scope": 9924,
            "src": "3207:183:33",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "baseFunctions": [
              3213
            ],
            "body": {
              "id": 9825,
              "nodeType": "Block",
              "src": "3461:38:33",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 9822,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9815,
                        "src": "3483:8:33",
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
                        "id": 9819,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967271,
                        "src": "3471:5:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_MapleNFT_$9924_$",
                          "typeString": "type(contract super MapleNFT)"
                        }
                      },
                      "id": 9821,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3477:5:33",
                      "memberName": "_burn",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3213,
                      "src": "3471:11:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 9823,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3471:21:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9824,
                  "nodeType": "ExpressionStatement",
                  "src": "3471:21:33"
                }
              ]
            },
            "id": 9826,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_burn",
            "nameLocation": "3405:5:33",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 9817,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3452:8:33"
            },
            "parameters": {
              "id": 9816,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9815,
                  "mutability": "mutable",
                  "name": "_tokenId",
                  "nameLocation": "3428:8:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9826,
                  "src": "3420:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9814,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3420:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3410:32:33"
            },
            "returnParameters": {
              "id": 9818,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3461:0:33"
            },
            "scope": 9924,
            "src": "3396:103:33",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "baseFunctions": [
              3627
            ],
            "body": {
              "id": 9839,
              "nodeType": "Block",
              "src": "3588:60:33",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 9836,
                        "name": "interfaceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9828,
                        "src": "3629:11:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      ],
                      "expression": {
                        "id": 9834,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967271,
                        "src": "3605:5:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_MapleNFT_$9924_$",
                          "typeString": "type(contract super MapleNFT)"
                        }
                      },
                      "id": 9835,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3611:17:33",
                      "memberName": "supportsInterface",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3627,
                      "src": "3605:23:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
                        "typeString": "function (bytes4) view returns (bool)"
                      }
                    },
                    "id": 9837,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3605:36:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 9833,
                  "id": 9838,
                  "nodeType": "Return",
                  "src": "3598:43:33"
                }
              ]
            },
            "functionSelector": "01ffc9a7",
            "id": 9840,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nameLocation": "3514:17:33",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 9830,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3564:8:33"
            },
            "parameters": {
              "id": 9829,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9828,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nameLocation": "3539:11:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9840,
                  "src": "3532:18:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 9827,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "3532:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3531:20:33"
            },
            "returnParameters": {
              "id": 9833,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9832,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9840,
                  "src": "3582:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9831,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3582:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3581:6:33"
            },
            "scope": 9924,
            "src": "3505:143:33",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              2781
            ],
            "body": {
              "id": 9853,
              "nodeType": "Block",
              "src": "3749:48:33",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 9850,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9842,
                        "src": "3781:8:33",
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
                        "id": 9848,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967271,
                        "src": "3766:5:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_MapleNFT_$9924_$",
                          "typeString": "type(contract super MapleNFT)"
                        }
                      },
                      "id": 9849,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3772:8:33",
                      "memberName": "tokenURI",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2781,
                      "src": "3766:14:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256) view returns (string memory)"
                      }
                    },
                    "id": 9851,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3766:24:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 9847,
                  "id": 9852,
                  "nodeType": "Return",
                  "src": "3759:31:33"
                }
              ]
            },
            "functionSelector": "c87b56dd",
            "id": 9854,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tokenURI",
            "nameLocation": "3663:8:33",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 9844,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3716:8:33"
            },
            "parameters": {
              "id": 9843,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9842,
                  "mutability": "mutable",
                  "name": "_tokenId",
                  "nameLocation": "3689:8:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9854,
                  "src": "3681:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9841,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3681:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3671:32:33"
            },
            "returnParameters": {
              "id": 9847,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9846,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9854,
                  "src": "3734:13:33",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 9845,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3734:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3733:15:33"
            },
            "scope": 9924,
            "src": "3654:143:33",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9880,
              "nodeType": "Block",
              "src": "3879:118:33",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 9869,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 9864,
                          "name": "jmtokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9856,
                          "src": "3897:14:33",
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
                              "id": 9867,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3923:3:33",
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
                            "id": 9866,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3915:7:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 9865,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "3915:7:33",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 9868,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3915:12:33",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "3897:30:33",
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
                      "id": 9863,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "3889:7:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9870,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3889:39:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9871,
                  "nodeType": "ExpressionStatement",
                  "src": "3889:39:33"
                },
                {
                  "expression": {
                    "id": 9876,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9872,
                      "name": "token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9525,
                      "src": "3938:5:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_JMToken_$6142",
                        "typeString": "contract JMToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 9874,
                          "name": "jmtokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9856,
                          "src": "3954:14:33",
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
                        "id": 9873,
                        "name": "JMToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6142,
                        "src": "3946:7:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_JMToken_$6142_$",
                          "typeString": "type(contract JMToken)"
                        }
                      },
                      "id": 9875,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3946:23:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_JMToken_$6142",
                        "typeString": "contract JMToken"
                      }
                    },
                    "src": "3938:31:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_JMToken_$6142",
                      "typeString": "contract JMToken"
                    }
                  },
                  "id": 9877,
                  "nodeType": "ExpressionStatement",
                  "src": "3938:31:33"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 9878,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3986:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 9862,
                  "id": 9879,
                  "nodeType": "Return",
                  "src": "3979:11:33"
                }
              ]
            },
            "id": 9881,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 9859,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 9858,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "3854:9:33"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "3854:9:33"
                },
                "nodeType": "ModifierInvocation",
                "src": "3854:9:33"
              }
            ],
            "name": "_setToken",
            "nameLocation": "3812:9:33",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9857,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9856,
                  "mutability": "mutable",
                  "name": "jmtokenAddress",
                  "nameLocation": "3830:14:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9881,
                  "src": "3822:22:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9855,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3822:7:33",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3821:24:33"
            },
            "returnParameters": {
              "id": 9862,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9861,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9881,
                  "src": "3873:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9860,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3873:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3872:6:33"
            },
            "scope": 9924,
            "src": "3803:194:33",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 9922,
              "nodeType": "Block",
              "src": "4060:212:33",
              "statements": [
                {
                  "assignments": [
                    9889
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9889,
                      "mutability": "mutable",
                      "name": "totalValue",
                      "nameLocation": "4078:10:33",
                      "nodeType": "VariableDeclaration",
                      "scope": 9922,
                      "src": "4070:18:33",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9888,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4070:7:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9897,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 9894,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "4115:4:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MapleNFT_$9924",
                              "typeString": "contract MapleNFT"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_MapleNFT_$9924",
                              "typeString": "contract MapleNFT"
                            }
                          ],
                          "id": 9893,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4107:7:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 9892,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "4107:7:33",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 9895,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4107:13:33",
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
                        "id": 9890,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9525,
                        "src": "4091:5:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JMToken_$6142",
                          "typeString": "contract JMToken"
                        }
                      },
                      "id": 9891,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4097:9:33",
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1986,
                      "src": "4091:15:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 9896,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4091:30:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4070:51:33"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 9903,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "4153:4:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MapleNFT_$9924",
                              "typeString": "contract MapleNFT"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_MapleNFT_$9924",
                              "typeString": "contract MapleNFT"
                            }
                          ],
                          "id": 9902,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4145:7:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 9901,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "4145:7:33",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 9904,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4145:13:33",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 9905,
                        "name": "totalValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9889,
                        "src": "4160:10:33",
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
                        "id": 9898,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9525,
                        "src": "4131:5:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JMToken_$6142",
                          "typeString": "contract JMToken"
                        }
                      },
                      "id": 9900,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4137:7:33",
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2054,
                      "src": "4131:13:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 9906,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4131:40:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9907,
                  "nodeType": "ExpressionStatement",
                  "src": "4131:40:33"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 9913,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "4208:4:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MapleNFT_$9924",
                              "typeString": "contract MapleNFT"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_MapleNFT_$9924",
                              "typeString": "contract MapleNFT"
                            }
                          ],
                          "id": 9912,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4200:7:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 9911,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "4200:7:33",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 9914,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4200:13:33",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 9915,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "4215:3:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 9916,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4219:6:33",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "4215:10:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 9917,
                        "name": "totalValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9889,
                        "src": "4227:10:33",
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
                        "id": 9908,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9525,
                        "src": "4181:5:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JMToken_$6142",
                          "typeString": "contract JMToken"
                        }
                      },
                      "id": 9910,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4187:12:33",
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2087,
                      "src": "4181:18:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 9918,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4181:57:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9919,
                  "nodeType": "ExpressionStatement",
                  "src": "4181:57:33"
                },
                {
                  "expression": {
                    "id": 9920,
                    "name": "totalValue",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9889,
                    "src": "4255:10:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 9887,
                  "id": 9921,
                  "nodeType": "Return",
                  "src": "4248:17:33"
                }
              ]
            },
            "functionSelector": "3ccfd60b",
            "id": 9923,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 9884,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 9883,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "4032:9:33"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "4032:9:33"
                },
                "nodeType": "ModifierInvocation",
                "src": "4032:9:33"
              }
            ],
            "name": "withdraw",
            "nameLocation": "4012:8:33",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9882,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4020:2:33"
            },
            "returnParameters": {
              "id": 9887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9886,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9923,
                  "src": "4051:7:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9885,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4051:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4050:9:33"
            },
            "scope": 9924,
            "src": "4003:269:33",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 9925,
        "src": "366:3908:33",
        "usedErrors": []
      }
    ],
    "src": "32:4243:33"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.17+commit.8df45f5f.Emscripten.clang"
  },
  "networks": {
    "1337": {
      "events": {},
      "links": {},
      "address": "0xb3472FEeCa1078a4275a5e7e135A515B426b8708",
      "transactionHash": "0xc3b5f655f280374f892eb1e73e512f893f0f4f01644cd480d730158fdc6a4647"
    },
    "3989": {
      "events": {},
      "links": {},
      "address": "0xE827E1e1f29C37BF6F9A0B3709BBbCbf4C6a9047",
      "transactionHash": "0x89d5fd4e3939453563f451c41868688694d6396783ddad5e0c5abc13898ee939"
    }
  },
  "schemaVersion": "3.4.9",
  "updatedAt": "2022-09-26T18:29:20.771Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "approve(address,uint256)": {
        "details": "See {IERC721-approve}."
      },
      "balanceOf(address)": {
        "details": "See {IERC721-balanceOf}."
      },
      "getApproved(uint256)": {
        "details": "See {IERC721-getApproved}."
      },
      "isApprovedForAll(address,address)": {
        "details": "See {IERC721-isApprovedForAll}."
      },
      "name()": {
        "details": "See {IERC721Metadata-name}."
      },
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "ownerOf(uint256)": {
        "details": "See {IERC721-ownerOf}."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "setApprovalForAll(address,bool)": {
        "details": "See {IERC721-setApprovalForAll}."
      },
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}."
      },
      "symbol()": {
        "details": "See {IERC721Metadata-symbol}."
      },
      "tokenByIndex(uint256)": {
        "details": "See {IERC721Enumerable-tokenByIndex}."
      },
      "tokenOfOwnerByIndex(address,uint256)": {
        "details": "See {IERC721Enumerable-tokenOfOwnerByIndex}."
      },
      "totalSupply()": {
        "details": "See {IERC721Enumerable-totalSupply}."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC721-transferFrom}."
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
module.exports = NFT;