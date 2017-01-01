const webpack = require('webpack');

exports.devServer = function(options) {
  return {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      stats: 'errors-only',
      host: options.host,
      port: options.port
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  };
};

exports.setupSASS = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          loaders: ["style-loader", "css-loader","sass-loader"]
        }
      ]
    }
  }
}
