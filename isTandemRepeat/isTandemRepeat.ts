export function isTandemRepeat(inputString: string): boolean {
  const isEven = inputString.length % 2 === 0;
  const halfOfString = inputString.length / 2;
  const firstHalfOfString = inputString.slice(0, halfOfString);
  const secondHalfOfString = inputString.slice(halfOfString);

  if (!isEven) return false;

  return firstHalfOfString === secondHalfOfString;
}

console.log(isTandemRepeat("tandemtandem"));
console.log(isTandemRepeat("qqq"));
console.log(isTandemRepeat("2w2ww"));
