export class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
  }

  onEarth() {
    return Math.round((this.seconds / (60 * 60 * 24 * 365.25)) * 100) / 100;
  }
}
