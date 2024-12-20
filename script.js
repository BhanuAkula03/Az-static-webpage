// Add event listeners to buttons for future enhancements
document.querySelectorAll('.btn-secondary').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Navigating to the review page...');
    });
});
