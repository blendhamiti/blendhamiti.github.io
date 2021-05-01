const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName:
                                    "[name]__[local]___[hash:base64:4]",
                                exportLocalsConvention: "camelCase",
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "bundle.js",
    },
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, "src", "components"),
            "@pages": path.resolve(__dirname, "src", "pages"),
            "@styles": path.resolve(__dirname, "src", "styles"),
            "@assets": path.resolve(__dirname, "src", "assets"),
        },
        extensions: [".tsx", ".ts", ".js"],
    },
    devtool: "inline-source-map",
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
            favicon: path.resolve(__dirname, "public", "favicon.ico"),
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, "src", "assets"),
                    to: path.join(__dirname, "docs", "assets"),
                },
                {
                    from: path.join(__dirname, "src", "api"),
                    to: path.join(__dirname, "docs", "api"),
                },
            ],
        }),
    ],
};
