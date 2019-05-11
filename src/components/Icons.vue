<template>
	<div class="icons">
		<div class="icon" v-for="item in iconList">
			<div class="icon-img">
				<span class="iconfont icon-img-content" :class="item.iconclass"></span>
			</div>
			<p class="icon-desc">{{item.iconcontent}}</p>
		</div>
		<!-- <div class="icon">
			<div class="icon-img">
				<span class="iconfont icon-img-content">&#xe64c;</span>
			</div>
			<p class="icon-desc">热门景点</p>
		</div> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				iconList:[
					{
						id:'0001',
						iconclass:'iconwifiicon',
						iconcontent:'签证.WIFI'
						
					},
					{
						id:'0002',
						iconclass:'icondiqiu',
						iconcontent:'出境游'
						
					},
					{
						id:'0003',
						iconclass:'iconqizi',
						iconcontent:'一日游'
						
					},
					{
						id:'0004',
						iconclass:'icondaochacanyin',
						iconcontent:'美食林'
						
					},
					{
						id:'0005',
						iconclass:'iconqichepiao',
						iconcontent:'汽车票'
						
					},
					{
						id:'0006',
						iconclass:'iconyoulun-A',
						iconcontent:'邮轮游'
						
					},
					{
						id:'0007',
						iconclass:'iconbashiche',
						iconcontent:'超级巴士'
						
					},
					{
						id:'0008',
						iconclass:'icongonglve',
						iconcontent:'攻略'
						
					},
				]
			}
		}
	}
</script>

<style lang="stylus" scoped="scoped">
	@import '~styles/varibles.styl'
	.icons
		overflow:hidden
		height:0
		padding-bottom:50%
		//background:green
		.icon
			position:relative
			float:left
			width:25%
			padding-bottom:25%
			//background:red
			//box-sizing:border-box
			.icon-img
				position:absolute
				top:0
				left:0
				right:0
				//background:blue
				height:1.59rem
				text-align:center
				.icon-img-content
					font-size:0.8rem
					line-height:1.59rem
			.icon-desc
				width:100%
				display:inline-block
				position:absolute
				bottom:0
				text-align:center
				color:$darkTextColor
				font-size:0.3rem
				padding-bottom:0.1rem
</style>
