<template>
	<div class="travel_list" v-for="item in message" track-by="$index">
		<div v-if='item.adv' class="adv_box">
			<adv-picture my-style='{"width":"100%"}' my-random='false' my-position="H5-B1"></adv-picture>		
		</div>
		<div v-else class="travel_box" @click="getinmessage(item.userid)">
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
			<div class="see_more" flex="dir:top cross:center" @click.stop="con">查看全文</div>
		</div>
	</div>
	<div class="down_nav"></div>
	<div class="loading_more">点击加载更多</div>
</template>
<script>
	export default {
		data(){
			return{
				message:[
					{
						name:'糖醋鲤鱼',
						time:'2016-8-12',
						difficult:3,
						top_img:require('../../assets/images/fish.jpg'),
						message:'“糖醋鲤鱼”也是山东济南的传统名菜。济南北临黄河，黄河鲤鱼不仅肥嫩鲜美，而且金鳞赤尾，形态可爱，是宴会上的佳肴。据说“糖醋鲤鱼”最早始于黄河重镇——洛口镇。当...',
						userid:"999"
					}
				]
			}
		},
		methods:{
			con:function(){
				console.log(11)
			},
			getinmessage:function(id){
				this.$route.router.go('/index/eat/'+id)
			}
		},
		ready: function () {
		}
	}
</script>
<style scoped lang='scss'>
	.travel_list{
		position: relative;
		background:white;
		padding: 1rem 0;
		margin-top: 1.5rem;
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
	.difficult{
		width: 90%;
		margin: 0.5rem auto 0 auto;
		font-weight: bold;
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
		top: 50%;
		left: 0;
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
		font-size: 0.5rem;
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
	.down_nav{
		margin-top: 1.5rem;
		height: 2.3rem;
		visibility: hidden;
	}
	.loading_more{
		position: fixed;
		left:0;
		bottom: 0;
		width: 100%;
		text-align: center;
		line-height: 2.3rem;
		background: rgba(174,211,129,0.85);
		color: white;
		word-spacing: 0.1rem;
		letter-spacing: 0.1rem;
	}
	.star{
		width: 1rem;
		height: 1rem;
		background: url(../../assets/images/star.jpg) no-repeat;
		background-size: 100% auto;
	}
</style>
