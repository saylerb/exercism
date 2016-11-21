export default class Transcriptor {
  constructor () {
    this.key = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U' }
  }

  toRna (input) {
    return input.split('').map(letter => this.key[letter]).join('')
  }
}
