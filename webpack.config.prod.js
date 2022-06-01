const { merge } = require("webpack-merge");
const commonWebpackConfig = require("./webpack.config.common");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(
    commonWebpackConfig,
    {
        mode: "production",
        plugins: [
            new CleanWebpackPlugin(),
        ]
    }
);