import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position_city:"",
    listCategory:[],
    
  },
  mutations: {
    setPosition_city(state,data){
      state.position_city = data
    },
    s
   
  },
  actions: {
  },
  modules: {
  }
})
