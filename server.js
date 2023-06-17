const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000; // Change this to the desired port

app.use(express.json());

app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Create the Google Form URL
  const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdHyXM4DwIHt8wYODQ1ZuefEII_YHkA98JCeZrH8KrvbQUKvA/formResponse';

  // Construct the form data
  const formData = new URLSearchParams();
  formData.append('entry.1421637405', name);
  formData.append('entry.1126696729', email);
  formData.append('entry.1332288966', message);

  // Send the form data to Google Form using a POST request
  axios
    .post(formURL, formData)
    .then(() => {
      res.status(200).json({ message: 'Form submitted successfully' });
    })
    .catch((error) => {
      console.error('An error occurred:', error);
      res.status(500).json({ message: 'Form submission failed' });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
