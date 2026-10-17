const themeSwitcherButton = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const statusMessage = document.querySelector('[aria-live="polite"]');

const themes = [
  {
    name: "light",
    message: "Light theme activated."
  },
  {
    name: "dark",
    message: "Dark theme activated."
  },
  {
    name: "ocean",
    message: "Ocean theme activated."
  }
];

themeSwitcherButton.addEventListener("click", () => {
  const isExpanded =
    themeSwitcherButton.getAttribute("aria-expanded") === "true";

  if (isExpanded) {
    themeDropdown.hidden = true;
    themeSwitcherButton.setAttribute("aria-expanded", "false");
  } else {
    themeDropdown.hidden = false;
    themeSwitcherButton.setAttribute("aria-expanded", "true");
  }
});

themeDropdown.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    const selectedTheme = themes.find(
      (theme) => theme.name === item.textContent.trim().toLowerCase()
    );

    if (selectedTheme) {
      document.body.classList.remove(
        ...themes.map((theme) => `theme-${theme.name.toLowerCase()}`)
      );

      document.body.classList.add(
        `theme-${selectedTheme.name.toLowerCase()}`
      );

      statusMessage.textContent = selectedTheme.message;
    }

    themeDropdown.hidden = true;
    themeSwitcherButton.setAttribute("aria-expanded", "false");
  });
});
