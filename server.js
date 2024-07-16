const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    // Set res header HTTP dengan status dan tipe konten
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
});

// ini menjalankan server
server.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}/`);
});