import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position_city:""
  },
  mutations: {
    setPosition_city(state,dat){
      state.position_city = data
    }
  },
  actions: {
  },
  modules: {
  }
})
