const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: ['./assets/js/main.js', './assets/scss/main.scss', './index.html'],
  output: {
    filename: `./js/${filename('js')}`,
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    // open: true,
    hot: true,
    port: 4000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: false
      }
    }),
    new CleanWebpackPlugin (),
    new MiniCssExtractPlugin({
      filename: `./css/${filename('css')}`
    }),
    new copyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/images'),
          to: path.resolve(__dirname, 'dist/images')
        } 
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'html-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
          loader: MiniCssExtractPlugin.loader,
          options: {}
        }, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:|jpg|jpeg|gif|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `./images/${filename('[ext]')}`
            }
          }
        ],
      }
    ]
  }
}