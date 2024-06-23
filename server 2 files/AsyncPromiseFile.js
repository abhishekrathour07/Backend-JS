import fs from 'fs/promises';


let file1 = await fs.readFile('abhi.txt');
console.log(file1.toString());


let file2 = await fs.appendFile("abhi.txt", "\n this is something new which is inserted")
console.log(file2);
