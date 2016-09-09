<template>	
	<div class="travel_list" v-for="item in message" track-by="$index">
		<div v-if='item.adv' class="adv_box">
			<adv-picture my-style='{"width":"100%"}' my-position="weixin-YF-2" my-word="你好" :my-random='true' :my-loop='true' :my-identifying='true'></adv-picture>		
		</div>
		<div v-else class="travel_box"  v-link='{path:item.userid,append:true}'>
			<p class="travel_title" flex="dir:left main:justify cross:center">
				<span class="travel_name">
					<span>-- </span>
					<span>{{item.name}}</span>
					<span> --</span>
				</span>
				<span class="travel_time">{{item.time}}</span>
			</p>
			<div class="travel_top_img">
				<img :src='item.top_img'>
			</div>
			<p class="travel_message">{{item.message}}</p>
			<div class="see_more" flex="dir:top cross:center">查看全文</div>
		</div>
	</div>
</template>
<script>
	import advPicture from '../advertisement/advPicture' 
	export default {
		ready: function () {
			var _this=this
			$.ajax({
				url: '/article',
				type: 'post',
				dataType: 'json',
				success:function(data){
					data.message.splice(2,0,{adv:true})
					_this.$store.state.article_MESSAGE.message=data.message
				}
			})			
		},
		vuex:{
			getters:{
				message:state=>state.article_MESSAGE.message
			}
		},
		components:{
			advPicture
		}
	}
</script>
<style scoped lang='scss'>
	.travel_list{
		position: relative;
		background:white;
		margin-top: 1.5rem;
	}
	.travel_box{
		padding: 1rem 0;
	}
	.travel_title{
		width: 90%;
		margin:auto;
	}
	.travel_name{
		color: rgb(89,61,67);
		font-size:1rem;
		font-weight: bold;
	}
	.travel_time{
		font-size:0.8rem;
		color:#666;
	}
	.travel_top_img{
		position: relative;
		width: 90%;
		margin: 0.5rem auto 0 auto;
		height: 0;
		padding-bottom: 35%;
		overflow: hidden;
		border-radius: 0.6rem;
		border:0.2rem solid rgba(131,175,155,0.5);
	}
	.travel_top_img img{
		position: absolute;
		left: 0;
		top: 50%;
		transform: translate(0,-50%);
		display: block;
		width: 100%;
		height: auto;
	}
	.travel_message{
		position: relative;
		width: 90%;
		height: 3.5rem;
		line-height:1.5em;
		margin: 0.5rem auto 0 auto;
		overflow: hidden;
		font-size: 0.8rem;
	}
	.see_more{
		position: absolute;
		bottom:0;
		left: 50%;
		font-size: 0.9rem;
		transform: translate(-50%,50%);
		background: white;
		color: rgb(248,147,29);
		border-radius: 0.5rem;
		border:0.1rem solid rgb(248,147,29);
		padding: 0 0.8rem;
		line-height: 1.4rem;
	}
</style>
