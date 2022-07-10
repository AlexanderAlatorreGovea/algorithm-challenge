export function circleOfNumbers(n: number, firstNumber: number): number {
  const midPoint = n / 2;
  const position = firstNumber + midPoint
 
  return Math.ceil(position);
} 

console.log(circleOfNumbers(9, 3));
