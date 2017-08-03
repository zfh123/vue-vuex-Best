<style lang="less" scoped>
.login-msg {
	padding: 50px;
	text-align: center;
}

.msg {
	padding: 50px;
	text-align: center;
	font-size: 20px;
	color: red;
}
.goMap{
	text-align: center;
    color: #000;
    font-weight: 900;
}
</style>
<template>
	<div>
		<v-header title="首页">
			<router-link slot="right" v-if="user.id" to="/home">{{user.name}}</router-link>
		</v-header>
		<div class="login-msg" v-if="!user.id">
			<router-link to="/login">你还未登录，请先登录</router-link>
		</div>
		<div class="msg" v-if="user.id">
			<img width="50" :src="logo" alt="">
			<br> 哈哈，恭喜你已经入坑Vue2
		</div>
		<div class="goMap" @click="goMap()">地图</div>
		<div>加载中...</div>
		
		<v-footer>
            <li>大家</li>
            <li>小水</li>
            <li>雪花</li>
			<li>大家</li>
            <li>小水</li>
            <li>雪花</li>
        </v-footer>
	</div>
</template>
<script>
import {mapActions, mapState } from 'vuex'
import logo from './logo.png'
import { CART_LIST,CART_TIST,CART_PUB} from 'store/cart'
import {getShopId} from '../common/js/getShopIp'
import {getCommonData,common,comTest} from '../common/js/base'
import {indexPage} from '../../api/index'
export default {
	data() {
		return {
			logo
		}
	},
	computed: {
		...mapState({ user: state => state.user ,cart: state => state.cart}),
	},
	created() {
		var $this = this;
		$this._indexPage()
		$this._getCommonData();
		$this._comTest();
		console.log($this.cart)
		
		var arr = getShopId($this.cart)
		$this.arrList(arr);
	
	},
	methods: {
		...mapActions([ CART_LIST,CART_TIST,CART_PUB]),
		_indexPage(){
			console.log('-------------------------1--------------------------------')
			indexPage('index')
		},
		_getCommonData(){
			getCommonData('index/index');
		},
		_comTest(){
			var $this = this;
			comTest('index',function(res){
				//console.log(res);
				$this.CART_PUB(res);
				console.log('3')
			})
		},
		goMap(){
			this.$router.push('./map')
		},
		arrList(arr){
			console.log(arr)
			this.CART_TIST({
				log:arr.log,
				lom:arr.lom
			})
		}
	}


}
</script>