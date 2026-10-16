function sumFibs(num) {
  let prev = 0;
  let curr = 1;
  let sum = 0;

  while (curr <= num) {
    if (curr % 2 !== 0) {
      sum += curr;
    }

    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return sum;
}function sumFibs(num) {
  let prev = 0;
  let curr = 1;
  let sum = 0;

  while (curr <= num) {
    if (curr % 2 !== 0) {
      sum += curr;
    }

    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return sum;
}
