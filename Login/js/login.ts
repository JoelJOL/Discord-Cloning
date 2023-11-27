// Function to change the QR code image with a random number every 10 seconds
function changeQr(): void {
  const randomIndex: number = Math.floor(Math.random() * 10);
  (document.getElementById("qrCode") as HTMLImageElement).src = `https://quickchart.io/qr?text=Discord-${randomIndex}`;
}
setInterval(changeQr, 10000);

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  DOB: string;
  image: string;
}
// Fetch user data from a dummy JSON API and store it in the 'users' array
const getUserData: Promise<Response> = fetch("https://dummyjson.com/users?select=id,email,firstName,username,password,birthDate,image");
const users: User[] = [];
getUserData
  .then((response: Response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data: { users: User[] }) => {
    data.users.forEach((element: User) => {
      users.push(element);
    });
    console.log(users);
  })
  .catch((error: Error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// Function for handling the "Forgot Username" functionality
function forgotUsername(): void {
  let resetEmail: string | null = prompt("Enter an email id to send username recovery link"); // Prompt user to enter an email for username recovery
  let validEmailExpr: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // Validate the entered email
  if (resetEmail === null) {
    alert("Email cannot be empty");
  } else if (!resetEmail.match(validEmailExpr)) {
    alert("Not a valid email address");
  } else {
    alert(`An email with username recovery link has been sent to ${resetEmail}`);
  }
}

// Function for handling the "Forgot Password" functionality
function forgotPassword(): void {
  let usernameField: HTMLInputElement | null = document.getElementById("login-username") as HTMLInputElement;
  // Validate the entered username
  if (usernameField?.value === "") {
    alert("Please enter username and try again");
  } else {
    if (isValidUsername(usernameField.value)) {
      alert(`An email with password recovery link has been sent to email id corresponding to ${usernameField.value}`);
    } else {
      alert("Username not found");
    }
  }
}

// Function to validate user login
function validateLogin(): void {
  let usernameField: HTMLInputElement | null = document.getElementById("login-username") as HTMLInputElement;
  let passwordField: HTMLInputElement | null = document.getElementById("login-password") as HTMLInputElement;
  let registeredUsersData: string | null = sessionStorage.getItem("registeredUsers");
  if (registeredUsersData) {
    // Check against registered users in session storage
    let registeredUsers: User[] = JSON.parse(registeredUsersData);
    if (registeredUsers.length > 0) {
      registeredUsers.forEach((registeredUser) => {
        if (
          registeredUser.username === usernameField?.value &&
          registeredUser.password === passwordField?.value
        ) {
          // Save the matched user in session storage and redirect to homepage
          sessionStorage.setItem("loggedInUser", JSON.stringify(registeredUser));
          window.location.href = "../Homepage/home.html";
        }
      });
    }
  } else {
    // Check against fetched 'users' if no registered users in session storage
    let userId: number = isValidLogin(usernameField?.value, passwordField?.value);
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
function isValidUsername(checkUsername: string): boolean {
  let foundUser: boolean = false;
  let registeredUsersData: string | null = sessionStorage.getItem("registeredUsers");
  if (registeredUsersData) {
    // Check if username exists among registered users in session storage
    let registeredUsers: User[] = JSON.parse(registeredUsersData);
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
function isValidLogin(checkUsername: string, checkPassword: string): number {
  let userMatch: boolean = false;
  let userID: number = -1;
  for (let i = 0; i < users.length; i++) {
    if (
      checkUsername === users[i].username &&
      checkPassword === users[i].password
    ) {
      userMatch = true;
      userID = i; // Return user index if the combination is valid
    }
  }
  return userID;
}
