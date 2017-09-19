const js = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [ 'babel-loader' ],
};

const postCss = {
  loader: 'postcss-loader',
  options: {
    config: {
      path: './config/postcss.config.js',
    },
  },
};

module.exports = {
  js,
  postCss,
};
