function diffArray(arr1, arr2) {
  const firstDiff = arr1.filter(item => !arr2.includes(item));
  const secondDiff = arr2.filter(item => !arr1.includes(item));

  return firstDiff.concat(secondDiff);
}
