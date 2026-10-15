function steamrollArray(arr) {
  const result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...steamrollArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}
