const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let flags = "";

  if (caseInsensitiveFlag.checked) {
    flags += "i";
  }

  if (globalFlag.checked) {
    flags += "g";
  }

  return flags;
}

testButton.addEventListener("click", () => {
  const pattern = new RegExp(regexPattern.value, getFlags());
  const text = stringToTest.textContent;
  const matches = text.match(pattern);

  if (matches) {
    testResult.textContent = matches.join(", ");

    stringToTest.innerHTML = text.replace(
      pattern,
      (match) => `<span class="highlight">${match}</span>`
    );
  } else {
    testResult.textContent = "no match";
    stringToTest.textContent = text;
  }
});
