let index = 0;

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