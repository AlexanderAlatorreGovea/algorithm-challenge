export function fancyRide(l: number, fares: number[]): string {
  const rides = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
  let chosenRides = [];

  for (let i = 0; i < fares.length; i++) {
    const ridePrice = fares[i] * l;

    if (ridePrice < 20) {
      chosenRides.push(fares[i]);
    }
  }

  return rides[chosenRides.length - 1];
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
