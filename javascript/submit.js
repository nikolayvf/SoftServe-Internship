document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    // Removes the default submit functionality
    event.preventDefault();

    // Redirects to email-sent.html
    window.location.href = "email-sent.html";
  });
});
