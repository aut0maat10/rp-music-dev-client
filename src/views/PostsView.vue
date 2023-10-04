<template>
    <div class="posts-container w-100">
        <div class="post-wrapper">
            <h1>Blog</h1>
            <ul>
                <li v-for="post in posts" :key="post.id">
                    <h2>{{ post.title }}</h2>
                    <p>by {{ post.owner }}</p>
                    <p>{{ post.body }}</p>
                    
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
    const res = await axios.get(`http://localhost:8000/api/v1/posts/`);
    posts.value = res.data
});
</script>

<style lang="scss" scoped>

</style>