const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>NodeJS App 1</h1>');
});

const httpServer = http.createServer(app);
httpServer.listen(5000, () => {
  console.log(`Server started on port 5000`);
});
