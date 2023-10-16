function submitMarks(event) {
    event.preventDefault(); // Prevent the form from submitting and page reloading

    const scoreType = document.getElementById('scoreType').value;

    if (scoreType === 'grade') {
        const mathsGrade = document.getElementById('mathsGrade').value;
        const physicsGrade = document.getElementById('physicsGrade').value;
        const chemistryGrade = document.getElementById('chemistryGrade').value;

        // Additional processing for grade data
    } else if (scoreType === 'percentage') {
        const mathsPercentage = document.getElementById('mathsPercentage').value;
        const physicsPercentage = document.getElementById('physicsPercentage').value;
        const chemistryPercentage = document.getElementById('chemistryPercentage').value;

        // Additional processing for percentage data
    }

    const fileUpload = document.getElementById('fileUpload').files[0];

    if (!fileUpload) {
        alert('Please select a file to upload.');
        return;
    }

    // Additional processing for file upload

    // After processing, navigate to the terms and conditions page (you can replace this with your logic)
    window.location.href = 'terms-and-conditions.html';
}

document.getElementById('scoreType').addEventListener('change', function () {
    const scoreType = this.value;
    const gradeFields = document.getElementById('gradeFields');
    const percentageFields = document.getElementById('percentageFields');

    if (scoreType === 'grade') {
        gradeFields.style.display = 'block';
        percentageFields.style.display = 'none';
    } else if (scoreType === 'percentage') {
        gradeFields.style.display = 'none';
        percentageFields.style.display = 'block';
    }
});
