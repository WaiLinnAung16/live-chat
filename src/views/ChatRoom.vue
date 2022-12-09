<template>
    <div class="container">
        <NavBar></NavBar>
        <ChatForm></ChatForm>
    </div>
</template>

<script>
import ChatForm from '../components/ChatForm'
import NavBar from '../components/NavBar';
import getUser from '@/composables/getUser';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
    components: {
        ChatForm, NavBar
    },
    setup() {
        let { user } = getUser();
        let router = useRouter();
        watch(user, () => {
            if (!user.value) {
                // redirect welcome
                router.push("/")
            }
        })
    }
}
</script>

<style scoped>

</style>