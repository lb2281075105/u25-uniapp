<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			this.getHomeData();
		},
		components: {},
		methods: {
			// 获取首页数据
			async getHomeData(){
				const res = await this.$myRequest({
					url: '/api/comic/boutiqueListNew?sexType=1',
					method: 'GET',
				});
				console.log("您好");
				console.log(res.data);
			}
			
		
		}
	}
</script>

<style>

</style>
