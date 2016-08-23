<template>
	<div class="advertisement_box" v-init="run">
		<div class="advertisement_message" flex='dir:left box:mean'>		
			<img v-for="item in message" class="adv_img" :src='item.picUrl' @touchstart="tj_and_link(item.activeid,item.linkUrl)">
			<img v-for="item in message" class="adv_img" :src='item.picUrl' @touchstart="tj_and_link(item.activeid,item.linkUrl)">
		</div>

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
				style:null,	
				userId:'474503697',//用户ID
				width:'100%',//广告宽度
				position:'H5-B1',//广告版位
				loop:true,//是否轮播
				random:false,//是否随机
				simple:false,//是否单张显示
				identifying:true,//右下角是否显示标示
				identifying_word:"广告",//右下角标示文字
				voice_url: "/images/blue_voice.png",
				time:null,
			}
		},
		methods:{
			tj_and_link:function(activeid,url){
				var _this=this
				tj({
					'tjtype': 'adStatistics',
					'tjuid': _this.userId,
					'tjtag': 'ggclick',
					'eventid':activeid,
					"positionid": _this.position,
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
					var _this=this;
					$.ajax({
						url: 'http://n.youyuan.com/v20/user/tip.html',
						type: 'post',
						dataType: 'jsonp',
						jsonp: "Jsoncallback",
						data: {position:_this.vm.position,userId:_this.vm.userId},
						success:function(data){
							_this.vm.province=data.province
							_this.vm.message=data.advert
							_this.vm.run=true
						}
					})
				},
				update:function(){
					if(this.vm.run){
						var _this=this
						var num = 1;
						var tj_num=1;
						var width=$(_this.el).width()
						_this.el.style.cssText=_this.vm.style
						var max=_this.vm.message.length*2
						$(_this.el).width(_this.vm.width)
						$(_this.el).children('div').width(width*max)
						tj({
							'tjtype': 'adStatistics',
							'tjuid': _this.vm.userId,
							'tjtag': 'ggOnLoad',
							'eventid': _this.vm.message[0].activeid,
							"positionid": _this.vm.position,
							"provinceid": _this.vm.province,
							"userid": _this.vm.userId,
							"adtype": "OnLoad"
						});
						if(_this.vm.loop){
							_this.vm.$on('run', function () {
							 	_this.vm.time=setInterval(function() {
									tj({
										'tjtype': 'adStatistics',
										'tjuid': _this.vm.userId,
										'tjtag': 'ggOnLoad',
										'eventid': _this.vm.message[tj_num].activeid,
										"positionid": _this.vm.position,
										"provinceid": _this.vm.province,
										"userid": _this.vm.userId,
										"adtype": "OnLoad"
									});
									_this.el.children[0].style.transform = "translateX(" + num * (-width) + "px)"
									_this.el.children[0].style.transition = "-webkit-transform 0.5s linear 0s"
									num += 1;
									tj_num+=1;
									if(tj_num==max/2){
										tj_num=0
									}
									if (num == max) {
										num = max/2
										setTimeout(function() {
											_this.el.children[0].style.transform = "translateX(" + (num - 1) * (-width) + "px)"
											_this.el.children[0].style.transition = "-webkit-transform 0s"
										}, 600)
									}
								}, 5000);
							})
							_this.vm.$emit('run', 'go')
						}
					}
				},
				unbind:function(){
					clearInterval(this.vm.time)
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
	.advertisement_box{
		overflow: hidden;
	}
	.adv_img{
		display: block;
		width: 100%;
		height: auto;
	}
</style>
