export function growingPlant(
  upSpeed: number,
  downSpeed: number,
  desiredHeight: number
): number {
  //grows by 100, drops by 10
  const growthPerDay = upSpeed - downSpeed;
  const growth = desiredHeight / growthPerDay;
  const growthWithoutDecimals = Math.floor(growth);
  
  return growthWithoutDecimals
}

console.log(growingPlant(100, 10, 910));
