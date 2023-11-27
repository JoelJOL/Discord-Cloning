function showForm() {
  var formSelector = document.getElementById("submit-request-list");
  var generalHelpForm = document.getElementById("helpsup_form");
  var hackedForm = document.getElementById("hacked_form");

  // Hide all forms by default
  generalHelpForm.classList.add("hidden");
  hackedForm.classList.add("hidden");

  // Show the selected form
  var selectedForm = formSelector.value;
  if (selectedForm === "helpsup") {
    generalHelpForm.classList.remove("hidden");
  } else if (selectedForm === "registration") {
    hackedForm.classList.remove("hidden");
  }
}
