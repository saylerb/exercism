const mapping = {
  AEIOULNRST: 1,
  DG: 2,
  BCMP: 3,
  FHVWY: 4,
  K: 5,
  JX: 8,
  QZ: 10,
};

const getLetterScore = (letter) => {
  const keys = Object.keys(mapping);
  const scoringKey = keys.find(key => key.includes(letter.toUpperCase()));

  return mapping[scoringKey];
};

const score = word => word.split('').reduce((a, l) => a + getLetterScore(l), 0);

export default score;
