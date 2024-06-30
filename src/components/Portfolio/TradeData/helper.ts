import { Tx } from "@lib/types/portfolio";

export function getLatestTransactions(transactions: Tx[]): Tx[] {
  let latestLongTx: Tx | null = null;
  let latestShortTx: Tx | null = null;

  for (const tx of transactions) {
    if (
      tx.action === "Open Long Position" &&
      (!latestLongTx || Number(tx.dateTime) > Number(latestLongTx.dateTime))
    ) {
      latestLongTx = tx;
    } else if (
      tx.action === "Open Short Position" &&
      (!latestShortTx || Number(tx.dateTime) > Number(latestShortTx.dateTime))
    ) {
      latestShortTx = tx;
    }
  }

  return [latestLongTx, latestShortTx].filter((tx) => tx !== null) as Tx[];
}

function getLatestTransactionsByPool(transactions: Tx[]): Tx[] {
  const latestLongTxByPool: Record<string, Tx> = {};
  const latestShortTxByPool: Record<string, Tx> = {};

  for (const tx of transactions) {
    if (tx.action === "Open Long Position") {
      if (
        !latestLongTxByPool[tx.pool] ||
        Number(tx.dateTime) > Number(latestLongTxByPool[tx.pool].dateTime)
      ) {
        latestLongTxByPool[tx.pool] = tx;
      }
    } else if (tx.action === "Open Short Position") {
      if (
        !latestShortTxByPool[tx.pool] ||
        Number(tx.dateTime) > Number(latestShortTxByPool[tx.pool].dateTime)
      ) {
        latestShortTxByPool[tx.pool] = tx;
      }
    }
  }

  return [...Object.values(latestLongTxByPool), ...Object.values(latestShortTxByPool)];
}

export function getDateTime(blockTimestamp: string) {
  const dateObj = new Date(parseInt(blockTimestamp) * 1000);

  // Get date components
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1; // Months are zero-indexed, so add 1
  const year = dateObj.getFullYear();

  // Get time components
  const hours = dateObj.getHours().toString().padStart(2, "0"); // Ensure two digits
  const minutes = dateObj.getMinutes().toString().padStart(2, "0"); // Ensure two digits

  // Format date and time strings
  const formattedDate = `${day}/${month}/${year}`;
  const formattedTime = `${hours}:${minutes}`;

  return {
    date: formattedDate,
    time: formattedTime
  };
}

// dummy List of user's open positions
// export const openPositionsData: OpenPositionType[] = [
//   {
//     assets: [
//       {
//         symbol: "WETH",
//         imgSrc: "/icons/ethereum.svg"
//       },
//       {
//         symbol: "ROME",
//         imgSrc: "/icons/rome.svg"
//       }
//     ],
//     power: 4,
//     protocol: "Potentia V1",
//     date: "21/07/2024",
//     time: "00:45",
//     size: "75000000",
//     value: "75000000",
//     pnl: "1500000",
//     return: "31.02"
//   },
//   {
//     assets: [
//       {
//         symbol: "WETH",
//         imgSrc: "/icons/ethereum.svg"
//       },
//       {
//         symbol: "ROME",
//         imgSrc: "/icons/rome.svg"
//       }
//     ],
//     power: 4,
//     protocol: "Potentia V1",
//     date: "21/07/2024",
//     time: "00:45",
//     size: "75000000",
//     value: "75000000",
//     pnl: "1500000",
//     return: "31.02"
//   },
//   {
//     assets: [
//       {
//         symbol: "WETH",
//         imgSrc: "/icons/ethereum.svg"
//       },
//       {
//         symbol: "ROME",
//         imgSrc: "/icons/rome.svg"
//       }
//     ],
//     power: 4,
//     protocol: "Potentia V1",
//     date: "21/07/2024",
//     time: "00:45",
//     size: "75000000",
//     value: "75000000",
//     pnl: "1500000",
//     return: "31.02"
//   },
//   {
//     assets: [
//       {
//         symbol: "WETH",
//         imgSrc: "/icons/ethereum.svg"
//       },
//       {
//         symbol: "ROME",
//         imgSrc: "/icons/rome.svg"
//       }
//     ],
//     power: 4,
//     protocol: "Potentia V1",
//     date: "21/07/2024",
//     time: "00:45",
//     size: "75000000",
//     value: "75000000",
//     pnl: "1500000",
//     return: "31.02"
//   }
// ];

// export const transactionsHistoryData: OpenPositionType[] = [
//   {
//     assets: [
//       {
//         symbol: "WETH",
//         imgSrc: "/icons/ethereum.svg"
//       },
//       {
//         symbol: "ROME",
//         imgSrc: "/icons/rome.svg"
//       }
//     ],
//     power: 4,
//     protocol: "Potentia V1",
//     date: "21/07/2024",
//     time: "00:45",
//     size: "75000000",
//     value: "75000000",
//     pnl: "1500000",
//     return: "31.02"
//   },
//   {
//     assets: [
//       {
//         symbol: "WETH",
//         imgSrc: "/icons/ethereum.svg"
//       },
//       {
//         symbol: "ROME",
//         imgSrc: "/icons/rome.svg"
//       }
//     ],
//     power: 4,
//     protocol: "Potentia V1",
//     date: "21/07/2024",
//     time: "00:45",
//     size: "75000000",
//     value: "75000000",
//     pnl: "1500000",
//     return: "31.02"
//   },
//   {
//     assets: [
//       {
//         symbol: "WETH",
//         imgSrc: "/icons/ethereum.svg"
//       },
//       {
//         symbol: "ROME",
//         imgSrc: "/icons/rome.svg"
//       }
//     ],
//     power: 4,
//     protocol: "Potentia V1",
//     date: "21/07/2024",
//     time: "00:45",
//     size: "75000000",
//     value: "75000000",
//     pnl: "1500000",
//     return: "31.02"
//   },
//   {
//     assets: [
//       {
//         symbol: "WETH",
//         imgSrc: "/icons/ethereum.svg"
//       },
//       {
//         symbol: "ROME",
//         imgSrc: "/icons/rome.svg"
//       }
//     ],
//     power: 4,
//     protocol: "Potentia V1",
//     date: "21/07/2024",
//     time: "00:45",
//     size: "75000000",
//     value: "75000000",
//     pnl: "1500000",
//     return: "31.02"
//   }
// ];
