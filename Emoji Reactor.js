function updateCount(btn) {
  const countEl = btn.querySelector(".count");
  let currCount = +countEl.textContent.split("/")[0];
  
  if (currCount === 10) return;
  
  currCount++;
  countEl.textContent = `${currCount}/10`;
}

const btns = document.querySelectorAll(".emoji-btn");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    updateCount(btn);
  });
});
