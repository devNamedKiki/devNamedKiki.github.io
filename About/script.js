// Get the tab links and tab content
const tabLinks = document.querySelectorAll(".tabs li");
const tabContent = document.querySelectorAll(".tab-content");

// Set the default tab
tabLinks[0].classList.add("active");
tabContent[0].classList.add("active");

// Add event listeners to the tab links
for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener("click", function() {
    // Remove the active class from all tab links and tab content
    for (let j = 0; j < tabLinks.length; j++) {
      tabLinks[j].classList.remove("active");
      tabContent[j].classList.remove("active");
    }
    // Add the active class to the clicked tab link and corresponding tab content
    this.classList.add("active");
    const tab = this.getAttribute("data-tab");
    document.querySelector(`#${tab}`).classList.add("active");
  });
}
