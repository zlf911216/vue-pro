<template>
	<adv></adv>
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
