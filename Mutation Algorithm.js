function mutation(arr) {
  const first = arr[0].toLowerCase();
  const second = arr[1].toLowerCase();

  for (let letter of second) {
    if (!first.includes(letter)) {
      return false;
    }
  }

  return true;
}
