export function randomLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 25) + 98);
}

export function generateRandomString() {
  return [...(null, { length: 100 })].map(() => randomLetter()).join('');
}

export function isNumericString(string) {
  return !Number.isNaN(Number.parseInt(string, 10));
}

export function nonLowerCase(string) {
  return string !== string.toLowerCase();
}

export function containsWhiteSpace(string) {
  return string.trim() !== string;
}

export function containsHyphen(string) {
  return string.replace(/-/g, '') !== string;
}

export function letterToIndex(letter) {
  return letter.charCodeAt() - 97;
}

export function indexToLetter(index) {
  return String.fromCharCode(index + 97);
}

export function applyShift(letter, shiftFunction) {
  const startIndex = letterToIndex(letter);
  const shiftedIndex = shiftFunction(startIndex);
  return indexToLetter(shiftedIndex);
}

export const positive = (a, b) => a + b;
export const negative = (a, b) => a - b;

export const shift = shiftType => shiftAmount => startIndex =>
  (shiftType(startIndex, shiftAmount) + 26) % 26;
