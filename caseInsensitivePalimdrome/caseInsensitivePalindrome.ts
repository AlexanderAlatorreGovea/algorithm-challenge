export function isCaseInsensitivePalindrome(inputString: string): boolean {
  let palindrome = "";

  for (let char of inputString) {
    palindrome = char + palindrome;
  }

  return palindrome.toLowerCase() === inputString.toLowerCase();
}

console.log(isCaseInsensitivePalindrome("AaBaa"));
console.log(isCaseInsensitivePalindrome("abac"));
