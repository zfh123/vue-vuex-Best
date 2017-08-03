<style lang="less" scoped>
.btn {
	padding: 50px;
	text-align: center;
	button {
		padding: 5px 10px;
	}
}
.mains{
	text-align: center;
}
</style>
<template>
	<div>
		<v-header title="退出">
			<router-link slot="left" to="/home">返回</router-link>
		</v-header>
		<div class="mains">
		登陆时间
		<br/>
		<div class="StartTime" v-text="startTimes"></div>
		至当前时间
		<br/>
		<div class="nowTime" v-text="nowTime"></div>
		在线时间
		<br/>
		<div class="workTime" v-text="workTimes"></div>
		</div>
		<div class="btn">
			<button @click="submit">确认退出</button>
		</div>
	</div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { USER_SIGNOUT } from 'store/user'
export default {
	data() {
		return {
			StartTime: 0,
			nowTime: 0,
		}
	},
	computed: {
		...mapState({ user: state => state.user, cart: state => state.cart }),
		startTimes() {
			this.StartTime = this.user.startTime;
			return this.StartTime;
		},
		workTimes() {
			var result = "";
			const date1 = new Date(this.nowTime);//现在时间
			const date2 = new Date(this.StartTime);
			const date3 = (date1.getTime() - date2.getTime());//计算相差的毫秒数
			//计算天数
			const days = Math.floor(date3 / (24 * 3600 * 1000));
			result += days > 0 ? days + "天" : "0天";
			//计算出小时数
			const leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
			const hours = Math.floor(leave1 / (3600 * 1000));
			result += hours > 0 ? hours + "小时" : "0小时";
			//计算相差分钟数
			const leave2 = leave1 % (3600 * 1000);     //计算小时数后剩余的毫秒数
			const minutes = Math.floor(leave2 / (60 * 1000));
			result += minutes > 0 ? minutes + "分钟" : "0分钟";
			//计算相差秒数
			const leave3 = leave2 % (60 * 1000);       //计算分钟数后剩余的毫秒数
			const seconds = Math.round(leave3 / 1000);
			result += seconds > 0 ? seconds + "秒" : "";
			return result == "" ? "" : result;
		}
	},
	watch: {//监控ox值得变化
		// nowTime: {
		// 	handler: function (nowVal, oldVal) {

		// 	},
		// 	deep: true
		// },
		// workTime: {
		// 	handler: function (nowVal, oldVal) {

		// 	},
		// 	deep: true
		// }
	},
	created() {
		this.user;
		this.nowTimes();
	},
	mounted() {

	},
	methods: {
		...mapActions([USER_SIGNOUT]),
		nowTimes() {
			var $this = this;
			$this.nowTime = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
			console.log('init------' + $this.nowTime)
			$this.timers = setTimeout(function () {
				$this.nowTimes();
			}, 1000)
		},
		submit() {
			this.USER_SIGNOUT()
			this.$router.replace({ path: '/login' })
		}

	}
}
</script>