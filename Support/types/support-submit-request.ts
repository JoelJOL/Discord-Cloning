function showForm(): void {
    const formSelector: HTMLSelectElement | null = document.getElementById("submit-request-list") as HTMLSelectElement | null;
    const generalHelpForm: HTMLElement | null = document.getElementById("helpsup_form");
    const hackedForm: HTMLElement | null = document.getElementById("hacked_form");
  
    if (!formSelector || !generalHelpForm || !hackedForm) {
      console.error("One or more elements not found.");
      return;
    }
  
    // Show the selected form
    const selectedForm: string = formSelector.value;
  
    if (selectedForm === "helpsup") {
      (generalHelpForm as HTMLElement).hidden = false;
      (hackedForm as HTMLElement).hidden = true;
    } else if (selectedForm === "hacked") {
      (generalHelpForm as HTMLElement).hidden = true;
      (hackedForm as HTMLElement).hidden = false;
    } else {
      (generalHelpForm as HTMLElement).hidden = true;
      (hackedForm as HTMLElement).hidden = true;
    }
  }
  