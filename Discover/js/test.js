fetch("https://mocki.io/v1/e74e7eba-f030-4627-8c12-455c387b7c39")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    let body = document.getElementsByTagName("body");
    for (let i = 1; i < 101; i++) {
      console.log(json.photos[i].url);
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.setAttribute("src", json.photos[i].url);
      div.appendChild(img);
      body[0].appendChild(div);
    }
  });
