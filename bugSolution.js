const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Connection': 'keep-alive'
  });

  res.write('Hello, world!');
  for (let i = 0; i < 10000; i++) {
    res.write('a');
  }

  res.end(); // Properly close the connection
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});