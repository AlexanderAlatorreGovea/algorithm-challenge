export function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  const newArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) {
      newArray.push(substitutionElem);
      continue
    }

    newArray.push(inputArray[i]);
  }

  return newArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));
