export function commonCharacterCount(s1: string, s2: string): number {
  const firstString = createKeyValuePair(s1);
  const secondString = createKeyValuePair(s2);
  let numbersInCommon = 0;

  for (let char in firstString) {
    if (secondString[char]) {
      const firstNumberToAdd =
        firstString[char] > secondString[char]
          ? secondString[char]
          : firstString[char];

      numbersInCommon += firstNumberToAdd;
    }
  }

  return numbersInCommon;
}

function createKeyValuePair(string) {
  const chars = {};

  for (let char of string) {
    if (!chars[char]) {
      chars[char] = 1;
      continue
    }

    chars[char]++;
  }

  return chars;
}

console.log(commonCharacterCount("aabcc", "adcaa"));
