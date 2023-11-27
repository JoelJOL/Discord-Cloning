function showForm() {
    var formSelector = document.getElementById("submit-request-list");
    var generalHelpForm = document.getElementById("helpsup_form");
    var hackedForm = document.getElementById("hacked_form");
    if (!formSelector || !generalHelpForm || !hackedForm) {
        console.error("One or more elements not found.");
        return;
    }
    // Show the selected form
    var selectedForm = formSelector.value;
    if (selectedForm === "helpsup") {
        generalHelpForm.hidden = false;
        hackedForm.hidden = true;
    }
    else if (selectedForm === "hacked") {
        generalHelpForm.hidden = true;
        hackedForm.hidden = false;
    }
    else {
        generalHelpForm.hidden = true;
        hackedForm.hidden = true;
    }
}
