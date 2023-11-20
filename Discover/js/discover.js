const url="https://jsonplaceholder.typicode.com/posts";
const urlImage="https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=100";
const urlGaming="https://picsum.photos/v2/list?page=2&limit=100";
let j=0;
let prevPageNumber=0;
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
    getData(url,j)

async function getData1(urlImage,j){
    try{
        const response1 = await fetch(urlImage,{
            method:'get',
            });
            if(!response1.ok){ 
                throw new Error("network response was not ok");
            }
            const responseData1=await response1.json();
            console.log(responseData1.photos[0].url);
            b=responseData1.photos[0].url;
            // let a=[];
            // for(let i=0;i<100;i++)
            // {
            //     a[i]=responseData1.photos[i].url;
            // }       
                return responseData1;
        }
        catch(error){
            console.error("there was a problem with fetch operation: ",error);
        }
    }


function reloadDIV (a) 
{
    // document.getElementById("div-with-feeds").innerHTML.reload;
    pageNumberColor(a);
    $('#div-with-feeds').empty();
    if(a!=0)
    a=a*15
    console.log(a)
    getData(url,a);
}

function getfeed(responseData,j)
{
    (async () => {
        console.log(await getData1(urlImage,j))
        const responseData1=await getData1(urlImage,j);
     
    // const responseData1=getData1(urlImage,j);
    console.log(responseData1)
    // console.log(responseData1);
    for(i=j;i<j+15;i++)
            {
                console.log(33);
                let divWithFeeds=document.getElementById("div-with-feeds");
                let feed=document.createElement('div');
                let feedImageDiv=document.createElement('div');
                let feedImage=document.createElement('img');
                // feedImage.setAttribute("src","/Discover/images/feed-image.svg");
                feedImage.setAttribute("src",responseData1.photos[i].url);
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
                feedHeading.addEventListener('click',()=>{
                console.log("hello event")
                openNewPage(responseData1.photos[i].id);
                ;})
                feedContent.classList.add("feed-cnotent");
                feedRightSide.appendChild(feedHeading);
                feedRightSide.appendChild(feedContent);
                feed.appendChild(feedRightSide);
                divWithFeeds.appendChild(feed);
            }
        })()
}

function pageNumberColor(pageNo){
        document.getElementById(`page-${prevPageNumber}`).classList.remove("page-active");        
        document.getElementById(`page-${pageNo}`).classList.add("page-active");     
        prevPageNumber=pageNo;   
}


// $('div.category').click(function(){
//     $('#div-with-feeds').empty();
// });

const clickedDiv=document.getElementsByClassName("category");
for(let k=0;k<6;k++)
{
clickedDiv[k].addEventListener('click', function() {
    console.log('Div was clicked!');
    $('#div-with-feeds').empty();
    pageNumberColor(0);
    getDataGaming(urlGaming,0);
  });
}
  
  async function getDataText(url,j){
    try{
        const response = await fetch(url,{
            method:'get',
            });
            if(!response.ok){
                throw new Error("network response was not ok");
            }
            const responseData=await response.json();
            // console.log(responseData[1].body);
           return responseData;
            
        }
        catch(error){
            console.error("there was a problem with fetch operation: ",error);
        }
    }
  async function getDataGaming(urlGaming,j){
    try{
        const response = await fetch(urlGaming,{
            method:'get',
            });
            if(!response.ok){
                throw new Error("network response was not ok");
            }
            const responseData=await response.json();
            console.log(responseData);
            getfeedGaming(responseData,j);
            
        }
        catch(error){
            console.error("there was a problem with fetch operation: ",error);
        }
    }

function getfeedGaming(responseData,j)
{
    (async () => {
        console.log(await getDataText(url,j))
        const responseData1=await getDataText(url,j);
     
    // const responseData1=getData1(urlImage,j);
    console.log(responseData1)
    // console.log(responseData1);
    for(i=j;i<j+17;i++)
            {
                console.log(99);
                let divWithFeeds=document.getElementById("div-with-feeds");
                let feed=document.createElement('div');
                let feedImageDiv=document.createElement('div');
                let feedImage=document.createElement('img');
                // feedImage.setAttribute("src","/Discover/images/feed-image.svg");
                feedImage.setAttribute("src",responseData[i].download_url);
                feed.classList.add("feed1");
                feedImageDiv.classList.add("feedImageDiv");
                feedImage.classList.add("feed-image");
                feedImageDiv.appendChild(feedImage);
                feed.appendChild(feedImageDiv);
                let feedRightSide=document.createElement('div');
                let feedHeading=document.createElement('h4');
                feedHeading.textContent=responseData1[i].title;
                let feedContent=document.createElement('p');
                feedContent.textContent=responseData1[i].body;
                feedRightSide.classList.add("feed-right-side");
                feedHeading.classList.add("feed-heading");
                feedContent.classList.add("feed-cnotent");
                feedRightSide.appendChild(feedHeading);
                feedRightSide.appendChild(feedContent);
                feed.appendChild(feedRightSide);
                divWithFeeds.appendChild(feed);
            }
        })()
}
const openNewPage = (responseData1)=>{
    console.log(responseData1)
    window.location.href = `individualFeed.html?id=${responseData1}`
}