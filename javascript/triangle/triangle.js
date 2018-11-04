export default class Triangle {
  constructor(...sides) {
    this.sides = sides;
    this.sums = this.calculateSums();
  }

  kind() {
    this.validate();
    const uniqueSides = new Set(this.sides);

    if (uniqueSides.size === 1) {
      return 'equilateral';
    }

    if (uniqueSides.size === 2) {
      return 'isosceles';
    }

    if (uniqueSides.size === 3) {
      return 'scalene';
    }

    return 'wow';
  }

  validate() {
    const { sides, sums } = this;

    if (sides.every(side => side === 0)) {
      throw new Error('Triangle must have a size');
    }

    if (sides.some(side => side < 0)) {
      throw new Error("Can't have a negative side");
    }

    if (sides.some(current => sums.some(sum => sum < current))) {
      throw new Error("Can't violate triangle inequality");
    }
  }

  calculateSums() {
    return this.sides.map((currentSide, index, arr) => {
      const { length } = arr;
      const previousSide = arr[(index + length - 1) % length];

      return currentSide + previousSide;
    });
  }
}
