<template>
    <div class="swiper-container">
	  	<div class="swiper-wrapper">
      		<div v-for="item in msg" class="swiper-slide"><img :src='item.url'></div>
	  	</div>
	  	<div class="swiper-pagination"></div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				msg:[
					{url:require('../assets/images/1.jpg')},
					{url:require('../assets/images/3.jpg')},
					{url:require('../assets/images/5.jpg')},
					{url:require('../assets/images/6.jpg')}
				]
			}
		},
		ready:function(){
		 	var mySwiper = new Swiper('.swiper-container', {
		 		pagination:'.swiper-pagination',
				autoplay: 4000,
				autoplayDisableOnInteraction : false,
				speed:600,
				loop:true,
				effect:'fade',
			})
		}
	}
</script>
<style scoped lang='scss'>
	img{
		display: block;
		width: 100%;
		height: auto
	}
</style>
