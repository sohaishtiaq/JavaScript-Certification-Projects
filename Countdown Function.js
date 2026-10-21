function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    return [n, ...countdown(n - 1)];
  }
}
