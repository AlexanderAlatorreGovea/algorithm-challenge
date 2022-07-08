export function areSimilar(aNums: number[], bNums: number[]): boolean {
  let moreThanOneMatch = 0;

  for (let index = 0; index < aNums.length; index++) {
    for (let j = 0; j < bNums.length; j++) {
      if (aNums[index] === bNums[j]) {
        moreThanOneMatch += 1
      }
    }
  }

  return moreThanOneMatch === 1 ? true : false;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
