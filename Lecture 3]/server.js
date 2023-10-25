const http = require("http");
const server = http.createServer((req, res) => {
  console.log("requests made");
});

server.listen(3000, "localhost", () => {
  console.log("liostening to requests on posts 3000");
});
