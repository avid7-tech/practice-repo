document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('.text-container span');

    letters.forEach(letter => {
        // Skip the space elements
        if (letter.classList.contains('space')) {
            return;
        }

        // Apply a random transform on mouseover
        letter.addEventListener('mouseover', () => {
            const randomX = Math.random() * 20 - 10; // -10px to 10px
            const randomY = Math.random() * 20 - 10; // -10px to 10px
            const randomRot = Math.random() * 30 - 15; // -15deg to 15deg
            
            letter.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRot}deg) scale(1.1)`;
        });

        // Reset the transform on mouseout
        letter.addEventListener('mouseout', () => {
            letter.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
        });
    });
});