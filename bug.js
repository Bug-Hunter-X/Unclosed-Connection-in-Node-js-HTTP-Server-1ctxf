const http = require('http');

const server = http.createServer((req, res) => {
  // Keep the connection alive
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Connection': 'keep-alive'
  });

  // Send a large response body
  res.write('Hello, world!');
  for (let i = 0; i < 10000; i++) {
    res.write('a');
  }

  // Never close the connection
  //res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});