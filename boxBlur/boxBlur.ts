export function boxBlur(image: number[][]): number[][] {
  const newArray = [];
  let sum = 0;

  for (let index = 0; index < image.length; index++) {
    for (let j = 0; j < image[index].length; j++) {
      sum += image[index][j];
    }
  }

  sum = Math.floor(sum / 9);

  newArray.push([sum]);

  return newArray;
}

console.log(
  boxBlur([
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1],
  ])
);
