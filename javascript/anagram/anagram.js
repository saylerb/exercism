function sortCharacters(word) {
  return word
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

class Anagram {
  constructor(subject) {
    this.subject = subject;
  }

  matches(list) {
    const pairs = list.map(word => [word, sortCharacters(word)]);

    return pairs
      .filter(pair => this.isAnagram(pair[0], pair[1]))
      .map(pair => pair[0]);
  }

  isAnagram(originalWord, sortedWord) {
    return (
      this.subject.toLowerCase() !== originalWord.toLowerCase() &&
      sortCharacters(this.subject) === sortedWord
    );
  }
}

export default Anagram;
