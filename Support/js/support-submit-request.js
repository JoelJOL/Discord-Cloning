function showForm() {
  var formSelector = document.getElementById("submit-request-list");
  var generalHelpForm = document.getElementById("helpsup_form");
  var hackedForm = document.getElementById("hacked_form");

  console.log(formSelector.value);

  // Show the selected form
  var selectedForm = formSelector.value;
  if (selectedForm === "helpsup") {
    hackedForm.setAttribute("hidden", "hidden");
    generalHelpForm.removeAttribute("hidden");
  } else if (selectedForm === "hacked") {
    console.log(245);
    generalHelpForm.setAttribute("hidden", "hidden");
    hackedForm.removeAttribute("hidden");
  } else {
    generalHelpForm.setAttribute("hidden", "hidden");
    hackedForm.setAttribute("hidden", "hidden");
  }
}
