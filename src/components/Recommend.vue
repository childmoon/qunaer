<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item in list" :key="item.id">
				<img class="item-img" :src="item.imgUrl" alt="">
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>	
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:{
			list:Array
		},
		data() {
			return {
				/* recommendList:[
					{
						id:"0001",
						imgUrl:'https://imgs.qunarzz.com/vs_ceph_vs_tts/c485da34-df85-4e8f-9bb7-55bca7d97d1d.jpg_180x120_2f302f0e.jpg',
						title:'火车头夜市',
						desc:'无自费+泳池别墅+SPA'
					},
					{
						id:"0002",
						imgUrl:'https://imgs.qunarzz.com/vs_ceph_vs_tts/5759256a-cccb-43aa-8c07-c3a0c96a0a8a.jpg_180x120_afd26787.jpg',
						title:'普吉岛每日AB行程',
						desc:'浮潜+免税店+五星泳池'
					},
					{
						id:"0003",
						imgUrl:'https://imgs.qunarzz.com/p/tts3/1708/97/d657636af1830702.jpg_180x120_aedc18db.jpg',
						title:'轻奢泰国曼谷芭提雅6/7天',
						desc:'SPA/按摩+免税店+骑大象'
					},
					{
						id:"0004",
						imgUrl:'https://imgs.qunarzz.com/p/tts0/1902/f1/aa50b8f3e7423402.png_180x120_95d16586.png',
						title:'荷美邮轮msWesterdam东南亚航线',
						desc:'豪华型'
					},
					{
						id:"0005",
						imgUrl:'https://imgs.qunarzz.com/p/tts4/1806/92/6cdba2b8cf9c5b02.jpg_180x120_f2f4b446.jpg',
						title:'上海苏梅岛6天5晚自由行 拉迈海滩',
						desc:'连住不挪窝+泳池别墅'
					},
					{
						id:"0006",
						imgUrl:'https://imgs.qunarzz.com/vs_ceph_vs_tts/ec7810fa-53b3-4521-858f-3527edcbd299.jpg_180x120_d3965afd.jpg',
						title:'泰国皇帝岛海鱼盛宴海钓体验一日游(中文导游)',
						desc:'海钓+浮潜'
					}
				] */
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
	.item
		display:flex
		overflex:hidden
		height:1.9rem
		//background:red
		.item-img
			width:1.7rem
			height:1.7rem
			padding:.1rem
		.item-info
			flex:1
			padding:.1rem
			min-width:0//3.在字体的父级加这句话
			.item-title
				line-height:.54rem
				font-size:.32rem
				ellipsis()//1.在需要优化的样式里加这句话
			.item-desc
				line-height:.4rem
				color:#ccc
				ellipsis()//2.在需要优化的样式里加这句话
			.item-button
				line-height:.44rem
				margin-top:.16rem
				background:#ff9300
				padding: 0 .2rem
				border-radius:.06rem
				color:#fff
</style>
