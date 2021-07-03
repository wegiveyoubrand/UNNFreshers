document.querySelector(".menu").addEventListener("click", () => {
  menuToggle();
});

const aside = document.querySelector("aside");
const menuActive = function () {
  aside.classList.toggle("active");
};
