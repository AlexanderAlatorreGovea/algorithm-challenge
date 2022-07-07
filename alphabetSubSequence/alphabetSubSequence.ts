export function alphabetSubsequence(s: string): boolean {
  const chars = s.split("");
  const charValues = [];

  chars.forEach((char, i) => {
    charValues.push(char.charCodeAt(0));
  });

  //checks for duplicates and the size to see if they are the
  //same length
  if (new Set(charValues).size !== charValues.length) {
    return false;
  }

  for (let i = 0; i < charValues.length; i++) {
    //check if the letters before were bigger than the values
    //afterwards return false
    if (charValues[i] >= charValues[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
