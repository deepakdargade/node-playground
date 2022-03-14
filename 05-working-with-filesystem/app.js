const { ifError } = require('assert');
const fs = require('fs');

// create a file
fs.writeFile('example.txt', 'sample text', (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('file created');
        
        // read the file
        fs.readFile('./example.txt', 'utf8', (err, data) => {
            if(err){
                console.log(err);
            } else {
                console.log(data);
                console.log(`file data: ${data}`);
            }
        })
    }
})


// rename the file
fs.rename('example.txt', 'example2.txt', (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('file renamed');
    }
});

// append data to the file
fs.appendFile('example2.txt', 'new sample data appended', (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('data appended');
    }
})

// delete the file
fs.unlink('example2.txt', (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('file deleted');
    }
})
