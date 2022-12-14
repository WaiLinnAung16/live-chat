<template>
    <div class="chat-window">
        <div class="messages" ref="msgbox">
            <div class="single" v-for="message in formattedMessages" :key="message.id">
                <span class="created-at">{{ message.created_at }}</span>
                <span class="name">{{ message.name }}</span>
                <span class="message">{{ message.message }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref, onUpdated } from 'vue';
import { db } from '../../firebase/config';
import { formatDistanceToNow } from 'date-fns';

export default {
    setup() {
        let messages = ref([]);
        let msgbox = ref(null);
        //auto scrolling features
        onUpdated(() => {
            msgbox.value.scrollTop = msgbox.value.scrollHeight
        })
        let formattedMessages = computed(() => {
            return messages.value.map((msg) => {
                // console.log(msg);
                let formattedDate = formatDistanceToNow(msg.created_at.toDate());
                return { ...msg, created_at: formattedDate } //[{name,time,msg}]
            })
        })
        db.collection("messages").orderBy("created_at").onSnapshot((snap) => {
            let result = [];
            snap.docs.forEach((doc) => {
                let document = { ...doc.data(), id: doc.id };
                // if (doc.data().created_at) {
                //     result.push(document);
                // }
                doc.data().created_at && result.push(document); // true && run this
            })
            messages.value = result
        })
        return { messages, formattedMessages, msgbox }
    }
}
</script>

<style >
.chat-window {
    background: #fefae0;
    padding: 30px 20px;
}

.single {
    margin: 18px 0;
}

.created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
}

.name {
    font-weight: bold;
    margin-right: 6px;
}

.messages {
    max-height: 400px;
    overflow: auto;
}
</style>