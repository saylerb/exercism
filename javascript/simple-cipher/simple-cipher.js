function randomLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 25) + 98);
}

function generateRandomString() {
  // Array.apply(null, { length: 100 })])
  return [...(null, { length: 100 })]
    .map(() => randomLetter())
    .join('');
}

export class Cipher {
  constructor() {
    this.key = generateRandomString();
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
}
