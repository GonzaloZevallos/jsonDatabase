const path = require('path');
const fs = require('fs');

const action = process.argv[2];

switch (action) {
  case 'init':   
    const src = path.resolve(__dirname, "./database/hola.js");
    const destination = process.argv[3] ? path.resolve(__dirname, process.argv[3]) : process.cwd();

    fs.copyFileSync(src, destination);

    break;

  default:
    console.log('Command not recognized.')
    break;
}