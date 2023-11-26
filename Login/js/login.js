// Function to change the QR code image with a random number every 10 seconds
function changeQr() {
  const randomIndex = Math.floor(Math.random() * 10);
  document.getElementById(
    "qrCode"
  ).src = `https://quickchart.io/qr?text=Discord-${randomIndex}`;
}
setInterval(changeQr, 10000);

// Fetch user data from a dummy JSON API and store it in the 'users' array
const getUserData = fetch(
  "https://script.google.com/macros/s/AKfycbz4M_55FnUzXQOhGAD_2fPQTIZUkRcETl3D0RSE1sw7jPmSzS55MF9OMJFDJq4UPDt0bA/exec",
  {
    method: "GET",
    mode: "cors",
  }
);
const users = [];
getUserData
  .then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    data.users.forEach((element) => {
      users.push(element);
    });
    console.log(users);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// Function for handling the "Forgot Username" functionality
function forgotUsername() {
  let resetEmail = prompt("Enter an email id to send username recovery link"); // Prompt user to enter an email for username recovery
  let validEmailExpr =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // Validate the entered email
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
// Function for handling the "Forgot Password" functionality
function forgotPassword() {
  let usernameField = document.getElementById("login-username");
  // Validate the entered username
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

// Function to validate user login
function validateLogin() {
  let usernameField = document.getElementById("login-username");
  let passwordField = document.getElementById("login-password");
  let registeredUsersData = sessionStorage.getItem("registeredUsers");
  if (registeredUsersData) {
    // Check against registered users in session storage
    let registeredUsers = JSON.parse(registeredUsersData);
    if (registeredUsers.length > 0) {
      registeredUsers.forEach((registeredUser) => {
        if (
          registeredUser.username === usernameField.value &&
          registeredUser.password === passwordField.value
        ) {
          // Save the matched user in session storage and redirect to homepage
          sessionStorage.setItem(
            "loggedInUser",
            JSON.stringify(registeredUser)
          );
          window.location.href = "../Homepage/home.html";
        }
      });
    }
  } else {
    // Check against fetched 'users' if no registered users in session storage
    let userId = isValidLogin(usernameField.value, passwordField.value);
    if (userId === -1) {
      alert("User does not exist");
    } else {
      // Save the matched user in session storage and redirect to homepage
      sessionStorage.setItem("loggedInUser", JSON.stringify(users[userId]));
      window.location.href = "../Homepage/home.html";
    }
  }
}
// Helper function to check if a username exists among registered users
function isValidUsername(checkUsername) {
  let foundUser = false;
  let registeredUsersData = sessionStorage.getItem("registeredUsers");
  if (registeredUsersData) {
    // Check if username exists among registered users in session storage
    let registeredUsers = JSON.parse(registeredUsersData);
    if (registeredUsers.length > 0) {
      registeredUsers.forEach((registeredUser) => {
        if (registeredUser.username === checkUsername) {
          foundUser = true; // Set 'foundUser' to true if the username is found
        }
      });
    }
  }
  if (foundUser === false) {
    // If the username is not found in session storage, check against fetched 'users'
    for (let i = 0; i < users.length; i++) {
      if (checkUsername === users[i].username) {
        foundUser = true; // Set 'foundUser' to true if the username is found
      }
    }
  }
  return foundUser;
}
// Helper function to check if the combination of username and password is valid in fetched 'users'
function isValidLogin(checkUsername, checkPassword) {
  let userMatch = false;
  for (let i = 0; i < users.length; i++) {
    if (
      checkUsername === users[i].username &&
      checkPassword === users[i].password
    ) {
      userMatch = true;
      return i; // Return user index if the combination is valid
    }
  }
  if (userMatch === false) {
    return -1; // Return -1 if the combination is invalid
  }
}
