const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {
    prod_Path,
    src_Path
} = require('./path');
const {
    selectedPreprocessor
} = require('./loader');

module.exports = {
    entry: {
        main: './' + src_Path + '/index.js'
    },
    output: {
        path: path.resolve(__dirname, prod_Path),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
            {
                test: selectedPreprocessor.fileRegexp,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                },
                    {
                        loader: 'css-loader',

                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: './postcss.config.js'
                            }
                        },
                    },
                    {
                        loader: selectedPreprocessor.loaderName
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img',
                    },
                }],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css'
        }),

        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './' + src_Path + '/index.html',
            filename: 'index.html'
        }),

        new WebpackMd5Hash()
    ]
};
