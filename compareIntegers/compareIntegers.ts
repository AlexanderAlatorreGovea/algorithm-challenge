export function compareIntegers(a: string, b: string): string {
  const less = "less";
  const greater = "greater";
  const equal = "equal";

  if (a < b) return less;
  
  if (b < a) return greater;

  return equal;
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));
