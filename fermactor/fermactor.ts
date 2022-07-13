export function fermactor(n: number): number[] {
  for (let index = 1; index < n; index++) {
    for (let j = 1; j < n; j++) {
      const total = Math.pow(index, 2) - Math.pow(j, 2);

      if (total === n) {
        return [index, j];
      }
    }
  }
}

console.log(fermactor(15));
