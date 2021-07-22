var http = require('http');
var data = `<input type='text' />`
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type' : 'text/html'})    
res.write(data);
res.end();
}).listen(4000)