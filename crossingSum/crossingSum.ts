export function crossingSum(matrix: number[][], a: number, b: number): number {
  let rowSum = 0;

  for (let i = 0; i < matrix[a].length; i++) {
    rowSum += matrix[a][i];
  }

  for (let i = 0; i < matrix.length; i++) {
    if (i !== a) {
      rowSum += matrix[i][b];
    }
  }

  return rowSum;
}

console.log(
  crossingSum(
    [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3],
    ],
    1,
    3
  )
);
