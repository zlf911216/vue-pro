<template>
     <div class="travel_list">
     	<p class="travel_title" flex="dir:left main:justify cross:center">
     		<span class="travel_name">-- 糖醋鲤鱼 --</span>
     		<span class="travel_time">2016-8-10</span>
     	</p>
     	<div class="difficult" flex="dir:left cross:center">
     		<span>难度：</span>
     		<div class="star"></div>
     		<div class="star"></div>
     		<div class="star"></div>
     	</div>
     	<div class="travel_top_img">
     		<img src="../assets/images/fish.jpg" alt="">
     	</div>
		<p class="travel_message">“糖醋鲤鱼”也是山东济南的传统名菜。济南北临黄河，黄河鲤鱼不仅肥嫩鲜美，而且金鳞赤尾，形态可爱，是宴会上的佳肴。据说“糖醋鲤鱼”最早始于黄河重镇——洛口镇。当初这里...</p>
		<div class="see_more" flex="dir:top cross:center">查看全文</div>
     </div>
     <div class="down_nav"></div>
     <div class="loading_more">点击加载更多</div>
</template>
<script>
	export default {
		data(){
			return{

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
		background: url(../assets/images/star.jpg) no-repeat;
		background-size: 100% auto;
	}
</style>
