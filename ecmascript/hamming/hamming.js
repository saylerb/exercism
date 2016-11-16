export default class Hamming {
  compute (one, two) {
    let total = 0
    if (one.length === two.length) {
      for (let i = 0; i < one.length; i++) {
        if (one[i] !== two[i]) {
          total += 1
        }
      }
    } else {
      throw new Error('DNA strands must be of equal length.')
    }
    return total
  }
}
