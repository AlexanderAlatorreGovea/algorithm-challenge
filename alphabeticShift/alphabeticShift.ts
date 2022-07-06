export function alphabeticShift(inputString: string): string {
  const alphabet = {
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    e: "e",
    f: "f",
    g: "g",
    h: "h",
    i: "i",
    j: "j",
    k: "k",
    l: "l",
    m: "m",
    n: "n",
    o: "o",
    p: "p",
    q: "q",
    r: "r",
    s: "s",
    t: "t",
    u: "u",
    v: "v",
    w: "w",
    x: "x",
    y: "y",
    z: "z",
  };

  let inputShifted = inputString.split("");
  for (let index = 0; index < inputShifted.length; index++) {
    inputShifted[index] = alphabet[inputShifted[index]];
  }

  return inputShifted.join("");
}

console.log(alphabeticShift("crazy"));
