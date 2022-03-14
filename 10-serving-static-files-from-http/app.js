const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    // const readStream = fs.createReadStream('./static/example.json');
    // res.writeHead(200, {'Content-Type': 'application/json'});

    // const readStream = fs.createReadStream('./static/index.html');
    // res.writeHead(200, {'Content-Type': 'text/html'});

    const readStream = fs.createReadStream('./static/example.png');
    res.writeHead(200, {'Content-Type': 'image/png'});

    readStream.pipe(res);    
}).listen(3000);