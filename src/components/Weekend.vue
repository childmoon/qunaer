<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item in recommendList" :key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl" alt="">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>	
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				recommendList:[
					{
						id:"0001",
						imgUrl:'https://imgs.qunarzz.com/vs_ceph_vc_ddr_merchant_service/c7f25b21-9098-4cbc-803d-d0d1a40cdb49.jpg_640x320_8593c65d.jpg',
						title:'北京红螺寺1日游-祈福还愿 千年古刹 | 乐吧户外',
						desc:'海拔300米 日徒步5公里 行程1天 轻装徒步'
					},
					{
						id:"0002",
						imgUrl:'https://imgs.qunarzz.com/vs_ceph_vc_ddr_merchant_service/f7102466-646d-49e4-bfe4-0138228e3690.png_640x320_7778ea5e.png',
						title:'江苏宜兴竹海一日游 竹海吸氧',
						desc:'海拔1000米 日徒步1公里 行程一天'
					},
					{
						id:"0003",
						imgUrl:'https://imgs.qunarzz.com/vs_ceph_vc_ddr_merchant_service/8ef83b7c-113c-427e-8be0-e9f0fd4d0bd1.jpg_640x320_b17d771a.jpg',
						title:'[5.19旅游节] 山西大同-北岳恒山',
						desc:'无购物 专业玩家/领队 经济舒适酒店'
					},
					{
						id:"0004",
						imgUrl:'https://imgs.qunarzz.com/vs_ceph_vc_ddr_merchant_service/d1af9df4-be4d-47bd-a41d-ba755161d9e7.jpg_640x320_84900430.jpg',
						title:'富春江桐洲岛2日探索亲子营',
						desc:'森林探险 皮划艇 环岛旅行 丛林CS'
					},
					{
						id:"0005",
						imgUrl:'https://imgs.qunarzz.com/douxing/i1/1807/eb/db04300e6ade6502.jpg_640x320_01d7cc27.jpg',
						title:'迪拜跳伞 棕榈岛高空跳伞',
						desc:'极限运动 专业教练 高空摄影'
					},
					{
						id:"0006",
						imgUrl:'https://imgs.qunarzz.com/douxing/i2/1810/86/921ee57de2892502.jpg_640x320_78095927.jpg',
						title:'兰卡威芭雅岛一日游 沙滩浮潜全岛接送',
						desc:'经典线路 深度体验 '
					}
				]
			};
		}
	}
</script>

<style lang="stylus" scoped="scoped">
	@import '~styles/mixins.styl'
	.title
		margin-top:.2rem
		line-height:.8rem
		background:#eee
		text-indent:.2rem
	.item-img-wrapper
		overflow:hidden
		height:0
		padding-bottom:43.9%
		.item-img
			width:100%
	.item-info
		padding:.1rem
		.item-title
			line-height:.54rem
			font-size:.32rem
			ellipsis()//1.在需要优化的样式里加这句话
		.item-desc
			line-height:.4rem
			color:#ccc
			ellipsis()//2.在需要优化的样式里加这句话
</style>
