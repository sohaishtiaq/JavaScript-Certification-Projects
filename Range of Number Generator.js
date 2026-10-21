function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  } else {
    const result = rangeOfNumbers(startNum, endNum - 1);
    result.push(endNum);
    return result;
  }
}
