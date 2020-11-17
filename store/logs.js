export const state = () => ({
  logs: []    
});

export const mutations = {
  add (state, list) {
    state.logs = list;
  },
  pop (state, list) {
    state.logs = [];
  }
}

export const actions = {
  all ({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios.get('/api/logs')
        .then(response => {
          console.log(response);
          commit('add', response.data);
        })
        .catch(error => reject(error));
    })
  }
}