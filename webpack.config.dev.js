const path = require("path");
const { merge } = require("webpack-merge");
const commonWebpackConfig = require("./webpack.config.common");

module.exports = merge(commonWebpackConfig, {
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: false,
    client: {
      progress: true,
    },
    compress: true,
    historyApiFallback: true,
  },
});
