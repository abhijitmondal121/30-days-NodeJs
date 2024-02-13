const express = require('express');
const http = require('http');
const setupWebSocket = require('./setupWebSocket');

const app = express();
const server = http.createServer(app);

// Set up WebSocket
setupWebSocket(server);

// Serve HTML page with WebSocket connection
app.get('/websocket', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
