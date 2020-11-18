import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toDos: []
  },
  mutations: {
    ADD_TODO(state, toDoTitle) {
      // Add the toDo to the state and set it to not done
      let toDo = {
        title: toDoTitle,
        status: false,
      };
      state.toDos.push(toDo);
    },
    REMOVE_TODO(state, toDoTitle) {
      // Filter the toDo from the state
      state.toDos = state.toDos.filter( toDo => toDo.title !== toDoTitle);
    },
    TOGGLE_TODO(state, toDoTitle) {
      // Find a toDo's location in the array and then toggle its status
      let toDoIndex = state.toDos.findIndex((toDo => toDo.title == toDoTitle));
      state.toDos[toDoIndex].status = !state.toDos[toDoIndex].status;
    }
  },
  actions: {
    addToDo({ commit }, payload) {
      if(payload) {
        // Remove the todo if it already exists so we don't get duplicates
        commit("REMOVE_TODO", payload);
        commit("ADD_TODO", payload);
      }
    },
    removeToDo({ commit }, payload) {
      commit("REMOVE_TODO", payload);
    },
    toggleToDo({ commit }, payload) {
      commit("TOGGLE_TODO", payload);
    },
  }
});
