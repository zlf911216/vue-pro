<template>
	<div class="advertisement_box" v-init="msg">112{{msg}}</div>
</template>
<script>
	export default {
		data(){
			return{
				msg:false
			}
		},
		directives:{
			init:{
				bind:function(){
					// this.el.innerHTML='name2'
					var _this=this;
					$.ajax({
						url: 'http://wzh.h5test.uyuan.info/v20/user/tip.html',
						type: 'post',
						dataType: 'jsonp',
						jsonp: "Jsoncallback",
						data: {position:"H5-B1"},
						success:function(data){
							_this.vm.msg=true
						}
					})
				},
				update:function(){
					console.log(this.vm.msg)
				}
			}
		}
	}
</script>
<style scoped lang='scss'>

</style>
