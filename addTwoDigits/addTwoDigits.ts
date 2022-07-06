export function addTwoDigits(n: any): number {
  if (n.length === 1) return n;

  let sum = 0;
  const numbers = n.toString().split('')

  for (let i = 0; i < numbers.length; i++) {
      sum += +numbers[i]
  }

  return sum;
}

console.log(addTwoDigits(29));
