<template>
    <div class="posts-container w-100">
        <div class="post-wrapper">
            <h1>Blog</h1>
            <ul>
                <li v-for="post in posts" :key="post.id">
                    <h2 class="text-2xl py-2" v-html="post.title"></h2>
                    <p class="py-2" v-html="`by ${post.owner}`"></p>
                    <p class="py-2" v-html="post.blurb"></p>
                    
                    <!-- <button @click="deletePost(deletePost)">Delete</button> -->
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'
let posts = ref()
onMounted(async() => {
    const res = await axios.get(`http://env-rp-music-dev.eba-sxduvmc3.us-east-1.elasticbeanstalk.com/api/v1/posts`);
    posts.value = res.data
});
</script>

<style lang="scss" scoped>

</style>