export const state = () => ({
  user: null,
  isLoggedIn: false 
});

export const mutations = {
  login (state, user) {
    state.user = user;
    state.isLoggedIn = true;
  },
  logout (state) {
    state.user = null;
    state.isLoggedIn = false;
  }
}

export const getters = {
  logged: state => state.isLoggedIn
}

export const actions = {
  login ({ commit }, fd) {
    return new Promise((resolve, reject) => {
      this.$axios.post('/api/login', fd)
        .then(response => {
          commit('login', response.data);
          resolve(response);
        })
        .catch(error => {
          reject(error.response.data.message);
        });
    })
  },
  register ({ commit }, fd) {
    return new Promise((resolve, reject) => {
      this.$axios.post('/api/register', fd)
        .then(response => {
          commit('login', response.data);
          resolve(response);
        })
        .catch(error => {
          reject(error.response.data.message);
        });
    })
  },
  logout ({ commit }, fd) {
    return new Promise((resolve, reject) => {
      this.$axios.post('/api/logout', fd)
        .then(response => {
          resolve(response);
          commit('logout');
        })
        .catch(error => reject(error));
    })
  }
}