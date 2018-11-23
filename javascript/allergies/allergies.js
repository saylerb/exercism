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
    const result = [];
    return result.concat(this.map[this.number] || []);
  }
}
