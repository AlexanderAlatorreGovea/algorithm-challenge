export function integerToStringOfFixedWidth(
  number: number,
  width: number
): string {
  const stringifiedNumber = number.toString();
  const lastDigit = +stringifiedNumber[stringifiedNumber.length - 1];

  if (lastDigit < width) {
    return "0" + stringifiedNumber;
  }

  if (lastDigit === width) return stringifiedNumber;

  return stringifiedNumber.slice(width);
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
