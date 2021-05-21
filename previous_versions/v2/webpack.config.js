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
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                },
            },
            {
                test: /\.scss$/i,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [require("autoprefixer")],
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
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
    },
    devtool: "source-map",
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
