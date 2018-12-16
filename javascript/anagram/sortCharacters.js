export function sortCharacters(word) {
  return word
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}
