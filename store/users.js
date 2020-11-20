export const state = () => ({
  users: [],
  invites: []
});

export const mutations = {
  SET (state, data) {
    state.users = data;
  },
  SET_INVITES (state, invites) {
    state.invites = invites;
  }
}

export const getters = {
  all: state => state.users,
  invites: state => state.invites
}
  
export const actions = {
  all ({ commit }, search) {
    return new Promise((resolve, reject) => {
      this.$axios.get('/api/users', { params: { search } })
        .then((response) => {
          commit('SET', response.data);
          resolve(response);
        })
        .catch((err) => reject(err));
    })
  },
  invite ({ commit }, invite) {
    return new Promise((resolve, reject) => {
      this.$axios.post('/api/invite', { friend_id: invite.friend_id, user_id: invite.user_id})
        .then(response => {
          console.log(response);
          resolve(response);
        })
        .catch((err) => reject(err));
    })
  },
  checkFriendRequests ({ commit }, id) {
    return new Promise((resolve, reject) => {
      this.$axios.get(`/api/invites/${id}`)
        .then(response => {
          console.log(response);
          commit('SET_INVITES', response.data);
          resolve(response);
        })
        .catch(error => reject(error));
    })
  }
}