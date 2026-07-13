const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const rootEmpty = `<div id="root"></div>`;
const rootSkeleton = `<div id="root">
      <style>
        body { margin: 0; font-family: 'Open Sans', sans-serif; background: #F3F4F6; }
        .skeleton-hero { min-height: 600px; display: flex; flex-direction: column; padding: 24px; max-width: 1200px; margin: 0 auto; }
        .skeleton-nav { display: flex; justify-content: space-between; align-items: center; padding: 16px 24px; background: white; margin-bottom: 32px; border-radius: 12px; }
        .skeleton-logo { width: 120px; height: 32px; background: #e2e8f0; border-radius: 4px; }
        .skeleton-btn { width: 100px; height: 36px; background: #e2e8f0; border-radius: 8px; }
        .skeleton-title { width: 80%; max-width: 400px; height: 48px; background: #e2e8f0; border-radius: 8px; margin-top: 48px; }
        .skeleton-desc { width: 60%; max-width: 300px; height: 24px; background: #e2e8f0; border-radius: 4px; margin-top: 16px; }
        .skeleton-card { width: 100%; max-width: 400px; height: 200px; background: white; border-radius: 24px; margin-top: 48px; }
      </style>
      <div class="skeleton-nav">
        <div class="skeleton-logo"></div>
        <div class="skeleton-btn"></div>
      </div>
      <div class="skeleton-hero">
        <div class="skeleton-title"></div>
        <div class="skeleton-title" style="margin-top: 12px; width: 60%;"></div>
        <div class="skeleton-desc"></div>
        <div class="skeleton-card"></div>
      </div>
    </div>`;

html = html.replace(rootEmpty, rootSkeleton);
fs.writeFileSync('index.html', html);
