<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe6f5;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe705;</span>
			输入城市/景点/游玩项目
		</div>
		<router-link to='/city'>
			<div class="header-right">
				{{this.city}}
				<span class="iconfont arrow-icon">&#xe64a;</span>
			</div>
		</router-link>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			...mapState(['city'])
		}
		/* ,
		props:{
			'city':String
		} */
	}
</script>

<style lang="stylus" scoped="scoped">
	//在reset.css中设置了全局htmlfont-size为50px
	//所以这里1rem = html-size = 50px
	//我要设置这个height为43px
	//转换为rem就是43/50=0.86rem
	@import '~styles/varibles.styl'
	.header
		display: flex
		height:$headerHeight
		line-height: $headerHeight//这里相当于43px
		background:$bgColor
		color:#fff
		.header-left
			width: .64rem
			float:left
			.back-icon
				text-align:center
				font-size:.4rem
		.header-input
			flex:1
			height: .64rem
			line-height: .64rem
			margin-top: .12rem
			margin-left: .2rem
			padding-left:.2rem
			background:#fff
			border-radius: .1rem
			color:#ccc
		.header-right
			min-width: 1.04rem
			margin:0 0.06rem 0 0.06rem
			float:right
			text-align:center
			color:#fff
			.arrow-icon
				font-size:.24rem
				margin-left:-.04rem
		
		
</style>
