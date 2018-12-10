export default class Words {
  count(sentence) {
    return sentence
      .trim()
      .split(/\s+|\n/)
      .map(word => word.toLowerCase())
      .reduce((acc, word) => {
        if (acc[word]) {
          acc[word] += 1;
        } else {
          acc[word] = 1;
        }
        return acc;
      }, Object.create(null));
  }
}
