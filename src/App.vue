<template>
  <div id="app">
    <keep-alive exclude="Detail">
			<router-view/>
		</keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
	components:{
		
	}
}
</script>

<style>
#app {
  
}
</style>
