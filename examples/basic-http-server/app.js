var http = require('http');

var server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Hello world');
});

server.listen(3000);

console.log("Server listening on http://localhost:3000");
