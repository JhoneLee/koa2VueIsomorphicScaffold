/*
* @Author: liyunjiao
* @Date:   2018-06-12 10:59:29
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-06-12 11:00:36
*/

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'production',
    entry: {
        main:'./src/main.js',
        vendorVue: ['vue'],
        vendorVuex:['vuex'],
        vendorRouter:['vue-router']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',
        filename: './[name].[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true,
                    loaders: {
                        less: ExtractTextPlugin.extract({
                            use:'css-loader!less-loader',
                            fallback:'vue-style-loader'
                        })
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
    plugins:[
        new ExtractTextPlugin('less.css'),
        new htmlWebpackPlugin({
            title: 'hehe',
            template: path.join(__dirname, '../index.html'),
            filename: './index.html'
        })
    ],
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
    devtool: '#eval-source-map'
}