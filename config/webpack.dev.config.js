/*
* @Author: liyunjiao
* @Date:   2018-06-12 10:59:17
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-06-12 15:44:05
*/

var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
let {entry} = config;
module.exports = {
    mode:'development',
    entry: '../client/src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        less: 'vue-style-loader!css-loader!less-loader',
                        js:'babel-loader'
                    }
                }
            },{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },{
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            Components: path.resolve(__dirname, '../src/components/')
        },
        extensions: ['.js', '.vue','.less']
    },
    performance: {
        hints: false
    },
    plugins:[
        new htmlWebpackPlugin({
            title: 'hehe',
            template: path.join(__dirname, '../views/tpl/index.tpl.html'),
            filename: path.resolve(__dirname,'./views/html/index.html')
        })
    ],
    devtool: '#eval-source-map'
}