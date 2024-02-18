document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        const inputs = document.querySelectorAll('input[required]');
        let isValid = true;

        inputs.forEach(function(input) {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        const errorMessage = document.getElementById('error-message');
        if (!isValid) {
            event.preventDefault(); // Prevent default form submission behavior
            errorMessage.textContent = 'Please fill in all required fields.';
        } else {
            errorMessage.textContent = ''; // Clear error message if all fields are valid
        }
    });
});

