const express = require('express');
const app = express();
const http = require('http');
const WebSocket = require('ws');

function setupWebSocketServer(server) {
  const app = express();
  const httpServer = http.createServer(app);
  const wsServer = new WebSocket.Server({ server: httpServer });
  //const port = 3000;

  const connectedClients = new Set();

  wsServer.on('connection', (socket) => {
    console.log('New client connected');
    connectedClients.add(socket);

    socket.on('message', (message) => {
      console.log('Received message:', message);

      for (const client of connectedClients) {
        if ((client = socket)) {
          client.send(message);
        }
      }
    });
  });
}
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

