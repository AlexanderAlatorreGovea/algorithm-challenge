function isValidSubsequence(array, sequence) {
  let sequenceIndex = 0;

  for (const value of array) {
    if (sequenceIndex === sequence.length) break;

    if (sequence[sequenceIndex] === value) sequenceIndex++;
  }

  return sequenceIndex === sequence.length;
}

console.log(isValidSubsequence([5, 1, 22, 6], [1, 6]));
