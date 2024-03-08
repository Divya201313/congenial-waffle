const submitButton = document.querySelector('#submit-button');

// Change button text to "Processing..." when clicked
submitButton.addEventListener('click', function() {
    submitButton.textContent = 'Processing...';
});
