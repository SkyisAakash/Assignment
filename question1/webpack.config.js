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
            filename: "[hash].css"
        })
    ],
    module: {
        rules: [{
            test: [/\.scss$/,/\.css$/],
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
            ]
        }]
    },
    resolve: {
        extensions: ["js", ".jsx", "*"]
    }
}