<template>	
	<div flex="dir:left main:center cross:center" class="new_travel_message">
		<i><img :src='writeMessage'></i>
		发表新做法
	</div>
	<public-message></public-message>
	<gotop></gotop>
	<public-load></public-load>	
</template>
<script>
	import publicMessage from './list-message' 
	import publicLoad from './loading' 
	import gotop from '../public/top.vue'
	export default {
		data(){
			return{
				show_message:null,
				writeMessage:require('../../assets/images/msg_write.png')
			}
		},
		components:{
			publicMessage,gotop,publicLoad
		}
	}
</script>
<style scoped lang='scss'>
	.new_travel_message{
		font-weight: bold;
		line-height: 2.8rem;
		word-spacing: 0.1rem;
		letter-spacing: 0.1rem;
		font-size: 1.1rem;
		background: url(../../assets/images/travel_back.jpg) white no-repeat;
		background-size: 130% auto;
		background-position:85% 29%;
		color: #5d3d00;
	}
	.new_travel_message i{
		height: 1.5rem;
	}
	.new_travel_message i img{
		display: block;
		height: 100%;
	}
</style>
