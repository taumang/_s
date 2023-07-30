const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: {
    main:[
      "/src/ts/main.ts",
      "/src/sass/main.scss"
    ],
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].min.js',
    clean: true,
  },
  devtool:"source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
       test:/\.(png|jpg|gif)$/,
       type:"asset/resource",
       generator:{
        filename:"./img/[img][name][ext]"
       }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  }
};

module.exports = config;