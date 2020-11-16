const path = require('path');
const copyDir = require('copy-dir');
const fs = require('fs');

module.exports = function App (action, dest) {  
  console.log(process.argv)
  switch (action) {
    case 'init':   
      const src = path.resolve(__dirname, "./database");
      const destination = path.resolve(dest ? path.resolve(__dirname, dest) : process.cwd(), './database');
  
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
