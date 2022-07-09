export function centuryFromYear(year: number): number {
  if (year <= 100) return 1;

  const century = year / 100;
  const flooredCentury = Math.floor(century);

  if (century !== flooredCentury) {
    return flooredCentury + 1;
  } else {
    return flooredCentury;
  }
}

// betterOption

export function centuryFromYear2(year: number): number {
  const century = year / 100;

  if (year % 100 === 0) {
    return century;
  }

  return Math.floor(century) + 1;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
