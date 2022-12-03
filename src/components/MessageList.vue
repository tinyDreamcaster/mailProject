<template>
    <div class="messagesWrapper">
        <ul>
            <li class="mailItem" v-for="(message, messageIndex) in messages" :key="message.id">
                <div class="mailItem__wrapper" @click="$store.dispatch('readMessage', { message });">
                    <p class="mailItem__messageTitle">
                        <Strong>{{ messageIndex + 1 }}) {{ message.name }}</Strong>
                    </p>
                    <p class="mailItem__messageEmail" @click="">от: {{ message.email }}</p>
                </div>
                <button style="padding: 0.1rem; max-height: min-content;" @click="$store.dispatch('deleteMessage', { message, messagesType });
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
    width: 100%;
    height: 500px;
    overflow: scroll;
    overflow-x: hidden;
    margin: 1rem 0;

}

.mailItem__wrapper:hover {
    cursor: pointer;
    opacity: 0.7;
}

.mailItem__messageEmail {
    padding-left: 1.5rem;
    opacity: 0.5;
}
</style>