<template>
    <div class="box" flex="main:center cross:center" @click='top'>
    	<i class="goto-top"></i>
    </div>
</template>
<script>
	export default {
		methods:{
			top(){
				$('body').scrollTop(0)
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
