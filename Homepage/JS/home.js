const url1 = "https://mocki.io/v1/89d8db87-1e7d-4756-a1d7-908747f7049d";

async function getData(url1) {
  try {
    const response = await fetch(url1, {
      method: "get",
    });
    if (!response.ok) {
      throw new Error("network response was not ok");
    }
    const responseData = await response.json();

    console.log(responseData);

    let mainSection = document.getElementsByClassName("dynamicbox");
    for (i = 0; i < 3; i++) {
      let row = document.createElement("div");
      row.classList.add("container");

      let rowimage = document.createElement("div");
      rowimage.classList.add("container-img");
      ``;
      let dynamicImage = document.createElement("img");
      dynamicImage.classList.add("home-feed-images");
      dynamicImage.setAttribute("src", responseData.photos[i].url);

      let rowtext = document.createElement("div");
      rowtext.classList.add("description");

      let rowtexthead = document.createElement("h2");
      rowtexthead.textContent = responseData.photos[i].title;

      let rowtextpara = document.createElement("p");
      rowtextpara.textContent = responseData.photos[i].description;

      if (i % 2 == 0) {
        mainSection[0].appendChild(row);
        row.appendChild(rowimage);
        rowimage.appendChild(dynamicImage);
        row.appendChild(rowtext);
        rowtext.appendChild(rowtexthead);
        rowtext.appendChild(rowtextpara);
      } else {
        mainSection[0].appendChild(row);
        row.appendChild(rowtext);
        rowtext.appendChild(rowtexthead);
        rowtext.appendChild(rowtextpara);
        row.appendChild(rowimage);
        rowimage.appendChild(dynamicImage);
      }
    }
  } catch (error) {
    console.error("there was a problem with fetch operation: ", error);
  }
}

getData(url1);

document.addEventListener("DOMContentLoaded", function () {
  // Add an event listener to the button
  document.getElementById("opendis").addEventListener("click", function () {
    // Replace the button with a textbox
    replaceWithTextbox(this);

    // Hide the "Download for Windows" button
    document.getElementById("dfw").style.display = "none";
  });

  // Function to replace the button with a textbox
  function replaceWithTextbox(button) {
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter A Username";
    input.style.paddingRight = '80px';
    input.style.paddingTop='20px';
    input.style.fontSize = '16px';
    input.style.border = 'none';
    input.style.borderRadius = '20px';
    input.style.outline = 'none';
    input.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.2)'; 

    // Insert the input after the button
    button.parentNode.insertBefore(input, button.nextSibling);

    // Hide the button
    button.style.display = "none";

    // Focus on the input
    input.focus();

    // Add a blur event listener to switch back to the button when the input loses focus
    input.addEventListener("blur", function () {
      // Remove the input
      input.parentNode.removeChild(input);

      // Show the button again
      button.style.display = "inline-block";

      // Show the "Download for Windows" button
      document.getElementById("dfw").style.display = "inline-block";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let loggedInUserData = sessionStorage.getItem("loggedInUser"); // Retrieve logged-in user data from session storage
  // Check if there is a logged-in user
  if (loggedInUserData) {
    let loggedInUser = JSON.parse(loggedInUserData); // Parse the logged-in user data
    let loginButtonDiv = document.getElementById("button-login-div");
    if (loginButtonDiv) {
      loginButtonDiv.remove(); // Check if the login button div exists, and if so, remove it
      let navBar = document.getElementById("navbar");
      // Create a div for the profile icon
      let profileIconDiv = document.createElement("div");
      profileIconDiv.setAttribute("id", "profile-icon-div");
      // Check if the profile icon div exists
      if (profileIconDiv) {
        // Create a link for the profile redirect
        let profileRedirect = document.createElement("a");
        profileRedirect.href = "../Login/login.html";
        // Create an image element for the profile icon
        let profileIcon = document.createElement("img");
        profileIcon.src = loggedInUser.image;
        profileIcon.alt = "Profile Icon";
        profileRedirect.appendChild(profileIcon); // Append the profile icon to the profile redirect link
        profileIconDiv.appendChild(profileRedirect); // Append the profile redirect link to the profile icon div
      }
      navBar.appendChild(profileIconDiv);
    }
  }
});