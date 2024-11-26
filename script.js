// script.js

// Function to upload image and analyze
document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the image file
    const imageFile = document.getElementById('image-upload').files[0];
    if (!imageFile) {
        alert('Please upload an image');
        return;
    }

    // Send image to server for analysis
    const formData = new FormData();
    formData.append('image', imageFile);

    fetch('/predict', { // Replace with actual server endpoint
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Display the result
        document.getElementById('prediction-result').textContent = `Diagnosis: ${data.prediction}`;
        document.getElementById('result').style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during analysis');
    });
});
