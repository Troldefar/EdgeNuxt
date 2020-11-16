export const state = () => ({
    message: ''
  });

  export const getters = {
    msg: state => state.message
  }
  
  export const mutations = {
    add (state, msg) {
      state.message = msg;
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