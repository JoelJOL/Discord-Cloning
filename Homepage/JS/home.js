
const url1="https://mocki.io/v1/89d8db87-1e7d-4756-a1d7-908747f7049d"



async function getData(url1){
    try{
        const response = await fetch(url1,{
            method:'get',
            });
            if(!response.ok){
                throw new Error("network response was not ok");
            }
            const responseData=await response.json();

            console.log(responseData);

                let mainSection=document.getElementsByClassName("dynamicbox");
            for(i=0;i<3;i++)
            {
                let row=document.createElement('div');
                row.classList.add("container");

                let rowimage=document.createElement('div');
                rowimage.classList.add("container-img");``
                let dynamicImage = document.createElement('img'); 
                dynamicImage.classList.add("home-feed-images");
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

getData(url1);


//////////////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to the button
    document.getElementById('opendis').addEventListener('click', function () {
      // Replace the button with a textbox
      replaceWithTextbox(this);
  
      // Hide the "Download for Windows" button
      document.getElementById('dfw').style.display = 'none';
    });
  
    // Function to replace the button with a textbox
    function replaceWithTextbox(button) {
      var input = document.createElement('input');
      input.type = 'text';
      input.placeholder = 'Enter Discord URL';
  
      // Insert the input after the button
      button.parentNode.insertBefore(input, button.nextSibling);
  
      // Hide the button
      button.style.display = 'none';
  
      // Focus on the input
      input.focus();
  
      // Add a blur event listener to switch back to the button when the input loses focus
      input.addEventListener('blur', function () {
        // Remove the input
        input.parentNode.removeChild(input);
  
        // Show the button again
        button.style.display = 'inline-block';
  
        // Show the "Download for Windows" button
        document.getElementById('dfw').style.display = 'inline-block';
      });
    }
  });
  
  /////////////////////////////////////////////////


