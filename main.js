const http = require('http');

const server = http.createServer((req, res) => {
  let tap;
  req.on('data',(stream)=>{
    tap+=stream;
  })

  req.end('end',()=>{
    const op = {
      method:re.method,
      url:req.url,
      headers:req.headers,
      body:tap ? JSON.parse(tap) : null;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(op));
  })
  
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

module.exports = { server };
