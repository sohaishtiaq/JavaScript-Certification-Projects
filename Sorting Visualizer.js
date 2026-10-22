const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");
const startArr = document.getElementById("starting-array");
const arrContainer = document.getElementById("array-container");
let currentArray = [];

const generateElement = () => {
  return Math.floor(Math.random() * 100) + 1;
}

const generateArray = () => {
  const arr = [];
  let temp = 0;
  for (let i = 0; i < 5; i++) {
    temp = generateElement();
    arr.push(temp);
  }
  return arr;
}

const generateContainer = () => {
  return document.createElement("div");
}

const fillArrContainer = (container, arr) => {
  arr.forEach(num => {
    const span = document.createElement("span");
    span.textContent = num;
    container.appendChild(span);
  })
}

const isOrdered = (int1, int2) => {
  return int1 <= int2;
}

const swapElements = (arr, index) => {
  let temp = 0;
  if (!isOrdered(arr[index], arr[index + 1])) {
    temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
  }
}

const highlightCurrentEls = (el, index) => {
  let children = el.children;
  if (children[index]) {
    children[index].style.border = "2px dashed red";
  }
  if (children[index + 1]) {
    children[index + 1].style.border = "2px dashed red";
  }
}

let divCounter = 0;

generateBtn.addEventListener('click', () => {
  divCounter = 0;
  
  arrContainer.innerHTML = '';

  const newStart = generateContainer();
  newStart.id = 'starting-array';
  arrContainer.appendChild(newStart);

  currentArray = generateArray();
  fillArrContainer(newStart, currentArray);
});

sortBtn.addEventListener("click", () => {

  if (!currentArray || currentArray.length === 0) return;

  const startDiv = document.getElementById('starting-array');

  let arr = [...currentArray];

  let swapped = false;
  
  do {

    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {

      const stepDiv = generateContainer();
      if (divCounter === 0) {
        highlightCurrentEls(startDiv, i);
        if (!isOrdered(arr[i], arr[i + 1])) {
        swapElements(arr, i);
        swapped = true;
      }
      divCounter++;
      continue;
      }
      fillArrContainer(stepDiv, arr);
      highlightCurrentEls(stepDiv, i);
      arrContainer.appendChild(stepDiv);
      divCounter++;

      if (!isOrdered(arr[i], arr[i + 1])) {
        swapElements(arr, i);
        swapped = true;
      }

    }

  } while (swapped);

  const sortDiv = generateContainer();
  fillArrContainer(sortDiv, arr);
  arrContainer.appendChild(sortDiv);
  sortDiv.style.border = "4px solid green";

})
