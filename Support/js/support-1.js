async function func2(Card, divRow) {
  try {
    const request = await fetch(
      "https://dummyjson.com/posts?limit=30&skip=10&select=title,body"
    );
    let data = await request.json();
    console.log(data);

    console.log(divRow);
    for (let index = 0; index < data.posts.length; index++) {
      let post = data.posts[index];
      create(post, Card);
      divRow.appendChild(Card);
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

function create(post, Card) {
  const cardText = document.createElement("div");
  cardText.className = "card-text";
  const cardLink = document.createElement("a");
  cardLink.href = "";
  cardLink.className = "card-link";
  const cardTitle = document.createElement("h3");
  cardTitle.className = "card-text-title";
  cardTitle.textContent = post.title;
  const cardDesc = document.createElement("p");
  cardDesc.className = "card-text-description";
  cardDesc.textContent = post.body;
  cardLink.appendChild(cardTitle);
  cardText.appendChild(cardLink);
  cardText.appendChild(cardDesc);
  Card.appendChild(cardText);
}
