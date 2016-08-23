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
				message:null,
				width:'100%',
				position:"H5-B1",
				userId:"474503697",
				province:null
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
				location.href=url
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
						var num = 1;
						var width=$(this.el).width()
						var max=this.vm.message.length*2
						$(this.el).width(this.vm.width)
						$(this.el).children('div').width(width*max)
						var _this=this
						setInterval(function() {
							_this.el.children[0].style.transform = "translateX(" + num * (-width) + "px)";
							_this.el.children[0].style.transition = "-webkit-transform 0.5s linear 0s";
							num += 1;
							console.log(num)
							console.log(max)
							if (num == max) {
								num = max/2;
								setTimeout(function() {
									_this.el.children[0].style.transform = "translateX(" + (num - 1) * (-width) + "px)";
									_this.el.children[0].style.transition = "-webkit-transform 0s";
								}, 600)
							}
						}, 5000);
					}
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
