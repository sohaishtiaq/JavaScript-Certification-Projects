function sumAll(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  let total = 0;

  for (let i = min; i <= max; i++) {
    total += i;
  }

  return total;
}
