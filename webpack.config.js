const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "none",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: 'bundle.js'
    },
    plugins: [
        new CopyPlugin([
            {
                from: "public"
            }
        ]),
        new CleanWebpackPlugin(),
    ],
    module: {
      rules: [
          {
              test: /\.js/,
              exclude: /node_modules/,
              use: "babel-loader"
          }
      ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}