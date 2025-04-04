// Mouse Events
const mouseButton = document.getElementById('mouse-button');
const mouseMessage = document.getElementById('mouse-message');

mouseButton.addEventListener('mouseover', () => {
    mouseMessage.textContent = 'Mouse is hovering over the button!';
});

mouseButton.addEventListener('mouseout', () => {
    mouseMessage.textContent = 'Mouse has left the button!';
});

// Keyboard Events
const keyboardInput = document.getElementById('keyboard-input');
const keyboardMessage = document.getElementById('keyboard-message');

keyboardInput.addEventListener('keyup', (event) => {
    keyboardMessage.textContent = `Last key pressed: ${event.key}`;
});

// Form Events
const form = document.getElementById('form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents form submission
    formMessage.textContent = 'Form submitted successfully!';
});
