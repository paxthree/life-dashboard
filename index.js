const path = require('path')

var babelPolyfill = require('babel-polyfill')
var appRoot = path.join(__dirname);

require('electron-compile').init(appRoot, require.resolve('./app/main.js'));
