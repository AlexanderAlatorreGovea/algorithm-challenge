export function differentSymbolsNaive(s: string): number {
  let repeatedNumbers = [];
  
  for (let i = 0; i < s.length; i++) {
    if (!repeatedNumbers.includes(s[i])) {
      repeatedNumbers.push(s[i]);
    }
  }

  return repeatedNumbers.length;
}

console.log(differentSymbolsNaive("cabca"));
