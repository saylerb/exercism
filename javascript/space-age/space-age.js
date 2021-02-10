export function age(planet, seconds) {
  const [first, ...rest] = planet;

  const methodToCall = `on${first.toUpperCase()}${rest.join("")}`;

  return new SpaceAge(seconds)[methodToCall]();
}

export class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
    this.currentSeconds = null;
    this.earthYears = null;
  }

  getSeconds() {
    if (this.seconds !== this.currentSeconds) {
      this.currentSeconds = this.seconds;
      this.earthYears = this.seconds / (60 * 60 * 24 * 365.25);
    }
    return this.earthYears;
  }

  onEarth() {
    return SpaceAge.round(this.getSeconds());
  }

  onMercury() {
    return SpaceAge.round(this.getSeconds() / 0.2408467);
  }

  onVenus() {
    return SpaceAge.round(this.getSeconds() / 0.61519726);
  }

  onMars() {
    return SpaceAge.round(this.getSeconds() / 1.8808158);
  }

  onJupiter() {
    return SpaceAge.round(this.getSeconds() / 11.862615);
  }

  onSaturn() {
    return SpaceAge.round(this.getSeconds() / 29.447498);
  }

  onUranus() {
    return SpaceAge.round(this.getSeconds() / 84.016846);
  }

  onNeptune() {
    return SpaceAge.round(this.getSeconds() / 164.79132);
  }

  static round(num) {
    return Math.round(num * 100) / 100;
  }
}
