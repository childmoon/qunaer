<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
	</div>
</template>

<script>
	import homeHeader from './Header'
	import homeSwiper from './Swiper'
	import homeIcons from './Icons'
	export default {
		data() {
			return {
				
			};
		},
		components:{
			homeHeader,
			homeSwiper,
			homeIcons
		}
	}
</script>

<style>

</style>
