<template>
    <div class="posts-container w-100">
        <div class="post-wrapper">
            <h1 class="text-2xl text-magenta pb-4">Blog Posts</h1>
            <!-- <div v-if="loading">Loading...</div> -->
            <ul>
                <li v-for="post in posts" :key="post.id">
                    <h2 class="text-2xl py-1 text-green" v-html="post.title"></h2>
                    <p class="py-2" v-html="`by ${post.owner}`"></p>
                    <p class="py-2" v-html="post.blurb"></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'
let posts = ref()
//let loading = ref(true)
onMounted(async() => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/posts`);
    posts.value = res.data;
    // loading.value = false;
});
</script>

<style lang="scss" scoped>

</style>