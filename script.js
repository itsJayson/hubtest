//index.html
function loadHTMLComponents() {
  //   Nav
  fetch("nav.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("nav").innerHTML = data;
    })
    .catch((error) => console.error("Error loading nav:", error));

  //  Header
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("header").innerHTML = data;
    })
    .catch((error) => console.error("Error loading header:", error));

  //  Footer
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("footer").innerHTML = data;
    })
    .catch((error) => console.error("Error loading header:", error));
}

window.onload = loadHTMLComponents;

//faqs.html
$(document).ready(function () {
  $(".collapse.show").each(function () {
    $(this).prev(".card-header").addClass("highlight");
  });

  $(".card-header .btn").click(function () {
    $(".card-header").not($(this).parents()).removeClass("highlight");
    $(this).parents(".card-header").toggleClass("highlight");
  });
});

//about.html
$(".shopButton").on("click", function () {
  window.location.href = "index.html";
});

//contact.html
function validate() {
  const phoneInput = document.getElementById("phone").value.trim();

  if (!phoneInput) {
    alert("Phone number is required.");
    return false;
  }

  // Check if captcha is completed
  const captchaResponse = document.querySelector(
    '.h-captcha [name="h-captcha-response"]'
  ).value;

  if (!captchaResponse) {
    alert("Please complete the captcha.");
    return false;
  }

  return true;
}
