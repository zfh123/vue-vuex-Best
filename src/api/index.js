import jsonp from '../common/js/jsonp'
import {commonParams,options} from './cofing'

export function indexPage(url){
    console.log('indexPage页面'+url)

    const data = Object.assign({},commonParams,{
        paltHtmls:'h5',
        uin:0,
        needNewCode:1
    })
    console.log('-------------------------2--------------------------------')
    console.log(data);

    return jsonp(url)
}

