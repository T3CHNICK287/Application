function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
}

function showSignupForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

function submitLogin(event) {
    event.preventDefault(); // Prevent the form from submitting and page reloading

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // You should implement authentication logic here, e.g., send a request to the server to check the credentials.
    // If the credentials are valid, you can navigate to the details.html page.

    // Example code to navigate to the details.html page:
    window.location.href = 'details.html';
}

function submitSignup(event) {
    event.preventDefault(); // Prevent the form from submitting and page reloading

    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // You should implement user registration logic here, e.g., send a request to the server to create a new account.
    // If the registration is successful, you can navigate to the details.html page.

    // Example code to navigate to the details.html page:
    window.location.href = 'details.html';
}
