export function arrayConversion(inputArray: number[]): number {
  //checks if it is odd on every iteration
  let isOdd = true;

  while (inputArray.length !== 1) {
    inputArray = sumProduct(inputArray, isOdd);

    isOdd = !isOdd;
  }

  return inputArray[0];
}

function sumProduct(nums, isOdd) {
  const sumProducts = [];

  for (let i = 0; i < nums.length; i += 2) {
    if (isOdd) {
      sumProducts.push(nums[i] + nums[i + 1]);
      continue
    }
    
    sumProducts.push(nums[i] * nums[i + 1]);
  }

  return sumProducts;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
