const http = require('http');

const server = http.createServer((req, res) => {
    let tap = '';  // Initialize tap as an empty string to accumulate data chunks

    req.on('data', (chunk) => {
        tap += chunk;  // Accumulate data chunks into tap
    });

    req.on('end', () => {
        const op = {
            method: req.method,
            url: req.url,
            headers: req.headers,
            body: tap ? JSON.parse(tap) : null  // Parse tap if it contains data, otherwise set to null
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(op));
    });
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

module.exports = { server };
