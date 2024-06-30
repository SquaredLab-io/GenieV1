import { Abi } from "viem";

export const balanceOfAbi: Abi = [
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        /**
         * Account Address of which you need balance
         */
        name: "account",
        type: "address",
        internalType: "address"
      },
      {
        /**```
          0 -> LP Tokens
          1 -> Long Tokens
          2 -> Short Tokens
        ```*/
        name: "id",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  }
];
