<template>
    <div class="box" v-out flex="main:center cross:center" @click='top'>
    	<i class="goto-top"></i>
    </div>
</template>
<script>
	export default {
		data(){
			return{
				time:null
			}
		},
		methods:{
			top(){
				var height=document.body.scrollTop
				var now_height=height
				var time=400/16.7
				var speed=height/time
				var _this=this
				_this.time=setInterval(function(){
					now_height-=speed
					window.scrollTo(0,now_height)
					if(now_height<=0){
						clearInterval(_this.time)
					}
				},16.7)	
			}
		},
		directives:{
			out:{
				unbind:function(){
					clearInterval(this.vm.time)
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
	.box{
		width: 3.3rem;
		height: 3.3rem;
		bottom:4rem;
		right: 2rem;
		position: fixed;
		border-radius: 50%;
		background: rgba(0,0,0,.7)
	}
	.goto-top{
		height:1.785rem;
		width:1.785rem;
		background: url(../../assets/images/note_sprites1.png) no-repeat -11.58rem -10.32rem;
	    background-size: 15rem 13.2rem;
	}
</style>
