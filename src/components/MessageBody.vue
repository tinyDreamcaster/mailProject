<template>
    <div class="messageBody messageBodyWrapper">
        <div v-if="($store.state.messageView.name != null)" class="messageBody__message">
            <p class="messageBody__title"><strong>{{ $store.state.messageView.name }}</strong></p>
            <p class="messageBody__email">от: {{ $store.state.messageView.email }}</p>
            <div class="messageBody__separator"></div>
            <p class="messageBody__body">{{ $store.state.messageView.body }}</p>
        </div>
        <div v-else class="messageBody__noMessage">
            <h2>Выберите сообщение</h2>
        </div>
    </div>


</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.messageBody {
    display: flex;
    border: 1px solid black;
    width: 100%;
    height: 500px;
    margin-top: 1rem;
    margin-right: 1rem;
}



.messageBody__title {
    font-size: 1.5rem;
}

.messageBody__email {
    font-size: 1rem;
    color: grey;
}

.messageBody__separator {
    width: 100%;
    margin: 0.5rem 0;
    border: 1px solid grey;
}

.messageBody__body {
    padding: 1rem;
}

.messageBody__message {
    padding: 1rem;
}
.messageBody__noMessage {
    margin: 0;
    align-self: center;
    margin: 0 auto;
}
</style>