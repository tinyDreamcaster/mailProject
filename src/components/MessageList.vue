<template>
    <div class="messagesWrapper">
        <ul>
            <li class="mailItem" v-for="(message, messageIndex) in messages" :key="message.id">
                <p><Strong>{{ messageIndex + 1  }}) {{ message.title }}</Strong></p>
                
                <button @click="$store.dispatch('deleteMessage', { message, messagesType }); 
                this.$emit('newMessages', messagesType)
                ">
                    Удалить
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        messages: {
            type: Array,
            required: true
        },
        messagesType: {
            type: String,
            required: true
        }
    },
    data() {
        return {
           
        };
    },
    computed: {

    },
}
</script>

<style lang="scss" scoped>
.mailItem {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    list-style: none;
}

.messagesWrapper {
    border: 1px solid black;
    width: 1000px;
    height: 500px;
    overflow: scroll;


}
</style>