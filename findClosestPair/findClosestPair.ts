export function findClosestPair(numbers: number[], sum: number): number {
  let distance = -1;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
      const sumOfNumbers = numbers[i] + numbers[j];
      const absoluteDistance = Math.abs(i - j);

      if (sumOfNumbers === sum) {
        if (distance === -1 || absoluteDistance < distance) {
          distance = absoluteDistance;
        }
      }
    }
  }

  return distance;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));
