const url="https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=6"
 
async function getData(url){
    try{
        const response = await fetch(url,{
            method:'get',
            });
            if(!response.ok){
                throw new Error("network response was not ok");
            }
            const responseData=await response.json();
 
            console.log(responseData);
            let safetyDetailTag=document.getElementsByClassName("safety-detail");
    for(let i=0;i<6;i++)
    {
        if(i%2!=0)
        {
    let safetyDetailDiv=document.createElement('div');
    safetyDetailDiv.classList.add("safety-detail-content");
    let safetyDetailTextDiv=document.createElement('div');
    safetyDetailTextDiv.classList.add("safety-detail-text");
    let safetyDetailHeadingDiv=document.createElement('h2');
    safetyDetailHeadingDiv.classList.add("safety-detail-heading");
    safetyDetailHeadingDiv.textContent= responseData.photos[i].title;
    safetyDetailTextDiv.appendChild(safetyDetailHeadingDiv);
    let safetyDetailParagraphDiv=document.createElement('div');
    safetyDetailParagraphDiv.classList.add("safety-detail-paragraph");
    let safetyDetailParaDiv=document.createElement('p');
    safetyDetailParaDiv.textContent=responseData.photos[i].description;
    safetyDetailParagraphDiv.appendChild(safetyDetailParaDiv);
    safetyDetailTextDiv.appendChild(safetyDetailParagraphDiv);
    let safetyDetailExploreMoreDiv=document.createElement('div');
    safetyDetailExploreMoreDiv.classList.add("safety-detail-explore-more");
    let safetyDetailExploreMoreTextDiv=document.createElement('div');
    safetyDetailExploreMoreTextDiv.classList.add("safety-detail-explore-more-text");
    let safetyDetailHeadingExploreMoreDiv=document.createElement('h4');
    safetyDetailHeadingExploreMoreDiv.textContent="Explore more";
    safetyDetailExploreMoreTextDiv.appendChild(safetyDetailHeadingExploreMoreDiv);
    safetyDetailExploreMoreDiv.appendChild(safetyDetailExploreMoreTextDiv);
    var safetyDetailArrowDiv=document.createElement('div');
    safetyDetailArrowDiv.classList.add("arrow");
    var img=document.createElement('img');
    img.setAttribute('src',"/Discord-Cloning/Safety/images/arrow.png");
    safetyDetailArrowDiv.appendChild(img);
    safetyDetailExploreMoreDiv.appendChild(safetyDetailArrowDiv);
    safetyDetailTextDiv.appendChild(safetyDetailExploreMoreDiv);
    safetyDetailDiv.appendChild(safetyDetailTextDiv);
    // image
    let safetyDetailImageDiv=document.createElement('div');
    safetyDetailImageDiv.classList.add("safety-detail-image");
    var safetyDetailImage=document.createElement('img');
    safetyDetailImage.setAttribute("src",responseData.photos[i].url);
    safetyDetailImageDiv.appendChild(safetyDetailImage);
    safetyDetailDiv.appendChild(safetyDetailImageDiv);
    safetyDetailTag[0].appendChild(safetyDetailDiv);   
}
    else
    {
    let safetyDetailDiv=document.createElement('div');
    safetyDetailDiv.classList.add("safety-detail-content");
         // image
    let safetyDetailImageDiv=document.createElement('div');
    safetyDetailImageDiv.classList.add("safety-detail-image");
    var safetyDetailImage=document.createElement('img');
    safetyDetailImage.setAttribute("src",responseData.photos[i].url);
    safetyDetailImageDiv.appendChild(safetyDetailImage);
    safetyDetailDiv.appendChild(safetyDetailImageDiv);
    
    
    let safetyDetailTextDiv=document.createElement('div');
    safetyDetailTextDiv.classList.add("safety-detail-text");
    let safetyDetailHeadingDiv=document.createElement('h2');
    safetyDetailHeadingDiv.classList.add("safety-detail-heading");
    safetyDetailHeadingDiv.textContent= responseData.photos[i].title;
    safetyDetailTextDiv.appendChild(safetyDetailHeadingDiv);
    let safetyDetailParagraphDiv=document.createElement('div');
    safetyDetailParagraphDiv.classList.add("safety-detail-paragraph");
    let safetyDetailParaDiv=document.createElement('p');
    safetyDetailParaDiv.textContent=responseData.photos[i].description;
    safetyDetailParagraphDiv.appendChild(safetyDetailParaDiv);
    safetyDetailTextDiv.appendChild(safetyDetailParagraphDiv);
    let safetyDetailExploreMoreDiv=document.createElement('div');
    safetyDetailExploreMoreDiv.classList.add("safety-detail-explore-more");
    let safetyDetailExploreMoreTextDiv=document.createElement('div');
    safetyDetailExploreMoreTextDiv.classList.add("safety-detail-explore-more-text");
    let safetyDetailHeadingExploreMoreDiv=document.createElement('h4');
    safetyDetailHeadingExploreMoreDiv.textContent="Explore more";
    safetyDetailExploreMoreTextDiv.appendChild(safetyDetailHeadingExploreMoreDiv);
    safetyDetailExploreMoreDiv.appendChild(safetyDetailExploreMoreTextDiv);
    var safetyDetailArrowDiv=document.createElement('div');
    safetyDetailArrowDiv.classList.add("arrow");
    var img=document.createElement('img');
    img.setAttribute('src',"/Discord-Cloning/Safety/images/arrow.png");
    safetyDetailArrowDiv.appendChild(img);
    safetyDetailExploreMoreDiv.appendChild(safetyDetailArrowDiv);
    safetyDetailTextDiv.appendChild(safetyDetailExploreMoreDiv);
    safetyDetailDiv.appendChild(safetyDetailTextDiv);
    safetyDetailTag[0].appendChild(safetyDetailDiv);
    
    };}
}
catch(error){
    console.error("there was a problem with fetch operation: ",error);
}
}
getData(url)
let links =["safetylibrary.html","privacyhub.html","parenthub.html","transparency.html","safetynewshub.html","policyhub.html"];
setTimeout(()=>{
    const clickedDiv=document.getElementsByClassName("safety-detail-content");
    for(let i=0;i<6;i++)
    {
clickedDiv[i].addEventListener('click', function() {
    window.location.replace(links[i]);

    
});
}
},500)
