const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './app/index.js',
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
            { test: /\.svg$/, use: 'svg-inline-loader'}
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ],
    mode: 'development'
}