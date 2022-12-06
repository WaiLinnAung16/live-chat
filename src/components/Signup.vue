<template>
    <div>
        <h1>Sign Up</h1>
        <form @submit.prevent="signUp">
            <input type="text" placeholder="Display Name" v-model="displayName">
            <input type="email" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <button>Sign Up</button>
        </form>
    </div>
</template>

<script>
import { auth } from '../../firebase/config';
import { ref } from 'vue';

export default {
    setup() {
        let displayName = ref('');
        let email = ref('');
        let password = ref('');
        let error = ref(null);
        let signUp = async () => {
            try {
                let res = await auth.createUserWithEmailAndPassword(email.value, password.value);
                if (!res) {
                    throw new Error("could not create new user")
                }
                console.log(res.user);
            } catch (err) {
                error.value = err.message;
                console.log(error.value);
            }
        }
        return { displayName, email, password, signUp }
    }
}
</script>

<style>

</style>