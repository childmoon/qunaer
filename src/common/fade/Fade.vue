<template>
	<transition>
		<slot></slot>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="stylus" scoped="scoped">
	.v-enter, .v-leave-to
		opacity: 0
	.v-enter-active, .v-leave-active
		transition: opacity .5s
</style>
