export function digitDegree(n: number): number {
  let newNumber = 0;

  if (n < 10) return n;

  const num = n.toString().split("");
  for (let i = 0; i < num.length; i++) {
    newNumber += parseInt(num[i]);
  }
 
  return newNumber;
}

//console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
