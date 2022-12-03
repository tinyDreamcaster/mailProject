<template>
    <div class="dialog" v-if="show">
        <div class="closeWrapper" @click="hideDialog"></div>
        <form @submit.prevent class="newMessageForm">
            <input class="newMessageForm__title" :value="message.name" @input="message.name = $event.target.value"
                type="text" placeholder="Название" required>
            <textarea class="newMessageForm__body" :value="message.body" @input="message.body = $event.target.value"
                type="text" placeholder="Текст"></textarea>
            <button class="newMessageForm__button" @click="createMessage">Сохранить в черновик</button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            message: {
                name: "",
                body: "",
            },
        };
    },
    methods: {
        createMessage() {
            if (this.message.name != '') {
                this.$store.dispatch('saveDraft', this.message);
                this.message.name = '';
                this.message.body = '';
                this.hideDialog();
            }

        },
        hideDialog() {
            this.message.name = '';
            this.message.body = '';
            this.$emit('update:show', false)
        }
    },
}
</script>

<style lang="scss" scoped>


.dialog {
    position: absolute; 
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.closeWrapper {
    z-index: 10;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.7;
}

.newMessageForm {
    z-index: 10;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    height: 50%;
    background-color: white;
    border-radius: 10px;
    padding: 1rem;

}

.newMessageForm__title {
    padding: 0.5rem;
}

.newMessageForm__body {
    width: 100%;
    height: 80%;
    padding: 1rem;
    resize: none;
}

.newMessageForm__button {
    padding: 0.3rem;
}
</style>