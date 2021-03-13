const SECONDS_IN_AN_EARTH_YEAR = 60 * 60 * 24 * 365.25;

const orbitalDurationMap = new Map([
  ["earth", 1],
  ["mercury", 0.2408467],
  ["venus", 0.61519726],
  ["mars", 1.8808158],
  ["jupiter", 11.862615],
  ["saturn", 29.447498],
  ["uranus", 84.016846],
  ["neptune", 164.79132],
]);

const orbitalDurationMapInSeconds = new Map(orbitalDurationMap);

orbitalDurationMapInSeconds.forEach((earthYearDuration, planetName, map) => {
  const seconds = earthYearDuration * SECONDS_IN_AN_EARTH_YEAR;
  map.set(planetName, seconds);
});

export function age(planet, seconds) {
  return round(seconds / orbitalDurationMapInSeconds.get(planet), 2);
}

function round(num, decimalPlaces) {
  return Math.round(num * 10 ** decimalPlaces) / 10 ** decimalPlaces;
}
