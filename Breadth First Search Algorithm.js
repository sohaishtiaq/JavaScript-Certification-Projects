function genParentheses(pairs) {
  if (!Number.isInteger(pairs)) {
    return 'The number of pairs should be an integer';
  }
  if (pairs < 1) {
    return 'The number of pairs should be at least 1';
  }
  
  let queue = [['', 0, 0]];
  let result = [];
  
  while (queue.length > 0) {
    let [current, opensUsed, closesUsed] = queue.shift();
    if (current.length === 2 * pairs) {
      result.push(current);
    } else {
      if (opensUsed < pairs) {
        queue.push([current + '(', opensUsed + 1, closesUsed]);
      }
      if (closesUsed < opensUsed) {
        queue.push([current + ')', opensUsed, closesUsed + 1]);
      }
    }
  }
  return result;
}

console.log(genParentheses(2));
