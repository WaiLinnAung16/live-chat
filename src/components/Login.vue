<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="logIn">
            <input type="email" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <div class="error" v-if="error">{{ error }}</div>
            <button>Login</button>
        </form>
    </div>
</template>

<script>


import { ref } from 'vue';
import useLogin from "../composables/useLogin"

export default {
    setup(props, context) {
        let email = ref('');
        let password = ref('');
        let { error, login } = useLogin();
        let logIn = async () => {
            let res = await login(email.value, password.value)
            if (res) {
                context.emit("chatRoom")
            }
        }
        return { email, password, logIn, error }
    }
}
</script>

<style>

</style>