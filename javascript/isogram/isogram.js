export const isIsogram = (word) => {
  const trimmed = word.replace(/[-\s]/g, '');
  const lowercase = trimmed.toLowerCase();
  const dedupe = new Set(lowercase.split(''));

  return dedupe.size === trimmed.length;
};
