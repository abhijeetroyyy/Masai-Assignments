const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// Ensure the src directory exists
const logDirectory = path.join(__dirname, 'src');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// Create a write stream (in append mode) for logging
const accessLogStream = fs.createWriteStream(path.join(logDirectory, 'access.log'), { flags: 'a' });

// Custom Morgan format that includes response time
morgan.token('response-time-ms', function (req, res) {
  const start = process.hrtime();
  res.on('finish', () => {
    const diff = process.hrtime(start);
    const time = diff[0] * 1e3 + diff[1] * 1e-6;
    accessLogStream.write(`Response time: ${time.toFixed(3)} ms\n`);
  });
  return '';
});

// Log format example: "GET / 200 123 - 12ms - 1.1"
app.use(morgan(':method :url :status :res[content-length] - :response-time ms - HTTP/:http-version', { stream: accessLogStream }));

// Define routes
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Home Page!');
});

app.get('/get-users', (req, res) => {
  res.status(200).send('List of users');
});

app.post('/add-user', (req, res) => {
  res.status(201).send('User added successfully');
});

app.put('/user/:id', (req, res) => {
  res.status(201).send(`User with ID ${req.params.id} updated successfully`);
});

app.delete('/user/:id', (req, res) => {
  res.status(200).send(`User with ID ${req.params.id} deleted successfully`);
});

// Start the server
const PORT =  3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
