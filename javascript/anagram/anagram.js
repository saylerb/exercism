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
    return list.filter(unsortedWord => {
      return this.isAnagram(unsortedWord);
    });
  }

  isAnagram(originalWord) {
    const sortedWord = sortCharacters(originalWord);

    return (
      this.subject.toLowerCase() !== originalWord.toLowerCase() &&
      sortCharacters(this.subject) === sortedWord
    );
  }
}

export default Anagram;
