 import http from 'http';

 const hostname = "127.0.0.1";

 const port = 3000;
 const server = http.createServer((req,res)=>{
    res.statuusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1> Hello World </h1>');
 });
 server.listen(port,hostname,()=>{
    console.log(`server Runnig at http://${hostname}:${port}/`);
 });