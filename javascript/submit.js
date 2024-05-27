document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Премахва default функцията на submit

    // Redirect-ва към email-sent.html
    window.location.href = "email-sent.html";
  });
});
