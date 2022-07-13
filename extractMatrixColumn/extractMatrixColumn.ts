export function extractMatrixColumn(
  matrix: number[][],
  column: number
): number[] {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][column] || matrix[i][column] === 0) {
      result.push(matrix[i][column]);
    }
  }

  return result;
}

console.log(
  extractMatrixColumn(
    [
      [1, 1, 1, 2],
      [0, 5, 0, 4],
      [2, 1, 3, 6],
    ],
    2
  )
);
