export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let maximumValue = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (!inputArray[i + 1]) break;
    maximumValue = Math.abs(inputArray[i] - inputArray[i + 1]);
  }

  return Math.abs(maximumValue);
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
