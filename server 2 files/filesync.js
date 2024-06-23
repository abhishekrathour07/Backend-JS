import fs from 'fs';

// this is not good habit to write the file bcz js execute line by line and next line have to wait for executing the file process 
console.log('start');
fs.writeFileSync("filesync.txt","English comes to me");
console.log('end');
