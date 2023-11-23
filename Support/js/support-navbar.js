function myFunction() {
  var x = document.getElementById("header-navBar");
  if (x.className === "header-navigationBar") {
    x.className += " responsive";
  } else {
    x.className = "header-navigationBar";
  }
}
