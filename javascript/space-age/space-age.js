export class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
  }

  onEarth() {
    return this.round(this.seconds / (60 * 60 * 24 * 365.25));
  }

  onMercury() {
    return this.round(this.onEarth() / 0.2408467);
  }

  round(number) {
    return Math.round(number * 100) / 100;
  }
}
