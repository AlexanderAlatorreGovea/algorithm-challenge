export function characterParity(symbol: string): string {
  const maybeInteger = parseInt(symbol);
 
  if (isNaN(maybeInteger)) return "not a digit";

  if (maybeInteger % 2) return "even";

  return "odd";
}

console.log(characterParity("5"));
console.log(characterParity("8"));
console.log(characterParity("q"));
