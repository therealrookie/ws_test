var WebSocketServer = require("ws").Server,
  wss = new WebSocketServer({ port: 443 });

wss.on("connection", function (ws) {
  ws.on("message", function (message) {
    console.log("Received: %s", message);
  });

  setInterval(() => ws.send(`${new Date()}`), 5000);
});
