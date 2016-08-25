<template>
	<div v-showban class="goback" flex="dir:left cross:center">
		<span class="back go" flex-box="0" flex="dir:left cross:center"  @click='goback'>
			<img :src='back_img'>
			<span class="back_word" flex-box="0">返回</span>
		</span>
		<span class="back place" flex-box="1">
			苏州游记
		</span>
	</div>	
</template>
<script>
	import advPicture from '../advertisement/advPicture' 
	export default {
		data(){
			return{
				userid:this.$route.params.userId,
				open:false,
				back_img:require('../../assets/images/back.png')
			}
		},
		ready: function () {
			this.$dispatch('open',this.open)
			this.open=true
		},
		components:{
			advPicture
		},
		methods:{
			goback:function(){
				history.back()
			}
		},
		directives:{
			showban:{
				unbind:function(){
					this.vm.$dispatch('open',this.vm.open)
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
	.goback{
		background: white;
		line-height: 1.8rem;
		font-size: 1rem;
		text-align: center;
		box-shadow: 1px 1px 1px rgba(0,0,0,0.2)
	}
	.go{
		border-right: 2px solid rgba(0,0,0,0.3)
	}
	.back{
		padding:0.5rem 0;
	}
	.back img{
		padding:0 0.5rem;
		display: block;
		height: 1.2rem;
	}
	.back_word{
		padding:0 1.5rem 0 0.5rem;
	}
	.place{
		font-size: 1.2rem;
	}
</style>
