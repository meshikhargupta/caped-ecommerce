// Search Input Box
const searchIcon = document.getElementById("searchIcon");
const searchInput = document.getElementById("searchInput");

searchIcon.addEventListener("click", () => {
  searchInput.focus();
});

// Header Side Menu Button
const sideNav = document.getElementById("sideNav");
const sideMenuBtn = document.getElementById("bars");

sideMenuBtn.addEventListener("click", () => {
  sideNav.classList.add("open");
});

document.addEventListener("click", (e) => {
  if (!sideNav.contains(e.target) && e.target !== sideMenuBtn) {
    sideNav.classList.remove("open");
  }
});
