
fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=100')
      .then(response => response.json())
      .then(json => console.log(json.photos[0].url))