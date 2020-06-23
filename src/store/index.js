import Vue from 'vue'
import Vuex from 'vuex'

import  actions from "@/store/actions"
import  getters from  "@/store/getters"
import  mutations from  '@/store/mutations'
import moduleA from "@/store/modules/moduleA"

Vue.use(Vuex);

const  state = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    moduleA
  }
})
