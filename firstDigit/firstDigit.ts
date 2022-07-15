export function firstDigit(inputString: string): string {
  const maybeNumbers = inputString.split("");
  const newArray = [];

  for (let i = 0; i < maybeNumbers.length; i++) {
    const element = +maybeNumbers[i];

    if (!isNaN(element)) {
      newArray.push(element);
    }
  }

  return newArray[0];
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
