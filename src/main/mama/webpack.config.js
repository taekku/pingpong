const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: "development", // "producion" | "development" | "none"
    entry: ['@babel/polyfill', './src/mama.js'],
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/",
        filename: "bundle.js",
        library: "mama",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname),
                exclude: /(node_modules)|(dist)|(lib)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    },
    devtool: "source-map"
};