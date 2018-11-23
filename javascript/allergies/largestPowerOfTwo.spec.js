import largestPowerOfTwo from './largestPowerOfTwo';

test('it can return the largest power of two for one', () => {
  expect(largestPowerOfTwo(1)).toEqual(1);
});

test('it can return the largest power of two for two', () => {
  expect(largestPowerOfTwo(2)).toEqual(2);
});

test('largest power of two for three', () => {
  expect(largestPowerOfTwo(3)).toEqual(2);
});

test('largest power of two for nine', () => {
  expect(largestPowerOfTwo(9)).toEqual(8);
});

test('largest power of two for one hundred and twenty eight', () => {
  expect(largestPowerOfTwo(128)).toEqual(128);
});
