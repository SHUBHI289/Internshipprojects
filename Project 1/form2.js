document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let pass = document.getElementById("password").value;
  let confirm = document.getElementById("confirm").value;
  let error = document.getElementById("error");

  error.textContent = ""; // clear old errors

  if (name === "" || email === "" || pass === "" || confirm === "") {
    error.textContent = "All fields are required.";
    return;
  }

  if (pass.length < 6) {
    error.textContent = "Password must be at least 6 characters.";
    return;
  }

  if (pass !== confirm) {
    error.textContent = "Passwords do not match.";
    return;
  }

  alert("Form submitted successfully!");
  document.getElementById("regForm").reset();
});

