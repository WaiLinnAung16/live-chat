<template>
    <div class="welcome container">
        <div v-if="showLoginForm">
            <Login @chatRoom="chatRoom"></Login>
            <p>Not a Member? <span @click="showLoginForm = !showLoginForm">Create Account?</span></p>
        </div>
        <div v-else>
            <Signup @chatRoom="chatRoom"></Signup>
            <p>Already Member? <span @click="showLoginForm = !showLoginForm">Login Account?</span></p>

        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import Login from '../components/Login'
import Signup from '../components/Signup.vue'
import { useRouter } from 'vue-router';
export default {
    components: {
        Login, Signup
    },
    setup() {
        let showLoginForm = ref(true);
        let router = useRouter();
        let chatRoom = () => {
            router.push({ name: "Chatroom" })
        }
        return { showLoginForm, chatRoom }
    }
}
</script>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}

/* form styles */
.welcome form {
    width: 300px;
    margin: 20px auto;
}

/* .welcome label {
    display: block;
    margin: 20px 0 10px;
} */

.welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #000;
    font-weight: bolder;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 2px;
    margin: 10px auto;
}

.welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}

.welcome button {
    margin: 20px auto;
}
</style>