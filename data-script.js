document.addEventListener('DOMContentLoaded', function() {
    const dataForm = document.getElementById('data-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Load saved data from localStorage
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername) {
        usernameInput.value = savedUsername;
    }
    if (savedPassword) {
        passwordInput.value = savedPassword;
    }

    dataForm.addEventListener('submit', function(event) {
        event.preventDefault();
        localStorage.setItem('username', usernameInput.value);
        localStorage.setItem('password', passwordInput.value);
        alert('Дані збережено!');
    });
});
