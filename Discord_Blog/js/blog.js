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
getData(url);