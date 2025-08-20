const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop the form from submitting

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error fields
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  let isValid = true;

  // Clear previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  //  Regex Patterns
  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{6,}$/; // at least 6 characters

  //  Validate Name
  if (!nameRegex.test(name)) {
    nameError.textContent = "Name must contain only letters.";
    isValid = false;
  }

  //  Validate Email
  if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  //  Validate Password
  if (!passwordRegex.test(password)) {
    passwordError.textContent = "Password must be at least 6 characters long.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    // You can send form data to server here
    form.reset();
  }
});
