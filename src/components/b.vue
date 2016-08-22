<template>
	<banner></banner>
	<enter></enter>
    <div class="loading"> 	
    </div>  
</template>
<script>
	import enter from './enter';
	import banner from './banner';
	export default {
		data(){
			return{

			}
		},
		ready: function () {
		},
		components:{
			enter,banner
		}
	}
</script>
<style src="../assets/css/b.scss" scoped lang='scss'></style>
