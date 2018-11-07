export const steps = (value) => {
  if (value < 1) {
    throw Error('Only positive numbers are allowed');
  }

  if (value === 1) {
    return 0;
  }

  if (value % 2 === 0) {
    return 1 + steps(value / 2);
  }

  return 1 + steps(value * 3 + 1);
};
