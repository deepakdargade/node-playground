const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const unzip = zlib.createGunzip();

// const readStream = fs.createReadStream('./example1.txt', 'utf8');
// const writeStream = fs.createWriteStream('./example2.txt.gz');
// readStream.pipe(gzip).pipe(writeStream);


const readStream1 = fs.createReadStream('./example2.txt.gz');
const writeStream1 = fs.createWriteStream('example4.txt');
readStream1.pipe(unzip).pipe(writeStream1);
