import largestPowerOfTwo from './largestPowerOfTwo';

export default class Allergies {
  constructor(num) {
    this.number = num;
    this.allergies = [
      'eggs',
      'peanuts',
      'shellfish',
      'strawberries',
      'tomatoes',
      'chocolate',
      'pollen',
      'cats',
    ];
    this.map = this.mapAllergyToScore();
  }

  mapAllergyToScore() {
    return this.allergies.reduce((prev, current, index) => {
      const newKey = 2 ** index;
      return { ...prev, [newKey]: current };
    }, {});
  }

  list() {
    let result = [];
    let currentNumber = this.number;

    while (currentNumber > 0) {
      const largest = largestPowerOfTwo(currentNumber);
      result = [this.map[largest], ...result];
      currentNumber -= largest;
    }

    return result.filter(item => item !== undefined);
  }

  allergicTo(allergy) {
    return this.list().some(item => item === allergy);
  }
}
