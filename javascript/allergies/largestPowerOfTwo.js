export default function largestPowerOfTwo(number) {
  let currentPower = 0;
  while (2 ** currentPower < number) {
    if (2 ** (currentPower + 1) > number) {
      break;
    } else {
      currentPower += 1;
    }
  }
  return 2 ** currentPower;
}
