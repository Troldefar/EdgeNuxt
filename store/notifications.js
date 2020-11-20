export const state = () => ({
    message: '',
    notifications: []
  });

  export const getters = {
    msg: state => state.message,
    all: state => state.notifications
  }
  
  export const mutations = {
    add (state, msg) {
      state.message = msg;
      setTimeout(() => {
        $nuxt.$store.commit('notifications/pop');
      }, 2000);
    },
    pop (state) {
      state.message = '';
    }
  }
  
  export const actions = {
    set ({ commit }, message) {
        commit('add', message);
    }
  }