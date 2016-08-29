
<!-- 	<adv my-style='{"width":"100%"}' my-loop='false' my-random='false' my-position="H5-B1" my-identifying='false' my-word="你好"></adv> -->

<template>
	<div class="advertisement_box" v-init="run" :style="style">
		<div class="advertisement_message" flex='dir:left box:mean'>		
			<img v-for="item in message" track-by="$index" class="adv_img" :src='item.picUrl' @touchstart="tj_and_link(item.activeid,item.linkUrl)">
		</div>
		<div v-show="!myIdentifying" class="advertisement_identifying">{{identifying_word}}</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				run:false,
				url:null,//广告获取地址	
				message:null,//广告内容
				province:null,//用户地区
				style:{width:'100%'},	
				userId:'474503697',//用户ID
				identifying_word:"广告",//右下角标示文字
				voice_url: "/images/blue_voice.png",
				picturn:false,
				time:null,
				time2:null
			}
		},
		props:['myStyle','myLoop','myRandom','myPosition','myIdentifying','myWord'],
		methods:{
			tj_and_link:function(activeid,url){
				var _this=this
				tj({
					'tjtype': 'adStatistics',
					'tjuid': _this.userId,
					'tjtag': 'ggclick',
					'eventid':activeid,
					"positionid": _this.myPosition,
					"provinceid": _this.province,
					"userid": _this.userId,
					"adtype": "Click"
				});
				setTimeout(function(){
					location.href=url	
				},300)
			}
		},
		directives:{
			init:{
				bind:function(){
					if(this.vm.myWord){this.vm.identifying_word=this.vm.myWord}
					this.vm.style=$.extend(this.vm.style,JSON.parse(this.vm.myStyle))
					// this.vm.$http.jsonp('http://n.youyuan.com/v20/user/tip.html',{
					// 	params :{
					// 		'position':this.vm.myPosition,
					// 		'userId':this.vm.userId
					// 	}
					// },'Jsoncallback').then(function(response){
					// // 响应成功回调
					// }, function(response){
					// // 响应错误回调
					// });
					var _this=this;
					$.ajax({
						url: 'http://n.youyuan.com/v20/user/tip.html',
						type: 'post',
						dataType: 'jsonp',
						jsonp: "Jsoncallback",
						data: {position:_this.vm.myPosition,userId:_this.vm.userId},
						success:function(data){
							_this.vm.province=data.province
							_this.vm.message=data.advert.concat(data.advert)
							_this.vm.run=true
						}
					})
				},
				update:function(){
					if(this.vm.run){
						var 
						_this=this,
						num=0,
						width=_this.el.offsetWidth,
						max=_this.vm.message.length
						if(!_this.vm.myRandom){num=Math.floor(Math.random() * _this.vm.message.length)}	
						_this.el.children[0].style.width=width*max+"px"

						tj({
							'tjtype': 'adStatistics',
							'tjuid': _this.vm.userId,
							'tjtag': 'ggOnLoad',
							'eventid': _this.vm.message[num].activeid,
							"positionid": _this.vm.myPosition,
							"provinceid": _this.vm.province,
							"userid": _this.vm.userId,
							"adtype": "OnLoad"
						});
						_this.el.children[0].style.webkitTransform = "translateX(" + num * (-width) + "px)"
						_this.el.children[0].style.webkitTransition = "-webkit-transform 0s "
						if(!_this.vm.myLoop){							
						 	_this.vm.time=setInterval(function() {
						 		num += 1;
								tj({
									'tjtype': 'adStatistics',
									'tjuid': _this.vm.userId,
									'tjtag': 'ggOnLoad',
									'eventid': _this.vm.message[num].activeid,
									"positionid": _this.vm.myPosition,
									"provinceid": _this.vm.province,
									"userid": _this.vm.userId,
									"adtype": "OnLoad"
								});
								_this.el.children[0].style.webkitTransform = "translateX(" + num * (-width) + "px)"
								_this.el.children[0].style.webkitTransition = "-webkit-transform 0.5s linear 0s"
								if (num == max-1) {
									num = max/2-1
									_this.vm.time2=setTimeout(function() {
										_this.el.children[0].style.webkitTransform = "translateX(" + num  * (-width) + "px)"
										_this.el.children[0].style.webkitTransition = "-webkit-transform 0s"
									}, 600)
								}
							}, 5000);
						}
					}
				},
				unbind:function(){
					clearInterval(this.vm.time)
					clearTimeout(this.vm.time2)
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
	.advertisement_box{
		position: relative;
		overflow: hidden;
		margin:auto;
	}
	.adv_img{
		display: block;
		width: 100%;
		height: auto;
	}
	.advertisement_identifying{
	    padding: 2px;
	    position: absolute;
	    right: 0;
	    bottom: 0;
	    font-size: 12px;
	    background: rgba(0,0,0,0.18);
	    transform: scale(0.7);
	    color: white;
	}
</style>
