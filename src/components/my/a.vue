<template>
    <div class="my-CV">
    	<header class="top-box" flex="dir:top cross:center">
			<div class="my-headImg"></div>
			<p class="my-name">{{name}}</p>
			<p class="my-job">{{job}}</p>	
    	</header>
    </div>
</template>
<script>
	export default {
		data(){
			return{
				name:'郑灵峰',
				job:'前端工程师'
			}
		}
	}
</script>	
<style scoped lang='scss'>
	.top-box{
		margin-top: 1rem;
		width: 100%;
		background: white;
	}
	.my-headImg{
		width: 25%;
		height: 0;
		padding-bottom: 25%;
		border-radius: 50%;
		box-shadow: 0.5px 0.5px 0.5px red;
	}
	.my-name{
		margin-top: 0.5rem;
	}
	.my-job{
		margin-top: 0.2rem;
		padding-bottom: 0.5rem
	}
</style>	