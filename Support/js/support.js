let index = 0;

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

function create(comment, Card) {
  const cardText = document.createElement("div");
  cardText.className = "card-text";

  const cardLink = document.createElement("a");
  cardLink.href = "";
  cardLink.className = "card-link";

  const cardTitle = document.createElement("h3");
  cardTitle.className = "card-text-title";
  cardTitle.textContent = comment.user.username;

  const cardDesc = document.createElement("p");
  cardDesc.className = "card-text-description";
  cardDesc.textContent = comment.body;

  cardLink.appendChild(cardTitle);
  cardText.appendChild(cardLink);
  cardText.appendChild(cardDesc);
  Card.appendChild(cardText);
}

async function func2(Card, divRow) {
  try {
    const request = await fetch(
      "https://dummyjson.com/comments?limit=10&select=body,username"
    );
    let data = await request.json();
    console.log(data);

    // console.log(divRow);
    if (index < data.comments.length) {
      let comment = data.comments[index];
      create(comment, Card);
      divRow.appendChild(Card);
      index++;
      return;
    }
  } catch (error) {
    console.log(error);
  }
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
