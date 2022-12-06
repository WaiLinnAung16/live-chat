<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="logIn">
            <input type="email" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <button>Login</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        let email = ref('');
        let password = ref('');
        let logIn = () => {
            console.log(email.value, password.value)
        }
        return { email, password, logIn }
    }
}
</script>

<style>

</style>