const url = "https://mocki.io/v1/8202fd28-1862-41e1-a401-03de5a4d4cdc";
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
    let middleTag = document.getElementsByClassName("middle-container");
    for (let j = 0; j < 6; j+=2) 
    {
    let sectionContainerDiv = document.createElement("div");
    for (let i = j; i < (j+2); i++) {
        let sectionDiv = document.createElement("div");
        sectionDiv.classList.add("discord-section");
        var sectionImage = document.createElement("img");
        sectionImage.setAttribute("src", responseData.photos[i].url);
        sectionDiv.appendChild(sectionImage);
        let sectionheading = document.createElement("h3");
        sectionheading.textContent = responseData.photos[i].title;
        sectionDiv.appendChild(sectionheading);
        let sectionParaDiv = document.createElement("p");
        sectionParaDiv.textContent = responseData.photos[i].description;
        sectionDiv.appendChild(sectionParaDiv);
        sectionContainerDiv.appendChild(sectionDiv);
    }
    middleTag[0].appendChild(sectionContainerDiv);
}

  } catch (error) {
    console.error("there was a problem with fetch operation: ", error);
  }
}
getData(url)

const url1 = "https://mocki.io/v1/ded502fa-2dac-44d5-8ab4-d6818b6ea168";

async function getData1(url1) {
  try {
    const responses = await fetch(url1, {
      method: "get",
    });

    if (!responses.ok) {
      throw new Error("Network response was not ok");
    }

    const responseDatas = await responses.json();
    const bottomTag = document.getElementsByClassName("bottom-main-container")[0];

    for (let j = 0; j < 6; j++) {
      const bottomContainerDiv = document.createElement("div");
      bottomContainerDiv.classList.add("bottom-container");
      const bottomLeftDiv = document.createElement("div");
      bottomLeftDiv.classList.add("bottom-left");
      const sectionHeading = document.createElement("h4");
      sectionHeading.textContent = "COLLECTION";
      bottomLeftDiv.appendChild(sectionHeading);
      const sectionHeading2 = document.createElement("h2");
      sectionHeading2.innerHTML = responseDatas.photos[j].title;
      bottomLeftDiv.appendChild(sectionHeading2);
      const sectionLeftImage = document.createElement("img");
      sectionLeftImage.setAttribute("src", responseDatas.photos[j].url1);
      bottomLeftDiv.appendChild(sectionLeftImage);
      const sectionLeftParaDiv = document.createElement("p");
      sectionLeftParaDiv.textContent = responseDatas.photos[j].description1;
      bottomLeftDiv.appendChild(sectionLeftParaDiv);
      const sectionButtonDiv = document.createElement("button");
      sectionButtonDiv.textContent = "view collection";
      bottomLeftDiv.appendChild(sectionButtonDiv);
      bottomContainerDiv.appendChild(bottomLeftDiv);

      // Creating the bottom-right div
      const bottomRightDiv = document.createElement("div");
      bottomRightDiv.classList.add("bottom-right");
      const bottomRightTopDiv = document.createElement("div");
      bottomRightTopDiv.classList.add("bottom-right-top");
      const sectionRightTopImage = document.createElement("img");
      sectionRightTopImage.setAttribute("src", responseDatas.photos[j].url2);
      bottomRightTopDiv.appendChild(sectionRightTopImage);
      const sectionRightParaDiv = document.createElement("p");
      sectionRightParaDiv.textContent = responseDatas.photos[j].description2;
      bottomRightTopDiv.appendChild(sectionRightParaDiv);
      bottomRightDiv.appendChild(bottomRightTopDiv);
      const bottomRightBottomContainerDiv = document.createElement("div");
      bottomRightBottomContainerDiv.classList.add("bottom-right-bottom-container");
      for (let i = j; i < j + 3; i++) {
        const bottomRightBottomDiv = document.createElement("div");
        bottomRightBottomDiv.classList.add("bottom-right-bottom");
        const bottomRightBottomImage = document.createElement("img");
        bottomRightBottomImage.setAttribute("src", responseDatas.photos[i].url);
        bottomRightBottomDiv.appendChild(bottomRightBottomImage);
        const bottomRightBottomParaDiv = document.createElement("p");
        bottomRightBottomParaDiv.textContent = responseDatas.photos[i].description;
        bottomRightBottomDiv.appendChild(bottomRightBottomParaDiv);
        bottomRightBottomContainerDiv.appendChild(bottomRightBottomDiv);
      }
      bottomRightDiv.appendChild(bottomRightBottomContainerDiv);
      bottomContainerDiv.appendChild(bottomRightDiv);
      bottomTag.appendChild(bottomContainerDiv);
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

getData1(url1);
