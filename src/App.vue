<template>
  <div class="mailWrapper">

    <ul class="navigateList">
      <li class="navigateList__item">
        <button @click="messagesStore = $store.state.incomings; messagesType = 'incomings'">Входящие</button>
      </li>
      <li class="navigateList__item">
        <button @click="messagesStore = $store.state.sents; messagesType = 'sents'">Исходящие</button>
      </li>
      <li class="navigateList__item">
        <button @click="messagesStore = $store.state.drafts; messagesType = 'drafts'">Черновик</button>
      </li>
    </ul>

    <message-list :messages="messagesStore" 
    :messagesType="messagesType" 
    @newMessages="messagesUpdate" />

    <new-message-form />

  </div>
  <button @click="sentAllMessages();
          messagesUpdate('drafts')" >Отправить все</button>
</template>

<script>
import MessageList from '@/components/MessageList.vue'
import NewMessageForm from '@/components/NewMessageForm.vue'
export default {
  components: { MessageList, NewMessageForm },
  data() {
    return {
      messagesStore: [],
      messagesType: ''
    }
  },

  methods: {
    sentAllMessages() {
      this.$store.commit('sentAll');
    },
    messagesUpdate(updateType) {
      switch (updateType) {
        case 'incomings':
        this.messagesStore = this.$store.state.incomings;
          break;
        case 'sents':
        this.messagesStore = this.$store.state.sents;
          break;
        case 'drafts':
        this.messagesStore = this.$store.state.drafts;
          break;

        default:
          break;
      }
    }
  }
}


</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.mailWrapper {
  display: flex;
}

.navigateList {
  list-style: none;
  display: flex;
  flex-direction: column;

}

.navigateList__item {
  border: 1px solid black;
  text-align: center;
  max-width: 10rem;
  padding: 1rem;

}
</style>
