const fs = require('fs');

// fs.readFile('./largefile.txt', 'utf8', (err, file) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(file);
//     }
// });

// if the file size is in GBs, then we need that much RAM to read it.

// hence it is better to use readable stream.

const readStream = fs.createReadStream('./largefile.txt', 'utf8');
readStream.on('data', (chunk) => {
    console.log(chunk);
});