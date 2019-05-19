<template>
	<div>
		<div class="banner" @click="handleBannerClick()">
			<img class="banner-img" src="https://img1.qunarzz.com/p/tts3/1708/97/d657636af1830
			702.jpg_r_640x420x90_507be068.jpg" alt="">
			<div class="banner-info">
				<div class="banner-tittle">
					大连海洋世界
				</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe602;</span>
					39
				</div>
			</div>
		</div>
		<common-gallary v-if="showGallary" @close="handleGallaryClose"></common-gallary>
	</div>
</template>

<script>
	import CommonGallary from 'common/gallary/Gallary'
	export default {
		data() {
			return {
				showGallary:false
			};
		},
		components:{
			CommonGallary
		},
		methods:{
			handleBannerClick(){
				this.showGallary=true
			},
			handleGallaryClose(){
				this.showGallary=false
			}
		}
	}
</script>

<style lang="stylus" scoped="scoped">
	.banner
		position:relative
		overflow:hidden
		height:0
		padding-bottom:55%
		.banner-img
			width:100%
		.banner-info
			display:flex
			position:absolute
			bottom:0
			width:100%
			line-height:.6rem
			color:#fff
			background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
			.banner-tittle
				flex:1
				font-size:.32rem
				padding:0 .2rem
			.banner-number
				margin-top:.14rem
				padding: 0.05rem .4rem 0rem .4rem
				line-height:.32rem
				height:.4rem
				border-radius:.2rem
				background:rgba(0,0,0,.8)
				font-size:.24rem
				.banner-icon
					font-size:.24rem
					margin-right:0.05rem
		
		
		
		
		
		
		
			/* display:flex
			position:absolute
			left:0
			right:0
			bottom:0
			line-height:.6rem
			color:#fff
			.banner-tittle
				flex:1
				font-size:.32rem
				padding:0 .2rem
			.banner-number
				padding: 0 .4rem
				line-height:.32rem
				height:.4rem
				border-radius:.2rem
				background:rgba(0,0,0,.8)
				font-size:.24rem */
</style>
