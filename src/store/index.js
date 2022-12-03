import axios from 'axios';
import { createStore } from 'vuex'



export default createStore({
  state: {
    incomings: [],
    sents: [
      { postId: 1, id: 1, name: 'sentsЗаголовок1', email: "me@example.exmpl", body: 'Тестовый текст в сообщении1' },
      { postId: 1, id: 2, name: 'sentsЗаголовок2', email: "me@example.exmpl", body: 'Тестовый текст в сообщении2' },
      { postId: 1, id: 3, name: 'sentsЗаголовок3', email: "me@example.exmpl", body: 'Тестовый текст в сообщении3' },
      { postId: 1, id: 4, name: 'sentsЗаголовок4', email: "me@example.exmpl", body: 'Тестовый текст в сообщении4' },
      { postId: 1, id: 5, name: 'sentsЗаголовок5', email: "me@example.exmpl", body: 'Тестовый текст в сообщении5' },
      { postId: 1, id: 6, name: 'sentsЗаголовок6', email: "me@example.exmpl", body: 'Тестовый текст в сообщении6' },
      { postId: 1, id: 7, name: 'sentsЗаголовок7', email: "me@example.exmpl", body: 'Тестовый текст в сообщении7' },
      { postId: 1, id: 8, name: 'sentsЗаголовок8', email: "me@example.exmpl", body: 'Тестовый текст в сообщении8' },
    ],
    drafts: [],
    messageView: {},
  },
  getters: {
  },
  mutations: {

    viewMessage(state, payload) {
      state.messageView = payload.message;
    },


    setMessages(state, incomings) {
      state.incomings = incomings;
    },

    addDraft: (state, payload) => {

      let newDraft = {
        id: Date.now(),
        name: payload.name,
        email: 'me@example.exmpl',
        body: payload.body,
      }

      state.drafts.push(newDraft);
    },
    removeMessage: (state, payload) => {

      switch (payload.messagesType) {
        case 'incomings':
          state.incomings = state.incomings.filter(item => item.id !== payload.message.id);
          break;
        case 'sents':
          state.sents = state.sents.filter(item => item.id !== payload.message.id);
          break;
        case 'drafts':
          state.drafts = state.drafts.filter(item => item.id !== payload.message.id);
          break;

        default:
          break;
      }

    },
    sentAll: (state) => {
      state.drafts.forEach(element => {
        element.id = Date.now();
        state.sents.push(element);
      });
      state.drafts = [];

    }

  },
  actions: {
    saveDraft: (context, payload) => {
      context.commit('addDraft', payload);

    },

    deleteMessage: (context, payload) => {
      context.commit('removeMessage', payload);
    },

    readMessage: (context, payload) => {
      context.commit('viewMessage', payload);
    },

    async fetchMessages(context) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=30')
        console.log(response);
        context.commit('setMessages', response.data);
      } catch (e) {
        console.log(e);
      }

    }


  },
  modules: {
  }
})
