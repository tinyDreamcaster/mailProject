import { createStore } from 'vuex'



export default createStore({
  state: {
    incomings: [
      { id: 1, title: 'incomingЗаголовок1', body: 'Тестовый текст в сообщении1' },
      { id: 2, title: 'incomingЗаголовок2', body: 'Тестовый текст в сообщении2' },
      { id: 3, title: 'incomingЗаголовок3', body: 'Тестовый текст в сообщении3' },
      { id: 4, title: 'incomingЗаголовок4', body: 'Тестовый текст в сообщении4' },
      { id: 5, title: 'incomingЗаголовок5', body: 'Тестовый текст в сообщении5' },
    ],
    sents: [
      { id: 1, title: 'sentsЗаголовок1', body: 'Тестовый текст в сообщении1' },
      { id: 2, title: 'sentsЗаголовок2', body: 'Тестовый текст в сообщении2' },
      { id: 3, title: 'sentsЗаголовок3', body: 'Тестовый текст в сообщении3' },
      { id: 4, title: 'sentsЗаголовок4', body: 'Тестовый текст в сообщении4' },
      { id: 5, title: 'sentsЗаголовок5', body: 'Тестовый текст в сообщении5' },
      { id: 6, title: 'sentsЗаголовок6', body: 'Тестовый текст в сообщении6' },
      { id: 7, title: 'sentsЗаголовок7', body: 'Тестовый текст в сообщении7' },
      { id: 8, title: 'sentsЗаголовок8', body: 'Тестовый текст в сообщении8' },
    ],
    drafts: [

    ],
  },
  getters: {
  },
  mutations: {
    addDraft: (state, payload) => {

      let newDraft = {
        id: Date.now(),
        title: payload.title,
        body: payload.body,
      }

      state.drafts.push(newDraft);
    },
    removeMessage: (state, payload) => {

      let deleteMessage = () =>{
        ;
      }
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

    }
  },
  modules: {
  }
})
