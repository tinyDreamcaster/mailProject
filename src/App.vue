<template>
  <div class="mailWrapper">

    <ul class="controlButtonsList">
      <li class="controlButtonsList__item">
        <button class="navButton"
          @click="messagesStore = $store.state.incomings; messagesType = 'incomings'">Входящие<br>
          {{ $store.state.incomings.length }}</button>
      </li>
      <li class="controlButtonsList__item">
        <button class="navButton" @click="messagesStore = $store.state.sents; messagesType = 'sents'">Исходящие<br>
          {{ $store.state.sents.length }}</button>
      </li>
      <li class="controlButtonsList__item">
        <button class="navButton" @click="messagesStore = $store.state.drafts; messagesType = 'drafts'">Черновик<br>
          {{ $store.state.drafts.length }}</button>
      </li>
      <div style="border: 1px solid grey; width: 100%;"></div>
      <li class="controlButtonsList__item ">
        <button class="sentButton" @click="sentAllMessages">Отправить все</button>
      </li>
      <li class="controlButtonsList__item ">
        <button class="sentButton" @click="dialogVisible = true">Создать сообщение</button>
      </li>
    </ul>

    <message-list :messages="messagesStore" :messagesType="messagesType" @newMessages="messagesUpdate" />

    <new-message-form v-model:show="dialogVisible" />
    <message-body />

  </div>

</template>

<script>
import MessageList from '@/components/MessageList.vue'
import NewMessageForm from '@/components/NewMessageForm.vue'
import MessageBody from '@/components/MessageBody.vue'
export default {
  components: { MessageList, NewMessageForm, MessageBody },
  data() {
    return {
      messagesStore: [],
      messagesType: '',
      dialogVisible: false,
    }
  },

  methods: {
    sentAllMessages() {
      if (this.$store.state.drafts.length != 0) {
        this.$store.commit('sentAll');
        if (this.messagesType == 'drafts') {
          this.messagesUpdate('drafts');
        }

      }
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
  },
  mounted() {
    this.$store.dispatch('fetchMessages');
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

.controlButtonsList {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: min-content;

}

.navButton {
  padding: 0.5em;
  width: 100%;
}

.sentButton {
  padding: 0.5em;
}

.controlButtonsList__item {
  text-align: center;
  max-width: 10rem;
  padding: 1rem;

}
</style>
