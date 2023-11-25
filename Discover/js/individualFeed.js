// const urlImage="https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=100";
const urlImage = "https://mocki.io/v1/e8fba4ad-c8ad-42e8-b33e-cce4b95facf8";
const urlText = "https://jsonplaceholder.typicode.com/posts";

const urlParam = new URLSearchParams(window.location.search);

const idImage = Number(urlParam.get("id"));
console.log(idImage);
const findImage = async () => {
  const response = await fetch(urlImage);
  response = await response.json();
};

async function getImage(urlImage) {
  try {
    const response = await fetch(urlImage, {
      method: "get",
    });
    if (!response.ok) {
      throw new Error("network response was not ok");
    }
    const responseData = await response.json();
    photosList = responseData;
    let findImageFeed = photosList.filter((photosListi) => {
      if (photosListi.id == idImage) {
        return photosListi;
      }
    });
    console.log(findImageFeed);
    displayData(findImageFeed);
  } catch (error) {
    console.error("there was a problem with fetch operation: ", error);
  }
}

getImage(urlImage);
const displayData = (findImageFeed) => {
  (async () => {
    const responseData1 = await getDataText(urlText);
    console.log(responseData1);
    let section = document.getElementById("section");
    let feedMainImageDiv = document.createElement("div");
    feedMainImageDiv.classList.add("feed-main-image-div");
    let feedMainImage = document.createElement("img");
    feedMainImage.classList.add("feed-main-image");
    feedMainImage.setAttribute("src", findImageFeed[0].url);
    feedMainImageDiv.appendChild(feedMainImage);
    let feedContentDiv = document.createElement("div");
    feedContentDiv.classList.add("feed-content-div");
    let feedContentTitle = document.createElement("h1");
    console.log(responseData1.title);
    feedContentTitle.textContent = responseData1[0].title;
    feedContentTitle.classList.add("feed-content-title");
    feedContentDiv.appendChild(feedContentTitle);
    let feedContentParagraph = document.createElement("p");
    feedContentParagraph.textContent = responseData1[0].body;
    feedContentParagraph.classList.add("feed-content-paragraph");
    feedContentDiv.appendChild(feedContentParagraph);
    section.appendChild(feedMainImageDiv);
    section.appendChild(feedContentDiv);
  })();
};

async function getDataText(urlText) {
  try {
    const response = await fetch(urlText, {
      method: "get",
    });
    if (!response.ok) {
      throw new Error("network response was not ok");
    }
    const responseData = await response.json();
    // console.log(responseData[1].body);
    let findDataFeed = responseData.filter((dataList) => {
      console.log(idImage);
      if (dataList.id == idImage - 1) {
        return dataList;
      }
    });
    console.log(findDataFeed);
    return findDataFeed;
  } catch (error) {
    console.error("there was a problem with fetch operation: ", error);
  }
}
