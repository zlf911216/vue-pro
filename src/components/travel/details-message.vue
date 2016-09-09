<template>
	<div class="top_nav"></div>
	<header v-showban class="goback" flex="dir:left cross:center">
		<span class="back go" flex-box="0" flex="dir:left cross:center"  @click='goback'>
			<img :src='back_img'>
			<span class="back_word" flex-box="0">返回</span>
		</span>
		<span class="back place" flex-box="1">
			苏州游记
		</span>
	</header>
	<section class="top_img_box">
		<img class="top_img" :src='top_img'>
	</section>
	<section class="note-directory">
		<ul class="clearfix">
            <li class="time" flex="flex:left box:first">
            	<span flex="cross:center"><i class="i-time"></i>出发时间</span>
            	<span class="word-right">2012-11-12</span>
            </li>
            <li class="cost" flex="flex:left box:first">
            	<span flex="cross:center"><i class="i-cost"></i>人均费用</span>
            	<span class="word-right">1</span>
            </li>
            <li class="people" flex="flex:left box:first">
            	<span flex="cross:center"><i class="i-people"></i>人物</span>
            	<span class="word-right">{{userid}}</span>
            </li>
            <li class="day" flex="flex:left box:first">
            	<span flex="cross:center"><i class="i-day"></i>出行天数</span>
            	<span class="word-right">7</span>
            </li>
        </ul>
	</section>
	<section class="message_word">
		
	</section>
</template>
<script>
	import advPicture from '../advertisement/advPicture' 
	export default {
		data(){
			return{
				userid:this.$route.params.userId,
				back_img:require('../../assets/images/back.png'),
				top_img:require('../../assets/images/top_1.jpg'),
			}
		},
		components:{
			advPicture
		},
		methods:{
			goback:function(){
				history.back()
			},
		},
		directives:{
			showban:{
				bind:function(){
					this.vm.$store.state.top_ENTER=false
				},
				unbind:function(){
					this.vm.$store.state.top_ENTER=true
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
	.message_word{
		padding: 0 0.35rem;
	}
	.top_nav{
		width: 100%;
		height: 2.5rem
	}
	.top_img_box{
		width: 100%;
	}
	.top_img_box img{
		display: block;
		width: 100%;
	}
	.goback{
		position: fixed;
		width: 100%;
		top:0;
		left:0; 
		background: white;
		line-height: 2.2rem;
		font-size: 1rem;
		text-align: center;
		box-shadow: 2px 2px 2px rgba(162, 62, 13,0.55);
	}
	.go{
		border-right: 0.15rem solid rgba(162, 62, 13,0.25)
	}
	.back{
		color:#a23e0d;
		padding:0.35rem 0;
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
		background: url('../../assets/images/flower.jpg') no-repeat;
		background-size: 26% auto;
		background-position: 0 6%;
		font-size: 1.2rem;
		font-weight: bold;
	}
	.note-directory{
		margin: 0.5rem 0;
		background: white;
	}
	.note-directory ul{
		border: 1px solid #e5e5e5;
	    border-left: 0;
	    border-right: 0;
	    padding: 0.4rem 0.2rem;
	}
	.note-directory ul:after{
	    clear: both;
	    height: 0;
	    overflow: hidden;
	    display: block;
	    visibility: hidden;
	    content: ".";
	}
	.note-directory li{
	    width: 50%;
	    float: left;
	    font-size: 0.9rem;
	    color: #666;
	    line-height: 2rem;
	}
	.note-directory li span{
	    margin: 0 4%;
	}
	.note-directory li i{
        width: 1.6rem;
	    height: 1.6rem;
	    background: url(../../assets/images/note_sprites1.png) no-repeat 0 0;
	    background-size: 20rem 17.6rem;
	    display: inline-block;
	    margin-right: 0.2rem;
	}
	.note-directory li i.i-time{
   		background-position: 0 -2.56rem;
	}
	.note-directory li i.i-cost{
   		background-position: -1.6rem -2.56rem;
	}
	.note-directory li i.i-people{
   		background-position: -3.2rem -2.56rem;
	}
	.note-directory li i.i-day{
   		background-position: -4.8rem -2.56rem;
	}
	.word-right{
		font-size: 0.7rem;
		color: #333;
		font-weight: bold;
		text-align: right;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
</style>
