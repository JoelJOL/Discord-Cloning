const qrReq = fetch("https://jsonplaceholder.typicode.com/photos");

qrReq
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
