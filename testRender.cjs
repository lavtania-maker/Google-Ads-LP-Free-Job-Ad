const React = require('react');
const { renderToString } = require('react-dom/server');
const Module = require('module');
const originalRequire = Module.prototype.require;
Module.prototype.require = function(id) {
  if (id.endsWith('.jpg') || id.endsWith('.png') || id.endsWith('.webp')) return id;
  return originalRequire.apply(this, arguments);
};
require('esbuild-register/dist/node').register({
  target: 'node16',
  jsx: 'automatic'
});
const App = require('./src/App.tsx').default;
try {
  console.log("Rendering...");
  renderToString(React.createElement(App));
  console.log("Rendered successfully!");
} catch (e) {
  console.error("Render failed:", e);
}
