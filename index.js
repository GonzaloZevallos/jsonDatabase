const path = require('path');
const copyDir = require('copy-dir');
const fs = require('fs');

module.exports = function App (argv) {
  switch (argv[2]) {
    case 'init':   
      const src = path.resolve(__dirname, "./database");
      const destination = path.resolve(argv[3] ? path.resolve(__dirname, argv[3]) : process.cwd(), './database');
  
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
          |__ tables
          |__ models
      
      `);

      break;
    
    case 'generate':
        
        console.log('Generate model');
  
    default:
      console.log('Command not recognized.')
      break;
  }
}
