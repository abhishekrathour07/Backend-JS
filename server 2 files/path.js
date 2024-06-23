import path from 'path';

console.log(path);
 const mypath = "/d/MyCodes/Backend JS/server 2 files/abhi.txt"
// to know the path
 console.log(path.dirname(mypath));
//  to know the extension of current file
 console.log(path.extname(mypath));
//  to know the name of the current file
 console.log(path.basename(mypath));
//  to know all the detail about thje file 
 console.log(path.parse(mypath));
//  to join the two different path
 console.log(path.join('c:/','\\hello\\hello1//hello.txt'));
//  c:\hello\hello1\hello.txt return this 


 
