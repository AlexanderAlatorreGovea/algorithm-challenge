export function chunkyMonkey(arr: any[], size: number): any[][] {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr.slice(i, size + i));
  }

  return newArray;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
