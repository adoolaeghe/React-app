var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/js/client.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs',
                    'transform-class-properties',
                    'transform-decorators-legacy',
                    "syntax-dynamic-import",
                    "transform-react-jsx"]
        }
      },
      {
        test: /\.sass$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.less$/,
        loader: 'less-loader'
      }
    ]
  },
  output: {
    path: __dirname + "/src/js",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.ProvidePlugin({noUiSlider: 'nouislider'}),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
