let url = "https://mocki.io/v1/e74e7eba-f030-4627-8c12-455c387b7c39";

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
    let photolist = responseData.photos;
    photolist.map((data) => {
      createHeadPic(data.url);
    });
  } catch (error) {
    console.error("there was a problem with fetch operation: ", error);
  }
}
getData(url);

const createHeadPic = (urlImage) => {
  let carouselInner = document.getElementsByClassName("carousel-inner");
  let headPicture = document.createElement("div");
  headPicture.setAttribute("id", "head-picture");
  headPicture.setAttribute("style", `background-image: url(${urlImage});`);
  headPicture.classList.add("container-fluid");
  headPicture.classList.add("carousel-item");
  let headPictureHeading = document.createElement("div");
  headPictureHeading.setAttribute("id", "head-picture-heading");
  headPictureHeading.classList.add("row-lg-12");
  let br = document.createElement("br");
  let br1 = document.createElement("br");
  let text1 = document.createTextNode("FIND YOUR");
  let text2 = document.createTextNode("COMMUNITY ON");
  let text3 = document.createTextNode("DISCORD");
  headPictureHeading.appendChild(text1);
  headPictureHeading.appendChild(br);
  headPictureHeading.appendChild(text2);
  headPictureHeading.appendChild(br1);
  headPictureHeading.appendChild(text3);
  let paragraph = document.createElement("p");
  paragraph.setAttribute("id", "head-pic-text");
  paragraph.textContent =
    "From gaming, to music, to learning, there's a place for you.";
  paragraph.classList.add("row-lg-12");
  headPicture.appendChild(headPictureHeading);
  headPicture.appendChild(paragraph);
  carouselInner[0].appendChild(headPicture);
};
