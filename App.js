const path = require('path');
const copyDir = require('copy-dir');
const fs = require('fs');

module.exports = function App () {
  const action = process.argv[1];
  
  switch (action) {
    case 'init':   
      const src = path.resolve(__dirname, "./database");
      const destination = path.resolve(process.argv[2] ? path.resolve(__dirname, process.argv[2]) : process.cwd(), './database');
  
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
}
