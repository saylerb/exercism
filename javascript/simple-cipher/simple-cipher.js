import {
  isNumericString,
  nonLowerCase,
  containsWhiteSpace,
  containsHyphen,
  generateRandomString,
  letterToIndex,
  indexToLetter,
  shift,
  positive,
  negative
} from './helpers';

export class Cipher {
  constructor(key) {
    if (key || key === '') {
      Cipher.validate(key); // calling a static method
      this.key = key;
    } else {
      this.key = generateRandomString();
    }
    this.shifts = this.calculateShifts();
  }

  calculateShifts() {
    return this.key.split('').map(letter => letterToIndex(letter));
  }

  encode(string) {
    return this.translate(string, shift(positive));
  }

  decode(string) {
    return this.translate(string, shift(negative));
  }

  translate(string, shiftFunction) {
    return string
      .split('')
      .map((char, index) => {
        const shiftAmount = this.shifts[index % this.key.length];
        return Cipher.applyShift(char, shiftFunction(shiftAmount));
      })
      .join('');
  }

  static applyShift(letter, shiftFunction) {
    const startIndex = letterToIndex(letter);
    const shiftedIndex = shiftFunction(startIndex);
    return indexToLetter(shiftedIndex);
  }

  static validate(key) {
    if (
      key.length === 0 ||
      isNumericString(key) ||
      nonLowerCase(key) ||
      containsWhiteSpace(key) ||
      containsHyphen(key)
    ) {
      throw new Error('Bad key');
    }
  }
}
