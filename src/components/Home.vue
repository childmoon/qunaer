<template>
	<div>
		<home-header :city="city"></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconList"></home-icons>
		<home-recommend :list="recommendList"></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>
	</div>
</template>

<script>
	import axios from 'axios'
	import homeHeader from './Header'
	import homeSwiper from './Swiper'
	import homeIcons from './Icons'
	import homeRecommend from './Recommend'
	import homeWeekend from './Weekend'
	export default {
		data() {
			return {
				city:'',
				swiperList:[],
				iconList:[],
				recommendList:[],
				weekendList:[]
			}
		},
		components:{
			homeHeader,
			homeSwiper,
			homeIcons,
			homeRecommend,
			homeWeekend
		},
		methods:{
			getHomeInfo(){
				axios.get('/api/index.json')
				//不能直接写axios.get('/static/mock/index.json')
				//后面你的代码要上线肯定不能写成这样
					.then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc(res){
				//console.log(res)
				res=res.data
				if(res.ret&&res.data){
					const data=res.data
					this.city=data.city
					this.swiperList=data.swiperList
					this.iconList=data.iconList
					this.recommendList=data.recommendList
					this.weekendList=data.weekendList
				}
			}
		},
		mounted(){
			this.getHomeInfo()
		}
	}
</script>

<style>

</style>
