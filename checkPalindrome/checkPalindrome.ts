export function checkPalindrome(inputString: string): boolean {
  let reversed = "";

  for (let char of inputString) {
    reversed = char + reversed;
  }

  return reversed === inputString;
}

console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abac"));
console.log(checkPalindrome("a"));
