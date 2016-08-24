<template>
	<adv my-style='{"width":"100%"}'  my-random='false' my-position="H5-B1" ></adv>
<!-- 	<adv my-style='{"width":"100%"}' my-loop='false' my-random='false' my-position="H5-B1" my-identifying='false' my-word="你好"></adv> -->
	<p>{{userid}}</p>	
</template>
<script>
	import adv from '../advertisement/adv' 
	export default {
		data(){
			return{
				userid:this.$route.params.userId,
			}
		},
		ready: function () {
		},
		components:{
			adv
		}
	}
</script>
<style scoped lang='scss'>

</style>
