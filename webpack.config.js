const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
            },
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "docs")
    },
    optimization: {
        splitChunks: { chunks: "all" }
    },
    devServer: {
        contentBase: path.join(__dirname, "docs"),
        compress: true,
        liveReload: true,
        port: 9000,
        open: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
            favicon: path.resolve(__dirname, "public", "favicon.ico")
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, "src", "assets", "misc", "doc"),
                    to: path.join(__dirname, "docs")
                },
            ],
        }),
    ],
};