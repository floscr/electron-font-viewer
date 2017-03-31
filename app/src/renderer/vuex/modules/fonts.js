import * as types from '../mutation-types'

const state = {
  all: [],
  grouped: [],
}

const mutations = {

  [types.LOAD_FONTS] (state, fonts) {
    state.all = fonts
  },

  [types.LOAD_GROUPED_FONTS] (state, fonts) {
    state.grouped = fonts
  },

}

export default {
  state,
  mutations
}
