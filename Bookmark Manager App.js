const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");

const addBookmarkButton = document.getElementById("add-bookmark-button");
const closeFormButton = document.getElementById("close-form-button");
const addBookmarkButtonForm = document.getElementById("add-bookmark-button-form");
const viewCategoryButton = document.getElementById("view-category-button");
const closeListButton = document.getElementById("close-list-button");
const deleteBookmarkButton = document.getElementById("delete-bookmark-button");

const categoryDropdown = document.getElementById("category-dropdown");
const categoryNames = document.querySelectorAll(".category-name");
const categoryList = document.getElementById("category-list");

const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");

const getBookmarks = () => {
  const bookmarks = localStorage.getItem("bookmarks");

  if (!bookmarks) {
    return [];
  }

  try {
    const parsedBookmarks = JSON.parse(bookmarks);

    if (
      Array.isArray(parsedBookmarks) &&
      parsedBookmarks.every(
        bookmark =>
          bookmark &&
          typeof bookmark === "object" &&
          !Array.isArray(bookmark) &&
          typeof bookmark.name === "string" &&
          typeof bookmark.category === "string" &&
          typeof bookmark.url === "string"
      )
    ) {
      return parsedBookmarks;
    }

    return [];
  } catch (error) {
    return [];
  }
};

const displayOrCloseForm = () => {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
};

const displayOrHideCategory = () => {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
};

addBookmarkButton.addEventListener("click", () => {
  categoryNames.forEach(categoryName => {
    categoryName.innerText = categoryDropdown.value;
  });

  displayOrCloseForm();
});

closeFormButton.addEventListener("click", () => {
  displayOrCloseForm();
});


addBookmarkButtonForm.addEventListener("click", () => {
  const bookmarks = getBookmarks();

  const newBookmark = {
    name: nameInput.value,
    category: categoryDropdown.value,
    url: urlInput.value
  };

  bookmarks.push(newBookmark);

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  nameInput.value = "";
  urlInput.value = "";

  displayOrCloseForm();
});

viewCategoryButton.addEventListener("click", () => {
  const selectedCategory = categoryDropdown.value;
  const bookmarks = getBookmarks();

  categoryNames.forEach(categoryName => {
    categoryName.innerText = selectedCategory;
  });

  const filteredBookmarks = bookmarks.filter(
    bookmark => bookmark.category === selectedCategory
  );
  
  if (filteredBookmarks.length === 0) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
  } else {
    categoryList.innerHTML = filteredBookmarks
      .map(
        bookmark => `
          <div>
            <input
              type="radio"
              id="${bookmark.name.replace(/&/g, "&amp;").replace(/"/g, "&quot;")}"
              value="${bookmark.name.replace(/&/g, "&amp;").replace(/"/g, "&quot;")}"
              name="bookmark"
            >
            <label for="${bookmark.name.replace(/&/g, "&amp;").replace(/"/g, "&quot;")}">
              <a href="${bookmark.url.replace(/&/g, "&amp;").replace(/"/g, "&quot;")}" target="_blank" rel="noopener noreferrer">${bookmark.name.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</a>
            </label>
          </div>
        `
      )
      .join("");
  }

  displayOrHideCategory();
});

closeListButton.addEventListener("click", () => {
  displayOrHideCategory();
});

deleteBookmarkButton.addEventListener("click", () => {
  const selectedBookmark = document.querySelector(
    'input[name="bookmark"]:checked'
  );

  if (!selectedBookmark) {
    return;
  }

  const selectedCategory = categoryDropdown.value;

  const updatedBookmarks = getBookmarks().filter(
    bookmark =>
      !(
        bookmark.name === selectedBookmark.value &&
        bookmark.category === selectedCategory
      )
  );

  localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

  const filteredBookmarks = updatedBookmarks.filter(
    bookmark => bookmark.category === selectedCategory
  );

  if (filteredBookmarks.length === 0) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
  } else {
    categoryList.innerHTML = filteredBookmarks
      .map(
        bookmark => `
          <div>
            <input
              type="radio"
              id="${bookmark.name.replace(/&/g, "&amp;").replace(/"/g, "&quot;")}"
              value="${bookmark.name.replace(/&/g, "&amp;").replace(/"/g, "&quot;")}"
              name="bookmark"
            >
            <label for="${bookmark.name.replace(/&/g, "&amp;").replace(/"/g, "&quot;")}">
              <a href="${bookmark.url.replace(/&/g, "&amp;").replace(/"/g, "&quot;")}" target="_blank" rel="noopener noreferrer">${bookmark.name.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</a>
            </label>
          </div>
        `
      )
      .join("");
  }
});
