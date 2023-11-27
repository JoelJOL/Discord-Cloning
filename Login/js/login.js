// Function to change the QR code image with a random number every 10 seconds
function changeQr() {
    var randomIndex = Math.floor(Math.random() * 10);
    document.getElementById("qrCode").src = "https://quickchart.io/qr?text=Discord-".concat(randomIndex);
}
setInterval(changeQr, 10000);
// Fetch user data from a dummy JSON API and store it in the 'users' array
var getUserData = fetch("https://dummyjson.com/users?select=id,email,firstName,username,password,birthDate,image");
var users = [];
getUserData
    .then(function (response) {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
})
    .then(function (data) {
    data.users.forEach(function (element) {
        users.push(element);
    });
    console.log(users);
})
    .catch(function (error) {
    console.error("There was a problem with the fetch operation:", error);
});
// Function for handling the "Forgot Username" functionality
function forgotUsername() {
    var resetEmail = prompt("Enter an email id to send username recovery link"); // Prompt user to enter an email for username recovery
    var validEmailExpr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // Validate the entered email
    if (resetEmail === null) {
        alert("Email cannot be empty");
    }
    else if (!resetEmail.match(validEmailExpr)) {
        alert("Not a valid email address");
    }
    else {
        alert("An email with username recovery link has been sent to ".concat(resetEmail));
    }
}
// Function for handling the "Forgot Password" functionality
function forgotPassword() {
    var usernameField = document.getElementById("login-username");
    // Validate the entered username
    if ((usernameField === null || usernameField === void 0 ? void 0 : usernameField.value) === "") {
        alert("Please enter username and try again");
    }
    else {
        if (isValidUsername(usernameField.value)) {
            alert("An email with password recovery link has been sent to email id corresponding to ".concat(usernameField.value));
        }
        else {
            alert("Username not found");
        }
    }
}
// Function to validate user login
function validateLogin() {
    var usernameField = document.getElementById("login-username");
    var passwordField = document.getElementById("login-password");
    var registeredUsersData = sessionStorage.getItem("registeredUsers");
    if (registeredUsersData) {
        // Check against registered users in session storage
        var registeredUsers = JSON.parse(registeredUsersData);
        if (registeredUsers.length > 0) {
            registeredUsers.forEach(function (registeredUser) {
                if (registeredUser.username === (usernameField === null || usernameField === void 0 ? void 0 : usernameField.value) &&
                    registeredUser.password === (passwordField === null || passwordField === void 0 ? void 0 : passwordField.value)) {
                    // Save the matched user in session storage and redirect to homepage
                    sessionStorage.setItem("loggedInUser", JSON.stringify(registeredUser));
                    window.location.href = "../Homepage/home.html";
                }
            });
        }
    }
    else {
        // Check against fetched 'users' if no registered users in session storage
        var userId = isValidLogin(usernameField === null || usernameField === void 0 ? void 0 : usernameField.value, passwordField === null || passwordField === void 0 ? void 0 : passwordField.value);
        if (userId === -1) {
            alert("User does not exist");
        }
        else {
            // Save the matched user in session storage and redirect to homepage
            sessionStorage.setItem("loggedInUser", JSON.stringify(users[userId]));
            window.location.href = "../Homepage/home.html";
        }
    }
}
// Helper function to check if a username exists among registered users
function isValidUsername(checkUsername) {
    var foundUser = false;
    var registeredUsersData = sessionStorage.getItem("registeredUsers");
    if (registeredUsersData) {
        // Check if username exists among registered users in session storage
        var registeredUsers = JSON.parse(registeredUsersData);
        if (registeredUsers.length > 0) {
            registeredUsers.forEach(function (registeredUser) {
                if (registeredUser.username === checkUsername) {
                    foundUser = true; // Set 'foundUser' to true if the username is found
                }
            });
        }
    }
    if (foundUser === false) {
        // If the username is not found in session storage, check against fetched 'users'
        for (var i = 0; i < users.length; i++) {
            if (checkUsername === users[i].username) {
                foundUser = true; // Set 'foundUser' to true if the username is found
            }
        }
    }
    return foundUser;
}
// Helper function to check if the combination of username and password is valid in fetched 'users'
function isValidLogin(checkUsername, checkPassword) {
    var userMatch = false;
    var userID = -1;
    for (var i = 0; i < users.length; i++) {
        if (checkUsername === users[i].username &&
            checkPassword === users[i].password) {
            userMatch = true;
            userID = i; // Return user index if the combination is valid
        }
    }
    return userID;
}
