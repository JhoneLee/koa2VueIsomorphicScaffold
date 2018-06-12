/*
* @Author: liyunjiao
* @Date:   2018-06-08 16:30:17
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-06-08 16:31:35
*/

function find(list, f) {
    return list.filter(f)[0];
}
export function isEmptyObject(obj) {
    for (const t in obj) {
        return !1;
    }
    return !0;
}

export function deepCopy(obj, cache = []) {
    // just return if obj is immutable value
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    // if obj is hit, it is in circular structure
    const hit = find(cache, c => c.original === obj);
    if (hit) {
        return hit.copy;
    }

    const copy = Array.isArray(obj) ? [] : {};
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
    cache.push({
        original: obj,
        copy
    });
    Object.keys(obj).forEach(key => {
        copy[key] = deepCopy(obj[key], cache);
    });

    return copy;
}

export function forEachValue(obj, fn) {
    Object.keys(obj).forEach(key => fn(obj[key], key));
}

export function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

export function isFunction(obj) {
    return obj !== null && typeof obj === 'function';
}

export function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

export function isPromise(val) {
    return val && typeof val.then === 'function';
}

export function assert(condition, msg) {
    if (!condition) {
        throw new Error(`[vuex] ${msg}`);
    }
}
export function getLocalData(data) {
    const localData = {};
    if (typeof data === 'string') {
        return window.localStorage.getItem(data);
    } else {
        data.map((item, index) => {
            localData[item] = (window.localStorage.getItem(item));
        });
        return localData;
    }
}

export function setLocalData(data, value) {
    if (typeof data === 'string' && (typeof value === 'string' || typeof value === 'number')) {
        window.localStorage.setItem(data, value);
        return;
    }
    if (isObject(data) && !isEmptyObject(data)) {
        for (const setKey in data) {
            window.localStorage.setItem(setKey, data[setKey]);
        }
        return;
    }
}

export function serialize(obj) {
    const result = [];
    for (const k in obj) {
        result.push(encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]));
    }
    return result.join('&');
}

export function formatDate(date,type){
    function pad2(n) { 
        return n < 10 ? '0' + n : n 
    }
    let time='';
    if(typeof date==='object'){
        time=date.getFullYear().toString()+'-' 
            + pad2(date.getMonth() + 1)+'-' 
            + pad2(date.getDate())+' ';
    }else if(typeof date === 'string'){
        time=date.split(' ')[0]+' ';
    }
    if(!type){
        time+=pad2(date.getHours())+':' 
            + pad2(date.getMinutes())+':'
            + pad2(date.getSeconds());
    } else if(type==1){
        time+='00:00:00';
    } else {
        time+='23:59:59';
    }
    return time;
}

export function getParams() {
    var get = window.location.href.split('?')[1];
    if (get) {
        var params = get.split(/&|=/);
        var obj = {};
        for (var i = 0; i < params.length; i++) {
            obj[params[i]] = decodeURIComponent(params[++i]);
        }
        return obj;
    } else {
        return {};
    }
}

function cookie2obj(){
    let cookie=document.cookie;
    let arr=cookie.split('; ');
    let obj={};
    arr.forEach(function(e){
        let a=e.split('=');
        obj[a[0]]=a[1];
    });
    return obj;
}


export function getCookie(key){
    let obj=cookie2obj();
    return obj[key];
}

export function setCookie(key,value){
    document.cookie=key+'='+value+';';
}

//金额千分位 & 保留两位小数
export function milliFormat(s){//格式化千位符
    if(/[^0-9\.]/.test(s)) return "invalid value";
    s=s.replace(/^(\d*)$/,"$1.");
    s=(s+"00").replace(/(\d*\.\d\d)\d*/,"$1");
    if(s == '0.00'){
        return s = 0;
    }
    s=s.replace(".",",");
    let re=/(\d)(\d{3},)/;
    while(re.test(s)){
        s=s.replace(re,"$1,$2");
    }
    s=s.replace(/,(\d\d)$/,".$1");
    return s.replace(/^\./,"0.")
}

// 金额千分位 & 保留所有小数位
export function toThousands(num) {
    let numArr = num.split('.');
    let num1 = numArr[0];
    let result = '';
    while (num1.length > 3) {
        result = ',' + num1.slice(-3) + result;
        num1 = num1.slice(0, num1.length - 3);
    }
    if (num1) {
        numArr.length > 1
        ? result = num1 + result + '.' + numArr[1]
        : result = num1 + result;
    }
    return result;
}