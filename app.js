var util = require('util'), 
http = require('http');

console.log("listening port 8080...")
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<p>Hello World</p>');
  res.end();
}).listen(8080);