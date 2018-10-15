module.exports = {
    entry: './index.js',
    output: {
        filename: '[question1].[hash].bundle.es5.js'
    },
    resolve: {
        extensions: ["js", ".jsx", "*"]
    }
}