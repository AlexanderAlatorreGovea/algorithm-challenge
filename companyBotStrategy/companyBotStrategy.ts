export function companyBotStrategy(trainingData: number[][]): number {
  let score = 0;
  let correctness = 0;

  for (let index = 0; index < trainingData.length; index++) {
    if (trainingData[index][1] === 1) {
      score += trainingData[index][0];
      correctness += trainingData[index][1];
    }
  }

  return score / correctness || 0;
}

console.log(
  companyBotStrategy([
    [3, 1],
    [6, 1],
    [4, 1],
    [5, 1],
  ])
);

console.log(
  companyBotStrategy([
    [4, 1],
    [4, -1],
    [0, 0],
    [6, 1],
  ])
);

console.log(
  companyBotStrategy([
    [4, -1],
    [0, 0],
    [5, -1],
  ])
);
