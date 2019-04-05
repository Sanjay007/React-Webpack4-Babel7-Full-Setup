// webpack.config.js
const path = require('path');
const webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill','./src/index.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
	plugins: [
        new HtmlWebpackPlugin({
          template: 'public/index.html',
          inject: 'body',
          filename: 'index.html'
        })    ],
    module: {
        rules: [
            {
               test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
           {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg|ttf|eot)$/,
        loaders: ["file-loader"]
      },
	  { test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                mimetype: 'application/font-woff'
              }
            }
          ]}
        ]
    }
};