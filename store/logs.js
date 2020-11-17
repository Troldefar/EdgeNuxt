export const state = () => ({
  logs: []    
});

export const mutations = {
  add (state, list) {
    state.logs = list;
    console.log(state.logs);
  },
  pop (state, list) {
    state.logs = [];
  }
}

export const getters = {
  logs: state => state.logs
}

export const actions = {
  all ({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios.get('/api/logs')
        .then(response => {
          commit('add', response.data);
        })
        .catch(error => reject(error));
    })
  }
}