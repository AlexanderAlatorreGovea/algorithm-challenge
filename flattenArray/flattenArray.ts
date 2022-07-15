export function flattenArray(array: any[]): any[] {
  const flattenedArray = [];

  flatten(array);

  function flatten(arr) {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];

      if (!Array.isArray(element)) {
        flattenedArray.push(element);
      } else {
        flatten(element);
      }
    }
  }

  return flattenedArray;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
