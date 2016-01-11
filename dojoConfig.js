
var locationPath = location.pathname.replace(/\/[^\/]+$/, '');

window.dojoConfig = {
  async: true,
  parseOnLoad: true,
  deps: ['app/main'],
  paths: {
    '@cycle/core': locationPath + 'node_modules/@cycle/core/dist/cycle',
    '@cycle/dom': locationPath + 'node_modules/@cycle/dom/dist/cycle-dom',
    'rx': locationPath + 'node_modules/rx/dist/rx.all'
  },
  packages: [{
    name: 'app',
    location: locationPath + 'src',
    main: 'main'
  }]
};