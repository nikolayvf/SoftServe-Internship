function checkFields() {
  const nameValue = document.getElementById("name").value.trim();
  const emailValue = document.getElementById("email").value.trim();
  const messageValue = document.getElementById("message").value.trim();
  const submitButton = document.getElementById("submitButton");

  if (nameValue !== "" && emailValue !== "" && messageValue !== "") {
    submitButton.removeAttribute("disabled");
    document.getElementById("contactForm").reportValidity();
  } else {
    submitButton.setAttribute("disabled", "disabled");
  }
}

document.getElementById("name").addEventListener("input", checkFields);
document.getElementById("email").addEventListener("input", checkFields);
document.getElementById("message").addEventListener("input", checkFields);

checkFields();
