const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const headEnd = `</head>`;
const preloadTag = `  <link rel="preload" as="image" href="/hero-bg-mobile.webp" media="(max-width: 768px)" fetchpriority="high" type="image/webp">
  <link rel="preload" as="image" href="/hero-bg.webp" media="(min-width: 769px)" fetchpriority="high" type="image/webp">
  </head>`;

html = html.replace(headEnd, preloadTag);

fs.writeFileSync('index.html', html);
