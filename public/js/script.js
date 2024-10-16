var typed = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer", "Front-end developer", "Graphic Designer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

// Form Submission//

// Add event listener to the form for submission
document.getElementById('ContactForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent the default form submission behavior

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Send the data to the server via POST request
    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            alert('Form submitted successfully!');
            document.getElementById('ContactForm').reset();  // Clear the form fields after successful submission
        })
        .catch(error => {
            console.error('Error:', error);
        });
});



