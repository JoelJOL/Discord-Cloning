const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// Dynamically populate the month dropdown list
for (let i = 0o0; i < month.length; i++) {
  let monthList = document.getElementById("month-list");
  let monthItem = document.createElement("option");
  monthItem.setAttribute("value", `${i + 1}`);
  monthItem.innerHTML = `${month[i]}`;
  monthList.appendChild(monthItem);
}
// Dynamically populate the date dropdown list
for (let i = 0o1; i <= 31; i++) {
  let dateList = document.getElementById("date-list");
  let dateItem = document.createElement("option");
  dateItem.setAttribute("value", `${i}`);
  dateItem.innerHTML = `${i}`;
  dateList.appendChild(dateItem);
}
// Dynamically populate the year dropdown list
for (let i = 2020; i >= 1900; i--) {
  let yearList = document.getElementById("year-list");
  let yearItem = document.createElement("option");
  yearItem.setAttribute("value", `${i}`);
  yearItem.innerHTML = `${i}`;
  yearList.appendChild(yearItem);
}

// Function to validate and submit the registration form
async function validateRegister() {
  let emailField = document.getElementById("register-email");
  let displayNameField = document.getElementById("register-name");
  let usernameField = document.getElementById("register-username");
  let passwordField = document.getElementById("register-password");
  let monthField = document.getElementById("month-list");
  let dateField = document.getElementById("date-list");
  let yearField = document.getElementById("year-list");
  let date = `${yearField.value}-${monthField.value}-${dateField.value}`; // Construct the birthdate in the format YYYY-MM-DD
  let imageURL = `https://robohash.org/${usernameField.value}`;
  // Create user data object
  let userData = {
    id: Math.floor(Math.random() * 9999999999),
    name: displayNameField.value,
    email: emailField.value,
    username: usernameField.value,
    password: passwordField.value,
    DOB: date,
    image: imageURL,
  };
  const postUrl =
    "https://script.google.com/macros/s/AKfycbz4M_55FnUzXQOhGAD_2fPQTIZUkRcETl3D0RSE1sw7jPmSzS55MF9OMJFDJq4UPDt0bA/exec"; // URL for posting user data
  const postResponse = await addUser(postUrl, userData); // Add user using the addUser function
  console.log(postResponse);
  // Retrieve and update the registered users data in session storage
  // let registeredUsers =
  //   JSON.parse(sessionStorage.getItem("registeredUsers")) || [];
  // registeredUsers.push(userData);
  // sessionStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
  window.location.href = "../Login/login.html"; // Redirect to the login page
}
// function isValidDate() {}

// Async function to add a user by making a POST request
async function addUser(url, userData) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(userData),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
