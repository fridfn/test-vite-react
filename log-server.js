import express from 'express';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
  });
});

server.listen(8080, () => {
  console.log('Server started on port 8080');
});
