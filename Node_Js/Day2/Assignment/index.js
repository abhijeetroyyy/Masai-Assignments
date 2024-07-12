const express = require("express");
const fs = require("fs").promises;
const server = express();
const port = 3000;
const path = "./todo.json";

server.use(express.json());

// Ensure the JSON file exists
async function ensureFileExists() {
  try {
    await fs.access(path);
  } catch (err) {
    await fs.writeFile(path, JSON.stringify({ todos: [] }, null, 2));
  }
}

// Welcome message
server.get("/todo", (req, res) => {
  res.send("Hello, welcome to the Todo List!");
});

// Get all todos
server.get("/todo-detail", async (req, res) => {
  try {
    await ensureFileExists();
    const data = await fs.readFile(path, "utf-8");
    res.json(JSON.parse(data));
  } catch (err) {
    res.status(500).send("Error reading file");
  }
});

// Add a new todo
server.post("/add-todo", async (req, res) => {
  try {
    await ensureFileExists();
    const incomingData = req.body;
    const todoData = await fs.readFile(path, "utf-8");
    const parsedData = JSON.parse(todoData);
    incomingData.id = parsedData.todos.length
      ? parsedData.todos[parsedData.todos.length - 1].id + 1
      : 1;
    parsedData.todos.push(incomingData);
    await fs.writeFile(path, JSON.stringify(parsedData, null, 2));
    res.json({ message: "Todo added successfully", todos: parsedData.todos });
  } catch (err) {
    res.status(500).send("Error writing to file");
  }
});

// Update status of todos with even IDs from false to true
server.put("/update-even-todos", async (req, res) => {
  try {
    await ensureFileExists();
    const todoData = await fs.readFile(path, "utf-8");
    let parsedData = JSON.parse(todoData);
    parsedData.todos = parsedData.todos.map((todo) => {
      if (todo.id % 2 === 0 && !todo.status) {
        return { ...todo, status: true };
      }
      return todo;
    });
    await fs.writeFile(path, JSON.stringify(parsedData, null, 2));
    res.json({
      message: "Updated even todos successfully",
      todos: parsedData.todos,
    });
  } catch (err) {
    res.status(500).send("Error updating todos");
  }
});

// Delete all todos with status true
server.delete("/delete-true-todos", async (req, res) => {
  try {
    await ensureFileExists();
    const todoData = await fs.readFile(path, "utf-8");
    let parsedData = JSON.parse(todoData);
    parsedData.todos = parsedData.todos.filter((todo) => !todo.status);
    await fs.writeFile(path, JSON.stringify(parsedData, null, 2));
    res.json({
      message: "Deleted todos with status true successfully",
      todos: parsedData.todos,
    });
  } catch (err) {
    res.status(500).send("Error deleting todos");
  }
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
