
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

                let mainSection=document.getElementsByClassName("dynamicbox");
            for(i=0;i<5;i++)
            {
                let row=document.createElement('div');
                row.classList.add("container");

                let rowimage=document.createElement('div');
                rowimage.classList.add("container-img");``
                let dynamicImage = document.createElement('img'); 
                dynamicImage.setAttribute("src",responseData.photos[i].url);
        

                let rowtext=document.createElement('div');
                rowtext.classList.add("description");
                
                let rowtexthead=document.createElement('h2');
                rowtexthead.textContent= responseData.photos[i].title;

                let rowtextpara=document.createElement("p");
                rowtextpara.textContent=responseData.photos[i].description;

            if((i%2)==0)
            {
                mainSection[0].appendChild(row);
                row.appendChild(rowimage);
                rowimage.appendChild(dynamicImage);
                row.appendChild(rowtext);
                rowtext.appendChild(rowtexthead);
                rowtext.appendChild(rowtextpara);

            }

            else
            {
                mainSection[0].appendChild(row);
                row.appendChild(rowtext);
                rowtext.appendChild(rowtexthead);
                rowtext.appendChild(rowtextpara);
                row.appendChild(rowimage);
                rowimage.appendChild(dynamicImage);
            }
             
            }
        }
        catch(error){
            console.error("there was a problem with fetch operation: ",error);
        }
    }
getData(url)
