export function adjacentElementsProduct(inputArray: number[]): number {
  if (inputArray.length === 1) return inputArray[0];

  const products = [];

  for (let i = 0; i < inputArray.length; i++) {
    const adjacentProducts = inputArray[i] * inputArray[i + 1];

    if (!adjacentProducts) break;

    products.push(adjacentProducts);
  }

  return products[products.length - 1];
}
console.log(adjacentElementsProduct([2, 6,]));

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
