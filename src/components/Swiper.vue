<template>
	<div class="wrapper">
		<swiper :options="swiperOption" v-if="showSwiper" ref="mySwiper">
			<swiper-slide v-for="item in list" :key="item.id">
				<img class="swiper-img" :src="item.imgUrl" alt="">
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>			
	</div>
</template>

<script>
	export default {
		props:{
			list:Array
		},
		data() {
			return {
				swiperOption:{
					pagination:'.swiper-pagination',
					loop:true,//循环轮播
					autoplay:3000
				}/*,
				swiperList:[
					{
						id:"0001",
						imgUrl:'https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png'
					},
					{
						id:"0002",
						imgUrl:'https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png'
					}
				] */
			};
		},
		computed:{
			showSwiper(){
				return this.list.length 
			}/* ,
			swiper() {
				return this.$refs.mySwiper.swiper
			} */
		}/* ,
		mounted(){
			this.swiper.slideTo(3, 1000, false)
		} */
	}
</script>

<style lang="stylus" scoped="scoped">
	.wrapper >>> .swiper-pagination-bullet-active
		background: #fff !important
	//表示.wrapper下的.swiper-pagination-bullet-active
	//不受scopred的限制.此样式能进行穿透
	.wrapper
		overflow:hidden
		width:100%
		height:0
		padding-bottom:31.25%
		//此处padding-bottom为轮播图图片尺寸的height/width
		//此图width为375 height为92 所以等于92/375=24.53%
		.swiper-img
			width:100%
		
			
</style>
