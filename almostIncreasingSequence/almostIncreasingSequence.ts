export function almostIncreasingSequence(sequence: number[]): boolean {
  let isASequence = false;

  for (let i = 0; i < sequence.length; i++) {
    const nextNumber = sequence[i + 2];

    if (!nextNumber) break;

    if (sequence[i] + 1 === nextNumber) {
      isASequence = true;
    }
  }

  return isASequence;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
 console.log(almostIncreasingSequence([1, 3, 2]))
