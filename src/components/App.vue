<template>
    <banner v-show='open'></banner>
  	<enter v-show='open'></enter>
  	<router-view></router-view>
</template>
<script>
import store from '../vuex/store'
import banner from './public/banner'
import enter from './public/enter'
	export default {
	  	store: store,
		components:{banner,enter},
		vuex:{
			getters:{
				open:state=>state.top_ENTER
			}
		}
	}
</script>
