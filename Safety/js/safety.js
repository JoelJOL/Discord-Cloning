const url = "https://mocki.io/v1/cf4f1528-026b-404d-b9bb-cb4e8b6e9057";
async function getData(url) {
  try {
    const response = await fetch(url, {
      method: "get",
    });
    if (!response.ok) {
      throw new Error("network response was not ok");
    }
    const responseData = await response.json();

    console.log(responseData);
    let safetyDetailTag = document.getElementsByClassName("safety-detail");
    for (let i = 0; i < 6; i++) {
      if (i % 2 != 0) {
        let safetyDetailDiv = document.createElement("div");
        safetyDetailDiv.classList.add("safety-detail-content");
        // image on the right side
        let safetyDetailImageDiv = document.createElement("div");
        safetyDetailImageDiv.classList.add("safety-detail-image");
        var safetyDetailImage = document.createElement("img");
        safetyDetailImage.setAttribute("src", responseData.photos[i].url);
        safetyDetailImageDiv.appendChild(safetyDetailImage);
        safetyDetailDiv.appendChild(safetyDetailImageDiv);
        //text on the left side
        let safetyDetailTextDiv = document.createElement("div");
        safetyDetailTextDiv.classList.add("safety-detail-text");
        //heading
        let safetyDetailHeadingDiv = document.createElement("h2");
        safetyDetailHeadingDiv.classList.add("safety-detail-heading");
        safetyDetailHeadingDiv.textContent = responseData.photos[i].title;
        safetyDetailTextDiv.appendChild(safetyDetailHeadingDiv);
        //paragraph
        let safetyDetailParagraphDiv = document.createElement("div");
        safetyDetailParagraphDiv.classList.add("safety-detail-paragraph");
        let safetyDetailParaDiv = document.createElement("p");
        safetyDetailParaDiv.textContent = responseData.photos[i].description;
        safetyDetailParagraphDiv.appendChild(safetyDetailParaDiv);
        safetyDetailTextDiv.appendChild(safetyDetailParagraphDiv);
        //explore more
        let safetyDetailExploreMoreDiv = document.createElement("div");
        safetyDetailExploreMoreDiv.classList.add("safety-detail-explore-more");
        let safetyDetailExploreMoreTextDiv = document.createElement("div");
        safetyDetailExploreMoreTextDiv.classList.add(
          "safety-detail-explore-more-text"
        );
        let safetyDetailHeadingExploreMoreDiv = document.createElement("h4");
        safetyDetailHeadingExploreMoreDiv.textContent = "Explore more";
        safetyDetailExploreMoreTextDiv.appendChild(
          safetyDetailHeadingExploreMoreDiv
        );
        safetyDetailExploreMoreDiv.appendChild(safetyDetailExploreMoreTextDiv);
        var safetyDetailArrowDiv = document.createElement("div");
        safetyDetailArrowDiv.classList.add("arrow");
        var img = document.createElement("img");
        img.setAttribute("src", "../Safety/images/arrow.png");
        safetyDetailArrowDiv.appendChild(img);
        safetyDetailExploreMoreDiv.appendChild(safetyDetailArrowDiv);
        safetyDetailTextDiv.appendChild(safetyDetailExploreMoreDiv);
        safetyDetailDiv.appendChild(safetyDetailTextDiv);
        safetyDetailTag[0].appendChild(safetyDetailDiv);
      } else {
        //text on the right side
        let safetyDetailDiv = document.createElement("div");
        safetyDetailDiv.classList.add("safety-detail-content");
        let safetyDetailTextDiv = document.createElement("div");
        safetyDetailTextDiv.classList.add("safety-detail-text");
        //heading
        let safetyDetailHeadingDiv = document.createElement("h2");
        safetyDetailHeadingDiv.classList.add("safety-detail-heading");
        safetyDetailHeadingDiv.textContent = responseData.photos[i].title;
        safetyDetailTextDiv.appendChild(safetyDetailHeadingDiv);
        //paragraph
        let safetyDetailParagraphDiv = document.createElement("div");
        safetyDetailParagraphDiv.classList.add("safety-detail-paragraph");
        let safetyDetailParaDiv = document.createElement("p");
        safetyDetailParaDiv.textContent = responseData.photos[i].description;
        safetyDetailParagraphDiv.appendChild(safetyDetailParaDiv);
        safetyDetailTextDiv.appendChild(safetyDetailParagraphDiv);
        //explore more
        let safetyDetailExploreMoreDiv = document.createElement("div");
        safetyDetailExploreMoreDiv.classList.add("safety-detail-explore-more");
        let safetyDetailExploreMoreTextDiv = document.createElement("div");
        safetyDetailExploreMoreTextDiv.classList.add(
          "safety-detail-explore-more-text"
        );
        let safetyDetailHeadingExploreMoreDiv = document.createElement("h4");
        safetyDetailHeadingExploreMoreDiv.textContent = "Explore more";
        safetyDetailExploreMoreTextDiv.appendChild(
          safetyDetailHeadingExploreMoreDiv
        );
        safetyDetailExploreMoreDiv.appendChild(safetyDetailExploreMoreTextDiv);
        var safetyDetailArrowDiv = document.createElement("div");
        safetyDetailArrowDiv.classList.add("arrow");
        var img = document.createElement("img");
        img.setAttribute("src", "../Safety/images/arrow.png");
        safetyDetailArrowDiv.appendChild(img);
        safetyDetailExploreMoreDiv.appendChild(safetyDetailArrowDiv);
        safetyDetailTextDiv.appendChild(safetyDetailExploreMoreDiv);
        safetyDetailDiv.appendChild(safetyDetailTextDiv);
        // image on the left side
        let safetyDetailImageDiv = document.createElement("div");
        safetyDetailImageDiv.classList.add("safety-detail-image");
        var safetyDetailImage = document.createElement("img");
        safetyDetailImage.setAttribute("src", responseData.photos[i].url);
        safetyDetailImageDiv.appendChild(safetyDetailImage);
        safetyDetailDiv.appendChild(safetyDetailImageDiv);
        safetyDetailTag[0].appendChild(safetyDetailDiv);
      }
    }
  } catch (error) {
    console.error("there was a problem with fetch operation: ", error);
  }
}
getData(url);
let links = [
  "safetylibrary.html",
  "privacyhub.html",
  "parenthub.html",
  "transparencyhub.html",
  "safetynewshub.html",
  "policyhub.html",
];
setTimeout(() => {
  const clickedDiv = document.getElementsByClassName("safety-detail-content");
  for (let i = 0; i < 6; i++) {
    clickedDiv[i].addEventListener("click", function () {
      window.location.replace(links[i]);
    });
  }
}, 500);
function openForm() {
  document.getElementsByClassName("card").style.display = "block";
}

function closeForm() {
  document.getElementsByClassName("card").style.display = "none";
}

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
