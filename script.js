function loadHTMLComponents() {
  // Load Nav
  fetch("nav.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("nav").innerHTML = data;
    })
    .catch((error) => console.error("Error loading nav:", error));

  // Load Header
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("header").innerHTML = data;
    })
    .catch((error) => console.error("Error loading header:", error));
}

// Call the function when the page loads
window.onload = loadHTMLComponents;
