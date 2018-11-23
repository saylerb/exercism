function randomLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 25) + 98);
}

function generateRandomString() {
  return [...(null, { length: 100 })]
    .map(() => randomLetter())
    .join('');
}

function isNumericString(string) {
  return !Number.isNaN(Number.parseInt(string, 10));
}

function nonLowerCase(string) {
  return string !== string.toLowerCase();
}

function containsWhiteSpace(string) {
  return string.trim() !== string;
}

function containsHyphen(string) {
  return string.replace(/-/g, '') !== string;
}

function letterToIndex(letter) {
  return letter.charCodeAt() - 97;
}

function indexToLetter(index) {
  return String.fromCharCode(index + 97);
}

function applyShift(letter, shiftFunction) {
  const startIndex = letterToIndex(letter);
  const shiftedIndex = shiftFunction(startIndex);
  return indexToLetter(shiftedIndex);
}

const positiveShift = shift => start => (start + shift) % 26;
const negativeShift = shift => start => ((start - shift) + 26) % 26;

export class Cipher {
  constructor(key) {
    if (key || key === '') {
      this.constructor.validate(key); // calling a static method
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
