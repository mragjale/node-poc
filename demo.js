var http = require('http');
var fs = require('fs')
// var data = {name: 'Ghanshaym', age: '26'};
// http.createServer(function (req, res) {
// // res.writeHead(200, {'Content-Type' : 'application\json'})    
// // res.write(JSON.stringify(data));
// res.write('test nodemon working fine');

// res.end();
// }).listen(5000)

http.createServer(function (req, res) {
    fs.readFile('demo.html', function(err, data){
        res.writeHead(200, {'Content-Type' : 'text\html'})    
        res.write(data);
       return res.end();
    })

    }).listen(5000)