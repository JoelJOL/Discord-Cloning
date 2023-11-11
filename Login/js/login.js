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
console.log(users);

function forgotUsername() {
  let resetEmail = prompt("Enter an email id to send username recovery link");
  let validEmailExpr =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (resetEmail === "") {
    alert("Email cannot be empty");
  } else if (!resetEmail.match(validEmailExpr)) {
    alert("Not a valid email address");
  } else {
    alert(
      `An email with username recovery link has been sent to ${resetEmail}`
    );
  }
}
function forgotPassword() {
  let usernameField = document.getElementById("login-username");
  if (usernameField.value === "") {
    alert("Please enter username and try again");
  } else {
    if (isValidUsername(usernameField.value)) {
      alert(
        `An email with password recovery link has been sent to email id corresponding to ${usernameField.value}`
      );
    } else {
      alert("Username not found");
    }
  }
}
function validateLogin() {
  let usernameField = document.getElementById("login-username");
  let passwordField = document.getElementById("login-password");
  if (usernameField.value === "") {
    alert("Username cannot be empty");
  } else if (passwordField.value.length < 8) {
    alert("Password must be minimum 8 characters");
  } else {
    let userId = isValidLogin(usernameField.value, passwordField.value);
    if (userId === -1) {
      alert("User does not exist");
    } else {
      alert(`Welcome ${users[userId].firstName}`);
    }
  }
}
function isValidUsername(checkUsername) {
  for (let i = 0; i < users.length; i++) {
    if (checkUsername === users[i].username) {
      return true;
    }
  }
}
function isValidLogin(checkUsername, checkPassword) {
  for (let i = 0; i < users.length; i++) {
    if (
      checkUsername === users[i].username &&
      checkPassword === users[i].password
    ) {
      return i;
    } else {
      return -1;
    }
  }
}
