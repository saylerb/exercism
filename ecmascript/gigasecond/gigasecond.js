export default class Gigasecond {
  constructor(start) {
    this.start = start
  }
  date() {
    return new Date(this.start.getTime() + (10**9)*1000)
  }
}
