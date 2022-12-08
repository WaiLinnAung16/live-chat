<template>
    <nav>
        <div>
            <p>Hi {{ user.displayName }}</p>
            <p class="email">Logged in as {{ user.email }}</p>
        </div>
        <button @click="logout">Logout</button>
    </nav>
</template>

<script>

import useLogout from '../composables/useLogout';
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router';
export default {
    setup() {
        let { error, log_out } = useLogout();
        let { user } = getUser();
        let logout = async () => {
            await log_out();
            useRouter().push("/")
        }
        return { logout, error, user }
    }
}
</script>

<style >
nav {
    padding: 20px;
    /* border-bottom: 1px solid #eee; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
}

nav p.email {
    font-size: 14px;
    color: #999;
}
</style>