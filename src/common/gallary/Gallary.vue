<template>
	<div class="container" @click="handleGallaryClick()">
		<div class="wrapper">
			<swiper :options="swiperOptions">
				<swiper-slide v-for="(item,index) in imgs"
				:key="index">
					<img class="gallary-img" 
					:src="item" alt="">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				swiperOptions:{
					pagination:'.swiper-pagination',
					paginationType:'fraction'
				}
			};
		},
		props:{
			imgs:{
				type:Array,
				default(){
					return [
						'https://img1.qunarzz.com/vs_ceph_vs_tts/d7c0267e-8dd3-4a70-af94-1bf860a8be10.jpg_r_1280x840x90_ec630037.jpg',
						'https://img1.qunarzz.com/vs_ceph_vs_tts/8156be5d-40bb-4a9f-a42b-82e5867f18ea.jpg_r_1280x840x90_10b88c23.jpg'
					]
				}
			}
		},
		methods:{
			handleGallaryClick(){
				this.$emit('close')
			}
		}
	}
</script>

<style lang="stylus" scoped="scoped">
	.container >>> .swiper-container
		overflow: inherit
	.container
		display: flex
		flex-direction: column
		justify-content: center
		z-index: 99
		position: fixed
		left: 0
		right: 0
		top: 0
		bottom: 0
		background: #000
		.wrapper
			width:100%
			height:0
			/* overflow:hidden */
			padding-bottom:100%
			background:#fff
			.gallary-img
				width:100%	
			.swiper-pagination
				color: #fff
				bottom: -1rem
</style>
