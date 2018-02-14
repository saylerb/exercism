class Words {
  count(phrase) {
    var words = phrase
      .toLowerCase()
      .trim()
      .replace( /(\n)|(\t)|(\s){2,}/g," ")
      .split(" ")

    return words.reduce((acc, word) => {
      if (acc[word]) {
        acc[word] += 1
      } else {
        acc[word] = 1
      }
      return acc
    }, Object.create(null))
  }
}

export default Words
