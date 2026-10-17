const favoriteButtons = document.querySelectorAll(".favorite-icon");

favoriteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("filled");

    if (button.classList.contains("filled")) {
      button.innerHTML = "&#10084;";
    } else {
      button.innerHTML = "&#9825;";
    }
  });
});
