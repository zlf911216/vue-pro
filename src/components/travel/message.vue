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
		{{{message}}}
	</section>
</template>
<script>
	import advPicture from '../advertisement/advPicture' 
	export default {
		data(){
			return{
				userid:this.$route.params.userId,
				open:false,
				back_img:require('../../assets/images/back.png'),
				top_img:require('../../assets/images/top_1.jpg'),
				message:'<div class="art-content">'+
				'<p>大火日剧《朝五晚九》里的霸气帅和尚有木有男友力爆棚！！！高学历、高收入、高颜值，“三高”就算了，还是地位显赫的住持和尚。家住禅意十足的日式寺庙，留宿一晚的十元妹子有木有让你羡慕至极！！！</p>'+
				'<section class="mfw-pic"><img src="https://file108.mafengwo.net/s9/M00/9B/89/wKgBs1ds51yAH7mvAAFik7CK3pk99.jpeg?imageView2%2F2%2Fw%2F900%2Fq%2F90%2Fformat%2Fjpeg" width="100%"></section>'+
				'<p>来来来，科普一下，其实留宿日本寺庙由来已久，官方名词叫作宿坊，指佛教寺院中专为云游的和尚以及参拜的教众准备的住宿地方，在江户时期逐渐开始接纳一般民众。投宿宿坊的客人，都可以自由聆听寺院主持的早朝，享用别具特色的“精进料理”和体验坐禅。来到禅之国，不如来寺庙酒店体验一番禅修之旅。</p>'+
				'<section class="mfw-pic"><img src="https://file105.mafengwo.net/s9/M00/9B/C5/wKgBs1ds57yAcLCjAAFzyr3FaIw87.jpeg?imageView2%2F2%2Fw%2F900%2Fq%2F90%2Fformat%2Fjpeg" width="100%"></section>'+
				'<h3>奈良：竹林院群芳园 Chikurin-in Gunpoen Ryokan</h3>'+
				'<section class="mfw-pic"><img src="https://file102.mafengwo.net/s9/M00/9C/0D/wKgBs1ds6B6AU03mAAEGBG3VCDM74.jpeg?imageView2%2F2%2Fw%2F900%2Fq%2F90%2Fformat%2Fjpeg" width="100%"></section>'+
				'<p>竹林院群芳园诞生于日本茶道鼻祖千利休手中，由圣德太子组织建造，距今已1300多年历史。这里是日本大和三大名园之一，丰臣秀吉、昭和天皇及无数知名人士都曾莅临住宿。</p>'+
				'<section class="mfw-pic"><img src="https://file103.mafengwo.net/s9/M00/9C/5A/wKgBs1ds6H6APZ5AAAJCsy12j4k24.jpeg?imageView2%2F2%2Fw%2F900%2Fq%2F90%2Fformat%2Fjpeg" width="100%"></section>'+
				'<p>简单无造作的日式庭院，无刻意修剪或设计的树枝、桥梁、岩石、砂砾地、石灯笼，这里的一切都透露着日式庭院的简约之美，弥漫着能使人平心静气的禅意。来到日本著名修行地吉野山，不妨到竹林院群芳园来一场身体与心灵的禅修之旅。此外，这里是著名的赏樱场所，连一代枭雄丰臣秀吉也曾被这满园的樱花所迷住。</p>'+
				'</div>'
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
			},
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
		line-height: 1.8rem;
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
