export class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
  }

  onEarthNotRounded() {
    return this.seconds / (60 * 60 * 24 * 365.25);
  }

  onEarth() {
    return SpaceAge.round(this.onEarthNotRounded());
  }

  onMercury() {
    return SpaceAge.round(this.onEarthNotRounded() / 0.2408467);
  }

  onVenus() {
    return SpaceAge.round(this.onEarthNotRounded() / 0.61519726);
  }

  onMars() {
    return SpaceAge.round(this.onEarthNotRounded() / 1.8808158);
  }

  onJupiter() {
    return SpaceAge.round(this.onEarthNotRounded() / 11.862615);
  }

  onSaturn() {
    return SpaceAge.round(this.onEarthNotRounded() / 29.447498);
  }

  onUranus() {
    return SpaceAge.round(this.onEarthNotRounded() / 84.016846);
  }

  onNeptune() {
    return SpaceAge.round(this.onEarthNotRounded() / 164.79132);
  }

  static round(num) {
    return Math.round(num * 100) / 100;
  }
}
