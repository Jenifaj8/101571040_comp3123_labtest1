/*
Purpose:
Create a Logs directory using Node.js File System (fs).
Change the current working directory to Logs.
Create 10 log files containing text and display each filename.
*/

const fs = require('fs');
const path = require('path');

// Path for the Logs directory
const logDir = path.join(__dirname, 'Logs');

// Creating Logs directory if it does not exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

// Changing the current working directory to Logs
process.chdir(logDir);

// Create the log files
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    const content = `This is log file ${i}`;

    fs.writeFileSync(fileName, content);
    console.log(fileName);
}