const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './' + 'src' + '/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
            {
                test: /\.(sass|scss|css)$/,
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
                        loader: 'sass-loader',
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
            template: 'public' + '/index.html',
            filename: 'index.html'
        }),

        new WebpackMd5Hash()
    ]
};
