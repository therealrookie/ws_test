/*
var express = require("express");
var ws = require("./ws");

var app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/ws.html");
});

app.listen(3000, function () {
  console.log("Example Websocket Server listening on port 3000!");
});

*/

var express = require("express");
var http = require("http");
var WebSocket = require("ws");

var app = express();
var server = http.createServer(app);
var wss = new WebSocket.Server({ server });

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/ws.html");
});

wss.on("connection", (ws) => {
  console.log("New WebSocket connection established.");

  ws.on("message", (message) => {
    console.log(`Received message => ${message}`);
  });

  ws.send("Hello! Message From Server!!");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});
