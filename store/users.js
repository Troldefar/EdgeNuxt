export const state = () => ({
  users: []
});

export const mutations = {
  set (state, data) {
    state.users = data;
  }
}

export const getters = {
  all: state => state.users
}
  
export const actions = {
  all ({ commit }, search) {
    console.log("SEARCH PARAM: ", search);
    return new Promise((resolve, reject) => {
      this.$axios.get('/api/users', { params: { search } })
        .then((response) => {
          commit('set', response.data);
          resolve(response);
        })
        .catch((err) => reject(err));
    })
  }
}