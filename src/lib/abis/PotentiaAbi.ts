export const PotentiaAbi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "poolInit",
        type: "tuple",
        internalType: "struct PotentiaPoolInit",
        components: [
          {
            name: "underlying",
            type: "address",
            internalType: "address"
          },
          {
            name: "power",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "alpha",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "beta",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "adjustRate",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "operator",
            type: "address",
            internalType: "address"
          }
        ]
      }
    ],
    stateMutability: "payable"
  },
  {
    type: "function",
    name: "_calculateFunding",
    inputs: [
      {
        name: "phi",
        type: "uint256",
        internalType: "UD60x18"
      },
      {
        name: "psi",
        type: "uint256",
        internalType: "UD60x18"
      },
      {
        name: "dt",
        type: "uint256",
        internalType: "UD60x18"
      },
      {
        name: "h",
        type: "uint256",
        internalType: "UD60x18"
      }
    ],
    outputs: [
      {
        name: "newPhi",
        type: "uint256",
        internalType: "UD60x18"
      },
      {
        name: "newPsi",
        type: "uint256",
        internalType: "UD60x18"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "addLiquidity",
    inputs: [
      {
        name: "_amount",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "adjustPeriod",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "UD60x18"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "alpha",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "beta",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "closePosition",
    inputs: [
      {
        name: "shares",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "isLong",
        type: "bool",
        internalType: "bool"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getX",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "UD60x18"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "initLongQty",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "UD60x18"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "initShortQty",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "UD60x18"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "initializePool",
    inputs: [
      {
        name: "_initialLiq",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "k",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "lastAdjustment",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "UD60x18"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "lastFundingBlock",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "UD60x18"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "liquidity",
    inputs: [
      {
        name: "x",
        type: "uint256",
        internalType: "UD60x18"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "UD60x18"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "longCondition",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "UD60x18"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "longPayoff",
    inputs: [
      {
        name: "x",
        type: "uint256",
        internalType: "UD60x18"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "UD60x18"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "nR",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "UD60x18"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "onERC1155BatchReceived",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      },
      {
        name: "",
        type: "address",
        internalType: "address"
      },
      {
        name: "",
        type: "uint256[]",
        internalType: "uint256[]"
      },
      {
        name: "",
        type: "uint256[]",
        internalType: "uint256[]"
      },
      {
        name: "",
        type: "bytes",
        internalType: "bytes"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bytes4",
        internalType: "bytes4"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "onERC1155Received",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      },
      {
        name: "",
        type: "address",
        internalType: "address"
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "",
        type: "bytes",
        internalType: "bytes"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bytes4",
        internalType: "bytes4"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "openPosition",
    inputs: [
      {
        name: "amt",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "isLong",
        type: "bool",
        internalType: "bool"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "oraclePrice",
    inputs: [],
    outputs: [
      {
        name: "p",
        type: "uint256",
        internalType: "UD60x18"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "pTokens",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract PTokens"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "priceRefAdjusted",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "UD60x18"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "removeLiquidity",
    inputs: [
      {
        name: "_shares",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "reserve",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "shortCondition",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "UD60x18"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "shortPayoff",
    inputs: [
      {
        name: "x",
        type: "uint256",
        internalType: "UD60x18"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "UD60x18"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
        internalType: "bytes4"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "underlying",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IERC20Decimals"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "underlyingPrecision",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "event",
    name: "AddLiquidity",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "lpAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "x",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "pool",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "CloseLong",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "longAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "redeemedAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "x",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "pool",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "CloseShort",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "shortAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "redeemedAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "x",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "pool",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "FundingApplied",
    inputs: [
      {
        name: "phi",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "psi",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "x",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "dt",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "h",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "LongPayoffAdjusted",
    inputs: [
      {
        name: "alpha",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "OpenLong",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "longAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "x",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "R",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "alpha",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "beta",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "pool",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "OpenShort",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "shortAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "x",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "R",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "alpha",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "beta",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "pool",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "RemoveLiquidity",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "shares",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "redeemedAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "x",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "pool",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ShortPayoffAdjusted",
    inputs: [
      {
        name: "beta",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "error",
    name: "AddressEmptyCode",
    inputs: [
      {
        name: "target",
        type: "address",
        internalType: "address"
      }
    ]
  },
  {
    type: "error",
    name: "AddressInsufficientBalance",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address"
      }
    ]
  },
  {
    type: "error",
    name: "FailedInnerCall",
    inputs: []
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address"
      }
    ]
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address"
      }
    ]
  },
  {
    type: "error",
    name: "PRBMath_MulDiv18_Overflow",
    inputs: [
      {
        name: "x",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "y",
        type: "uint256",
        internalType: "uint256"
      }
    ]
  },
  {
    type: "error",
    name: "PRBMath_MulDiv_Overflow",
    inputs: [
      {
        name: "x",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "y",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "denominator",
        type: "uint256",
        internalType: "uint256"
      }
    ]
  },
  {
    type: "error",
    name: "PRBMath_SD59x18_Abs_MinSD59x18",
    inputs: []
  },
  {
    type: "error",
    name: "PRBMath_SD59x18_IntoUD60x18_Underflow",
    inputs: [
      {
        name: "x",
        type: "int256",
        internalType: "SD59x18"
      }
    ]
  },
  {
    type: "error",
    name: "PRBMath_UD60x18_Exp2_InputTooBig",
    inputs: [
      {
        name: "x",
        type: "uint256",
        internalType: "UD60x18"
      }
    ]
  },
  {
    type: "error",
    name: "PRBMath_UD60x18_IntoSD59x18_Overflow",
    inputs: [
      {
        name: "x",
        type: "uint256",
        internalType: "UD60x18"
      }
    ]
  },
  {
    type: "error",
    name: "PRBMath_UD60x18_Log_InputTooSmall",
    inputs: [
      {
        name: "x",
        type: "uint256",
        internalType: "UD60x18"
      }
    ]
  },
  {
    type: "error",
    name: "PRBMath_UD60x18_Sqrt_Overflow",
    inputs: [
      {
        name: "x",
        type: "uint256",
        internalType: "UD60x18"
      }
    ]
  },
  {
    type: "error",
    name: "PoolAlreadyInitialized",
    inputs: []
  },
  {
    type: "error",
    name: "PoolUninitialized",
    inputs: []
  },
  {
    type: "error",
    name: "RedeemAmtGtReserve",
    inputs: []
  },
  {
    type: "error",
    name: "ReentrancyGuardReentrantCall",
    inputs: []
  },
  {
    type: "error",
    name: "SafeERC20FailedOperation",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address"
      }
    ]
  },
  {
    type: "error",
    name: "ZeroAmt",
    inputs: []
  }
];
