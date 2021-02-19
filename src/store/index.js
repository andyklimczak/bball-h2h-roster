import { createStore } from "vuex";

export default createStore({
  state: {
    players: [{name: "Lebron James"}]
  },
  mutations: {
    addPlayer(state, player) {
      state.players.push(player);
    }
  },
  actions: {},
  modules: {}
});
