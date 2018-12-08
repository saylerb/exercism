import {
  isNumericString,
  nonLowerCase,
  containsWhiteSpace,
  containsHyphen,
  generateRandomString,
  letterToIndex,
  applyShift,
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

  encode(encodeString) {
    return encodeString
      .split('')
      .map((char, index) => {
        const shiftAmount = this.shifts[index % this.key.length];
        return applyShift(char, shift(shiftAmount, positive));
      })
      .join('');
  }

  decode(decodeString) {
    return decodeString
      .split('')
      .map((char, index) => {
        const shiftAmount = this.shifts[index % this.key.length];
        return applyShift(char, shift(shiftAmount, negative));
      })
      .join('');
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
