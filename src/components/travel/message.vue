<template>
	<adv-picture my-style='{"width":"100%"}' my-random='false' my-position="H5-B1" ></adv-picture>

	<p>{{userid}}</p>	
</template>
<script>
	import advPicture from '../advertisement/advPicture' 
	export default {
		data(){
			return{
				userid:this.$route.params.userId,
			}
		},
		ready: function () {
		},
		components:{
			advPicture
		}
	}
</script>
<style scoped lang='scss'>

</style>
