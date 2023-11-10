const getImages = fetch("https://picsum.photos/v2/list");

getImages
  .then((response) => response.json())
  .then((data) => {
    let images = [];
    data.forEach((element) => {
      images.push(element);
    });
    console.log(images);
    function changeBg() {
      const randomIndex = Math.floor(Math.random() * images.length);
      document.body.style.backgroundImage = `url(${images[randomIndex].download_url})`;
    }
    // setInterval(changeBg, 1000);
  });

function login() {
  console.log("hello");
  let boxDiv = document.getElementById("outer");
  let inputFormDiv = document.createElement("div");
  inputFormDiv.classList.add("container-form");
  let headingDiv = document.createElement("div");
  headingDiv.classList.add("container-form", "heading");
  let headingMain = document.createElement("div");
  headingMain.innerHTML = "Welcome back!";
  let headingPara = document.createElement("p");
  headingPara.innerHTML = `We're so excited to see you again`;
  headingDiv.appendChild(headingMain);
  headingDiv.appendChild(headingPara);
  inputFormDiv.appendChild(headingDiv);
  let emailDiv = document.createElement("div");
  emailDiv.classList.add("container-form", "input");
  let emailLabel = document.createElement("label");
  emailLabel.innerHTML = "EMAIL OR PHONE NUMBER";
  let emailInput = document.createElement("input");
  emailInput.setAttribute("type", "text");
  emailDiv.appendChild(emailLabel);
  emailDiv.appendChild(emailInput);
  inputFormDiv.appendChild(emailDiv);
  let passwordDiv = document.createElement("div");
  passwordDiv.classList.add("container-form", "input");
  let passwordLabel = document.createElement("label");
  passwordLabel.innerHTML = "PASSWORD";
  let passwordInput = document.createElement("input");
  passwordInput.setAttribute("type", "text");
  let passwordForget = document.createElement("a");
  passwordForget.setAttribute("href", "");
  passwordForget.innerHTML = "Forgot your passsword?";
  passwordDiv.appendChild(passwordLabel);
  passwordDiv.appendChild(passwordInput);
  passwordDiv.appendChild(passwordForget);
  inputFormDiv.appendChild(passwordDiv);
  let loginDiv = document.createElement("div");
  loginDiv.classList.add("container-form", "login");
  let loginButton = document.createElement("button");
  loginButton.classList.add("login-button");
  loginButton.innerHTML = "Log In";
  loginDiv.appendChild(loginButton);
  let needAccount = document.createElement("span");
  needAccount.innerHTML = "Need an account?";
  loginDiv.appendChild(needAccount);
  let registerLink = document.createElement("a");
  registerLink.innerHTML = "Register";
  registerLink.setAttribute("href", "");
  loginDiv.appendChild(registerLink);
  inputFormDiv.appendChild(loginDiv);
  boxDiv.appendChild(inputFormDiv);

  let qrFormDiv = document.createElement("div");
  qrFormDiv.classList.add("container-form");
  let qrDiv = document.createElement("div");
  qrDiv.classList.add("container-form", "qr");
  let qrImg = document.createElement("img");
  qrImg.setAttribute("id", "qrCode");
  qrImg.setAttribute("src", "img/exampleQR.png");
  qrImg.setAttribute("alt", "Login QR");
  qrDiv.appendChild(qrImg);
  let qrDesc = document.createElement("div");
  qrDesc.classList.add("container-form", "desc");
  let descHeading = document.createElement("h3");
  descHeading.innerHTML = "Log In with QR Code";
  let descPara = document.createElement("p");
  descPara.innerHTML =
    "Scan this with the <strong>Discord mobile app</strong> to log in instantly.";
  qrDesc.appendChild(descHeading);
  qrDesc.appendChild(descPara);
  qrDiv.appendChild(qrDesc);
  qrFormDiv.appendChild(qrDiv);
  boxDiv.appendChild(qrFormDiv);
}
