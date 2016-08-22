<template>
    <div class="phone_top" flex="dir:left box:mean">
		<div v-link="{path:'/a',activeClass:'choose_tag'}">关于我</div>
		<div v-link="{path:'/b',activeClass:'choose_tag'}">文章</div>
		<div v-link="{path:'/c',activeClass:'choose_tag'}">旅游日记</div>
		<div v-link="{path:'/d',activeClass:'choose_tag'}">吃~</div>	
    </div>
</template>
<script>
	export default {
		data(){
			return{
				msg:"zlf"
			}
		}
	}
</script>
<style scoped lang='scss'>
	.phone_top{
		text-align: center;
		background:rgba(34,8,7,0.7);
		box-shadow: 1px 1px 1px rgba(0,0,0,0.8)
	}
	.phone_top>div{
		color: white;
		font-size: 0.8rem;
		padding: 10px 0;
		border-right: 1px solid rgba(255,255,255,0.5)
	}
	.phone_top>div:last-child{
		border:none;
	}
	.choose_tag{
		background: rgb(39,72,98);
	}
</style>
