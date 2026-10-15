function smallestCommons(arr) {
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);

  let multiple = max;

  function gcd(a, b) {
    while (b !== 0) {
      const remainder = a % b;
      a = b;
      b = remainder;
    }
    return a;
  }

  for (let i = min; i <= max; i++) {
    multiple = (multiple * i) / gcd(multiple, i);
  }

  return multiple;
}
