function toggleCollapse() {
    const button = document.querySelector('.expand-text-bt');
    const collapseExample = document.querySelector('.card-body');
    const paragraph = document.querySelector('.p-expand-bt');

    // Toggle the 'expanded' class on the button and collapseExample
    button.classList.toggle('expanded');
    collapseExample.classList.toggle('expanded');
    paragraph.classList.toggle('expanded');
    console.log(22);
  }