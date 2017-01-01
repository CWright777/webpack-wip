const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  style: path.join(__dirname, 'app', 'main.scss'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry: {
    style: PATHS.style,
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template : __dirname + '/app/index.html'
    })
  ],
}

module.exports = function(env) {
  if (env === 'build') {
    return merge(
      common,
      parts.babelify(PATHS.app),
      {
        devtool: 'source-map',
        output: {
          path: PATHS.build,
          filename: '[name].[chunkhash].js',
          chunkFilename: '[chunkhash].js'
        }
      },
      parts.clean(PATHS.build),
      parts.extractBundle({
        name: 'vendor',
        entries: ['react']
      }),
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      parts.minify(),
      parts.extractCSS(PATHS.style)
    );
  }

  return merge(
    common,
    parts.babelify(PATHS.app),
    {
      devtool: 'eval-source-map',
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
