const WebSocket = require('ws');

/**
 * WebSocket server for Express
 * @param {Object} server - HTTP server instance
 */
function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', function connection(ws) {
    console.log('Client connected');

    ws.on('message', function incoming(message) {
      console.log('Received:', message);
      // Echo back the received message
      ws.send(message);
    });

    ws.on('close', function () {
      console.log('Client disconnected');
    });
  });
}

module.exports = setupWebSocket;
