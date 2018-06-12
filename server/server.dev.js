/*
* @Author: liyunjiao
* @Date:   2018-06-12 14:45:58
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-06-12 15:30:41
*/

import Koa from 'koa2';
import config from '../config/webpack.dev.config';
import webpack from 'webpack';
import koaWebpackDevMiddleware from 'koa-webpack-dev-middleware';
import koaWebpackHotMiddleware from 'koa-webpack-hot-middleware';
import convert from 'koa-convert';
import koaStatic from 'koa-static';
import bodyparser from 'koa-bodyparser';
import views from 'koa-views';
let app = new Koa();
const compiler = webpack(config);
const wdm = koaWebpackDevMiddleware(compiler,{
    watchOptions:{
        aggregateTimeout:300,
        ignored:'/node_modules',
        poll:true
    },
    reload:true,
    publicPath:config.output.publicPath,
    stats:{
        colors:true
    }
});
app.use(convert(wdm));
app.use(convert(koaWebpackHotMiddleware(compiler)));
app.use(bodyparser());
app.use(koaStatic(__dirname+'./dist'));
app.use(views(path.resolve(__dirname, '../views/html'), {
    map: {html: 'ejs'}
}));
app.listen('4545',()=>{
    console.log('open on 4545');
});