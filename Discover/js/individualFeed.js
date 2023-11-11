const urlImage="https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=100";

const urlParam = new URLSearchParams(window.location.search);
 
const id = Number(urlParam.get("id"));
console.log(id);
console.log(typeof id);
let filteredData;


async function getImage(urlImage){
    try{
        const response = await fetch(urlImage,{
            method:'get',
            });
            if(!response.ok){
                throw new Error("network response was not ok");
            }
            const responseData=await response.json();
            console.log(responseData);
            let section=document.getElementById('section');
            let feedMainImageDiv=document.createElement('div');
            feedMainImageDiv.classList.add("feed-main-image-div");
            let feedMainImage=document.createElement('img');
            feedMainImage.classList.add("feed-main-image");
            feedMainImage.setAttribute("src","/Discover/images/discover-main-image.jpg");
            feedMainImageDiv.appendChild(feedMainImage);
            let feedContentDiv=document.createElement('div');
            feedContentDiv.classList.add("feed-content-div");
            let feedContentTitle=document.createElement('h1');
            feedContentTitle.textContent="Title";
            feedContentTitle.classList.add("feed-content-title")
            feedContentDiv.appendChild(feedContentTitle);
            let feedContentParagraph=document.createElement('p');
            feedContentParagraph.textContent="content";
            feedContentParagraph.classList.add("feed-content-paragraph")
            feedContentDiv.appendChild(feedContentParagraph);
            section.appendChild(feedMainImageDiv);
            section.appendChild(feedContentDiv)


        }
        catch(error){
            console.error("there was a problem with fetch operation: ",error);
        }
    }
getImage(urlImage);