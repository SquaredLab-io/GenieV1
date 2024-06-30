export function isEmpty(input: string | number): boolean {
  if (input === "" || input === "0" || input === 0) {
    return true;
  }
  return false;
}

export function isValidPositive(num: string): boolean {
  // Regex for Whole Numbers. x => {x: [0, ]}
  const reg = /^(100|[1-9]?\d)$/;
  return reg.test(num);
}

export function isValidPositiveNumber(num: string): boolean {
  // Regex for Positive Numbers greater than 0, including decimals
  const reg = /^(?!0(\.0+)?$)\d+(\.\d+)?$/;
  return reg.test(num);
}
