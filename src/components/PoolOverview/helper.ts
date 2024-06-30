export enum GraphOptions {
  volume = "volume",
  tvl = "tvl",
  crossbook = "crossbook",
  counterpart = "counterpart"
}

export enum TradeOptions {
  add = "add",
  remove = "remove"
}

// To be removed
export const generateRandomData = (
  startDate: string,
  days: number,
  minValue: number,
  maxValue: number
) => {
  const data = [];
  let currentDate = new Date(startDate);

  for (let i = 0; i < days; i++) {
    const value = (Math.random() * (maxValue - minValue) + minValue).toFixed(2);
    data.push({
      time: currentDate.toISOString().split("T")[0],
      value: parseFloat(value)
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  console.log("data for chart", data);

  return data;
};

export type Timeseries = {
  CL: string;
  R: string;
  pool: string;
  timestamp: number;
};

// Function to convert timestamp to yyyy-mm-dd format
export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Function to remove duplicate dates and keep the last object for each date
export const removeDuplicateDates = (data: { time: string; value: number }[]) => {
  const dateMap = new Map<string, { time: string; value: number }>();

  data.forEach((item) => {
    dateMap.set(item.time, item);
  });

  return Array.from(dateMap.values());
};

// Function to transform timeseries data
export const transformTimeseries = (timeseries: Timeseries[]) => {
  console.log("timeseries", timeseries);

  const _array1 = timeseries?.map((item) => ({
    time: formatDate(item.timestamp),
    value: parseFloat(item.R)
  }));

  const _array2 = timeseries?.map((item) => ({
    time: formatDate(item.timestamp),
    value: parseFloat(item.CL)
  }));

  const array1 = removeDuplicateDates(_array1);
  const array2 = removeDuplicateDates(_array2);

  return { array1, array2 };
};
