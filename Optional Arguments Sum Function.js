function addTogether(a, b) {
  if (typeof a !== "number" || !Number.isFinite(a)) {
    return undefined;
  }

  if (arguments.length === 1) {
    return function (c) {
      if (typeof c !== "number" || !Number.isFinite(c)) {
        return undefined;
      }

      return a + c;
    };
  }

  if (typeof b !== "number" || !Number.isFinite(b)) {
    return undefined;
  }

  return a + b;
}
