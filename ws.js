/*
const ws_port = 433;
const wss = new WebSocketServer({ port: ws_port });
console.log('listening for connections on %s...', ws_port);

wss.on("connection", function (ws) {
  ws.on("message", function (message) {
    console.log("Received: %s", message);
  });

  setInterval(() => ws.send(`${new Date()}`), 5000);
});

*/

const WebSocket = require("ws");
const PORT = process.env.WS_PORT || 3000;
const wss = new WebSocket.Server({ port: PORT });
wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log(`Received message => ${message}`);
  });
  ws.send("Hello! Message From Server!!");
});
