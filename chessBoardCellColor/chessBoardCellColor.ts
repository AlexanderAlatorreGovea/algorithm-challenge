export function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const board = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
  };

  const cellX = board[cell1[0]];
  const cellY = parseInt(cell1[1]);
  const cellOne = board[cell2[0]];
  const cellTwo = parseInt(cell2[1]);

  const conditionOne = cellX % 2 !== 0 && cellY % 2 !== 0;
  const conditionTwo = cellOne % 2 !== 0 && cellTwo % 2 !== 0;

  if (conditionOne && conditionTwo) {
    return true;
  }

  return false;
}

console.log(chessBoardCellColor("A1", "C3"));
console.log(chessBoardCellColor("A1", "H3"));
