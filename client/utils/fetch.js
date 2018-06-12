/*
* @Author: liyunjiao
* @Date:   2018-06-08 16:23:41
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-06-11 15:04:37
*/

import 'isomorphic-fetch';
import URLSearchParams from 'url-search-params';
import {serialize, isArray, isFunction} from './tools';
import domain from './domain';
/**
 * 生成标准网络请求
 *
 * @param    {Object}     options 选项
 * @return   {Function}   action
 */
export const warpFetch = options => {
    // 拿到url
    let {api, params,method,schema,headers,type} = options;
    let url = domain.url + api;
    method = method || 'POST';
    return function ({commit}, additionData = {}) {
        callFetch(url, schema, method, params, headers).then(response => {
            commit(`${type}_SUCCESS`, response);
        },error => {
            commit(`${type}_ERROR`, error);
        });
    };
};


export function callFetch(url, schema, method, params, headers) {
    let fullUrl = url;
    let data = {};
    let defaultHeaders = {
        'Accept': 'application/json', // 'application/json, application/xml, text/play, text/html, *.*',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if (method === 'GET' && params) {
        fullUrl = fullUrl + '?' + serialize(params);
    }
    else if (headers && headers['Content-Type'] === 'application/x-www-form-urlencoded') {
        let urlSear = new URLSearchParams();
        for(let i in params){
            urlSear.append(i, params[i]);
        }
        data.body = urlSear.toString();
        data.method = method;
    }
    else {
        data.body = JSON.stringify(params);
        data.method = method;
    }

    let newHeaders;
    if (window.customHeaders && typeof window.customHeaders === 'function') {
        newHeaders = Object.assign({}, defaultHeaders, window.customHeaders());
    }
    else {
        newHeaders = Object.assign({}, defaultHeaders, headers);
    }
    Object.assign(data, {headers: newHeaders, credentials: 'include'});
    return fetch(fullUrl, data)
        .then(response => response.json().then(json => ({json, response})))
        .then(({json, response}) => {
            if (!response.ok) {
                return Promise.reject(json);
            }
            if (isArray(json)) {
                return json.slice();
            }
            return Object.assign({}, json);
        });
}