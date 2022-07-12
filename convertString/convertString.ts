export function convertString(s: string, t: string): boolean {
  let word = "";
  let tIndex = 0;
  const sChars = s.split("");

  for (let i = 0; i < sChars.length; i++) {
    if (s[i] === t[tIndex]) {
      word = word.concat(s[i]);
      tIndex++;

      if (word === t) {
        return true;
      }
    }
  }

  return false;
}

console.log(convertString("ceoydefthf5iyg5h5yts", "codefights"));
console.log(convertString("addbyca", "abcd"));
