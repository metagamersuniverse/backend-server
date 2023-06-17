const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Configure HTTPS options
const options = {
  key: fs.readFileSync('./private.key'),
  cert: fs.readFileSync('./certificate.crt'),
};

// Define your routes
app.post('/submit-form', (req, res) => {
  // Handle the form submission logic
});

// Start the HTTPS server
https.createServer(options, app).listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
