export class HighScores {
  constructor(input) {
    this.scores = input;
    this.latest = input[input.length - 1];
    this.highest = input.reduce((acc, num) => (num > acc ? num : acc), 0);
    this.top = [...input].sort((a, b) => a - b).reverse().slice(0, 3);
    this.report = this.message();
  }

  message() {
    if (this.latest === this.highest) {
      return `Your latest score was ${this.latest}. That's your personal best!`;
    }
    return `Your latest score was ${this.latest}. That's ${this.highest - this.latest} short of your personal best!`;
  }
}
