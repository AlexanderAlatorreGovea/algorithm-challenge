export function firstNotRepeatingCharacter(s: string): string {
  const chars = {};
  let firstRepeatingChar = "";

  for (let char of s) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }

  for (const char in chars) {
    if (chars[char] === 1) {
      firstRepeatingChar = char;
      break;
    }
  }

  return firstRepeatingChar || "_";
}

console.log(firstNotRepeatingCharacter("abacabad"));
console.log(firstNotRepeatingCharacter("abacabaabacaba"));
