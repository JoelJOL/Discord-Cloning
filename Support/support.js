function createImage(image, divRow) {
  const Image = document.createElement("img");
  Image.src = image;
  //func2();
  divRow.appendChild(Image);
}
//async function func2(){
// try{
//      const request= await fetch("https://dummyjson.com/posts?limit=10&skip=10&select=title,body");
//       let data=await request.json();
//     console.log(data);
//  const Card = document.createElement("a");
//Card.className = "linkcard";
//const content = document.createElement("div");
//contentStore.className = "content";
//
//   const mainDiv = document.querySelector("body");

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
      console.log(divRow);

      mainDiv.appendChild(divRow);
    }
  } catch (error) {
    console.log(error);
  }
}
func();
//    <div class="highlight block-link">
//<h2>I am an example header</h2>
//<p>
//  <a href="pageone" class="block-link__overlay-link">This entire box</a>
//  links somewhere, thanks to faux block links. I am some example text with
//  a <a href="pagetwo">custom link</a> that sits within the block
//</p>
//</div>
