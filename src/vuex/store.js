import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	article_MESSAGE: {
		message: null
	},
	travel_MESSAGE: {
		message: null
	},
	eat_MESSAGE: {
		message: null
	},
	top_ENTER: true
}

const banner_open = {
	top_ENTER: true
}


export default new Vuex.Store({
	state
})