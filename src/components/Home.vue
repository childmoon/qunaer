<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<home-recommend></home-recommend>
		<home-weekend></home-weekend>
	</div>
</template>

<script>
	import homeHeader from './Header'
	import homeSwiper from './Swiper'
	import homeIcons from './Icons'
	import homeRecommend from './Recommend'
	import homeWeekend from './Weekend'
	export default {
		data() {
			return {
				
			};
		},
		components:{
			homeHeader,
			homeSwiper,
			homeIcons,
			homeRecommend,
			homeWeekend
		}
	}
</script>

<style>

</style>
