class Bob {
  hey(message) {
    if (!message.trim()) {
      return 'Fine. Be that way!'
    } else if (message === message.toUpperCase() && /[A-Za-z]/.test(message)) {
      return 'Whoa, chill out!'
    } else if (message.slice(-1) === '?') {
      return 'Sure.'
    } else {
      return 'Whatever.'
    }
  }
}

export default Bob;

