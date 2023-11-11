function changeQr() {
  const randomIndex = Math.floor(Math.random() * 10);
  document.getElementById(
    "qrCode"
  ).src = `https://quickchart.io/qr?text=Discord-${randomIndex}`;
}
setInterval(changeQr, 5000);

const getUserData = fetch(
  "https://dummyjson.com/users?select=id,email,firstName,username,password,birthDate,image"
);
const users = [];
getUserData
  .then((response) => response.json())
  .then((data) => {
    data.users.forEach((element) => {
      users.push(element);
    });
  });

function forgotUsername() {
  let resetEmail = prompt("Enter an email id to send username recovery link");
}
function forgotPassword() {
  let usernameField = document.getElementById("login-username");
  if (usernameField.value === "") {
    alert("Username cannot be empty");
  }
}
function validateLogin() {
  let usernameField = document.getElementById("login-username");
  if (usernameField.value === "") {
    alert("Username cannot be empty");
  }
  let passwordField = document.getElementById("login-password");
  if (passwordField.value.length < 9) {
    alert("Password must be minimum 8 characters");
  }
}
