const urlText = "https://jsonplaceholder.typicode.com/posts";
const urlImage = "https://mocki.io/v1/e8fba4ad-c8ad-42e8-b33e-cce4b95facf8";
const urlGaming = "https://picsum.photos/v2/list?page=2&limit=100";
let j = 0;
let i = 0;
let prevPageNumber = 0;
async function getData(urlText, j) {
  try {
    const response = await fetch(urlText, {
      method: "get",
    });
    if (!response.ok) {
      throw new Error("network response was not ok");
    }
    const responseData = await response.json();
    console.log(responseData[1].body);
    getfeed(responseData, j);
  } catch (error) {
    console.error("there was a problem with fetch operation: ", error);
  }
}
getData(urlText, j);

async function getData1(urlImage, j) {
  try {
    const response1 = await fetch(urlImage, {
      method: "get",
    });
    if (!response1.ok) {
      throw new Error("network response was not ok");
    }
    const responseData1 = await response1.json();
    // let a=[];
    // for(let i=0;i<100;i++)
    // {
    //     a[i]=responseData1.photos[i].url;
    // }
    return responseData1;
  } catch (error) {
    console.error("there was a problem with fetch operation: ", error);
  }
}

function reloadDIV(a) {
  // document.getElementById("div-with-feeds").innerHTML.reload;
  pageNumberColor(a);
  $("#div-with-feeds").empty();
  if (a != 0) a = a * 15;
  console.log(a);
  getData(urlText, a);
}

function getfeed(responseData, j) {
  (async () => {
    console.log(await getData1(urlImage, j));
    const responseData1 = await getData1(urlImage, j);

    // const responseData1=getData1(urlImage,j);
    console.log(responseData1);
    const photosList = responseData1;
    // console.log(responseData1);
    const createFeed = (photosList, responseData) => {
      let feed = document.createElement("div");
      let feedImageDiv = document.createElement("div");
      let feedImage = document.createElement("img");
      // feedImage.setAttribute("src","/Discover/images/feed-image.svg");
      feedImage.setAttribute("src", photosList.url);
      feed.classList.add("feed1");
      feedImageDiv.classList.add("feedImageDiv");
      feedImage.classList.add("feed-image");
      feedImageDiv.appendChild(feedImage);
      feed.appendChild(feedImageDiv);
      let feedRightSide = document.createElement("div");
      const feedHeading = document.createElement("h4");
      feedHeading.textContent = responseData[i].title;
      let feedContent = document.createElement("p");
      feedContent.textContent = responseData[i].body;
      feedRightSide.classList.add("feed-right-side");
      feedHeading.classList.add("feed-heading");
      feedHeading.addEventListener("click", () => {
        openNewPage(photosList.id);
      });
      feedContent.classList.add("feed-cotent");
      feedRightSide.appendChild(feedHeading);
      feedRightSide.appendChild(feedContent);
      feed.appendChild(feedRightSide);
      i++;
      return feed;
    };
    photosList.map((photosList, index) => {
      if (index <= j + 15 && index > i) {
        const divWithFeeds = document.getElementById("div-with-feeds");
        const feed = createFeed(photosList, responseData);
        divWithFeeds.appendChild(feed);
      }
    });
  })();
}

function pageNumberColor(pageNo) {
  document
    .getElementById(`page-${prevPageNumber}`)
    .classList.remove("page-active");
  document.getElementById(`page-${pageNo}`).classList.add("page-active");
  prevPageNumber = pageNo;
}

// $('div.category').click(function(){
//     $('#div-with-feeds').empty();
// });

const clickedDiv = document.getElementsByClassName("category");

for (let k = 0; k < 6; k++) {
  clickedDiv[k].addEventListener("click", function () {
    console.log("Div was clicked!");
    $("#div-with-feeds").empty();
    pageNumberColor(0);
    getDataGaming(urlGaming, 0);
  });
}

async function getDataText(urlText, j) {
  try {
    const response = await fetch(urlText, {
      method: "get",
    });
    if (!response.ok) {
      throw new Error("network response was not ok");
    }
    const responseData = await response.json();
    // console.log(responseData[1].body);
    return responseData;
  } catch (error) {
    console.error("there was a problem with fetch operation: ", error);
  }
}
async function getDataGaming(urlGaming, j) {
  try {
    const response = await fetch(urlGaming, {
      method: "get",
    });
    if (!response.ok) {
      throw new Error("network response was not ok");
    }
    const responseData = await response.json();
    console.log(responseData);
    getfeedGaming(responseData, j);
  } catch (error) {
    console.error("there was a problem with fetch operation: ", error);
  }
}

function getfeedGaming(responseData, j) {
  (async () => {
    console.log(await getDataText(urlText, j));
    const responseData1 = await getDataText(urlText, j);

    // const responseData1=getData1(urlImage,j);
    console.log(responseData1);
    // console.log(responseData1);
    for (i = j; i < j + 17; i++) {
      let divWithFeeds = document.getElementById("div-with-feeds");
      let feed = document.createElement("div");
      let feedImageDiv = document.createElement("div");
      let feedImage = document.createElement("img");
      // feedImage.setAttribute("src","/Discover/images/feed-image.svg");
      feedImage.setAttribute("src", responseData[i].download_url);
      feed.classList.add("feed1");
      feedImageDiv.classList.add("feedImageDiv");
      feedImage.classList.add("feed-image");
      feedImageDiv.appendChild(feedImage);
      feed.appendChild(feedImageDiv);
      let feedRightSide = document.createElement("div");
      let feedHeading = document.createElement("h4");
      let k = i - 1;
      feedHeading.textContent = responseData1[k].title;
      let feedContent = document.createElement("p");
      feedContent.textContent = responseData1[k].body;
      feedRightSide.classList.add("feed-right-side");
      feedHeading.classList.add("feed-heading");
      feedContent.classList.add("feed-cnotent");
      feedRightSide.appendChild(feedHeading);
      feedRightSide.appendChild(feedContent);
      feed.appendChild(feedRightSide);
      divWithFeeds.appendChild(feed);
    }
  })();
}
const openNewPage = (Data1) => {
  console.log(Data1);
  window.location.href = `individualFeed.html?id=${Data1}`;
};

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