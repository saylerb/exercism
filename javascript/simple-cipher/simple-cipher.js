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

function isAllLowerCase(string) {
  return string === string.toLowerCase();
}

function containsWhiteSpace(string) {
  return string.trim() !== string;
}

function containsHyphen(string) {
  return string.replace(/-/g, '') !== string;
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
    const shifts = this.key.split('').map(char => char.charCodeAt() - 97);
    return shifts;
  }

  encode(encodeString) {
    return encodeString.split('').map((char, index) => String.fromCharCode(
      char.charCodeAt() + this.shifts[index],
    )).join('');
  }

  decode(decodeString) {
    return decodeString.split('').map((char, index) => String.fromCharCode(
      char.charCodeAt() - this.shifts[index],
    )).join('');
  }

  static validate(key) {
    if (key.length === 0
      || isNumericString(key)
      || !isAllLowerCase(key)
      || containsWhiteSpace(key)
      || containsHyphen(key)
    ) {
      throw new Error('Bad key');
    }
  }
}
