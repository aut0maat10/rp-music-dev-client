<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import Posts from './components/Posts.vue'
</script>

<template>
  <header class="max-h-screen lg:flex lg:place-items-center">
    <div class="outer">
    <div class="container">
      <h1 class="text-5xl text-magenta">Hi, my name is Robin.</h1>
      <h3>I'm a freelance web developer.</h3>
      <p>I have agency experience building landing pages and solutions for various clients. At the moment I'm looking for work as a cloud developer.</p>
    </div>
    
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper lg:flex lg:flex-wrap lg:place-items-start ">
      <nav class="w-100 mt-8 bg-magenta">
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/">Projects</RouterLink>
        <RouterLink to="/posts">Blog</RouterLink>
      </nav>
    </div>
  </div>
  </header>

  <RouterView />
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
} */

/* .logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
