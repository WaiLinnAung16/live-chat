<template>
    <div class="chat-window">
        <div class="messages">
            <div class="single">
                <span class="created-at">3 mins ago</span>
                <span class="name">wailinn</span>
                <span class="message">Hi how r u</span>
            </div>
            <div class="single">
                <span class="created-at">3 mins ago</span>
                <span class="name">wailinn</span>
                <span class="message">Hi how r u</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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