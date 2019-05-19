<template>
	<div>
		<router-link 
		tag="div" 
		to="./../" 
		class="header-abs"
		v-show="showAbs">
			<div class="iconfont header-abs-back">&#xe6f5;</div>
		</router-link>
		<div 
		class="header-fixed" 
		v-show="!showAbs"
		:style="opacityStyle">
			<router-link tag="div" to="./../">
				<div class="iconfont header-fixed-back">&#xe6f5;</div>
			</router-link>
			景点详情
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showAbs:true,
				opacityStyle:{
					opacity:1
				}
			};
		},
		methods:{
			handleScroll(){
				const top=document.documentElement.scrollTop
				if(top > 60){
					this.showAbs=false
					/* if(top<140){
						this.opacityStyle.opacity=top/140
					}else{
						this.opacityStyle.opacity=1 */
					//这段注释掉的ifelse改成下面三目运算符写法更为简洁
					const opacity = top / 140
					this.opacityStyle.opacity = opacity > 1 ? 1 : opacity
				}else{
					this.showAbs=true
				}
			}
		},
		mounted(){
			window.addEventListener('scroll',this.handleScroll)
		},
		activated(){
			
		}
	}
</script>

<style lang="stylus" scoped="scoped">
	@import '~styles/varibles.styl'
	.header-abs
		position: absolute
		left: .2rem
		top: .2rem
		width: .75rem
		height: .75rem
		line-height: .75rem
		border-radius: .4rem
		text-align: center
		background: rgba(0, 0, 0, .8)
		.header-abs-back
			color:#fff
			font-size:.4rem
	.header-fixed
		position:fixed
		top:0
		left:0
		right:0
		height:$headerHeight
		line-height:$headerHeight
		text-align:center
		color:#fff
		background:$bgColor
		font-size:.32rem
		.header-fixed-back
			position:absolute
			top:0
			left:0
			width:.64rem
			text-align:center
			font-size:.4rem
			color:#fff
</style>
