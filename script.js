// Add a class to the body to trigger fade animation
function fadeOutPage(callback) {
    document.querySelector(".fade-content").classList.add("fade-out");
    setTimeout(callback, 500); // Adjust delay to match your CSS transition duration
  }
  
  function fadeInPage() {
    document.querySelector(".fade-content").classList.remove("fade-out");
  }
  
  // Wait for the page to be fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    // Apply fade-in animation when transitioning to a new page
    const links = document.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        fadeOutPage(function () {
          window.location.href = link.getAttribute("href"); // Redirect to the new page
        });
      });
    });
  
    // Apply fade-in animation on initial page load
    fadeInPage();
  });
  