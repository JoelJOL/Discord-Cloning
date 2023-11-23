function createImage(image, divRow) {
  const Card = document.createElement("div");
  Card.className = "highlight card";
  const Image = document.createElement("img");
  Image.src = image;

  Image.style.width = "100px";
  Image.style.height = "100px";
  Card.appendChild(Image);
  func2(Card, divRow);
  return;
}

async function func() {
  try {
    const request = await fetch("https://picsum.photos/v2/list");
    let data = await request.json();
    console.log(data);

    const mainDiv = document.querySelector("section");

    for (let index = 0; index < data.length; index++) {
      let image = data[index].download_url;
      const divRow = document.createElement("div");
      divRow.className = "divRow";

      image = data[index].download_url;
      createImage(image, divRow);
      for (let index1 = 0; index1 < 3; index1++) {
        index++;
        image = data[index].download_url;
        createImage(image, divRow);
      }

      console.log(divRow);

      mainDiv.appendChild(divRow);
    }
  } catch (error) {
    console.log(error);
  }
}
func();
