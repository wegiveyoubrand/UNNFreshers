
const openUser = document.querySelector(".avatar");

const userOptions = document.querySelector(".user_options");
const userLogout = document.querySelector("#user_logout");

// const usernameContainer = document.querySelector(".userName_container");

const usernameContainer = document.querySelector(".userName_container");

openUser.addEventListener("click", () => {
  userOptions.classList.toggle("open");
});

userLogout.addEventListener("click", () => {
  location.href = "/index.html";
});

