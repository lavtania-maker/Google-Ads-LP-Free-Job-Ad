const fs = require('fs');

let code = fs.readFileSync('src/App.tsx', 'utf8');

const imports = `import employerHeroBg from "./assets/images/hero-bg.jpg";
import employerHeroBgWebp from "./assets/images/hero-bg.webp";
import employerHeroBgMobileWebp from "./assets/images/hero-bg-mobile.webp";\n`;

const reactImportIndex = code.indexOf('import * as React');
code = code.substring(0, reactImportIndex) + imports + code.substring(reactImportIndex);

const pictureTag = `<picture className="w-full h-full block">
            <source media="(max-width: 768px)" srcSet="/hero-bg-mobile.webp" type="image/webp" />
            <source srcSet="/hero-bg.webp" type="image/webp" />
            <img 
              src="/hero-bg.jpg" 
              alt="Employer hiring landscape" 
              className="w-full h-full object-cover object-[98%_top] md:object-[right_top] lg:object-[95%_top] select-none"
              referrerPolicy="no-referrer"
              fetchPriority="high"
              decoding="async"
            />
          </picture>`;

const newPictureTag = `<picture className="w-full h-full block">
            <source media="(max-width: 768px)" srcSet={employerHeroBgMobileWebp} type="image/webp" />
            <source srcSet={employerHeroBgWebp} type="image/webp" />
            <img 
              src={employerHeroBg} 
              alt="Employer hiring landscape" 
              className="w-full h-full object-cover object-[98%_top] md:object-[right_top] lg:object-[95%_top] select-none"
              referrerPolicy="no-referrer"
              fetchPriority="high"
              decoding="async"
            />
          </picture>`;

code = code.replace(pictureTag, newPictureTag);

fs.writeFileSync('src/App.tsx', code);
