document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop form from submitting

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (email === "" || password === "") {
    message.style.color = "red";
    message.textContent = "All fields are required!";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    message.style.color = "red";
    message.textContent = "Please enter a valid email!";
  } else if (password.length < 6) {
    message.style.color = "red";
    message.textContent = "Password must be at least 6 characters!";
  } else {
    message.style.color = "green";
    message.textContent = "Login successful 🎉";
  }
});
