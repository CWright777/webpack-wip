const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry: {
      app: PATHS.app
    },
    output: {
      path: PATHS.build,
      filename: '[name].js'
  }, plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo'
    })
  ]
}

module.exports = function(env) {
  if (env === 'build') {
    return merge(
      common,
      {
        devtool: 'source-map'
      },
      parts.setupSASS(PATHS.app)
    );
  }

  return merge(
    common,
    {
      performance: {
        hints: false
      }
    },
    parts.setupSASS(PATHS.app),
    parts.devServer({
      host: process.env.HOST,
      port: process.env.PORT
    })
  )
};
