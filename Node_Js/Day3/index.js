const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// Custom validation middleware
const validateTodo = (req, res, next) => {
  const { ID, Name, Rating, Description, Genre, Cast } = req.body;

  // Check for missing keys
  const requiredKeys = ["ID", "Name", "Rating", "Description", "Genre", "Cast"];
  for (const key of requiredKeys) {
    if (!(key in req.body)) {
      return res.status(400).send("bad request. some data is incorrect.");
    }
  }

  // Validate each field
  if (typeof ID !== "number")
    return res.status(400).send("bad request. ID must be a number.");
  if (typeof Name !== "string")
    return res.status(400).send("bad request. Name must be a string.");
  if (typeof Rating !== "number")
    return res.status(400).send("bad request. Rating must be a number.");
  if (typeof Description !== "string")
    return res.status(400).send("bad request. Description must be a string.");
  if (typeof Genre !== "string")
    return res.status(400).send("bad request. Genre must be a string.");
  if (!Array.isArray(Cast) || !Cast.every((item) => typeof item === "string"))
    return res
      .status(400)
      .send("bad request. Cast must be an array of strings.");

  next(); // Proceed to the next middleware or route handler if validation passes
};

// POST route with validation middleware
app.post("/todo", validateTodo, (req, res) => {
  res.status(200).send("data received");
});


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
