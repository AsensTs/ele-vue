const state = {
  city: '珠海'
}

const mutations = {
  'SET_INDEX' (state, city) {
    state.city = city
  }
}

const actions = {
  setIndex: ({commit}, city) => {
    commit('SET_INDEX', city)
  }
}

const getters = {
  getCity: state => {
    return state.city
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
