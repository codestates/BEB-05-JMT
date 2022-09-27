const ROUTER = {
  "contractName": "JMTRouter",
  "abi": [
    {
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "payable": true
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
      "type": "function",
      "payable": true
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract LiquidityPool\",\"name\":\"_liquidityPool\",\"type\":\"address\"},{\"internalType\":\"contract JMToken\",\"name\":\"_jonMatang\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"_getAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_jmtAmount\",\"type\":\"uint256\"}],\"name\":\"addLiquidity\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pullLiquidity\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_jmtAmount\",\"type\":\"uint256\"}],\"name\":\"swapTokens\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/JMTRouter.sol\":\"JMTRouter\"},\"evmVersion\":\"berlin\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/security/Pausable.sol\":{\"keccak256\":\"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004\",\"dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B\"]},\"@openzeppelin/contracts/security/ReentrancyGuard.sol\":{\"keccak256\":\"0x0e9621f60b2faabe65549f7ed0f24e8853a45c1b7990d47e8160e523683f3935\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://287a2f8d5814dd0f05f22b740f18ca8321acc21c9bd03a6cb2203ea626e2f3f2\",\"dweb:/ipfs/QmZRQv9iuwU817VuqkA2WweiaibKii69x9QxYBBEfbNEud\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x24b04b8aacaaf1a4a0719117b29c9c3647b1f479c5ac2a60f5ff1bb6d839c238\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://43e46da9d9f49741ecd876a269e71bc7494058d7a8e9478429998adb5bc3eaa0\",\"dweb:/ipfs/QmUtp4cqzf22C5rJ76AabKADquGWcjsc33yjYXxXC4sDvy\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xaf159a8b1923ad2a26d516089bceca9bdeaeacd04be50983ea00ba63070f08a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6f2cf1c531122bc7ca96b8c8db6a60deae60441e5223065e792553d4849b5638\",\"dweb:/ipfs/QmPBdJmBBABMDCfyDjCbdxgiqRavgiSL88SYPGibgbPas9\"]},\"@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xd15c3e400531f00203839159b2b8e7209c5158b35618f570c695b7e47f12e9f0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b600b852e0597aa69989cc263111f02097e2827edc1bdc70306303e3af5e9929\",\"dweb:/ipfs/QmU4WfM28A1nDqghuuGeFmN3CnVrk6opWtiF65K4vhFPeC\"]},\"@uniswap/lib/contracts/libraries/Babylonian.sol\":{\"keccak256\":\"0xe20fc48e3575b4a2932e5d2dd53b6742e1ca96f652bd41038cb89d7f5d49a096\",\"urls\":[\"bzz-raw://6ba298d8e592d39960eabc2328b7d4a01ad6cf8b06366adc3ef0133d3b196a9f\",\"dweb:/ipfs/QmQgrNaHssJ8XVsPUCMHpyYRFLbBqNrumaoFgXHWdDiTyy\"]},\"project:/contracts/JMTRouter.sol\":{\"keccak256\":\"0x9975b201a81374cf2416fc0b4b6ef11f482c1fc640b733e5cb2cc0250026ba18\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://2c9ea6c40b65056a37ae1b7cf4899ddd2c4bfad064a4256d4063fa728383c7f5\",\"dweb:/ipfs/QmbDnkahFH9rj4CSkCDqAtMpAY7gV3bCmTy8cZEdBGiVzX\"]},\"project:/contracts/JMToken.sol\":{\"keccak256\":\"0x5ac24ee9d28244c27fe7607fd74f9712bb4c39b6b7c1b09f427c60c3a3f34903\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://9cf73304d3160b73cac46833df2e26ab6e3a0adad1c432e664d74ecdf0d1d7eb\",\"dweb:/ipfs/QmYginHntRFEMFLrcFiACEt2hvrhCrZb7Fv8vWCYXniQbQ\"]},\"project:/contracts/LPT.sol\":{\"keccak256\":\"0xed736abaceb3ae48c617e3f658e9b025d5b61ef8df551970899895432b0ec7b6\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://ad6919c26ab33a0f95936b6de5c1267e1a4ce2d41ef609c72be2ea63e39cf275\",\"dweb:/ipfs/QmVMZpeSSxWUxc9SME2pgQ3xwazzvdjRYGxF7sfMWGspwn\"]},\"project:/contracts/LiquidityPool.sol\":{\"keccak256\":\"0x02add59a18b8f9012f2043575b93d04fde563e3b940ccf50b5358e1cbe9e6ebd\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://feb1b5de36d206ec0be059e8e5110936a9a5e13f73b0cb375b3a35e87819ebd0\",\"dweb:/ipfs/QmSX53o3uqjeSaaDofNKswHREGfbf13CXXfnsxye1yHF68\"]},\"project:/contracts/VJMToken.sol\":{\"keccak256\":\"0xe2f8a326fd1fbe8e2bf0e7365ad261285fde71804fe77694ce986d47c106f061\",\"license\":\"GPL-3.0-only\",\"urls\":[\"bzz-raw://f6ee599ebeff106e2eb9d3a6b0c01915cfc6f76e0916b4215e9c80c5c992e475\",\"dweb:/ipfs/QmXz1MZL3nGq7C8o1JW57rgYr6Z4iDV4Kba279dw4Smt4M\"]}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b506040516105e73803806105e783398101604081905261002f91610078565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100b2565b6001600160a01b038116811461007557600080fd5b50565b6000806040838503121561008b57600080fd5b825161009681610060565b60208401519092506100a781610060565b809150509250929050565b610526806100c16000396000f3fe60806040526004361061003f5760003560e01c806351c6590a14610044578063b2ceaa0114610059578063f8e35be714610090578063fe784eaa146100a5575b600080fd5b610057610052366004610471565b6100b8565b005b34801561006557600080fd5b50600054600154604080516001600160a01b0393841681529290911660208301528051918290030190f35b34801561009c57600080fd5b506100576102d8565b6100576100b3366004610471565b610337565b6001546040516370a0823160e01b81523360048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610101573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610125919061048a565b1161016c5760405162461bcd60e51b81526020600482015260136024820152724e4f5f415641494c41424c455f544f4b454e5360681b604482015260640160405180910390fd5b60015460405163d83a2bf360e01b81526000916001600160a01b03169063d83a2bf3906101a1903390309087906004016104a3565b6020604051808303816000875af11580156101c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e491906104c7565b9050806101f057600080fd5b6001546000546040516323b872dd60e01b81526001600160a01b03928316926323b872dd926102299233929091169087906004016104a3565b6020604051808303816000875af1158015610248573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026c91906104c7565b50600054604051636e553f6560e01b8152600481018490523360248201526001600160a01b0390911690636e553f659034906044015b6000604051808303818588803b1580156102bb57600080fd5b505af11580156102cf573d6000803e3d6000fd5b50505050505050565b6000546040516351cff8d960e01b81523360048201526001600160a01b03909116906351cff8d990602401600060405180830381600087803b15801561031d57600080fd5b505af1158015610331573d6000803e3d6000fd5b50505050565b60015460405163d83a2bf360e01b81526000916001600160a01b03169063d83a2bf39061036c903390309087906004016104a3565b6020604051808303816000875af115801561038b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103af91906104c7565b9050806103bb57600080fd5b6001546000546040516323b872dd60e01b81526001600160a01b03928316926323b872dd926103f49233929091169087906004016104a3565b6020604051808303816000875af1158015610413573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043791906104c7565b5060005460405163d004f0f760e01b8152336004820152602481018490526001600160a01b039091169063d004f0f79034906044016102a2565b60006020828403121561048357600080fd5b5035919050565b60006020828403121561049c57600080fd5b5051919050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6000602082840312156104d957600080fd5b815180151581146104e957600080fd5b939250505056fea2646970667358221220c729f635167febceb64ec60282c719c4a42e5ed6cb82ed406d599156f6b5da1d64736f6c63430008110033",
  "deployedBytecode": "0x60806040526004361061003f5760003560e01c806351c6590a14610044578063b2ceaa0114610059578063f8e35be714610090578063fe784eaa146100a5575b600080fd5b610057610052366004610471565b6100b8565b005b34801561006557600080fd5b50600054600154604080516001600160a01b0393841681529290911660208301528051918290030190f35b34801561009c57600080fd5b506100576102d8565b6100576100b3366004610471565b610337565b6001546040516370a0823160e01b81523360048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610101573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610125919061048a565b1161016c5760405162461bcd60e51b81526020600482015260136024820152724e4f5f415641494c41424c455f544f4b454e5360681b604482015260640160405180910390fd5b60015460405163d83a2bf360e01b81526000916001600160a01b03169063d83a2bf3906101a1903390309087906004016104a3565b6020604051808303816000875af11580156101c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e491906104c7565b9050806101f057600080fd5b6001546000546040516323b872dd60e01b81526001600160a01b03928316926323b872dd926102299233929091169087906004016104a3565b6020604051808303816000875af1158015610248573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026c91906104c7565b50600054604051636e553f6560e01b8152600481018490523360248201526001600160a01b0390911690636e553f659034906044015b6000604051808303818588803b1580156102bb57600080fd5b505af11580156102cf573d6000803e3d6000fd5b50505050505050565b6000546040516351cff8d960e01b81523360048201526001600160a01b03909116906351cff8d990602401600060405180830381600087803b15801561031d57600080fd5b505af1158015610331573d6000803e3d6000fd5b50505050565b60015460405163d83a2bf360e01b81526000916001600160a01b03169063d83a2bf39061036c903390309087906004016104a3565b6020604051808303816000875af115801561038b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103af91906104c7565b9050806103bb57600080fd5b6001546000546040516323b872dd60e01b81526001600160a01b03928316926323b872dd926103f49233929091169087906004016104a3565b6020604051808303816000875af1158015610413573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043791906104c7565b5060005460405163d004f0f760e01b8152336004820152602481018490526001600160a01b039091169063d004f0f79034906044016102a2565b60006020828403121561048357600080fd5b5035919050565b60006020828403121561049c57600080fd5b5051919050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6000602082840312156104d957600080fd5b815180151581146104e957600080fd5b939250505056fea2646970667358221220c729f635167febceb64ec60282c719c4a42e5ed6cb82ed406d599156f6b5da1d64736f6c63430008110033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:620:37",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:37",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "74:86:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "138:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "147:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "150:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "140:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "140:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "140:12:37"
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
                            "src": "97:5:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "108:5:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "123:3:37",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "128:1:37",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "119:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "119:11:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "132:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "115:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "115:19:37"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "104:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "104:31:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "94:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "94:42:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "87:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "87:50:37"
                  },
                  "nodeType": "YulIf",
                  "src": "84:70:37"
                }
              ]
            },
            "name": "validator_revert_contract_LiquidityPool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "63:5:37",
                "type": ""
              }
            ],
            "src": "14:146:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "301:317:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "347:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "356:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "359:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "349:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "349:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "349:12:37"
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
                            "src": "322:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "331:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "318:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "318:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "343:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "314:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "314:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "311:52:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "372:29:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "391:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "385:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "385:16:37"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "376:5:37",
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
                        "src": "450:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_contract_LiquidityPool",
                      "nodeType": "YulIdentifier",
                      "src": "410:39:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "410:46:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "410:46:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "465:15:37",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "475:5:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "465:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "489:40:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "514:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "525:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "510:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "510:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "504:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "504:25:37"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "493:7:37",
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
                        "src": "578:7:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_contract_LiquidityPool",
                      "nodeType": "YulIdentifier",
                      "src": "538:39:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "538:48:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "538:48:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "595:17:37",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "605:7:37"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "595:6:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_contract$_LiquidityPool_$7011t_contract$_JMToken_$6142_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "259:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "270:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "282:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "290:6:37",
                "type": ""
              }
            ],
            "src": "165:453:37"
          }
        ]
      },
      "contents": "{\n    { }\n    function validator_revert_contract_LiquidityPool(value)\n    {\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_contract$_LiquidityPool_$7011t_contract$_JMToken_$6142_fromMemory(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        let value := mload(headStart)\n        validator_revert_contract_LiquidityPool(value)\n        value0 := value\n        let value_1 := mload(add(headStart, 32))\n        validator_revert_contract_LiquidityPool(value_1)\n        value1 := value_1\n    }\n}",
      "id": 37,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:2470:37",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:37",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "84:110:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "130:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "139:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "142:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "132:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "132:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "132:12:37"
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
                            "src": "105:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "114:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "101:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "101:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "126:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "97:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "97:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "94:52:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "155:33:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "178:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "165:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "165:23:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "155:6:37"
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
                "src": "50:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "61:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "73:6:37",
                "type": ""
              }
            ],
            "src": "14:180:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "328:175:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "338:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "350:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "361:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "346:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "346:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "338:4:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "373:29:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "391:3:37",
                            "type": "",
                            "value": "160"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "396:1:37",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "387:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "387:11:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "400:1:37",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "383:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "383:19:37"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "377:2:37",
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
                        "src": "418:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "433:6:37"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "441:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "429:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "429:15:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "411:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "411:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "411:34:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "465:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "476:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "461:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "461:18:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "485:6:37"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "493:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "481:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "481:15:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "454:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "454:43:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "454:43:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_address__to_t_address_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "289:9:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "300:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "308:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "319:4:37",
                "type": ""
              }
            ],
            "src": "199:304:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "609:102:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "619:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "631:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "642:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "627:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "627:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "619:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "661:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "676:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "692:3:37",
                                    "type": "",
                                    "value": "160"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "697:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "688:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "688:11:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "701:1:37",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "684:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "684:19:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "672:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "672:32:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "654:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "654:51:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "654:51:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "578:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "589:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "600:4:37",
                "type": ""
              }
            ],
            "src": "508:203:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "797:103:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "843:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "852:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "855:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "845:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "845:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "845:12:37"
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
                            "src": "818:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "827:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "814:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "814:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "839:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "810:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "810:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "807:52:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "868:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "884:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "878:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "878:16:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "868:6:37"
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
                "src": "763:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "774:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "786:6:37",
                "type": ""
              }
            ],
            "src": "716:184:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1079:169:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1096:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1107:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1089:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1089:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1089:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1130:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1141:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1126:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1126:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1146:2:37",
                        "type": "",
                        "value": "19"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1119:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1119:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1119:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1169:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1180:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1165:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1165:18:37"
                      },
                      {
                        "hexValue": "4e4f5f415641494c41424c455f544f4b454e53",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "1185:21:37",
                        "type": "",
                        "value": "NO_AVAILABLE_TOKENS"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1158:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1158:49:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1158:49:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1216:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1228:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1239:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1224:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1224:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1216:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_f794614507589c64e4caeb4c21a3a53766343898d684121f31df5d2a819f76dd__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1056:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1070:4:37",
                "type": ""
              }
            ],
            "src": "905:343:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1410:218:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1420:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1432:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1443:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1428:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1428:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1420:4:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1455:29:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1473:3:37",
                            "type": "",
                            "value": "160"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1478:1:37",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "1469:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1469:11:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1482:1:37",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "1465:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1465:19:37"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "1459:2:37",
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
                        "src": "1500:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1515:6:37"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "1523:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "1511:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1511:15:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1493:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1493:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1493:34:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1547:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1558:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1543:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1543:18:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "1567:6:37"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "1575:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "1563:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1563:15:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1536:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1536:43:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1536:43:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1599:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1610:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1595:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1595:18:37"
                      },
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "1615:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1588:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1588:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1588:34:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1363:9:37",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "1374:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1382:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1390:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1401:4:37",
                "type": ""
              }
            ],
            "src": "1253:375:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1711:199:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1757:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1766:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1769:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1759:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1759:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1759:12:37"
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
                            "src": "1732:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1741:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1728:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1728:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1753:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1724:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1724:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "1721:52:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1782:29:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1801:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1795:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1795:16:37"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1786:5:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1864:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1873:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1876:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1866:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1866:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1866:12:37"
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
                            "src": "1833:5:37"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "1854:5:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nodeType": "YulIdentifier",
                                  "src": "1847:6:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1847:13:37"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "1840:6:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1840:21:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "1830:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1830:32:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "1823:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1823:40:37"
                  },
                  "nodeType": "YulIf",
                  "src": "1820:60:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1889:15:37",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "1899:5:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1889:6:37"
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
                "src": "1677:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1688:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1700:6:37",
                "type": ""
              }
            ],
            "src": "1633:277:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2044:145:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2054:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2066:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2077:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2062:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2062:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2054:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2096:9:37"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2107:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2089:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2089:25:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2089:25:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2134:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2145:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2130:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2130:18:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "2154:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2170:3:37",
                                    "type": "",
                                    "value": "160"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2175:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "2166:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2166:11:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2179:1:37",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "2162:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2162:19:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "2150:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2150:32:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2123:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2123:60:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2123:60:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2005:9:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2016:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2024:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2035:4:37",
                "type": ""
              }
            ],
            "src": "1915:274:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2323:145:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2333:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2345:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2356:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2341:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2341:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2333:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2375:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2390:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2406:3:37",
                                    "type": "",
                                    "value": "160"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2411:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "2402:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2402:11:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2415:1:37",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "2398:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2398:19:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "2386:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2386:32:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2368:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2368:51:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2368:51:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2439:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2450:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2435:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2435:18:37"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "2455:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2428:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2428:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2428:34:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2284:9:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2295:6:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2303:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2314:4:37",
                "type": ""
              }
            ],
            "src": "2194:274:37"
          }
        ]
      },
      "contents": "{\n    { }\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := calldataload(headStart)\n    }\n    function abi_encode_tuple_t_address_t_address__to_t_address_t_address__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        let _1 := sub(shl(160, 1), 1)\n        mstore(headStart, and(value0, _1))\n        mstore(add(headStart, 32), and(value1, _1))\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := mload(headStart)\n    }\n    function abi_encode_tuple_t_stringliteral_f794614507589c64e4caeb4c21a3a53766343898d684121f31df5d2a819f76dd__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 19)\n        mstore(add(headStart, 64), \"NO_AVAILABLE_TOKENS\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed(headStart, value2, value1, value0) -> tail\n    {\n        tail := add(headStart, 96)\n        let _1 := sub(shl(160, 1), 1)\n        mstore(headStart, and(value0, _1))\n        mstore(add(headStart, 32), and(value1, _1))\n        mstore(add(headStart, 64), value2)\n    }\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        if iszero(eq(value, iszero(iszero(value)))) { revert(0, 0) }\n        value0 := value\n    }\n    function abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, value0)\n        mstore(add(headStart, 32), and(value1, sub(shl(160, 1), 1)))\n    }\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n        mstore(add(headStart, 32), value1)\n    }\n}",
      "id": 37,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "117:1470:26:-:0;;;199:146;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;276:13;:30;;-1:-1:-1;;;;;276:30:26;;;-1:-1:-1;;;;;;276:30:26;;;;;;;;316:22;;;;;;;;;;;117:1470;;14:146:37;-1:-1:-1;;;;;104:31:37;;94:42;;84:70;;150:1;147;140:12;84:70;14:146;:::o;165:453::-;282:6;290;343:2;331:9;322:7;318:23;314:32;311:52;;;359:1;356;349:12;311:52;391:9;385:16;410:46;450:5;410:46;:::i;:::-;525:2;510:18;;504:25;475:5;;-1:-1:-1;538:48:37;504:25;538:48;:::i;:::-;605:7;595:17;;;165:453;;;;;:::o;:::-;117:1470:26;;;;;;",
  "deployedSourceMap": "117:1470:26:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;486:550;;;;;;:::i;:::-;;:::i;:::-;;351:129;;;;;;;;;;-1:-1:-1;395:7:26;438:13;;462:9;351:129;;;-1:-1:-1;;;;;438:13:26;;;411:34:37;;462:9:26;;;;476:2:37;461:18;;454:43;351:129:26;;;;;;;;;1042:85;;;;;;;;;;;;;:::i;1133:452::-;;;;;;:::i;:::-;;:::i;486:550::-;563:9;;:31;;-1:-1:-1;;;563:31:26;;583:10;563:31;;;654:51:37;597:1:26;;-1:-1:-1;;;;;563:9:26;;:19;;627:18:37;;563:31:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:35;555:67;;;;-1:-1:-1;;;555:67:26;;1107:2:37;555:67:26;;;1089:21:37;1146:2;1126:18;;;1119:30;-1:-1:-1;;;1165:18:37;;;1158:49;1224:18;;555:67:26;;;;;;;;676:9;;:136;;-1:-1:-1;;;676:136:26;;661:12;;-1:-1:-1;;;;;676:9:26;;:35;;:136;;725:10;;766:4;;791:10;;676:136;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;661:151;;830:7;822:16;;;;;;857:9;;;900:13;857:70;;-1:-1:-1;;;857:70:26;;-1:-1:-1;;;;;857:9:26;;;;:22;;:70;;880:10;;900:13;;;;916:10;;857:70;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;938:13:26;;:63;;-1:-1:-1;;;938:63:26;;;;;2089:25:37;;;990:10:26;2130:18:37;;;2123:60;-1:-1:-1;;;;;938:13:26;;;;:21;;967:9;;2062:18:37;;938:63:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;545:491;486:550;:::o;1042:85::-;1086:13;;:34;;-1:-1:-1;;;1086:34:26;;1109:10;1086:34;;;654:51:37;-1:-1:-1;;;;;1086:13:26;;;;:22;;627:18:37;;1086:34:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1042:85::o;1133:452::-;1215:9;;:120;;-1:-1:-1;;;1215:120:26;;1200:12;;-1:-1:-1;;;;;1215:9:26;;:35;;:120;;1264:10;;1296:4;;1315:10;;1215:120;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1200:135;;1353:7;1345:16;;;;;;1438:9;;;1481:13;1438:70;;-1:-1:-1;;;1438:70:26;;-1:-1:-1;;;;;1438:9:26;;;;:22;;:70;;1461:10;;1481:13;;;;1497:10;;1438:70;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;1518:13:26;;:60;;-1:-1:-1;;;1518:60:26;;1555:10;1518:60;;;2368:51:37;2435:18;;;2428:34;;;-1:-1:-1;;;;;1518:13:26;;;;:18;;1544:9;;2341:18:37;;1518:60:26;2194:274:37;14:180;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:37;;14:180;-1:-1:-1;14:180:37:o;716:184::-;786:6;839:2;827:9;818:7;814:23;810:32;807:52;;;855:1;852;845:12;807:52;-1:-1:-1;878:16:37;;716:184;-1:-1:-1;716:184:37:o;1253:375::-;-1:-1:-1;;;;;1511:15:37;;;1493:34;;1563:15;;;;1558:2;1543:18;;1536:43;1610:2;1595:18;;1588:34;;;;1443:2;1428:18;;1253:375::o;1633:277::-;1700:6;1753:2;1741:9;1732:7;1728:23;1724:32;1721:52;;;1769:1;1766;1759:12;1721:52;1801:9;1795:16;1854:5;1847:13;1840:21;1833:5;1830:32;1820:60;;1876:1;1873;1866:12;1820:60;1899:5;1633:277;-1:-1:-1;;;1633:277:37:o",
  "source": "//SPDX-License-Identifier: Unlicense\npragma solidity ^0.8.0;\n\nimport \"./JMToken.sol\";\nimport \"./LiquidityPool.sol\";\n\ncontract JMTRouter {\n    LiquidityPool liquidityPool;\n    JMToken jonMatang;\n\n    constructor(LiquidityPool _liquidityPool, JMToken _jonMatang) \n    {\n        liquidityPool = _liquidityPool;\n        jonMatang = _jonMatang;\n    }\n\n    function _getAddress() public view returns (address, address){\n        return (address(liquidityPool), address(jonMatang));\n    }\n\n    function addLiquidity(uint256 _jmtAmount) external payable {\n        require(jonMatang.balanceOf(msg.sender) > 0, \"NO_AVAILABLE_TOKENS\"); // 토큰 보유량 체크 \n\n        bool success = jonMatang.increaseContractAllowance(\n            msg.sender, // from \n            address(this), // to\n            _jmtAmount \n        );\n        require(success);\n        \n        jonMatang.transferFrom(msg.sender, address(liquidityPool), _jmtAmount); \n        liquidityPool.deposit{value: msg.value}(_jmtAmount, msg.sender); // value:이더, token:jmt \n    }\n\n    function pullLiquidity() external {\n        liquidityPool.withdraw(msg.sender);\n    }\n\n    function swapTokens(uint256 _jmtAmount) external payable {\n        bool success = jonMatang.increaseContractAllowance(\n            msg.sender,\n            address(this),\n            _jmtAmount\n        );\n        require(success);\n\n        // 요청자의 jmttoken: 0 or 0이상 을 pool로 전송\n        jonMatang.transferFrom(msg.sender, address(liquidityPool), _jmtAmount);\n        liquidityPool.swap{value: msg.value}(msg.sender, _jmtAmount);\n    }\n}",
  "sourcePath": "/Users/rokrokss/workspace/hyein/BEB-05-JMT/contract/contracts/JMTRouter.sol",
  "ast": {
    "absolutePath": "project:/contracts/JMTRouter.sol",
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
      "JMTRouter": [
        5348
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
      "Strings": [
        4590
      ],
      "VJMToken": [
        10764
      ]
    },
    "id": 5349,
    "license": "Unlicense",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5189,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "37:23:26"
      },
      {
        "absolutePath": "project:/contracts/JMToken.sol",
        "file": "./JMToken.sol",
        "id": 5190,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 5349,
        "sourceUnit": 6143,
        "src": "62:23:26",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/contracts/LiquidityPool.sol",
        "file": "./LiquidityPool.sol",
        "id": 5191,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 5349,
        "sourceUnit": 7012,
        "src": "86:29:26",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "JMTRouter",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 5348,
        "linearizedBaseContracts": [
          5348
        ],
        "name": "JMTRouter",
        "nameLocation": "126:9:26",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5194,
            "mutability": "mutable",
            "name": "liquidityPool",
            "nameLocation": "156:13:26",
            "nodeType": "VariableDeclaration",
            "scope": 5348,
            "src": "142:27:26",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LiquidityPool_$7011",
              "typeString": "contract LiquidityPool"
            },
            "typeName": {
              "id": 5193,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 5192,
                "name": "LiquidityPool",
                "nameLocations": [
                  "142:13:26"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 7011,
                "src": "142:13:26"
              },
              "referencedDeclaration": 7011,
              "src": "142:13:26",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LiquidityPool_$7011",
                "typeString": "contract LiquidityPool"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 5197,
            "mutability": "mutable",
            "name": "jonMatang",
            "nameLocation": "183:9:26",
            "nodeType": "VariableDeclaration",
            "scope": 5348,
            "src": "175:17:26",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_JMToken_$6142",
              "typeString": "contract JMToken"
            },
            "typeName": {
              "id": 5196,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 5195,
                "name": "JMToken",
                "nameLocations": [
                  "175:7:26"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 6142,
                "src": "175:7:26"
              },
              "referencedDeclaration": 6142,
              "src": "175:7:26",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_JMToken_$6142",
                "typeString": "contract JMToken"
              }
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5214,
              "nodeType": "Block",
              "src": "266:79:26",
              "statements": [
                {
                  "expression": {
                    "id": 5208,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5206,
                      "name": "liquidityPool",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5194,
                      "src": "276:13:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LiquidityPool_$7011",
                        "typeString": "contract LiquidityPool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5207,
                      "name": "_liquidityPool",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5200,
                      "src": "292:14:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LiquidityPool_$7011",
                        "typeString": "contract LiquidityPool"
                      }
                    },
                    "src": "276:30:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LiquidityPool_$7011",
                      "typeString": "contract LiquidityPool"
                    }
                  },
                  "id": 5209,
                  "nodeType": "ExpressionStatement",
                  "src": "276:30:26"
                },
                {
                  "expression": {
                    "id": 5212,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5210,
                      "name": "jonMatang",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5197,
                      "src": "316:9:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_JMToken_$6142",
                        "typeString": "contract JMToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5211,
                      "name": "_jonMatang",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5203,
                      "src": "328:10:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_JMToken_$6142",
                        "typeString": "contract JMToken"
                      }
                    },
                    "src": "316:22:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_JMToken_$6142",
                      "typeString": "contract JMToken"
                    }
                  },
                  "id": 5213,
                  "nodeType": "ExpressionStatement",
                  "src": "316:22:26"
                }
              ]
            },
            "id": 5215,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5204,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5200,
                  "mutability": "mutable",
                  "name": "_liquidityPool",
                  "nameLocation": "225:14:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 5215,
                  "src": "211:28:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LiquidityPool_$7011",
                    "typeString": "contract LiquidityPool"
                  },
                  "typeName": {
                    "id": 5199,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5198,
                      "name": "LiquidityPool",
                      "nameLocations": [
                        "211:13:26"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7011,
                      "src": "211:13:26"
                    },
                    "referencedDeclaration": 7011,
                    "src": "211:13:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LiquidityPool_$7011",
                      "typeString": "contract LiquidityPool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5203,
                  "mutability": "mutable",
                  "name": "_jonMatang",
                  "nameLocation": "249:10:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 5215,
                  "src": "241:18:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_JMToken_$6142",
                    "typeString": "contract JMToken"
                  },
                  "typeName": {
                    "id": 5202,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5201,
                      "name": "JMToken",
                      "nameLocations": [
                        "241:7:26"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6142,
                      "src": "241:7:26"
                    },
                    "referencedDeclaration": 6142,
                    "src": "241:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_JMToken_$6142",
                      "typeString": "contract JMToken"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "210:50:26"
            },
            "returnParameters": {
              "id": 5205,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "266:0:26"
            },
            "scope": 5348,
            "src": "199:146:26",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5232,
              "nodeType": "Block",
              "src": "412:68:26",
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "arguments": [
                          {
                            "id": 5224,
                            "name": "liquidityPool",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5194,
                            "src": "438:13:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_LiquidityPool_$7011",
                              "typeString": "contract LiquidityPool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_LiquidityPool_$7011",
                              "typeString": "contract LiquidityPool"
                            }
                          ],
                          "id": 5223,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "430:7:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 5222,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "430:7:26",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 5225,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "430:22:26",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 5228,
                            "name": "jonMatang",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5197,
                            "src": "462:9:26",
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
                          "id": 5227,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "454:7:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 5226,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "454:7:26",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 5229,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "454:18:26",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "id": 5230,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "429:44:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_address_$",
                      "typeString": "tuple(address,address)"
                    }
                  },
                  "functionReturnParameters": 5221,
                  "id": 5231,
                  "nodeType": "Return",
                  "src": "422:51:26"
                }
              ]
            },
            "functionSelector": "b2ceaa01",
            "id": 5233,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getAddress",
            "nameLocation": "360:11:26",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5216,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "371:2:26"
            },
            "returnParameters": {
              "id": 5221,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5218,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 5233,
                  "src": "395:7:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5217,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "395:7:26",
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
                  "id": 5220,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 5233,
                  "src": "404:7:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5219,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "404:7:26",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "394:18:26"
            },
            "scope": 5348,
            "src": "351:129:26",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5289,
              "nodeType": "Block",
              "src": "545:491:26",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5245,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 5241,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "583:3:26",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 5242,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "587:6:26",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "583:10:26",
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
                              "id": 5239,
                              "name": "jonMatang",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5197,
                              "src": "563:9:26",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_JMToken_$6142",
                                "typeString": "contract JMToken"
                              }
                            },
                            "id": 5240,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "573:9:26",
                            "memberName": "balanceOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 1986,
                            "src": "563:19:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address) view external returns (uint256)"
                            }
                          },
                          "id": 5243,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "563:31:26",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 5244,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "597:1:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "563:35:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4e4f5f415641494c41424c455f544f4b454e53",
                        "id": 5246,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "600:21:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f794614507589c64e4caeb4c21a3a53766343898d684121f31df5d2a819f76dd",
                          "typeString": "literal_string \"NO_AVAILABLE_TOKENS\""
                        },
                        "value": "NO_AVAILABLE_TOKENS"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f794614507589c64e4caeb4c21a3a53766343898d684121f31df5d2a819f76dd",
                          "typeString": "literal_string \"NO_AVAILABLE_TOKENS\""
                        }
                      ],
                      "id": 5238,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "555:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 5247,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "555:67:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5248,
                  "nodeType": "ExpressionStatement",
                  "src": "555:67:26"
                },
                {
                  "assignments": [
                    5250
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5250,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "666:7:26",
                      "nodeType": "VariableDeclaration",
                      "scope": 5289,
                      "src": "661:12:26",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 5249,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "661:4:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5261,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 5253,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "725:3:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5254,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "729:6:26",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "725:10:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 5257,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "766:4:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_JMTRouter_$5348",
                              "typeString": "contract JMTRouter"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_JMTRouter_$5348",
                              "typeString": "contract JMTRouter"
                            }
                          ],
                          "id": 5256,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "758:7:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 5255,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "758:7:26",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 5258,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "758:13:26",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 5259,
                        "name": "_jmtAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5235,
                        "src": "791:10:26",
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
                        "id": 5251,
                        "name": "jonMatang",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5197,
                        "src": "676:9:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JMToken_$6142",
                          "typeString": "contract JMToken"
                        }
                      },
                      "id": 5252,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "686:25:26",
                      "memberName": "increaseContractAllowance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5949,
                      "src": "676:35:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 5260,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "676:136:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "661:151:26"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 5263,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5250,
                        "src": "830:7:26",
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
                      "id": 5262,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "822:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5264,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "822:16:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5265,
                  "nodeType": "ExpressionStatement",
                  "src": "822:16:26"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 5269,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "880:3:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5270,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "884:6:26",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "880:10:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 5273,
                            "name": "liquidityPool",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5194,
                            "src": "900:13:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_LiquidityPool_$7011",
                              "typeString": "contract LiquidityPool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_LiquidityPool_$7011",
                              "typeString": "contract LiquidityPool"
                            }
                          ],
                          "id": 5272,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "892:7:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 5271,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "892:7:26",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 5274,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "892:22:26",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 5275,
                        "name": "_jmtAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5235,
                        "src": "916:10:26",
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
                        "id": 5266,
                        "name": "jonMatang",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5197,
                        "src": "857:9:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JMToken_$6142",
                          "typeString": "contract JMToken"
                        }
                      },
                      "id": 5268,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "867:12:26",
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2087,
                      "src": "857:22:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 5276,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "857:70:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5277,
                  "nodeType": "ExpressionStatement",
                  "src": "857:70:26"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 5284,
                        "name": "_jmtAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5235,
                        "src": "978:10:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 5285,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "990:3:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5286,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "994:6:26",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "990:10:26",
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
                          "id": 5278,
                          "name": "liquidityPool",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5194,
                          "src": "938:13:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_LiquidityPool_$7011",
                            "typeString": "contract LiquidityPool"
                          }
                        },
                        "id": 5280,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "952:7:26",
                        "memberName": "deposit",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6712,
                        "src": "938:21:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_payable$_t_uint256_$_t_address_$returns$__$",
                          "typeString": "function (uint256,address) payable external"
                        }
                      },
                      "id": 5283,
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
                          "expression": {
                            "id": 5281,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "967:3:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 5282,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "971:5:26",
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "src": "967:9:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "938:39:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_payable$_t_uint256_$_t_address_$returns$__$value",
                        "typeString": "function (uint256,address) payable external"
                      }
                    },
                    "id": 5287,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "938:63:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5288,
                  "nodeType": "ExpressionStatement",
                  "src": "938:63:26"
                }
              ]
            },
            "functionSelector": "51c6590a",
            "id": 5290,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addLiquidity",
            "nameLocation": "495:12:26",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5236,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5235,
                  "mutability": "mutable",
                  "name": "_jmtAmount",
                  "nameLocation": "516:10:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 5290,
                  "src": "508:18:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5234,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "508:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "507:20:26"
            },
            "returnParameters": {
              "id": 5237,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "545:0:26"
            },
            "scope": 5348,
            "src": "486:550:26",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 5300,
              "nodeType": "Block",
              "src": "1076:51:26",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 5296,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1109:3:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5297,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1113:6:26",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1109:10:26",
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
                        "id": 5293,
                        "name": "liquidityPool",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5194,
                        "src": "1086:13:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LiquidityPool_$7011",
                          "typeString": "contract LiquidityPool"
                        }
                      },
                      "id": 5295,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1100:8:26",
                      "memberName": "withdraw",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6846,
                      "src": "1086:22:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address) external"
                      }
                    },
                    "id": 5298,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1086:34:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5299,
                  "nodeType": "ExpressionStatement",
                  "src": "1086:34:26"
                }
              ]
            },
            "functionSelector": "f8e35be7",
            "id": 5301,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pullLiquidity",
            "nameLocation": "1051:13:26",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5291,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1064:2:26"
            },
            "returnParameters": {
              "id": 5292,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1076:0:26"
            },
            "scope": 5348,
            "src": "1042:85:26",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 5346,
              "nodeType": "Block",
              "src": "1190:395:26",
              "statements": [
                {
                  "assignments": [
                    5307
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5307,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "1205:7:26",
                      "nodeType": "VariableDeclaration",
                      "scope": 5346,
                      "src": "1200:12:26",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 5306,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "1200:4:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5318,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 5310,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1264:3:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5311,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1268:6:26",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1264:10:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 5314,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "1296:4:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_JMTRouter_$5348",
                              "typeString": "contract JMTRouter"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_JMTRouter_$5348",
                              "typeString": "contract JMTRouter"
                            }
                          ],
                          "id": 5313,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1288:7:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 5312,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1288:7:26",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 5315,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1288:13:26",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 5316,
                        "name": "_jmtAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5303,
                        "src": "1315:10:26",
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
                        "id": 5308,
                        "name": "jonMatang",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5197,
                        "src": "1215:9:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JMToken_$6142",
                          "typeString": "contract JMToken"
                        }
                      },
                      "id": 5309,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1225:25:26",
                      "memberName": "increaseContractAllowance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5949,
                      "src": "1215:35:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 5317,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1215:120:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1200:135:26"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 5320,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5307,
                        "src": "1353:7:26",
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
                      "id": 5319,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1345:7:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5321,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1345:16:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5322,
                  "nodeType": "ExpressionStatement",
                  "src": "1345:16:26"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 5326,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1461:3:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5327,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1465:6:26",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1461:10:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 5330,
                            "name": "liquidityPool",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5194,
                            "src": "1481:13:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_LiquidityPool_$7011",
                              "typeString": "contract LiquidityPool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_LiquidityPool_$7011",
                              "typeString": "contract LiquidityPool"
                            }
                          ],
                          "id": 5329,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1473:7:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 5328,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1473:7:26",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 5331,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1473:22:26",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 5332,
                        "name": "_jmtAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5303,
                        "src": "1497:10:26",
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
                        "id": 5323,
                        "name": "jonMatang",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5197,
                        "src": "1438:9:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JMToken_$6142",
                          "typeString": "contract JMToken"
                        }
                      },
                      "id": 5325,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1448:12:26",
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2087,
                      "src": "1438:22:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 5333,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1438:70:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5334,
                  "nodeType": "ExpressionStatement",
                  "src": "1438:70:26"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 5341,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1555:3:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5342,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1559:6:26",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1555:10:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 5343,
                        "name": "_jmtAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5303,
                        "src": "1567:10:26",
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
                          "id": 5335,
                          "name": "liquidityPool",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5194,
                          "src": "1518:13:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_LiquidityPool_$7011",
                            "typeString": "contract LiquidityPool"
                          }
                        },
                        "id": 5337,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1532:4:26",
                        "memberName": "swap",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6580,
                        "src": "1518:18:26",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_payable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256) payable external"
                        }
                      },
                      "id": 5340,
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
                          "expression": {
                            "id": 5338,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "1544:3:26",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 5339,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1548:5:26",
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "src": "1544:9:26",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "1518:36:26",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_payable$_t_address_$_t_uint256_$returns$__$value",
                        "typeString": "function (address,uint256) payable external"
                      }
                    },
                    "id": 5344,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1518:60:26",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5345,
                  "nodeType": "ExpressionStatement",
                  "src": "1518:60:26"
                }
              ]
            },
            "functionSelector": "fe784eaa",
            "id": 5347,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "swapTokens",
            "nameLocation": "1142:10:26",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5304,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5303,
                  "mutability": "mutable",
                  "name": "_jmtAmount",
                  "nameLocation": "1161:10:26",
                  "nodeType": "VariableDeclaration",
                  "scope": 5347,
                  "src": "1153:18:26",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5302,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1153:7:26",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1152:20:26"
            },
            "returnParameters": {
              "id": 5305,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1190:0:26"
            },
            "scope": 5348,
            "src": "1133:452:26",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 5349,
        "src": "117:1470:26",
        "usedErrors": []
      }
    ],
    "src": "37:1550:26"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.17+commit.8df45f5f.Emscripten.clang"
  },
  "networks": {
    "80001": {
      "events": {},
      "links": {},
      "address": "0xaeC1BD7E344d1f2092188C406a2287C6a447161d",
      "transactionHash": "0x2e859678f43d11121bb80ffd6d9a4e9adb2ee10bf34d4fc63cde5a4d2f399732"
    }
  },
  "schemaVersion": "3.4.10",
  "updatedAt": "2022-09-27T04:27:20.028Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}
module.exports = ROUTER;
