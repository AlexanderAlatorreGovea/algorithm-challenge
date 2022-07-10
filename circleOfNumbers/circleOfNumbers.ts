export function circleOfNumbers(n: number, firstNumber: number): number {
  const midPoint = n / 2;
  const position = firstNumber + midPoint;
  const roundedUpNum = Math.ceil(position);

  if (firstNumber < midPoint) {
    return roundedUpNum;
  }

  return Math.abs(Math.ceil(midPoint - firstNumber));
}

console.log(circleOfNumbers(9, 2));
