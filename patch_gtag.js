import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

const gtagSnippet = `    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XSWQH5P6LB"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-XSWQH5P6LB');
    </script>
</head>`;

if (!html.includes('G-XSWQH5P6LB')) {
    html = html.replace('</head>', gtagSnippet);
    fs.writeFileSync('index.html', html);
}
