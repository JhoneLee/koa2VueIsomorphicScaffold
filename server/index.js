/*
* @Author: liyunjiao
* @Date:   2018-06-12 11:02:46
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-06-12 14:57:41
*/

var br = require('babel-register');
var fs = require('fs');
var path = require('path');
var babelConfig = JSON.parse(fs.readFileSync(path.join(__dirname , '../.babelrc')));
br(babelConfig);
let pathName = './server.dev.js';
console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV != 'development'){
    pathName = './server.prod.js';
}
require(pathName)