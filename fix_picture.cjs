const fs = require('fs');

let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace('<picture>', '<picture className="w-full h-full block">');

fs.writeFileSync('src/App.tsx', code);
