function pyramid(char, rows, isInverted) {
  let result = "";

  for (let i = 0; i < rows; i++) {
    const spaces = " ".repeat(rows - i - 1);
    const pattern = char.repeat(2 * i + 1);

    if (isInverted) {
      result = result + " ".repeat(i) + char.repeat(2 * (rows - i - 1) + 1) + "\n";
    } else {
      result += spaces + pattern + "\n";
    }
  }

  if (isInverted) {
    return "\n" + result;
  }

  return "\n" + result;
}
