const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loader = require('sass-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
  };

module.exports = {
  mode: 'development',
  entry: PATHS.source + '/index.js',
  // output: {
  //   filename: 'main.js',
  //   path: path.resolve(__dirname, 'dist'),
  //   publicPath: '/dist'
  // },
  output: {
    path: PATHS.build,
    filename: '[name].js'
    },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
        //   "style-loader",
        MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          "postcss-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader'],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
        pretty: true
        }
        }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: PATHS.source + '/index.pug'
      })]
};