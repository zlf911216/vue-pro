<template>
    <div class="loading"> 	
    </div>
</template>
<script>
	export default {
		ready: function () {
			$('.loading').on('click',function(){
				console.log("11")
			})
		}
	}
</script>
<style src="../assets/css/b.scss" scoped lang='scss'></style>
