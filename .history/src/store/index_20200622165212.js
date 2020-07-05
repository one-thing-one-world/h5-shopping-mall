import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position_city:"",
    listCategory:[],
    oneIndex:'',
    
  },
  mutations: {
    setPosition_city(state,data){
      state.position_city = data
    },
    setListCategory(state,data){
      state.listCategory = data
    }
    setOneIndex(state,data){
      state.oneIndex = data
    }
   
  },
  actions: {
  },
  modules: {
  }
})
