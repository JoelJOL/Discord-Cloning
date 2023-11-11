
fetch('https://picsum.photos/v2/list?page=2&limit=100')
      .then(response => response.json())
      .then(json => console.log(json))