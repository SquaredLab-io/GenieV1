import { ChangeEvent, SetStateAction } from "react";
import { isValidPositive } from "./checkVadility";

/**
 *
 * @param event HTML Input event
 * @param setValue Function to update the value
 */
export function sliderValueHandler(
  event: ChangeEvent<HTMLInputElement>,
  setValue: (value: SetStateAction<number[]>) => void
): void {
  const input = event.target.value;
  // Value: A positive and not an invalid whole number
  const isValid = (isValidPositive(input) && !isNaN(parseFloat(input))) || input === "";
  if (isValid) {
    setValue([parseFloat(input)]);
  }
}
