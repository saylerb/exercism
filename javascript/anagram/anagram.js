import { sortCharacters } from './sortCharacters';

class Anagram {
  constructor(subject) {
    this.subject = subject;
  }

  matches(list) {
    return list.filter(word => this.isAnagram(word));
  }

  isAnagram(word) {
    return (
      this.subject.toLowerCase() !== word.toLowerCase() &&
      sortCharacters(this.subject) === sortCharacters(word)
    );
  }
}

export default Anagram;
