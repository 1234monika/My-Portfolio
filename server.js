const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());  // To handle JSON data from requests

// Serve static files (like your HTML file)
app.use(express.static('public'));

// Handle form submission
app.post('/submit-form', (req, res) => {
    const newFormData = req.body;

    // Read the existing data from data.json
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data.json:', err);
            return res.status(500).json({ message: 'Error reading data' });
        }

        // Parse the existing data
        const formData = JSON.parse(data);

        // Add new form data to the existing data
        formData.push(newFormData);

        // Write the updated data back to data.json
        fs.writeFile('data.json', JSON.stringify(formData, null, 2), (err) => {
            if (err) {
                console.error('Error writing to data.json:', err);
                return res.status(500).json({ message: 'Error saving data' });
            }

            // Send a success response to the client
            res.json({ message: 'Form data saved successfully!' });
        });
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
