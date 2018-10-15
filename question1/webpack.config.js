const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: './index.js',
    output: {
        filename: '[hash].bundle.es5.js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.scss$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[contenthash].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }]
    },
    resolve: {
        extensions: ["js", ".jsx", ".scss", "*"]
    },
    devtool: 'source-map'
}