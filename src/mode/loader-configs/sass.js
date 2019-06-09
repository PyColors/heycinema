const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const sass = {
    test: /\.(sass|scss|css)$/,

    rules: [
        {
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

};

module.exports = {
    sass
};
