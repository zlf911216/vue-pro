<template>	
	<div class="down_nav"></div>
	<div class="loading_more" @click="load">点击加载更多</div>
</template>
<script>
	import advPicture from '../advertisement/advPicture' 
	export default {
		methods:{
			load:function(){
				var _this=this
				$.ajax({
					url: '/article',
					type: 'post',
					dataType: 'json',
					success:function(data){
						data.message.splice(2,0,{adv:true})
						_this.$dispatch('add_message',data.message)
						
					}
				})	
			}
		}
	}
</script>
<style scoped lang='scss'>
	.down_nav{
		margin-top: 1.5rem;
		height: 2.8rem;
		visibility: hidden;
	}
	.loading_more{
		position: fixed;
		left:0;
		bottom: 0;
		width: 100%;
		text-align: center;
		line-height: 2.8rem;
		background: rgba(174,211,129,0.85);
		color: white;
		word-spacing: 0.1rem;
		letter-spacing: 0.1rem;
	}
</style>
