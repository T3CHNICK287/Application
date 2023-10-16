function submitDetails() {
    // Get user input from the form
    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const lastName = document.getElementById('lastName').value;
    const streetName1 = document.getElementById('streetName1').value;
    const streetName2 = document.getElementById('streetName2').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    const pincode = document.getElementById('pincode').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Here, you can send the data to your server for processing or navigate to the marks upload page.
    // You can implement this logic as needed.

    // Example: Navigate to the marks upload page (you can replace this with your logic)
    window.location.href = 'marks-upload.html';
}
