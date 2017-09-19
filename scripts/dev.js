const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../config/dev.config');
const { resolve } = require('path');
const openBrowser = require('react-dev-utils/openBrowser');
const envOr = require('../utils/envOr');
console.log('Starting dev server');
console.log('*'.repeat(80));

const PORT = envOr(`PORT`, 3000);
const HOST = envOr(`HOST`, 'localhost');
const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  host: HOST,
  port: PORT,
  historyApiFallback: true,
  contentBase: resolve(__dirname, '../public'),
  publicPath: config.output.publicPath,
  //contentBase: resolve(__dirname, '../dist'),
  hot: true,
  open: true,
  clientLogLevel: 'info',
  stats: { colors: true },
  proxy: {
    '/api/*': 'http://localhost:3001'
  }
});

server.listen(PORT, HOST, err => {
  if (err) console.log(err);
  console.log(`Webpack dev server listening on http://localhost:${PORT}`);
  openBrowser(`http://${HOST}:${PORT}`);
});
