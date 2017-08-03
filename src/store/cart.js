import Vue from 'vue'

export const CART_LIST = 'CART_LIST' //登录成功
export const CART_TIST = 'CART_TIST' //退出登录
export const CART_PUB = 'CART_PUB' //保存公用方法的区域


export default {
    state: JSON.parse(sessionStorage.getItem('cartData')) || {},
    mutations: {
        [CART_LIST](state, busin) {
            const cart = state;
            cart.busin = busin;
            Object.assign(state, cart);
            localStorage.setItem('cartData', JSON.stringify(cart));
        },
        [CART_TIST](state,address) {
            
            const cart = state;
            cart.address = address;
            Object.assign(state, cart);
            localStorage.setItem('cartData', JSON.stringify(cart));
            
        },
        [CART_PUB](state,pub){
           // alert('2')
           console.log('2')
            const cart = state;
            cart.pub = pub;
            Object.assign(state, cart);
            localStorage.setItem('cartData', JSON.stringify(cart));
        }
    },
    actions: {
        [CART_LIST]({ commit }, busin) {
            commit(CART_LIST, busin)
        },
        [CART_TIST]({ commit },address) {
            commit(CART_TIST,address)
        },
         [CART_PUB]({ commit },pub) {
            commit(CART_PUB,pub)
        }
    }
}