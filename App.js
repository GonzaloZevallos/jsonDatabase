const path = require('path');
const fs = require('fs');

const action = process.argv[1];

switch (action) {
  case 'init':
    fs.copyFileSync(path.resolve(__dirname, './database'), process.cwd());
    break;

  default:
    console.log('Command not recognized.')
    break;
}