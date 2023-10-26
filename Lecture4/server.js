const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Set header content type
  res.setHeader("Content-Type", "text/html");

  // Routing
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", `/about`);
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
  }

  // Send HTML
  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(`Error reading file ${path}: ${err.message}`);
      res.statusCode = 500; // Internal Server Error
      res.end("Internal Server Error");
    } else {
      res.statusCode = 200;
      res.end(data);
    }
  });
});

// Start the server
const port = 3000;
server.listen(port, "localhost", () => {
  console.log("Server is listening for requests on port " + port);
});
