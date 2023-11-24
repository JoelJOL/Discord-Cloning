const url = "https://dummyjson.com/users";
async function getData(url) {
  try {
    const response = await fetch(url, {
      method: "get",
    });
    if (!response.ok) {
      throw new Error("network response was not ok");
    }
    const responseData = await response.json();
    const responseData1 = await responseData.users;
    console.log(responseData1);
    createTable(responseData1);
  } catch (error) {
    console.error("there was a problem with fetch operation: ", error);
  }
}
getData(url);

function createTable(responseData1) {
  let table = document.getElementById("myTable");
  let tableBody = document.createElement("tbody");
  for (i = 0; i < 30; i++) {
    let tableRow = document.createElement("tr");
    let tableData1 = document.createElement("td");
    tableData1.textContent = i;
    tableRow.appendChild(tableData1);
    let tableData2 = document.createElement("td");
    tableData2.textContent = responseData1[i].firstName;
    tableRow.appendChild(tableData2);
    let tableData3 = document.createElement("td");
    tableData3.textContent = responseData1[i].lastName;
    tableRow.appendChild(tableData3);
    let tableData4 = document.createElement("td");
    tableData4.textContent = responseData1[i].university;
    tableRow.appendChild(tableData4);
    let tableData5 = document.createElement("td");
    tableData5.textContent = responseData1[i].phone;
    tableRow.appendChild(tableData5);
    let tableData6 = document.createElement("td");
    tableData6.textContent = responseData1[i].username;
    tableRow.appendChild(tableData6);

    tableBody.appendChild(tableRow);
  }
  table.appendChild(tableBody);
}
setTimeout(() => {
  let table = new DataTable("#myTable");
  $(document).ready(function () {
    $("#myTable").DataTable({
      lengthMenu: [
        [5, 10, 50, 100, -1],
        [5, 10, 50, 100, "All"],
      ],
    });
  });
}, 1000);

document.addEventListener("DOMContentLoaded", function () {
  let loggedInUserData = sessionStorage.getItem("loggedInUser");
  if (loggedInUserData) {
    let loggedInUser = JSON.parse(loggedInUserData);
    let loginButtonDiv = document.getElementById("button-login-div");
    if (loginButtonDiv) {
      loginButtonDiv.remove();
    }
    let navBar = document.getElementById("navbar");
    let profileIconDiv = document.createElement("div");
    profileIconDiv.setAttribute("id", "profile-icon-div");
    if (profileIconDiv) {
      let profileRedirect = document.createElement("a");
      profileRedirect.href = "./Login/login.html";
      let profileIcon = document.createElement("img");
      profileIcon.src = loggedInUser.image;
      profileIcon.alt = "Profile Icon";
      profileRedirect.appendChild(profileIcon);
      profileIconDiv.appendChild(profileRedirect);
    }
    navBar.appendChild(profileIconDiv);
  }
});
