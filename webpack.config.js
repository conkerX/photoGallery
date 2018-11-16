const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const browserConfig = {
  entry: ["./src/index.js"],
  // entry: {
  //   client: "./src/index.js",
  //   bundle: "./public/main.js"
  // },
  output: {
    path: path.resolve(__dirname, "public"),
    // filename: "[name].js"
    filename: "js/public.js",
    publicPath: "/static/"
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 8083
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // test: /.js$/,
        // loader: "babel-loader",
        // include: path.join(__dirname, "./server.js"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
        // query: {
        //   presets: ["es2015", "react"]
        // }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: "images/[hash]-[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css"
    })
  ]
};

const serverConfig = {
  entry: "./server.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: "server.min.js",
    publicPath: "/"
  },
  module: {
    rules: [{ test: /\.(js)$/, use: "babel-loader" }]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
};

module.exports = [browserConfig, serverConfig];
