function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  const index = arr.findIndex(element => element >= num);

  return index === -1 ? arr.length : index;
}
