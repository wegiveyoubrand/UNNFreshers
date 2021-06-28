const openUser = document.querySelector(".avatar");

const userOptions = document.querySelector(".user_options");

openUser.addEventListener("click", () => {
  userOptions.classList.toggle("open");
});
