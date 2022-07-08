export function arrayPreviousLess(items: number[]): number[] {
  const newArray = [];
  for (let index = 0; index < items.length; index++) {
    const element = items[index];

    if (element < items[index + 1] && element) {
      newArray.push(element);
    } else {
      newArray.push(-1);
    }
  }

  return newArray
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
