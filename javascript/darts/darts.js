export const solve = (x, y) => {
  if (typeof x !== 'number' || typeof x !== 'number') {
    return null;
  }

  const radius = x ** 2 + y ** 2;

  if (radius > 100) {
    return 0;
  }
  if (radius > 25 && radius <= 100) {
    return 1;
  }
  if (radius > 1 && radius <= 25) {
    return 5;
  }
  return 10;
};
