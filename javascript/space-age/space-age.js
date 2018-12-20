export class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
  }

  onEarth() {
    return SpaceAge.round(this.seconds / (60 * 60 * 24 * 365.25));
  }

  onMercury() {
    return SpaceAge.round(this.onEarth() / 0.2408467);
  }

  static round(number) {
    return Math.round(number * 100) / 100;
  }
}
