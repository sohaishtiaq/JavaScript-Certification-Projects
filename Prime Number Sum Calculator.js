function sumPrimes(num) {
  let sum = 0;

  for (let i = 2; i <= num; i++) {
    let prime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) prime = false;
    }

    if (prime) sum += i;
  }

  return sum;
}
