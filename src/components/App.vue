<template>
    <banner v-if='open'></banner>
  	<enter v-if='open'></enter>
  	<router-view></router-view>
</template>
<script>
import banner from './public/banner'
import enter from './public/enter'
	export default {
		data(){
			return{
				open:true
			}
		},
		events: {
		    'open': function (open) {
			    this.open=open
		    }
	  	},
		components:{banner,enter}
	}
</script>
