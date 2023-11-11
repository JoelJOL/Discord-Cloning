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
  if (emailField.value === "") {
    alert("Email cannot be empty");
  } else {
    let validEmailExpr =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailField.value.match(validEmailExpr)) {
      alert("Not a valid email address");
    }
  }
  let usernameField = document.getElementById("register-username");
  if (usernameField.value === "") {
    alert("Username cannot be empty");
  }
  let passwordField = document.getElementById("register-password");
  if (passwordField.value.length < 9) {
    alert("Password must be minimum 8 characters");
  }
  let monthField = document.getElementById("month-list");
  let dateField = document.getElementById("date-list");
  let yearField = document.getElementById("year-list");
  let date = `${yearField.value}/${monthField.value}/${dateField.value}`;
  console.log(date);
}
