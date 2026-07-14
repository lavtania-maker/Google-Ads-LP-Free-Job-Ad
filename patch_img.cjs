const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');
code = code.replace(
  /<img[\s\S]*?alt="Employer hiring landscape"[\s\S]*?\/>/,
  `<img 
            src={employerHeroBg} 
            alt="Employer hiring landscape" 
            className="w-full h-full object-cover object-[98%_top] md:object-[right_top] lg:object-[95%_top] select-none"
          />`
);
fs.writeFileSync('src/App.tsx', code);
