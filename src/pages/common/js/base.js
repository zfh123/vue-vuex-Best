import { CART_PUB } from 'store/cart'


export function getCommonData(data) {
    console.log(data)
}

export function common(callback) {
    console.log('common');

}



export function comTest(param,callback) {
    
    if(param === 'index'){
       var  url = window.confing.api.lost1;
       
    }else if(param === 'home'){
       var  url = window.confing.api.lost2;
      
    }else{
       var  url = window.confing.api.lost3;
      
    }
    $.ajax({
        type: "get",
        url: url,
        async: true,
        success: function (res) {
            
            typeof callback == 'function' && callback(res)
        },
        error: function (res) {
            console.log(res)
        }
    });
    
    var pub = {
        address: '125',
        userNo: '890765',
        City2Name: '杭州市',
        City3Name: '西湖区'
    }
    
}