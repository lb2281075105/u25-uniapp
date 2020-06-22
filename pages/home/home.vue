<template>
	<view class="home">
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" circular indicator-active-color="#FFF">
			<swiper-item v-for="item in galleryItems" :key="item.id">
				<image :src="item.cover" />
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots:true,
				autoplay:true,
				interval:3000,
				duration:500,
				galleryItems:[]
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
				if(res.data.data.stateCode === 1){
					console.log(res.data.data.stateCode);
				}
				console.log(res.data.data.returnData.galleryItems);
				this.galleryItems = res.data.data.returnData.galleryItems;
			}
			
		
		}
	}
</script>

<style lang="scss">
	
	.home{
		.swiper{
			width: 100%;
			height: 386rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
