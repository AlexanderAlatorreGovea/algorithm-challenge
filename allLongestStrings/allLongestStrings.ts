export function allLongestStrings(inputArray: string[]): string[] {
  if (inputArray.length === 1) return inputArray;
  
  let longestValue = inputArray[0];
  const longestStrings = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longestValue.length) {
      longestValue = inputArray[i];
    }

    if (longestValue.length === inputArray[i].length) {
      longestStrings.push(inputArray[i]);
    }
  }

  return longestStrings;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
