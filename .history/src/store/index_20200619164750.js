import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position_city:""
  },
  mutations: {
    setposition_city(state,date){
      state.position_city = data
    }
  },
  actions: {
  },
  modules: {
  }
})
