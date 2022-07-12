export function celsiusToFahrenheit(celsius: number): number {
  const tempInFahrenheit = celsius * (9 / 5) + 32;

  return tempInFahrenheit;
}

console.log(celsiusToFahrenheit(-30));
console.log(celsiusToFahrenheit(-10));
console.log(celsiusToFahrenheit(0));
