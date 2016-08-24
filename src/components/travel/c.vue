<template>
	<div class="travel_list" v-for="item in message">
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
	<div class="see_more" flex="dir:top cross:center" v-link="{name:'travel_message',params:{userId:item.userid}}">查看全文</div>
	</div>
	<div class="down_nav"></div>
	<div class="loading_more">点击加载更多</div>
</template>
<script>
	import adv from '../advertisement/adv' 
	export default {
		data(){
			return{
				message:[
					{
						name:'杭州游记',
						time:'2016-7-12',
						top_img:require('../../assets/images/top_1.jpg'),
						message:'西湖可以分为北线、西线和南线三条线路，今天先游览北线和西线的一部分，从白娘子与许仙相识的断桥开始，穿过白堤，到达风景如画的孤山，在这里我们可以品茶赏景，出了孤山不远便是...',
						userid:'456'
					},
					{
						name:'杭州游记1',
						time:'2016-8-22',
						top_img:require('../../assets/images/top_1.jpg'),
						message:'西湖可以分为北线、西线和南线三条线路，今天先游览北线和西线的一部分，从白娘子与许仙相识的断桥开始，穿过白堤，到达风景如画的孤山，在这里我们可以品茶赏景，出了孤山不远便是...',
						userid:'426'
					},
					{
						name:'杭州游记2',
						time:'2016-8-22',
						top_img:require('../../assets/images/top_1.jpg'),
						message:'西湖可以分为北线、西线和南线三条线路，今天先游览北线和西线的一部分，从白娘子与许仙相识的断桥开始，穿过白堤，到达风景如画的孤山，在这里我们可以品茶赏景，出了孤山不远便是...',
						userid:'411'
					}
				]
			}
		},
		ready: function () {
		},
		components:{
			adv
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
</style>
