export const state = () => ({
  user: null,
  isLoggedIn: false
});

export const mutations = {
  login (state, loggedUser) {
    state.user = loggedUser;
    localStorage.setItem('api_token', loggedUser.api_token);
    state.isLoggedIn = true;
  },
  false (state) {
    state.isLoggedIn = false;
  },
  logout (state) {
    state.user = null;
    $nuxt.$store.commit('user/false');
  }
}

export const getters = {
  user: state => state.user,
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
        .catch(err => {
          reject(err.response.data.message);
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