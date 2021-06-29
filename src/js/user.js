const username_cc = document.querySelector("#username");

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  location.href = "./dashboard/index.html";
});

function submitForm() {}

const userName = "Kosisochukwu";

const usernameContainer = document.querySelector("#userName_container");
// usernameContainer.textContent = userName;
