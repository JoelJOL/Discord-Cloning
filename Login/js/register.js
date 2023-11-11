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
for (let i = 0; i < month.length; i++) {
  let monthList = document.getElementById("month-list");
  let monthItem = document.createElement("option");
  monthItem.setAttribute("value", `${i + 1}`);
  monthItem.innerHTML = `${month[i]}`;
  monthList.appendChild(monthItem);
}
for (let i = 1; i <= 31; i++) {
  let dateList = document.getElementById("date-list");
  let dateItem = document.createElement("option");
  dateItem.setAttribute("value", `${i}`);
  dateItem.innerHTML = `${i}`;
  dateList.appendChild(dateItem);
}
for (let i = 2020; i >= 1900; i--) {
  let yearList = document.getElementById("year-list");
  let yearItem = document.createElement("option");
  yearItem.setAttribute("value", `${i}`);
  yearItem.innerHTML = `${i}`;
  yearList.appendChild(yearItem);
}

function validateRegister() {
  let emailField = document.getElementById("register-email");
  let displaynameField = document.getElementById("register-name");
  let usernameField = document.getElementById("register-username");
  let passwordField = document.getElementById("register-password");
  let monthField = document.getElementById("month-list");
  let dateField = document.getElementById("date-list");
  let yearField = document.getElementById("year-list");
  let date = `${yearField.value}/${monthField.value}/${dateField.value}`;
  let acceptTerms = document.getElementById("register-terms");
  if (emailField.value === "") {
    alert("Email cannot be empty");
  } else if (!isValidEmail(emailField.value)) {
  } else if (usernameField.value === "") {
    alert("Username cannot be empty");
  } else if (passwordField.value.length < 8) {
    alert("Password must be minimum 8 characters");
  } else if (
    yearField.value === "" ||
    monthField.value === "" ||
    dateField.value === ""
  ) {
    alert("Invalid date");
  } else if (!acceptTerms.checked) {
    alert("Accept the Terms and Policy");
  } else {
    let userData = {
      email: emailField.value,
      username: usernameField.value,
      firstName: displaynameField.value,
      password: passwordField.value,
      birthDate: date,
    };
    const postUrl = "https://dummyjson.com/users/add";
    const postResponse = addUser(postUrl, userData);
    console.log(postResponse);
  }
}

function isValidEmail(registerEmail) {
  let validEmailExpr =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!registerEmail.match(validEmailExpr)) {
    alert("Not a valid email address");
    return false;
  } else {
    return true;
  }
}

// function isValidDate() {}

async function addUser(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
