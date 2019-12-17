#!/usr/bin/env node

const fs = require('fs');

// Get provided args
const [, , ...args] = process.argv;

const folder = args[0];
const output = args[1];

//Log arguments used
console.log('Target Folder:', folder);
console.log('Output File:', output);

//Read all files in folder
fs.readdir(folder, function (err, files) {

    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    //Keep track of file index/count
    let fileCount = 0;

    //Append file
    let appendText = "";

    //Loop through files found
    files.forEach(function (file) {
        //Ignore output to avoid appending self if this was rerun
        if(file !== output) {

            //Log current file
            console.log(`Reading:${fileCount}`, file);
            fileCount += 1;

            //Read contents of file
            const text = fs.readFileSync(`${folder}/${file}`, 'utf8');

            //Track file read from
            appendText += `--${file}`;

            //Add text
            appendText += text;

            //Add line break to end
            if (fileCount !== 1) {
                appendText += "\n";
            }
        }
    });

    //Write file
    fs.writeFileSync(`${folder}/${output}`, appendText);
});
