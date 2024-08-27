const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  res.setHeader("Content-Type", "text/html");

  const message =
    "<h1>Welcome to My Node.js Server!</h1><p>This is a custom message served by Node.js.</p>";
  res.end(message);
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
