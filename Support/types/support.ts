let index: number = 0;

interface Comment {
  user: {
    username: string;
  };
  body: string;
}

async function createImage(image: string, divRow: HTMLDivElement): Promise<void> {
  const Card: HTMLDivElement = document.createElement("div");
  Card.className = "highlight card";
  const Image: HTMLImageElement = document.createElement("img");
  Image.src = image;

  Image.style.width = "100px";
  Image.style.height = "100px";
  Card.appendChild(Image);
  await func2(Card, divRow);
  return;
}

function create(comment: Comment, Card: HTMLDivElement): void {
  const cardText: HTMLDivElement = document.createElement("div");
  cardText.className = "card-text";

  const cardLink: HTMLAnchorElement = document.createElement("a");
  cardLink.href = ""; // You should provide a valid URL here
  cardLink.className = "card-link";

  const cardTitle: HTMLHeadingElement = document.createElement("h3");
  cardTitle.className = "card-text-title";
  cardTitle.textContent = comment.user.username;

  const cardDesc: HTMLParagraphElement = document.createElement("p");
  cardDesc.className = "card-text-description";
  cardDesc.textContent = comment.body;

  cardLink.appendChild(cardTitle);
  cardText.appendChild(cardLink);
  cardText.appendChild(cardDesc);
  Card.appendChild(cardText);
}

async function func2(Card: HTMLDivElement, divRow: HTMLDivElement): Promise<void> {
  try {
    const request: Response = await fetch(
      "https://dummyjson.com/comments?limit=10&select=body,username"
    );
    let data: { comments: Comment[] } = await request.json();
    console.log(data);

    if (index < data.comments.length) {
      let comment: Comment = data.comments[index];
      create(comment, Card);
      divRow.appendChild(Card);
      index++;
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

async function func(): Promise<void> {
  try {
    const request: Response = await fetch("https://picsum.photos/v2/list");
    let data: { download_url: string }[] = await request.json();
    console.log(data);

    const mainDiv: HTMLElement | null = document.querySelector("section");

    if (mainDiv) {
      for (let i: number = 0; i < data.length; i++) {
        let image: string = data[i].download_url;
        const divRow: HTMLDivElement = document.createElement("div");
        divRow.className = "divRow";

        image = data[i].download_url;
        await createImage(image, divRow);
        for (let j: number = 0; j < 3; j++) {
          index++;
          image = data[index].download_url;
          await createImage(image, divRow);
        }

        console.log(divRow);

        if (mainDiv) {
          mainDiv.appendChild(divRow);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}

func();
