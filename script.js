    // Mouse Events
    const mouseButton = document.getElementById('mouse-button');
    const mouseMessage = document.getElementById('mouse-message');

    mouseButton.addEventListener('mouseover', () => {
        mouseMessage.textContent = 'Mouse is hovering over the button!';
    });

    mouseButton.addEventListener('mouseout', () => {
        mouseMessage.textContent = 'Mouse has left the button!';
    });

