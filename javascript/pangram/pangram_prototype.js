var Pangram = function(input) {
  this.input = input;
}

Pangram.prototype.isPangram = function() {
  var characters = this.input.toLowerCase().split(' ').join('')

  var alphabet = Array.apply(null, {length: 26}).map(function(_, index) {
    return String.fromCharCode(97 + index)
  });

  var result = alphabet.reduce(function(total, letter) {
    if (characters.indexOf(letter) > -1) {
      return total + 1;
    } else {
      return total
    }
  }, 0)

  return result === alphabet.length
}

module.exports = Pangram
