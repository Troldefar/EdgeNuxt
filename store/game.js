export const state = () => ({
  games: []
});

export const getters = {
  games: state => state.games
}

export const mutations = {
  SET (state, games) {
    state.games = games;
  }
}

export const actions = {
  all ({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios.get('/api/games')
        .then(response => {
          commit('SET', response.data);
          resolve(response);
        })
        .catch(error => reject(error));
    });
  }
}