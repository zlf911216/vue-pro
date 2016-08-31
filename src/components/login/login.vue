<template>
	<div flex="dir:top main:center cross:center" class="back">
		<div class="user">
			<div>Blog</div>
		</div>
		<div class="name">Admin</div>
		<div class="get-in" flex="dir:left">
			<i flex-box="0" class="userId-img">
				<img src="../../assets/images/personIcon.png">
			</i>
			<input type="text" id="userId" placeholder="用户名" flex-box="1" v-model="userId">
		</div>
		<div class="get-in" flex="dir:left">
			<i flex-box="0" class="userId-img">
				<img src="../../assets/images/icon_write.png">
			</i>
			<input type="password" id="password" placeholder="密码" flex-box="1" v-model="password">
		</div>
		<div class="login" @touchstart="login" @touchend="end" :class="{'touch':touch}">log in</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				touch:false,
				password:null,
				userId:null
			}
		},
		methods:{
			login:function(){
				this.touch=true
			},
			end:function(){
				this.touch=false
				if(this.userId!="admin"){return}
				if(this.password!="admin"){return}
				localStorage.setItem('userid',this.userId)
				localStorage.setItem('password',this.password)
				this.$route.router.go('/index')	
			}
		}
	}
</script>
<style scoped lang='scss'>
	.back{
		width: 100%;
		height: 100%;
		background:#474354
	}
	.user{
		width: 30%;
		height: 0;
		padding-bottom: 30%;
		border-radius: 50%;
		border: 2px solid rgb(255,255,255);
		color: white;
		position: relative;
	}
	.user>div{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		font-size: 1.8rem;
		z-index: 5;
	}
	.name{
		margin: 3% 0 12% 0;
		color: white;
	}
	.get-in{
		width: 75%;
		padding: 0.7rem 0;
		border-bottom: 1px solid rgba(255,255,255,0.35);
		position: relative;
	}
	.userId-img{
		position: absolute;
		height: 1.4rem;
	}
	.userId-img img{
		display: block;
		height: 100%;
	}
	#userId,#password{
		background:#474354;
		outline: none;
		border: none;
		line-height: normal;
	    padding: 0 1rem;
	    border: 0;
	    font-size:0.9rem;
	    color: white;
	    height: 1.4rem;
	    vertical-align: middle;
	    text-align: center;
	}
	.login{
		width: 75%;
		line-height: 2.5rem;
		font-size: 1.1rem;
		background: rgba(0,0,0,0.16);
		color: white;
		text-align: center;
		margin-top: 10%;
		border-radius: 4px;
	}
	.touch{
		background: rgba(0,0,0,0.4)
	}
</style>