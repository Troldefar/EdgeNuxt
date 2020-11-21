export const state = () => ({
  all: []
})

export const getters = {
  all: state => state.all
}

export const mutations = {
  SET (state, teams) {
    state.teams = teams;
  }
}

export const actions = {
  all ({ commit }, search) {
    return new Promise((resolve, reject) => {
      this.$axios.get('/api/teams', { params: { search } })
        .then(response => {
          commit('SET', response.data);
          resolve(response.data);
        })
        .catch(error => reject(error));
    });
  },
  store ({ commit }, team) {
    return new Promise((resolve, reject) => {
      this.$axios.post('/api/teams', { teamname: team.teamname, description: team.description })
        .then(response => {
          console.log(response);
          resolve(response.data);
        })
        .catch(error => reject(error));
    })
  }
}