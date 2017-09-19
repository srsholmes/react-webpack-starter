require('babel-register');
const glob = require('glob');
const jsdom = require('jsdom');
const { resolve } = require('path');
const { JSDOM } = jsdom;
const HTML = '<html><body></body></html>';

global.document = new JSDOM(HTML);
global.window = global.document.window;
global.navigator = window.navigator;

process.argv.slice(2).forEach(arg => {
  glob(arg, (err, files) => {
    if (err) throw err;
    files.forEach(file => require(resolve(process.cwd(), file)));
  });
});

