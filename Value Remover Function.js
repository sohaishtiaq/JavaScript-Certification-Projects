function destroyer(arr, ...args) {
  return arr.filter(item => !args.includes(item));
}
