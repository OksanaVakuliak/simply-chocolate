const refs = {
  openMenuBtn: document.querySelector(".js-menu-button"),
  closeMenuBtn: document.querySelector(".menu-close-btn"),
  menu: document.querySelector(".mobile-menu"),
  allMenuLinks: document.querySelectorAll(".mobile-menu a"),
};

refs.openMenuBtn.addEventListener("click", toggleMenu);
refs.closeMenuBtn.addEventListener("click", toggleMenu);
refs.allMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!refs.menu.classList.contains("is-hidden")) {
      toggleMenu();
    }
  });
});

function toggleMenu() {
  refs.menu.classList.toggle("is-hidden");
  document.body.classList.toggle("no-scroll");
}
