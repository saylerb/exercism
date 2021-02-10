export function age(planet, seconds) {
  return round(getEarthYears(seconds) / orbitalDurationInEarthYears(planet));
}

function orbitalDurationInEarthYears(planetName) {
  return orbitalDurationMap.get(planetName);
}

function getEarthYears(seconds) {
  return seconds / (60 * 60 * 24 * 365.25);
}

function round(num) {
  return Math.round(num * 100) / 100;
}

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
