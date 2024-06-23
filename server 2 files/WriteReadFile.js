import fs from 'fs';

console.log('start');
fs.writeFile('WriteReadFile.txt', "this is open file to read", () => {
    console.log("executed");
});
console.log('end');

fs.readFile("WriteReadFile.txt", 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
})
