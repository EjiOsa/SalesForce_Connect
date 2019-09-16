module.exports = {
    publicPath: './',
    configureWebpack : {
        performance: {
            hints:'warning',
            maxEntrypointSize: 50000000,
            maxAssetSize: 30000000,
        }
    },
    // devServer : {　//vue-routerで#を削除するために導入したけど、使えなかった。そのうち再調査。
    //     historyApiFallback: {
    //         disableDotRule: true
    //     }
    // }
}