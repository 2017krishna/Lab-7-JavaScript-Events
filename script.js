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

// Focus and Blur Events
const focusBlurInput = document.getElementById('focus-blur-input');
const focusBlurMessage = document.getElementById('focus-blur-message');

focusBlurInput.addEventListener('focus', () => {
    focusBlurMessage.textContent = 'Input field is focused!';
});

focusBlurInput.addEventListener('blur', () => {
    focusBlurMessage.textContent = 'Input field lost focus!';
});

// Event Delegation
const buttonContainer = document.getElementById('button-container');
const delegationMessage = document.getElementById('delegation-message');

buttonContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        delegationMessage.textContent = `You clicked: ${event.target.textContent}`;
    }
});
