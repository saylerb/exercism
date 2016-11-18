function Pangram (input) {
  this.text = input.toLowerCase()

  this.alphabet = Array.apply(null, {length: 26}).map(function (_, index) {
    return String.fromCharCode("a".charCodeAt(0) + index)
  })

  this.isPangram = function () {

    var result = this.alphabet.reduce(function (acc, letter) {
      if (this.text.indexOf(letter) > -1) {
        return acc += 1;
      } else {
        return acc;
      }
    }.bind(this), 0)

    return result === 26;
  }
}

module.exports = Pangram
