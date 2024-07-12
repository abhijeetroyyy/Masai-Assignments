const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/home" && req.method === "GET") {
    res.write("Welcome to home page");
    res.end();
  } else if (req.url == "/cart") {
    res.write("Welcome to cart page");
    res.end();
  } else if (req.url == "/user") {
    res.write("Welcome to user page");
    res.end();
  } else {
    res.write("404 not found");
    res.end();
  }
});
server.listen(5500, () => {
  console.log("server is running");
});
