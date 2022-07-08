export function arrayMaxConsecutiveSum(
  inputArray: number[],
  k: number
): number {
  let maxNumber = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (!inputArray[i + 1]) break;
    const num = inputArray[i] + inputArray[i + 1];

    maxNumber.push(num);
  }

  return maxNumber.sort((a, b) => a - b)[maxNumber.length - 1];
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
