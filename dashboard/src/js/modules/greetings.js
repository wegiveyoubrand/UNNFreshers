let welcome,
  newUser = "Paul",
  date = new Date(),
  hour = date.getHours(),
  minute = date.getMinutes(),
  second = date.getSeconds();

if (minute < 10) {
  minute = "0" + minute;
}
if (second < 10) {
  second = "0" + second;
}
if (hour < 12) {
  welcome = "Good morning";
} else if (hour < 17) {
  welcome = "Good afternoon";
} else {
  welcome = "Good evening";
}

const welcomeContainer = document.querySelector("#greeting");
// newUser = document.querySelector("#username").value;
welcomeContainer.textContent = `${welcome}, ${newUser}`;
