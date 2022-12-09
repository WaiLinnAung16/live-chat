<template>
    <form>
        <textarea placeholder="text message and hit enter to send" @keypress.enter="sendMsg"
            v-model="message"></textarea>
    </form>
</template>

<script>
import { ref } from 'vue';
import getUser from '@/composables/getUser';
import { timestamp } from '../../firebase/config';
export default {
    setup() {
        let message = ref('');
        let { user } = getUser();
        let sendMsg = () => {
            let chat = {
                message: message.value,
                name: user.value.displayName,
                created_at: timestamp()
            }
            console.log(chat);
            message.value = ''
        }

        return { message, sendMsg }
    }
}
</script>

<style >
form {
    margin: 10px;
}

textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 0 0 20px 20px;
    font-family: inherit;
    outline: none;
    background-color: rgb(255, 255, 255);
}
</style>