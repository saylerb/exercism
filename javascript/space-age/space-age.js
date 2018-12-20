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

  static round(num) {
    return Math.round(num * 100) / 100;
  }
}
