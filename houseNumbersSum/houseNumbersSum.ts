export function houseNumbersSum(inputArray: number[]): number {
  let sum = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] !== 0) {
      sum += inputArray[i];
    } else {
      sum = 0;
    }
  }

  return sum;
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
