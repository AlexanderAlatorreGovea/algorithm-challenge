function generateKeyValuePair(array) {
  const obj = {};
  for (let num of array) {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num]++;
    }
  }

  return obj;
}

export function containsDuplicates(a: number[]): boolean {
  const arrayAsObject = generateKeyValuePair(a);

  for (let character in arrayAsObject) {
    if (arrayAsObject[character] > 1) {
      return true;
    }
  }

  return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1, 1]));
