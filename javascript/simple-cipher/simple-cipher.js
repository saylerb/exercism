function randomLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 25) + 98);
}

function generateRandomString() {
  // Array.apply(null, { length: 100 })])
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

function alphaToIndex(letter) {
  return letter.charCodeAt() - 97;
}

function mapIntToAlphabet(index) {
  // 0 = 'a', 25 = 'z'
  return String.fromCharCode(index + 97);
}

function applyPositiveShift(letter, shift) {
  const originalLetterIndex = alphaToIndex(letter);
  const shiftedIndex = (originalLetterIndex + shift) % 26;
  return mapIntToAlphabet(shiftedIndex);
}

function applyNegativeShift(letter, shift) {
  const originalLetterIndex = alphaToIndex(letter);
  const shiftedIndex = ((originalLetterIndex - shift) + 26) % 26;
  return mapIntToAlphabet(shiftedIndex);
}

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
    return this.key.split('').map(letter => alphaToIndex(letter));
  }

  encode(encodeString) {
    return encodeString.split('')
      .map((char, index) => {
        const shift = this.shifts[index % this.key.length];
        return applyPositiveShift(char, shift);
      })
      .join('');
  }

  decode(decodeString) {
    return decodeString.split('')
      .map((char, index) => {
        const shift = this.shifts[index % this.key.length];
        return applyNegativeShift(char, shift);
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
