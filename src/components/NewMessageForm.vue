<template>
    <div class="newMessageWrapper">
        <form @submit.prevent>
            <input :value="message.title" @input="message.title = $event.target.value" type="text"
                placeholder="Название">
            <textarea :value="message.body" @input="message.body = $event.target.value" class="inputBody" type="text"
                placeholder="Текст"></textarea>
            <button @click="createMessage">Сохранить</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: {
                title: "",
                body: "",
            },
        };
    },
    methods: {
        createMessage() {
            this.$store.dispatch('saveDraft', this.message);
            this.message.title = '';
            this.message.body = '';

        },
    },
}
</script>

<style lang="scss" scoped>
.inputBody {
    width: 100px;
    height: 100px;
    resize: none;
}
</style>