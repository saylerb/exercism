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
    return list.filter(unsortedWord => this.isAnagram(unsortedWord));
  }

  isAnagram(originalWord) {
    return (
      this.subject.toLowerCase() !== originalWord.toLowerCase() &&
      sortCharacters(this.subject) === sortCharacters(originalWord)
    );
  }
}

export default Anagram;
