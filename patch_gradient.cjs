const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');
code = code.replace(
  /<div className="absolute inset-0 bg-gradient-to-r from-\[#F3F4F6\] via-\[#F3F4F6\]\/90 to-transparent md:to-white\/10" \/>/g,
  '<div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />'
);
fs.writeFileSync('src/App.tsx', code);
