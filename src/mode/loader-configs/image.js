const image = {
    test: /\.(png|jpg|jpeg|gif|webp)(\?v=\d+\.\d+\.\d+)?$/,
    rules: [
        {
            use: {
                loader: 'url-loader',
                options: {
                    limit: 8192, // file-loader over this limit
                    publicPath: '/assets/',
                    name: 'images/[name].[ext]?[hash]'
                }
            }
        },
        {
            use: {
                loader: 'img-loader',
                options: {
                    mozjpeg: {
                        progressive: true,
                        quality: 85
                    }
                }
            }
        }
    ]
};


module.exports = {
    image
};
