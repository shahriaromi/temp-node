const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('its home');
  } else if (req.url === '/about') {
    res.end('its about');
  } else res.end('sorry not found');
});

server.listen(5000);
