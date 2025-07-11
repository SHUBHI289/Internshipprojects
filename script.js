const inputField = document.getElementById('userInput');
const button = document.getElementById('submitBtn');
const display = document.getElementById('display');

button.addEventListener('click', function() {
    const inputValue = inputField.value;
    display.textContent = `Hello, ${inputValue}!`;
});