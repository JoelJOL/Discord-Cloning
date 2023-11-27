// const staticBackdrop = document.getElementById('staticBackdrop');
// const myInput = document.getElementById('staticBackdrop');

// staticBackdrop.addEventListener('shown.bs.modal', () => {
//   myInput.focus();
// });

const urlServerImage = "https://mocki.io/v1/e8fba4ad-c8ad-42e8-b33e-cce4b95facf8";
let numMyServer=0;

async function getImage(urlServerImage) {
    try {
      const response1 = await fetch(urlServerImage, {
        method: "get",
      });
      if (!response1.ok) {
        throw new Error("network response was not ok");
      }
      const responseData1 = await response1.json();
      return responseData1;
    } catch (error) {
      console.error("there was a problem with fetch operation: ", error);
    }
  }

const getServerImage=()=>{
    (async () => {
        $("#your-server-image").empty();
    const imageId = Math.floor(Math.random() * 80) + 1;
    console.log(imageId);
    let yourServerImage=document.getElementById('your-server-image');
    const responseData=await getImage(urlServerImage);
    let image=document.createElement('img');
    image.setAttribute("src",responseData[imageId].url);
    image.classList.add('generate-image');
    yourServerImage.appendChild(image);
    console.log("server"); 
    console.log(responseData[imageId]);
    console.log("server"); 
})();
}
function updateDropdown(selectedItem) {
    const dropdownButton = document.querySelector('.dropdown-center .btn');
    dropdownButton.textContent = selectedItem;
  }

  function handleCheckboxClick(clickedCheckboxId, otherCheckboxId) {
    const clickedCheckbox = document.getElementById(clickedCheckboxId);
    const otherCheckbox = document.getElementById(otherCheckboxId);

    if (clickedCheckbox.checked) {
      otherCheckbox.disabled = true;
    } else {
      otherCheckbox.disabled = false;
    }
  }
  const saveServerData=()=>{
    let serverImageUrl=document.getElementById("server-image-url").value;
    if(serverImageUrl=='')
    {
        let image=document.getElementsByClassName('generate-image');
        const imageUrl=image[0].src;
        sessionStorage.setItem(`imageUrl${numMyServer}`,imageUrl);
    }
    else{
        sessionStorage.setItem(`imageUrl${numMyServer}`,serverImageUrl);
    }
    
    let serverName=document.getElementById("input-server-name").value;
    sessionStorage.setItem(`serverName${numMyServer}`,serverName);
    let category = document.querySelector('.dropdown-center .btn').textContent;
    sessionStorage.setItem(`category${numMyServer}`,category);
    let description=document.getElementById("server-description").value;
    sessionStorage.setItem(`description${numMyServer}`,description);
    numMyServer=parseInt(numMyServer)+parseInt(1);
    sessionStorage.setItem('numMyServer',numMyServer);
    let firstClick=0;
    sessionStorage.setItem('firstClick',firstClick);
  }
  document.getElementById('my-server-num').textContent='';
  if(isNaN(parseInt(sessionStorage.getItem('numMyServer'))))
  {
    document.getElementById('my-server-num').textContent=parseInt(0);
    console.log("yes")
  }
  else{
    document.getElementById('my-server-num').textContent=parseInt(sessionStorage.getItem('numMyServer'));
    console.log("no")
  
}

  const button = document.querySelector('.button');
  const submit = document.querySelector('.submit');
  
  function toggleClass() {
      this.classList.toggle('active');
  }
  
  function addClass() {
      this.classList.add('finished');
      setTimeout(()=>{
        location.reload();
      },1000);
  }
  
  button.addEventListener('click', toggleClass);
  button.addEventListener('transitionend', toggleClass);
  button.addEventListener('transitionend', addClass);

const displayMyServers=()=>{
    console.log(101);
    numMyServer=sessionStorage.getItem('numMyServer');
    let feedDiv=document.getElementById("div-with-feeds");
    let serverDiv=document.getElementById("div-with-feeds-my");
    feedDiv.classList.toggle('change-div');
    serverDiv.classList.toggle('change-div');
    let firstClick = sessionStorage.getItem('firstClick');
    if(firstClick==0){
        getServerFeed();
        firstClick=1;
        sessionStorage.setItem('firstClick',firstClick);
    }

    
}
const getServerFeed=()=>{
    const divWithFeeds = document.getElementById("div-with-feeds-my");
    for(let i=0;i<numMyServer;i++)
    {
        let imageUrl = sessionStorage.getItem(`imageUrl${i}`);
        let serverName = sessionStorage.getItem(`serverName${i}`);
        let category = sessionStorage.getItem(`category${i}`);
        let description = sessionStorage.getItem(`description${i}`);
        let feed = document.createElement("div");
      let feedImageDiv = document.createElement("div");
      let feedImage = document.createElement("img");
      // feedImage.setAttribute("src","/Discover/images/feed-image.svg");
      feedImage.setAttribute("src", imageUrl);
      feed.classList.add("feed1");
      feedImageDiv.classList.add("feedImageDiv");
      feedImageDiv.classList.add("d-sm-flex");
      feedImageDiv.classList.add("d-none");
      feedImage.classList.add("feed-image");
      feedImageDiv.appendChild(feedImage);
      feed.appendChild(feedImageDiv);
      let feedRightSide = document.createElement("div");
      const feedHeading = document.createElement("h4");
      feedHeading.textContent = serverName;
      let feedContent = document.createElement("p");
      feedContent.textContent = description;
      feedRightSide.classList.add("feed-right-side");
      feedHeading.classList.add("feed-heading");
      feedContent.classList.add("feed-cotent");
      feedRightSide.appendChild(feedHeading);
      feedRightSide.appendChild(feedContent);
      feed.appendChild(feedRightSide);
      divWithFeeds.appendChild(feed);
    }
}