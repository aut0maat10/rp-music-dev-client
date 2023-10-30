<template>
    <!-- <div v-if="loading"></div> -->
        <div class="w-100">
            <p>this is the PostDetail component</p>
            <h2 v-html="post.title"></h2>
            <p v-html="post.owner"></p>
            <p v-html="post.body"></p>
        </div>  
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from "vue-router";
import axios from 'axios'
let post = ref({})
//let loading = ref(true)
const route = useRoute();
onMounted(async() => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/${route.params.id}`);
    //post.value = res.data
    post.value = res.data
    //loading.value = false
});
</script>

<style scoped>

</style>