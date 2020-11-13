import api from '../../api/imgur';

const state = {
  token: null,
};

const gutters = {
  isLoggedIn: (state) => !!state.token,
};

const actions = {
  login: () => {
    api.login();
  },
  logout: ({ commit }) => {
    commit('setToken', null);
  },
};

const mutations = {
  seToken: (state, token) => {
    state.token = token;
  },
};

export default {
  state,
  gutters,
  actions,
  mutations,
};
