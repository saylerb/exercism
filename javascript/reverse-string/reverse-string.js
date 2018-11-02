const reverseString = (string) => {
  let reversed = '';
  const normal = string.split('');
  for (let i = 0; i < string.length; i += 1) {
    reversed += normal.pop();
  }

  return reversed;
};

export default reverseString;
