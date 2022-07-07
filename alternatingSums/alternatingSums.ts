export function alternatingSums(a: number[]): number[] {
  let teamOnesWeight = 0;
  let teamTwosWeight = 0;

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      teamOnesWeight += a[i];
    } else {
      teamTwosWeight += a[i];
    }
  }

  return [teamOnesWeight, teamTwosWeight];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
