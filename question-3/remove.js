/*
Purpose:
Remove all files from the Logs directory using Node.js File System (fs).
Display the name of each deleted file.
Remove the Logs directory if it exists.
*/

const fs = require('fs');
const path = require('path');

// Path for the Logs directory
const logDir = path.join(__dirname, 'Logs');

// Checking if Logs directory exists
if (fs.existsSync(logDir)) {

    // Getting all files from Logs directory
    const files = fs.readdirSync(logDir);

    // Deleting the log files
    files.forEach(file => {
        const filePath = path.join(logDir, file);
        fs.unlinkSync(filePath);
        console.log(`delete files...${file}`);
    });

    // Removing the Logs directory
    fs.rmdirSync(logDir);
}