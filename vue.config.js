module.exports = {
    publicPath: './',
    configureWebpack : {
        performance: {
            hints:'warning',
            maxEntrypointSize: 50000000,
            maxAssetSize: 30000000,
        }
    }
}