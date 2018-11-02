const reverseString = (string) => {
  const characters = string.split('');
  return characters.reduceRight((acc, char) => acc.concat(char), '');
};

export default reverseString;
