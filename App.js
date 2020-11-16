const path = require('path');
const copyDir = require('copy-dir');
const fs = require('fs');

const action = process.argv[2];

switch (action) {
  case 'init':   
    const src = path.resolve(__dirname, "./database");
    const destination = path.resolve(process.argv[3] ? path.resolve(__dirname, process.argv[3]) : process.cwd(), './database');

    fs.mkdirSync(destination);

    copyDir(
      src,
      destination,
      {
        utimes: true,
        mode: true,
        cover: true,
      }
    );

    console.log(`
    
    Structure created successfully:

    database
        |__ Class
        |__ data
        |__ Models
    
    `);
    break;

  default:
    console.log('Command not recognized.')
    break;
}