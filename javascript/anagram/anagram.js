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

    return pairs.filter(pair => this.isAnagram(pair)).map(pair => pair[0]);
  }

  isAnagram(pair) {
    return (
      this.subject.toLowerCase() !== pair[0].toLowerCase() &&
      sortCharacters(this.subject) === pair[1]
    );
  }
}

export default Anagram;
