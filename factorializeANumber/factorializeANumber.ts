export function factorializeANumber(num: number): number {
  let sum = 1;

  for (let i = 1; i < num + 1; i++) {
    sum *= i;
  }

  return sum;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));
