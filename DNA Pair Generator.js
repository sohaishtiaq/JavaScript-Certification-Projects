function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  return str.split("").map(base => [base, pairs[base]]);
}
