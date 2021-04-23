var webpack = require("webpack");

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:8080", // URL for hot reload
    "webpack/hot/only-dev-server", // reload only the dev server
    "./src/index.js",
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "react-hot!babel",
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  ouput: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: "./dist",
    hot: true, // activate hot reload
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
