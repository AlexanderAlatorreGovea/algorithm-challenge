export function largestOfFour(nums: number[][]): number[] {
  const largestNumbers = [];

  for (let index = 0; index < nums.length; index++) {
    let largest = 0;

    for (let j = 0; j < nums.length; j++) {
      const number = nums[index][j];
 
      largest = largest < number ? number : largest;
    }

    largestNumbers.push(largest);
  }

  return largestNumbers;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
console.log(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1],
  ])
);
