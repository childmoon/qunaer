import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

/* var state={
	city:"汕头"
}
var mutations={
	changeCity(state,city){
		state.city=city
	}
} */



const store = new Vuex.Store({
	/* state,
	mutations */
	state:state,
	mutations
})
		
export default store;
