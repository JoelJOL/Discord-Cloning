const url="https://jsonplaceholder.typicode.com/posts";
const urlimage="https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=100";
let j=0;
async function getData(url,j){
    try{
        const response = await fetch(url,{
            method:'get',
            });
            if(!response.ok){
                throw new Error("network response was not ok");
            }
            const responseData=await response.json();
            console.log(responseData[1].body);
            getfeed(responseData,j);
        }
        catch(error){
            console.error("there was a problem with fetch operation: ",error);
        }
    }
async function getData1(urlimage,j){
    try{
        const response1 = await fetch(urlimage,{
            method:'get',
            });
            if(!response1.ok){ 
                throw new Error("network response was not ok");
            }
            const responseData1=await response1.json();
            console.log(responseData1.photos[0].url);
            return responseData1;
        }
        catch(error){
            console.error("there was a problem with fetch operation: ",error);
        }
    }
getData(url,j)


function reloadDIV (a) 
{
    // document.getElementById("div-with-feeds").innerHTML.reload;
    $('#div-with-feeds').empty();
    if(a!=0)
    a=a*15
    console.log(a)
    getData(url,a);
}
function getfeed(responseData,j)
{
    const responseData1=getData1(urlimage,j);
    console.log(responseData1);
    for(i=j;i<j+15;i++)
            {
                console.log(33);
                let divWithFeeds=document.getElementById("div-with-feeds");
                let feed=document.createElement('div');
                let feedImageDiv=document.createElement('div');
                let feedImage=document.createElement('img');
                feedImage.setAttribute("src","/Discover/images/feed-image.svg");
                // feedImage.setAttribute("src",responseData1.photos[0].url);
                feed.classList.add("feed1");
                feedImageDiv.classList.add("feedImageDiv");
                feedImage.classList.add("feed-image");
                feedImageDiv.appendChild(feedImage);
                feed.appendChild(feedImageDiv);
                let feedRightSide=document.createElement('div');
                let feedHeading=document.createElement('h4');
                feedHeading.textContent=responseData[i].title;
                let feedContent=document.createElement('p');
                feedContent.textContent=responseData[i].body;
                feedRightSide.classList.add("feed-right-side");
                feedHeading.classList.add("feed-heading");
                feedContent.classList.add("feed-cnotent");
                feedRightSide.appendChild(feedHeading);
                feedRightSide.appendChild(feedContent);
                feed.appendChild(feedRightSide);
                divWithFeeds.appendChild(feed);
            }
}