import {
  isNumericString,
  nonLowerCase,
  containsWhiteSpace,
  containsHyphen,
  generateRandomString,
  letterToIndex,
  applyShift,
  positiveShift,
  negativeShift,
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
    return encodeString.split('')
      .map((char, index) => {
        const shift = this.shifts[index % this.key.length];
        return applyShift(char, positiveShift(shift));
      })
      .join('');
  }

  decode(decodeString) {
    return decodeString.split('')
      .map((char, index) => {
        const shift = this.shifts[index % this.key.length];
        return applyShift(char, negativeShift(shift));
      })
      .join('');
  }

  static validate(key) {
    if (key.length === 0
      || isNumericString(key)
      || nonLowerCase(key)
      || containsWhiteSpace(key)
      || containsHyphen(key)
    ) {
      throw new Error('Bad key');
    }
  }
}
