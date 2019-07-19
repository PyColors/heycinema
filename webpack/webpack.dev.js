const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './' + 'src' + '/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash].js'
    },
    devtool: 'source-map',
    devServer: {
        open: true,
    },
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
            test: /\.(sass|scss|css)$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            },
                {
                    loader: 'css-loader',
                    options: {
                        modules: false,
                        sourceMap: true
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                },
            ]
        },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                }],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: false,
            template: 'public' + '/index.html',
            filename: 'index.html'
        })
    ]
};
