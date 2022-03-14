const fs = require('fs');

// create a folder
fs.mkdir('tutorials', (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('folder created successfully');
    }
});

// create a file in the folder
fs.writeFile('./tutorials/file1.txt', 'sample text', (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('file created successfully inside the folder');
    }
});

fs.readdir('tutorials', (err, files) => {
    if(err) {
        console.log(err);
    } else {
        console.log(files);
        for(let file of files) {
            fs.unlink('./tutorials/' + file, (err) => {
                if(err) {
                    console.log(err)
                } else {
                    console.log(`file ${file} deleted successfully`);
                }
            });
        }
    }
});

// delete the folder
fs.rmdir('tutorials', (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('folder deleted successfully');
    }
});