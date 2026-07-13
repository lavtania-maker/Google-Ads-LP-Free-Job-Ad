const fs = require('fs');
let code = fs.readFileSync('vite.config.ts', 'utf8');

const buildConfig = `
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            motion: ['framer-motion'],
            icons: ['lucide-react']
          }
        }
      }
    },
    server: {
`;

code = code.replace('server: {', buildConfig);
fs.writeFileSync('vite.config.ts', code);
