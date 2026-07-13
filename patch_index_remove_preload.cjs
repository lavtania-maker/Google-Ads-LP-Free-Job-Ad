const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace('<link rel="preload" as="image" href="/hero-bg-mobile.webp" media="(max-width: 768px)" fetchpriority="high" type="image/webp">\n', '');
html = html.replace('<link rel="preload" as="image" href="/hero-bg.webp" media="(min-width: 769px)" fetchpriority="high" type="image/webp">\n', '');

fs.writeFileSync('index.html', html);
