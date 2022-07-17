export function isLucky(n: number): boolean {
  let firstHalfOfTheTicket = 0;
  let secondHalfOfTheTicket = 0;
  const stringifiedNumber = n.toString();

  for (let i = 0; i < stringifiedNumber.length; i++) {
    const halfOfNumber = stringifiedNumber.length / 2;

    if (i < halfOfNumber) {
      firstHalfOfTheTicket += +stringifiedNumber[i];
    } else {
      secondHalfOfTheTicket += +stringifiedNumber[i];
    }
  }

  return firstHalfOfTheTicket === secondHalfOfTheTicket;
}

console.log(isLucky(1230));
console.log(isLucky(239017));
