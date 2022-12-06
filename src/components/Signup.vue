<template>
    <div>
        <h1>Sign Up</h1>
        <form @submit.prevent="signUp">
            <input type="text" placeholder="Display Name" v-model="displayName">
            <input type="email" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <div v-if="error" class="error">{{ error }}</div>
            <button>Sign Up</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import useSignup from "../composables/useSignup"
export default {
    setup() {
        let displayName = ref('');
        let email = ref('');
        let password = ref('');
        let { error, createAccount } = useSignup();
        let signUp = async () => {
            let res = await createAccount(email.value, password.value, displayName.value)
            if (res) {
                console.log(res);
            }
        }

        return { displayName, email, password, signUp, error }
    }
}
</script>

<style>

</style>