/*
* @Author: liyunjiao
* @Date:   2018-06-11 14:35:34
* @Last Modified by:   liyunjiao
* @Last Modified time: 2018-06-11 17:26:42
*/

import {warpFetch as fetch} from '../../utils/fetch';
export default {
    fetchData({commit},opt){
        let req = fetch(opt);
        req({commit});
    }
}