const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const noscriptStart = html.indexOf('<noscript>');
const noscriptEnd = html.indexOf('</noscript>') + '</noscript>'.length;

if (noscriptStart !== -1 && noscriptEnd !== -1) {
    html = html.substring(0, noscriptStart) + html.substring(noscriptEnd);
    fs.writeFileSync('index.html', html);
}
