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

    return list.filter(unsortedWord => {
      return this.isAnagram(unsortedWord, sortCharacters(unsortedWord));
    });
  }

  isAnagram(originalWord, sortedWord) {
    return (
      this.subject.toLowerCase() !== originalWord.toLowerCase() &&
      sortCharacters(this.subject) === sortedWord
    );
  }
}

export default Anagram;
