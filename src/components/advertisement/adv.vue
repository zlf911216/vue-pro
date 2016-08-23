<template>
	<div class="advertisement_box" v-init>
		
	</div>
</template>
<script>
	export default {
		data(){
			return{
				msg:null
			}
		},
		directives:{
			init:function(){
				// console.log(this.vm)
				// console.log(this.el)
				// this.el.innerHTML='name'
				// var _this=this;
				// $.ajax({
				// 	url: 'http://wzh.h5test.uyuan.info/v20/user/tip.html',
				// 	type: 'post',
				// 	dataType: 'jsonp',
				// 	jsonp: "Jsoncallback",
				// 	data: {position:"H5-B1"},
				// 	success:function(data){
				// 		// _this.vm.msg=data.advert
				// 	}
				// })
			}
		}
	}
</script>
<style scoped lang='scss'>

</style>
