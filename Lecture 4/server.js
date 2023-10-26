const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  const filePath = "C:/RepositoryProjects/Nodejs-Learn/index.html";

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      // we can directly pass it into the end method
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening to the port 3000");
});
