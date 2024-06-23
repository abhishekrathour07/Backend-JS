import http from 'http';
// let http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/html'});
    res.end("Hello World");

}).listen(3000);