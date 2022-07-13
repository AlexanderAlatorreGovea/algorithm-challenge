//(Cost per minute) * (ride time) + (Cost per mile) * (ride distance)
export function fareEstimator(
  ride_time: number,
  ride_distance: number,
  cost_per_minute: number[],
  cost_per_mile: number[]
): number[] {
  const fares = [];

  for (let i = 0; i < cost_per_minute.length; i++) {
    const fareEstimate =
      cost_per_minute[i] * ride_time + cost_per_mile[i] * ride_distance;

    fares.push(Math.floor(fareEstimate));
  }

  return fares;
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
