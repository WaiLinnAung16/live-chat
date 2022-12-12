<template>
    <form>
        <textarea rows="3" placeholder="text message and hit enter to send" @keypress.enter="sendMsg"
            v-model="message"></textarea>
    </form>
</template>

<script>
import { ref } from 'vue';
import getUser from '@/composables/getUser';
import { timestamp } from '../../firebase/config';
import useCollection from '../composables/useCollection';
export default {
    setup() {
        let message = ref('');
        let { user } = getUser();
        let { error, addDoc } = useCollection("messages");
        let sendMsg = async () => {
            let chat = {
                message: message.value,
                name: user.value.displayName,
                created_at: timestamp()
            }
            await addDoc(chat)
            message.value = ''
        }

        return { message, sendMsg }
    }
}
</script>

<style >
form {
    height: 100%;
}

textarea {
    width: 100%;
    max-width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 0 0 20px 20px;
    font-family: inherit;
    outline: none;
    background-color: rgb(255, 255, 255);
}
</style>