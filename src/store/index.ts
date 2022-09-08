import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: []
  },
  mutations: {
    setBooks(state, books) {
      state.books = books
    }
  },
  actions: {
    async fetchBooks({ commit }){
      try {
        const response = await axios.get('https://ibook-api.herokuapp.com/books');
        commit('setBooks', response.data);
      } catch (error) {
        alert(error)
        console.error(error)
      }
    },
  },
  getters: {
    books(state) {
      return state.books
    }
  },
  modules: {
  }
})
