const urlImage="https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=100";

const urlParam = new URLSearchParams(window.location.search);
 
const idImage = Number(urlParam.get("id"));
console.log(idImage);
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
            let newUrl=findId(response.photos);
            let section=document.getElementById('section');
            let feedMainImageDiv=document.createElement('div');
            feedMainImageDiv.classList.add("feed-main-image-div");
            let feedMainImage=document.createElement('img');
            feedMainImage.classList.add("feed-main-image");
            feedMainImage.setAttribute("src",newUrl);
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


function findId(photos){
    console.log(photos);
for(let i=0;i<100;i++)
{
    if(photos[i].id==idImage);
    {
        console.log(photos.url);
        return photos.url;
    }
}
   
}