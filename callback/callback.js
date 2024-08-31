
const fs = require('fs');


const filePath = 'example.txt';
const fileContent = 'ciao, vediamo se funziona';


fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      
        console.error('Error writing to the file:', err);
    } else {
    
        console.log('File has been written successfully!');
    }
});
