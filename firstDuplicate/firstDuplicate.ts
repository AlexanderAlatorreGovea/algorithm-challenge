export function firstDuplicate(a: number[]): number {
  const sortedArray = a.sort((a, b) => a - b);
  const newArray = [];

  for (let index = 0; index < sortedArray.length; index++) {
    const element = sortedArray[index];
    const nextElement = sortedArray[index + 1];

    if (nextElement === undefined) {
      break;
    }

    if (element === nextElement) {
      newArray.push(element);
    }
  }

  return newArray[0] || -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
