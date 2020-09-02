import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    countAdd(state, n) {
      state.count += n
    },
    countRed(state) {
      if (state.count > 0) {
        state.count --
      }
    }
  },
  getters: {
    count: (state) => {
      return state.count += 20
    }
  },
  actions: {
    addAction(context) {
      return context.commit('countAdd',2)
    },
    reduceAction({commit}) {
      return commit('countRed')
    }
  },
  modules: {
  }
})
