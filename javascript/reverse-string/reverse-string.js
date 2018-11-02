const reverseString = (string) => {
  let reversed = '';
  const normal = string.split('');

  while(normal.length > 0) {
    reversed += normal.pop();
  }

  return reversed;
};

export default reverseString;
